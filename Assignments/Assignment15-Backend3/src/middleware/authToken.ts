import config from "../config";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { LoginInfo } from "../interfaces/userInteface";
import { decode } from "punycode";

declare global {
  namespace Express {
    interface Request {
      userData?: any; // Modify 'any' to the actual type of userData if possible
    }
  }
}

interface DecodedToken {
  email: string;
  id: number;
}
export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Access Denied" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }

    const decoded = jwt.verify(token, config.ACCESS_TOKEN_KEY);
    req.userData = decoded; // Assuming the decoded payload contains user information
    next(); // Call next to pass control to the next middleware
  } catch (tokenError) {
    if (tokenError instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired" });
    } else if (tokenError instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ message: "Token verification failed" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
// export const generateAccessToken = (user: object) => {
//   return jwt.sign(user, config.ACCESS_TOKEN_KEY, { expiresIn: "15s" });
// };

export const generateAccessToken = (user: object) => {
  return jwt.sign(user, config.ACCESS_TOKEN_KEY);
};

export const generateRefreshToken = (user: object) => {
  return jwt.sign(user, config.REFRESH_TOKEN_KEY, { expiresIn: "365d" }); // Expires in 1 year
};

let refreshTokenArray: any[] = [];
export async function pushIntoRefresh(refresh: string) {
  await refreshTokenArray.push(refresh);
}

export async function refreshActionToken(req: Request, res: Response) {
  const refreshToken = req.body.token;
  // console.log(refreshToken);
  // console.log(refreshTokenArray);
  if (refreshToken === null || !refreshTokenArray.includes(refreshToken)) {
    return res.json({ message: "No refresh token" }); // Return a single response for invalid token or absence
  }

  try {
    const decoded = (await jwt.verify(
      refreshToken,
      config.REFRESH_TOKEN_KEY
    )) as DecodedToken;
    const userData = { email: decoded.email, id: decoded.id };

    const accessToken = generateAccessToken(userData);
    res.json({ accessToken });
  } catch (err) {
    res.sendStatus(403).json({ message: "No" }); // Handle verification errors
  }
}

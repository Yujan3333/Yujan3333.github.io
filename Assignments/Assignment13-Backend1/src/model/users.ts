import { promises as fs } from "fs";
import { SignupInfo,LoginInfo } from "../interfaces/userInteface";
import config from "../config";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken, pushIntoRefresh } from "../middleware/authToken";

// checks for the existence of the user in users.json file
async function checkUser(email: string) {
  try {
    const jsonString = await fs.readFile("users.json", "utf-8");
    const data = JSON.parse(jsonString);

    // uses data array to find the id element
    const user = data.find(
      (element: { email: string }) => element.email === email
    );
    return user || undefined;          // returns either user or undefined 
  } catch (err) {
    return err;
  }
}



export async function signup(result: SignupInfo) {
  try {
    const checkData = await checkUser(result.email);
    if (checkData !== undefined) return "User already exists";

    const jsonString = await fs.readFile("users.json", "utf-8");
    let existingData = JSON.parse(jsonString); // Parse the existing JSON data

    const maxId = Math.max(
      ...existingData.map((user: { id: number }) => user.id),
      0
    );

    const hashedPassword = await bcrypt.hash(result.password, 10); // 10 cost factor

    const userData = {
      id: maxId + 1,
      username: result.username,
      email: result.email,
      password: hashedPassword,
    }; 

    existingData.push(userData);

    // Convert the updated data back to JSON format
    const updatedJson = JSON.stringify(existingData, null, 2); // null and 2 for formatting

    // Write the updated JSON data back to the file
    fs.writeFile("users.json", updatedJson, "utf8");

    const user = { email: result.email, id: userData.id };

    const token = generateAccessToken(user);
    return { result, token };
  } catch (err) {
    return "Internal server error";
  }
}



export async function login(result: LoginInfo) {
    try {
        const checkData = await checkUser(result.email);
        if (checkData === undefined) return ({message: "User doesn't exist"});
    
        const matchPassword = await bcrypt.compare(result.password, checkData.password);
        if(!matchPassword){
            return ({message: "Invalid Credentials"});
        }

        const userData = { email: result.email, id: checkData.id };

        // FOR JWT
        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(userData);
        pushIntoRefresh(refreshToken);
        
        return { accessToken, refreshToken};
      } catch (err) {
        return ({message: "Internal server error"});
      }
}




// // Secret keys for tokens (should be kept secure)

// // Middleware to verify access token


// // Endpoint to refresh access token using refresh token
// app.post('/refresh-token', (req, res) => {
//   const { refreshToken } = req.body;

//   if (!refreshToken) {
//     return res.sendStatus(401);
//   }

//   jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
//     if (err) {
//       return res.sendStatus(403);
//     }

//     const accessToken = generateAccessToken({ userId: user.userId, username: user.username });
//     res.json({ accessToken });
//   });
// });

// // Function to generate access token
// const generateAccessToken = (user) => {
//   return jwt.sign(user, accessTokenSecret, { expiresIn: '15m' });
// };

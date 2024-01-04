import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Determine the path to the .env file, assuming it's one directory above the current directory
const pathToEnv = __dirname + "/../.env";

// Use the config method from dotenv to load the environment variables from the specified path
dotenv.config({ path: pathToEnv });

// Configuration object with default values or values from environment variables
const config = {
  serverPort: process.env.SERVER_PORT || 8000,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY || 'USERINFO',
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY || 'USERINFOREFRESH',
  database: {
    charset: "utf8",
    client: process.env.DB_CLIENT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    timezone: "UTC",
    user: process.env.DB_USER,
  },
};

export default config;

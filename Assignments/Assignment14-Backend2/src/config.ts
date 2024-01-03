import dotenv from "dotenv";

dotenv.config();

const config = {
    serverPort: process.env.SERVER_PORT || 8000,
    ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY || 'USERINFO',
    REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY || 'USERINFOREFRESH',
};


export default config;

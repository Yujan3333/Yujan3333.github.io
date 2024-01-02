import dotenv from "dotenv";

// Load environment variables from a .env file into process.env
dotenv.config();

// Configuration object with a serverPort property
const config = {
    serverPort: process.env.SERVER_PORT || 8000,
};

// Export the configuration object
export default config;

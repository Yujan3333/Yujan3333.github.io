import express from "express";
import config from "./config";
import routes from './routes'; // Module defining routes

// Creating an instance of the Express application
const app = express();

// Configuring middleware for parsing JSON requests & Configures Express to parse incoming requests with JSON payloads. This middleware parses the request body and makes the data available in req.body.
// app.use(express.json());

// Configuring middleware to use defined routes
app.use(routes);

// Starting the Express server and listening on the specified port
app.listen(config.serverPort, () => {
    console.log(`Server is listening on port: ${config.serverPort}`);
});
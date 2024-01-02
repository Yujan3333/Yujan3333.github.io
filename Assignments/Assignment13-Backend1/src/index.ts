import express from "express";
import config from "./config";
import routes from "./routes";

const app = express();

// define middleware before routing
app.use(express.json());
app.use(routes);

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);
import express from "express";
import config from "./config";
import routes from "./routes";
import { userLogger } from "./utils/logger";

const app = express();

// define middleware before routing
app.use(express.json());

app.use((req, res, next) => {
    userLogger.info('Incoming request', { body: req.body });
    next();
  });
  

app.use(routes);


console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);
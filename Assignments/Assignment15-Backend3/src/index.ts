import express from "express";
import config from "./config";
import routes from "./routes";
import { userLogger } from "./utils/logger";
import knexConfig, { baseKnexConfig } from "./knexFile";
// import knexConfig from "../knexFile";
import knex from "knex";
import { Request, Response } from "express";
import { func } from "joi";
const bodyParser = require("body-parser");

// Because baseConfig is a configuratio file, instantiation needs to be done before usign it
const knexInstance = knex(baseKnexConfig);

const app = express();

// body parser required before POST method insertion into db
app.use(bodyParser.json());

// define middleware before routing
// app.use(express.json());

// app.use((req, res, next) => {
//     userLogger.info('Incoming request', { body: req.body });
//     next();
//   });

// app.use(routes);



// ===================== DATBASE CRUD ==========================

// GETTING ALL OF THE INFORMATION
app.get("/todo", function (req: Request, res: Response) {
  knexInstance
    .raw("select * from todo")
    .then(function (todo) {
      const todoRows = todo.rows; // Extract the query results from 'todo'
      res.send(todoRows); // Send the extracted data using 'res.send'
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send("Internal Server Error"); // Handle any potential errors
    });
});

// GETTING JUST ONE INFROMATION
app.get("/todo/:id", function(req: Request, res: Response) {
    knexInstance
      .select('*')
      .from('todo')
      .where('user_Id', req.params.id) // Specify the column name and value for the condition
      .then(function(todo) {
        res.send(todo);
      })
      .catch(function(error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

// POST METHOD
app.post("/todo", function (req: Request, res: Response) {
    console.log(req.body);
    knexInstance
      .insert({ user_Id: req.body.user_Id, task: req.body.task })
      .into('todo')
      .then(function () {
        // Insertion successful, now retrieve the inserted record
        return knexInstance.select('*').from('todo');
      })
      .then(function (todo) {
        res.send(todo);
      })
      .catch(function (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

// PUT METHOD
app.put("/todo/:id", function (req: Request, res: Response) {
  knexInstance("todo")
    .where("id", req.params.id)
    .update({
      task: req.body.task,
    })
    .then(function () {
      knexInstance
        .select()
        .from("todo")
        .then(function (todo) {
          res.send(todo);
        });
    });
});

// DELETE METHOD
app.delete('/todo/:id', function (req:Request, res:Response){
    knexInstance('todo').where('id', req.params.id).del()
    .then(function(){
        knexInstance.select().from('todo').then(function(todo){
            res.send(todo);
        })
    })
})

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);

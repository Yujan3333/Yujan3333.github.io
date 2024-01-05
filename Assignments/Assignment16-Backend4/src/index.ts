import express from "express";
import config from "./config";
import routes from "./routes";
import { userLogger } from "./utils/logger";
import knexConfig, { baseKnexConfig } from "./knexFile";
// import knexConfig from "../knexFile";
import knex from "knex";
import { Request, Response } from "express";
import { func } from "joi";
import { buildMeta, getPaginationOptions } from "./utils/pagination";
import { PaginationInfo } from "./interfaces/pagination";




const bodyParser = require("body-parser");

// Because baseConfig is a configuration file, instantiation needs to be done before using it
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
app.get("/todo", async function (req: Request, res: Response) {

  // gets the page and limit values from query 
  const {page,limit}:PaginationInfo = req.query;

  // calls pagination function for calculated offest value
  const pageDetails = getPaginationOptions({ page, limit });

  // selects total number of rows -> required for meta data
  const total = await knexInstance.raw('select count(*) as count from todo');

  // builds meta data
  const meta = buildMeta(total.rows[0].count, limit, page);

  knexInstance
  .select('*')
  .from('todo')
  .limit(pageDetails.limit)
  .offset(pageDetails.offset)
  .then(function (todo) {
    const todoRows = todo; // No need for todo.rows as the response is already the rows
    res.json({
      data: todoRows,
      meta: {
        page: meta.page,
        limit: meta.limit,
        total: meta.total
      }
    });
  })
  .catch(function (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  });

});



// GETTING JUST ONE INFROMATION
// app.get("/todo/:id", function(req: Request, res: Response) {
//     knexInstance
//       .select('*')
//       .from('todo')
//       .where('user_Id', req.params.id) // Specify the column name and value for the condition
//       .then(function(todo) {
//         res.send(todo);
//       })
//       .catch(function(error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//       });
//   });

// POST METHOD
// app.post("/todo", function (req: Request, res: Response) {
//     console.log(req.body);
//     knexInstance
//       .insert({ user_Id: req.body.user_Id, task: req.body.task })
//       .into('todo')
//       .then(function () {
//         // Insertion successful, now retrieve the inserted record
//         return knexInstance.select('*').from('todo');
//       })
//       .then(function (todo) {
//         res.send(todo);
//       })
//       .catch(function (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//       });
//   });

// PUT METHOD
// app.put("/todo/:id", function (req: Request, res: Response) {
//   knexInstance("todo")
//     .where("id", req.params.id)
//     .update({
//       task: req.body.task,
//     })
//     .then(function () {
//       knexInstance
//         .select()
//         .from("todo")
//         .then(function (todo) {
//           res.send(todo);
//         });
//     });
// });

// DELETE METHOD
// app.delete('/todo/:id', function (req:Request, res:Response){
//     knexInstance('todo').where('id', req.params.id).del()
//     .then(function(){
//         knexInstance.select().from('todo').then(function(todo){
//             res.send(todo);
//         })
//     })
// })

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);

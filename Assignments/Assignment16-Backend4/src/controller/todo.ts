import {Request, Response} from "express";

import { ValidationError } from 'joi';
import {todoReqBody, todoReqQuery} from "../schema/todoValidation";

import * as todoService from "../service/todo";
import { StatusCodes } from "http-status-codes";

declare global {
    namespace Express {
      interface Request {
        userData?: any; // Modify 'any' to the actual type of userData if possible
      }
    }
  }

// export const getTodo = async (req:Request, res:Response) => {
//     // console.log(req.userData);
//     // console.log(req.params.userData);
//     // const toDoData = await todoService.getTodo();
//     // return res.json(toDoData);
// };

export const getTodoById = async (req:Request, res:Response) => {
    const id = req.userData.id;
    const data = await todoService.getTodoById(id);
    return res.json(data);
};


// export const getTodoById = async (req:Request, res:Response) => {
//     try{
//         const result = await todoReqQuery.validateAsync(req.params);
//         // const {email,username,password} = req.body;
//         const data = await todoService.getTodoById(result.id);
//         res.json(data)
//         // const id = req.userData.id;
//         // const data = await todoService.getTodoById(id);
//         // return res.json(data);
//     }
//     catch(error){
//         if (error instanceof ValidationError && error.isJoi) {
//             // Handle Joi validation error
//             return res.status(422).json({message:"Invalid data"})
//           } else {
//             // Handle other types of errors
//             res.status(500).json({message:"Internal server error"});
//           }
//     }
// };



export const createTodo = async (req:Request, res:Response) => {
    try{
        const userId = req.userData.id;
        const {task} = req.body;
        // console.log(userId,task);
        const data = await todoService.createTodo(task,userId);
        return res.json({
            message: data,
        });
    }
    catch(error){
        return res.status(500).json({ error: 'Internal Server Error' }); 
    }
};


export const deleteTodoById = async (req:Request, res:Response) => {
    try{
        // + converts this string into number
        
        const id = +req.params.id;
        const userId = req.userData.id;
        // console.log(id);
        const data = await todoService.deleteTodoById(id,userId);

        // return data;
        if(data === 404){
            return res.status(404).json({
                message: 'Todo Item not found',
            })
        }
        return res.status(200).json({
            message: 'Todo item deleted successfully',
        })
    }
    catch(error){
        return res.status(500).json({ error: 'Internal Server Error' });  
    }
};






export const updateTodo = async (req:Request, res:Response) => {
    try{
        // + converts this string into number
        const taskId = +req.params.id;
        const userId = req.userData.id;
        const {task} = req.body;
        // console.log(taskId,userId,task);
        const data = await todoService.updateTodo(userId, taskId, task);
        return res.json({
            message:data
        })
    }
    catch{
        return res.status(500).json({ error: 'Internal Server Error' });  
    }
};



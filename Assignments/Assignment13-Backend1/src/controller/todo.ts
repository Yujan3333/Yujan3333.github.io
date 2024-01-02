import {Request, Response} from "express";


import * as todoService from "../service/todo";

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
        console.error('Error:', error);
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
        return res.json({
            message: data,
        })
    }
    catch{
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



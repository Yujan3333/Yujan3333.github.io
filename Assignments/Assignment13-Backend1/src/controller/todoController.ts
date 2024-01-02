import { Request, Response } from "express";

import * as todoService from "../service/todoService";

declare global {
  namespace Express {
    interface Request {
      userData?: any; // Modify 'any' to the actual type of userData if possible
    }
  }
}

// Route handler to get a TODO item by ID
export const getTodoById = async (req: Request, res: Response) => {
    // Extracting user ID from userData in the request
    const id = req.userData.id;
    
    // Calling todoService to get TODO item by ID
    const data = await todoService.getTodoById(id);
    
    // Sending the retrieved data as a JSON response
    return res.json(data);
};

// Route handler to create a new TODO item
export const createTodo = async (req: Request, res: Response) => {
    try {
        // // Extracting user ID from userData in the request
        // const userId = req.userData.id;

        const { task } = req.body;
        
        // Calling todoService to create a new TODO item
        const data = await todoService.createTodo(task);
        
        // Sending a JSON response with a success message
        return res.json({
            message: data,
        });
    } catch (error) {
        // Handling errors and sending a 500 Internal Server Error response
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route handler to delete a TODO item by ID
export const deleteTodoById = async (req: Request, res: Response) => {
    try {
        // Extracting task ID  from request parameters and userData
        const id = +req.params.id;
        
        // Calling todoService to delete a TODO item by ID
        const data = await todoService.deleteTodoById(id);
        
        // Sending a JSON response with a success message
        return res.json({
            message: data,
        });
    } catch {
        // Handling errors and sending a 500 Internal Server Error response
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route handler to update a TODO item
export const updateTodo = async (req: Request, res: Response) => {
    try {
        // Extracting task ID, user ID, and task data from request parameters and body
        const taskId = +req.params.id;
        const userId = req.userData.id;
        const { task } = req.body;
        
        // Calling todoService to update a TODO item
        const data = await todoService.updateTodo(userId, taskId, task);
        
        // Sending a JSON response with a success message
        return res.json({
            message: data,
        });
    } catch {
        // Handling errors and sending a 500 Internal Server Error response
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
import * as todoModel from "../model/todo";



export const getTodoById = async (id:number) => {
    const data = await todoModel.getTodoById(id);
    return data; 
}

export const createTodo = async (task:string, userId:number) => {
    const data = await todoModel.createTodo(task,userId);
    return data; 
}

export const updateTodo = async (userId:number, taskId:number, task:string) => {
    const data = await todoModel.updateTodo(userId, taskId, task);
    return data;
}

export const deleteTodoById = async (id:number,userId:number) => {
    const data = await todoModel.deleteTodoById(id,userId);
    return data;
}
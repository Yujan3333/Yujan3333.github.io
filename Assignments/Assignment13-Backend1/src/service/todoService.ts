import * as todoModel from "../model/todo";

// Function to get a TODO item by ID
export const getTodoById = async (id: number) => {
    // Calling the corresponding function in the todoModel to get TODO item by ID
    const data = await todoModel.getTodoById(id);
    return data;
}

// Function to create a new TODO item
export const createTodo = async (task: string) => {
    // Calling the corresponding function in the todoModel to create a new TODO item
    const data = await todoModel.createTodo(task);
    return data;
}

// Function to update a TODO item
export const updateTodo = async ( taskId: number, task: string) => {
    // Calling the corresponding function in the todoModel to update a TODO item
    const data = await todoModel.updateTodo( taskId, task);
    return data;
}

// Function to delete a TODO item by ID
export const deleteTodoById = async (id: number, ) => {
    // Calling the corresponding function in the todoModel to delete a TODO item by ID
    const data = await todoModel.deleteTodoById(id);
    return data;
}

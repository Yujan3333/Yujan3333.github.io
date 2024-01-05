import { promises as fs } from "fs";
import { StatusCodes } from "http-status-codes";


// using async-await because readFile is asynchronous operation when read from another file
// export async function getTodo() {
//   try {
//     const jsonString = await fs.readFile("todo.json", "utf-8");
//     const data = JSON.parse(jsonString);
//     return data;
//   } catch (err) {
//     return err;
//   }
// }

export async function getTodoById(id: number) {
  try {
    const jsonString = await fs.readFile("todo.json", "utf-8");
    const data = JSON.parse(jsonString);

    // Filter data array to find all elements with the matching id
    const todoItems = data.filter((element: { userId: number }) => element.userId === id);
    return todoItems.length > 0 ? todoItems : "Tasks not found for this id";
  } catch (err) {
    return err;
  }
}


export async function createTodo(task: string,userId:number) {
  try {
    // Read the existing file first
    const jsonString = await fs.readFile("todo.json", "utf-8");
    let existingData = JSON.parse(jsonString); // Parse the existing JSON data

    // map returns new Array containing only ids of each task, then max function finds the maximum value, if the array is empty then default will be 0 
    const maxId = Math.max(...existingData.map((task: { taskId: number }) => task.taskId), 0);

    // Add the new taskData
    const taskData = { userId: userId, taskId: maxId+1, task: task }; 
    existingData.push(taskData);

    // Convert the updated data back to JSON format
    const updatedJson = JSON.stringify(existingData, null, 2); // null and 2 for formatting

    // Write the updated JSON data back to the file
    fs.writeFile("todo.json", updatedJson, "utf8");
    return "Task has been added";
  } catch (error) {
    return error;
  }
}

export async function updateTodo(userId:number, taskId:number, task:string) {
    try {
        // Read the existing file first 
        const jsonString = await fs.readFile('todo.json', 'utf-8');
        let existingData = JSON.parse(jsonString); // Parse the existing JSON data
        
        // finds the index to update -> same as delete condition -> if condition is true, get the index and update
        const taskToUpdateIndex = existingData.findIndex((element: { userId: number; taskId: number }) => (element.userId === userId && element.taskId === taskId));
        // console.log(taskToUpdateIndex);
        if (taskToUpdateIndex !== -1) {
            // Update the task in the array by its index
            existingData[taskToUpdateIndex].task = task;
            
            // Convert the updated data (existingData) back to JSON format
            const updatedJson = JSON.stringify(existingData, null, 2); // null and 2 for formatting
            
            // Write the updated JSON data back to the file
            await fs.writeFile('todo.json', updatedJson, 'utf-8');
            
            return 'Task has been updated';
        } else {
            return 'Either that task belongs to someone else or Task not found';
        }
    } catch (error) {
        return error;
    }
}

export async function deleteTodoById(id: number, userId: number) {
  try {
    // Read the existing file first
    const jsonString = await fs.readFile('todo.json', 'utf-8');
    let existingData = JSON.parse(jsonString); // Parse the existing JSON data

    // filters for the existence of userId and taskId match, if there's a match -> condition becomes false -> filters out that element
    const updatedData = existingData.filter(
      (element: { userId: number; taskId: number }) => !(element.userId === userId && element.taskId === id)
    );

    if (updatedData.length < existingData.length) {
      await fs.writeFile('todo.json', JSON.stringify(updatedData, null, 2), 'utf-8');
      return 200;
    } else {
      return 404;
      }
  } catch (error) {
    return error;
  }
}



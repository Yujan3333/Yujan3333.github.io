import { promises as fs } from "fs";


//get query
export async function getTodoById(id: number) {
    try {
        // Read the content of the "todo.json" file
        const jsonString = await fs.readFile("todoSimulateDB.json", "utf-8");
        const data = JSON.parse(jsonString);

        // Filter the data array to find all elements with the matching user ID
        const todoItems = data.filter((element: { userId: number }) => element.userId === id); //the parameter element is expected to be an object with a userId property of type number.

        // Return the matching TODO items or a message if not found
        return todoItems.length > 0 ? todoItems : "Tasks not found for this id";
    } catch (err) {
        // Return any encountered error
        return err;
    }
}

  
//create todo query
export async function createTodo(task: string) {
    try {
        // Read the existing content of the "todo.json" file
        const jsonString = await fs.readFile("todoSimulateDB.json", "utf-8");
        let existingData = JSON.parse(jsonString);

        // Find the maximum task ID in existing data
        const maxId = Math.max(...existingData.map((task: { taskId: number }) => task.taskId), 0);  //This effectively converts the array of taskId values into separate arguments for the Math.max function. Math.max is used to find the maximum value among the taskId values, 0 is added to ensure that if the array is empty (i.e., there are no tasks in existingData), the result defaults to 0.

        // Add the new task data with an incremented task ID
        const taskData = { taskId: maxId + 1, task: task };
        existingData.push(taskData);

        // Convert the updated data back to JSON format
        const updatedJson = JSON.stringify(existingData, null, 2);

        // Write the updated JSON data back to the file
        await fs.writeFile("todo.json", updatedJson, "utf8");

        // Return a success message
        return "Task has been added";
    } catch (error) {
        // Return any encountered error
        return error;
    }
}

  
export async function updateTodo( taskId: number, task: string) {
    try {
        // Read the existing content of the "todo.json" file
        const jsonString = await fs.readFile('todoSimulateDB.json', 'utf-8');
        let existingData = JSON.parse(jsonString);

        // Find the index of the task to update
        const taskToUpdateIndex = existingData.findIndex((element: { taskId: number }) => ( element.taskId === taskId));

        if (taskToUpdateIndex !== -1) {
            // Update the task in the array by its index
            existingData[taskToUpdateIndex].task = task;

            // Convert the updated data back to JSON format
            const updatedJson = JSON.stringify(existingData, null, 2);

            // Write the updated JSON data back to the file
            await fs.writeFile('todo.json', updatedJson, 'utf-8');

            // Return a success message
            return 'Task has been updated';
        } else {
            // Return a message if the task is not found
            return 'Either that task belongs to someone else or Task not found';
        }
    } catch (error) {
        // Return any encountered error
        return error;
    }
}

  
export async function deleteTodoById(id: number) {
    try {
        // Read the existing content of the "todo.json" file
        const jsonString = await fs.readFile('todoSimulateDB.json', 'utf-8');
        let existingData = JSON.parse(jsonString);

        // Filter out the task with matching IDs
        const updatedData = existingData.filter(
            (element: { taskId: number }) => !( element.taskId === id)
        );

        if (updatedData.length < existingData.length) {
            // Write the updated JSON data back to the file
            await fs.writeFile('todo.json', JSON.stringify(updatedData, null, 2), 'utf-8');

            // Return a success message
            return 'Task deleted successfully';
        } else {
            // Return a message if the task is not found
            return "This task doesn't exist or doesn't belong to the user";
        }
    } catch (error) {
        // Return any encountered error
        return error;
    }
}

  
import {Router} from "express";

import {
    createTodo,
    deleteTodoById,
    getTodoById,
    updateTodo,
} from "../controller/todoController";

const router = Router();


// Define a route for retrieving a TODO item by ID (GET method)
router.get("/:id", getTodoById);

// Define a route for deleting a TODO item by ID (DELETE method)
router.delete("/:id", deleteTodoById);

// Define a route for creating a new TODO item (POST method)
router.post("/create", createTodo);

// Define a route for updating a TODO item by ID (PUT method)
router.put("/update/:id", updateTodo);


export default router; 
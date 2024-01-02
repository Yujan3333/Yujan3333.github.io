import {Router} from "express";

import {
    createTodo,
    deleteTodoById,
    getTodoById,
    // getTodo,
    updateTodo,
} from "../controller/todo";

const router = Router();


// router.get("/", authenticateToken, getTodo);

router.get("/:id", getTodoById);

router.delete("/:id", deleteTodoById);

// // can also use /todo as an endpoint with the POST and PUT HTTP methods; however, using specific endpoints might be more appropriate
router.post("/create", createTodo);

router.put("/update/:id", updateTodo);


export default router; 
import {Router} from "express";

// middleware to validate HTTP methods data
import {validateReqQuery, validateReqBody } from "../middleware/formValidator";
import {
    createTodo,
    deleteTodoById,
    getTodoById,
    // getTodo,
    updateTodo,
} from "../controller/todo";

const router = Router();


// router.get("/", authenticateToken, getTodo);

router.get("/:id", validateReqQuery, getTodoById);

router.delete("/:id", validateReqQuery, deleteTodoById);

// // can also use /todo as an endpoint with the POST and PUT HTTP methods; however, using specific endpoints might be more appropriate
router.post("/create", validateReqBody, createTodo);

router.put("/update/:id", validateReqBody, validateReqQuery, updateTodo);


export default router; 
import {Router} from "express";
import {authenticateToken, refreshActionToken} from "../middleware/authToken";
import todoRoutes from "./todo";
import usersRoutes from "./users";


const router = Router();


// to do CRUD operations on todo list, you need to login first, authenticateToken is the middleware that verifies login access
router.use("/todo", authenticateToken, todoRoutes);
  
// for user login and signup 
router.use("/users",usersRoutes);

// this endpoint refreshes access token 
router.post("/token", refreshActionToken);


export default router; 
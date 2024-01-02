import {Router} from "express";

import {
    login,
    signup
} from "../controller/usersController";

const router = Router();

//Creating a route for user login
router.post("/login", login);

//Creating a route for user signup
router.post("/signup", signup);


export default router; 
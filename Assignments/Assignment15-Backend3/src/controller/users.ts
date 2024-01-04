import {Request, Response} from "express";

// data validation without middleware
import { ValidationError } from 'joi';
import {loginSchema, signupSchema} from "../schema/userValidation";

import * as userService from "../service/users";


export const signup = async (req:Request, res:Response) => {
    try{
        const result = await signupSchema.validateAsync(req.body);
        const data = await userService.signup(result.email, result.username, result.password)
        res.json(data)
    }
    catch(error){
        if (error instanceof ValidationError && error.isJoi) {
            // Handle Joi validation error
            return res.status(422).json({message:"Invalid data"})
          } else {
            // Handle other types of errors
            res.status(500).json({message:"Internal server error"});
          }
    }
};

export const login = async (req:Request, res:Response) => {
    try{
        const result = await loginSchema.validateAsync(req.body);
        const data = await userService.login(result.email, result.password);
        res.json(data);
    }
    catch(error){
        if (error instanceof ValidationError && error.isJoi) {
            // Handle Joi validation error
            return res.status(422).json({message:"Invalid data"})
          } else {
            // Handle other types of errors
            res.status(500).json({message:"Internal server error"});
          }
    }
};


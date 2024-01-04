import { todoReqQuery, todoReqBody } from "../schema/todoValidation";
import { ValidationError } from 'joi';
import { Request, Response, NextFunction } from "express";


// middleware for todo validation -> validateReqQuery for GET methods, validateReqBody for POST methods, both for PUT method

export async function validateReqQuery(req: Request, res: Response, next: NextFunction) {
  try{
    const result = await todoReqQuery.validateAsync(req.params);
    req.query = result;
    next();
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


  export async function validateReqBody(req: Request, res: Response, next: NextFunction) {
    try{
      const result = await todoReqBody.validateAsync(req.body);
      req.body = result;
      next();
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
  
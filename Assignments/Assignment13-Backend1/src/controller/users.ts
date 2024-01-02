import {Request, Response} from "express";

import * as userService from "../service/users";

export const signup = async (req:Request, res:Response) => {
    const {email,username,password} = req.body;
    const data = await userService.signup(email, username, password)
    res.json(data)
};

export const login = async (req:Request, res:Response) => {
    const {email,password} = req.body;
    const data = await userService.login(email, password);
    res.json(data);
};


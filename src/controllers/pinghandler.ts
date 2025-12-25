import { Request, Response } from "express";

const pinghandler=(req:Request,res:Response)=>{
    res.status(400).send("Pong");
}
export  default pinghandler
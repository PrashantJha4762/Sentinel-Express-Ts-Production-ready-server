import { Request, Response } from 'express';

const pinghandler=(req:Request,res:Response)=>{
    res.status(400).send("Pong");
    console.log(`Username: ${req.query.name}`)
}
export  default pinghandler
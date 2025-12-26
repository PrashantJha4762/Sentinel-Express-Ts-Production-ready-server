import { NextFunction, Request, Response } from 'express'
import {ZodObject} from 'zod'
export const validaterequestbody=(schema:ZodObject<any>)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("validating request body");
            await schema.parseAsync(req.body)
            console.log("request body is valid");
            next();
        }
        catch(error){
            console.log("request body is invalid");
            res.status(400).json({
                message:"Invalid request body",
                success:false,
                error:error
            })
        }
    }
}
export const validaterequestquery=(schema:ZodObject<any>)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("validating request query");
            await schema.parseAsync(req.query)
            console.log("request query is valid");
            next();
        }
        catch(error){
            console.log("request query is invalid");
            res.status(400).json({
                message:"Invalid request query",
                success:false,
                error:error
            })
        }
    }
}
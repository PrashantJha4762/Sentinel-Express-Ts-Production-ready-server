import express,{Request,Response} from 'express'
import { serverconfig } from './config';
const app=express();

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello world');
})
app.listen(serverconfig.port,()=>{
    console.log(`Server is running at ${serverconfig.port}`);
})
import express from 'express'
import { serverconfig } from './config';
import pinghandler from './controllers/pinghandler';
const app=express();

app.get('/ping',pinghandler)
app.listen(serverconfig.port,()=>{
    console.log(`Server is running at ${serverconfig.port}`);
})
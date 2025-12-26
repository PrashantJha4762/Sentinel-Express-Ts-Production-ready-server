import express from 'express'
import { serverconfig } from './config';
import v1router from './routes/v1/indexrouter';
import { AppErrorHandler, GenericErrorHandler } from './middlewares/errorhandeling';
const app=express();
app.use(express.json());
app.use('/api/v1',v1router);
app.use(AppErrorHandler)
app.use(GenericErrorHandler)
app.listen(serverconfig.port,()=>{
    console.log(`Server is running at ${serverconfig.port}`);
})
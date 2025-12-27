import express from 'express'
import { serverconfig } from './config';
import v1router from './routes/v1/indexrouter';
import { AppErrorHandler, GenericErrorHandler } from './middlewares/errorhandeling';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
const app=express();
app.use(express.json());
app.use(attachCorrelationIdMiddleware)
app.use('/api/v1',v1router);
app.use(AppErrorHandler)
app.use(GenericErrorHandler)
app.listen(serverconfig.port,()=>{
    logger.info(`Server is running at ${serverconfig.port}`);
})
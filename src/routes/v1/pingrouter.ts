import express from 'express'
import pinghandler from '../../controllers/pinghandler';
const pingrouter=express.Router();
pingrouter.get('/',pinghandler);
pingrouter.get('/health',(req,res)=>{
    res.send("Hello jis").status(200);
})
export default pingrouter
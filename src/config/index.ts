import dotenv from 'dotenv'
type Serverconfig={
    port:number
}
function loadenv(){
    dotenv.config();
}
loadenv();
export const serverconfig:Serverconfig={
    port:Number(process.env.PORT)||3001
}
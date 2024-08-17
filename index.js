const express=require("node:http");
const server = express.createServer((req,res)=>{
    if(req.url=="/HI"){
        console.log("HI")
    }
    else if (req.url=="/GET"){
        console.log("GET")
    }
    
})
server.listen(8080,()=>{
    console.log("Server kumbudren sami");
})
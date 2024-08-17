
const {spawn}=require("child_process");
// const app=express();
// app.get("/",(req,res)=>{
//     res.status(200).send("Landing Page")
//     console.log("HI")
// })
// app.listen(8080,()=>{
//     console.log("Listening on Port 8080");
// })
const childPython = spawn('python',['exec.py'])
function fetchipaddr(){
    let ipv4_found=false;
    let ip;
    childPython.stdout.on("data",(data)=>{
        for (let k of `${data}`.split(" ")){
            if (k=="IPv4"){
                ipv4_found=true;
            }
            if (ipv4_found==true){
                if ("0123456789".includes(k[0])){
                    ip=k;
                    break;

                }else{
                    continue;
                }
            }

        }
        document.getElementById("text").innerText=ip;
    })
}
fetchipaddr();
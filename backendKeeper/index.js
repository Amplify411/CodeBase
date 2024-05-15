import express from "express";
import cors from "cors"

const app=express();
const port=3000;

app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({message: "Hi from backend"});
});

app.listen(port,() => {
    console.log(`Your server is runng in ${port} port.`);
});





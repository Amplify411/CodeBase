import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import pg from "pg";

const app=express();
const port=3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "123456",
    port: 5432,
  });

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.status(200).json({message: "Hi from backend"});
});

app.listen(port,() => {
    console.log(`Your server is runng in ${port} port.`);
});





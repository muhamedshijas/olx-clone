import 'dotenv/config'
import  express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from 'path';
import dbConnect from './config/dbConnect.js';
import userRouter from './routes/userRouter.js'
dbConnect()
const app=express();

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))
app.use(
  cors({
    origin: [
      "http://localhost:3000", 
    ],
    credentials: true,
  })
);

app.use('/',userRouter)

app.listen(5000,()=>{console.log("started on 5000")})
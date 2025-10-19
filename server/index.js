import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app=express();

app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));
app.use(cookieParser());
app.use("/auth",authRoute);


app.listen(process.env.PORT,()=>{
    console.log("The port is listening succesfully")
})
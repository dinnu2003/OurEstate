import express from "express";
import 'dotenv/config' 
import authRoute from "./routes/authRoute.js"
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();

app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use("/auth",authRoute);


app.listen(process.env.PORT,()=>{
    console.log("The port is listening succesfully")
})
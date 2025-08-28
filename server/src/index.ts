import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from './app.js';


connectDB()
.then(()=>{
    const server = app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })

    server.on("error", (error) => {
        console.error("Server Error:", error);
        throw error;
      });
})
.catch((err)=> {
    console.log("MongoDB connection failed !!! ", err);
    
})
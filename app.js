import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import todoRoute from "./server/routes/todo.js"
import cors from 'cors'


// Load environment variables from .env file
config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend URL
  }))
  app.use(express.json())
//using routes
app.use("/api", todoRoute)

// Access environment variable
const port = process.env.PORT || 3000; // Provide a default port if not set in .env

//connecting to the database
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI).then(()=>{
    console.log("Connected!")
}, (err)=>{
    console.error("Can't connect to the MongoDB!")
})

console.log(`Configured Port: ${port}`);


app.listen(port, () => {
  console.log('Server is running on: http://localhost:', port);
});

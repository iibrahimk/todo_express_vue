import express from "express"; // Import express, not just 'router'
import todos from "../models/todos.js";

const router = express.Router(); // Create a router instance

// Define the GET route to fetch all todos
router.get("/getalltodos", async (req, res) => {
    console.log("TODO CALLED!")
  try {
    const allTodos = await todos.find({});
    res.json(allTodos); // Send the todos as a JSON response
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Internal Server Error" }); // Handle errors
  }
});

//deleting a task
router.delete('/deletetask/:id', async ( req, res)=>{
    console.log(req.params)
    try{
        const deletingQuery = await todos.findOneAndDelete({taskid: req.params.id})
        if(deletingQuery){
            res.send("Success").status(200)
        }
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
})

//adding a new task
router.post("/addnewtask", async (req, res)=>{
    const newTask = new todos({
        body: req.body.name
    })
    try{
        newTask.save()
        res.sendStatus(200)
    }
    catch(err){
        res.sendStatus(500)
    }
})

//updating a task
router.put('/updateTask/:id', async (req, res)=>{
    try{
        const update = await todos.findOneAndUpdate({taskid: req.params.id}, {completed: true})
        if(update){
            res.sendStatus(200)
        }
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
})

export default router;

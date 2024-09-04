import mongoose from "mongoose";

const todoSchema =  new mongoose.Schema({
    completed:{
        type: Boolean,
        required: true,
        default: false
    },
    taskid:{
        type: String,
        required: true,
        default: Date.now()
    },
    body:{
        type:String,
        required: true
    }

})

export default mongoose.model("todos", todoSchema);
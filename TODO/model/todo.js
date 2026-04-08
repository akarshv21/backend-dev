import mongoose from "mongoose";


const todoSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true
    
  },
  title:{
    type:String,
    required:true

  },
  description:{
    type:String,
    required:true
  },
  status:{
    type:Boolean,
    default:false
  }
},{
 timestamp:true
}
)

const Todo = mongoose.model('Todo', todoSchema);

export  default Todo;
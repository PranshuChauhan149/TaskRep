import mongoose from "mongoose";

const taskSchmea = new mongoose.Schema(
  {
    task:{
      type:String,
      required:true,
    },
    time:{
      type:String,
      required:true
    },
    completed:{
      type:Boolean,
      default:false
    },
    date:{
      type:String,
      required:true
    }
  }
  ,{timestamps:true})

  const Task = mongoose.model("Task",taskSchmea);

  export default Task
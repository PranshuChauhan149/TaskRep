import User from "../models/User.models.js"


export const currentUser =async (req,res) =>{
  try{
    const userId  = req.userId;
    const user =await User.findById(userId).select("-password");
    if(!user){
      return res.json({success:false,message:"User Not Login"})
    }
    else{
      return res.json({success:true,message:user})
    }

  }
  catch(error){
    return res.json({success:false,message:"currentUser Error"})
  }
}
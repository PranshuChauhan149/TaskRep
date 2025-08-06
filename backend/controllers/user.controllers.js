import uploadOnCloudinary from "../config/cloudinary.js";
import genToken from "../config/Token.js";
import User from "../models/User.models.js";
import bcrypt from 'bcrypt'
export const SignUp = async (req,res) =>{
  try{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
    return res.json({success:false,message:"All fields are required"})
    }

    const checkUsername =await User.findOne({username});
    const checkEmail =await User.findOne({email});
    if(checkUsername){
      return res.json({success:false,message:"Username Already exists"})
    } 
    if(checkEmail){
      return res.json({success:false,message:"Email Already exists"})
    } 

    const hashPassword = await bcrypt.hash(password,10);

    const user =await User.create({
      username,
      email,
      password:hashPassword
    })

    const token =await genToken(user._id);

    res.cookie("token",token,{
       httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
      secure: false,
    })

    if(user){
      return res.json({success:true,message:user})
    }
    else{
      return res.json({success:false,message:"Not created SignUp Successfully"})
    }

  }
  catch(error){
      return res.json({success:false,message:"signUp error"})
  }
}


export const Login =async (req,res)=>{
  try{
    const {email,password} = req.body;
  if(!email || !password){
    return res.json({success:false,message:"All Field required"})
  }

  const user =await User.findOne({email});
  if(!user){
    return res.json({success:false,message:"User Not Found"})
  }
  else{
    const hashPassword =await bcrypt.compare(password,user.password);
    if(hashPassword){

      const token =await genToken(user._id);
      res.cookie("token",token,{
       httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
      secure: false,
      })

      return res.json({success:true,message:user})
    }
    else{
      return res.json({success:false,message:"Incorrect password"})
    }
    
  }

  }
  catch(error){
     return res.json({success:false,message:"Login error"})
  }
}


export const Logout = async(req,res)=>{
  try{
     await  res.clearCookie("token");
      return res.json({success:true,message:"Logout successfully"})
  }
  catch(error){
     return res.json({success:false,message:"Logout error"})
  }
}


export const updatedProfile = async (req, res) => {
  try {
    
    const userId = req.userId;
     let imageUrl = req.body.image || "";
    if (req.file) {
      imageUrl = await uploadOnCloudinary(req.file.path);
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { image: imageUrl },
      { new: true } // to return the updated document
    );

    if (user) {
      return res.status(200).json({ success: true, user });
    } else {
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

import jwt from 'jsonwebtoken'

const AuthUser = async (req,res,next)=>{
 try{
   const token = req.cookies?.token;
  if(!token){
    return res.json({success:false,message:"User Not Login"})
  }
  else{
    const decoded = jwt.verify(token,process.env.TOKEN_SCRET);
   req.userId = decoded.id;

      next();
    
  }
 }

   catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
}

export default AuthUser
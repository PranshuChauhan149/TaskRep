import Contact from "../models/Contact.model.js";


export const contact = async (req,res) =>{
  try{
    const {name,email,message} = req.body;

  if(!name || !email || !message){
    return res.json({success :false,message:"All feild are required"})
  }

  const contactC =await Contact.create({
    name,
    email,
    message
  })
  if(contactC){
    return res.json({success :true,message:contactC})
  }
  }
  catch(error){
return res.json({success :false,message:"message error"})
  }


}

export default contact;
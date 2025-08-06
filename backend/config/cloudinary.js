import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from "dotenv"

dotenv.config();


 cloudinary.config({
       cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API, 
        api_secret: process.env.CLOUD_API_SECRECT
    });


const uploadOnCloudinary = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath);

    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath); // ✅ safe delete
      
      return result.secure_url;
    }
  } catch (err) {
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath); // ✅ also delete in error case
    }
    console.error("Cloudinary Upload Error:", err);
    return null;
  }
}

export default uploadOnCloudinary;

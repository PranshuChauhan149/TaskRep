import express from 'express'
import { currentUser } from '../controllers/Auth.js';
import AuthUser from '../middlewares/isAuth.js';
import { updatedProfile } from '../controllers/user.controllers.js';
import upload from '../middlewares/multer.js';


const currentUserRoute = express.Router();

currentUserRoute.get("/current",AuthUser,currentUser)
currentUserRoute.put(
  "/profile-edit",
  AuthUser,
  upload.single("image"),
  updatedProfile // only this handles updating logic
);

export default currentUserRoute
import express from 'express'
import { Login, Logout, SignUp } from '../controllers/user.controllers.js';

const UserRouter = express.Router();

UserRouter.post("/signup",SignUp)
UserRouter.post("/login",Login)
UserRouter.post("/logout",Logout)




export default UserRouter;
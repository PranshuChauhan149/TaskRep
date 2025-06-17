import express from 'express'
import { currentUser } from '../controllers/Auth.js';
import AuthUser from '../middlewares/isAuth.js';

const currentUserRoute = express.Router();

currentUserRoute.get("/current",AuthUser,currentUser)

export default currentUserRoute
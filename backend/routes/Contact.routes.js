import express from 'express'

import contact from '../controllers/Contact.controller.js';
import AuthUser from '../middlewares/isAuth.js';

const ContactRouter = express.Router();

ContactRouter.post("/contact",AuthUser,contact)




export default ContactRouter;
import express from 'express';
import {registerController} from '../controller/authController.js';

// Router Object
const router = express.Router();

//Routes 
//REGISTER || METHOD POST
router.post('/register', registerController);

export default router;
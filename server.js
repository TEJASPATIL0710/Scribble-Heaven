import express from 'express';
import colors from 'colors' ;
import dotenv from 'dotenv' ;
import morgan from 'morgan' ;
import connectDB from './config/db.js';
import authRoute from '../routes/authRoute.js';

// Configure Dotenv
dotenv.config()

// Rest Object
const app = express();

// Database Config
connectDB();

// Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/vi/auth', authRoute);

// Rest API
app.get('/',(req,res) => {
    res.send('<h1>Welcome To E- commerce Website Tejas Patil</h1>')
})

// Port
const PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT,() => {
    console.log(`Server running on ${process.env.Dev_Mode} mode on port ${PORT}`.bgCyan.white);
})
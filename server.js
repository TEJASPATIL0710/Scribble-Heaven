import express from 'express';
import colors from 'colors' ;
import dotenv from 'dotenv' ;

// Configure Dotenv
dotenv.config()

// Rest Object
const app = express();

// Rest API
app.get('/',(req,res) => {
    res.send('<h1>Welcome To E- commerce Website Tejas Patil</h1>')
})

// Port
const PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT,() => {
    console.log(`Server running on ${Dev_Mode} mode on port ${PORT}`.bgCyan.white);
})
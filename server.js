//1 require express
const express = require ("express");

//2 create instance 
const app = express ();

//4 require dotenv
require("dotenv").config();

//
app.use(express.json());
// 6 connectDB

const connectDB = require("./config/connectDB");
connectDB()

//7 import routes
app.use("/api/contact", require ("./routes/contact"))

//3 create port 
const PORT = process.env.PORT;

//5 create server
app.listen(PORT, (err) =>
    err
    ? console.error(`Cannot connect to the server  ${err} !!`)
    :console.log(`Server is running on port ${PORT} ...`)
);    
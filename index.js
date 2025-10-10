const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");

const app = express();
dbConnection();
app.listen(process.env.port,() => {
   console.log(`Server running on ${process.env.port}`) ;
})
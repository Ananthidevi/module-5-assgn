const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require ("./config/dbConnection");
const authRoutes = require("./routes/authRoutes");




//use middleware
app.use(express.json());
app.use("/api",userRoutes);
app.use("/auth",authRoutes);

dbConnection();
app.listen(process.env.port,() => {
   console.log(`Server running on http://localhost:${process.env.port}`) ;
})
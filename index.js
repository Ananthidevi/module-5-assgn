const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require ("./config/dbConnection");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");




//use middleware
app.use(express.json());
app.use(cors());
app.use("/api",userRoutes);
app.use("/auth",authRoutes);
app.use("/products",productRoutes);

dbConnection();
app.listen(process.env.port,() => {
   console.log(`Server running on http://localhost:${process.env.port}`) ;
})
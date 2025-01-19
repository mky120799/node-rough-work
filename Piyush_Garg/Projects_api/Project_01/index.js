const express = require('express');
const {connectMongoDb} = require('./connection');

const {logReqRes} = require('./middleware');

userRoutes = require('./routes/users');



const app = express();
const PORT = 8000;


// Connection to MongoDB
connectMongoDb("mongodb://localhost:27017/youtube-app-1");

// Middleware-Plugin
app.use(express.urlencoded({ extended: false })); 
app.use(logReqRes(log.txt));


//Routes

app.use("/users", userRoutes);

// Server

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
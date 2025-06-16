const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer")
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({dest:"upload/"});

       

app.set("view engine", "ejs");
app.set("views", ("./views"));
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  app.use(myLogger)
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.render("homepage"); // Make sure /views/homepage.ejs exists
});


app.post('/upload',upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
})


app.get("/upload", (req, res) => {
  return res.send("Upload page"); // Currently empty route
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
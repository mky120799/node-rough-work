const express = require('express');
const app = express();

const PORT = 3000;

app.get('/blog',(req,res)=>{
    return res.status(200).json({
        data: blogsList,
        success: true, 
})});

app.listen(PORT, ()=>{
    console.log("server started on PORT", PORT)
})
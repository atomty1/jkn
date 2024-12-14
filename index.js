if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res)=>{
    res.send("This is the landing page");
});
app.get("/about", (req, res)=>{
    res.send("This is the about page");
})




app.listen(port, ()=>{
    console.log("Connected");
})


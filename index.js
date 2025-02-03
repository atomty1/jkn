if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("Hi there.");
});
app.get("/about", (req, res)=>{
    res.send("This is the about page.");
})
app.get("/contact", (req, res)=>{
    res.send("Contact page.");
})



app.listen(port, ()=>{
    console.log("Connected");
})


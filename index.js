if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.send("This is the landing page. Landing page updated");
});
app.get("/about", (req, res)=>{
    res.send("This is the about page. Updated");
})




app.listen(port, ()=>{
    console.log("Connected");
})


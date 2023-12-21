const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("hello from webhook");
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, ()=>{
    console.log("listening at port 3000");
});
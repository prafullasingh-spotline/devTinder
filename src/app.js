const express = require("express");
const app = express();


app.use("/hello",(req,res)=>{
    res.send("Hello Prafull, Help is needed");
});
app.use("/",(req,res)=>{
    res.send("Hello Prafull Server is started");
});

app.listen(3000,()=>{
    console.log("server is started");
});
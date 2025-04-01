const express = require("express")
const app =express();
const cors= require("cors");
const br=require("./router/booksrouter");
require("./connection/conn")
app.use(cors())
app.use(express.json()) 
app.use ('/api/v1/',br);
   


app.listen(1000,() =>{
    console.log("Server Starts");
});
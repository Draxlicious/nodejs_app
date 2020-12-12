const express = require("express")
const app = express()
var path = require('path');
const port = 3000

app.set("views", path.join(__dirname, "public/views"))
app.set("view engine", "ejs")


app.get("/", (req, res)=>{
    res.render("index")
})


app.listen(port, ()=>{
console.log(`server listen on ${port}`);
})
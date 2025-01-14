require("dotenv").config();
const express = require("express");
const app = express();
const port = process.eventNames.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Sawaddee Krub");
});

app.listen(port,() => {
    console.log (`example app listening at http://localhost:${port}`);
});
require("dotenv").config();
const express = require("express");
const { signup, processData, fetchData } = require("./controllers/api");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", signup);
app.post("/process", processData);
app.get("/fetch", fetchData);

module.exports = app;

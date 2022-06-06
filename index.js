require("dotenv").config();
const express = require("express");
const { signup, processData } = require("./controllers/api");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", signup);
app.post("/process", processData);
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

module.exports = app;

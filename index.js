require("dotenv").config();
const express = require("express");
const { signup } = require("./controllers/api");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", signup);

module.exports = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const { signup, processData, fetchData } = require("./controllers/api");
// const sequelize = require("sequelize");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// await sequelize.sync({ alter: true });

app.post("/signup", signup);
app.post("/process", processData);
app.get("/fetch", fetchData);
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

module.exports = app;

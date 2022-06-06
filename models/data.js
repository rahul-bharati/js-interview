const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");
const Data = sequelize.define("User", {
  id: DataTypes.NUMBER,
  randAlphabet: DataTypes.CHAR,
});

module.exports = Data;

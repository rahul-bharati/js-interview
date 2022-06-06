const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");
const Data = sequelize.define("Data", {
  id: { type: DataTypes.NUMBER, primaryKey: true },
  randAlphabet: DataTypes.CHAR,
});

module.exports = Data;

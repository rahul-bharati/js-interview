const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Data = sequelize.define("Data", {
  id: { type: DataTypes.NUMBER, primaryKey: true },
  randAlphabet: DataTypes.CHAR,
});

module.exports = Data;

const { Sequelize } = require("sequelize");
const { development } = require("./config");

const sequelize = new Sequelize(development);

module.exports = { sequelize };
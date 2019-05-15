const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'alicia10', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.personas = require('../models/Persona.js')(sequelize, Sequelize);
module.exports = db;
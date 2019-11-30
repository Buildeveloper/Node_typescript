'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/env/config')();
const env = config.env || 'development';
const db:any = {};
const modelRelations = require('./relations/relations');

if (config.dbUrl) {
  var sequelize = new Sequelize(config.dbUrl);
} else {
  var sequelize = new Sequelize(config.db, config.username, config.password);
}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    let extension = '.js'
    if(process.env.NODE_ENV == 'development') extension = '.ts'
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === `${extension}`);
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));    
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

modelRelations(db);

module.exports = db;

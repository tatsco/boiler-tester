const db = require('./db')
const Sequelize = require('sequelize');

const SampleModel = db.define('samplemodel', {
  title: Sequelize.STRING,
  description : Sequelize.TEXT,
  deadline: Sequelize.DATA
})

module.export = SampleModel;
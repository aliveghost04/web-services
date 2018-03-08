'use strict';

const fs = require('fs');
const models = {};

fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    const match = /(.*)\.js$/.exec(file);
    if (match) {
      models[match[1]] = require(`${__dirname}/${file}`);
    }
  }
});

module.exports = models;
'use strict';

let config;

try {
  config = require('./config');
} catch (e) {
  console.log("** Missing config file **");
  process.exit(1);
}

module.exports = config;
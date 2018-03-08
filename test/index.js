'use strict';

const should = require('should');
const mysql = require('mysql');
const config = require('../config');
const models = require('../models');

const pool = mysql.createPool(config.database);
let exchangeRates;

before(() => {
  return new Promise((res, rej) => {
    pool.query(
      `SELECT currency_code, update_date, exchange_rate FROM exchange_rates`,
      (err, results) => {
        if (err) return rej(err);

        if (results.length > 0) {
          exchangeRates = results;
          res();
        } else {
          rej(new Error('No exchange_rates registered'));
        }
      }
    );
  });
});

describe('Testing web services app', () => {
  const ExchangeRate = models['exchange-rate'](pool);

  it('should get an exchange rate', () => {
    return ExchangeRate.get(exchangeRates[0].currency_code).then(result => {
      should.equal(result.currency_code, exchangeRates[0].currency_code);
      should.equal(result.exchange_rate, exchangeRates[0].exchange_rate);
      result.should.containEql(exchangeRates[0]);
    });
  });
});
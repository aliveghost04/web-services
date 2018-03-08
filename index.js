'use strict';

const mysql = require('mysql');
const express = require('express');
const config = require('./config');
const models = require('./models');
const app = express();

const pool = mysql.createPool(config.database);

app.get('/exchange-rate/:id?', (req, res, next) => {
  const ExchangeRate = models['exchange-rate'](pool);

  if (req.params.id) {
    ExchangeRate
      .get(req.params.id)
      .then(exchangeData => {
        res.json(exchangeData);
      })
      .catch(next);
  } else {
    const error = {
      message: "Parámetro 'currencyCode' faltante.",
      name: 'MISSING_CURRENCY_CODE',
      status: 400
    };
    next(error);
  }
});

app.use((req, res, next) => {
  const error = {
    message: "El recurso solicitado no puso ser encontrado",
    name: 'NOT_FOUND',
    status: 404
  };
        
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});

app.listen(config.port, config.host, () => {
  console.log(`Express listening on ${config.host}:${config.port} at ${Date()}`);
});
'use strict';

const tableName = 'exchange_rates';
const models = require('./');

module.exports = connection => ({
  get(currencyCode) {
    return new Promise((res, rej) => {
      if (!currencyCode) {
        const error = {
          message: "Parámetro 'currencyCode' faltante.",
          name: 'MISSING_CURRENCY_CODE',
          status: 400
        };
        return rej(error);
      }

      connection
        .query(
          `SELECT currency_code, exchange_rate, update_date
          FROM ??
          WHERE currency_code = ?
          ORDER BY update_date desc
          LIMIT 1`,
          [ tableName, currencyCode ],
          (err, results) => {
            if (err) {
              console.error(err);
              const error = {
                message: 'Ha ocurrido un error realizando al consulta a la base de datos, intente más tarde.',
                name: 'ERROR_QUERYING_DATABASE',
                status: 500
              };
              return rej(error);
            }

            if (results.length === 1) {
              res(results[0]);
            } else {
              const error = {
                message: 'Código de moneda no encontrado',
                name: 'CURRENCY_CODE_NOT_FOUND',
                status: 404
              };
              rej(error);
            }
          }
        );
    });
  }
});
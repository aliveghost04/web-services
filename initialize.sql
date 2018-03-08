CREATE DATABASE open_source_integration;
USE open_source_integration;

CREATE TABLE exchange_rates (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    currency_code CHAR(3) NOT NULL UNIQUE,
    exchange_rate DECIMAL(13,2) NOT NULL,
    update_date DATETIME NOT NULL
);

CREATE TABLE exchange_rates_history (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    currency_code CHAR(3) NOT NULL,
    exchange_rate DECIMAL(13,2) NOT NULL,
    update_date DATETIME NOT NULL
);

INSERT INTO exchange_rates VALUES 
(NULL, 'DOP', 1, '2018-03-05 08:57:35'),
(NULL, 'USD', 49.36, '2018-03-05 11:57:35'),
(NULL, 'GBP', 68.54, '2018-02-09 22:12:38'),
(NULL, 'CAD', 38.16, '2018-03-04 00:00:35'),
(NULL, 'EUR', 61.27, '2018-03-02 06:25:05'),
(NULL, 'AUD', 38.54, '2018-03-05 08:00:12'),
(NULL, 'JPY', 0.47, '2018-03-01 08:00:35');

INSERT INTO exchange_rates_history VALUES 
(NULL, 'DOP', 1, '2018-03-05 08:57:35'),
(NULL, 'USD', 49.36, '2018-03-05 11:57:35'),
(NULL, 'GBP', 68.54, '2018-02-09 22:12:38'),
(NULL, 'CAD', 38.16, '2018-03-04 00:00:35'),
(NULL, 'EUR', 61.27, '2018-03-02 06:25:05'),
(NULL, 'AUD', 38.54, '2018-03-05 08:00:12'),
(NULL, 'JPY', 0.47, '2018-03-01 08:00:35'),
(NULL, 'USD', 49.10, '2018-03-06 08:07:00'),
(NULL, 'EUR', 63.00, '2018-03-06 09:35:55');

select * from exchange_rates_history;
select * from exchange_rates;
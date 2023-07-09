// Arquivo responsável pela conexão com banco

const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: 'qwe123qw',
	host: 'localhost',
	port: 5432,
	database: 'letmeask'
});

module.exports = db;
// Arquivo responsável por fazer a query ao banco de dados

const database = require('../Infra/database')


const getAsks = function () {
	return database.query('select * from perguntas')}
	
const getSalas = function () {
	return database.query('select * from salas')}

module.exports = {
	getAsks, getSalas
}
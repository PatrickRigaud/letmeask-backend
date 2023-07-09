// Arquivo responsável por fazer a query ao banco de dados

const database = require('../Infra/database')


const getAsks = function () {
	return database.query('select * from perguntas')}
	
const getAsksJavascript = function () {
	return database.query('select * from perguntas where id_sala = 1')}

module.exports = {
	getAsks, getAsksJavascript
}
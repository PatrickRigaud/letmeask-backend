// Arquivo responsável por fazer a query ao banco de dados

const database = require('../Infra/database')

const getAsks =  () => {
	return database.query('select * from perguntas')}
	
const getSalas = () => {
	return database.query('select * from salas')}

const postPergunta = (descricao, usuario, id_sala) => {

	return database.query(`INSERT INTO perguntas (descricao, usuario, id_sala) values ('${descricao}', '${usuario}', ${id_sala});`)
}

module.exports = {
	getAsks, getSalas, postPergunta
}
// Arquivo responsável por fazer a query ao banco de dados

const database = require('../Infra/database')

const getAsks =  () => {
	return database.query('select * from perguntas')}
	
const getSalas = () => {
	return database.query('select * from salas')}

const postPergunta = (descricao, usuario, id_sala) => {

	return database.query(`INSERT INTO perguntas (descricao, usuario, id_sala) values ('${descricao}', '${usuario}', ${id_sala});`)
}

const getPerguntasSala = (id_sala_front) => {
	return database.query(`select * from perguntas where id_sala = ${id_sala_front}`)}

const deletePergunta = (id_sala, id) => {
	return database.query(`DELETE from perguntas where id = ${id} and id_sala = ${id_sala}`)
}

module.exports = {
	getAsks, getSalas, postPergunta, getPerguntasSala, deletePergunta
}
// Arquivo responsável por fazer a query ao banco de dados

const database = require('../Infra/database')

const getAsks =  () => {
	return database.query('select * from perguntas')}

const getAsk =  (id) => {
	return database.query(`select * from perguntas where id = $1`,[id])}
	
const getSalas = () => {
	return database.query('select * from salas')}

const getComentarios = (pergunta_id) => {
	return database.query(`select * from comentarios where pergunta_id = $1`, [pergunta_id])
}

const postPergunta = (descricao, usuario, id_sala) => {
	return database.query(`INSERT INTO perguntas (descricao, usuario, id_sala) values ($1, $2, $3);`, [descricao, usuario, id_sala])
}

const postComentario = (descricao, pergunta_id, usuario) => {
	return database.query(`insert into comentarios(descricao, pergunta_id, usuario)values($1, $2, $3);`, [descricao, pergunta_id, usuario])
}

const getPerguntasSala = (id_sala_front) => {
	return database.query(`select * from perguntas where id_sala = $1`, [id_sala_front])}

const deletePergunta = (id_sala, id) => {
	return database.query(`DELETE from perguntas where id = $1 and id_sala = $2`, [id, id_sala])
}

const postUsuario = (nome, sobrenome, email, senha) => {
	return database.query(`INSERT INTO usuarios (nome, sobrenome, email, senha) values ($1, $2, $3, $4);`, [nome, sobrenome, email, senha])
}

const procurarEmail = (email) => {
	return database.query(`select email from usuarios where email = $1`, [email])
}

const buscarEmailSenha = (email) => {
	return database.query(`select * from usuarios where email = $1`, [email])
}

module.exports = {
	getAsks, getSalas, postPergunta, getPerguntasSala, deletePergunta, getAsk, getComentarios, postComentario, postUsuario, procurarEmail, buscarEmailSenha
}
const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost, mapearPerguntasId, deletarPerguntaId, unicaPergunta, buscarComentarios, criarComentarioPost, cadastrarUsuario, validarEmailSenha} = require('../Controladores/controladores')
const { validarEmail, validarToken} = require('../Controladores/intermediario')

route.get('/ask', todasPerguntas)
route.get('/ask/:id', unicaPergunta)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)
route.post('/askFilterID', validarToken, mapearPerguntasId)
route.delete('/ask', deletarPerguntaId)
route.get('/comentarios/:pergunta_id', buscarComentarios)
route.post('/comentarios', criarComentarioPost)
route.post('/usuario', validarEmail, cadastrarUsuario)
route.post('/usuariologin', validarEmailSenha)



module.exports = route
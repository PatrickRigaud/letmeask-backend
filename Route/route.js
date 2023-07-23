const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost, mapearPerguntasId, deletarPerguntaId, unicaPergunta, buscarComentarios, criarComentarioPost, cadastrarUsuario} = require('../Controladores/controladores')
const { validarEmail} = require('../Controladores/intermediario')

route.get('/ask', todasPerguntas)
route.get('/ask/:id', unicaPergunta)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)
route.post('/askFilterID', mapearPerguntasId)
route.delete('/ask', deletarPerguntaId)
route.get('/comentarios/:pergunta_id', buscarComentarios)
route.post('/comentarios', criarComentarioPost)
route.post('/usuario', validarEmail, cadastrarUsuario)



module.exports = route
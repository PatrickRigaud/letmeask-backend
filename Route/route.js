const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost, mapearPerguntasId, deletarPerguntaId, unicaPergunta, buscarComentarios, criarComentarioPost} = require('../Controladores/controladores')


route.get('/ask', todasPerguntas)
route.get('/ask/:id', unicaPergunta)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)
route.post('/askFilterID', mapearPerguntasId)
route.delete('/ask', deletarPerguntaId)
route.get('/comentarios/:pergunta_id', buscarComentarios)
route.post('/comentarios', criarComentarioPost)



module.exports = route
const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost, mapearPerguntasId, deletarPerguntaId } = require('../Controladores/controladores')


route.get('/ask', todasPerguntas)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)
route.post('/askFilterID', mapearPerguntasId)
route.delete('/ask', deletarPerguntaId)


module.exports = route
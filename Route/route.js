const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost, mapearPerguntasId } = require('../Controladores/controladores')


route.get('/ask', todasPerguntas)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)
route.post('/askFilterID', mapearPerguntasId)


module.exports = route
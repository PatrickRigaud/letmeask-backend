const express = require('express');
const route = express();
const { todasPerguntas, todasSalas, criarPerguntaPost } = require('../Controladores/controladores')


route.get('/ask', todasPerguntas)
route.get('/salas', todasSalas)
route.post('/ask', criarPerguntaPost)


module.exports = route
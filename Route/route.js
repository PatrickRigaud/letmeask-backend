const express = require('express');
const route = express();
const { todasPerguntas, todasSalas } = require('../Controladores/controladores')


route.get('/ask', todasPerguntas)
route.get('/salas', todasSalas)


module.exports = route
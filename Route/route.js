const express = require('express');
const route = express();
const {getAsks, getAsksJavascript} = require('../Data/askData')


route.get('/ask', async function (req, res) {
	const asks = await getAsks();
	res.json(asks);
})

route.get('/ask/javascript', async function (req, res) {
	const asks = await getAsksJavascript();
	res.json(asks);
})

module.exports = route
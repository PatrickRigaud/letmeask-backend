const {getAsks, getSalas} = require('../Data/askData');


 const todasPerguntas =  async (req, res) => {
	const asks = await getAsks();
	res.json(asks);
};

const todasSalas = async (req, res) => {
    const salas = await getSalas();
    res.json(salas);
}

module.exports = {
    todasPerguntas,
    todasSalas
};
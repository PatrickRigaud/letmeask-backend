const {getAsks, getSalas, postPergunta} = require('../Data/askData');
const {receberReqPostPergunta} = require('./intermediario')


 const todasPerguntas =  async (req, res) => {
	const asks = await getAsks();
	res.json(asks);
};

const todasSalas = async (req, res) => {
    const salas = await getSalas();
    res.json(salas);
}

const criarPerguntaPost = async (req, res) => {
    const [descricao, usuario, id_sala] = receberReqPostPergunta(req)
    await postPergunta(descricao, usuario, id_sala)
    res.json({message: `Mensagem: ${descricao}, usuario: ${usuario}, id_sala ${id_sala}`})
}

module.exports = {
    todasPerguntas,
    todasSalas,
    criarPerguntaPost
};
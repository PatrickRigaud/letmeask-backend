const {getAsks, getSalas, postPergunta, getPerguntasSala} = require('../Data/askData');
const {receberReqPostPergunta} = require('./auxiliarControlador')


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

const mapearPerguntasId = async (req, res) => {
    const {data} = req.body;
    const perguntasID = await getPerguntasSala(data)

    res.json(perguntasID)
}

module.exports = {
    todasPerguntas,
    todasSalas,
    criarPerguntaPost,
    mapearPerguntasId
};
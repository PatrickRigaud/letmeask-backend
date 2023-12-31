const {getAsks, getSalas, postPergunta, getPerguntasSala, deletePergunta, getAsk, getComentarios, postComentario, postUsuario, buscarEmailSenha} = require('../Data/askData');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('./senhaJwt')


 const todasPerguntas =  async (req, res) => {
	const asks = await getAsks();
	res.json(asks);
};

const unicaPergunta =  async (req, res) => {
    const {id} = req.params
    
	const ask = await getAsk(id);
	res.json(ask);
};

const todasSalas = async (req, res) => {
    const salas = await getSalas();
    res.json(salas);
}

const buscarComentarios = async (req, res) => {
    const {pergunta_id} = req.params
    const comentarios = await getComentarios(pergunta_id);
    res.json(comentarios)
}

const criarPerguntaPost = async (req, res) => {
    const { descricao, usuario, id_sala } = req.body
    await postPergunta(descricao, usuario, id_sala)
    res.json({message: `Mensagem: ${descricao}, usuario: ${usuario}, id_sala ${id_sala}`})
}

const criarComentarioPost = async (req, res) => {
    const {descricao, pergunta_id, usuario} = req.body
    await postComentario(descricao, pergunta_id, usuario)
}

const mapearPerguntasId = async (req, res) => {
    const {data} = req.body;
    const perguntasID = await getPerguntasSala(data)

    res.json(perguntasID)
}

const deletarPerguntaId = async (req, res) => {
    const {id_sala, id} = req.body;
    await deletePergunta(id_sala, id)
    res.json({message: 'Deletado'})
}

const cadastrarUsuario = async (req, res) => {
    const {nome, sobrenome, email, senha} = req.body;
    const senhaEncriptada = await bcrypt.hash(senha, 10) // biblioteca que encriptografa


    await postUsuario(nome, sobrenome, email, senhaEncriptada)
    res.json({fechar: true})
}

const validarEmailSenha = async (req, res) => {
    const {email, senha} = req.body;
    if(!email || !senha){
        return res.json({login: false})
    }
    const emailSenha = await buscarEmailSenha(email)

    if(emailSenha.length > 0){
    const senhaValida = await bcrypt.compare(senha, emailSenha[0].senha)
    const token = jwt.sign({email: emailSenha[0].email}, senhaJwt, {expiresIn: '1h'})
    
   
    return res.json({login: senhaValida, token, nome: emailSenha[0].nome, sobrenome: emailSenha[0].sobrenome})
}
return res.json({login: false})
    
}

module.exports = {
    todasPerguntas,
    todasSalas,
    criarPerguntaPost,
    mapearPerguntasId,
    deletarPerguntaId,
    unicaPergunta,
    buscarComentarios,
    criarComentarioPost,
    cadastrarUsuario,
    validarEmailSenha
};
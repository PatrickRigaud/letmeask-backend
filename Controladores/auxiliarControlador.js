
const receberReqPostPergunta = (param)=> {
    const {descricao, usuario, id_sala} = param.body
    
    return [descricao, usuario, id_sala]
}

module.exports = {
    receberReqPostPergunta
}
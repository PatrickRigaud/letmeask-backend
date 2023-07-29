const database = require('../Infra/database')
const { procurarEmail} = require('../Data/askData')
const jwt = require('jsonwebtoken')
const senhaJwt = require('./senhaJwt')

const validarEmail = async (req, res, next) => {
    const {email} = req.body
    const arroba = email.indexOf('@')

    if(arroba < 0){
        return res.json({message: 'Email invalido'})
    }

    const achou = await procurarEmail(email)
    if(achou.length > 0){
        return res.json({message: 'Email já existe'})
    }
    next()
}


const validarToken = async (req, res, next) => {
    const {authorization} = req.headers

    if (authorization) {
        const tokenLimpo = authorization.split(' ')[1];
        jwt.verify(tokenLimpo, senhaJwt, (err, decoded) => {
            if (err) {
                console.error('Erro ao verificar JWT:', err.message);
                return res.status(401).json({message: 'Token expirado ou invalido',
                                            token: false})
              } else {
                // O JWT é válido, e seu conteúdo está disponível no objeto 'decoded'
              
              }
        })
      }

  
    
    next()
}


module.exports = {
    validarEmail,
    validarToken
}
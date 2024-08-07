let usuarios = require('./usuarios')

function atualizar(id, novoUsuario){
    let atualiza = usuarios.findIndex(usuario => usuario.id === id)
            usuarios[atualiza] = { id: id, ...novoUsuario}
}

module.exports = atualizar
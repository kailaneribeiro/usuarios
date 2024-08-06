let usuarios = require('./usuarios')

function atualizar(id, novoUsuario){
    let atualiza = usuarios.findIndex(usuario => usuario.id === id)
        if(atualiza !== -1){
            usuarios[atualiza] = { ... usuarios[atualiza], ...novoUsuario}
        }
}

module.exports = atualizar
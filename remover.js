let usuarios = require('./usuarios')

function remover(id){
    let remove = usuarios.findIndex(usuario => usuario.id === id)
    if(remove !== -1){
        usuarios.splice(remove,1)
    }
}
module.exports = remover
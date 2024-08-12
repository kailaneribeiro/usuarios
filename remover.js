let usuarios = require('./usuarios')

function remover(id, comfirma){
    let remove = usuarios.findIndex(usuario => usuario.id === id)
    if(remove !== -1){
    if (comfirma === 's') {
        usuarios.splice(remove,1)
        console.log ('Item removido com sucesso!')
        return true
    }else {
       // console.log('Remoção cancelada')
        return false
    }
    }
}
module.exports = remover
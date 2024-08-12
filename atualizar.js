let usuarios = require('./usuarios')

function atualizar(id, novoUsuario){
    var jaExiste = usuarios.find(usi => usi.email === novoUsuario.email);
    if (jaExiste) {
        throw new Error('Já existe um contato com esse email');}
    let atualiza = usuarios.findIndex(usuario => usuario.id === id)
            usuarios[atualiza] = { id: id, ...novoUsuario}
    jaExiste = usuarios.find(usi => usi.email === novoUsuario.email);
}


module.exports = atualizar
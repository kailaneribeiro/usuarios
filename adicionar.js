let usuarios = require('./usuarios')


function adicionarUsuario(usuario) {
usuario.id = usuarios.length + 1;
let jaExiste = usuarios.find(usi => usi.email === usuario.email);
if (jaExiste) {
    throw new Error('Já existe um contato com esse email');
}  else {
        usuarios.push(usuario);
    }
}


module.exports = adicionarUsuario;
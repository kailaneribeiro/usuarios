let usuarios = require('./usuarios')

function listarUsuarios(usuario) {
    usuarios.forEach(usuario => {
      console.log(` id: ${usuario.id}, Nome: ${usuario.nome}, Telefone: ${usuario.telefone}, Email: ${usuario.email}`);
    });
  }
  
  module.exports = listarUsuarios
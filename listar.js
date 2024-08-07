let usuarios = require('./usuarios')

function listarUsuarios() {
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    console.log(`
  id: ${usuario.id},
  nome: ${usuario.nome},
  email: ${usuario.email},
  telefone(s):
    `);
    
    for (let j = 0; j < usuario.telefones.length; j++) {
      console.log(`   ${j+1}. ${usuario.telefones[j]}`);
    }
    }
    }
  
  module.exports = listarUsuarios
const prompt = require('prompt-sync')();

const listarUsuarios = require('./listar');
const adicionarUsuario = require('./adicionar');
const atualizar = require('./atualizar');
const remover = require('./remover');

function menu(){
    console.log(`
    1. Listar Usuarios
    2. adicionar Usuario
    3. atualizar Usuario
    4. excluir Usuario 
    5. sair 
    `)
let comfirma
let opção = prompt('Escolha uma opção: ')
    switch(opção){
        case '1':
            listarUsuarios();
            menu();
            break;
        case '2':
            const nome = prompt('Nome: ');
            var telefones = [];
            var telefone;
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
            }
            const email = prompt('Email: ');
            adicionarUsuario({ nome, telefones, email });
            console.log('Usuario adicionado com sucesso!');
            menu();
            break;
        case '3':
            listarUsuarios();
            var id = parseInt(prompt('qual elemento deseja atualizar: '))
            var novoNome = prompt('Novo nome: ');
            var novoTelefones= [];
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
                novoTelefones.push(telefone);
            }
            var novoEmail= prompt('Nova email: ');
            atualizar(id,{ nome: novoNome, email: novoEmail, telefones: novoTelefones})
            console.log('Usuario atualizado com sucesso!')
            menu()
            break
        case '4':
            listarUsuarios()
            id = parseInt(prompt('Número de Usuario que deseja remover: '))
            comfirma = prompt('Para confirmar a remoção digite: "s" para sim e "n" para não: ')
            remover(id, comfirma);
            menu();
        break;
        case '5':
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
}

menu()


            


        




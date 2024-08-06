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
    
let opção = prompt('Escolha uma opção: ')
let index;
    switch(opção){
        case '1':
            listarUsuarios();
            menu();
            break;
        case '2':
            const nome = prompt('nome: ');
            const email = prompt('email: ');
            const telefone = prompt('Telefone: ');
            adicionarUsuario({ nome, telefone, email });
            console.log('Usuario adicionado com sucesso!');
            menu();
            break;
        case '3':
            listarUsuarios();
            index = prompt('qual elemento deseja atualizar: ') - 1
            const novoNome = prompt('Novo nome: ');
            const novoEmail= prompt('Nova email: ');
            const novoTelefone= prompt('Novo numero: ');
            atualizar(index,{ nome: novoNome, email: novoEmail, telefone: novoTelefone})
            console.log('Usuario atualizado com sucesso!')
            menu()
            break
        case '4':
            index = parseInt(prompt('Número de Usuario que deseja remover: ')) - 1;
            remover(index);
            console.log('Usuario removido com sucesso!');
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


            


        




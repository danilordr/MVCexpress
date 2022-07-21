// Importando o módulo express
const express = require('express');
// Executamos a função express() para obter as ferramentas

// necessárias para trabalhar com express
const app = express();
// definindo uma rota de acesso ao sistema
//parametro 1: caminho ou url  da rota 
// parametro 2: callback a ser execultado toda vez que acessamos a rota 
app.get('/',(req, res) => {
  return res.send('Olá turma!');
});

const usuarios = require('./models/usuarios');
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params; // Entrada de dados!
  const dados = usuarios.filter((item) => item.id == id); // Chamada para o modelo (busca info.)
  return res.send(dados[0].nome + ' ' + dados[0].idade); // Saída de dados!
});
//criaçao rota mvc
const usuariosController = require('./controllers/usuarios');
app.get('/usuario/:id', usuariosController.get);
//adicionando tramplete engine
app.set('view engine' , 'ejs');
//criar local arquivos estatico
app.use(express.static('public'));
// Disponibilizamos uma porta para que nosso
// computador possa receber mensagens através dela
//acessar no no navegador http://localhost:3000/
//precisa estar por ultimo no arquivo
app.listen(3000 ,() => {
  console.log('servidor rodando na porta 3000 http://localhost:3000/')
});
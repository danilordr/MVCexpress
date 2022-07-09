// Importando o módulo express
const express = require('express');
// Executamos a função express() para obter as ferramentas

// necessárias para trabalhar com express
const app = express();
// definindo uma rota de acesso ao sistema
//parametro 1: caminho ou url  da rota 
// parametro 2: callback a ser execultado toda vez que acessamos a rota 
app.get('/',(req,res)=>{
  return res.send('Olá turma!');
});

const usuarios = require('./models/usuarios');
const usuariosController = require('./controllers/usuarios');
app.get('/usuario/:id',usuariosController.get);
//criaçao rota mvc

// Disponibilizamos uma porta para que nosso
// computador possa receber mensagens através dela
//acessar no no navegador http://localhost:3000/
//precisa estar por ultimo no arquivo
app.listen(3000 ,() =>{
  console.log('servidor rodando na porta 3000 http://localhost:3000/')
});
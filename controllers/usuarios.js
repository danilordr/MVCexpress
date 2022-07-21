const usuarios= require('../models/usuarios')
//rota parametrizada, contem irformaçoes adicionais na url (endereço)
// as informaçao adicional e capturada atraves do cparmaetro da url representado pela sintaxe id
// localhost:3000/usuario/1, o numero 1 sera armezenado na variavel id

const usuariosController = { 
  get: (req,res) => {
    const { id } = req.params;//entrada de dados
  const dados = usuarios.filter((item) => item.id == id);//chamadapara o modelo(buscar info.)
  return res.render('user',{dados});//saida de dados para a view (template engine)
  }

}

module.exports = usuariosController;
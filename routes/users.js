// routes/users.js
var express = require('express');
var router = express.Router();

  const db=require('../models');
  const userService = require('../services/userService');//CLASSE
  const auth = require('../Middleware/auth');
  const bcrypt = require('bcrypt'); //bcrypt
  const User = db.User;
  const UserService = new userService(User);
  // const UserService = new userService(db.User);//Contruçõa objeto (antigo)

  const userController = require('../controllers/userController'); // classe
  const UserController = new userController(new userService(User));//Construção do objeto


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Modulo de usuarios está rodando.');
});

//rota para criar um novo usuario
router.post('/novoUsuario', async function(req, res, next){
  const { nome, email, senha } = req.body;
  try {
      // Hash da senha usando bcrypt
      const hashedSenha = await bcrypt.hash(senha, 10); // 10 é o número de rounds de salt
      const novoUser = await UserService.create(nome, email, hashedSenha);
      res.status(200).json(novoUser);
  } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir novo usuário.' });
  }
});
// localiza um usuario especifico
// router.get('/localizaUsuarioPeloId' , function(req, res, next){
//   UserController.localizaUsuarioPeloId(req, res);
// });
// router.get('/:id', function(req, res, next) {
//   UserController.findOne(req, res);
// });


router.post('/login', function (req, res, next) {
  UserController.login(req, res); // Chame o método de login do controlador de usuário
});

router.get('/localizaTodosUsuario' , auth, function(req, res, next){
  UserController.localizaTodosUsuario(req, res);
});

module.exports = router;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', usersRouter);

module.exports = app;


const bcrypt = require('bcrypt'); //bcrypt
const db = require('./models');
const { error } = require('console');

// Função para criptografar a senha antes de criar um novo usuário
async function hashPassword(req, res, next) {
    if (req.body.senha) {
        try {
            const hashedSenha = await bcrypt.hash(req.body.senha, 10); // 10 é o número de rounds de salt
            req.body.senha = hashedSenha;
            next(); // Chame next() após a senha ser criptografada
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criptografar a senha.' });
        }
    } else {
        next(); // Se não houver senha na requisição, passe para o próximo middleware
    }
}

app.post('/users/novoUsuario', hashPassword);

//aqui será aplicado as migrations(integrar com o banco de dados)
async function ApplyMigrations(){
    try{
    migration_config={
    create: true,
    alter: true
};

await db.sequelize.sync({
    alter: migration_config.alter
});
console.log('Sincronização com o banco realizada')
    }
    catch{error}
    console.log('Erro sincronizando o banco de dados', error);
}

//acionar a sincrinzação com o banco
ApplyMigrations();

var port = '3000';
app.listen(port,function(){
    console.log("Server runing on port"  + port);
    module.exports = app;
});
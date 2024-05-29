const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bcrypt = require("bcrypt"); 
const db = require("./models");
const sequelize = require('./config/database'); // Configuração do Sequelize

const indexRouter = require("./routes/index");
const usuariosRouter = require("./routes/usuarios");
const depositosRouter = require("./routes/depositos");
const cotacaoRoutes = require('./routes/cotacao');
const comprasRoutes = require('./routes/compras');
const contasPagarRoutes = require('./routes/contasPagarRoutes');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuarios", usersRouter);
app.use("/login", usersRouter);
app.use("/depositos", depositosRouter);
app.use('/cotacoes', quotationRoutes);
app.use('/compras', purchaseRoutes);
app.use('/api/contas-pagar', contasPagarRoutes);

// Middleware para criptografar a senha antes de criar um novo usuário
async function hashPassword(req, res, next) {
  if (req.body.senha) {
    try {
      const hashedSenha = await bcrypt.hash(req.body.senha, 10); // 10 é o número de rounds de salt
      req.body.senha = hashedSenha;
      next(); // Chame next() após a senha ser criptografada
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criptografar a senha." });
    }
  } else {
    next(); // Se não houver senha na requisição, passe para o próximo middleware
  }
}

// Rota para criar novo usuário
app.post("/users/novoUsuario", hashPassword, async (req, res) => {
  try {
    const newUser = await db.User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

// Aplicar migrações
async function applyMigrations() {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Sincronização com o banco realizada");
  } catch (error) {
    console.log("Erro sincronizando o banco de dados", error);
  }
}

// Acionar a sincronização com o banco
applyMigrations();

const port = process.env.PORT || "5000";
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

// middlewares/auth.js
const jwt = require('jsonwebtoken');

// Função de middleware para autenticação JWT
function auth(req, res, next) {
  // Verifica se o token está presente nos cabeçalhos da requisição
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Verifica se o token é válido
  jwt.verify(token, 'segredo', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    // Se o token é válido, adiciona o ID do usuário decodificado ao objeto req para uso posterior nas rotas protegidas
    req.userId = decoded.id;
    next();
  });
}

module.exports = auth;

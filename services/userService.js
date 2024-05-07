const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// ./services/userService/.js
class userService{
    // construtor da classe recebe a user model
    constructor(userModel){
        this.User = userModel;
    }
    async create(nome, email, senha){
        try{

            // Hash da senha usando bcrypt
            const hashedSenha = await bcrypt.hash(senha, 10); // 10 é o número de rounds de salt

            const novoUser = await this.User.create(
                {
                nome:nome,
                email:email,
                senha: senha
                });
                novoUser.senha = "";  

            return novoUser ? novoUser : null; // metodo bagual de fazer if else(metodo ternario)
            // if(novoUser){
            //     return novoUser;
            // }else{
            //     return null;
            // }  metodo bugre pra fazer if else
        }

    catch(error){
        throw error;
    }
    }
    ///localizaTodosUsuario
    async localizaTodosUsuario(login,senha){
        try{
           const AllUsers = await this.User.findAll();
           return AllUsers? AllUsers: null;
        }
        catch(error){
        throw error;
        }
    }

    ///localizaUsuarioPeloLogin
    // async localizaUsuarioPeloId(id){
    //     try{
    //        const LocalizaUser = await this.User.findByPk(id);
    //        return LocalizaUser? LocalizaUser: null;
    //     }
    //     catch(error){
    //     throw error;
    //     }
    // }
    async findOne(id) {
        try {
            const user = await this.User.findByPk(id);
            return user ? user : null;
        } catch (error) {
            throw error;
        }
    }

    async login(id, senha) {
        try {
            // Encontre o usuário com o ID fornecido
            const user = await this.User.findByPk(id);

            if (!user) {
                throw new Error('Usuário não encontrado.');
            }

            // Verifique se a senha está correta
            const senhaCorreta = await bcrypt.compare(senha, user.senha);

            if (!senhaCorreta) {
                throw new Error('Credenciais inválidas.');
            }

            // Se as credenciais estiverem corretas, crie um token JWT
            const token = jwt.sign({ id: user.id, nome: user.nome }, 'secreto', { expiresIn: '1h' });

            return token;
        } catch (error) {
            throw error;
        }
    }

}


module.exports = userService;
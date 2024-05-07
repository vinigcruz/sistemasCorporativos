// ./controllers/userController.js

class userController{
    constructor(userService){
        this.userService = userService;
    }
    async create(req, res) {
        const { nome, email, senha } = req.body;
        try {
            const novoUser = await this.userService.create(nome, email, senha);
            res.status(200).json(novoUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao inserir novo usuário.' });
        }
    }
    //LocalizaTodosUsuario
    async localizaTodosUsuario(req,res){
        const{login, senha} = req.body;
        try{
            const allUsers = await this.userService.localizaTodosUsuario(login, senha);
            res.status(200).json(allUsers);
        }
        catch{
            res.status(400).json({error : "Login Invalido. "});
        }

    }

    async login(req, res) {
        const { id, senha } = req.body;
        try {
            const token = await this.userService.login(id, senha);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    // async localizaUsuarioPeloId(req,res){
    //     const{id} = req.params;
    //     try {
    //         const localizaUser = await this.userService.localizaUsuarioPeloId(id);
    //         if (!localizaUser) {
    //             return res.status(404).json({ error: "Usuário não encontrado." });
    //         }
    //         res.status(200).json(localizaUser);
    //     } catch (error) {
    //         res.status(500).json({ error: "Erro ao buscar usuário." });
    //     }

    // }
    async findOne(req, res) {
        const { id } = req.params;
        try {
            const user = await this.userService.findOne(id);
            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }

}
module.exports = userController;
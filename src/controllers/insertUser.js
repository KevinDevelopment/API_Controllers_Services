const insertUserService = require('../services/inserUSerService');

class insertUser {

  async createUser(req, res) {
    const { name, password, id } = req.body;

    if (!name) {
      return res.status(400).json({ error: "nome inválido!" })
    }
    if (!password) {
      return res.status(400).json({ error: "senha inválida" })
    }

   const insertUSer =  await insertUserService.newUser(name, password, id);

   return res.status(200).json({insertUSer});
  }

}

module.exports = new insertUser();
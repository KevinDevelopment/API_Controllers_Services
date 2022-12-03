const updateUserService = require('../services/updateUserService');

class updateUser {

  async updateUsers(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(406).json({ error: "Por favor, informe o nome!" })
    }
    if (!id) {
      return res.status(406).json({ error: "Por favor, informe um id!" })
    }

    const result = await updateUserService.updateUser(name, id);
    return res.status(200).json({ result });
  }

}

module.exports = new updateUser();
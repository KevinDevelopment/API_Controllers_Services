const deleteUserService = require('../services/deleteUserService');

class deleteUser {

  async deleteUsers(req, res) {
    const { id } = req.params;
    const result = await deleteUserService.deleteUser(id);
    return res.status(200).json({ result });
  }

}

module.exports = new deleteUser();
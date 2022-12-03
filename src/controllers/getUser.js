const getUserService = require('../services/getUserService');


class getUser {

  async getUsers(req, res) {
   const result = await getUserService.getAllUsers();
   return res.status(200).json({result});
  }

}

module.exports = new getUser();
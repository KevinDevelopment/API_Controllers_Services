const knex = require('../database/connection');

class updateUserService {

  async updateUser(name, id) {
    try {
      await knex("users").update({ name }).where({ id: id });
      return { status: "atualizado com sucesso!" }
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new updateUserService();
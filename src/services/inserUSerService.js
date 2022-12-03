const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class insertUserService {

  async newUser(name, password, id) {
    try {
      const hashed = await bcrypt.hash(password, 10);
      await knex.insert({ name, password: hashed, id }).table("users");
      return {status: "Dados cadastrados com sucesso!"};
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new insertUserService();
const knex = require('../database/connection');

class getUSerService {

  async getAllUsers() {
    try {
      const result = await knex.select("*").table("users");
      return result;
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new getUSerService();
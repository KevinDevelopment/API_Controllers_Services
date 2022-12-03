const knex = require('../database/connection');

class deleteUserService {
  
  async deleteUser(id) {
    try {
      await knex.delete().table("users").where({id: id});
      return {message: "usuário deletado com sucesso!"}
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports =  new deleteUserService();
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   let promise = []
   promise.push(queryInterface.addColumn('Crimes' , 'status' , Sequelize.STRING))
   promise.push(queryInterface.addColumn('Crimes' , 'description', Sequelize.STRING))
   return Promise.all(promise)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   let promise =[]
   promise.push(queryInterface.removeColumn('Crimes' , 'description'))
   promise.push(queryInterface.removeColumn('Crimes' , 'status'))
   return Promise.all(promise)
  }
};

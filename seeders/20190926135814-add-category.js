'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Categories",[{
     name: "Pembunuhan",
     createdAt: new Date(),
     updatedAt: new Date()
   },
  {
    name: "Begal",
     createdAt: new Date(),
     updatedAt: new Date()
  },
  {name: "Perampokan",
  createdAt: new Date(),
  updatedAt: new Date()},
  {name: "Pelecehan",
  createdAt: new Date(),
  updatedAt: new Date()},
  {name: "Kerusuhan",
  createdAt: new Date(),
  updatedAt: new Date()},
  {name: "Pemerkosaan",
  createdAt: new Date(),
  updatedAt: new Date()},
  {name: "Penipuan",
  createdAt: new Date(),
  updatedAt: new Date()},
  {name: "Penjarahan",
  createdAt: new Date(),
  updatedAt: new Date()}
])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Categories",null,{})
  }
};

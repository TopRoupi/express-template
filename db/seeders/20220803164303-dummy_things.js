module.exports = {
  async up (queryInterface, Sequelize) {
    let things = Array.from({length: 10}, (_, i) => {
      return {
        name: `thing${i}`,
        content: 'loooooooooool',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    console.log(things)

    return queryInterface.bulkInsert('Things', things, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Things', null, {});
  }
};

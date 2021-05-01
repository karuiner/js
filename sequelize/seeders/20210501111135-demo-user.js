"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert("Comments", [
      {
        user_id: 1,
        cmt: "first A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        cmt: "first B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        cmt: "second B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        cmt: "first C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        cmt: "second A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        cmt: "third B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          user_id: 1,
          cmt_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          cmt_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          cmt_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          cmt_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          cmt_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
  },
};

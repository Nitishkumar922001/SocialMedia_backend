'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Followers',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      follower_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'users'
          },
          key:'userId',
          foreignKeyConstraint: true,
          onDelete:'CASCADE',
          onUpDate:'CASCADE'
        }
      },
      user_Id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'users',
            
          },
          key:'userId',
          foreignKeyConstraint: true,
          onDelete:'CASCADE',
          onUpDate:'CASCADE'
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } 
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Followers');
  }
};
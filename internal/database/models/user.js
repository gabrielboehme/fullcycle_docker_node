import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from "../db.js";

class User extends Model {};

User.init({
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

export {
  User,
};
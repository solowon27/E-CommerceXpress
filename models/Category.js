const { Model, DataTypes } = require('sequelize');  // import the sequelize constructor and DataTypes from the library

const sequelize = require('../config/connection.js'); // import our connection to the database

class Category extends Model {} // create our Category model

Category.init( // initialize the model's data and configuration
  {
    id: { // these are our columns and their properties
      type: DataTypes.INTEGER, //i think each line easy to understand because we use human language to set the properties
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // pass in our imported sequelize connection (the direct connection to our database)
    timestamps: false, // don't automatically create timestamp fields for the database entries
    freezeTableName: true, // don't pluralize the name of the database table
    underscored: true, // use underscores instead of camel-casing 
    modelName: 'category',
  }
);

module.exports = Category;

//category model is one of our model which can collaborate with product to groupe many products in one category type
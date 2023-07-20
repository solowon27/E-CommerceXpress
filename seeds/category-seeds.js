const { Category } = require('../models'); //importing the Category model from the models folder

const categoryData = [ // it is just an array of objects that we want to insert into the category table
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

//sedCategories() is a function that will bulk create the categoryData array and insert it into the category table
//bulkCreate() is a Sequelize method that takes in an array of data and creates records in the database
const seedCategories = () => Category.bulkCreate(categoryData); 

module.exports = seedCategories;

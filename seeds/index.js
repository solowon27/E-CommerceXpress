
//the following 4 variables are importing the functions from the files in the seeds folder
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

//here we are using the async/await functionality to wait for each of these functions,
// to complete before moving on to the next one
//this is important because we need to create the data in a specific order so that there are no foreign key constraint errors
const seedAll = async () => { 
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0); //this will exit the process once all the seeding is done
};

seedAll();

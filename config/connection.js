
const Sequelize = require('sequelize');

require('dotenv').config(); // this is to allow us to use the .env file


const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, null,{ // null is the password in this case
      host: 'localhost',
      dialect: 'mysql', // tells sequelize that we're using the mysql database
      port: 3306, // this is the default port for mysql but using express we can use any port we want
      dialectOptions: {
        decimalNumbers: true, // this is to prevent the decimal from being cut off
      },
    });

module.exports = sequelize;

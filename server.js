const express = require('express'); //import express
const routes = require('./routes'); //require the routes folder 
// import sequelize connection
const sequelize = require('./config/connection');

//these two lines of code are creating the Express.js server on port 3001
const app = express();
const PORT = process.env.PORT || 3001; //this is our server port not our sql

//and here we have a middleware that instructs the server on the following way
app.use(express.json()); //this one instructs the server to parse incoming JSON data
app.use(express.urlencoded({ extended: true })); //and this one instructs the server to parse incoming form data
//and it allows you to use the req.body object

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  console.log(`Database synchronizations complete!`);
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
 ///lets test our app

 
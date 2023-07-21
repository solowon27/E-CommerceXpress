# E-CommerceXpress

## description
E-CommerceXpress is a robust and efficient e-commerce back end built using Express.js, Sequelize, and MySQL. This repository contains the code for configuring a working Express.js API that utilizes Object-Relational Mapping (ORM) techniques to interact with a MySQL database. 

## Prerequisites
To run this application locally, you need to have the following prerequisites installed on your system:

Node.js
NPM (Node Package Manager)
MySQL database

## Installation
Follow these steps to install and set up the application:

```Clone this repository to your local machine.```

```Navigate to the project's root directory.```

```Install the required dependencies by running the following command:```

```npm install```

then run ```npm run seed``` to seed data to your database so that you can test the routes,
after you successfully seed your data-->
Run the following command to start the application:
```node server.js```

This will start the server, and the application will be accessible at http://localhost:3001.

```for clarity this project use the following dependencies basically```
```mysql```
```sequelize```
```dotenv```
```express```
## Usage
Once the application is up and running, you can perform various operations related to products, categories, and tags by making HTTP requests to the provided API endpoints.

# API Endpoints
```
The application exposes the following API endpoints for products, categories, and tags respectively:

Products

GET /api/products: Retrieve all products, including their associated categories and tags.
GET /api/products/:id: Retrieve a specific product by its ID, including its associated category and tags.
POST /api/products: Create a new product with the specified details, including optional tag associations.
PUT /api/products/:id: Update an existing product with the specified ID, including optional tag associations.
DELETE /api/products/:id: Delete a product with the specified ID.

Categories

GET /api/categories: Retrieve all categories, including their associated products.
GET /api/categories/:id: Retrieve a specific category by its ID, including its associated products.
POST /api/categories: Create a new category with the specified details.
PUT /api/categories/:id: Update an existing category with the specified ID.
DELETE /api/categories/:id: Delete a category with the specified ID.

Tags

GET /api/tags: Retrieve all tags, including their associated products.
GET /api/tags/:id: Retrieve a specific tag by its ID, including its associated products.
POST /api/tags: Create a new tag with the specified details.
PUT /api/tags/:id: Update an existing tag with the specified ID.
DELETE /api/tags/:id: Delete a tag with the specified ID.
```
# File Structure

```
|__ Assets                            // where you can find screenshoots for https requests 
├── config                  
|   └──connection.js                //where the app establish a sql connection
├── db                  
|   └──schema.sql                //databse created here
|
├── models/                             // our models collected here
|  ├── category.js                     // category model launched here                 
|  ├──index.js                        //we import all models, sets up associations between models and final export them
|  ├──product.js                     // our product model launched here
|  ├──productTag.js                 //  >>
|  └──Tag.js                       //  >>
|
├── node_modules
├── routes                              // all routes initiated here
|  ├── api/                            //                 
|  |   └──category-routes.js          // here we are creating the routes for the category model
|  |   └──index.js                   // importing the routes from the other files and then exporting them as one object
|  |   └──product-routes.js         // here we are creating the routes for the product model
|  |   └──tag-routes.js            // here we are creating the routes for the tag model
|  ├──index.js                    // on this page we are importing the routes from the api folder and prefixing them with the path /api
|
├── seeds/                                     // our seeds for each models/tables collected here
|  ├── category-seeds.js                      // we are creating the category data that we will use to seed the database                
|  ├──index.js                               //on this page we are importing all of the seed files and then syncing the database    before                                       seeding it with the seed files.
|  ├──product-seeds.js                     // we are creating the product data that we will use to seed the database  
|  ├──product-tag-seeds.js                //this page looks different from the other seed pages because it is a join table
|  └──Tag-seeds.js                       // we are creating the Tag data that we will use to seed the database 
|
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore            // files and folders to be ignored by git
├──LICENSE               // MIT license
├── package.json          // npm package file
├── package-lock.json     // npm package file
├── README.md             // the read me file   
└── server.js             // the main file where the server is run from      
```
# Deployment

```video link```https://drive.google.com/file/d/1U-4x307xphA0OU7VJ7gMcHxhSb1qUp8f/view


```repo link``` https://github.com/solowon27/E-CommerceXpress

# Examples 

The following screenshoots show basic HTTP requests in insomnia and you can also see more images inside Assets folder:

![HTTP GET Request for * index](./Assets/CreateNewCategory-%20sample.jpg)
![HTTP GET Request for * index](./Assets/CreateNewproducts-%20sample.jpg)
![HTTP GET Request for * index](./Assets/deleteProductById-%20sample.jpg)
![HTTP GET Request for * index](./Assets/getAllCategories-%20sample.jpg)
![HTTP GET Request for * index](./Assets/getAllproducts-%20sample.jpg)
![HTTP GET Request for * index](./Assets/getAllTags-%20sample.jpg)

# Credit 
Github Copilot helpme out really!!
# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

# License
This project is licensed under the ```MIT License```.
# Contact 
for more information about the app please contact me through solowon27@hotmail.com

By ```Solomon Tegegne``` with ```University of Utah coding bootcamp``` July 2023

## License
This project is licensed under the MIT License.
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { //this is a get or retrive data http request
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ // this is the same as SELECT * FROM category in SQL
      include: [{ model: Product }], //including the Product model
    });
    res.status(200).json(categoryData); //if successful, return the data in JSON format
  } catch (err) { //else, return the error of 500 error message
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { 
  // find one category by its `id` value
  // be sure to include its associated Products
try {
  const categoryData = await Category.findByPk(req.params.id, { // this is the same as SELECT * FROM category WHERE id = 1 or whatever the id is in SQL
    include: [{ model: Product }],
  });
  if (!categoryData) { //if there is no category with that ID, return a 404 error message
    res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
    return;
  }
  res.status(200).json(categoryData); //if successful, return the data in JSON format
}
catch (err) { //else, return the error of 500 error message when the request fails
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => { 
  // create a new category
  try {
    const categoryData = await Category.create(req.body); // this is the same as INSERT INTO category (category_name) VALUES ('category_name') in SQL
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => { 
  // update a category by its `id` value
  //the req.body should look like this...
  // {
  //   "category_name": "New Category"
  // }
  try {
    const categoryData = await Category.update(req.body, {
      where: { //same as UPDATE category SET category_name = 'new category' WHERE id = 1 or whatever the id is in SQL
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({ //destroy is the same as DELETE FROM category WHERE id = 1 or whatever the id is in SQL
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//on each files like category-routes.js and so on 

//we do a get, put,, post, update, and delete http requests
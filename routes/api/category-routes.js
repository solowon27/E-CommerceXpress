const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
try {
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  if (!categoryData) {
    res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
    return;
  }

  res.status(200).json(categoryData);
}
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
      return;
    }
    res.status(200).json(categoryData);
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Sorry, There is no catagory with this ID!' });
      return;
    }
    res.status(200).json(categoryData);
  }
});

module.exports = router;

const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); // this is saying that any endpoint that hits /categories will use the routes from categoryRoutes
router.use('/products', productRoutes); // >> /api/products
router.use('/tags', tagRoutes); // >> /api/tags

module.exports = router;

//this is our file that will be used to collect all of the API routes and package them up for us.
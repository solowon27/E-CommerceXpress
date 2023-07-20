const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes); //any endpoint that hits /api will use the routes from apiRoutes

//if we make a request to any endpoint that doesn't exist, 
//we'll receive a 404 error indicating we have requested an incorrect resource
router.use((req, res) => { 
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
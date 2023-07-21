// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // if a category is deleted, the product will be deleted as well
});
// Categories have many Products
Category.hasMany(Product, { //one to many
  foreignKey: 'category_id',
  onDelete: 'CASCADE', 
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE', // if a product is deleted, the tag will be deleted as well
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE', // if a tag is deleted, the product will be deleted as well
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}; // export models

//this index file is created for models that allow to create all the associations between the models

//like the relationship mechanism in microsoft access
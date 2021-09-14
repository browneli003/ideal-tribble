// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Comment, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: Product,
  as: '',
  foreignKey: ''
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: Product,
  as: '',
  foreignKey: ''
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

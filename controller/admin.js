const sequelize = require('../utils/database');
const product = require('../model/products');


exports.addproduct = (req,res,next)=> {
    const amount = req.body.productPrice;
    const productName = req.body.productName;
    console.log(req.body);
  product.create({
    productPrice : amount,
    productName : productName
  })
  .then(response=>{
    console.log("update Done")
  })
  .catch(err=>console.log(err));
}

exports.getProducts = (req,res,next) => {
 product.findAll()
 .then(products=>{
   // console.log(products);
    res.json(products);
 })
 .catch(err=> console.log(err));
}

exports.deleteProduct = (req,res,next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  product.findOne({where : {id:prodId}})
  .then((product)=>{
    product.destroy();
    console.log(`${product.productName} deleted`)
  })
}
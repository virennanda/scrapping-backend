const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productTitle:String,
    productPrice:String,
    productImage:String
})

const ProductModel = mongoose.model('Product', ProductSchema );

const makeProduct = (item) =>{
    let { title, image, price }=item;
    
    return {
        productTitle:title,
        productPrice:price,
        productImage:image
    }
}

module.exports={
 makeProduct,
 ProductModel
}
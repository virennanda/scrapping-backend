require('dotenv/config');
const { connectDb } = require("./DB/connection");
const { ProductModel } = require("./DB/models/product/product");
const { scrapProductsFrom } = require("./services/scrapping");

const scrapAndStoreDataFromAmazon = async () => {
    console.log('scrapping data from amazon');
    let data = await scrapProductsFrom();
    await connectDb();
    await asyncFor(data, async(item)=>{
        const Product = ProductModel(item);        
        await Product.save();
        console.log('item saved');
    })
    console.log('scrapping complete')
    process.exit(0);
}
const asyncFor = async ( data , callback) =>{
    for (let index = 0; index < data.length; index++) {
        await callback(data[index])                 
    }
}
scrapAndStoreDataFromAmazon();
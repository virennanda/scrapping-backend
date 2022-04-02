const cheerio = require('cheerio');
const { makeProduct } = require('../../DB/models/product/product');

let item_selector = `div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20`;
let title_selector = `span.a-size-base-plus.a-color-base.a-text-normal`;
let price_selector = `span.a-offscreen`;
let image_selector = `img.s-image`;

const parseProducts = (html) => {
    const products = [];
    const $ = cheerio.load(html);
    
    $(item_selector).each((_idx,el) => {
        const product = $(el);
        const title = product.find(title_selector).text();
        const price = product.find(price_selector).text();
        const image = product.find(image_selector).attr('src');
        products.push(makeProduct({title,price,image}));
    });
    return products;
}
module.exports = {
    parseProducts
}
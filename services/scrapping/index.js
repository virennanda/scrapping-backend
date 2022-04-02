const { getProductsPage } = require("../amazon");
const { parseProducts } = require("./scrapper");

const scrapProductsFrom = async (service = getProductsPage ,dataParser = parseProducts) =>{
    let data = await service();
    let items;
    if(data){
        items = dataParser(data);
        return items;
    }
    return [];
}

module.exports = {
    scrapProductsFrom
}
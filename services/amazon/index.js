const { AMAZON_URL } = require("../config");
const { getResponse } = require("../httpService");

const getProductsPage = async (url = AMAZON_URL) => {
    return getResponse(url);    
} 

module.exports={
    getProductsPage
}
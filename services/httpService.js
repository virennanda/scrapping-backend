const axios = require("axios").default;

const getResponse = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(err){
        handleError(err)
    }
}
const handleError = (error) => {
    console.error(error);
}

module.exports = {
    getResponse
}
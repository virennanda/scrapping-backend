const express = require('express');
const { ProductModel } = require('../DB/models/product/product');
const { handleBadRequest, handleServerError } = require('../utils/responseHandlers');
const Router = express.Router();

Router.get('/:page',async (req,res)=>{
    let {page} = req.params;
    if(page && typeof parseInt(page) ==="number" && page > 0){
        let LIMIT = 10;
        let SKIP = LIMIT * parseInt(page);
        try {
            let results = await ProductModel.find().skip(SKIP).limit(LIMIT);
            return res.status(200).json(results);            
        } catch (error) {
            return handleServerError(res,err)
        }      
    }else{
        return handleBadRequest(res,{
            status:400,
            message:`page can only be a valid positive number`
        })
    }
});

Router.delete('/:id', async (req,res) =>{
    let { id } = req.params;
    if(id && typeof id ==="string"){
        try {
            await ProductModel.findByIdAndDelete(id);
            return res.json({
                message:`product with ${id} deleted`
            })
        } catch (error) {
            return handleServerError(res,error)
        }
    
    }else{
        return handleBadRequest(res,{
            status:400,
            message:'product id seems to be invalid'
        })
    } 
});


module.exports=Router;


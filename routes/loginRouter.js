const express = require('express');
const Router = express.Router();
const { getUser } = require('../services/user');
const { generateAccessToken } = require('../utils/auth');
const { handleBadRequest } = require('../utils/responseHandlers');

Router.post('/',async (req,res)=>{
  let {username,password} = req.body;
  console.log(req.body)
  if(typeof username ==="string" && typeof password === "string" ){
      const user = await getUser(username,password);
      if(user){
          return res.status(200).json({token:generateAccessToken({
              username:user.username,
          })})
      }
      return handleBadRequest(res,{},"Invalid username or password")
  }
  return handleBadRequest(res,{},"Invalid username or password")  
})
module.exports = Router;
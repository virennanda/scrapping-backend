function handleBadRequest(res,error,message = ''){
    let response = message !=='' ?{error,message} : error;
    res.status(400).json(response)
}

function handleServerError(res,err){
    console.log(err)
    res.status(500).json({message:'something went wrong. Please try again later'})
}

module.exports = {handleBadRequest,handleServerError}
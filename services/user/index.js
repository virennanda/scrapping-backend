const UserModel = require("../../DB/models/user");

async function getUser(username,password){
    let user = UserModel.findOne({
        username,
        password
    });
    if(!!user){
        return user;
    }
    return false;

}

module.exports ={
    getUser
}
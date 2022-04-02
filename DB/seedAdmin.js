const UserModel = require("../DB/models/user");

async function addAdminRecord(username,password){

    let users = await UserModel.find({username,password}).count();
    if(users === 0){
        let user = new UserModel({
            username:username||"admin",
            password:password||"admin"
        });
        await user.save();
        console.log(`Credentials Seeded \n  Username :${user.username} \n Password: ${user.password}`)
    }else{
        console.log(`User already exists`);
    }
}

module.exports ={addAdminRecord};
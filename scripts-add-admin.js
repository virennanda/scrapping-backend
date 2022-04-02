require('dotenv/config');
const prompt = require('prompt');
const { connectDb } = require('./DB/connection');
const { addAdminRecord } = require('./DB/seedAdmin');

prompt.start();
prompt.get(['username', 'password'], async function (err, result) {
  if (err) {
    return onErr(err);
  }
  let { username, password } = result;
  if(username && password && username !=='' && password !==''){
      await connectDb();
      await addAdminRecord(username,password);
  }else{
      console.log('please provide username and password')
  }
  process.exit(0);
});

function onErr(err) {
  console.log(err);
  return 1;
}

to start application
add 1 env file
and 2 env variable

MONGO_DB_CONNECTION_STRING=
TOKEN_SECRET=

example
MONGO_DB_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.ilqyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
TOKEN_SECRET=top_secret_key


after that run command
npm install

to add admin user to db run command
npm run seedAdmin


to scrap data from amazon page  execute command
npm run startScraping


after than you can execute command
npm start 

this will run server on port 5000
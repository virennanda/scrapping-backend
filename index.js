require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const { connectDb } = require('./DB/connection');
const loginRouter = require('./routes/loginRouter');
const productsRouter = require('./routes/productsRoute');
const { authenticateToken } = require('./utils/auth');
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors())
//routes
app.use('/login',loginRouter);
app.use('/products',authenticateToken,productsRouter);


app.listen(PORT, async()=> {
    connectDb();
    console.log(`App is Listening on http://localhost:${PORT}`)
});
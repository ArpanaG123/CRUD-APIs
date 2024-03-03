const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

dotenv.config();

const connection = require('./config/connection');

app.use("/user",userRoute);

const port = 8000;

app.listen(port,() => {
    console.log(`Server is running on port number ${port}`);
})

const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');
const mongoose = require('mongoose');
const path     = require('path');
dotenv.config();

const PORT = process.env.PORT_SERVER || '3001';

/**
 * Database setup
*/
mongoose.connect(process.env.URL_MONGO_DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user:process.env.MONGO_USER,
    pass:process.env.MONGO_PASS
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

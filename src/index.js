const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');
dotenv.config();

const PORT = process.env.PORT_SERVER || '3001';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

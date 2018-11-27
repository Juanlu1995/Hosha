const express = require('express');
require('dotenv').config();
const app = express();
const logger = require('morgan');

const routes = require('./routes/routes');

app.set('view engine', 'pug');
app.set('views', __dirname+"/views")

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use(express.static('public'));


if (!module.parent) {
    app.listen(3000);
    app.use(logger('dev'));
    console.log('Express started on port 3000');
}

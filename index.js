'use strict';

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const RouterBuilder = require('./routes');

const app = express();

app.use(morgan());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port}...`));


const builder = new RouterBuilder();
builder.build(app);
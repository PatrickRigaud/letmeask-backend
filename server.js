const express = require('express');
const app = express();
const route = require('./Route/route')

app.use(route);
app.use(express.json())


app.listen(3000)
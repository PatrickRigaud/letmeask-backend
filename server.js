const express = require('express');
const app = express();
const route = require('./Route/route')

app.use(express.json())
app.use(route);



app.listen(3000)
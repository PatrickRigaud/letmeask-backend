const express = require('express');
const app = express();
const route = require('./Route/route')
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use(route);



app.listen(4000)
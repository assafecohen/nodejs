const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const EmailsRoutes = require('./routes/emails');

let app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/emails', EmailsRoutes);

app.listen(3001);

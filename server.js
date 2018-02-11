'use strict';
const { fork } = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');

// require('dotenv').config();

const port = 1400;

const app = express();
const childUrl = 'process.js';

const child = fork(childUrl);

app.set('child', child);
app.use(bodyParser.json());  // esto es utilizar middelware .. cuando llega una petición serializa los datos del body
app.use('/api/v1/', router);  // definimos la ruta

app.listen(port);

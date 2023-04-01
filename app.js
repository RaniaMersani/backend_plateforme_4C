const express = require('express');
const app = express();
var path = require('path');
var passport = require('passport');
require('./models/dbconfig');
const userRouter =require('./routes/userRouter');
const formRouter =require('./routes/formRouter');
const form3Router =require('./routes/form3Router');
const EquipeRouter = require('./routes/EquipeRouter');
const fileRouter = require('./routes/file');

require('./passport-config');

const bodyParser = require("body-parser");
var cors = require('cors');
require("dotenv").config();

//// pour que je puisse accéder au images 
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type: application/json"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
app.use('/api/users', userRouter);
app.use('/api/forms',  formRouter);
app.use('/api/forms3', form3Router);    
app.use('/api/equipe', EquipeRouter);   
app.use('/File', fileRouter);
app.listen(3000, () => console.log('server started:3000'));   
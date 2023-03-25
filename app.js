const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AdminRouter =require('./Router/adminrouter')
const UserRouter = require ('./Router/userrouter')
const Directory = require('./utility/path')

const app = express();
app.use(express.static(path.join(Directory,'public')));

app.use(AdminRouter);
app.use(UserRouter);
app.use(bodyParser.urlencoded({extended:true}));



app.listen(8080);
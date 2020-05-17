const express = require('express'); //Importing server module

const middleRouter = require('./providers/middlewareRouter');
const apiRouter = require('./providers/apiRouter');
const webRouter = require('./providers/webRouter');

const app = express(); //This instantiates the server like a class

app.use(middleRouter); //MiddleWare Router
app.use('/api', apiRouter); //apiRouter
app.use(webRouter); // web router

app.use('/api/project', (req, res) => res.send('hdaoifje'));

app.listen(5000, () => console.log('Server started at 5000')); //Starts the server and tells you that the server has started

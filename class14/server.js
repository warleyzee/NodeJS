require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
 
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectando...')
        app.emit('done');
    }) 
    .catch(e => console.log(e));
 

const routes = require('./routes')
const path = require('path');
const middleware = require('./src/middleware/middleware')

app.use(express.urlencoded({extended: true})) 
  
// app.use(express.static(path.resolve(__dirname, '/public')));
app.use(express.static('./public'));
 
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleware);
app.use(routes);
app.on('done', () => {
    app.listen(3000, () => {
        console.log('Access http://localhost:3000');
        console.log('server run door 3000'); 
    });
}); 



 

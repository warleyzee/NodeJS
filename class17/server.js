require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectando...');
        app.listen(3000, () => {
            console.log('Access http://localhost:3000');
            console.log('server run door 3000');
        });
    })
    .catch(e => console.log(e));

// const session = require('express-session');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes') 
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {middleware, checkCsrfError } = require('./src/middleware/middleware')


app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

const store = MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
});

app.use(session({
    secret: 'abcdefghijklmnopqrstuvxywz()',
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
}));

app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middleware);
app.use(checkCsrfError);
app.use(routes);
app.on('done', () => {
    app.listen(3000, () => {
        console.log('Access http://localhost:3000');
        console.log('server run door 3000'); 
    });
}); 



 

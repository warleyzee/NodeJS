const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactsController = require('./src/controllers/contactsController');

function myMiddleware(req,res, next){
    console.log();
    console.log('middleware');
    console.log();
    next();
}

// Home Routes 
route.get('/', myMiddleware, homeController.homePage);
route.post('/', homeController.sendForm);

// Contacts Routes

route.get('/contacts', contactsController.contactsPage);
route.post('./contacts', contactsController.sendFormContacts);

module.exports = route; 
const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactsController = require('./controllers/contactsController');


// Home Routes 
route.get('/', homeController.homePage);
route.post('/', homeController.sendForm);

// Contacts Routes

route.get('/contacts', contactsController.contactsPage);
route.post('./contacts', contactsController.sendFormContacts);

module.exports = route; 
const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Segundo Dado mongo',
//     id: 2,
//     name: 'WarleYzee'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.homePage = (req,res ) => {
    // req.session.user = {nome: 'Warley Henrique', Logado:true};
    req.flash('info', 'Hello World');
    req.flash('error', 'Error');
    req.flash('success', 'Success');
    console.log(req.flash('info'), req.flash('error'), req.flash('success'))
    console.log( req.session.user) 
    res.render('index');
};

exports.sendForm = (req, res) =>{
    // console.log(req.body);
    res.send(`Form Done: ${req.body.name}`)

};
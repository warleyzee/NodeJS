exports.homePage = (req,res ) => {
    res.render('index');
};

exports.sendForm = (req, res) =>{
    // console.log(req.body);
    res.send(`Form Done: ${req.body.name}`)

};
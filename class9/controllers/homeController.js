exports.homePage = (req,res ) => {
    res.send(`
    <form action="/" method="POST">
    Name:<input type="text" name="name">
    <button>Click</button>
    </form>
    `);
};

exports.sendForm = (req, res) =>{
    // console.log(req.body);
    res.send(`Form Done: ${req.body.name}`)

};
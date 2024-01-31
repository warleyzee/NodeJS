exports.contactsPage = (req,res) => {
    res.send(`
    <form action="/" method="POST">
    Contato: <input type="text" name="contact">
    <button>Click</button>
    </form>
    `);
}

exports.sendFormContacts = (req, res) =>{
    res.send("Clicou no POST")
};
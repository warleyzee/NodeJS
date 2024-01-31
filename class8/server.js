const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
 
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name:<input type="text" name=" ">
    <button>Click</button>
    </form>
    `);
});

app.get('/house', (req,res) => {
    res.send('Your House add'); 
});

app.get('/tests/:id_usurs?/:outraCoisa?', (req,res) =>{
    console.log(req.params);
    res.send(req.params); 
});

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`Form Done: ${req.body.name}`); 
})

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('server run door 3000'); 
});
 

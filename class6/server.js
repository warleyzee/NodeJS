const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/house', (req,res) => {
    res.send('My House');
})

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('server run door 3000'); 
});


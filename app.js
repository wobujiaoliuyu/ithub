const express = require('express');

const app = express();

const PORT = 3000;

//监听端口
app.listen(PORT, () => {
    console.log('监听3000');
});


app.get('/', (req, res) =>{
    // res.send('hello Express');
    // res.end('Hello');
    res.send({
        "name":"zs",
        "age":"18"
    })
});
const PORT = 5000;
const express = require('express');
const app = express();
const apiRoute = require('./routes/api')
const path = require('path');

app.use('/api', apiRoute)

app.use('/',express.static(path.join(__dirname, "public")))


app.listen(PORT, () =>{
    console.log(`Servidor rodando na Porta:${PORT}`);
})



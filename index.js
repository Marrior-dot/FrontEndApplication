var express = require("express");
var app = express();
var path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/src/views/'))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000, (req,res) => {
    console.log("Aplicação sendo executado na porta 8000")
})
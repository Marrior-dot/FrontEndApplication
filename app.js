var express = require("express");
var app = express();
var path = require('path')
const pathToStatic = path.join(__dirname,'src','public','css')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/src/views/'))
app.use(express.static(pathToStatic))

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, '0.0.0.0',(req,res) => {
})
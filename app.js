var express = require("express");
var app = express();
var path = require('path')
const pathToStatic = path.join(__dirname,'src','public','css')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/src/views/'))
app.use(express.static(pathToStatic))


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000, '0.0.0.0',(req,res) => {
    console.log("Aplication is running on port 8000")
})
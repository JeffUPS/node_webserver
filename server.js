const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/home', function(req, res) {
    res.render('home', {
        nombre: "jefferson"
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        nombre: "Jefferson"
    });
});
app.listen(port, () => {
    console.log("Escrucnahdo peticion en el puerto 3000");
});
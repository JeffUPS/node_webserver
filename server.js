//Importamos la libreria express
const express = require('express');
const app = express();

//Importamos la libreria hbs
const hbs = require('hbs');
require('./hbs/helpers')

//Elegira cual quier puerto disponible o el puerto 3000 
const port = process.env.PORT || 3000;

//Asi podremos llamar a nuestros css, js a nuestros hbs
app.use(express.static(__dirname + '/public'));

//Express HBS engine
//Podremos llamar a diferentes hbs para juntarlos en uno 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//Utilizamos el metodo GET para nuestro index
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "jefferson Y"
    });
});

//Utilizamos el metodo GET para nuestro about
app.get('/about', function(req, res) {
    res.render('about', {
        nombre: "Jefferson"
    });
});

//Escucha el puerto disponible
app.listen(port, () => {
    console.log("Escrucnahdo peticion en el puerto 3000");
});
//Importamos la libreria hbs
const hbs = require('hbs');
//Por medio de esta funcion obtendremos el año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

//Pondremos una letra capital en el texto que deseemos
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
//Impotamos la libreria http
const http = require('http');

//Creamos el servidor para poder ver de manera local nuestra web
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: "Jefferson Y",
        edad: 24,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    res.end();
}).listen(8080);
//Mensaje que nos saldra en consola
console.log("Escuchando en el puerto 8080");
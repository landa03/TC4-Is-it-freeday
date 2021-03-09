const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// rutas / routes
// la diagonal significa el origen de las rutas
// req = request, res = respond

app.get("/", (req, res) => {

    //TODO: lojica de revision de fecha
    // let en el servidor, var en cliente, funcion flecha en servidor no en el cliente
    let message = "PENDIENTE DE CONFIRMAR";
    let currentDate = new Date();

    // se ejecuntan en consola con console.log('currentDate()',currentDate.getDay());
    // currentDate.getDay() //dia de la semana donde el dom es 0
    // currentDate.getMonth()  //mes contado apartir del 0
    // currentDate.getFullYear()   // a;o actual
    // currentDate.getDate()   //dia del mes
    
    // dia del a;o
    // dia de la semana
    let targetDayOfWeek = 5;
    let currentDay = currentDate.getDay();

    if (currentDay === targetDayOfWeek) {
        message = "Si";
    }else{
        message = "No";
    }

    // res.send('hello world');
    // se asume que se incluye views al inisio
    // no es nesesaria la extension del archivo
    res.render("pages/index", {
        // messaje: message
        message
    });
});

app.use(express.static("public"));

app.listen(port, () => {
    // las `` te permiten meter variables
    console.log(`Listening at http://localhost:${port}`);
});
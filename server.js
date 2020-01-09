const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

app.use(express.static(__dirname + '/public'));

//
// ─── EXPRESS HBS ENGINE ─────────────────────────────────────────────────────────
//

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Marlon barzola'
    });
    
});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {

    console.log(`Server escuchando en el puerto ${ port }`);

});
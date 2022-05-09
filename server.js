require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {

})

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home', {
        templateName: 'Node Course'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        templateName: 'Node Course'
    });
});

app.get('/element', (req, res) => {
    res.render('element',{
        templateName: 'Node Course'
    });
});
//
// app.get('*', (req, res) => {
//     res.status(404).send('404 | Page not found');
// });


app.listen(port);

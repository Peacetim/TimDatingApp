const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
// environment var port
const port = process.env.PORT || 3000;
//setup view engine
app.engine('handlebars',exphbs({defaultlayout:'main'}));
app.set('view engine','handlebars');

app.get('/',(req,res) => {
    res.render('home',{
        title: 'Home'
    });
});

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About'
    });
});

app.get('/contact',(req,res) => {
    res.render('contact',{
        title: 'Contact'
    });
});
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
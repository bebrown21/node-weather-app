const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('upperCaseText', (text) => {
  return text.toUpperCase();
});

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((request, response, next) => {

  next();
});

app.use((request, response, next) => {
  response.render('maintenance.hbs');
});

app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle: 'Home Page'
  });
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
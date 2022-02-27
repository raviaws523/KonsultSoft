const express = require('express');
const bodyParser = require('body-parser');
const CoinGecko = require('coingecko-api');

const loginRoutes = require('./routes/login')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(loginRoutes);



app.listen(process.env.PORT || 3001, () => {
    console.log("Server is up and running ");
});
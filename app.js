const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fileUpload = require('express-fileupload');
const routes = require('./routers/');
const session = require('express-session');
const { route } = require('./routers/');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());

app.use(session({
    secret: 'safetravel',
    resave: false,
    saveUninitialized: true,
}))

app.use('/', routes);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
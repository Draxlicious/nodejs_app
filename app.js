const express = require("express")
const app = express()
const path = require('path');
const morgan = require('morgan')
const mysql = require("mysql")

const port = process.env.PORT || 3000
app.use(morgan('dev'))

// peg på directory views skal læses
app.set('views', path.join(__dirname, 'server/views'));
// vælg html format der skal vises
app.set('view engine', 'ejs');
// peg på hvilken stig css/img skal læses
app.use(express.static('./public'));


// importer externe filer fra routes
// require('./server/routes/routes.js')(app);
app.use('/', require('./server/routes/routes'))



app.listen(port, (err)=>{
    if(err) err
    console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
    console.log(`server listen on http://localhost:${port}`);
})
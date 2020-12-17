const express = require("express")
const app = express()
var path = require('path');
const port = process.env.PORT || 3000

// peg på directory views skal læses
app.set('views', path.join(__dirname, 'server/views'));
// vælg html format der skal vises
app.set('view engine', 'ejs');
// peg på hvilken stig css/img skal læses
app.use(express.static('./public'));


// importer externe filer
require('./server/routes/routes.js')(app);


app.listen(port, (err)=>{
    if(err) err
    console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
    console.log(`server listen on http://localhost:${port}`);
})
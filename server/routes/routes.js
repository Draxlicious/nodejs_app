const express = require('express')
const router = express.Router()
const db = require('../config/mysql')


router.get('/', (req, res) =>{

    var sql='SELECT * FROM customers';
    db.query(sql, function (err, result, fields) {
    if (err) throw err;
        res.render('index',{ title: 'Customer List', userData: result})
    })
})

router.get('/home', (req, res) =>{
    res.send('Home page')
})

router.get('/dashboard', (req, res) =>{
    res.send('Dashboard')
})

module.exports = router
const express = require('express')
const router = express.Router()
const mysql = require("mysql")
const db = require('../../app')

// router.get('/', (req, res) =>{

//     db.query(`SELECT * FROM customers`, function(err, result, fields){
//         if(err) throw err
//         console.log(result);
//         res.render('index',{ title: 'Customer List', userData: result})
//     })
// })

router.get('/home', (req, res) =>{
    res.send('Home page')
})

router.get('/dashboard', (req, res) =>{
    res.send('Dashboard')
})

module.exports = router
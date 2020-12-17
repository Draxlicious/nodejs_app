const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index')
})
router.get('/home', (req, res) =>{
    res.send('Home page')
})

router.get('/dashboard', (req, res) =>{
    res.send('Dashboard')
})

module.exports = router
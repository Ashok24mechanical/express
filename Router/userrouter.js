const express = require('express')

var router = express.Router()

router.get('/product',(req,res,next)=>{
    res.send('<h1>Product Available</h1>')
})
router.use((req,res,next)=>{
    res.status(404).send('<h1>404 Page not found</h1>')
})

module.exports = router;

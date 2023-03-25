const express = require('express')
const path = require('path')
const Directory = require('../utility/path')

var router = express.Router()


router.get('/input',(req,res,next)=>{
    // res.send('<form action="http://localhost:8080/redirect" method="POST" ><input type="text" name="datas"><br><input type="submit" value submit></form>')
    res.sendFile(path.join(Directory,'view','admin.html'))
})
router.post('/redirect',(req,res,next)=>{
    res.sendFile(path.join(Directory,'view','user.html'))
});

module.exports = router;

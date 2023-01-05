const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to rental service movie service")
})

module.exports=router
const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to Movie Rental Service")
})

module.exports=router
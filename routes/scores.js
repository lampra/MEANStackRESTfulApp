const express= require('express');
const router=express.Router();

//scoreboard
router.get('/scoreboard',(req,res,next)=>{
res.send('SCORES');
});

//newscore
router.get('/newscore',(req,res,next)=>{
res.send('NEWSCORE');
});

//Profile
router.get('/profile',(req,res,next)=>{
    res.send('PROFILE');
});

module.exports=router;

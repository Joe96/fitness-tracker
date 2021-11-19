const router = require('express').Router();
const path = require('path');

router.get('/exercise', (req,res) => {
    console.log("Exercise route hit")
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get('/stats', (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports=router;
const router = require('express').Router();
const workout = require('../../models/workout.js');

router.get('/workouts', (req,res) =>{
    res.send("Ready to workout?")
        //workout.aggregate
        //addfield, total dur, sum

});

router.put('/workouts/:id', (req,res) =>{
    res.send("put")

    //workout.findByIdAndUpdate
    //req.params.id
});

router.post('/workouts', (req,res) =>{
    console.log(req.body)
    res.send("post")

    //workout.create()
});

router.get('/workouts/range', (req,res) =>{
    res.json({})
    //workout.aggregate().sort().limit.then
        //addfield, total dur, sum
    });
module.exports = router;
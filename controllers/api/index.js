const router = require('express').Router();
const workout = require('../../models/workout.js');

//workout.aggregate
//addfield, total dur, sum
router.get('/workouts', (req, res) => {
    workout.aggregate(
        [{
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
                },
            },
        }])
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((e) => {
            res.json(e)
        })

    //res.json({work:"work"})
});

//workout.findByIdAndUpdate
//req.params.id
router.put('/workouts/:id', (req, res) => {
    workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

//workout.create()
router.post('/workouts', (req, res) => {
    workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//workout.aggregate().sort().limit.then
//addfield, total dur, sum
router.get('/workouts/range', (req, res) => {
    workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercise.duration' }, totalWeight: { $sum: '$exercises.weight' } } }])
        .limit(10)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((e) => {
            res.json(e)
        })
});

module.exports = router;
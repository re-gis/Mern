const asynHandler = require('express-async-handler');

//Desc Get goals
//Route GET/api/goals

const { json } = require("express");

//Access private
const getGoals = asynHandler( async (req, res) => {
    res.status(200).json({message: 'Get goal'});
});


//Desc Set goal
//Route POST/api/goals
//Access private
const setGoal = asynHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    };

    res.status(200).json({message: 'Set goal'});
});


//Desc Update goal
//Route PUT/api/goals/:id
//Access private
const updateGoal = asynHandler( async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
});


//Desc Delete goal
//Route DELETE/api/goals/:id
//Access private
const deleteGoal = asynHandler( async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,deleteGoal
}
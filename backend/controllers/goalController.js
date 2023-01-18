const asynHandler = require('express-async-handler');
const { json } = require("express");
const Goal = require('../models/goalModel');


//Desc Get goals
//Route GET/api/goals
//Access private
const getGoals = asynHandler( async (req, res) => {
const goals = await Goal.find();

    res.status(200).json(goals);
});


//Desc Set goal
//Route POST/api/goals
//Access private
const setGoal = asynHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    };
const goal = await Goal.create({
    text: req.body.text,
})


    res.status(200).json(goal);
});


//Desc Update goal
//Route PUT/api/goals/:id
//Access private
const updateGoal = asynHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('Goal not found!');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });


    res.status(200).json(updatedGoal);
});


//Desc Delete goal
//Route DELETE/api/goals/:id
//Access private
const deleteGoal = asynHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!Goal) {
        res.status(400);
        throw new Error('Goal not found!');
    }

    await goal.remove()


    res.status(200).json({id: req.params.id});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
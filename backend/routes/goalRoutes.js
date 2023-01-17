const express = require('express');
const router = express.Router();
const { getGoals } = require('../controllers/goalController');
const { setGoal } = require('../controllers/goalController');
const { updateGoal } = require('../controllers/goalController');
const { deleteGoal } = require('../controllers/goalController');


router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);



module.exports = router;
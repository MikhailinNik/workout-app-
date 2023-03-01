import express from 'express';

import { protect } from '../middleware/auth.middleware.js';

import {
	createNewWorkoutLog,
	getWorkoutLog,
	updateCompleteWorkoutLog
} from './log/workout-log.controller.js';
import {
	createWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout
} from './workout.controller.js';

const router = express.Router();

router.route('/').post(protect, createWorkout).get(protect, getWorkouts);

router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout);

router
	.route('/log/:id')
	.post(protect, createNewWorkoutLog)
	.get(protect, getWorkoutLog);

router.route('/log/complete/:id').patch(protect, updateCompleteWorkoutLog);

export default router;

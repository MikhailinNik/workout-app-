import express from 'express';

import { protect } from '../middleware/auth.middleware.js';

import {
	createExercise,
	deleteExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js';
import { createExerciseLog } from './log/exercise-log.controller.js';
import { getExerciseLog } from './log/get-exercise-log.controller.js';
import {
	updateExerciseLogComplete,
	updateExerciseLogTime
} from './log/update-exercise-log.js';

const router = express.Router();

router.route('/').post(protect, createExercise).get(protect, getExercises);

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise);

router
	.route('/log/:id')
	.post(protect, createExerciseLog)
	.get(protect, getExerciseLog);

router.route('/log/time/:id').put(protect, updateExerciseLogTime);

router.route('/log/complete/:id').patch(protect, updateExerciseLogComplete);

export default router;

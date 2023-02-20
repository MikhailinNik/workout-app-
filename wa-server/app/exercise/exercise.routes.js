import express from 'express';

import { protect } from '../middleware/auth.middleware.js';

import {
	createExercise,
	deleteExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js';

const router = express.Router();

router.route('/').post(protect, createExercise).get(protect, getExercises);

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise);

export default router;

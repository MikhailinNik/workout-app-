import asyncHandler from 'express-async-handler';

import { prisma } from '../prisma.js';

// @desc Post create workout
// @route POST /api/workouts
// @access Private
export const createWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body;
	console.log('req.body: ', req.body);

	const workout = await prisma.workout.create({
		data: {
			name,
			exercises: {
				connect: exerciseIds.map(id => ({ id: +id }))
			}
		}
	});

	res.json(workout);
});

// @desc Get workouts
// @route GET /api/workouts
// @access Private
export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			exercises: true
		}
	});

	res.json(workouts);
});

// @desc Get workout
// @route GET /api/workouts/:id
// @access Private
export const getWorkout = asyncHandler(async (req, res) => {
	const workout = await prisma.workout.findMany({
		where: {
			id: +req.params.id
		},
		include: {
			exercises: true
		}
	});

	if (!workout) {
		res.status(404);
		throw new Error('Workout not found!');
	}

	const minutes = Math.ceil(workout.exercises.length * 2.7);

	res.json({ ...workout, minutes });
});

// @desc Update workout
// @route PUT /api/workouts/:id
// @access Private
export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body;
	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
					set: exerciseIds.map(exercise => +exercise.id)
				}
			}
		});

		res.json(workout);
	} catch (error) {
		res.status(404);
		throw new Error('Workout not found!');
	}
});

// @desc Delete workout
// @route DELETE /api/workouts/:id
// @access Private
export const deleteWorkout = asyncHandler(async (req, res) => {
	try {
		await prisma.workout.delete({
			where: {
				id: +req.params.id
			}
		});

		res.json({ message: 'Workout delete!' });
	} catch (error) {
		res.status(404);
		throw new Error('Workout not found!');
	}
});

import asyncHandler from 'express-async-handler';

import { prisma } from '../prisma.js';

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: +req.user.id
		},

		select: {
			id: true,
			createdAt: true,
			email: true,
			images: true,
			updatedAt: true,
			name: true
		}
	});

	const countExerciseTimesCompleted = await prisma.exerciseLog.count({
		where: {
			userId: req.user.id,
			isCompleted: true
		}
	});

	const kilograms = await prisma.exerciseTime.aggregate({
		where: {
			exerciseLog: {
				userId: req.user.id
			},
			isCompleted: true
		},

		_sum: {
			weight: true
		}
	});

	const workouts = await prisma.workoutLog.count({
		where: {
			userId: req.user.id,
			isCompleted: true
		}
	});

	res.json({
		...user,
		statistics: [
			{
				label: 'Minutes',
				value: countExerciseTimesCompleted || 0
			},
			{
				label: 'Kilograms',
				value: kilograms._sum.weight || 0
			},
			{
				label: 'Workouts',
				value: workouts || 0
			}
		]
	});
});

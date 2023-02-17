import 'colors';
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import { errorHandler, notFound } from './app/middleware/error.middleware.js';

import authRoutes from './app/auth/auth.routes.js';
import { prisma } from './app/prisma.js';

const app = express();
dotenv.config();

async function main() {
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}

	app.use(express.json());
	app.use('/api/auth', authRoutes);

	app.use(notFound);
	app.use(errorHandler);

	const PORT = process.env.PORT || 5000;

	app.listen(
		PORT,
		console.log(
			`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
		)
	);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

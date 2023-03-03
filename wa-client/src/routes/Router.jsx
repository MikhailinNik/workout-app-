import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import NotFound from '../components/screens/not-found/NotFound';

import { routes } from './routes.data';

export const Router = () => {
	const { isAuth } = useAuth();

	const authRoutes = routes.filter(route => route.auth);
	const notAuthRoutes = routes.filter(route => !route.auth);

	return (
		<BrowserRouter>
			<Routes>
				{isAuth
					? authRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<route.component />}
							/>
					  ))
					: notAuthRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<route.component />}
							/>
					  ))}

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

import Cookie from 'js-Cookie';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from './useAuth';

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		const token = Cookie.get('bread');

		if (!token) {
			return setIsAuth(false);
		}
	}, [pathname, isAuth]);
};

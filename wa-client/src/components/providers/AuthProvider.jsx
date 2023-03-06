import Cookie from 'js-Cookie';
import { createContext, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookie.get('bread'));

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

import cn from 'clsx';
import Cookie from 'js-Cookie';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import styles from './Humburger.module.scss';
import { menu } from './menu.data.js';

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth();
	const navigate = useNavigate();

	const logoutHandler = () => {
		Cookie.remove('bread');
		setIsAuth(false);
		setIsShow(false);
		navigate('/auth');
	};
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

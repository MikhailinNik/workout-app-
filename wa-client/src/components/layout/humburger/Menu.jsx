import cn from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Humburger.module.scss';
import { menu } from './menu.data.js';

const Menu = ({ isShow }) => {
	const logoutHandler = () => {};
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

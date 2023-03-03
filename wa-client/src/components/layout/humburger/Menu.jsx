import cn from 'clsx';
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
					<li key={index}>{item.title}</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

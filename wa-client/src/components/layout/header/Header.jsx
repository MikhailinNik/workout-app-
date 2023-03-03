import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Hamburger from '../humburger/Hamburger';

import styles from './Header.module.scss';

const Header = () => {
	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button>
				<Link to='/'>
					<FiArrowLeft color='white' fontSize={30} />
				</Link>
			</button>

			<Hamburger />
		</header>
	);
};

export default Header;

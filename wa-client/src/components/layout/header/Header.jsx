import { FaUserNinja } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Hamburger from '../humburger/Hamburger';

import styles from './Header.module.scss';

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button onClick={() => navigate(isAuth ? backLink : '/auth')}>
					<FiArrowLeft color='white' fontSize={30} />
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<FaUserNinja color='white' fontSize={30} />
				</button>
			)}

			{isAuth && <Hamburger />}
		</header>
	);
};

export default Header;

import { FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../../hooks/useAuth';
import styles from './Header.module.scss';
import Hamburger from '../humburger/Hamburger';

const Header = () => {
	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button>
				<FiArrowLeft color='white' />
			</button>
			<Hamburger />
		</header>
	);
};

export default Header;

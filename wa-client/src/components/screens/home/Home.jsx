import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Stats from '../../ui/stats/Stats';

import styles from './Home.module.scss';

function Home() {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	return (
		<Layout bgImage='images/deadpool-star-m3.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			{!isAuth ? (
				<>
					<h1 className={styles.heading}>EXERCISES</h1>
					<Stats />
				</>
			) : (
				''
			)}
		</Layout>
	);
}

export default Home;

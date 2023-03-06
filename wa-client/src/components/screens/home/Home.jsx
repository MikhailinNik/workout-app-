import { useNavigate } from 'react-router-dom';

import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Stats from '../../ui/stats/Stats';

import styles from './Home.module.scss';

function Home() {
	const navigate = useNavigate();

	return (
		<Layout bgImage='images/deadpool-star-m3.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES</h1>
			<Stats />
		</Layout>
	);
}

export default Home;

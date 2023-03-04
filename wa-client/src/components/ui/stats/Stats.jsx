import styles from './Stats.module.scss';
import { stats } from './stats.data';

const Stats = () => {
	return (
		<ul className={styles.wrapper}>
			{stats.map(stat => (
				<li key={stat.value}>
					<h2>{stat.title}</h2>
					<p>{stat.value}</p>
				</li>
			))}
		</ul>
	);
};

export default Stats;

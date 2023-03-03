import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import styles from './Humburger.module.scss';
import Menu from './Menu';

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoCloseOutline color='white' /> : <HiMenu color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	);
};

export default Hamburger;

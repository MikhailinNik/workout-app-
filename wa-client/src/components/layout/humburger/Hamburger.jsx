import { HiMenu } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

import styles from './Humburger.module.scss';
import Menu from './Menu';

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<IoCloseOutline color='white' fontSize={30} />
				) : (
					<HiMenu color='white' fontSize={30} />
				)}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	);
};

export default Hamburger;

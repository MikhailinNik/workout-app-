import { useAuthPage } from '../../../hooks/useAuthPage';

import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';
import Loader from '../../ui/loader/Loader';

import styles from './Auth.module.scss';

const Auth = () => {
	const {
		setType,
		register,
		handleSubmit,
		errors,
		isLoading,
		onSubmit,
		isError
	} = useAuthPage();

	return (
		<>
			<Layout
				heading='Sign in'
				bgImage={'/images/false-password-auth.jpg' && 'images/auth-image.jpg'}
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						type='email'
						placeholder='Enter Email'
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
					/>
					<Field
						error={errors?.email?.message}
						type='password'
						placeholder='Enter Password'
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign In</Button>
						<Button clickHandler={() => setType('register')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;

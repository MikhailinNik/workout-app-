import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';
import Loader from '../../ui/loader/Loader';

import styles from './Auth.module.scss';

const isLoading = false;
const isLoadingAuth = false;

const Auth = () => {
	const [type, setType] = useState('auth');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<>
			<Layout heading='Sign in' bgImage='images/auth-image.jpg' />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
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
						<Button clickHandler={() => setType('auth')}>Sign In</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;

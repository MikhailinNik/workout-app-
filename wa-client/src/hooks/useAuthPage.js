import { useMutation } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthService from '../services/auth.service';

import { useAuth } from './useAuth';

export const useAuthPage = () => {
	const { isAuth, setIsAuth } = useAuth();
	const [type, setType] = useState('auth');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(type, email, password),
		{
			onSuccess: () => {
				setIsAuth(true);
				reset();
			}
		}
	);

	const onSubmit = data => {
		mutate(data);
	};

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}
	}, [isAuth]);

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[]
	);
};

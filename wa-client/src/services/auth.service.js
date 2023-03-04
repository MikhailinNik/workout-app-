import Cookies from 'js-Cookie';

import { $axios } from '../api';

class Authorization {
	async main(type, email, password) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, { email, password });

			if (data.token) {
				Cookies.set('bread', data.token);

				return data;
			}
		} catch (error) {
			throw new Error(error);
		}
	}
}

export default new Authorization();

import axios from 'axios';
import Cookie from 'js-Cookie';

export const $axios = axios.create({
	baseURL: 'http://localhost:4000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookie.get('bread')}`
	}
});

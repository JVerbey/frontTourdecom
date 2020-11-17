import axios from 'axios'

export default() => {
	console.warn(process.env.VUE_APP_BACK_END_URL);
	return axios.create({
		baseURL: process.env.VUE_APP_BACK_END_URL,
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token')
		}
	})
}

import axios from 'axios'

export default() => {
	return axios.create({
		baseURL: process.env.BACK_END_URL,
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access_token')
		}
	})
}

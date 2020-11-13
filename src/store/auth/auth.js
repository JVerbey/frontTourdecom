import {
	AUTH_REQUEST,
	AUTH_ERROR,
	AUTH_SUCCESS,
	AUTH_LOGOUT
} from '../actions/auth'
import Auth from "@/services/api/Auth";
import Axios from "axios";

const state = {
	token: localStorage.getItem('access_token') || '',
	status: '',
}

const getters = {
	isAuthenticated: state => !!state.token,
	authStatus: state => state.status,
}

const actions = {
	[AUTH_REQUEST]: ({commit}, user) => {
		return new Promise((resolve, reject) => { // The Promise used for router redirect in login
			commit(AUTH_REQUEST)
			Auth.login(user)
				.then(resp => {
					const token = resp.data.access_token
					localStorage.setItem('access_token', token) // store the token in localstorage
					Axios.defaults.headers.common['Authorization'] = token
					commit(AUTH_SUCCESS, token)
					resolve(resp)
				})
				.catch(err => {
					commit(AUTH_ERROR, err)
					localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
					reject(err)
				})
		})
	},
	[AUTH_LOGOUT]: ({commit}) => {
		commit(AUTH_LOGOUT)
		return new Promise((resolve) => {
			Auth.logout().catch(resp => {
				localStorage.removeItem('access_token') // clear your user's token from localstorage
				delete Axios.defaults.headers.common['Authorization']
				commit(AUTH_LOGOUT)
				resolve(resp)
			})
		})
	}
}

const mutations = {
	[AUTH_REQUEST]: (state) => {
		state.status = 'loading'
	},
	[AUTH_SUCCESS]: (state, token) => {
		state.status = 'success'
		state.token = token
	},
	[AUTH_ERROR]: (state) => {
		state.status = 'error'
	},
	[AUTH_LOGOUT]: state => {
		state.token = "";
	}
}

export default {
	state, getters, actions, mutations
}

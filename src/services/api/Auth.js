import Api from "./Api";

export default {
	login: function(data)
	{
		return Api().post(`auth/login`, data)
	},
	logout: function() {
		return Api().post(`auth/logout`)
	}
}

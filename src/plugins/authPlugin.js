import formatUser from "@/services/formatUser";

export default {
	install: (Vue, { strategy }) => {
		Vue.prototype.$auth = new Vue({
			data() {
				return {
					user: null
				};
			},

			methods: {
				setUser(user) {
					if (user) {
						this.user = formatUser(user);
					}
				},

				init() {
					return strategy.getConnectedUser()
						.then(user => {
							this.setUser(user);
						})
						.catch(console.error);
				},

				login(email, password) {
					return strategy.login(email, password)
						.then(user => {
							this.setUser(user);
						})
						.catch(console.error);
				},

				logout() {
					return strategy.logout()
						.then(() => {
							this.user = null;
						})
						.catch(console.error);
				}
			}
		});
	}
};

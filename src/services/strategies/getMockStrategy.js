/**
 * @param {Object[]} users
 * @param {String}   [lsKey]
 *
 * @return {Object}
 */
export default function getMockStrategy(users, lsKey = "user") {
	return {
		/**
		 * @return {Promise}
		 */
		getConnectedUser() {
			const user = localStorage.getItem(lsKey);

			return Promise.resolve(user ? JSON.parse(user) : null);
		},

		/**
		 * @param {String} email
		 * @param {String} password
		 *
		 * @return {Promise}
		 */
		login(email, password) {
			const user = users.find(user => user.email === email && user.password === password);

			if (user) {
				localStorage.setItem(lsKey, JSON.stringify(user));
			}

			return Promise.resolve(user || null);
		},

		/**
		 * @return {Promise}
		 */
		logout() {
			localStorage.removeItem(lsKey);

			return Promise.resolve();
		}
	};
}

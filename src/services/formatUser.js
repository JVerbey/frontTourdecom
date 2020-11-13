
/**
 * @param {Object} user
 *
 * @return {String}
 */
function getDisplayName(user) {
	if (user.name) {
		return user.name;
	}

	if (user.firstName && user.lastName) {
		return user.firstName + " " + user.lastName;
	}

	return user.email;
}

/**
 * @param {Object} user
 *
 * @return {Object}
 */
export default function formatUser(user) {
	return {
		email: user.email,
		displayName: getDisplayName(user)
	};
}

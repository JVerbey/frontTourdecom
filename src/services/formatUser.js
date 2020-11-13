
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
 * @return {{access_token: (Object.access_token|string), displayName: String, email: string | string}}
 */
export default function formatUser(user) {
	return {
		email: user.email,
		displayName: getDisplayName(user),
		access_token: user.access_token
	};
}

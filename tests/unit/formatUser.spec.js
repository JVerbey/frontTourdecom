import formatUser from "@/services/formatUser";

describe("formatUser", () => {
	it("formats an user object correctly", () => {
		expect(formatUser({
			email: "jim@example.com",
			name: "Jimbo Kern"
		})).toEqual({
			email: "jim@example.com",
			displayName: "Jimbo Kern"
		});
	});

	it("builds a display name from first and last name if relevant", () => {
		expect(formatUser({
			email: "jim@example.com",
			firstName: "Jimbo",
			lastName: "Kern"
		})).toEqual({
			email: "jim@example.com",
			displayName: "Jimbo Kern"
		});
	});

	it("uses email for a display name as a last resort", () => {
		expect(formatUser({
			email: "jim@example.com"
		})).toEqual({
			email: "jim@example.com",
			displayName: "jim@example.com"
		});
	});
});

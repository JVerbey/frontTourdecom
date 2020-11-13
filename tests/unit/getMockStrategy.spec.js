import getMockStrategy from "@/services/strategies/getMockStrategy";

const strategy = getMockStrategy([{
	email: "martin.catty@delegateip.com",
	password: "Valipat01"
}]);

describe("getMockStrategy", () => {
	describe("login", () => {
		it("returns the logged-in user object upon success", () => {
			expect.assertions(1);

			strategy.login("martin.catty@delegateip.com", "Valipat01").then(user => {
				expect(user).toEqual({
					email: "martin.catty@delegateip.com",
					password: "Valipat01"
				});
			});
		});

		it("returns null upon failure", () => {
			expect.assertions(1);

			strategy.login("nobody@example.com", "nobody").then(user => {
				expect(user).toBeNull();
			});
		});
	});
});

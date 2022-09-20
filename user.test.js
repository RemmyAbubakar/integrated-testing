const {fetchData} = require("./fetchData")


describe("Testing Users", () => {
    it("should return 10 users", async () => {
        const users = await fetchData("users");
        expect(users.length).toBe(10);
    });

      it("should contain user ID users", async () => {
        const users = await fetchData("users");
        expect(users).toContainEqual({
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        });
      });
})
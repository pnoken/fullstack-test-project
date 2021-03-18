const getApis = require("../lib/apis/getApis")


describe("Testing all get API endpoints", () => {
    test("Get Users for Admin", ()=> {
        let results = getApis();
        console.log("results", results);
        expect(results).toBeDefined();
    })
})
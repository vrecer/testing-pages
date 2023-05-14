const chai = require("chai");
const expect = chai.expect;
const allure  = require('allure-js-commons/runtime');

describe("Journeys", function () {
  context("Validate Journey for partner", function () {
    let response;

    before(()=>{
     allure.feature('test')
    })
    it("2120022 test", async function () {
     allure.addFeature('2120022')
      expect(true).to.equal(true);
    });
    it("2120023: test", async function () {

      expect(true).to.equal(false);
    });
  });
});

// const request = require("supertest");
// const assert = require("chai").assert;
const { expect } = require("chai");
// const server = require("./index.js");
const CalculatePremium = require("./PremiumCalculator");
const CarValueNone = require('./PremiumCalculator')

describe('CalculatePremium()', () => {
  it("when car value is 10 and risk rating is 3 return 30", function () {
    //arrange
    const carValue = 1000;
    const riskRating = 3;
    const expected = {"yearlyPremium":30,"monthlyPremium":2.5};
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });

  it('When either input is left at 0', function () {
    //arrange
    const carValue = 0;
    const riskRating = 3;
    const expected = "Values need to be 1 or above!";
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });
  
  it("when risk rating is greater then 5", function () {
    //arrange
    const carValue = 2000;
    const riskRating = 6;
    const expected = "Risk rating can only be between 1 and 5";
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });
  
});




// import App from './index';
// const { cars } = require("./index.js");

// describe("Users API", () => {
//   it("GET /users", () => {
//     // Make a GET request to the users route
//     return request
//       .get("/users")
//       .expect(200)
//       .then((res) => {
//         assert.isNotEmpty(res.body);
//       });
//   });
// });

// it("POST /users", () => {
//   const data = {
//     name: "Test user",
//     email: "test_user@digitalonus.com",
//   };
//   return request
//     .post("/users")
//     .send(data) // send payload data
//     .then((res) => {
//       assert.hasAnyKeys(res.body, "id");
//       assert.equal(res.body.name, data.name);
//       assert.equal(res.body.email, data.email);
//     });
// });

function CalculatePremium(carValue, riskRating) {

    const yearlyPremium = (carValue * riskRating) / 100;
    const monthlyPremium = yearlyPremium / 12;

    if (carValue <= 0) {
    return "Values need to be 1 or above!";
  } else if (riskRating <= 0 || riskRating > 5) {
    return "Risk rating can only be between 1 and 5";
  } else return JSON.stringify({'yearlyPremium': yearlyPremium, 'monthlyPremium': monthlyPremium});
}

module.exports = CalculatePremium;

// function CarValueNone (car_value, risk_rating) {
//     const result = (car_value === '' ? "Sorry, you need to input a car value to proceed" : car_value)
//     return result
// }

// module.exports = CarValueNone;

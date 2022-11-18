const bmiCalc = require("./bmi-calculator");

test("Check if the bmi calculator result is 20.1 kg/m2", () =>{
    expect(bmiCalc(65,1.8)).toBe(20.1);
});

test("Check if the bmi calculator result is 27.2 kg/m2", () =>{
    expect(bmiCalc(74,1.65)).toBe(27.2);
});


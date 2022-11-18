function bmiCalc(weight, height){ // weight in KG and height in Meter

    var bmiResult = weight / Math.pow(height, 2);
  
    return Math.round(bmiResult * 10) / 10; // adding 1 decimal place to the result
  }

module.exports = bmiCalc;
// function that caclulates BMI
function bmiCalc(weight, height){

    var bmiResult = weight / Math.pow(height, 2);
    var roundedResult = Math.floor(bmiResult);
  
    return roundedResult;
  }
  
  
  // sample use
  var bmiCalcResult = bmiCalc(65, 1.8);
  console.log(bmiCalcResult);
function bmiCalc(weight, height){ // weight in KG and height in Meter

    var bmiResult = weight / Math.pow(height, 2);
  
    return bmiResult.toFixed(1); // adding 1 decimal place to the result
  }
  
  function testResult(result){ // Test if the result will equal to given result
    if(result == 20.1){
        console.log('The test result passed');
    }else{
        console.log('The test result failed');
    }
  }

  var bmiCalcResult = bmiCalc(65, 1.8);
  console.log(bmiCalcResult);
  testResult(bmiCalcResult);
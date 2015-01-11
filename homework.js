var bellatrix = {};

bellatrix.logicalPrograms = {

	getInputValuesFromForm : function() {

  	var valueArray = [];
  	var number1 = document.getElementById("number1").value;
  	var number2 = document.getElementById("number2").value;
  	valueArray.push(parseInt(number1));
  	valueArray.push(parseInt(number2));
  	return valueArray;

	},

  findMaxNo : function() {

  	var returnValue = this.getInputValuesFromForm();
  	var displayResult = document.getElementById("displayResult");

  	if(returnValue[0] < returnValue[1]) {
  		displayResult.innerHTML=returnValue[1] + " is a biggest number";
  	}
  	else {
  		displayResult.innerHTML=returnValue[0] + " is  a biggest number";
    }

  },

  checkVowel : function() {

    var getInputValue = document.getElementById("singlechar").value;
    var vowels = ['a','e','i','o','u'];
    var result = this.findVowel(vowels,getInputValue);
    document.getElementById("displayResult").innerHTML = result;

  },


  findVowel : function(vowelsArray,inputChar) {

      var isVowel = false;

  	  	for(i=0;i<vowelsArray.length;i++) {

  			if(vowelsArray[i] == inputChar) {
          isVowel = true;
          break;
  			}
  	}
    
    return isVowel;

  },

  reverse : function() {

  	var resultString="";
  	var inputString = document.getElementById("stringVal").value;
    var result = document.getElementById("displayResult");

  	for(i=inputString.length-1;i>=0;i--) {
  		resultString = resultString + inputString.charAt(i);
  	}
  	result.innerHTML = resultString;
  },

  inputValueForSumAndProduct : function() {

  var inputValue = document.getElementById("multiSelectInputBox");
  var select = [];
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.options[i].selected) select.push(inputValue.options[i].value);
    }
   return select;
  },

  sumOfArray : function() {

    var resultOfSum = 0;
    var arrayValues = this.inputValueForSumAndProduct();

    for(i=0;i<arrayValues.length;i++) {
      resultOfSum = resultOfSum + parseInt(arrayValues[i]);
    }

  document.getElementById("displayResultForSum").innerHTML = resultOfSum;
  },

  productOfArray : function() {

    var resultOfProduct = 1;
    var arrayValues = this.inputValueForSumAndProduct();

    for(i=0;i<arrayValues.length;i++) {
      resultOfProduct = resultOfProduct * parseInt(arrayValues[i]);
    }

  document.getElementById("displayResultForProduct").innerHTML = resultOfProduct;
  },

  displayResult : function() {

      if(document.getElementById("displayResult") != null){
        document.getElementById("displayResult").innerHTML="";
      }

       if(document.getElementById("displayResultForSum")!= null){
        document.getElementById("displayResultForSum").innerHTML="";
      }
      if(document.getElementById("displayResultForProduct") != null){
        document.getElementById("displayResultForProduct").innerHTML="";
      }

    }
  };
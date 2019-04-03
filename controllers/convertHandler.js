/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {

    var matchInputNum = /^((\d|\,|\.|\/)+)?([a-zA-Z]+)/.exec(input);

    if (matchInputNum != 0) {

      if (matchInputNum[1] === undefined) return 1;

      validNum = /^(\d+(((\/)\d+)|(,|\.)\d+(\/\d+)?)?)/.exec(matchInputNum[1]);

      if (validNum != null) {

        var num = validNum[1];

        if (num.length == matchInputNum[1].length) {

          if (num.search("/") >= 0) {
            var fraction = num.split("/");
            return parseFloat(fraction[0], 10) / parseFloat(fraction[1], 10);
          }
          else {
            return parseFloat(num);
          }
        }
      }
    }
    return null;
  };
  
  this.getUnit = function(input) {
    var match = /(gal|lbs|mi|L|kg|km)$/i.exec(input);
    var result = (match != null) ? match[1] : null;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {

    if (initUnit) initUnit = initUnit.toLowerCase();

    convertDict = {
      'gal': 'l',
      'lbs': 'kg',
      'mi': 'km',
      'l': 'gal',
      'kg': 'lbs',
      'km': 'mi'
    }
    
    return convertDict[initUnit];
  };

  this.spellOutUnit = function(unit) {

    var unitDict = {
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    
    return unitDict[unit];
  };
  
  this.convert = function(initNum, initUnit) {

    if(initUnit) initUnit = initUnit.toLowerCase();

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = 0;
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum=0, initUnit=null, returnNum=0, returnUnit=null) {

    var result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
    
    return result;
  };
  
}

module.exports = ConvertHandler;

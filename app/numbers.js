exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
	var mask = 1 << bit-1;
	if ((num & mask) != 0) {
	return 1;
	} else {
	return 0;
	}
  },

  base10: function(str) {
	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
	var mask;
	var result = [];
	for(var i = 0;i < 8; i++){
		mask = 1 << i;
		if ((num & mask) != 0) {
		result.unshift('1');
		} else {
		result.unshift('0');
		}
	}
	
	result = result.join('');
	
	return result;
  },

  multiply: function(a, b) {

  }
};

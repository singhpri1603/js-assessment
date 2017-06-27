exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	var count = 0;
	var result = [];
	result.push(str.charAt(0));
	for(var i = 1; i<str.length;i++){
		var c = str.charAt(i);
		if(c === str.charAt(i-1)){
			count++;
			if(count < amount){
				result.push(c);
			}
		}else{
			count = 0;
			result.push(c);
		}
	}
	result = result.join('');
	
	return result;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
	var result = [];
	for(var i = str.length - 1; i > -1; i--){
		var c = str.charAt(i);
		result.push(c);
	}
	result = result.join('');
	
	return result;
  }
};

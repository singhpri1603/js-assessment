exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
  
	function fib(n){
		var result = 0;
		if(n === 1 || n === 2){
			return 1;
		}
		
		result = fib(n-1) + fib(n-2);
		
		return result;
	}
	
	return fib(n);
  },

  validParentheses: function(n) {
	function nPair(n) {
		if (n == 0)
			return [""];

		var result = [];
		for (var i = 0; i < n; ++i) {

			var lefts = nPair(i);
			var rights = nPair(n - i - 1);

			for (var l = 0; l < lefts.length; ++l)
				for (var r = 0; r < rights.length; ++r)
					result.push("(" + lefts[l] + ")" + rights[r]);
		}

		return result;
	}
	
	return nPair(n);
  }
};

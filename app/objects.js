exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	var result = [];
	for(var propt in obj){
		if(obj.hasOwnProperty(propt)){
			result.push(propt + ': ' + obj[propt]);
		}
		
	}
	
	return result;
  }
};

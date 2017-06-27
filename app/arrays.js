exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
	return -1;
  },

  sum: function(arr) {
	var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
	var result = [];
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] !== item){
			result.push(arr[i]);
		}
	}
	
	return result;
  },

  removeWithoutCopy: function(arr, item) {
	for (var i = 0; i < arr.length; i++){
		if(arr[i] === item){
			arr.splice(i,1);
			i--;
		}
	}
	
	return arr;
  },

  append: function(arr, item) {
	arr.push(item);
	
	return arr;
  },

  truncate: function(arr) {
	arr.pop();
	
	return arr;
  },

  prepend: function(arr, item) {
	arr.unshift(item);
	
	return arr;
  },

  curtail: function(arr) {
	arr.shift();
	
	return arr;
  },

  concat: function(arr1, arr2) {
	for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
	}
	
	return arr1;
  },

  insert: function(arr, item, index) {
	var result = [];
	for(var i = 0; i < arr.length; i++){
		if(i === index){
			result.push(item);
		}
		result.push(arr[i]);
	}
	
	return result;
  },

  count: function(arr, item) {
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === item){
			result++;
		}
	}
	
	return result;
  },

  duplicates: function(arr) {
	var sorted_arr = arr.slice().sort();
	var result = [];
	var last;
	for (var i = 0; i < arr.length - 1; i++) {
		var current = sorted_arr[i];
		if (sorted_arr[i + 1] == current && current !== last) {
			last = current;
			result.push(current);
		}
	}
	
	return result;
  },

  square: function(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++){
		result.push(arr[i]*arr[i]);
	}
	
	return result;
  },

  findAllOccurrences: function(arr, target) {
	var result = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === target){
			result.push(i);
		}
	}
	
	return result;
  }
};

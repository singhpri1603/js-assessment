exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
	var timeout;
    function begin () {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(begin, 100);
      }
    }

    begin();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};

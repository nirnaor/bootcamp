var work = function() {
  console.log('work');
};

var debounce = function(f, wait, options) {
  // Trick to ensure that the first try will run f.
  var lastExecutionTime = -1 * wait;

  return function() {
    var now = Date.now();
    if (now - lastExecutionTime > wait) {
      f();
      lastExecutionTime = now;
    }
  };
};

var limited = debounce(work, 4000);
setInterval(function() {
  console.log('will call the limited function now');
  limited();
}, 500);


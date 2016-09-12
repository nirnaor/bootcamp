// Q10

var work = function() {
  console.log('i am working');
};

var limitCallsAmount = function(f, x) {
  var counter = 0;
  return function(i) {
    if ((counter % x) === 0) {
      f();
    }
    counter += 1;
  };
};

var doSomething = limitCallsAmount(work, 10);

_(20).times(function(i) {
  doSomething();
});

// Q11
var limitCallsFrequency = function(f, x) {
  var wait = 1000 / x;
  return _.throttle(f, wait, {leading: true});
};

var heavy = function() {
  console.log('HEAVY');
};

var limited = limitCallsFrequency(heavy, 1);
setInterval(function() {
  console.log('will call the limited function now');
  limited();
}, 200);


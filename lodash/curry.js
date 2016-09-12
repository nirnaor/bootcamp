var add = function(a, b, c) {
  return a + b + c;
};

console.log(add(2, 3, 5));

var curry = function(func) {
  var requiredArgs = func.length;

  return function _curry() {
    var args = _(arguments).slice(0, arguments.length).value();
    if (args.length >= requiredArgs) {
      return func.apply(null, args);
    }
    return function f2() {
      var moreArgs = _.flatten(arguments);
      console.log(moreArgs);
      return _curry.apply(null, args.concat(moreArgs));
    };
  };
};

var curried = curry(add);
var a = curried(2);
var b = a(3);
var c = b(5);
console.log(c);

console.log(curried(2)(3)(5));

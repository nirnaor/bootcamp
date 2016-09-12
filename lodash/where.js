
var where = function(collection, source) {
  return _.filter(collection, function(item) {
    var result = true;
    _.keysIn(source).forEach(function(key) {
      if (!_.isEqual(item[key], source[key])) {
        result = false;
      }
    });
    return result;
  });
};

// var where = function(collection, source) {
//   return _.filter(collection, function(item) {
//       return _.isEqual(item, source)
//   });
// };

var users = [
  {user: 'barney', age: 36, active: false, pets: ['hoppy']},
  {user: 'fred', age: 40, active: true, pets: ['baby puss', 'dino']}
];

console.log(where(users, {age: 36, active: false}));
// => ['barney']
console.log(where(users, {pets: ['dino']}));
//  // => ['fred']

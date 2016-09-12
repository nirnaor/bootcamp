var q1 = function(adults) {
  return _.filter(adults, function(adult, i, col) {
    return (adult.age > 30) &&
      (_.intersection(['run', 'swim'], adult.skills).length === 2);
  });
};

var onlyChildren = function(persons) {
  return _.filter(persons, function(person) {
    return !person.hasOwnProperty('children');
  });
};

var sortBy = function(persons, attribute) {
  return _.sortBy(persons, function(p) {
    return p[attribute];
  });
};

var q2 = function(adults) {
  var skilledChildren = _.filter(onlyChildren(adults), function(child, i, col) {
    return _.intersection(['swim', 'dance'], child.skills).length > 0;
  });
  return sortBy(sortBy(skilledChildren, 'gender'), 'age');
};

var q4 = function(persons) {
  return _.filter(persons, function(person, i, col) {
    return (person.hasOwnProperty('children') === true) &&
           (person.married === false) &&
           (_.some(person.children, function(child) {
             return child.gender === 'female';
           }));
  });
};

var q5 = function(persons) {
  return _.filter(persons, function(person, i, col) {
    return (person.married === true) && (_(person.skills).includes('jump'));
  });
};

var q6 = function(persons) {
  return _(persons).filter(function(p) {
    return p.firstName.charCodeAt(0) > 105 &&
      (_(p.children).some(function(c) {
        return c.married === true;
      }));
  }).value();
};

var q7 = function(persons) {
  return _(persons).map(function(p) {
    var name = {first: p.firstName, last: p.lastName};
    return _(_(p).clone()).assign({name: name})
                          .omit(['firstName', 'lastName'])
                          .value();
  }).value();
};

var q8 = function(persons) {
  return _(persons).map(function(p) {
    return p.children || [];
  }).flatten().uniq().value();
};

var q9 = function(persons) {
  return _.map(persons, 'age');
};

var omer = {firstName: 'omer', lastName: 'naor', age: 24,
  skills: ['organize'], gender: 'male', married: false};
var nir = {firstName: 'nir', lastName: 'naor', age: 29,
  skills: ['swim', 'run'], gender: 'male', married: false};
var gil = {firstName: 'gil', lastName: 'naor', age: 31,
  skills: ['swim', 'dance'], gender: 'male', married: false};
var dana = {firstName: 'dana', lastName: 'barak', age: 18,
  skills: ['dance'], gender: 'female', married: false};
var udi = {firstName: 'udi', lastName: 'naor', age: 61,
  skills: ['run', 'swim'], gender: 'male', married: true, children: [nir, gil]};
var erez = {firstName: 'erez', lastName: 'barak', age: 61,
  skills: ['run', 'jump'], gender: 'male', married: true, children: [nir, gil]};
var alon = {firstName: 'alon', lastName: 'barak', age: 41,
  skills: ['sell'], gender: 'male', married: false, children: [dana, gil]};
var rachel = {firstName: 'rachel', lastName: 'naor', age: 41,
  skills: ['sell'], gender: 'male', married: false, children: [udi, gil]};
var liron = {firstName: 'liron', lastName: 'barak', age: 32,
  skills: [''], gender: 'male', married: false, children: [dana, gil]};

var adults = [nir, gil, udi, dana, omer, alon, liron, erez, rachel];
[q1, q2, q4, q5, q6, q7, q8, q9].forEach(func => {
  console.log(func.name);
  console.log(func(adults));
});

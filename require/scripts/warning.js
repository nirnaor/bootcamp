define([], function() {
  return function(message) {
    console.warn(`some warning with a ${message}`);
  };
});

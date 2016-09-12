define(function(require, exports, module) {
  var loadWarning = function() {
    console.log('will now load the warning module');
    var warn = require('./warning');
    warn('bla');
  };

  exports.nir = 'naor';
  var defaultMessage = 'default message: ';
  exports.logSomething = function(message) {
    console.log(`${defaultMessage}${message}`);
  };

  setTimeout(loadWarning, 5000);
});

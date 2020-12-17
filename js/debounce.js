'use strict';
(function () {
/* var DEBOUNCE_TIMEFRAME = 300;

window.debounce = function (fun) {
    var lastTimeout = null;
    
    return function () {
        var args = arguments;
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
    lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
    }, DEBOUNCE_TIMEFRAME)
    };
}
 */

window.debounce = function (f, ms) {
  
    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  }

})();
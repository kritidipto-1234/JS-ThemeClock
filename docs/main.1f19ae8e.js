// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"states.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeClockColor = changeClockColor;
exports.changeStopwatchColor = changeStopwatchColor;
exports.changeCurrentWidget = changeCurrentWidget;
exports.currentStopwatchColor = exports.currentClockColor = exports.currentWidget = void 0;
var currentWidget = 'clock',
    currentClockColor = 'red',
    currentStopwatchColor = 'red';
exports.currentStopwatchColor = currentStopwatchColor;
exports.currentClockColor = currentClockColor;
exports.currentWidget = currentWidget;

function changeClockColor(newColor) {
  exports.currentClockColor = currentClockColor = newColor;
}

function changeStopwatchColor(newColor) {
  exports.currentStopwatchColor = currentStopwatchColor = newColor;
}

function changeCurrentWidget(newWidget) {
  exports.currentWidget = currentWidget = newWidget;
}
},{}],"myUtility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upto2Digit = upto2Digit;
exports.renderTime = renderTime;

//a personal module for utility functions 
function upto2Digit(a) //upscales all numbers/strings to 2 chars
{
  if (Number(a) < 10) a = '0' + String(a);
  return a;
}

function renderTime(time) {
  var time2 = time;
  var min = Math.floor(time2 / (60 * 100));
  time2 = time2 % (60 * 100);
  var sec = Math.floor(time2 / 100);
  time2 = time2 % 100;
  var nano = time2;
  return "".concat(upto2Digit(min), ":").concat(upto2Digit(sec), ":").concat(upto2Digit(nano));
}
},{}],"clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render_clock = render_clock;
exports.hideClock = hideClock;
exports.showClock = showClock;

var StatesModule = _interopRequireWildcard(require("./states.js"));

var _myUtility = require("./myUtility.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//-----------------------------------------------------------------------------------
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var clock = document.querySelector('.clock'); //---------------------------------------------------------------------------------------

init();

var weekDays = _toConsumableArray(document.querySelector('.week').children);

function render_clock(color) {
  clock.style.color = color;
  weekDays.forEach(function (e) {
    return e.style.color = 'grey';
  });
  weekDays[new Date().getDay()].style.color = StatesModule.currentClockColor;
}

function hideClock() {
  clock.style.display = 'none';
}

function showClock() {
  clock.style.display = 'flex';
}

function init() //makes the digital clock
{
  var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  var date = document.createElement('div');
  var weekDays = document.createElement('div');
  week.forEach(function (day) {
    var newDay = document.createElement('span');
    newDay.textContent = day;
    weekDays.appendChild(newDay);
  });
  var time = document.createElement('div');
  date.classList.add('date');
  weekDays.classList.add('week');
  time.classList.add('time');
  clock.appendChild(date);
  clock.appendChild(weekDays);
  clock.appendChild(time);

  function makeClock() {
    var d = new Date();
    date.textContent = "".concat(d.getDate(), " ").concat(monthNames[d.getMonth()], " ").concat(d.getFullYear());
    var hour = (0, _myUtility.upto2Digit)(d.getHours() % 12 == 0 ? '12' : d.getHours() % 12);
    time.textContent = "".concat(hour, ":").concat((0, _myUtility.upto2Digit)(d.getMinutes()), ":").concat((0, _myUtility.upto2Digit)(d.getSeconds()), " ").concat(d.getHours() >= 12 ? 'pm' : 'am');
  }

  setInterval(makeClock, 1000);
}
},{"./states.js":"states.js","./myUtility.js":"myUtility.js"}],"stopwatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render_stopwatch = render_stopwatch;
exports.hideStopwatch = hideStopwatch;
exports.showStopwatch = showStopwatch;

var _myUtility = require("./myUtility.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var stopwatch = document.querySelector('.stopwatch');
var controller = document.querySelector('.control');
var timer = document.querySelector('.stop_time');
var lapList = document.querySelector('.lapList'); //------------------------------------------------------------------------------
//global variables

var mainTimer;
var lapTimer;
var time = 0;
var lapTime = 0;
var lapNo = 0; //--------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
init();

function render_stopwatch(color) {
  stopwatch.style.color = color;
}

function hideStopwatch() {
  stopwatch.style.display = 'none';
}

function showStopwatch() {
  stopwatch.style.display = 'flex';
}

function init() //makes the stopwatch functional
{
  var leftControl = document.createElement('div');
  var rightControl = document.createElement('div');
  controller.appendChild(leftControl);
  controller.appendChild(rightControl);
  leftControl.textContent = 'START';
  rightControl.textContent = 'LAP';
  controller.addEventListener('click', function (e) {
    if (e.target.classList.contains('control')) return;
    var pressedBtn = e.target.textContent;
    var currentState = leftControl.textContent + rightControl.textContent;

    if (currentState === 'STARTLAP') {
      if (pressedBtn === 'LAP') {//do nothing
      } else if (pressedBtn === 'START') {
        startMainTimer();
        startLapTimer(createNewLap());
        leftControl.textContent = "STOP";
        rightControl.textContent = "LAP";
      }
    } else if (currentState === 'STOPLAP') {
      if (pressedBtn === 'STOP') {
        clearInterval(mainTimer);
        clearInterval(lapTimer);
        leftControl.textContent = "START";
        rightControl.textContent = "RESET";
      } else if (pressedBtn === 'LAP') {
        clearInterval(lapTimer);
        lapTime = 0;
        startLapTimer(createNewLap());
      }
    } else if (currentState === 'STARTRESET') {
      if (pressedBtn === 'RESET') {
        clearInterval(mainTimer);
        clearInterval(lapTimer);
        lapList.innerHTML = '';
        lapNo = 0;
        time = 0;
        lapTime = 0;
        timer.textContent = '00:00:00';
        leftControl.textContent = 'START';
        rightControl.textContent = 'LAP';
      } else if (pressedBtn === 'START') {
        startMainTimer();
        startLapTimer(lapList.firstChild);
        leftControl.textContent = "STOP";
        rightControl.textContent = "LAP";
      }
    }
  });
}

function startMainTimer() {
  clearInterval(mainTimer);
  mainTimer = setInterval(function () {
    time++; //in nano seconds

    timer.textContent = (0, _myUtility.renderTime)(time);
  }, 10);
}

function startLapTimer(lap) {
  clearInterval(lapTimer);
  lapTimer = setInterval(function () {
    lapTime++; //in nano seconds

    _toConsumableArray(lap.children)[1].textContent = (0, _myUtility.renderTime)(lapTime);
  }, 10);
}

function createNewLap() {
  var lap = document.createElement('div');
  lap.classList.add('laps');
  var span1 = document.createElement('span');
  span1.textContent = "LAP ".concat(++lapNo);
  var span2 = document.createElement('span');
  span2.textContent = "00:00:00";
  lap.appendChild(span1);
  lap.appendChild(span2);
  lapList.prepend(lap);
  return lap;
}
},{"./myUtility.js":"myUtility.js"}],"main.js":[function(require,module,exports) {
'use strict';

var ClockModule = _interopRequireWildcard(require("./clock.js"));

var StopwatchModule = _interopRequireWildcard(require("./stopwatch.js"));

var StatesModule = _interopRequireWildcard(require("./states.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var colourPalette = document.querySelector('.color_palette');
var currentWidgetPalette = document.querySelector('.current_widget_palette'); //---------------------------------------------------------------------

//---------------------------------------------------------------------
function init() //to start app
{
  function generatePalette() {
    var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['red', 'blue', 'violet', 'yellow', 'aqua', 'pink', 'orange', 'brown'];
    colors.forEach(function (color) {
      var newOption = document.createElement('div');
      newOption.addEventListener('click', function () {}, false);
      newOption.style.backgroundColor = color;
      newOption.setAttribute('value', color);
      newOption.classList.add('palette_option');
      colourPalette.appendChild(newOption);
    });
  }

  generatePalette();
  displayCorrectActiveOptions();
  ClockModule.render_clock(StatesModule.currentClockColor);
  StopwatchModule.render_stopwatch(StatesModule.currentStopwatchColor);
  renderApp();
}

init();

function displayCorrectActiveOptions() //display correct active colour and widget in palette after fetching states
{
  var currentOptionColor = StatesModule.currentWidget === 'clock' ? StatesModule.currentClockColor : StatesModule.currentStopwatchColor;

  _toConsumableArray(colourPalette.children).forEach(function (e) {
    e.classList.remove('palette_option_selected');
    if (currentOptionColor === e.getAttribute('value')) e.classList.add('palette_option_selected');
  });

  _toConsumableArray(currentWidgetPalette.children).forEach(function (e) {
    e.classList.remove('widget_option_selected');
    if (StatesModule.currentWidget === e.getAttribute('value')) e.classList.add('widget_option_selected');
  });
}

function renderApp() //re renders both clock and stopwatch
{
  if (StatesModule.currentWidget === 'clock') {
    ClockModule.render_clock(StatesModule.currentClockColor);
    ClockModule.showClock();
    StopwatchModule.hideStopwatch();
  } else {
    StopwatchModule.render_stopwatch(StatesModule.currentStopwatchColor);
    ClockModule.hideClock();
    StopwatchModule.showStopwatch();
  }
}

colourPalette.addEventListener('click', function (e) {
  if (!e.target.classList.contains('palette_option')) return;
  var newColor = e.target.getAttribute('value');
  StatesModule.currentWidget === 'clock' ? StatesModule.changeClockColor(newColor) : StatesModule.changeStopwatchColor(newColor);
  displayCorrectActiveOptions();
  renderApp();
});
currentWidgetPalette.addEventListener('click', function (e) {
  if (!e.target.classList.contains('current_widget_option')) return;
  var newWidget = e.target.getAttribute('value');
  StatesModule.changeCurrentWidget(newWidget);
  displayCorrectActiveOptions();
  renderApp();
});
},{"./clock.js":"clock.js","./stopwatch.js":"stopwatch.js","./states.js":"states.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34761" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
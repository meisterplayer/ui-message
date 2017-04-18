module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Message = __webpack_require__(1);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Message2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageStore = __webpack_require__(3);

var _MessageStore2 = _interopRequireDefault(_MessageStore);

var _template = __webpack_require__(2);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Meister$UiPlugin) {
    _inherits(Message, _Meister$UiPlugin);

    function Message(config, meister) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, config, meister));

        _this.wrapper = document.createElement('div');
        _this.wrapper.innerHTML = _template2.default;
        _this.wrapper = _this.wrapper.firstChild;

        _this.headTitle = _this.wrapper.querySelector('#pf-error-head-title');
        _this.title = _this.wrapper.querySelector('#pf-error-title');
        _this.message = _this.wrapper.querySelector('#pf-error-message');
        _this.errorCode = _this.wrapper.querySelector('#pf-error-code');

        _this.defaultHeadTitle = _this.config.defaultHeadTitle || 'Whoops, something went wrong...';

        _this.on('error', _this.onError.bind(_this));
        _this.on('itemUnloaded', _this.onItemUnloaded.bind(_this));
        return _this;
    }

    _createClass(Message, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.wrapper.style.display = 'none';
        }
    }, {
        key: 'onError',
        value: function onError(error) {
            if (!error) return;

            var messageOverride = _MessageStore2.default.getMessage(error.code);
            if (messageOverride) {
                error = messageOverride; // eslint-disable-line
            }

            this.wrapper.style.display = 'block';
            this.message.innerHTML = error.message;
            this.errorCode.innerHTML = error.code;
            this.title.innerHTML = error.options.title ? error.options.title : '';
            this.headTitle.innerHTML = error.options.headTitle ? error.options.headTitle : this.defaultHeadTitle;
        }

        // Override default

    }, {
        key: 'onUiReady',
        value: function onUiReady() {
            this.meister.defaultWrapper.insertBefore(this.wrapper, this.meister.defaultWrapper.childNodes[0]);
        }
    }], [{
        key: 'pluginName',
        get: function get() {
            return 'Message';
        }
    }]);

    return Message;
}(Meister.UiPlugin);

Meister.registerPlugin('message', Message);
Meister.registerPlugin(Message.pluginName, Message);

// Expose the MessageStore through the Meister object.
if (!window.Meister.MessageStore) window.Meister.MessageStore = _MessageStore2.default;

exports.default = Message;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "<div class=\"pf-error-message-plugin\">\n    <div class=\"pf-error-wrapper\">\n        <h1 id=\"pf-error-head-title\">Whoops, something went wrong...</h1>\n        <h2 id=\"pf-error-title\"></h2>\n        <span id=\"pf-error-message\" class=\"pf-error-message\"></span>\n    </div>\n    <div class=\"pf-error-code-wrapper\">\n        <span class=\"pf-error-code-title\">Code:</span>\n        <span id=\"pf-error-code\" class=\"pf-error-code\">ERR-9001</span>\n    </div>\n</div>\n";
exports.default = template;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageStore = {};

var MessageStore = function () {
    function MessageStore() {
        _classCallCheck(this, MessageStore);
    }

    _createClass(MessageStore, null, [{
        key: 'setMessages',

        /**
         * Store a message by a code.
         *
         * @param {[Object.<string>] | Object.<string>} messages Either a single
         *     message or an array of messages.
         */
        value: function setMessages(messages) {
            if (!Array.isArray(messages)) {
                messages = [messages];
            }

            for (var i = 0; i < messages.length; i++) {
                var message = messages[i];

                if (!message.code) {
                    console.warn('Message does not have property code, skipping message: ', message);
                    continue;
                }

                messageStore[message.code] = message;
            }
        }

        /**
         * Fetch a message by its code.
         *
         * @param {string} code Code for the message you want to retrieve.
         * @return {Object.<string> | undefined} Object containing the strings for the message.
         */

    }, {
        key: 'getMessage',
        value: function getMessage(code) {
            return messageStore[code];
        }
    }]);

    return MessageStore;
}();

exports.default = MessageStore;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=Message.js.map
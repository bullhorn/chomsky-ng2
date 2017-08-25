webpackJsonp([1],{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var chomsky_1 = __webpack_require__(407);
exports.TranslateService = new chomsky_1.Chomsky();


/***/ },

/***/ 172:
/***/ function(module, exports) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
    return obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object' && !Array.isArray(obj) && obj !== null;
}
exports.isObject = isObject;
function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}
exports.isFunction = isFunction;
function mergeDeep() {
    var startIndex = 1;
    var output = Object((arguments.length <= 0 ? undefined : arguments[0]) || {});
    // Cycle the source object arguments.
    for (var a = startIndex; a < arguments.length; a++) {
        var from = arguments.length <= a ? undefined : arguments[a];
        var keys = Object.keys(Object(from));
        // Cycle the properties.
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k];
            // Merge arrays.
            if (Array.isArray(output[key]) || Array.isArray(from[key])) {
                var o = Array.isArray(output[key]) ? output[key].slice() : [];
                var f = Array.isArray(from[key]) ? from[key].slice() : [];
                output[key] = o.concat(f);
            } else if (isFunction(output[key]) || isFunction(from[key])) {
                // Copy functions references.
                output[key] = from[key];
            } else if (isObject(output[key]) || isObject(from[key])) {
                // Extend objects.
                output[key] = mergeDeep(output[key], from[key]);
            } else {
                // Copy all other types.
                output[key] = from[key];
            }
        }
    }
    return output;
}
exports.mergeDeep = mergeDeep;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(17);
var ScalarObservable_1 = __webpack_require__(573);
var EmptyObservable_1 = __webpack_require__(571);
var isScheduler_1 = __webpack_require__(302);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` Scheduler, which means the `next`
     * notifications are sent synchronously, although with a different Scheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;
//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// NG2
var core_1 = __webpack_require__(1);
// APP
var translate_pipe_1 = __webpack_require__(406);
var translate_directive_1 = __webpack_require__(405);
__export(__webpack_require__(171));
var ChomskyModule = (function () {
    function ChomskyModule() {
    }
    ChomskyModule = __decorate([
        core_1.NgModule({
            declarations: [translate_pipe_1.TranslatePipe, translate_directive_1.Translate],
            exports: [translate_pipe_1.TranslatePipe, translate_directive_1.Translate],
        }), 
        __metadata('design:paramtypes', [])
    ], ChomskyModule);
    return ChomskyModule;
}());
exports.ChomskyModule = ChomskyModule;


/***/ },

/***/ 302:
/***/ function(module, exports) {

"use strict";
"use strict";
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// NG2
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(95);
// App
var App_1 = __webpack_require__(404);
var index_1 = __webpack_require__(266);
__webpack_require__(562);
var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            declarations: [
                App_1.DemoApp
            ],
            imports: [
                platform_browser_1.BrowserModule,
                index_1.ChomskyModule
            ],
            entryComponents: [
                App_1.DemoApp
            ],
            bootstrap: [App_1.DemoApp]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// NG2
var core_1 = __webpack_require__(1);
// APP
var index_1 = __webpack_require__(266);
var DemoApp = (function () {
    function DemoApp() {
        this.usLocale = 'en-US';
        this.frLocale = 'fr-FR';
        this.ruLocale = 'ru-RU';
        this.greeting = 'greeting';
        this.demoVariables = {
            today: new Date(),
            name: 'Jane',
            balance: 9874.34,
            count: 1
        };
        this.translateService = index_1.TranslateService;
        // Listen for changes
        console.log('[TranslateService]', index_1.TranslateService);
        index_1.TranslateService.onLocaleChange.subscribe(function (locale) {
            console.log("[Language Change]: " + locale);
        });
        // Use en-US
        this.changeLanguage(this.usLocale);
    }
    DemoApp.prototype.changeLanguage = function (locale) {
        this.currentLocale = locale;
        index_1.TranslateService.use(locale);
    };
    DemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            template: __webpack_require__(563)
        }), 
        __metadata('design:paramtypes', [])
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// NG2
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(95);
// APP
var translate_service_1 = __webpack_require__(171);
var Translate = (function () {
    function Translate(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(Translate.prototype, "innerHTML", {
        get: function () {
            return this.translatedValue;
        },
        enumerable: true,
        configurable: true
    });
    Translate.prototype.ngOnInit = function () {
        var _this = this;
        translate_service_1.TranslateService.onLocaleChange.subscribe(function () {
            _this.translatedValue = _this.renderContent(_this.translate, _this.dynamicValues);
        });
        this.translatedValue = this.renderContent(this.translate, this.dynamicValues);
    };
    Translate.prototype.ngOnDestroy = function () {
        translate_service_1.TranslateService.onLocaleChange.unsubscribe();
    };
    Translate.prototype.renderContent = function (key, interpolation) {
        return this.sanitizer.bypassSecurityTrustHtml(translate_service_1.TranslateService.translate(key, interpolation));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Translate.prototype, "translate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Translate.prototype, "dynamicValues", void 0);
    __decorate([
        core_1.HostBinding('innerHTML'), 
        __metadata('design:type', Object)
    ], Translate.prototype, "innerHTML", null);
    Translate = __decorate([
        core_1.Directive({
            selector: '[translate]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _a) || Object])
    ], Translate);
    return Translate;
    var _a;
}());
exports.Translate = Translate;


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var translate_service_1 = __webpack_require__(171);
var TranslatePipe = (function () {
    function TranslatePipe(changeDetector) {
        this.changeDetector = changeDetector;
        this.lastKey = '';
        this.lastParams = '';
        this.onLangChange = null;
        this.changeDetector = changeDetector;
    }
    /**
     * @name equals
     * @param objectOne
     * @param objectTwo
     * @returns {boolean}
     * @description A utility function for checking equality.
     */
    TranslatePipe.prototype.equals = function (objectOne, objectTwo) {
        if (objectOne === objectTwo) {
            return true;
        }
        if (objectOne === null || objectTwo === null) {
            return false;
        }
        var typeOne = typeof objectOne;
        var typeTwo = typeof objectTwo;
        var length;
        var key;
        var keySet;
        if (typeOne === typeTwo && typeOne === 'object') {
            if (Array.isArray(objectOne)) {
                // Array checker
                if (!Array.isArray(objectTwo)) {
                    return false;
                }
                if ((length = objectOne.length) === objectTwo.length) {
                    for (key = 0; key < length; key++) {
                        if (!this.equals(objectOne[key], objectTwo[key])) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            else {
                // Object checker
                if (Array.isArray(objectTwo)) {
                    return false;
                }
                keySet = Object.create(null);
                for (key in objectOne) {
                    if (!this.equals(objectOne[key], objectTwo[key])) {
                        return false;
                    }
                    keySet[key] = true;
                }
                for (key in objectTwo) {
                    if (!(key in keySet) && typeof objectTwo[key] !== 'undefined') {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    };
    /**
     * @name ngOnDestroy
     * @description Garbage collection for angular
     */
    TranslatePipe.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    /**
     * @name updateValue
     * @param phraseKey
     * @param dynamicVariables
     */
    TranslatePipe.prototype.updateValue = function (phraseKey, dynamicVariables) {
        this.value = translate_service_1.TranslateService.translate(phraseKey, dynamicVariables);
        this.changeDetector.markForCheck();
    };
    /**
     * @name transform
     * @param phraseKey
     * @param dynamicVariables
     * @returns {*}
     */
    TranslatePipe.prototype.transform = function (phraseKey, dynamicVariables) {
        var _this = this;
        if (!phraseKey || phraseKey.length === 0) {
            return null;
        }
        if (this.equals(phraseKey, this.lastKey) && this.equals(dynamicVariables, this.lastParams)) {
            return this.value;
        }
        this.lastKey = phraseKey;
        this.lastParams = dynamicVariables;
        this.updateValue(phraseKey, dynamicVariables);
        this.unsubscribe();
        this.onLangChange = translate_service_1.TranslateService.onLocaleChange.subscribe(function () {
            _this.updateValue(phraseKey, dynamicVariables);
        });
        return this.value;
    };
    /**
     * @name unsubscribe
     */
    TranslatePipe.prototype.unsubscribe = function () {
        if (this.onLangChange) {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
    };
    TranslatePipe = __decorate([
        core_1.Pipe({
            name: 'translate',
            pure: false
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _a) || Object])
    ], TranslatePipe);
    return TranslatePipe;
    var _a;
}());
exports.TranslatePipe = TranslatePipe;


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
__export(__webpack_require__(408));

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Vendor

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable_1 = __webpack_require__(17);
var Subject_1 = __webpack_require__(94);
__webpack_require__(568);
__webpack_require__(566);
__webpack_require__(569);
__webpack_require__(567);
// APP
var loader_1 = __webpack_require__(411);
var formats_1 = __webpack_require__(410);
var dictionary_manager_1 = __webpack_require__(409);
var object_assign_deep_1 = __webpack_require__(172);
// Default formats
exports.FORMAT_DEFAULTS = {
    number: {
        style: 'decimal'
    },
    currency: {
        style: 'currency',
        currency: 'USD'
    },
    date: {
        short: {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        },
        medium: {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        },
        long: {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        },
        dateShort: {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        },
        dateMedium: {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        },
        dateLong: {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        },
        timeShort: {
            hour: '2-digit',
            minute: '2-digit'
        },
        timeLong: {
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        }
    }
};

var Chomsky = function () {
    function Chomsky(locale) {
        _classCallCheck(this, Chomsky);

        // Loader to load translations from a JSON file
        this.loader = new loader_1.Loader();
        // Default location for translations
        this.location = 'i18n/';
        // Current locale
        this.currentLocale = window.navigator.language;
        // Dictionary Manger to handle translations that have been loaded
        this.dictionaryManager = new dictionary_manager_1.DictionaryManager();
        // Custom formats based on the locale
        this.formats = new formats_1.Formats();
        // Object for default replacements, so users don't have to pass around each time
        this.defaultReplacements = {};
        // Handle for when the locale changes
        this.onLocaleChange = new Subject_1.Subject();
        if (locale) {
            this.use(locale);
        }
    }

    _createClass(Chomsky, [{
        key: "setLocation",
        value: function setLocation(location) {
            this.location = location;
        }
    }, {
        key: "setDefaultReplacements",
        value: function setDefaultReplacements(defaultReplacements) {
            this.defaultReplacements = defaultReplacements;
        }
    }, {
        key: "overrideCurrency",
        value: function overrideCurrency(currency) {
            this.formats.overrideCurrency = currency;
        }
    }, {
        key: "forceDisplayTo24HourTime",
        value: function forceDisplayTo24HourTime(use24HourTime) {
            this.formats.use24HourTime = use24HourTime;
        }
    }, {
        key: "use",
        value: function use(locale) {
            // Capture the pending task
            var pending = void 0;
            // If we don't have the translations, load them
            if (!this.dictionaryManager.get(locale)) {
                pending = this.getTranslations(locale);
            }
            // Return the pending if we are fetching
            if (typeof pending !== 'undefined') {
                return pending;
            } else {
                // Split out the language code from the locale
                var languageCode = (locale.split('-')[0] || '').toLowerCase();
                // Return the translations if they are already loaded
                var currentTranslations = [this.dictionaryManager.get(locale), this.dictionaryManager.get(languageCode)];
                this.applyLanguage(locale, currentTranslations[0], currentTranslations[1]);
                return Observable_1.Observable.of(currentTranslations);
            }
        }
    }, {
        key: "translate",
        value: function translate(key, interpolation) {
            var _this = this;

            var value = this.getValue(key);
            // Handle pluralization
            if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
                if ((typeof interpolation === "undefined" ? "undefined" : _typeof(interpolation)) === 'object') {
                    var gender = interpolation.gender || 'other';
                    if (gender) {
                        if (interpolation.quantity === 0 || interpolation.quantity) {
                            if (value[gender].hasOwnProperty(interpolation.quantity)) {
                                value = value[gender][interpolation.quantity];
                            } else {
                                if (interpolation.quantity === 0) {
                                    value = value[gender].zero;
                                } else {
                                    value = value[gender].many;
                                }
                            }
                        } else {
                            throw new Error('Missing "quantity" property on the replacements!');
                        }
                    }
                }
            }
            // Handle interpolation
            if ((interpolation || this.defaultReplacements) && value) {
                var replacements = Object.assign({}, this.defaultReplacements, interpolation);
                value = value.replace(/{([^}]*)}/gi, function (m, param) {
                    var params = param.split(':');
                    if (params.length === 1) {
                        var match = '';
                        if (replacements.hasOwnProperty(param)) {
                            match = replacements[param];
                        } else {
                            match = replacements;
                        }
                        return match;
                    }
                    var unparsedValue = replacements[params[0]] || interpolation;
                    switch (params[1]) {
                        case 'date':
                            return _this.formatDate(unparsedValue, params[2]);
                        case 'currency':
                            return _this.formatCurrency(unparsedValue, params[2]);
                        case 'number':
                            return _this.formatNumber(unparsedValue, params[2]);
                        case 'format':
                            var formats = params[2].split(',');
                            var formattedString = unparsedValue;
                            if (formats.length) {
                                var _iteratorNormalCompletion = true;
                                var _didIteratorError = false;
                                var _iteratorError = undefined;

                                try {
                                    for (var _iterator = formats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var format = _step.value;

                                        formattedString = _this.format(formattedString, format);
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return) {
                                            _iterator.return();
                                        }
                                    } finally {
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                            } else {
                                formattedString = _this.format(unparsedValue, params[2]);
                            }
                            return formattedString;
                        default:
                            return '';
                    }
                });
            }
            // Return the key if no value is present.
            return value || key;
        }
    }, {
        key: "format",
        value: function format(value, _format) {
            return this.formats.format(value, _format);
        }
    }, {
        key: "formatDate",
        value: function formatDate(date, format) {
            return this.formats.formatDate(date, format);
        }
    }, {
        key: "formatCurrency",
        value: function formatCurrency(value, format) {
            return this.formats.formatCurrency(value, format);
        }
    }, {
        key: "formatNumber",
        value: function formatNumber(value, format) {
            return this.formats.formatNumber(value, format);
        }
    }, {
        key: "getValue",
        value: function getValue(key) {
            var value = void 0;
            var translations = this.dictionaryManager.get(this.currentLocale);
            if (translations) {
                var tokens = key.split('.');
                value = translations[tokens[0]];
                if (value) {
                    for (var i = 1; i < tokens.length; i++) {
                        if (!value) {
                            value = translations[tokens[i]];
                        } else {
                            value = value[tokens[i]];
                        }
                    }
                }
            }
            return value;
        }
    }, {
        key: "getTranslations",
        value: function getTranslations(locale) {
            var _this2 = this;

            // Split out the language code from the locale
            var languageCode = (locale.split('-')[0] || '').toLowerCase();
            // Fetch the fallback language first
            return Observable_1.Observable.fromPromise(new Promise(function (resolve, reject) {
                _this2.translationFetcher(languageCode).then(function (fallbackTranslations) {
                    _this2.translationFetcher(locale).then(function (translations) {
                        _this2.applyLanguage(locale, translations, fallbackTranslations);
                        resolve(true);
                    }, function (error) {
                        console.error("[Chomsky] - Cannot find the locale translation file! (" + locale + "):", error);
                        _this2.applyLanguage(locale, {}, fallbackTranslations);
                        resolve(true);
                    });
                }, function (error) {
                    console.error("[Chomsky] - Cannot find the base translation file! (" + languageCode + "):", error);
                    _this2.applyLanguage(locale, {}, {});
                    resolve(true);
                });
            }));
        }
    }, {
        key: "applyLanguage",
        value: function applyLanguage(locale, translations, fallbackTranslations) {
            // Set current locale
            this.currentLocale = locale;
            // Set locale on formats too
            this.formats.setLocale(locale);
            // Handle overrides
            var overrides = {};
            if (translations && translations.hasOwnProperty('_defaults_')) {
                object_assign_deep_1.mergeDeep(overrides, translations._defaults_);
                delete translations['_defaults_'];
            }
            if (fallbackTranslations && fallbackTranslations.hasOwnProperty('_defaults_')) {
                object_assign_deep_1.mergeDeep(overrides, fallbackTranslations._defaults_);
                delete translations['_defaults_'];
            }
            this.formats.override(object_assign_deep_1.mergeDeep({}, exports.FORMAT_DEFAULTS, overrides));
            // Add the translations to the DictionaryManager
            this.dictionaryManager.add(locale, translations, fallbackTranslations);
            // Emit a change event
            this.onLocaleChange.next(locale);
        }
    }, {
        key: "translationFetcher",
        value: function translationFetcher(locale) {
            return this.loader.load("" + this.location + locale + ".json");
        }
    }]);

    return Chomsky;
}();

exports.Chomsky = Chomsky;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// APP

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var object_assign_deep_1 = __webpack_require__(172);

var DictionaryManager = function () {
    function DictionaryManager() {
        _classCallCheck(this, DictionaryManager);

        this.dictionaries = {};
    }

    _createClass(DictionaryManager, [{
        key: "contains",
        value: function contains(locale) {
            return !!this.dictionaries[locale];
        }
    }, {
        key: "get",
        value: function get(locale) {
            return this.dictionaries[locale] || this.dictionaries[locale.split('-')[0]];
        }
    }, {
        key: "add",
        value: function add(locale, translations, fallbackTranslations) {
            this.dictionaries[locale] = object_assign_deep_1.mergeDeep({}, fallbackTranslations, translations);
        }
    }]);

    return DictionaryManager;
}();

exports.DictionaryManager = DictionaryManager;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var object_assign_deep_1 = __webpack_require__(172);
/**
 * @name Formats
 * @description formats for dates, numbers and currencies
 * Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 * Date:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
 * @class Formats
 */

var Formats = function () {
    function Formats() {
        _classCallCheck(this, Formats);

        // Format formatDefaults
        this.defaults = {
            number: {},
            currency: {},
            date: {}
        };
        // Initially set the locale to the browser
        this.setLocale(window.navigator.language);
    }

    _createClass(Formats, [{
        key: "override",
        value: function override(overrides) {
            if (overrides.locale) {
                this.setLocale(overrides.locale);
                delete overrides['locale'];
            }
            this.defaults = overrides;
        }
    }, {
        key: "setLocale",
        value: function setLocale(locale) {
            this.locale = locale;
        }
    }, {
        key: "formatNumber",
        value: function formatNumber(value, format) {
            var _format = object_assign_deep_1.mergeDeep({}, this.defaults.number, format);
            return new Intl.NumberFormat([this.locale, 'en-US'], _format).format(value);
        }
    }, {
        key: "formatCurrency",
        value: function formatCurrency(value, format) {
            var _format = typeof format === 'string' ? object_assign_deep_1.mergeDeep({}, { currency: format }, this.defaults.currency) : object_assign_deep_1.mergeDeep({}, format, this.defaults.currency);
            var options = object_assign_deep_1.mergeDeep({ style: 'currency', currency: 'USD' }, _format);
            if (this.overrideCurrency) {
                options.currency = this.overrideCurrency;
            }
            return new Intl.NumberFormat([this.locale, 'en-US'], options).format(value);
        }
    }, {
        key: "formatDate",
        value: function formatDate(value, format) {
            var _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
            var shortHands = object_assign_deep_1.mergeDeep({}, this.defaults.date);
            var options = typeof format === 'string' ? shortHands[format] : format;
            if (!options || Object.keys(options).length === 0) {
                options = shortHands.dateShort;
            }
            if (this.use24HourTime) {
                options.hour12 = false;
            }
            return new Intl.DateTimeFormat([this.locale, 'en-US'], options).format(_value);
        }
    }, {
        key: "format",
        value: function format(value, _format2) {
            if (!value) {
                return value;
            }
            switch (_format2) {
                case 'uppercase':
                    return value.toUpperCase();
                case 'lowercase':
                    return value.toLowerCase();
                case 'title':
                    return value.replace(/\w\S*/g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                case 'denormalize':
                    return value.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                        return str.toUpperCase();
                    });
                default:
                    return value;
            }
        }
    }]);

    return Formats;
}();

exports.Formats = Formats;

/***/ },

/***/ 411:
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * @name Loader
 * @description Loader to load the JSON translation files via HTTP
 * @class Loader
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);
    }

    _createClass(Loader, [{
        key: 'load',

        /**
         * @name load
         * @description loads a given URL via HTTP
         * @param {string} url
         * @returns {Observable<string>}
         * @memberOf Loader
         */
        value: function load(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        } catch (e) {
                            reject('Parse Error: Invalid JSON');
                        }
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = function () {
                    reject('Network Error');
                };
                xhr.send();
            });
        }
    }]);

    return Loader;
}();

exports.Loader = Loader;

/***/ },

/***/ 562:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 563:
/***/ function(module, exports) {

module.exports = "<!-- MAIN HEADER -->\n<section class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 text-center\">\n                <h1 class=\"lead\">Chomsky-NG2 Documentation</h1>\n                <p>A lightweight Angular 2 i18n wrapper.</p>\n                <nav>\n                    <a href=\"//github.com/bullhorn/chomsky-ng2\" target=\"_blank\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-github\"></i> &nbsp; View on Github</a> &nbsp;\n                    <a href=\"//github.com/bullhorn/chomsky-ng2/zipball/master\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i> &nbsp; Download</a>\n                </nav>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <!-- CHOOSE LANGUAGE -->\n    <div data-spy=\"affix\">\n        <div class=\"btn-group-vertical\">\n            <ul class=\"nav nav-pills nav-stacked\">\n                <li (click)=\"changeLanguage(usLocale)\" [class.active]=\"currentLocale === usLocale\" role=\"presentation\"><a>English</a></li>\n                <li (click)=\"changeLanguage(ruLocale)\" [class.active]=\"currentLocale === ruLocale\" role=\"presentation\"><a>Russian</a></li>\n                <li (click)=\"changeLanguage(frLocale)\" [class.active]=\"currentLocale === frLocale\" role=\"presentation\"><a>French</a></li>\n            </ul>\n        </div>\n    </div>\n    <!-- GETTING STARTED -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Installation</h2>\n            <pre>NPM: npm install chomsky-ng2 --save OR YARN: yarn add chomsky-ng2</pre>\n            <h2 class=\"text-center\">Configuration</h2>\n            <code>// TODO: </code>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- SIMPLE TRANSLATION -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Simple Translation</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"greeting\": {{ translateService.dictionaryManager.dictionaries[currentLocale].greeting | json }} {{ '}' }} </pre>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'greeting' | translate</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'greeting' | translate }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'greeting'\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'greeting'\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('greeting');</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'greeting'\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH VARIABLE -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Variables</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} farewell\": {{ translateService.dictionaryManager.dictionaries[currentLocale].farewell | json }} {{ '}' }}</pre>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'farewell' | translate: {{ '{' }} name: 'Jane' {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'farewell' | translate: { name: 'Jane' } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'farewell'\" [dynamicValues]=\"{{ '{' }} name: 'Jane' {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'farewell'\" [dynamicValues]=\"{ name: 'Jane' }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('farewell', {{ '{' }} name: 'Jane' {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'farewell'\" [dynamicValues]=\"{ name: 'Jane' }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH VARIABLE:DATE -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Date Variables</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"today\": {{ translateService.dictionaryManager.dictionaries[currentLocale].today | json }} {{ '}' }}</pre>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"formatToday\": {{ translateService.dictionaryManager.dictionaries[currentLocale].formatToday | json }} {{ '}' }}</pre>\n                    <p>\n                        <small>Can be used with syntax from <a href=\"//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat\" target=\"_blank\">Intl.DateTimeFormat</a>.</small>\n                    </p>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'today' | translate: {{ '{' }} today: {{ demoVariables.today }} {{ '}' }}</pre>\n                    <pre>'formatToday' | translate: {{ '{' }} today: {{ demoVariables.today }} {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'today' | translate: { today: demoVariables.today } }}</p>\n                            <p>{{ 'formatToday' | translate: { today: demoVariables.today } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'today'\" [dynamicValues]=\"{{ '{' }} today: {{ demoVariables.today }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'formatToday'\" [dynamicValues]=\"{{ '{' }} today: {{ demoVariables.today }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'today'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                            <p [translate]=\"'formatToday'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('today', {{ '{' }} today: {{ demoVariables.today }} {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('formatToday', {{ '{' }} today: {{ demoVariables.today }} {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'today'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH VARIABLE:DATE -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Date Variables with Formatting</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"long\": {{ translateService.dictionaryManager.dictionaries[currentLocale].long | json }} {{ '}' }}</pre>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"timeLong\": {{ translateService.dictionaryManager.dictionaries[currentLocale].timeLong | json }} {{ '}' }}</pre>\n                    <p>\n                        <small>Other short formats include (bold is default):</small>\n                        <br/>\n                        <small><i>short - 02/14/2017, 1:17 PM</i></small>\n                        <br/>\n                        <small><i>medium - Feb 14, 2017, 1:17 PM</i></small>\n                        <br/>\n                        <small><i>long - Febuary 14, 2017, 1:17 PM CST</i></small>\n                        <br/>\n                        <small><b><i>dateShort - 02/14/2017</i></b></small>\n                        <br/>\n                        <small><i>dateMedium - Feb 14, 2017</i></small>\n                        <br/>\n                        <small><i>dateLong - Febuary 14, 2017</i></small>\n                        <br/>\n                        <small><i>timeShort - 1:17 PM</i></small>\n                        <br/>\n                        <small><i>timeLong - 1:17 PM CST</i></small>\n                    </p>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'long' | translate: {{ '{' }} today: {{ demoVariables.today }} {{ '}' }}</pre>\n                    <pre>'timeLong' | translate: {{ '{' }} today: {{ demoVariables.today }} {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'long' | translate: { today: demoVariables.today } }}</p>\n                            <p>{{ 'timeLong' | translate: { today: demoVariables.today } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'long'\" [dynamicValues]=\"{{ '{' }} today: {{ demoVariables.today }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'timeLong'\" [dynamicValues]=\"{{ '{' }} today: {{ demoVariables.today }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'long'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                            <p [translate]=\"'timeLong'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('long', {{ '{' }} today: {{ demoVariables.today }} {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('timeLong', {{ '{' }} today: {{ demoVariables.today }} {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'long'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                            <p [translate]=\"'timeLong'\" [dynamicValues]=\"{ today: demoVariables.today }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH VARIABLE:NUMBER -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Number Variables</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"alert\": {{ translateService.dictionaryManager.dictionaries[currentLocale].alert | json }} {{ '}' }}</pre>\n                    <p>\n                        <small>Can be used with syntax from <a href=\"//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat\" target=\"_blank\">Intl.NumberFormat</a>.</small>\n                    </p>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'alert' | translate: {{ '{' }} count: {{ demoVariables.count }} {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'alert' | translate: { count: demoVariables.count } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'alert'\" [dynamicValues]=\"{{ '{' }} count: {{ demoVariables.count }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'alert'\" [dynamicValues]=\"{ count: demoVariables.count }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('alert', {{ '{' }} count: {{ demoVariables.count }} {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'alert'\" [dynamicValues]=\"{ count: demoVariables.count }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH VARIABLE:CURRENCY -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Currency Variables</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/{{ currentLocale }}.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"debt\": {{ translateService.dictionaryManager.dictionaries[currentLocale].debt | json }} {{ '}' }}</pre>\n                    <p>\n                        <small>Can be used with syntax from <a href=\"//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat\" target=\"_blank\">Intl.NumberFormat</a>.</small>\n                    </p>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'debt' | translate: {{ '{' }} balance: {{ demoVariables.balance }} {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'debt' | translate: { balance: demoVariables.balance } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'debt'\" [dynamicValues]=\"{{ '{' }} balance: {{ demoVariables.balance }} {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'debt'\" [dynamicValues]=\"{ balance: demoVariables.balance }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('debt', {{ '{' }} balance: {{ demoVariables.balance }} {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'debt'\" [dynamicValues]=\"{ balance: demoVariables.balance }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH PLURALIZATION -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Pluralization</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/en-US.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"messages\": {{ translateService.dictionaryManager.dictionaries[currentLocale].messages | json }} {{ '}' }}</pre>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'messages' | translate: {{ '{' }} quantity: 0 {{ '}' }}</pre>\n                    <pre>'messages' | translate: {{ '{' }} quantity: 1 {{ '}' }}</pre>\n                    <pre>'messages' | translate: {{ '{' }} quantity: 20 {{ '}' }}</pre>\n                    <pre>'messages' | translate: {{ '{' }} quantity: 50 {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'messages' | translate: { quantity: 0 } }}</p>\n                            <p>{{ 'messages' | translate: { quantity: 1 } }}</p>\n                            <p>{{ 'messages' | translate: { quantity: 20 } }}</p>\n                            <p>{{ 'messages' | translate: { quantity: 50 } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'messages'\" [dynamicValues]=\"{{ '{' }} quantity: 0 {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'messages'\" [dynamicValues]=\"{{ '{' }} quantity: 1 {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'messages'\" [dynamicValues]=\"{{ '{' }} quantity: 20 {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'messages'\" [dynamicValues]=\"{{ '{' }} quantity: 50 {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 0 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 1 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 20 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 50 }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('messages', {{ '{' }} quantity: 0 {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('messages', {{ '{' }} quantity: 1 {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('messages', {{ '{' }} quantity: 20 {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('messages', {{ '{' }} quantity: 50 {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 0 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 1 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 20 }\"></p>\n                            <p [translate]=\"'messages'\" [dynamicValues]=\"{ quantity: 50 }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH PLURALIZATION WITH DYNAMIC LABELS -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\">Translation with Pluralization With Dynamic Labels</h2>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/en-US.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"candidate\": {{ translateService.dictionaryManager.dictionaries[currentLocale].candidate | json }} {{ '}' }}</pre>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Pipe</h4>\n                    <!-- CODE -->\n                    <pre>'candidate' | translate:{{ '{' }} gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidate' {{ '}' }}</pre>\n                    <pre>'candidate' | translate:{{ '{' }} gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' {{ '}' }}</pre>\n                    <pre>'candidate' | translate:{{ '{' }} gender: 'other', quantity: 15, host: 'Les gens', candidate: 'candidates' {{ '}' }}</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p>{{ 'candidate' | translate:{ gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidates' } }}</p>\n                            <p>{{ 'candidate' | translate:{ gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' } }}</p>\n                            <p>{{ 'candidate' | translate:{ gender: 'other', quantity: 0, host: 'Les gens', candidate: 'candidates' } }}</p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'candidate'\" [dynamicValues]=\"{{ '{' }} gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidate' {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'candidate'\" [dynamicValues]=\"{{ '{' }} gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <pre>&lt;p [translate]=\"'candidate'\" [dynamicValues]=\"{{ '{' }} gender: 'other', quantity: 15, host: 'Les gens', candidate: 'candidates' {{ '}' }}\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidates' }\"></p>\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' }\"></p>\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'other', quantity: 0, host: 'Les gens', candidate: 'candidates' }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                    <h4>Controller</h4>\n                    <!-- CODE -->\n                    <pre>let message = translationService.translate('candidate', {{ '{' }} gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidate' {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('candidate', {{ '{' }} gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' {{ '}' }});</pre>\n                    <pre>let message = translationService.translate('candidate', {{ '{' }} gender: 'other', quantity: 15, host: 'Les gens', candidate: 'candidates' {{ '}' }});</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'female', quantity: 1, host: 'Jane', candidate: 'candidates' }\"></p>\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'male', quantity: 0, host: 'John', candidate: 'candidates' }\"></p>\n                            <p [translate]=\"'candidate'\" [dynamicValues]=\"{ gender: 'other', quantity: 0, host: 'Les gens', candidate: 'candidates' }\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n    <!-- TRANSLATION WITH HTML IN VALUE -->\n    <section class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center\" style=\"margin-bottom: 5px\">Translation with HTML in the value</h2>\n            <h4 class=\"text-center\"><b>ONLY use with the Directive</b></h4>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <h4><code>../i18n/en-US.json</code></h4>\n                    <pre *ngIf=\"translateService.dictionaryManager.dictionaries[currentLocale]\">{{ '{' }} \"html\": {{ translateService.dictionaryManager.dictionaries[currentLocale].html | json }} {{ '}' }}</pre>\n                </div>\n                <div class=\"col-xs-12 col-sm-8\">\n                    <h4>Directive</h4>\n                    <!-- CODE -->\n                    <pre>&lt;p [translate]=\"'html'\"&gt;&lt;/p&gt;</pre>\n                    <!-- DEMO -->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Example</div>\n                        <div class=\"panel-body\">\n                            <p [translate]=\"'html'\"></p>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\">&nbsp;</div>\n                </div>\n            </div>\n            <div class=\"divider\"></div>\n        </div>\n    </section>\n</div>\n"

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(17);
var combineLatest_1 = __webpack_require__(574);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(17);
var fromPromise_1 = __webpack_require__(575);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(17);
var of_1 = __webpack_require__(576);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(17);
var share_1 = __webpack_require__(581);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(94);
var Observable_1 = __webpack_require__(17);
var Subscriber_1 = __webpack_require__(74);
var Subscription_1 = __webpack_require__(129);
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subscribe: { value: ConnectableObservable.prototype._subscribe },
    getSubject: { value: ConnectableObservable.prototype.getSubject },
    connect: { value: ConnectableObservable.prototype.connect },
    refCount: { value: ConnectableObservable.prototype.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source._subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(17);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(75);
var Observable_1 = __webpack_require__(17);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PromiseObservable = (function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
        _super.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
    }
    /**
     * Converts a Promise to an Observable.
     *
     * <span class="informal">Returns an Observable that just emits the Promise's
     * resolved value, then completes.</span>
     *
     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
     * Observable. If the Promise resolves with a value, the output Observable
     * emits that resolved value as a `next`, and then completes. If the Promise
     * is rejected, then the output Observable emits the corresponding Error.
     *
     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     *
     * @param {Promise<T>} promise The promise to be converted.
     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
     * the delivery of the resolved value (or the rejection).
     * @return {Observable<T>} An Observable which wraps the Promise.
     * @static true
     * @name fromPromise
     * @owner Observable
     */
    PromiseObservable.create = function (promise, scheduler) {
        return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var promise = this.promise;
        var scheduler = this.scheduler;
        if (scheduler == null) {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    subscriber.next(this.value);
                    subscriber.complete();
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.next(value);
                        subscriber.complete();
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.error(err);
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
        else {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
    };
    return PromiseObservable;
}(Observable_1.Observable));
exports.PromiseObservable = PromiseObservable;
function dispatchNext(arg) {
    var value = arg.value, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
    }
}
function dispatchError(arg) {
    var err = arg.err, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.error(err);
    }
}
//# sourceMappingURL=PromiseObservable.js.map

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(17);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
exports.ScalarObservable = ScalarObservable;
//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isScheduler_1 = __webpack_require__(302);
var isArray_1 = __webpack_require__(130);
var ArrayObservable_1 = __webpack_require__(194);
var combineLatest_1 = __webpack_require__(577);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable, in order, and
 * collecting an array of each of the most recent values any time any of the
 * input Observables emits, then either taking that array and passing it as
 * arguments to an optional `project` function and emitting the return value of
 * that, or just emitting the array of recent values directly if there is no
 * `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} observable1 An input Observable to combine with the
 * source Observable.
 * @param {Observable} observable2 An input Observable to combine with the
 * source Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var PromiseObservable_1 = __webpack_require__(572);
exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
//# sourceMappingURL=fromPromise.js.map

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(194);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(194);
var isArray_1 = __webpack_require__(130);
var OuterSubscriber_1 = __webpack_require__(298);
var subscribeToResult_1 = __webpack_require__(303);
var none = {};
/* tslint:disable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    observables.unshift(this);
    return this.lift.call(new ArrayObservable_1.ArrayObservable(observables), new CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ConnectableObservable_1 = __webpack_require__(570);
/* tslint:disable:max-line-length */
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} an Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    if (typeof selector === 'function') {
        return this.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(this, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = this;
    connectable.subjectFactory = subjectFactory;
    return connectable;
}
exports.multicast = multicast;
var MulticastOperator = (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source._subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());
exports.MulticastOperator = MulticastOperator;
//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var multicast_1 = __webpack_require__(580);
var Subject_1 = __webpack_require__(94);
function shareSubjectFactory() {
    return new Subject_1.Subject();
}
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for .publish().refCount().
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
 * @method share
 * @owner Observable
 */
function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
}
exports.share = share;
;
//# sourceMappingURL=share.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// NG2
var core_1 = __webpack_require__(1);
var platform_browser_dynamic_1 = __webpack_require__(132);
// APP
var main_module_1 = __webpack_require__(304);
// Enable prod mode
if (true) {
    core_1.enableProdMode();
}
/**
 * Bootstrap via function to ensure DOM is ready
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.DemoModule);
}
exports.main = main;
document.addEventListener('DOMContentLoaded', main);


/***/ }

},[589]);
//# sourceMappingURL=main.b0535c9169b11b3b43de.bundle.map
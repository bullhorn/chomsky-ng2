/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + {"1":"025349fada485d3af452","2":"7a68d1de522b4e5a21db"}[chunkId] + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.0.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(10)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.common = global.ng.common || {}),global.ng.core));
	}(this, function (exports,_angular_core) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * This class should not be used directly by an application developer. Instead, use
	     * {@link Location}.
	     *
	     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	     * agnostic.
	     * This means that we can have different implementation of `PlatformLocation` for the different
	     * platforms
	     * that angular supports. For example, the default `PlatformLocation` is {@link
	     * BrowserPlatformLocation},
	     * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	     *
	     * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	     * when
	     * they need to interact with the DOM apis like pushState, popState, etc...
	     *
	     * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	     * by
	     * the {@link Router} in order to navigate between routes. Since all interactions between {@link
	     * Router} /
	     * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	     * class
	     * they are all platform independent.
	     *
	     * @stable
	     */
	    var PlatformLocation = (function () {
	        function PlatformLocation() {
	        }
	        Object.defineProperty(PlatformLocation.prototype, "pathname", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformLocation.prototype, "search", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformLocation.prototype, "hash", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return PlatformLocation;
	    }());
	
	    /**
	     * `LocationStrategy` is responsible for representing and reading route state
	     * from the browser's URL. Angular provides two strategies:
	     * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	     *
	     * This is used under the hood of the {@link Location} service.
	     *
	     * Applications should use the {@link Router} or {@link Location} services to
	     * interact with application route state.
	     *
	     * For instance, {@link HashLocationStrategy} produces URLs like
	     * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	     * `http://example.com/foo` as an equivalent URL.
	     *
	     * See these two classes for more.
	     *
	     * @stable
	     */
	    var LocationStrategy = (function () {
	        function LocationStrategy() {
	        }
	        return LocationStrategy;
	    }());
	    /**
	     * The `APP_BASE_HREF` token represents the base href to be used with the
	     * {@link PathLocationStrategy}.
	     *
	     * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	     * representing the URL prefix that should be preserved when generating and recognizing
	     * URLs.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {Component, NgModule} from '@angular/core';
	     * import {APP_BASE_HREF} from '@angular/common';
	     *
	     * @NgModule({
	     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
	     * })
	     * class AppModule {}
	     * ```
	     *
	     * @stable
	     */
	    var APP_BASE_HREF = new _angular_core.OpaqueToken('appBaseHref');
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    function getTypeNameForDebugging(type) {
	        if (type['name']) {
	            return type['name'];
	        }
	        return typeof type;
	    }
	    var Date = global$1.Date;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isNumber(obj) {
	        return typeof obj === 'number';
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return isPresent(obj) && isFunction(obj.then);
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    function isDate(obj) {
	        return obj instanceof Date && !isNaN(obj.valueOf());
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token === undefined || token === null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    // Can't be all uppercase as our transpiler would think it is a special directive...
	    var Json = (function () {
	        function Json() {
	        }
	        Json.parse = function (s) { return global$1.JSON.parse(s); };
	        Json.stringify = function (data) {
	            // Dart doesn't take 3 arguments
	            return global$1.JSON.stringify(data, null, 2);
	        };
	        return Json;
	    }());
	    var DateWrapper = (function () {
	        function DateWrapper() {
	        }
	        DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	            if (month === void 0) { month = 1; }
	            if (day === void 0) { day = 1; }
	            if (hour === void 0) { hour = 0; }
	            if (minutes === void 0) { minutes = 0; }
	            if (seconds === void 0) { seconds = 0; }
	            if (milliseconds === void 0) { milliseconds = 0; }
	            return new Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	        };
	        DateWrapper.fromISOString = function (str) { return new Date(str); };
	        DateWrapper.fromMillis = function (ms) { return new Date(ms); };
	        DateWrapper.toMillis = function (date) { return date.getTime(); };
	        DateWrapper.now = function () { return new Date(); };
	        DateWrapper.toJson = function (date) { return date.toJSON(); };
	        return DateWrapper;
	    }());
	    var _symbolIterator = null;
	    function getSymbolIterator() {
	        if (isBlank(_symbolIterator)) {
	            if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	                _symbolIterator = Symbol.iterator;
	            }
	            else {
	                // es6-shim specific logic
	                var keys = Object.getOwnPropertyNames(Map.prototype);
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (key !== 'entries' && key !== 'size' &&
	                        Map.prototype[key] === Map.prototype['entries']) {
	                        _symbolIterator = key;
	                    }
	                }
	            }
	        }
	        return _symbolIterator;
	    }
	
	    /**
	     * `Location` is a service that applications can use to interact with a browser's URL.
	     * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	     * to the URL's path or the URL's hash segment.
	     *
	     * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	     * `Location` only if you need to interact with or create normalized URLs outside of
	     * routing.
	     *
	     * `Location` is responsible for normalizing the URL against the application's base href.
	     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	     * trailing slash:
	     * - `/my/app/user/123` is normalized
	     * - `my/app/user/123` **is not** normalized
	     * - `/my/app/user/123/` **is not** normalized
	     *
	     * ### Example
	     *
	     * ```
	     * import {Component} from '@angular/core';
	     * import {Location} from '@angular/common';
	     *
	     * @Component({selector: 'app-component'})
	     * class AppCmp {
	     *   constructor(location: Location) {
	     *     location.go('/foo');
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var Location = (function () {
	        function Location(platformStrategy) {
	            var _this = this;
	            /** @internal */
	            this._subject = new _angular_core.EventEmitter();
	            this._platformStrategy = platformStrategy;
	            var browserBaseHref = this._platformStrategy.getBaseHref();
	            this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
	            this._platformStrategy.onPopState(function (ev) { _this._subject.emit({ 'url': _this.path(true), 'pop': true, 'type': ev.type }); });
	        }
	        /**
	         * Returns the normalized URL path.
	         */
	        // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
	        // removed.
	        Location.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            return this.normalize(this._platformStrategy.path(includeHash));
	        };
	        /**
	         * Normalizes the given path and compares to the current normalized path.
	         */
	        Location.prototype.isCurrentPathEqualTo = function (path, query) {
	            if (query === void 0) { query = ''; }
	            return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
	        };
	        /**
	         * Given a string representing a URL, returns the normalized URL path without leading or
	         * trailing slashes.
	         */
	        Location.prototype.normalize = function (url) {
	            return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
	        };
	        /**
	         * Given a string representing a URL, returns the platform-specific external URL path.
	         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	         * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	         */
	        Location.prototype.prepareExternalUrl = function (url) {
	            if (url.length > 0 && !url.startsWith('/')) {
	                url = '/' + url;
	            }
	            return this._platformStrategy.prepareExternalUrl(url);
	        };
	        // TODO: rename this method to pushState
	        /**
	         * Changes the browsers URL to the normalized version of the given URL, and pushes a
	         * new item onto the platform's history.
	         */
	        Location.prototype.go = function (path, query) {
	            if (query === void 0) { query = ''; }
	            this._platformStrategy.pushState(null, '', path, query);
	        };
	        /**
	         * Changes the browsers URL to the normalized version of the given URL, and replaces
	         * the top item on the platform's history stack.
	         */
	        Location.prototype.replaceState = function (path, query) {
	            if (query === void 0) { query = ''; }
	            this._platformStrategy.replaceState(null, '', path, query);
	        };
	        /**
	         * Navigates forward in the platform's history.
	         */
	        Location.prototype.forward = function () { this._platformStrategy.forward(); };
	        /**
	         * Navigates back in the platform's history.
	         */
	        Location.prototype.back = function () { this._platformStrategy.back(); };
	        /**
	         * Subscribe to the platform's `popState` events.
	         */
	        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	            if (onThrow === void 0) { onThrow = null; }
	            if (onReturn === void 0) { onReturn = null; }
	            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
	        };
	        /**
	         * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
	         * is.
	         */
	        Location.normalizeQueryParams = function (params) {
	            return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	        };
	        /**
	         * Given 2 parts of a url, join them with a slash if needed.
	         */
	        Location.joinWithSlash = function (start, end) {
	            if (start.length == 0) {
	                return end;
	            }
	            if (end.length == 0) {
	                return start;
	            }
	            var slashes = 0;
	            if (start.endsWith('/')) {
	                slashes++;
	            }
	            if (end.startsWith('/')) {
	                slashes++;
	            }
	            if (slashes == 2) {
	                return start + end.substring(1);
	            }
	            if (slashes == 1) {
	                return start + end;
	            }
	            return start + '/' + end;
	        };
	        /**
	         * If url has a trailing slash, remove it, otherwise return url as is.
	         */
	        Location.stripTrailingSlash = function (url) {
	            if (/\/$/g.test(url)) {
	                url = url.substring(0, url.length - 1);
	            }
	            return url;
	        };
	        Location.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Location.ctorParameters = [
	            { type: LocationStrategy, },
	        ];
	        return Location;
	    }());
	    function _stripBaseHref(baseHref, url) {
	        if (baseHref.length > 0 && url.startsWith(baseHref)) {
	            return url.substring(baseHref.length);
	        }
	        return url;
	    }
	    function _stripIndexHtml(url) {
	        if (/\/index.html$/g.test(url)) {
	            // '/index.html'.length == 11
	            return url.substring(0, url.length - 11);
	        }
	        return url;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	     * {@link Location} service to represent its state in the
	     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	     * of the browser's URL.
	     *
	     * For instance, if you call `location.go('/foo')`, the browser's URL will become
	     * `example.com#/foo`.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Component, NgModule} from '@angular/core';
	     * import {
	     *   LocationStrategy,
	     *   HashLocationStrategy
	     * } from '@angular/common';
	     *
	     * @NgModule({
	     *   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
	     * })
	     * class AppModule {}
	     * ```
	     *
	     * @stable
	     */
	    var HashLocationStrategy = (function (_super) {
	        __extends(HashLocationStrategy, _super);
	        function HashLocationStrategy(_platformLocation, _baseHref) {
	            _super.call(this);
	            this._platformLocation = _platformLocation;
	            this._baseHref = '';
	            if (isPresent(_baseHref)) {
	                this._baseHref = _baseHref;
	            }
	        }
	        HashLocationStrategy.prototype.onPopState = function (fn) {
	            this._platformLocation.onPopState(fn);
	            this._platformLocation.onHashChange(fn);
	        };
	        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	        HashLocationStrategy.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            // the hash value is always prefixed with a `#`
	            // and if it is empty then it will stay empty
	            var path = this._platformLocation.hash;
	            if (!isPresent(path))
	                path = '#';
	            return path.length > 0 ? path.substring(1) : path;
	        };
	        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	            var url = Location.joinWithSlash(this._baseHref, internal);
	            return url.length > 0 ? ('#' + url) : url;
	        };
	        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
	            if (url.length == 0) {
	                url = this._platformLocation.pathname;
	            }
	            this._platformLocation.pushState(state, title, url);
	        };
	        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
	            if (url.length == 0) {
	                url = this._platformLocation.pathname;
	            }
	            this._platformLocation.replaceState(state, title, url);
	        };
	        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	        HashLocationStrategy.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HashLocationStrategy.ctorParameters = [
	            { type: PlatformLocation, },
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [APP_BASE_HREF,] },] },
	        ];
	        return HashLocationStrategy;
	    }(LocationStrategy));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	     * {@link Location} service to represent its state in the
	     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	     * browser's URL.
	     *
	     * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	     * provided in {@link ROUTER_PROVIDERS}.
	     *
	     * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
	     * or add a base element to the document. This URL prefix that will be preserved
	     * when generating and recognizing URLs.
	     *
	     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	     * `location.go('/foo')`, the browser's URL will become
	     * `example.com/my/app/foo`.
	     *
	     * Similarly, if you add `<base href='/my/app'/>` to the document and call
	     * `location.go('/foo')`, the browser's URL will become
	     * `example.com/my/app/foo`.
	     *
	     * @stable
	     */
	    var PathLocationStrategy = (function (_super) {
	        __extends$1(PathLocationStrategy, _super);
	        function PathLocationStrategy(_platformLocation, href) {
	            _super.call(this);
	            this._platformLocation = _platformLocation;
	            if (isBlank(href)) {
	                href = this._platformLocation.getBaseHrefFromDOM();
	            }
	            if (isBlank(href)) {
	                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	            }
	            this._baseHref = href;
	        }
	        PathLocationStrategy.prototype.onPopState = function (fn) {
	            this._platformLocation.onPopState(fn);
	            this._platformLocation.onHashChange(fn);
	        };
	        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	            return Location.joinWithSlash(this._baseHref, internal);
	        };
	        PathLocationStrategy.prototype.path = function (includeHash) {
	            if (includeHash === void 0) { includeHash = false; }
	            var pathname = this._platformLocation.pathname +
	                Location.normalizeQueryParams(this._platformLocation.search);
	            var hash = this._platformLocation.hash;
	            return hash && includeHash ? "" + pathname + hash : pathname;
	        };
	        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
	            this._platformLocation.pushState(state, title, externalUrl);
	        };
	        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
	            this._platformLocation.replaceState(state, title, externalUrl);
	        };
	        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	        PathLocationStrategy.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        PathLocationStrategy.ctorParameters = [
	            { type: PlatformLocation, },
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [APP_BASE_HREF,] },] },
	        ];
	        return PathLocationStrategy;
	    }(LocationStrategy));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @experimental
	     */
	    var NgLocalization = (function () {
	        function NgLocalization() {
	        }
	        return NgLocalization;
	    }());
	    /**
	     * Returns the plural category for a given value.
	     * - "=value" when the case exists,
	     * - the plural category otherwise
	     *
	     * @internal
	     */
	    function getPluralCategory(value, cases, ngLocalization) {
	        var nbCase = "=" + value;
	        return cases.indexOf(nbCase) > -1 ? nbCase : ngLocalization.getPluralCategory(value);
	    }
	    /**
	     * Returns the plural case based on the locale
	     *
	     * @experimental
	     */
	    var NgLocaleLocalization = (function (_super) {
	        __extends$2(NgLocaleLocalization, _super);
	        function NgLocaleLocalization(_locale) {
	            _super.call(this);
	            this._locale = _locale;
	        }
	        NgLocaleLocalization.prototype.getPluralCategory = function (value) {
	            var plural = getPluralCase(this._locale, value);
	            switch (plural) {
	                case Plural.Zero:
	                    return 'zero';
	                case Plural.One:
	                    return 'one';
	                case Plural.Two:
	                    return 'two';
	                case Plural.Few:
	                    return 'few';
	                case Plural.Many:
	                    return 'many';
	                default:
	                    return 'other';
	            }
	        };
	        NgLocaleLocalization.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        NgLocaleLocalization.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return NgLocaleLocalization;
	    }(NgLocalization));
	    // This is generated code DO NOT MODIFY
	    // see angular2/script/cldr/gen_plural_rules.js
	    /** @experimental */
	    var Plural;
	    (function (Plural) {
	        Plural[Plural["Zero"] = 0] = "Zero";
	        Plural[Plural["One"] = 1] = "One";
	        Plural[Plural["Two"] = 2] = "Two";
	        Plural[Plural["Few"] = 3] = "Few";
	        Plural[Plural["Many"] = 4] = "Many";
	        Plural[Plural["Other"] = 5] = "Other";
	    })(Plural || (Plural = {}));
	    /**
	     * Returns the plural case based on the locale
	     *
	     * @experimental
	     */
	    function getPluralCase(locale, nLike) {
	        // TODO(vicb): lazy compute
	        if (typeof nLike === 'string') {
	            nLike = parseInt(nLike, 10);
	        }
	        var n = nLike;
	        var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
	        var i = Math.floor(Math.abs(n));
	        var v = nDecimal.length;
	        var f = parseInt(nDecimal, 10);
	        var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
	        var lang = locale.split('-')[0].toLowerCase();
	        switch (lang) {
	            case 'af':
	            case 'asa':
	            case 'az':
	            case 'bem':
	            case 'bez':
	            case 'bg':
	            case 'brx':
	            case 'ce':
	            case 'cgg':
	            case 'chr':
	            case 'ckb':
	            case 'ee':
	            case 'el':
	            case 'eo':
	            case 'es':
	            case 'eu':
	            case 'fo':
	            case 'fur':
	            case 'gsw':
	            case 'ha':
	            case 'haw':
	            case 'hu':
	            case 'jgo':
	            case 'jmc':
	            case 'ka':
	            case 'kk':
	            case 'kkj':
	            case 'kl':
	            case 'ks':
	            case 'ksb':
	            case 'ky':
	            case 'lb':
	            case 'lg':
	            case 'mas':
	            case 'mgo':
	            case 'ml':
	            case 'mn':
	            case 'nb':
	            case 'nd':
	            case 'ne':
	            case 'nn':
	            case 'nnh':
	            case 'nyn':
	            case 'om':
	            case 'or':
	            case 'os':
	            case 'ps':
	            case 'rm':
	            case 'rof':
	            case 'rwk':
	            case 'saq':
	            case 'seh':
	            case 'sn':
	            case 'so':
	            case 'sq':
	            case 'ta':
	            case 'te':
	            case 'teo':
	            case 'tk':
	            case 'tr':
	            case 'ug':
	            case 'uz':
	            case 'vo':
	            case 'vun':
	            case 'wae':
	            case 'xog':
	                if (n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'agq':
	            case 'bas':
	            case 'cu':
	            case 'dav':
	            case 'dje':
	            case 'dua':
	            case 'dyo':
	            case 'ebu':
	            case 'ewo':
	            case 'guz':
	            case 'kam':
	            case 'khq':
	            case 'ki':
	            case 'kln':
	            case 'kok':
	            case 'ksf':
	            case 'lrc':
	            case 'lu':
	            case 'luo':
	            case 'luy':
	            case 'mer':
	            case 'mfe':
	            case 'mgh':
	            case 'mua':
	            case 'mzn':
	            case 'nmg':
	            case 'nus':
	            case 'qu':
	            case 'rn':
	            case 'rw':
	            case 'sbp':
	            case 'twq':
	            case 'vai':
	            case 'yav':
	            case 'yue':
	            case 'zgh':
	            case 'ak':
	            case 'ln':
	            case 'mg':
	            case 'pa':
	            case 'ti':
	                if (n === Math.floor(n) && n >= 0 && n <= 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'am':
	            case 'as':
	            case 'bn':
	            case 'fa':
	            case 'gu':
	            case 'hi':
	            case 'kn':
	            case 'mr':
	            case 'zu':
	                if (i === 0 || n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'ar':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
	                    return Plural.Few;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'ast':
	            case 'ca':
	            case 'de':
	            case 'en':
	            case 'et':
	            case 'fi':
	            case 'fy':
	            case 'gl':
	            case 'it':
	            case 'nl':
	            case 'sv':
	            case 'sw':
	            case 'ur':
	            case 'yi':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                return Plural.Other;
	            case 'be':
	                if (n % 10 === 1 && !(n % 100 === 11))
	                    return Plural.One;
	                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
	                    !(n % 100 >= 12 && n % 100 <= 14))
	                    return Plural.Few;
	                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
	                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'br':
	                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
	                    return Plural.One;
	                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
	                    return Plural.Two;
	                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
	                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
	                        n % 100 >= 90 && n % 100 <= 99))
	                    return Plural.Few;
	                if (!(n === 0) && n % 1e6 === 0)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'bs':
	            case 'hr':
	            case 'sr':
	                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14) ||
	                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
	                        !(f % 100 >= 12 && f % 100 <= 14))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'cs':
	            case 'sk':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
	                    return Plural.Few;
	                if (!(v === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'cy':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n === 3)
	                    return Plural.Few;
	                if (n === 6)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'da':
	                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
	                    return Plural.One;
	                return Plural.Other;
	            case 'dsb':
	            case 'hsb':
	                if (v === 0 && i % 100 === 1 || f % 100 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 100 === 2 || f % 100 === 2)
	                    return Plural.Two;
	                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
	                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'ff':
	            case 'fr':
	            case 'hy':
	            case 'kab':
	                if (i === 0 || i === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'fil':
	                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
	                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
	                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ga':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                if (n === Math.floor(n) && n >= 3 && n <= 6)
	                    return Plural.Few;
	                if (n === Math.floor(n) && n >= 7 && n <= 10)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'gd':
	                if (n === 1 || n === 11)
	                    return Plural.One;
	                if (n === 2 || n === 12)
	                    return Plural.Two;
	                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'gv':
	                if (v === 0 && i % 10 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 10 === 2)
	                    return Plural.Two;
	                if (v === 0 &&
	                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
	                    return Plural.Few;
	                if (!(v === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'he':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (i === 2 && v === 0)
	                    return Plural.Two;
	                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'is':
	                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ksh':
	                if (n === 0)
	                    return Plural.Zero;
	                if (n === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'kw':
	            case 'naq':
	            case 'se':
	            case 'smn':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 2)
	                    return Plural.Two;
	                return Plural.Other;
	            case 'lag':
	                if (n === 0)
	                    return Plural.Zero;
	                if ((i === 0 || i === 1) && !(n === 0))
	                    return Plural.One;
	                return Plural.Other;
	            case 'lt':
	                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
	                    return Plural.One;
	                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
	                    !(n % 100 >= 11 && n % 100 <= 19))
	                    return Plural.Few;
	                if (!(f === 0))
	                    return Plural.Many;
	                return Plural.Other;
	            case 'lv':
	            case 'prg':
	                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
	                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
	                    return Plural.Zero;
	                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
	                    !(v === 2) && f % 10 === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'mk':
	                if (v === 0 && i % 10 === 1 || f % 10 === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'mt':
	                if (n === 1)
	                    return Plural.One;
	                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
	                    return Plural.Few;
	                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'pl':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14))
	                    return Plural.Few;
	                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
	                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
	                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'pt':
	                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
	                    return Plural.One;
	                return Plural.Other;
	            case 'ro':
	                if (i === 1 && v === 0)
	                    return Plural.One;
	                if (!(v === 0) || n === 0 ||
	                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'ru':
	            case 'uk':
	                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
	                    return Plural.One;
	                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
	                    !(i % 100 >= 12 && i % 100 <= 14))
	                    return Plural.Few;
	                if (v === 0 && i % 10 === 0 ||
	                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
	                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
	                    return Plural.Many;
	                return Plural.Other;
	            case 'shi':
	                if (i === 0 || n === 1)
	                    return Plural.One;
	                if (n === Math.floor(n) && n >= 2 && n <= 10)
	                    return Plural.Few;
	                return Plural.Other;
	            case 'si':
	                if (n === 0 || n === 1 || i === 0 && f === 1)
	                    return Plural.One;
	                return Plural.Other;
	            case 'sl':
	                if (v === 0 && i % 100 === 1)
	                    return Plural.One;
	                if (v === 0 && i % 100 === 2)
	                    return Plural.Two;
	                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
	                    return Plural.Few;
	                return Plural.Other;
	            case 'tzm':
	                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
	                    return Plural.One;
	                return Plural.Other;
	            default:
	                return Plural.Other;
	        }
	    }
	
	    var Map$1 = global$1.Map;
	    var Set$1 = global$1.Set;
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map$1([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map$1();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var createMapFromMap = (function () {
	        try {
	            if (new Map$1(new Map$1())) {
	                return function createMapFromMap(m) { return new Map$1(m); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromMap(m) {
	            var map = new Map$1();
	            m.forEach(function (v, k) { map.set(k, v); });
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map$1()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map$1()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = ListWrapper.createFixedSize(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.create = function () {
	            // Note: We are not using Object.create(null) here due to
	            // performance!
	            // http://jsperf.com/ng2-object-create-null
	            return {};
	        };
	        StringMapWrapper.contains = function (map, key) {
	            return map.hasOwnProperty(key);
	        };
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.delete = function (map, key) { delete map[key]; };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	    function isListLikeIterable(obj) {
	        if (!isJsObject(obj))
	            return false;
	        return isArray(obj) ||
	            (!(obj instanceof Map$1) &&
	                getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	    }
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Set constructor.  We work around that by manually adding the items.
	    var createSetFromList = (function () {
	        var test = new Set$1([1, 2, 3]);
	        if (test.size === 3) {
	            return function createSetFromList(lst) { return new Set$1(lst); };
	        }
	        else {
	            return function createSetAndPopulateFromList(lst) {
	                var res = new Set$1(lst);
	                if (res.size !== lst.length) {
	                    for (var i = 0; i < lst.length; i++) {
	                        res.add(lst[i]);
	                    }
	                }
	                return res;
	            };
	        }
	    })();
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds and removes CSS classes on an HTML element.
	     *
	     * @howToUse
	     * ```
	     *     <some-element [ngClass]="'first second'">...</some-element>
	     *
	     *     <some-element [ngClass]="['first', 'second']">...</some-element>
	     *
	     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
	     *
	     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
	     * ```
	     *
	     * @description
	     *
	     * The CSS classes are updated as follow depending on the type of the expression evaluation:
	     * - `string` - the CSS classes listed in a string (space delimited) are added,
	     * - `Array` - the CSS classes (Array elements) are added,
	     * - `Object` - keys are CSS class names that get added when the expression given in the value
	     *              evaluates to a truthy value, otherwise class are removed.
	     *
	     * @stable
	     */
	    var NgClass = (function () {
	        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
	            this._iterableDiffers = _iterableDiffers;
	            this._keyValueDiffers = _keyValueDiffers;
	            this._ngEl = _ngEl;
	            this._renderer = _renderer;
	            this._initialClasses = [];
	        }
	        Object.defineProperty(NgClass.prototype, "klass", {
	            set: function (v) {
	                this._applyInitialClasses(true);
	                this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
	                this._applyInitialClasses(false);
	                this._applyClasses(this._rawClass, false);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgClass.prototype, "ngClass", {
	            set: function (v) {
	                this._cleanupClasses(this._rawClass);
	                this._iterableDiffer = null;
	                this._keyValueDiffer = null;
	                this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
	                if (this._rawClass) {
	                    if (isListLikeIterable(this._rawClass)) {
	                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create(null);
	                    }
	                    else {
	                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create(null);
	                    }
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgClass.prototype.ngDoCheck = function () {
	            if (this._iterableDiffer) {
	                var changes = this._iterableDiffer.diff(this._rawClass);
	                if (changes) {
	                    this._applyIterableChanges(changes);
	                }
	            }
	            else if (this._keyValueDiffer) {
	                var changes = this._keyValueDiffer.diff(this._rawClass);
	                if (changes) {
	                    this._applyKeyValueChanges(changes);
	                }
	            }
	        };
	        NgClass.prototype._cleanupClasses = function (rawClassVal) {
	            this._applyClasses(rawClassVal, true);
	            this._applyInitialClasses(false);
	        };
	        NgClass.prototype._applyKeyValueChanges = function (changes) {
	            var _this = this;
	            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
	            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
	            changes.forEachRemovedItem(function (record) {
	                if (record.previousValue) {
	                    _this._toggleClass(record.key, false);
	                }
	            });
	        };
	        NgClass.prototype._applyIterableChanges = function (changes) {
	            var _this = this;
	            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.item, true); });
	            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
	        };
	        NgClass.prototype._applyInitialClasses = function (isCleanup) {
	            var _this = this;
	            this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
	        };
	        NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
	            var _this = this;
	            if (rawClassVal) {
	                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
	                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
	                }
	                else {
	                    Object.keys(rawClassVal).forEach(function (klass) {
	                        if (isPresent(rawClassVal[klass]))
	                            _this._toggleClass(klass, !isCleanup);
	                    });
	                }
	            }
	        };
	        NgClass.prototype._toggleClass = function (klass, enabled) {
	            var _this = this;
	            klass = klass.trim();
	            if (klass) {
	                klass.split(/\s+/g).forEach(function (klass) { _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, enabled); });
	            }
	        };
	        NgClass.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngClass]' },] },
	        ];
	        /** @nocollapse */
	        NgClass.ctorParameters = [
	            { type: _angular_core.IterableDiffers, },
	            { type: _angular_core.KeyValueDiffers, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        NgClass.propDecorators = {
	            'klass': [{ type: _angular_core.Input, args: ['class',] },],
	            'ngClass': [{ type: _angular_core.Input },],
	        };
	        return NgClass;
	    }());
	
	    var NgForRow = (function () {
	        function NgForRow($implicit, index, count) {
	            this.$implicit = $implicit;
	            this.index = index;
	            this.count = count;
	        }
	        Object.defineProperty(NgForRow.prototype, "first", {
	            get: function () { return this.index === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "last", {
	            get: function () { return this.index === this.count - 1; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "even", {
	            get: function () { return this.index % 2 === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForRow.prototype, "odd", {
	            get: function () { return !this.even; },
	            enumerable: true,
	            configurable: true
	        });
	        return NgForRow;
	    }());
	    /**
	     * The `NgFor` directive instantiates a template once per item from an iterable. The context for
	     * each instantiated template inherits from the outer context with the given loop variable set
	     * to the current item from the iterable.
	     *
	     * ### Local Variables
	     *
	     * `NgFor` provides several exported values that can be aliased to local variables:
	     *
	     * * `index` will be set to the current loop iteration for each template context.
	     * * `first` will be set to a boolean value indicating whether the item is the first one in the
	     *   iteration.
	     * * `last` will be set to a boolean value indicating whether the item is the last one in the
	     *   iteration.
	     * * `even` will be set to a boolean value indicating whether this item has an even index.
	     * * `odd` will be set to a boolean value indicating whether this item has an odd index.
	     *
	     * ### Change Propagation
	     *
	     * When the contents of the iterator changes, `NgFor` makes the corresponding changes to the DOM:
	     *
	     * * When an item is added, a new instance of the template is added to the DOM.
	     * * When an item is removed, its template instance is removed from the DOM.
	     * * When items are reordered, their respective templates are reordered in the DOM.
	     * * Otherwise, the DOM element for that item will remain the same.
	     *
	     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
	     * those changes in the DOM. This has important implications for animations and any stateful
	     * controls
	     * (such as `<input>` elements which accept user input) that are present. Inserted rows can be
	     * animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state such
	     * as user input.
	     *
	     * It is possible for the identities of elements in the iterator to change while the data does not.
	     * This can happen, for example, if the iterator produced from an RPC to the server, and that
	     * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
	     * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
	     * elements were deleted and all new elements inserted). This is an expensive operation and should
	     * be avoided if possible.
	     *
	     * To customize the default tracking algorithm, `NgFor` supports `trackBy` option.
	     * `trackBy` takes a function which has two arguments: `index` and `item`.
	     * If `trackBy` is given, Angular tracks changes by the return value of the function.
	     *
	     * ### Syntax
	     *
	     * - `<li *ngFor="let item of items; let i = index; trackBy: trackByFn">...</li>`
	     * - `<li template="ngFor let item of items; let i = index; trackBy: trackByFn">...</li>`
	     *
	     * With `<template>` element:
	     *
	     * ```
	     * <template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
	     *   <li>...</li>
	     * </template>
	     * ```
	     *
	     * ### Example
	     *
	     * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
	     * example.
	     *
	     * @stable
	     */
	    var NgFor = (function () {
	        function NgFor(_viewContainer, _template, _differs, _cdr) {
	            this._viewContainer = _viewContainer;
	            this._template = _template;
	            this._differs = _differs;
	            this._cdr = _cdr;
	            this._differ = null;
	        }
	        Object.defineProperty(NgFor.prototype, "ngForTemplate", {
	            set: function (value) {
	                if (value) {
	                    this._template = value;
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgFor.prototype.ngOnChanges = function (changes) {
	            if ('ngForOf' in changes) {
	                // React on ngForOf changes only once all inputs have been initialized
	                var value = changes['ngForOf'].currentValue;
	                if (!this._differ && value) {
	                    try {
	                        this._differ = this._differs.find(value).create(this._cdr, this.ngForTrackBy);
	                    }
	                    catch (e) {
	                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
	                    }
	                }
	            }
	        };
	        NgFor.prototype.ngDoCheck = function () {
	            if (this._differ) {
	                var changes = this._differ.diff(this.ngForOf);
	                if (changes)
	                    this._applyChanges(changes);
	            }
	        };
	        NgFor.prototype._applyChanges = function (changes) {
	            var _this = this;
	            var insertTuples = [];
	            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
	                if (item.previousIndex == null) {
	                    var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForRow(null, null, null), currentIndex);
	                    var tuple = new RecordViewTuple(item, view);
	                    insertTuples.push(tuple);
	                }
	                else if (currentIndex == null) {
	                    _this._viewContainer.remove(adjustedPreviousIndex);
	                }
	                else {
	                    var view = _this._viewContainer.get(adjustedPreviousIndex);
	                    _this._viewContainer.move(view, currentIndex);
	                    var tuple = new RecordViewTuple(item, view);
	                    insertTuples.push(tuple);
	                }
	            });
	            for (var i = 0; i < insertTuples.length; i++) {
	                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
	            }
	            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
	                var viewRef = this._viewContainer.get(i);
	                viewRef.context.index = i;
	                viewRef.context.count = ilen;
	            }
	            changes.forEachIdentityChange(function (record) {
	                var viewRef = _this._viewContainer.get(record.currentIndex);
	                viewRef.context.$implicit = record.item;
	            });
	        };
	        NgFor.prototype._perViewChange = function (view, record) {
	            view.context.$implicit = record.item;
	        };
	        NgFor.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngFor][ngForOf]' },] },
	        ];
	        /** @nocollapse */
	        NgFor.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: _angular_core.IterableDiffers, },
	            { type: _angular_core.ChangeDetectorRef, },
	        ];
	        NgFor.propDecorators = {
	            'ngForOf': [{ type: _angular_core.Input },],
	            'ngForTrackBy': [{ type: _angular_core.Input },],
	            'ngForTemplate': [{ type: _angular_core.Input },],
	        };
	        return NgFor;
	    }());
	    var RecordViewTuple = (function () {
	        function RecordViewTuple(record, view) {
	            this.record = record;
	            this.view = view;
	        }
	        return RecordViewTuple;
	    }());
	
	    /**
	     * Removes or recreates a portion of the DOM tree based on an {expression}.
	     *
	     * If the expression assigned to `ngIf` evaluates to a false value then the element
	     * is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/fe0kgemFBtmQOY31b4tw?p=preview)):
	     *
	     * ```
	     * <div *ngIf="errorCount > 0" class="error">
	     *   <!-- Error message displayed when the errorCount property on the current context is greater
	     * than 0. -->
	     *   {{errorCount}} errors detected
	     * </div>
	     * ```
	     *
	     * ### Syntax
	     *
	     * - `<div *ngIf="condition">...</div>`
	     * - `<div template="ngIf condition">...</div>`
	     * - `<template [ngIf]="condition"><div>...</div></template>`
	     *
	     * @stable
	     */
	    var NgIf = (function () {
	        function NgIf(_viewContainer, _template) {
	            this._viewContainer = _viewContainer;
	            this._template = _template;
	            this._hasView = false;
	        }
	        Object.defineProperty(NgIf.prototype, "ngIf", {
	            set: function (condition) {
	                if (condition && !this._hasView) {
	                    this._hasView = true;
	                    this._viewContainer.createEmbeddedView(this._template);
	                }
	                else if (!condition && this._hasView) {
	                    this._hasView = false;
	                    this._viewContainer.clear();
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgIf.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngIf]' },] },
	        ];
	        /** @nocollapse */
	        NgIf.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	        ];
	        NgIf.propDecorators = {
	            'ngIf': [{ type: _angular_core.Input },],
	        };
	        return NgIf;
	    }());
	
	    var _CASE_DEFAULT = new Object();
	    var SwitchView = (function () {
	        function SwitchView(_viewContainerRef, _templateRef) {
	            this._viewContainerRef = _viewContainerRef;
	            this._templateRef = _templateRef;
	        }
	        SwitchView.prototype.create = function () { this._viewContainerRef.createEmbeddedView(this._templateRef); };
	        SwitchView.prototype.destroy = function () { this._viewContainerRef.clear(); };
	        return SwitchView;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
	     *             expression.
	     *
	     * @howToUse
	     * ```
	     *     <container-element [ngSwitch]="switch_expression">
	     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
	     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
	     *       <ng-container *ngSwitchCase="match_expression_3">
	     *         <!-- use a ng-container to group multiple root nodes -->
	     *         <inner-element></inner-element>
	     *         <inner-other-element></inner-other-element>
	     *       </ng-container>
	     *       <some-element *ngSwitchDefault>...</p>
	     *     </container-element>
	     * ```
	     * @description
	     *
	     * `NgSwitch` stamps out nested views when their match expression value matches the value of the
	     * switch expression.
	     *
	     * In other words:
	     * - you define a container element (where you place the directive with a switch expression on the
	     * `[ngSwitch]="..."` attribute)
	     * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
	     * root elements.
	     *
	     * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
	     * be
	     * preserved at the location.
	     *
	     * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
	     * expression is evaluated.
	     * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
	     * stamped out.
	     *
	     * @stable
	     */
	    var NgSwitch = (function () {
	        function NgSwitch() {
	            this._useDefault = false;
	            this._valueViews = new Map();
	            this._activeViews = [];
	        }
	        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
	            set: function (value) {
	                // Empty the currently active ViewContainers
	                this._emptyAllActiveViews();
	                // Add the ViewContainers matching the value (with a fallback to default)
	                this._useDefault = false;
	                var views = this._valueViews.get(value);
	                if (!views) {
	                    this._useDefault = true;
	                    views = this._valueViews.get(_CASE_DEFAULT) || null;
	                }
	                this._activateViews(views);
	                this._switchValue = value;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSwitch.prototype._onCaseValueChanged = function (oldCase, newCase, view) {
	            this._deregisterView(oldCase, view);
	            this._registerView(newCase, view);
	            if (oldCase === this._switchValue) {
	                view.destroy();
	                ListWrapper.remove(this._activeViews, view);
	            }
	            else if (newCase === this._switchValue) {
	                if (this._useDefault) {
	                    this._useDefault = false;
	                    this._emptyAllActiveViews();
	                }
	                view.create();
	                this._activeViews.push(view);
	            }
	            // Switch to default when there is no more active ViewContainers
	            if (this._activeViews.length === 0 && !this._useDefault) {
	                this._useDefault = true;
	                this._activateViews(this._valueViews.get(_CASE_DEFAULT));
	            }
	        };
	        /** @internal */
	        NgSwitch.prototype._emptyAllActiveViews = function () {
	            var activeContainers = this._activeViews;
	            for (var i = 0; i < activeContainers.length; i++) {
	                activeContainers[i].destroy();
	            }
	            this._activeViews = [];
	        };
	        /** @internal */
	        NgSwitch.prototype._activateViews = function (views) {
	            // TODO(vicb): assert(this._activeViews.length === 0);
	            if (views) {
	                for (var i = 0; i < views.length; i++) {
	                    views[i].create();
	                }
	                this._activeViews = views;
	            }
	        };
	        /** @internal */
	        NgSwitch.prototype._registerView = function (value, view) {
	            var views = this._valueViews.get(value);
	            if (!views) {
	                views = [];
	                this._valueViews.set(value, views);
	            }
	            views.push(view);
	        };
	        /** @internal */
	        NgSwitch.prototype._deregisterView = function (value, view) {
	            // `_CASE_DEFAULT` is used a marker for non-registered cases
	            if (value === _CASE_DEFAULT)
	                return;
	            var views = this._valueViews.get(value);
	            if (views.length == 1) {
	                this._valueViews.delete(value);
	            }
	            else {
	                ListWrapper.remove(views, view);
	            }
	        };
	        NgSwitch.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitch]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitch.ctorParameters = [];
	        NgSwitch.propDecorators = {
	            'ngSwitch': [{ type: _angular_core.Input },],
	        };
	        return NgSwitch;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Creates a view that will be added/removed from the parent {@link NgSwitch} when the
	     *             given expression evaluate to respectively the same/different value as the switch
	     *             expression.
	     *
	     * @howToUse
	     *     <container-element [ngSwitch]="switch_expression">
	     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     *     </container-element>
	     *
	     * @description
	     *
	     * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
	     * expression.
	     *
	     * If multiple match expressions match the switch expression value, all of them are displayed.
	     *
	     * See {@link NgSwitch} for more details and example.
	     *
	     * @stable
	     */
	    var NgSwitchCase = (function () {
	        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
	            // `_CASE_DEFAULT` is used as a marker for a not yet initialized value
	            /** @internal */
	            this._value = _CASE_DEFAULT;
	            this._switch = ngSwitch;
	            this._view = new SwitchView(viewContainer, templateRef);
	        }
	        Object.defineProperty(NgSwitchCase.prototype, "ngSwitchCase", {
	            set: function (value) {
	                this._switch._onCaseValueChanged(this._value, value, this._view);
	                this._value = value;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgSwitchCase.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitchCase]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitchCase.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
	        ];
	        NgSwitchCase.propDecorators = {
	            'ngSwitchCase': [{ type: _angular_core.Input },],
	        };
	        return NgSwitchCase;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Creates a view that is added to the parent {@link NgSwitch} when no case expressions
	     * match the
	     *             switch expression.
	     *
	     * @howToUse
	     *     <container-element [ngSwitch]="switch_expression">
	     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
	     *       <some-other-element *ngSwitchDefault>...</some-other-element>
	     *     </container-element>
	     *
	     * @description
	     *
	     * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
	     * expression.
	     *
	     * See {@link NgSwitch} for more details and example.
	     *
	     * @stable
	     */
	    var NgSwitchDefault = (function () {
	        function NgSwitchDefault(viewContainer, templateRef, sswitch) {
	            sswitch._registerView(_CASE_DEFAULT, new SwitchView(viewContainer, templateRef));
	        }
	        NgSwitchDefault.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngSwitchDefault]' },] },
	        ];
	        /** @nocollapse */
	        NgSwitchDefault.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.TemplateRef, },
	            { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
	        ];
	        return NgSwitchDefault;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
	     *
	     * @howToUse
	     * ```
	     * <some-element [ngPlural]="value">
	     *   <ng-container *ngPluralCase="'=0'">there is nothing</ng-container>
	     *   <ng-container *ngPluralCase="'=1'">there is one</ng-container>
	     *   <ng-container *ngPluralCase="'few'">there are a few</ng-container>
	     *   <ng-container *ngPluralCase="'other'">there are exactly #</ng-container>
	     * </some-element>
	     * ```
	     *
	     * @description
	     *
	     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
	     * that match the switch expression's pluralization category.
	     *
	     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
	     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
	     * expression:
	     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
	     *   matches the switch expression exactly,
	     * - otherwise, the view will be treated as a "category match", and will only display if exact
	     *   value matches aren't found and the value maps to its category for the defined locale.
	     *
	     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
	     *
	     * @experimental
	     */
	    var NgPlural = (function () {
	        function NgPlural(_localization) {
	            this._localization = _localization;
	            this._caseViews = {};
	        }
	        Object.defineProperty(NgPlural.prototype, "ngPlural", {
	            set: function (value) {
	                this._switchValue = value;
	                this._updateView();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
	        /** @internal */
	        NgPlural.prototype._updateView = function () {
	            this._clearViews();
	            var cases = Object.keys(this._caseViews);
	            var key = getPluralCategory(this._switchValue, cases, this._localization);
	            this._activateView(this._caseViews[key]);
	        };
	        /** @internal */
	        NgPlural.prototype._clearViews = function () {
	            if (this._activeView)
	                this._activeView.destroy();
	        };
	        /** @internal */
	        NgPlural.prototype._activateView = function (view) {
	            if (view) {
	                this._activeView = view;
	                this._activeView.create();
	            }
	        };
	        NgPlural.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngPlural]' },] },
	        ];
	        /** @nocollapse */
	        NgPlural.ctorParameters = [
	            { type: NgLocalization, },
	        ];
	        NgPlural.propDecorators = {
	            'ngPlural': [{ type: _angular_core.Input },],
	        };
	        return NgPlural;
	    }());
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Creates a view that will be added/removed from the parent {@link NgPlural} when the
	     *             given expression matches the plural expression according to CLDR rules.
	     *
	     * @howToUse
	     *     <some-element [ngPlural]="value">
	     *       <ng-container *ngPluralCase="'=0'">...</ng-container>
	     *       <ng-container *ngPluralCase="'other'">...</ng-container>
	     *     </some-element>
	     *
	     * See {@link NgPlural} for more details and example.
	     *
	     * @experimental
	     */
	    var NgPluralCase = (function () {
	        function NgPluralCase(value, template, viewContainer, ngPlural) {
	            this.value = value;
	            ngPlural.addCase(value, new SwitchView(viewContainer, template));
	        }
	        NgPluralCase.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngPluralCase]' },] },
	        ];
	        /** @nocollapse */
	        NgPluralCase.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['ngPluralCase',] },] },
	            { type: _angular_core.TemplateRef, },
	            { type: _angular_core.ViewContainerRef, },
	            { type: NgPlural, decorators: [{ type: _angular_core.Host },] },
	        ];
	        return NgPluralCase;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Update an HTML element styles.
	     *
	     * @howToUse
	     * ```
	     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
	     *
	     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
	     *
	     * <some-element [ngStyle]="objExp">...</some-element>
	     * ```
	     *
	     * @description
	     *
	     * The styles are updated according to the value of the expression evaluation:
	     * - keys are style names with an option `.<unit>` suffix (ie 'top.px', 'font-style.em'),
	     * - values are the values assigned to those properties (expressed in the given unit).
	     *
	     * @stable
	     */
	    var NgStyle = (function () {
	        function NgStyle(_differs, _ngEl, _renderer) {
	            this._differs = _differs;
	            this._ngEl = _ngEl;
	            this._renderer = _renderer;
	        }
	        Object.defineProperty(NgStyle.prototype, "ngStyle", {
	            set: function (v) {
	                this._ngStyle = v;
	                if (!this._differ && v) {
	                    this._differ = this._differs.find(v).create(null);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgStyle.prototype.ngDoCheck = function () {
	            if (this._differ) {
	                var changes = this._differ.diff(this._ngStyle);
	                if (changes) {
	                    this._applyChanges(changes);
	                }
	            }
	        };
	        NgStyle.prototype._applyChanges = function (changes) {
	            var _this = this;
	            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
	            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
	            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
	        };
	        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
	            var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
	            value = value !== null && value !== void (0) && unit ? "" + value + unit : value;
	            this._renderer.setElementStyle(this._ngEl.nativeElement, name, value);
	        };
	        NgStyle.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngStyle]' },] },
	        ];
	        /** @nocollapse */
	        NgStyle.ctorParameters = [
	            { type: _angular_core.KeyValueDiffers, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        NgStyle.propDecorators = {
	            'ngStyle': [{ type: _angular_core.Input },],
	        };
	        return NgStyle;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     *
	     * @whatItDoes Inserts an embedded view from a prepared `TemplateRef`
	     *
	     * @howToUse
	     * ```
	     * <template [ngTemplateOutlet]="templateRefExpression"
	     *           [ngOutletContext]="objectExpression">
	     * </template>
	     * ```
	     *
	     * @description
	     *
	     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngOutletContext]`.
	     * `[ngOutletContext]` should be an object, the object's keys will be the local template variables
	     * available within the `TemplateRef`.
	     *
	     * Note: using the key `$implicit` in the context object will set it's value as default.
	     *
	     * @experimental
	     */
	    var NgTemplateOutlet = (function () {
	        function NgTemplateOutlet(_viewContainerRef) {
	            this._viewContainerRef = _viewContainerRef;
	        }
	        Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
	            set: function (context) { this._context = context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
	            set: function (templateRef) { this._templateRef = templateRef; },
	            enumerable: true,
	            configurable: true
	        });
	        NgTemplateOutlet.prototype.ngOnChanges = function () {
	            if (this._viewRef) {
	                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
	            }
	            if (this._templateRef) {
	                this._viewRef = this._viewContainerRef.createEmbeddedView(this._templateRef, this._context);
	            }
	        };
	        NgTemplateOutlet.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngTemplateOutlet]' },] },
	        ];
	        /** @nocollapse */
	        NgTemplateOutlet.ctorParameters = [
	            { type: _angular_core.ViewContainerRef, },
	        ];
	        NgTemplateOutlet.propDecorators = {
	            'ngOutletContext': [{ type: _angular_core.Input },],
	            'ngTemplateOutlet': [{ type: _angular_core.Input },],
	        };
	        return NgTemplateOutlet;
	    }());
	
	    /**
	     * A collection of Angular directives that are likely to be used in each and every Angular
	     * application.
	     */
	    var COMMON_DIRECTIVES = [
	        NgClass,
	        NgFor,
	        NgIf,
	        NgTemplateOutlet,
	        NgStyle,
	        NgSwitch,
	        NgSwitchCase,
	        NgSwitchDefault,
	        NgPlural,
	        NgPluralCase,
	    ];
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var BaseError = (function (_super) {
	        __extends$4(BaseError, _super);
	        function BaseError(message) {
	            // Errors don't use current this, instead they create a new instance.
	            // We have to do forward all of our api to the nativeInstance.
	            var nativeError = _super.call(this, message);
	            this._nativeError = nativeError;
	        }
	        Object.defineProperty(BaseError.prototype, "message", {
	            get: function () { return this._nativeError.message; },
	            set: function (message) { this._nativeError.message = message; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "name", {
	            get: function () { return this._nativeError.name; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "stack", {
	            get: function () { return this._nativeError.stack; },
	            set: function (value) { this._nativeError.stack = value; },
	            enumerable: true,
	            configurable: true
	        });
	        BaseError.prototype.toString = function () { return this._nativeError.toString(); };
	        return BaseError;
	    }(Error));
	    /**
	     * @stable
	     */
	    var WrappedError = (function (_super) {
	        __extends$4(WrappedError, _super);
	        function WrappedError(message, error) {
	            _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
	            this.originalError = error;
	        }
	        Object.defineProperty(WrappedError.prototype, "stack", {
	            get: function () {
	                return (this.originalError instanceof Error ? this.originalError : this._nativeError)
	                    .stack;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return WrappedError;
	    }(BaseError));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var InvalidPipeArgumentError = (function (_super) {
	        __extends$3(InvalidPipeArgumentError, _super);
	        function InvalidPipeArgumentError(type, value) {
	            _super.call(this, "Invalid argument '" + value + "' for pipe '" + stringify(type) + "'");
	        }
	        return InvalidPipeArgumentError;
	    }(BaseError));
	
	    var ObservableStrategy = (function () {
	        function ObservableStrategy() {
	        }
	        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
	        };
	        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
	        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
	        return ObservableStrategy;
	    }());
	    var PromiseStrategy = (function () {
	        function PromiseStrategy() {
	        }
	        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
	            return async.then(updateLatestValue, function (e) { throw e; });
	        };
	        PromiseStrategy.prototype.dispose = function (subscription) { };
	        PromiseStrategy.prototype.onDestroy = function (subscription) { };
	        return PromiseStrategy;
	    }());
	    var _promiseStrategy = new PromiseStrategy();
	    var _observableStrategy = new ObservableStrategy();
	    // avoid unused import when Promise union types are erased
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Unwraps a value from an asynchronous primitive.
	     * @howToUse `observable_or_promise_expression | async`
	     * @description
	     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
	     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
	     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
	     * potential memory leaks.
	     *
	     *
	     * ## Examples
	     *
	     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
	     * promise.
	     *
	     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
	     *
	     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
	     * to the view. The Observable continuesly updates the view with the current time.
	     *
	     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
	     *
	     * @stable
	     */
	    var AsyncPipe = (function () {
	        function AsyncPipe(_ref) {
	            /** @internal */
	            this._latestValue = null;
	            /** @internal */
	            this._latestReturnedValue = null;
	            /** @internal */
	            this._subscription = null;
	            /** @internal */
	            this._obj = null;
	            this._strategy = null;
	            this._ref = _ref;
	        }
	        AsyncPipe.prototype.ngOnDestroy = function () {
	            if (isPresent(this._subscription)) {
	                this._dispose();
	            }
	        };
	        AsyncPipe.prototype.transform = function (obj) {
	            if (isBlank(this._obj)) {
	                if (isPresent(obj)) {
	                    this._subscribe(obj);
	                }
	                this._latestReturnedValue = this._latestValue;
	                return this._latestValue;
	            }
	            if (obj !== this._obj) {
	                this._dispose();
	                return this.transform(obj);
	            }
	            if (this._latestValue === this._latestReturnedValue) {
	                return this._latestReturnedValue;
	            }
	            else {
	                this._latestReturnedValue = this._latestValue;
	                return _angular_core.WrappedValue.wrap(this._latestValue);
	            }
	        };
	        /** @internal */
	        AsyncPipe.prototype._subscribe = function (obj) {
	            var _this = this;
	            this._obj = obj;
	            this._strategy = this._selectStrategy(obj);
	            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
	        };
	        /** @internal */
	        AsyncPipe.prototype._selectStrategy = function (obj) {
	            if (isPromise(obj)) {
	                return _promiseStrategy;
	            }
	            else if (obj.subscribe) {
	                return _observableStrategy;
	            }
	            else {
	                throw new InvalidPipeArgumentError(AsyncPipe, obj);
	            }
	        };
	        /** @internal */
	        AsyncPipe.prototype._dispose = function () {
	            this._strategy.dispose(this._subscription);
	            this._latestValue = null;
	            this._latestReturnedValue = null;
	            this._subscription = null;
	            this._obj = null;
	        };
	        /** @internal */
	        AsyncPipe.prototype._updateLatestValue = function (async, value) {
	            if (async === this._obj) {
	                this._latestValue = value;
	                this._ref.markForCheck();
	            }
	        };
	        AsyncPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'async', pure: false },] },
	        ];
	        /** @nocollapse */
	        AsyncPipe.ctorParameters = [
	            { type: _angular_core.ChangeDetectorRef, },
	        ];
	        return AsyncPipe;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var NumberFormatStyle;
	    (function (NumberFormatStyle) {
	        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
	        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
	        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
	    })(NumberFormatStyle || (NumberFormatStyle = {}));
	    var NumberFormatter = (function () {
	        function NumberFormatter() {
	        }
	        NumberFormatter.format = function (num, locale, style, _a) {
	            var _b = _a === void 0 ? {} : _a, minimumIntegerDigits = _b.minimumIntegerDigits, minimumFractionDigits = _b.minimumFractionDigits, maximumFractionDigits = _b.maximumFractionDigits, currency = _b.currency, _c = _b.currencyAsSymbol, currencyAsSymbol = _c === void 0 ? false : _c;
	            var options = {
	                minimumIntegerDigits: minimumIntegerDigits,
	                minimumFractionDigits: minimumFractionDigits,
	                maximumFractionDigits: maximumFractionDigits,
	                style: NumberFormatStyle[style].toLowerCase()
	            };
	            if (style == NumberFormatStyle.Currency) {
	                options.currency = currency;
	                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
	            }
	            return new Intl.NumberFormat(locale, options).format(num);
	        };
	        return NumberFormatter;
	    }());
	    var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
	    var PATTERN_ALIASES = {
	        yMMMdjms: datePartGetterFactory(combine([
	            digitCondition('year', 1),
	            nameCondition('month', 3),
	            digitCondition('day', 1),
	            digitCondition('hour', 1),
	            digitCondition('minute', 1),
	            digitCondition('second', 1),
	        ])),
	        yMdjm: datePartGetterFactory(combine([
	            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
	            digitCondition('hour', 1), digitCondition('minute', 1)
	        ])),
	        yMMMMEEEEd: datePartGetterFactory(combine([
	            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
	            digitCondition('day', 1)
	        ])),
	        yMMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
	        yMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
	        yMd: datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
	        jms: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
	        jm: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
	    };
	    var DATE_FORMATS = {
	        yyyy: datePartGetterFactory(digitCondition('year', 4)),
	        yy: datePartGetterFactory(digitCondition('year', 2)),
	        y: datePartGetterFactory(digitCondition('year', 1)),
	        MMMM: datePartGetterFactory(nameCondition('month', 4)),
	        MMM: datePartGetterFactory(nameCondition('month', 3)),
	        MM: datePartGetterFactory(digitCondition('month', 2)),
	        M: datePartGetterFactory(digitCondition('month', 1)),
	        LLLL: datePartGetterFactory(nameCondition('month', 4)),
	        dd: datePartGetterFactory(digitCondition('day', 2)),
	        d: datePartGetterFactory(digitCondition('day', 1)),
	        HH: digitModifier(hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
	        H: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
	        hh: digitModifier(hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
	        h: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
	        jj: datePartGetterFactory(digitCondition('hour', 2)),
	        j: datePartGetterFactory(digitCondition('hour', 1)),
	        mm: digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
	        m: datePartGetterFactory(digitCondition('minute', 1)),
	        ss: digitModifier(datePartGetterFactory(digitCondition('second', 2))),
	        s: datePartGetterFactory(digitCondition('second', 1)),
	        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
	        // we can be just safely rely on using `sss` since we currently don't support single or two digit
	        // fractions
	        sss: datePartGetterFactory(digitCondition('second', 3)),
	        EEEE: datePartGetterFactory(nameCondition('weekday', 4)),
	        EEE: datePartGetterFactory(nameCondition('weekday', 3)),
	        EE: datePartGetterFactory(nameCondition('weekday', 2)),
	        E: datePartGetterFactory(nameCondition('weekday', 1)),
	        a: hourClockExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
	        Z: timeZoneGetter('short'),
	        z: timeZoneGetter('long'),
	        ww: datePartGetterFactory({}),
	        // first Thursday of the year. not support ?
	        w: datePartGetterFactory({}),
	        // of the year not support ?
	        G: datePartGetterFactory(nameCondition('era', 1)),
	        GG: datePartGetterFactory(nameCondition('era', 2)),
	        GGG: datePartGetterFactory(nameCondition('era', 3)),
	        GGGG: datePartGetterFactory(nameCondition('era', 4))
	    };
	    function digitModifier(inner) {
	        return function (date, locale) {
	            var result = inner(date, locale);
	            return result.length == 1 ? '0' + result : result;
	        };
	    }
	    function hourClockExtracter(inner) {
	        return function (date, locale) {
	            var result = inner(date, locale);
	            return result.split(' ')[1];
	        };
	    }
	    function hourExtracter(inner) {
	        return function (date, locale) {
	            var result = inner(date, locale);
	            return result.split(' ')[0];
	        };
	    }
	    function intlDateFormat(date, locale, options) {
	        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
	    }
	    function timeZoneGetter(timezone) {
	        // To workaround `Intl` API restriction for single timezone let format with 24 hours
	        var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
	        return function (date, locale) {
	            var result = intlDateFormat(date, locale, options);
	            // Then extract first 3 letters that related to hours
	            return result ? result.substring(3) : '';
	        };
	    }
	    function hour12Modify(options, value) {
	        options.hour12 = value;
	        return options;
	    }
	    function digitCondition(prop, len) {
	        var result = {};
	        result[prop] = len == 2 ? '2-digit' : 'numeric';
	        return result;
	    }
	    function nameCondition(prop, len) {
	        var result = {};
	        result[prop] = len < 4 ? 'short' : 'long';
	        return result;
	    }
	    function combine(options) {
	        var result = {};
	        options.forEach(function (option) { Object.assign(result, option); });
	        return result;
	    }
	    function datePartGetterFactory(ret) {
	        return function (date, locale) { return intlDateFormat(date, locale, ret); };
	    }
	    var datePartsFormatterCache = new Map();
	    function dateFormatter(format, date, locale) {
	        var text = '';
	        var match;
	        var fn;
	        var parts = [];
	        if (PATTERN_ALIASES[format]) {
	            return PATTERN_ALIASES[format](date, locale);
	        }
	        if (datePartsFormatterCache.has(format)) {
	            parts = datePartsFormatterCache.get(format);
	        }
	        else {
	            var matches = DATE_FORMATS_SPLIT.exec(format);
	            while (format) {
	                match = DATE_FORMATS_SPLIT.exec(format);
	                if (match) {
	                    parts = concat(parts, match, 1);
	                    format = parts.pop();
	                }
	                else {
	                    parts.push(format);
	                    format = null;
	                }
	            }
	            datePartsFormatterCache.set(format, parts);
	        }
	        parts.forEach(function (part) {
	            fn = DATE_FORMATS[part];
	            text += fn ? fn(date, locale) :
	                part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
	        });
	        return text;
	    }
	    var slice = [].slice;
	    function concat(array1 /** TODO #9100 */, array2 /** TODO #9100 */, index /** TODO #9100 */) {
	        return array1.concat(slice.call(array2, index));
	    }
	    var DateFormatter = (function () {
	        function DateFormatter() {
	        }
	        DateFormatter.format = function (date, locale, pattern) {
	            return dateFormatter(pattern, date, locale);
	        };
	        return DateFormatter;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a date according to locale rules.
	     * @howToUse `date_expression | date[:format]`
	     * @description
	     *
	     * Where:
	     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
	     * (https://www.w3.org/TR/NOTE-datetime).
	     * - `format` indicates which date/time components to include. The format can be predifined as
	     *   shown below or custom as shown in the table.
	     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
	     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
	     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
	     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
	     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
	     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
	     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
	     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
	     *
	     *
	     *  | Component | Symbol | Short Form   | Long Form         | Numeric   | 2-digit   |
	     *  |-----------|:------:|--------------|-------------------|-----------|-----------|
	     *  | era       |   G    | G (AD)       | GGGG (Anno Domini)| -         | -         |
	     *  | year      |   y    | -            | -                 | y (2015)  | yy (15)   |
	     *  | month     |   M    | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
	     *  | day       |   d    | -            | -                 | d (3)     | dd (03)   |
	     *  | weekday   |   E    | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
	     *  | hour      |   j    | -            | -                 | j (13)    | jj (13)   |
	     *  | hour12    |   h    | -            | -                 | h (1 PM)  | hh (01 PM)|
	     *  | hour24    |   H    | -            | -                 | H (13)    | HH (13)   |
	     *  | minute    |   m    | -            | -                 | m (5)     | mm (05)   |
	     *  | second    |   s    | -            | -                 | s (9)     | ss (09)   |
	     *  | timezone  |   z    | -            | z (Pacific Standard Time)| -  | -         |
	     *  | timezone  |   Z    | Z (GMT-8:00) | -                 | -         | -         |
	     *  | timezone  |   a    | a (PM)       | -                 | -         | -         |
	     *
	     * In javascript, only the components specified will be respected (not the ordering,
	     * punctuations, ...) and details of the formatting will be dependent on the locale.
	     *
	     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
	     *
	     * WARNINGS:
	     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
	     *   Instead users should treat the date as an immutable object and change the reference when the
	     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
	     *   which would be an expensive operation).
	     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
	     *   browsers.
	     *
	     * ### Examples
	     *
	     * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
	     * in the _local_ time and locale is 'en-US':
	     *
	     * ```
	     *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
	     *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
	     *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
	     *     {{ dateObj | date:'mmss' }}        // output is '43:11'
	     * ```
	     *
	     * {@example common/pipes/ts/date_pipe.ts region='DatePipe'}
	     *
	     * @stable
	     */
	    var DatePipe = (function () {
	        function DatePipe(_locale) {
	            this._locale = _locale;
	        }
	        DatePipe.prototype.transform = function (value, pattern) {
	            if (pattern === void 0) { pattern = 'mediumDate'; }
	            if (isBlank(value))
	                return null;
	            if (!this.supports(value)) {
	                throw new InvalidPipeArgumentError(DatePipe, value);
	            }
	            if (NumberWrapper.isNumeric(value)) {
	                value = DateWrapper.fromMillis(parseFloat(value));
	            }
	            else if (isString(value)) {
	                value = DateWrapper.fromISOString(value);
	            }
	            if (StringMapWrapper.contains(DatePipe._ALIASES, pattern)) {
	                pattern = StringMapWrapper.get(DatePipe._ALIASES, pattern);
	            }
	            return DateFormatter.format(value, this._locale, pattern);
	        };
	        DatePipe.prototype.supports = function (obj) {
	            if (isDate(obj) || NumberWrapper.isNumeric(obj)) {
	                return true;
	            }
	            if (isString(obj) && isDate(DateWrapper.fromISOString(obj))) {
	                return true;
	            }
	            return false;
	        };
	        /** @internal */
	        DatePipe._ALIASES = {
	            'medium': 'yMMMdjms',
	            'short': 'yMdjm',
	            'fullDate': 'yMMMMEEEEd',
	            'longDate': 'yMMMMd',
	            'mediumDate': 'yMMMd',
	            'shortDate': 'yMd',
	            'mediumTime': 'jms',
	            'shortTime': 'jm'
	        };
	        DatePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'date', pure: true },] },
	        ];
	        /** @nocollapse */
	        DatePipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return DatePipe;
	    }());
	
	    var _INTERPOLATION_REGEXP = /#/g;
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
	     * @howToUse `expression | i18nPlural:mapping`
	     * @description
	     *
	     *  Where:
	     *  - `expression` is a number.
	     *  - `mapping` is an object that mimics the ICU format, see
	     *    http://userguide.icu-project.org/formatparse/messages
	     *
	     *  ## Example
	     *
	     * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
	     *
	     * @experimental
	     */
	    var I18nPluralPipe = (function () {
	        function I18nPluralPipe(_localization) {
	            this._localization = _localization;
	        }
	        I18nPluralPipe.prototype.transform = function (value, pluralMap) {
	            if (isBlank(value))
	                return '';
	            if (!isStringMap(pluralMap)) {
	                throw new InvalidPipeArgumentError(I18nPluralPipe, pluralMap);
	            }
	            var key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
	            return StringWrapper.replaceAll(pluralMap[key], _INTERPOLATION_REGEXP, value.toString());
	        };
	        I18nPluralPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'i18nPlural', pure: true },] },
	        ];
	        /** @nocollapse */
	        I18nPluralPipe.ctorParameters = [
	            { type: NgLocalization, },
	        ];
	        return I18nPluralPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Generic selector that displays the string that matches the current value.
	     * @howToUse `expression | i18nSelect:mapping`
	     * @description
	     *
	     *  Where:
	     *  - `mapping`: is an object that indicates the text that should be displayed
	     *  for different values of the provided `expression`.
	     *
	     *  ## Example
	     *
	     * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
	     *
	     *  @experimental
	     */
	    var I18nSelectPipe = (function () {
	        function I18nSelectPipe() {
	        }
	        I18nSelectPipe.prototype.transform = function (value, mapping) {
	            if (isBlank(value))
	                return '';
	            if (!isStringMap(mapping)) {
	                throw new InvalidPipeArgumentError(I18nSelectPipe, mapping);
	            }
	            return mapping.hasOwnProperty(value) ? mapping[value] : '';
	        };
	        I18nSelectPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'i18nSelect', pure: true },] },
	        ];
	        /** @nocollapse */
	        I18nSelectPipe.ctorParameters = [];
	        return I18nSelectPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Converts value into JSON string.
	     * @howToUse `expression | json`
	     * @description
	     *
	     * Converts value into string using `JSON.stringify`. Useful for debugging.
	     *
	     * ### Example
	     * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
	     *
	     * @stable
	     */
	    var JsonPipe = (function () {
	        function JsonPipe() {
	        }
	        JsonPipe.prototype.transform = function (value) { return Json.stringify(value); };
	        JsonPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'json', pure: false },] },
	        ];
	        /** @nocollapse */
	        JsonPipe.ctorParameters = [];
	        return JsonPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Transforms string to lowercase.
	     * @howToUse `expression | lowercase`
	     * @description
	     *
	     * Converts value into lowercase string using `String.prototype.toLowerCase()`.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
	     *
	     * @stable
	     */
	    var LowerCasePipe = (function () {
	        function LowerCasePipe() {
	        }
	        LowerCasePipe.prototype.transform = function (value) {
	            if (isBlank(value))
	                return value;
	            if (!isString(value)) {
	                throw new InvalidPipeArgumentError(LowerCasePipe, value);
	            }
	            return value.toLowerCase();
	        };
	        LowerCasePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'lowercase' },] },
	        ];
	        /** @nocollapse */
	        LowerCasePipe.ctorParameters = [];
	        return LowerCasePipe;
	    }());
	
	    var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(\-(\d+))?)?$/;
	    function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
	        if (currency === void 0) { currency = null; }
	        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
	        if (isBlank(value))
	            return null;
	        // Convert strings to numbers
	        value = isString(value) && NumberWrapper.isNumeric(value) ? +value : value;
	        if (!isNumber(value)) {
	            throw new InvalidPipeArgumentError(pipe, value);
	        }
	        var minInt;
	        var minFraction;
	        var maxFraction;
	        if (style !== NumberFormatStyle.Currency) {
	            // rely on Intl default for currency
	            minInt = 1;
	            minFraction = 0;
	            maxFraction = 3;
	        }
	        if (isPresent(digits)) {
	            var parts = digits.match(_NUMBER_FORMAT_REGEXP);
	            if (parts === null) {
	                throw new Error(digits + " is not a valid digit info for number pipes");
	            }
	            if (isPresent(parts[1])) {
	                minInt = NumberWrapper.parseIntAutoRadix(parts[1]);
	            }
	            if (isPresent(parts[3])) {
	                minFraction = NumberWrapper.parseIntAutoRadix(parts[3]);
	            }
	            if (isPresent(parts[5])) {
	                maxFraction = NumberWrapper.parseIntAutoRadix(parts[5]);
	            }
	        }
	        return NumberFormatter.format(value, locale, style, {
	            minimumIntegerDigits: minInt,
	            minimumFractionDigits: minFraction,
	            maximumFractionDigits: maxFraction,
	            currency: currency,
	            currencyAsSymbol: currencyAsSymbol
	        });
	    }
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number according to locale rules.
	     * @howToUse `number_expression | number[:digitInfo]`
	     *
	     * Formats a number as text. Group sizing and separator and other locale-specific
	     * configurations are based on the active locale.
	     *
	     * where `expression` is a number:
	     *  - `digitInfo` is a `string` which has a following format: <br>
	     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
	     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
	     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
	     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
	     *
	     * For more information on the acceptable range for each of these numbers and other
	     * details see your native internationalization library.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
	     *
	     * @stable
	     */
	    var DecimalPipe = (function () {
	        function DecimalPipe(_locale) {
	            this._locale = _locale;
	        }
	        DecimalPipe.prototype.transform = function (value, digits) {
	            if (digits === void 0) { digits = null; }
	            return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
	        };
	        DecimalPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'number' },] },
	        ];
	        /** @nocollapse */
	        DecimalPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return DecimalPipe;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number as a percentage according to locale rules.
	     * @howToUse `number_expression | percent[:digitInfo]`
	     *
	     * @description
	     *
	     * Formats a number as percentage.
	     *
	     * - `digitInfo` See {@link DecimalPipe} for detailed description.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
	     *
	     * @stable
	     */
	    var PercentPipe = (function () {
	        function PercentPipe(_locale) {
	            this._locale = _locale;
	        }
	        PercentPipe.prototype.transform = function (value, digits) {
	            if (digits === void 0) { digits = null; }
	            return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
	        };
	        PercentPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'percent' },] },
	        ];
	        /** @nocollapse */
	        PercentPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return PercentPipe;
	    }());
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Formats a number as currency using locale rules.
	     * @howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
	     * @description
	     *
	     * Use `currency` to format a number as currency.
	     *
	     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
	     *    as `USD` for the US dollar and `EUR` for the euro.
	     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
	     *   - `true`: use symbol (e.g. `$`).
	     *   - `false`(default): use code (e.g. `USD`).
	     * - `digitInfo` See {@link DecimalPipe} for detailed description.
	     *
	     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
	     * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
	     *
	     * @stable
	     */
	    var CurrencyPipe = (function () {
	        function CurrencyPipe(_locale) {
	            this._locale = _locale;
	        }
	        CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
	            if (currencyCode === void 0) { currencyCode = 'USD'; }
	            if (symbolDisplay === void 0) { symbolDisplay = false; }
	            if (digits === void 0) { digits = null; }
	            return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
	        };
	        CurrencyPipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'currency' },] },
	        ];
	        /** @nocollapse */
	        CurrencyPipe.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_core.LOCALE_ID,] },] },
	        ];
	        return CurrencyPipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Creates a new List or String containing a subset (slice) of the elements.
	     * @howToUse `array_or_string_expression | slice:start[:end]`
	     * @description
	     *
	     * Where the input expression is a `List` or `String`, and:
	     * - `start`: The starting index of the subset to return.
	     *   - **a positive integer**: return the item at `start` index and all items after
	     *     in the list or string expression.
	     *   - **a negative integer**: return the item at `start` index from the end and all items after
	     *     in the list or string expression.
	     *   - **if positive and greater than the size of the expression**: return an empty list or string.
	     *   - **if negative and greater than the size of the expression**: return entire list or string.
	     * - `end`: The ending index of the subset to return.
	     *   - **omitted**: return all items until the end.
	     *   - **if positive**: return all items before `end` index of the list or string.
	     *   - **if negative**: return all items before `end` index from the end of the list or string.
	     *
	     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
	     * and `String.prototype.slice()`.
	     *
	     * When operating on a [List], the returned list is always a copy even when all
	     * the elements are being returned.
	     *
	     * When operating on a blank value, the pipe returns the blank value.
	     *
	     * ## List Example
	     *
	     * This `ngFor` example:
	     *
	     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
	     *
	     * produces the following:
	     *
	     *     <li>b</li>
	     *     <li>c</li>
	     *
	     * ## String Examples
	     *
	     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
	     *
	     * @stable
	     */
	    var SlicePipe = (function () {
	        function SlicePipe() {
	        }
	        SlicePipe.prototype.transform = function (value, start, end) {
	            if (end === void 0) { end = null; }
	            if (isBlank(value))
	                return value;
	            if (!this.supports(value)) {
	                throw new InvalidPipeArgumentError(SlicePipe, value);
	            }
	            if (isString(value)) {
	                return StringWrapper.slice(value, start, end);
	            }
	            return ListWrapper.slice(value, start, end);
	        };
	        SlicePipe.prototype.supports = function (obj) { return isString(obj) || isArray(obj); };
	        SlicePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'slice', pure: false },] },
	        ];
	        /** @nocollapse */
	        SlicePipe.ctorParameters = [];
	        return SlicePipe;
	    }());
	
	    /**
	     * @ngModule CommonModule
	     * @whatItDoes Transforms string to uppercase.
	     * @howToUse `expression | uppercase`
	     * @description
	     *
	     * Converts value into lowercase string using `String.prototype.toUpperCase()`.
	     *
	     * ### Example
	     *
	     * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
	     *
	     * @stable
	     */
	    var UpperCasePipe = (function () {
	        function UpperCasePipe() {
	        }
	        UpperCasePipe.prototype.transform = function (value) {
	            if (isBlank(value))
	                return value;
	            if (!isString(value)) {
	                throw new InvalidPipeArgumentError(UpperCasePipe, value);
	            }
	            return value.toUpperCase();
	        };
	        UpperCasePipe.decorators = [
	            { type: _angular_core.Pipe, args: [{ name: 'uppercase' },] },
	        ];
	        /** @nocollapse */
	        UpperCasePipe.ctorParameters = [];
	        return UpperCasePipe;
	    }());
	
	    /**
	     * A collection of Angular pipes that are likely to be used in each and every application.
	     */
	    var COMMON_PIPES = [
	        AsyncPipe,
	        UpperCasePipe,
	        LowerCasePipe,
	        JsonPipe,
	        SlicePipe,
	        DecimalPipe,
	        PercentPipe,
	        CurrencyPipe,
	        DatePipe,
	        I18nPluralPipe,
	        I18nSelectPipe,
	    ];
	
	    // Note: This does not contain the location providers,
	    // as they need some platform specific implementations to work.
	    /**
	     * The module that includes all the basic Angular directives like {@link NgIf}, {@link NgFor}, ...
	     *
	     * @stable
	     */
	    var CommonModule = (function () {
	        function CommonModule() {
	        }
	        CommonModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
	                        exports: [COMMON_DIRECTIVES, COMMON_PIPES],
	                        providers: [
	                            { provide: NgLocalization, useClass: NgLocaleLocalization },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        CommonModule.ctorParameters = [];
	        return CommonModule;
	    }());
	
	    exports.NgLocalization = NgLocalization;
	    exports.CommonModule = CommonModule;
	    exports.NgClass = NgClass;
	    exports.NgFor = NgFor;
	    exports.NgIf = NgIf;
	    exports.NgPlural = NgPlural;
	    exports.NgPluralCase = NgPluralCase;
	    exports.NgStyle = NgStyle;
	    exports.NgSwitch = NgSwitch;
	    exports.NgSwitchCase = NgSwitchCase;
	    exports.NgSwitchDefault = NgSwitchDefault;
	    exports.NgTemplateOutlet = NgTemplateOutlet;
	    exports.AsyncPipe = AsyncPipe;
	    exports.DatePipe = DatePipe;
	    exports.I18nPluralPipe = I18nPluralPipe;
	    exports.I18nSelectPipe = I18nSelectPipe;
	    exports.JsonPipe = JsonPipe;
	    exports.LowerCasePipe = LowerCasePipe;
	    exports.CurrencyPipe = CurrencyPipe;
	    exports.DecimalPipe = DecimalPipe;
	    exports.PercentPipe = PercentPipe;
	    exports.SlicePipe = SlicePipe;
	    exports.UpperCasePipe = UpperCasePipe;
	    exports.PlatformLocation = PlatformLocation;
	    exports.LocationStrategy = LocationStrategy;
	    exports.APP_BASE_HREF = APP_BASE_HREF;
	    exports.HashLocationStrategy = HashLocationStrategy;
	    exports.PathLocationStrategy = PathLocationStrategy;
	    exports.Location = Location;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(72);
	__webpack_require__(302);
	__webpack_require__(76);
	__webpack_require__(38);
	module.exports = __webpack_require__(10);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(26);
	var Subscription_1 = __webpack_require__(7);
	var rxSubscriber_1 = __webpack_require__(23);
	var Observer_1 = __webpack_require__(78);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(1);
	var Subscriber_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(7);
	var SubjectSubscription_1 = __webpack_require__(80);
	var rxSubscriber_1 = __webpack_require__(23);
	var throwError_1 = __webpack_require__(59);
	var ObjectUnsubscribedError_1 = __webpack_require__(36);
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasErrored = false;
	        this.dispatching = false;
	        this.hasCompleted = false;
	        this.source = source;
	    }
	    Subject.prototype.lift = function (operator) {
	        var subject = new Subject(this.destination || this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.add = function (subscription) {
	        return Subscription_1.Subscription.prototype.add.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        Subscription_1.Subscription.prototype.remove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        Subscription_1.Subscription.prototype.unsubscribe.call(this);
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	            else if (this.hasErrored) {
	                return subscriber.error(this.errorValue);
	            }
	            else if (this.hasCompleted) {
	                return subscriber.complete();
	            }
	            this.throwIfUnsubscribed();
	            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	            this.observers.push(subscriber);
	            return subscription;
	        }
	    };
	    Subject.prototype._unsubscribe = function () {
	        this.source = null;
	        this.isStopped = true;
	        this.observers = null;
	        this.destination = null;
	    };
	    Subject.prototype.next = function (value) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.hasErrored) {
	            this._error(this.errorValue);
	        }
	        else if (this.hasCompleted) {
	            this._complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasErrored = true;
	        this.errorValue = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	    };
	    Subject.prototype.complete = function () {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasCompleted = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new SubjectObservable(this);
	        return observable;
	    };
	    Subject.prototype._next = function (value) {
	        if (this.destination) {
	            this.destination.next(value);
	        }
	        else {
	            this._finalNext(value);
	        }
	    };
	    Subject.prototype._finalNext = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        if (this.destination) {
	            this.destination.error(err);
	        }
	        else {
	            this._finalError(err);
	        }
	    };
	    Subject.prototype._finalError = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].error(err);
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype._complete = function () {
	        if (this.destination) {
	            this.destination.complete();
	        }
	        else {
	            this._finalComplete();
	        }
	    };
	    Subject.prototype._finalComplete = function () {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype.throwIfUnsubscribed = function () {
	        if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	    };
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new Subscriber_1.Subscriber(this);
	    };
	    Subject.create = function (destination, source) {
	        return new Subject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectObservable = (function (_super) {
	    __extends(SubjectObservable, _super);
	    function SubjectObservable(source) {
	        _super.call(this);
	        this.source = source;
	    }
	    return SubjectObservable;
	}(Observable_1.Observable));
	//# sourceMappingURL=Subject.js.map

/***/ },

/***/ 6:
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(14);
	var isObject_1 = __webpack_require__(56);
	var isFunction_1 = __webpack_require__(26);
	var tryCatch_1 = __webpack_require__(8);
	var errorObject_1 = __webpack_require__(6);
	var UnsubscriptionError_1 = __webpack_require__(55);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(6);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.0.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(5), __webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Subject', 'rxjs/Observable'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.core = global.ng.core || {}),global.Rx,global.Rx));
	}(this, function (exports,rxjs_Subject,rxjs_Observable) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    function scheduleMicroTask(fn) {
	        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    function getTypeNameForDebugging(type) {
	        if (type['name']) {
	            return type['name'];
	        }
	        return typeof type;
	    }
	    var Math = global$1.Math;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return isPresent(obj) && isFunction(obj.then);
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token === undefined || token === null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    // JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	    function getMapKey(value) {
	        return value;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function print(obj) {
	        console.log(obj);
	    }
	    function warn(obj) {
	        console.warn(obj);
	    }
	    var _symbolIterator = null;
	    function getSymbolIterator() {
	        if (isBlank(_symbolIterator)) {
	            if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	                _symbolIterator = Symbol.iterator;
	            }
	            else {
	                // es6-shim specific logic
	                var keys = Object.getOwnPropertyNames(Map.prototype);
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (key !== 'entries' && key !== 'size' &&
	                        Map.prototype[key] === Map.prototype['entries']) {
	                        _symbolIterator = key;
	                    }
	                }
	            }
	        }
	        return _symbolIterator;
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    var _nextClassId = 0;
	    function extractAnnotation(annotation) {
	        if (isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
	            // it is a decorator, extract annotation
	            annotation = annotation.annotation;
	        }
	        return annotation;
	    }
	    function applyParams(fnOrArray, key) {
	        if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
	            fnOrArray === Number || fnOrArray === Array) {
	            throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
	        }
	        if (isFunction(fnOrArray)) {
	            return fnOrArray;
	        }
	        else if (fnOrArray instanceof Array) {
	            var annotations = fnOrArray;
	            var annoLength = annotations.length - 1;
	            var fn = fnOrArray[annoLength];
	            if (!isFunction(fn)) {
	                throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
	            }
	            if (annoLength != fn.length) {
	                throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
	            }
	            var paramsAnnotations = [];
	            for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	                var paramAnnotations = [];
	                paramsAnnotations.push(paramAnnotations);
	                var annotation = annotations[i];
	                if (annotation instanceof Array) {
	                    for (var j = 0; j < annotation.length; j++) {
	                        paramAnnotations.push(extractAnnotation(annotation[j]));
	                    }
	                }
	                else if (isFunction(annotation)) {
	                    paramAnnotations.push(extractAnnotation(annotation));
	                }
	                else {
	                    paramAnnotations.push(annotation);
	                }
	            }
	            Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	            return fn;
	        }
	        else {
	            throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
	        }
	    }
	    /**
	     * Provides a way for expressing ES6 classes with parameter annotations in ES5.
	     *
	     * ## Basic Example
	     *
	     * ```
	     * var Greeter = ng.Class({
	     *   constructor: function(name) {
	     *     this.name = name;
	     *   },
	     *
	     *   greet: function() {
	     *     alert('Hello ' + this.name + '!');
	     *   }
	     * });
	     * ```
	     *
	     * is equivalent to ES6:
	     *
	     * ```
	     * class Greeter {
	     *   constructor(name) {
	     *     this.name = name;
	     *   }
	     *
	     *   greet() {
	     *     alert('Hello ' + this.name + '!');
	     *   }
	     * }
	     * ```
	     *
	     * or equivalent to ES5:
	     *
	     * ```
	     * var Greeter = function (name) {
	     *   this.name = name;
	     * }
	     *
	     * Greeter.prototype.greet = function () {
	     *   alert('Hello ' + this.name + '!');
	     * }
	     * ```
	     *
	     * ### Example with parameter annotations
	     *
	     * ```
	     * var MyService = ng.Class({
	     *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
	     *     ...
	     *   }]
	     * });
	     * ```
	     *
	     * is equivalent to ES6:
	     *
	     * ```
	     * class MyService {
	     *   constructor(name: string, @Query() queryList: QueryList) {
	     *     ...
	     *   }
	     * }
	     * ```
	     *
	     * ### Example with inheritance
	     *
	     * ```
	     * var Shape = ng.Class({
	     *   constructor: (color) {
	     *     this.color = color;
	     *   }
	     * });
	     *
	     * var Square = ng.Class({
	     *   extends: Shape,
	     *   constructor: function(color, size) {
	     *     Shape.call(this, color);
	     *     this.size = size;
	     *   }
	     * });
	     * ```
	     * @stable
	     */
	    function Class(clsDef) {
	        var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	        var proto = constructor.prototype;
	        if (clsDef.hasOwnProperty('extends')) {
	            if (isFunction(clsDef.extends)) {
	                constructor.prototype = proto =
	                    Object.create(clsDef.extends.prototype);
	            }
	            else {
	                throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
	            }
	        }
	        for (var key in clsDef) {
	            if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
	                proto[key] = applyParams(clsDef[key], key);
	            }
	        }
	        if (this && this.annotations instanceof Array) {
	            Reflect.defineMetadata('annotations', this.annotations, constructor);
	        }
	        var constructorName = constructor['name'];
	        if (!constructorName || constructorName === 'constructor') {
	            constructor['overriddenName'] = "class" + _nextClassId++;
	        }
	        return constructor;
	    }
	    var Reflect = global$1.Reflect;
	    function makeDecorator(name, props, parentClass, chainFn) {
	        if (chainFn === void 0) { chainFn = null; }
	        var metaCtor = makeMetadataCtor([props]);
	        function DecoratorFactory(objOrType) {
	            if (!(Reflect && Reflect.getMetadata)) {
	                throw 'reflect-metadata shim is required when using class decorators';
	            }
	            if (this instanceof DecoratorFactory) {
	                metaCtor.call(this, objOrType);
	                return this;
	            }
	            else {
	                var annotationInstance_1 = new DecoratorFactory(objOrType);
	                var chainAnnotation = isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
	                chainAnnotation.push(annotationInstance_1);
	                var TypeDecorator = function TypeDecorator(cls) {
	                    var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
	                    annotations.push(annotationInstance_1);
	                    Reflect.defineMetadata('annotations', annotations, cls);
	                    return cls;
	                };
	                TypeDecorator.annotations = chainAnnotation;
	                TypeDecorator.Class = Class;
	                if (chainFn)
	                    chainFn(TypeDecorator);
	                return TypeDecorator;
	            }
	        }
	        if (parentClass) {
	            DecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        DecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        DecoratorFactory.annotationCls = DecoratorFactory;
	        return DecoratorFactory;
	    }
	    function makeMetadataCtor(props) {
	        function ctor() {
	            var _this = this;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            props.forEach(function (prop, i) {
	                var argVal = args[i];
	                if (Array.isArray(prop)) {
	                    // plain parameter
	                    var val = !argVal || argVal === undefined ? prop[1] : argVal;
	                    _this[prop[0]] = val;
	                }
	                else {
	                    for (var propName in prop) {
	                        var val = !argVal || argVal[propName] === undefined ? prop[propName] : argVal[propName];
	                        _this[propName] = val;
	                    }
	                }
	            });
	        }
	        return ctor;
	    }
	    function makeParamDecorator(name, props, parentClass) {
	        var metaCtor = makeMetadataCtor(props);
	        function ParamDecoratorFactory() {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (this instanceof ParamDecoratorFactory) {
	                metaCtor.apply(this, args);
	                return this;
	            }
	            var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	            function ParamDecorator(cls, unusedKey, index) {
	                var parameters = Reflect.getMetadata('parameters', cls) || [];
	                // there might be gaps if some in between parameters do not have annotations.
	                // we pad with nulls.
	                while (parameters.length <= index) {
	                    parameters.push(null);
	                }
	                parameters[index] = parameters[index] || [];
	                var annotationsForParam = parameters[index];
	                annotationsForParam.push(annotationInstance);
	                Reflect.defineMetadata('parameters', parameters, cls);
	                return cls;
	            }
	            var _a;
	        }
	        if (parentClass) {
	            ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        ParamDecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
	        return ParamDecoratorFactory;
	    }
	    function makePropDecorator(name, props, parentClass) {
	        var metaCtor = makeMetadataCtor(props);
	        function PropDecoratorFactory() {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (this instanceof PropDecoratorFactory) {
	                metaCtor.apply(this, args);
	                return this;
	            }
	            else {
	                var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
	                return function PropDecorator(target, name) {
	                    var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
	                    meta[name] = meta[name] || [];
	                    meta[name].unshift(decoratorInstance);
	                    Reflect.defineMetadata('propMetadata', meta, target.constructor);
	                };
	            }
	            var _a;
	        }
	        if (parentClass) {
	            PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
	        }
	        PropDecoratorFactory.prototype.toString = function () { return ("@" + name); };
	        PropDecoratorFactory.annotationCls = PropDecoratorFactory;
	        return PropDecoratorFactory;
	    }
	
	    /**
	     * Inject decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Inject = makeParamDecorator('Inject', [['token', undefined]]);
	    /**
	     * Optional decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Optional = makeParamDecorator('Optional', []);
	    /**
	     * Injectable decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Injectable = makeParamDecorator('Injectable', []);
	    /**
	     * Self decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Self = makeParamDecorator('Self', []);
	    /**
	     * SkipSelf decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var SkipSelf = makeParamDecorator('SkipSelf', []);
	    /**
	     * Host decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Host = makeParamDecorator('Host', []);
	
	    /**
	     * Creates a token that can be used in a DI Provider.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
	     *
	     * ```typescript
	     * var t = new OpaqueToken("value");
	     *
	     * var injector = Injector.resolveAndCreate([
	     *   {provide: t, useValue: "bindingValue"}
	     * ]);
	     *
	     * expect(injector.get(t)).toEqual("bindingValue");
	     * ```
	     *
	     * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
	     * caused by multiple providers using the same string as two different tokens.
	     *
	     * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
	     * error messages.
	     * @stable
	     */
	    // so that metadata is gathered for this class
	    var OpaqueToken = (function () {
	        function OpaqueToken(_desc) {
	            this._desc = _desc;
	        }
	        OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	        OpaqueToken.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        OpaqueToken.ctorParameters = [
	            null,
	        ];
	        return OpaqueToken;
	    }());
	
	    /**
	     * This token can be used to create a virtual provider that will populate the
	     * `entryComponents` fields of components and ng modules based on its `useValue`.
	     * All components that are referenced in the `useValue` value (either directly
	     * or in a nested array or map) will be added to the `entryComponents` property.
	     *
	     * ### Example
	     * The following example shows how the router can populate the `entryComponents`
	     * field of an NgModule based on the router configuration which refers
	     * to components.
	     *
	     * ```typescript
	     * // helper function inside the router
	     * function provideRoutes(routes) {
	     *   return [
	     *     {provide: ROUTES, useValue: routes},
	     *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
	     *   ];
	     * }
	     *
	     * // user code
	     * let routes = [
	     *   {path: '/root', component: RootComp},
	     *   {path: '/teams', component: TeamsComp}
	     * ];
	     *
	     * @NgModule({
	     *   providers: [provideRoutes(routes)]
	     * })
	     * class ModuleWithRoutes {}
	     * ```
	     *
	     * @experimental
	     */
	    var ANALYZE_FOR_ENTRY_COMPONENTS = new OpaqueToken('AnalyzeForEntryComponents');
	    /**
	     * Attribute decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Attribute = makeParamDecorator('Attribute', [['attributeName', undefined]]);
	    /**
	     * Base class for query metadata.
	     *
	     * See {@link ContentChildren}, {@link ContentChild}, {@link ViewChildren}, {@link ViewChild} for
	     * more information.
	     *
	     * @stable
	     */
	    var Query = (function () {
	        function Query() {
	        }
	        return Query;
	    }());
	    /**
	     * ContentChildren decorator and metadata.
	     *
	     *  @stable
	     *  @Annotation
	     */
	    var ContentChildren = makePropDecorator('ContentChildren', [
	        ['selector', undefined],
	        { first: false, isViewQuery: false, descendants: false, read: undefined }
	    ], Query);
	    /**
	     * @whatItDoes Configures a content query.
	     *
	     * @howToUse
	     *
	     * {@example core/di/ts/contentChild/content_child_howto.ts region='HowTo'}
	     *
	     * @description
	     *
	     * You can use ContentChild to get the first element or the directive matching the selector from the
	     * content DOM. If the content DOM changes, and a new child matches the selector,
	     * the property will be updated.
	     *
	     * Content queries are set before the `ngAfterContentInit` callback is called.
	     *
	     * **Metadata Properties**:
	     *
	     * * **selector** - the directive type or the name used for querying.
	     * * **read** - read a different token from the queried element.
	     *
	     * Let's look at an example:
	     *
	     * {@example core/di/ts/contentChild/content_child_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/core`
	     *
	     * @stable
	     * @Annotation
	     */
	    var ContentChild = makePropDecorator('ContentChild', [
	        ['selector', undefined], {
	            first: true,
	            isViewQuery: false,
	            descendants: false,
	            read: undefined,
	        }
	    ], Query);
	    /**
	     * @whatItDoes Configures a view query.
	     *
	     * @howToUse
	     *
	     * {@example core/di/ts/viewChildren/view_children_howto.ts region='HowTo'}
	     *
	     * @description
	     *
	     * You can use ViewChildren to get the {@link QueryList} of elements or directives from the
	     * view DOM. Any time a child element is added, removed, or moved, the query list will be updated,
	     * and the changes observable of the query list will emit a new value.
	     *
	     * View queries are set before the `ngAfterViewInit` callback is called.
	     *
	     * **Metadata Properties**:
	     *
	     * * **selector** - the directive type or the name used for querying.
	     * * **read** - read a different token from the queried elements.
	     *
	     * Let's look at an example:
	     *
	     * {@example core/di/ts/viewChildren/view_children_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/core`
	     *
	     * @stable
	     * @Annotation
	     */
	    var ViewChildren = makePropDecorator('ViewChildren', [
	        ['selector', undefined], {
	            first: false,
	            isViewQuery: true,
	            descendants: true,
	            read: undefined,
	        }
	    ], Query);
	    /**
	     * ViewChild decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var ViewChild = makePropDecorator('ViewChild', [
	        ['selector', undefined], {
	            first: true,
	            isViewQuery: true,
	            descendants: true,
	            read: undefined,
	        }
	    ], Query);
	
	    /**
	     * Describes within the change detector which strategy will be used the next time change
	     * detection is triggered.
	     * @stable
	     */
	    exports.ChangeDetectionStrategy;
	    (function (ChangeDetectionStrategy) {
	        /**
	         * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	         */
	        ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
	        /**
	         * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	         */
	        ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
	    })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	    /**
	     * Describes the status of the detector.
	     */
	    var ChangeDetectorStatus;
	    (function (ChangeDetectorStatus) {
	        /**
	         * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	         * will become `Checked`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["CheckOnce"] = 0] = "CheckOnce";
	        /**
	         * `Checked` means that the change detector should be skipped until its mode changes to
	         * `CheckOnce`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Checked"] = 1] = "Checked";
	        /**
	         * `CheckAlways` means that after calling detectChanges the mode of the change detector
	         * will remain `CheckAlways`.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["CheckAlways"] = 2] = "CheckAlways";
	        /**
	         * `Detached` means that the change detector sub tree is not a part of the main tree and
	         * should be skipped.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Detached"] = 3] = "Detached";
	        /**
	         * `Errored` means that the change detector encountered an error checking a binding
	         * or calling a directive lifecycle method and is now in an inconsistent state. Change
	         * detectors in this state will no longer detect changes.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Errored"] = 4] = "Errored";
	        /**
	         * `Destroyed` means that the change detector is destroyed.
	         */
	        ChangeDetectorStatus[ChangeDetectorStatus["Destroyed"] = 5] = "Destroyed";
	    })(ChangeDetectorStatus || (ChangeDetectorStatus = {}));
	    /**
	     * List of possible {@link ChangeDetectionStrategy} values.
	     */
	    var CHANGE_DETECTION_STRATEGY_VALUES = [
	        exports.ChangeDetectionStrategy.OnPush,
	        exports.ChangeDetectionStrategy.Default,
	    ];
	    function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
	        return isBlank(changeDetectionStrategy) ||
	            changeDetectionStrategy === exports.ChangeDetectionStrategy.Default;
	    }
	
	    /**
	     * Directive decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Directive = makeDecorator('Directive', {
	        selector: undefined,
	        inputs: undefined,
	        outputs: undefined,
	        host: undefined,
	        providers: undefined,
	        exportAs: undefined,
	        queries: undefined
	    });
	    /**
	     * Component decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Component = makeDecorator('Component', {
	        selector: undefined,
	        inputs: undefined,
	        outputs: undefined,
	        host: undefined,
	        exportAs: undefined,
	        moduleId: undefined,
	        providers: undefined,
	        viewProviders: undefined,
	        changeDetection: exports.ChangeDetectionStrategy.Default,
	        queries: undefined,
	        templateUrl: undefined,
	        template: undefined,
	        styleUrls: undefined,
	        styles: undefined,
	        animations: undefined,
	        encapsulation: undefined,
	        interpolation: undefined,
	        entryComponents: undefined
	    }, Directive);
	    /**
	     * Pipe decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Pipe = makeDecorator('Pipe', {
	        name: undefined,
	        pure: true,
	    });
	    /**
	     * Input decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Input = makePropDecorator('Input', [['bindingPropertyName', undefined]]);
	    /**
	     * Output decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var Output = makePropDecorator('Output', [['bindingPropertyName', undefined]]);
	    /**
	     * HostBinding decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var HostBinding = makePropDecorator('HostBinding', [['hostPropertyName', undefined]]);
	    /**
	     * HostBinding decorator and metadata.
	     *
	     * @stable
	     * @Annotation
	     */
	    var HostListener = makePropDecorator('HostListener', [['eventName', undefined], ['args', []]]);
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @stable
	     */
	    var LifecycleHooks;
	    (function (LifecycleHooks) {
	        LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	        LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	        LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	        LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	        LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	        LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	        LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	        LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	    })(LifecycleHooks || (LifecycleHooks = {}));
	    var LIFECYCLE_HOOKS_VALUES = [
	        LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges,
	        LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit,
	        LifecycleHooks.AfterViewChecked
	    ];
	    /**
	     * @whatItDoes Lifecycle hook that is called when any data-bound property of a directive changes.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}
	     *
	     * @description
	     * `ngOnChanges` is called right after the data-bound properties have been checked and before view
	     * and content children are checked if at least one of them has changed.
	     * The `changes` parameter contains the changed properties.
	     *
	     * See {@linkDocs guide/lifecycle-hooks#onchanges "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnChanges = (function () {
	        function OnChanges() {
	        }
	        return OnChanges;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after data-bound properties of a directive are
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}
	     *
	     * @description
	     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
	     * first time, and before any of its children have been checked. It is invoked only once when the
	     * directive is instantiated.
	     *
	     * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnInit = (function () {
	        function OnInit() {
	        }
	        return OnInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called when Angular dirty checks a directive.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}
	     *
	     * @description
	     * `ngDoCheck` gets called to check the changes in the directives in addition to the default
	     * algorithm. The default change detection algorithm looks for differences by comparing
	     * bound-property values by reference across change detection runs.
	     *
	     * Note that a directive typically should not use both `DoCheck` and {@link OnChanges} to respond to
	     * changes on the same input, as `ngOnChanges` will continue to be called when the default change
	     * detector detects changes.
	     *
	     * See {@link KeyValueDiffers} and {@link IterableDiffers} for implementing custom dirty checking
	     * for collections.
	     *
	     * See {@linkDocs guide/lifecycle-hooks#docheck "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var DoCheck = (function () {
	        function DoCheck() {
	        }
	        return DoCheck;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called when a directive or pipe is destroyed.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}
	     *
	     * @description
	     * `ngOnDestroy` callback is typically used for any custom cleanup that needs to occur when the
	     * instance is destroyed.
	     *
	     * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var OnDestroy = (function () {
	        function OnDestroy() {
	        }
	        return OnDestroy;
	    }());
	    /**
	     *
	     * @whatItDoes Lifecycle hook that is called after a directive's content has been fully
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterContentInit = (function () {
	        function AfterContentInit() {
	        }
	        return AfterContentInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after every check of a directive's content.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterContentChecked = (function () {
	        function AfterContentChecked() {
	        }
	        return AfterContentChecked;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after a component's view has been fully
	     * initialized.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterViewInit = (function () {
	        function AfterViewInit() {
	        }
	        return AfterViewInit;
	    }());
	    /**
	     * @whatItDoes Lifecycle hook that is called after every check of a component's view.
	     * @howToUse
	     * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}
	     *
	     * @description
	     * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
	     *
	     * @stable
	     */
	    var AfterViewChecked = (function () {
	        function AfterViewChecked() {
	        }
	        return AfterViewChecked;
	    }());
	
	    /**
	     * Defines a schema that will allow:
	     * - any non-angular elements with a `-` in their name,
	     * - any properties on elements with a `-` in their name which is the common rule for custom
	     * elements.
	     *
	     * @stable
	     */
	    var CUSTOM_ELEMENTS_SCHEMA = {
	        name: 'custom-elements'
	    };
	    /**
	     * Defines a schema that will allow any property on any element.
	     *
	     * @experimental
	     */
	    var NO_ERRORS_SCHEMA = {
	        name: 'no-errors-schema'
	    };
	    /**
	     * NgModule decorator and metadata
	     *
	     * @stable
	     * @Annotation
	     */
	    var NgModule = makeDecorator('NgModule', {
	        providers: undefined,
	        declarations: undefined,
	        imports: undefined,
	        exports: undefined,
	        entryComponents: undefined,
	        bootstrap: undefined,
	        schemas: undefined,
	        id: undefined,
	    });
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Defines template and style encapsulation options available for Component's {@link Component}.
	     *
	     * See {@link ViewMetadata#encapsulation}.
	     * @stable
	     */
	    exports.ViewEncapsulation;
	    (function (ViewEncapsulation) {
	        /**
	         * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	         * Element and pre-processing the style rules provided via
	         * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	         * attribute to all selectors.
	         *
	         * This is the default option.
	         */
	        ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	        /**
	         * Use the native encapsulation mechanism of the renderer.
	         *
	         * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	         * creating a ShadowRoot for Component's Host Element.
	         */
	        ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	        /**
	         * Don't provide any template or style encapsulation.
	         */
	        ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	    })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	    var VIEW_ENCAPSULATION_VALUES = [exports.ViewEncapsulation.Emulated, exports.ViewEncapsulation.Native, exports.ViewEncapsulation.None];
	    /**
	     * Metadata properties available for configuring Views.
	     *
	     * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	     * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	     * within the template.
	     *
	     * When a component is instantiated, the template is loaded into the component's shadow root, and
	     * the expressions and statements in the template are evaluated against the component.
	     *
	     * For details on the `@Component` annotation, see {@link Component}.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   selector: 'greet',
	     *   template: 'Hello {{name}}!',
	     *   directives: [GreetUser, Bold]
	     * })
	     * class Greet {
	     *   name: string;
	     *
	     *   constructor() {
	     *     this.name = 'World';
	     *   }
	     * }
	     * ```
	     *
	     * @deprecated Use Component instead.
	     */
	    var ViewMetadata = (function () {
	        function ViewMetadata(_a) {
	            var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls, animations = _b.animations, interpolation = _b.interpolation;
	            this.templateUrl = templateUrl;
	            this.template = template;
	            this.styleUrls = styleUrls;
	            this.styles = styles;
	            this.encapsulation = encapsulation;
	            this.animations = animations;
	            this.interpolation = interpolation;
	        }
	        return ViewMetadata;
	    }());
	
	    /**
	     * Allows to refer to references which are not yet defined.
	     *
	     * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
	     * DI is declared,
	     * but not yet defined. It is also used when the `token` which we use when creating a query is not
	     * yet defined.
	     *
	     * ### Example
	     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
	     * @experimental
	     */
	    function forwardRef(forwardRefFn) {
	        forwardRefFn.__forward_ref__ = forwardRef;
	        forwardRefFn.toString = function () { return stringify(this()); };
	        return forwardRefFn;
	    }
	    /**
	     * Lazily retrieves the reference value from a forwardRef.
	     *
	     * Acts as the identity function when given a non-forward-ref value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
	     *
	     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
	     *
	     * See: {@link forwardRef}
	     * @experimental
	     */
	    function resolveForwardRef(type) {
	        if (isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
	            type.__forward_ref__ === forwardRef) {
	            return type();
	        }
	        else {
	            return type;
	        }
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * @stable
	     */
	    var BaseError = (function (_super) {
	        __extends(BaseError, _super);
	        function BaseError(message) {
	            // Errors don't use current this, instead they create a new instance.
	            // We have to do forward all of our api to the nativeInstance.
	            var nativeError = _super.call(this, message);
	            this._nativeError = nativeError;
	        }
	        Object.defineProperty(BaseError.prototype, "message", {
	            get: function () { return this._nativeError.message; },
	            set: function (message) { this._nativeError.message = message; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "name", {
	            get: function () { return this._nativeError.name; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BaseError.prototype, "stack", {
	            get: function () { return this._nativeError.stack; },
	            set: function (value) { this._nativeError.stack = value; },
	            enumerable: true,
	            configurable: true
	        });
	        BaseError.prototype.toString = function () { return this._nativeError.toString(); };
	        return BaseError;
	    }(Error));
	    /**
	     * @stable
	     */
	    var WrappedError = (function (_super) {
	        __extends(WrappedError, _super);
	        function WrappedError(message, error) {
	            _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
	            this.originalError = error;
	        }
	        Object.defineProperty(WrappedError.prototype, "stack", {
	            get: function () {
	                return (this.originalError instanceof Error ? this.originalError : this._nativeError)
	                    .stack;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return WrappedError;
	    }(BaseError));
	
	    var _THROW_IF_NOT_FOUND = new Object();
	    var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	    var _NullInjector = (function () {
	        function _NullInjector() {
	        }
	        _NullInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = _THROW_IF_NOT_FOUND; }
	            if (notFoundValue === _THROW_IF_NOT_FOUND) {
	                throw new Error("No provider for " + stringify(token) + "!");
	            }
	            return notFoundValue;
	        };
	        return _NullInjector;
	    }());
	    /**
	     * @whatItDoes Injector interface
	     * @howToUse
	     * ```
	     * const injector: Injector = ...;
	     * injector.get(...);
	     * ```
	     *
	     * @description
	     * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
	     *
	     * ### Example
	     *
	     * {@example core/di/ts/injector_spec.ts region='Injector'}
	     *
	     * `Injector` returns itself when given `Injector` as a token:
	     * {@example core/di/ts/injector_spec.ts region='injectInjector'}
	     *
	     * @stable
	     */
	    var Injector = (function () {
	        function Injector() {
	        }
	        /**
	         * Retrieves an instance from the injector based on the provided token.
	         * If not found:
	         * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
	         * Injector.THROW_IF_NOT_FOUND is given
	         * - Returns the `notFoundValue` otherwise
	         * ```
	         */
	        Injector.prototype.get = function (token, notFoundValue) { return unimplemented(); };
	        Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	        Injector.NULL = new _NullInjector();
	        return Injector;
	    }());
	
	    var Map$1 = global$1.Map;
	    var Set = global$1.Set;
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map$1([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map$1();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var createMapFromMap = (function () {
	        try {
	            if (new Map$1(new Map$1())) {
	                return function createMapFromMap(m) { return new Map$1(m); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromMap(m) {
	            var map = new Map$1();
	            m.forEach(function (v, k) { map.set(k, v); });
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map$1()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map$1()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = ListWrapper.createFixedSize(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.clone = function (m) { return createMapFromMap(m); };
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map$1();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.toStringMap = function (m) {
	            var r = {};
	            m.forEach(function (v, k) { return r[k] = v; });
	            return r;
	        };
	        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	        MapWrapper.clearValues = function (m) { _clearValues(m); };
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.create = function () {
	            // Note: We are not using Object.create(null) here due to
	            // performance!
	            // http://jsperf.com/ng2-object-create-null
	            return {};
	        };
	        StringMapWrapper.contains = function (map, key) {
	            return map.hasOwnProperty(key);
	        };
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.delete = function (map, key) { delete map[key]; };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	    function isListLikeIterable(obj) {
	        if (!isJsObject(obj))
	            return false;
	        return isArray(obj) ||
	            (!(obj instanceof Map$1) &&
	                getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	    }
	    function areIterablesEqual(a, b, comparator) {
	        var iterator1 = a[getSymbolIterator()]();
	        var iterator2 = b[getSymbolIterator()]();
	        while (true) {
	            var item1 = iterator1.next();
	            var item2 = iterator2.next();
	            if (item1.done && item2.done)
	                return true;
	            if (item1.done || item2.done)
	                return false;
	            if (!comparator(item1.value, item2.value))
	                return false;
	        }
	    }
	    function iterateListLike(obj, fn) {
	        if (isArray(obj)) {
	            for (var i = 0; i < obj.length; i++) {
	                fn(obj[i]);
	            }
	        }
	        else {
	            var iterator = obj[getSymbolIterator()]();
	            var item;
	            while (!((item = iterator.next()).done)) {
	                fn(item.value);
	            }
	        }
	    }
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Set constructor.  We work around that by manually adding the items.
	    var createSetFromList = (function () {
	        var test = new Set([1, 2, 3]);
	        if (test.size === 3) {
	            return function createSetFromList(lst) { return new Set(lst); };
	        }
	        else {
	            return function createSetAndPopulateFromList(lst) {
	                var res = new Set(lst);
	                if (res.size !== lst.length) {
	                    for (var i = 0; i < lst.length; i++) {
	                        res.add(lst[i]);
	                    }
	                }
	                return res;
	            };
	        }
	    })();
	    var SetWrapper = (function () {
	        function SetWrapper() {
	        }
	        SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	        SetWrapper.has = function (s, key) { return s.has(key); };
	        SetWrapper.delete = function (m, k) { m.delete(k); };
	        return SetWrapper;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function findFirstClosedCycle(keys) {
	        var res = [];
	        for (var i = 0; i < keys.length; ++i) {
	            if (ListWrapper.contains(res, keys[i])) {
	                res.push(keys[i]);
	                return res;
	            }
	            res.push(keys[i]);
	        }
	        return res;
	    }
	    function constructResolvingPath(keys) {
	        if (keys.length > 1) {
	            var reversed = findFirstClosedCycle(ListWrapper.reversed(keys));
	            var tokenStrs = reversed.map(function (k) { return stringify(k.token); });
	            return ' (' + tokenStrs.join(' -> ') + ')';
	        }
	        return '';
	    }
	    /**
	     * Base class for all errors arising from misconfigured providers.
	     * @stable
	     */
	    var AbstractProviderError = (function (_super) {
	        __extends$1(AbstractProviderError, _super);
	        function AbstractProviderError(injector, key, constructResolvingMessage) {
	            _super.call(this, 'DI Error');
	            this.keys = [key];
	            this.injectors = [injector];
	            this.constructResolvingMessage = constructResolvingMessage;
	            this.message = this.constructResolvingMessage(this.keys);
	        }
	        AbstractProviderError.prototype.addKey = function (injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	            this.message = this.constructResolvingMessage(this.keys);
	        };
	        return AbstractProviderError;
	    }(BaseError));
	    /**
	     * Thrown when trying to retrieve a dependency by key from {@link Injector}, but the
	     * {@link Injector} does not have a {@link Provider} for the given key.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor(b:B) {}
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	     * ```
	     * @stable
	     */
	    var NoProviderError = (function (_super) {
	        __extends$1(NoProviderError, _super);
	        function NoProviderError(injector, key) {
	            _super.call(this, injector, key, function (keys) {
	                var first = stringify(ListWrapper.first(keys).token);
	                return "No provider for " + first + "!" + constructResolvingPath(keys);
	            });
	        }
	        return NoProviderError;
	    }(AbstractProviderError));
	    /**
	     * Thrown when dependencies form a cycle.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
	     *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
	     * ]);
	     *
	     * expect(() => injector.get("one")).toThrowError();
	     * ```
	     *
	     * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
	     * @stable
	     */
	    var CyclicDependencyError = (function (_super) {
	        __extends$1(CyclicDependencyError, _super);
	        function CyclicDependencyError(injector, key) {
	            _super.call(this, injector, key, function (keys) {
	                return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
	            });
	        }
	        return CyclicDependencyError;
	    }(AbstractProviderError));
	    /**
	     * Thrown when a constructing type returns with an Error.
	     *
	     * The `InstantiationError` class contains the original error plus the dependency graph which caused
	     * this object to be instantiated.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor() {
	     *     throw new Error('message');
	     *   }
	     * }
	     *
	     * var injector = Injector.resolveAndCreate([A]);
	
	     * try {
	     *   injector.get(A);
	     * } catch (e) {
	     *   expect(e instanceof InstantiationError).toBe(true);
	     *   expect(e.originalException.message).toEqual("message");
	     *   expect(e.originalStack).toBeDefined();
	     * }
	     * ```
	     * @stable
	     */
	    var InstantiationError = (function (_super) {
	        __extends$1(InstantiationError, _super);
	        function InstantiationError(injector, originalException, originalStack, key) {
	            _super.call(this, 'DI Error', originalException);
	            this.keys = [key];
	            this.injectors = [injector];
	        }
	        InstantiationError.prototype.addKey = function (injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	        };
	        Object.defineProperty(InstantiationError.prototype, "message", {
	            get: function () {
	                var first = stringify(ListWrapper.first(this.keys).token);
	                return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(InstantiationError.prototype, "causeKey", {
	            get: function () { return this.keys[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        return InstantiationError;
	    }(WrappedError));
	    /**
	     * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
	     * creation.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
	     *
	     * ```typescript
	     * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
	     * ```
	     * @stable
	     */
	    var InvalidProviderError = (function (_super) {
	        __extends$1(InvalidProviderError, _super);
	        function InvalidProviderError(provider) {
	            _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
	        }
	        return InvalidProviderError;
	    }(BaseError));
	    /**
	     * Thrown when the class has no annotation information.
	     *
	     * Lack of annotation information prevents the {@link Injector} from determining which dependencies
	     * need to be injected into the constructor.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
	     *
	     * ```typescript
	     * class A {
	     *   constructor(b) {}
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	     * ```
	     *
	     * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
	     *
	     * ```typescript
	     * class B {}
	     *
	     * class A {
	     *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
	     * }
	     *
	     * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
	     * ```
	     * @stable
	     */
	    var NoAnnotationError = (function (_super) {
	        __extends$1(NoAnnotationError, _super);
	        function NoAnnotationError(typeOrFunc, params) {
	            _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
	        }
	        NoAnnotationError._genMessage = function (typeOrFunc, params) {
	            var signature = [];
	            for (var i = 0, ii = params.length; i < ii; i++) {
	                var parameter = params[i];
	                if (isBlank(parameter) || parameter.length == 0) {
	                    signature.push('?');
	                }
	                else {
	                    signature.push(parameter.map(stringify).join(' '));
	                }
	            }
	            return 'Cannot resolve all parameters for \'' + stringify(typeOrFunc) + '\'(' +
	                signature.join(', ') + '). ' +
	                'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' +
	                stringify(typeOrFunc) + '\' is decorated with Injectable.';
	        };
	        return NoAnnotationError;
	    }(BaseError));
	    /**
	     * Thrown when getting an object by index.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
	     *
	     * ```typescript
	     * class A {}
	     *
	     * var injector = Injector.resolveAndCreate([A]);
	     *
	     * expect(() => injector.getAt(100)).toThrowError();
	     * ```
	     * @stable
	     */
	    var OutOfBoundsError = (function (_super) {
	        __extends$1(OutOfBoundsError, _super);
	        function OutOfBoundsError(index) {
	            _super.call(this, "Index " + index + " is out-of-bounds.");
	        }
	        return OutOfBoundsError;
	    }(BaseError));
	    // TODO: add a working example after alpha38 is released
	    /**
	     * Thrown when a multi provider and a regular provider are bound to the same token.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * expect(() => Injector.resolveAndCreate([
	     *   { provide: "Strings", useValue: "string1", multi: true},
	     *   { provide: "Strings", useValue: "string2", multi: false}
	     * ])).toThrowError();
	     * ```
	     */
	    var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
	        __extends$1(MixingMultiProvidersWithRegularProvidersError, _super);
	        function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	            _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' +
	                provider2.toString());
	        }
	        return MixingMultiProvidersWithRegularProvidersError;
	    }(BaseError));
	
	    /**
	     * A unique object used for retrieving items from the {@link ReflectiveInjector}.
	     *
	     * Keys have:
	     * - a system-wide unique `id`.
	     * - a `token`.
	     *
	     * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
	     * the
	     * injector to store created objects in a more efficient way.
	     *
	     * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
	     * resolving
	     * providers.
	     * @experimental
	     */
	    var ReflectiveKey = (function () {
	        /**
	         * Private
	         */
	        function ReflectiveKey(token, id) {
	            this.token = token;
	            this.id = id;
	            if (isBlank(token)) {
	                throw new Error('Token must be defined!');
	            }
	        }
	        Object.defineProperty(ReflectiveKey.prototype, "displayName", {
	            /**
	             * Returns a stringified token.
	             */
	            get: function () { return stringify(this.token); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Retrieves a `Key` for a token.
	         */
	        ReflectiveKey.get = function (token) {
	            return _globalKeyRegistry.get(resolveForwardRef(token));
	        };
	        Object.defineProperty(ReflectiveKey, "numberOfKeys", {
	            /**
	             * @returns the number of keys registered in the system.
	             */
	            get: function () { return _globalKeyRegistry.numberOfKeys; },
	            enumerable: true,
	            configurable: true
	        });
	        return ReflectiveKey;
	    }());
	    /**
	     * @internal
	     */
	    var KeyRegistry = (function () {
	        function KeyRegistry() {
	            this._allKeys = new Map();
	        }
	        KeyRegistry.prototype.get = function (token) {
	            if (token instanceof ReflectiveKey)
	                return token;
	            if (this._allKeys.has(token)) {
	                return this._allKeys.get(token);
	            }
	            var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
	            this._allKeys.set(token, newKey);
	            return newKey;
	        };
	        Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
	            get: function () { return this._allKeys.size; },
	            enumerable: true,
	            configurable: true
	        });
	        return KeyRegistry;
	    }());
	    var _globalKeyRegistry = new KeyRegistry();
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Represents a type that a Component or other object is instances of.
	     *
	     * @description
	     *
	     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	     * the `MyCustomComponent` constructor function.
	     *
	     * @stable
	     */
	    var Type = Function;
	
	    var ReflectionCapabilities = (function () {
	        function ReflectionCapabilities(reflect) {
	            this._reflect = reflect || global$1.Reflect;
	        }
	        ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	        ReflectionCapabilities.prototype.factory = function (t) {
	            var prototype = t.prototype;
	            return function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i - 0] = arguments[_i];
	                }
	                var instance = Object.create(prototype);
	                t.apply(instance, args);
	                return instance;
	            };
	        };
	        /** @internal */
	        ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes /** TODO #9100 */, paramAnnotations /** TODO #9100 */) {
	            var result;
	            if (typeof paramTypes === 'undefined') {
	                result = new Array(paramAnnotations.length);
	            }
	            else {
	                result = new Array(paramTypes.length);
	            }
	            for (var i = 0; i < result.length; i++) {
	                // TS outputs Object for parameters without types, while Traceur omits
	                // the annotations. For now we preserve the Traceur behavior to aid
	                // migration, but this can be revisited.
	                if (typeof paramTypes === 'undefined') {
	                    result[i] = [];
	                }
	                else if (paramTypes[i] != Object) {
	                    result[i] = [paramTypes[i]];
	                }
	                else {
	                    result[i] = [];
	                }
	                if (isPresent(paramAnnotations) && isPresent(paramAnnotations[i])) {
	                    result[i] = result[i].concat(paramAnnotations[i]);
	                }
	            }
	            return result;
	        };
	        ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
	            // Prefer the direct API.
	            if (isPresent(typeOrFunc.parameters)) {
	                return typeOrFunc.parameters;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (isPresent(typeOrFunc.ctorParameters)) {
	                var ctorParameters = typeOrFunc.ctorParameters;
	                var paramTypes_1 = ctorParameters.map(function (ctorParam /** TODO #9100 */) { return ctorParam && ctorParam.type; });
	                var paramAnnotations_1 = ctorParameters.map(function (ctorParam /** TODO #9100 */) {
	                    return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
	                });
	                return this._zipTypesAndAnnotations(paramTypes_1, paramAnnotations_1);
	            }
	            // API for metadata created by invoking the decorators.
	            if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
	                var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
	                var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
	                if (isPresent(paramTypes) || isPresent(paramAnnotations)) {
	                    return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	                }
	            }
	            // The array has to be filled with `undefined` because holes would be skipped by `some`
	            var parameters = new Array(typeOrFunc.length);
	            parameters.fill(undefined);
	            return parameters;
	        };
	        ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	            // Prefer the direct API.
	            if (isPresent(typeOrFunc.annotations)) {
	                var annotations = typeOrFunc.annotations;
	                if (isFunction(annotations) && annotations.annotations) {
	                    annotations = annotations.annotations;
	                }
	                return annotations;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (isPresent(typeOrFunc.decorators)) {
	                return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
	            }
	            // API for metadata created by invoking the decorators.
	            if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
	                var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	                if (isPresent(annotations))
	                    return annotations;
	            }
	            return [];
	        };
	        ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	            // Prefer the direct API.
	            if (isPresent(typeOrFunc.propMetadata)) {
	                var propMetadata = typeOrFunc.propMetadata;
	                if (isFunction(propMetadata) && propMetadata.propMetadata) {
	                    propMetadata = propMetadata.propMetadata;
	                }
	                return propMetadata;
	            }
	            // API of tsickle for lowering decorators to properties on the class.
	            if (isPresent(typeOrFunc.propDecorators)) {
	                var propDecorators_1 = typeOrFunc.propDecorators;
	                var propMetadata_1 = {};
	                Object.keys(propDecorators_1).forEach(function (prop) {
	                    propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
	                });
	                return propMetadata_1;
	            }
	            // API for metadata created by invoking the decorators.
	            if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
	                var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	                if (isPresent(propMetadata))
	                    return propMetadata;
	            }
	            return {};
	        };
	        // Note: JavaScript does not support to query for interfaces during runtime.
	        // However, we can't throw here as the reflector will always call this method
	        // when asked for a lifecycle interface as this is what we check in Dart.
	        ReflectionCapabilities.prototype.interfaces = function (type) { return []; };
	        ReflectionCapabilities.prototype.hasLifecycleHook = function (type, lcInterface, lcProperty) {
	            if (!(type instanceof Type))
	                return false;
	            var proto = type.prototype;
	            return !!proto[lcProperty];
	        };
	        ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	        ReflectionCapabilities.prototype.setter = function (name) {
	            return new Function('o', 'v', 'return o.' + name + ' = v;');
	        };
	        ReflectionCapabilities.prototype.method = function (name) {
	            var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	            return new Function('o', 'args', functionBody);
	        };
	        // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	        ReflectionCapabilities.prototype.importUri = function (type) {
	            // StaticSymbol
	            if (typeof type === 'object' && type['filePath']) {
	                return type['filePath'];
	            }
	            // Runtime type
	            return "./" + stringify(type);
	        };
	        ReflectionCapabilities.prototype.resolveIdentifier = function (name, moduleUrl, runtime) { return runtime; };
	        ReflectionCapabilities.prototype.resolveEnum = function (enumIdentifier, name) { return enumIdentifier[name]; };
	        return ReflectionCapabilities;
	    }());
	    function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
	        if (!decoratorInvocations) {
	            return [];
	        }
	        return decoratorInvocations.map(function (decoratorInvocation) {
	            var decoratorType = decoratorInvocation.type;
	            var annotationCls = decoratorType.annotationCls;
	            var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
	            return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
	        });
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Provides read-only access to reflection data about symbols. Used internally by Angular
	     * to power dependency injection and compilation.
	     */
	    var ReflectorReader = (function () {
	        function ReflectorReader() {
	        }
	        return ReflectorReader;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Provides access to reflection data about symbols. Used internally by Angular
	     * to power dependency injection and compilation.
	     */
	    var Reflector = (function (_super) {
	        __extends$2(Reflector, _super);
	        function Reflector(reflectionCapabilities) {
	            _super.call(this);
	            /** @internal */
	            this._injectableInfo = new Map$1();
	            /** @internal */
	            this._getters = new Map$1();
	            /** @internal */
	            this._setters = new Map$1();
	            /** @internal */
	            this._methods = new Map$1();
	            this._usedKeys = null;
	            this.reflectionCapabilities = reflectionCapabilities;
	        }
	        Reflector.prototype.updateCapabilities = function (caps) { this.reflectionCapabilities = caps; };
	        Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
	        /**
	         * Causes `this` reflector to track keys used to access
	         * {@link ReflectionInfo} objects.
	         */
	        Reflector.prototype.trackUsage = function () { this._usedKeys = new Set(); };
	        /**
	         * Lists types for which reflection information was not requested since
	         * {@link #trackUsage} was called. This list could later be audited as
	         * potential dead code.
	         */
	        Reflector.prototype.listUnusedKeys = function () {
	            var _this = this;
	            if (this._usedKeys == null) {
	                throw new Error('Usage tracking is disabled');
	            }
	            var allTypes = MapWrapper.keys(this._injectableInfo);
	            return allTypes.filter(function (key) { return !SetWrapper.has(_this._usedKeys, key); });
	        };
	        Reflector.prototype.registerFunction = function (func, funcInfo) {
	            this._injectableInfo.set(func, funcInfo);
	        };
	        Reflector.prototype.registerType = function (type, typeInfo) {
	            this._injectableInfo.set(type, typeInfo);
	        };
	        Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
	        Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
	        Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
	        Reflector.prototype.factory = function (type) {
	            if (this._containsReflectionInfo(type)) {
	                var res = this._getReflectionInfo(type).factory;
	                return isPresent(res) ? res : null;
	            }
	            else {
	                return this.reflectionCapabilities.factory(type);
	            }
	        };
	        Reflector.prototype.parameters = function (typeOrFunc) {
	            if (this._injectableInfo.has(typeOrFunc)) {
	                var res = this._getReflectionInfo(typeOrFunc).parameters;
	                return isPresent(res) ? res : [];
	            }
	            else {
	                return this.reflectionCapabilities.parameters(typeOrFunc);
	            }
	        };
	        Reflector.prototype.annotations = function (typeOrFunc) {
	            if (this._injectableInfo.has(typeOrFunc)) {
	                var res = this._getReflectionInfo(typeOrFunc).annotations;
	                return isPresent(res) ? res : [];
	            }
	            else {
	                return this.reflectionCapabilities.annotations(typeOrFunc);
	            }
	        };
	        Reflector.prototype.propMetadata = function (typeOrFunc) {
	            if (this._injectableInfo.has(typeOrFunc)) {
	                var res = this._getReflectionInfo(typeOrFunc).propMetadata;
	                return isPresent(res) ? res : {};
	            }
	            else {
	                return this.reflectionCapabilities.propMetadata(typeOrFunc);
	            }
	        };
	        Reflector.prototype.interfaces = function (type) {
	            if (this._injectableInfo.has(type)) {
	                var res = this._getReflectionInfo(type).interfaces;
	                return isPresent(res) ? res : [];
	            }
	            else {
	                return this.reflectionCapabilities.interfaces(type);
	            }
	        };
	        Reflector.prototype.hasLifecycleHook = function (type, lcInterface, lcProperty) {
	            var interfaces = this.interfaces(type);
	            if (interfaces.indexOf(lcInterface) !== -1) {
	                return true;
	            }
	            else {
	                return this.reflectionCapabilities.hasLifecycleHook(type, lcInterface, lcProperty);
	            }
	        };
	        Reflector.prototype.getter = function (name) {
	            if (this._getters.has(name)) {
	                return this._getters.get(name);
	            }
	            else {
	                return this.reflectionCapabilities.getter(name);
	            }
	        };
	        Reflector.prototype.setter = function (name) {
	            if (this._setters.has(name)) {
	                return this._setters.get(name);
	            }
	            else {
	                return this.reflectionCapabilities.setter(name);
	            }
	        };
	        Reflector.prototype.method = function (name) {
	            if (this._methods.has(name)) {
	                return this._methods.get(name);
	            }
	            else {
	                return this.reflectionCapabilities.method(name);
	            }
	        };
	        /** @internal */
	        Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
	            if (isPresent(this._usedKeys)) {
	                this._usedKeys.add(typeOrFunc);
	            }
	            return this._injectableInfo.get(typeOrFunc);
	        };
	        /** @internal */
	        Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
	        Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	        Reflector.prototype.resolveIdentifier = function (name, moduleUrl, runtime) {
	            return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
	        };
	        Reflector.prototype.resolveEnum = function (identifier, name) {
	            return this.reflectionCapabilities.resolveEnum(identifier, name);
	        };
	        return Reflector;
	    }(ReflectorReader));
	    function _mergeMaps(target, config) {
	        StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
	    }
	
	    /**
	     * The {@link Reflector} used internally in Angular to access metadata
	     * about symbols.
	     */
	    var reflector = new Reflector(new ReflectionCapabilities());
	
	    /**
	     * `Dependency` is used by the framework to extend DI.
	     * This is internal to Angular and should not be used directly.
	     */
	    var ReflectiveDependency = (function () {
	        function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	            this.key = key;
	            this.optional = optional;
	            this.lowerBoundVisibility = lowerBoundVisibility;
	            this.upperBoundVisibility = upperBoundVisibility;
	            this.properties = properties;
	        }
	        ReflectiveDependency.fromKey = function (key) {
	            return new ReflectiveDependency(key, false, null, null, []);
	        };
	        return ReflectiveDependency;
	    }());
	    var _EMPTY_LIST = [];
	    var ResolvedReflectiveProvider_ = (function () {
	        function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
	            this.key = key;
	            this.resolvedFactories = resolvedFactories;
	            this.multiProvider = multiProvider;
	        }
	        Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
	            get: function () { return this.resolvedFactories[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        return ResolvedReflectiveProvider_;
	    }());
	    /**
	     * An internal resolved representation of a factory function created by resolving {@link
	     * Provider}.
	     * @experimental
	     */
	    var ResolvedReflectiveFactory = (function () {
	        function ResolvedReflectiveFactory(
	            /**
	             * Factory function which can return an instance of an object represented by a key.
	             */
	            factory,
	            /**
	             * Arguments (dependencies) to the `factory` function.
	             */
	            dependencies) {
	            this.factory = factory;
	            this.dependencies = dependencies;
	        }
	        return ResolvedReflectiveFactory;
	    }());
	    /**
	     * Resolve a single provider.
	     */
	    function resolveReflectiveFactory(provider) {
	        var factoryFn;
	        var resolvedDeps;
	        if (isPresent(provider.useClass)) {
	            var useClass = resolveForwardRef(provider.useClass);
	            factoryFn = reflector.factory(useClass);
	            resolvedDeps = _dependenciesFor(useClass);
	        }
	        else if (isPresent(provider.useExisting)) {
	            factoryFn = function (aliasInstance) { return aliasInstance; };
	            resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
	        }
	        else if (isPresent(provider.useFactory)) {
	            factoryFn = provider.useFactory;
	            resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
	        }
	        else {
	            factoryFn = function () { return provider.useValue; };
	            resolvedDeps = _EMPTY_LIST;
	        }
	        return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
	    }
	    /**
	     * Converts the {@link Provider} into {@link ResolvedProvider}.
	     *
	     * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
	     * convenience provider syntax.
	     */
	    function resolveReflectiveProvider(provider) {
	        return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
	    }
	    /**
	     * Resolve a list of Providers.
	     */
	    function resolveReflectiveProviders(providers) {
	        var normalized = _normalizeProviders(providers, []);
	        var resolved = normalized.map(resolveReflectiveProvider);
	        return MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
	    }
	    /**
	     * Merges a list of ResolvedProviders into a list where
	     * each key is contained exactly once and multi providers
	     * have been merged.
	     */
	    function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
	        for (var i = 0; i < providers.length; i++) {
	            var provider = providers[i];
	            var existing = normalizedProvidersMap.get(provider.key.id);
	            if (isPresent(existing)) {
	                if (provider.multiProvider !== existing.multiProvider) {
	                    throw new MixingMultiProvidersWithRegularProvidersError(existing, provider);
	                }
	                if (provider.multiProvider) {
	                    for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                        existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                    }
	                }
	                else {
	                    normalizedProvidersMap.set(provider.key.id, provider);
	                }
	            }
	            else {
	                var resolvedProvider;
	                if (provider.multiProvider) {
	                    resolvedProvider = new ResolvedReflectiveProvider_(provider.key, ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
	                }
	                else {
	                    resolvedProvider = provider;
	                }
	                normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	            }
	        }
	        return normalizedProvidersMap;
	    }
	    function _normalizeProviders(providers, res) {
	        providers.forEach(function (b) {
	            if (b instanceof Type) {
	                res.push({ provide: b, useClass: b });
	            }
	            else if (b && typeof b == 'object' && b.provide !== undefined) {
	                res.push(b);
	            }
	            else if (b instanceof Array) {
	                _normalizeProviders(b, res);
	            }
	            else {
	                throw new InvalidProviderError(b);
	            }
	        });
	        return res;
	    }
	    function constructDependencies(typeOrFunc, dependencies) {
	        if (isBlank(dependencies)) {
	            return _dependenciesFor(typeOrFunc);
	        }
	        else {
	            var params = dependencies.map(function (t) { return [t]; });
	            return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params); });
	        }
	    }
	    function _dependenciesFor(typeOrFunc) {
	        var params = reflector.parameters(typeOrFunc);
	        if (isBlank(params))
	            return [];
	        if (params.some(isBlank)) {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	        return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	    }
	    function _extractToken(typeOrFunc /** TODO #9100 */, metadata /** TODO #9100 */ /*any[] | any*/, params) {
	        var depProps = [];
	        var token = null;
	        var optional = false;
	        if (!isArray(metadata)) {
	            if (metadata instanceof Inject) {
	                return _createDependency(metadata.token, optional, null, null, depProps);
	            }
	            else {
	                return _createDependency(metadata, optional, null, null, depProps);
	            }
	        }
	        var lowerBoundVisibility = null;
	        var upperBoundVisibility = null;
	        for (var i = 0; i < metadata.length; ++i) {
	            var paramMetadata = metadata[i];
	            if (paramMetadata instanceof Type) {
	                token = paramMetadata;
	            }
	            else if (paramMetadata instanceof Inject) {
	                token = paramMetadata.token;
	            }
	            else if (paramMetadata instanceof Optional) {
	                optional = true;
	            }
	            else if (paramMetadata instanceof Self) {
	                upperBoundVisibility = paramMetadata;
	            }
	            else if (paramMetadata instanceof Host) {
	                upperBoundVisibility = paramMetadata;
	            }
	            else if (paramMetadata instanceof SkipSelf) {
	                lowerBoundVisibility = paramMetadata;
	            }
	        }
	        token = resolveForwardRef(token);
	        if (isPresent(token)) {
	            return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	        }
	        else {
	            throw new NoAnnotationError(typeOrFunc, params);
	        }
	    }
	    function _createDependency(token /** TODO #9100 */, optional /** TODO #9100 */, lowerBoundVisibility /** TODO #9100 */, upperBoundVisibility /** TODO #9100 */, depProps /** TODO #9100 */) {
	        return new ReflectiveDependency(ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    }
	
	    // avoid unused import when Type union types are erased
	    // Threshold for the dynamic version
	    var _MAX_CONSTRUCTION_COUNTER = 10;
	    var UNDEFINED = new Object();
	    var ReflectiveProtoInjectorInlineStrategy = (function () {
	        function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
	            this.provider0 = null;
	            this.provider1 = null;
	            this.provider2 = null;
	            this.provider3 = null;
	            this.provider4 = null;
	            this.provider5 = null;
	            this.provider6 = null;
	            this.provider7 = null;
	            this.provider8 = null;
	            this.provider9 = null;
	            this.keyId0 = null;
	            this.keyId1 = null;
	            this.keyId2 = null;
	            this.keyId3 = null;
	            this.keyId4 = null;
	            this.keyId5 = null;
	            this.keyId6 = null;
	            this.keyId7 = null;
	            this.keyId8 = null;
	            this.keyId9 = null;
	            var length = providers.length;
	            if (length > 0) {
	                this.provider0 = providers[0];
	                this.keyId0 = providers[0].key.id;
	            }
	            if (length > 1) {
	                this.provider1 = providers[1];
	                this.keyId1 = providers[1].key.id;
	            }
	            if (length > 2) {
	                this.provider2 = providers[2];
	                this.keyId2 = providers[2].key.id;
	            }
	            if (length > 3) {
	                this.provider3 = providers[3];
	                this.keyId3 = providers[3].key.id;
	            }
	            if (length > 4) {
	                this.provider4 = providers[4];
	                this.keyId4 = providers[4].key.id;
	            }
	            if (length > 5) {
	                this.provider5 = providers[5];
	                this.keyId5 = providers[5].key.id;
	            }
	            if (length > 6) {
	                this.provider6 = providers[6];
	                this.keyId6 = providers[6].key.id;
	            }
	            if (length > 7) {
	                this.provider7 = providers[7];
	                this.keyId7 = providers[7].key.id;
	            }
	            if (length > 8) {
	                this.provider8 = providers[8];
	                this.keyId8 = providers[8].key.id;
	            }
	            if (length > 9) {
	                this.provider9 = providers[9];
	                this.keyId9 = providers[9].key.id;
	            }
	        }
	        ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
	            if (index == 0)
	                return this.provider0;
	            if (index == 1)
	                return this.provider1;
	            if (index == 2)
	                return this.provider2;
	            if (index == 3)
	                return this.provider3;
	            if (index == 4)
	                return this.provider4;
	            if (index == 5)
	                return this.provider5;
	            if (index == 6)
	                return this.provider6;
	            if (index == 7)
	                return this.provider7;
	            if (index == 8)
	                return this.provider8;
	            if (index == 9)
	                return this.provider9;
	            throw new OutOfBoundsError(index);
	        };
	        ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
	            return new ReflectiveInjectorInlineStrategy(injector, this);
	        };
	        return ReflectiveProtoInjectorInlineStrategy;
	    }());
	    var ReflectiveProtoInjectorDynamicStrategy = (function () {
	        function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
	            this.providers = providers;
	            var len = providers.length;
	            this.keyIds = ListWrapper.createFixedSize(len);
	            for (var i = 0; i < len; i++) {
	                this.keyIds[i] = providers[i].key.id;
	            }
	        }
	        ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
	            if (index < 0 || index >= this.providers.length) {
	                throw new OutOfBoundsError(index);
	            }
	            return this.providers[index];
	        };
	        ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
	            return new ReflectiveInjectorDynamicStrategy(this, ei);
	        };
	        return ReflectiveProtoInjectorDynamicStrategy;
	    }());
	    var ReflectiveProtoInjector = (function () {
	        function ReflectiveProtoInjector(providers) {
	            this.numberOfProviders = providers.length;
	            this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
	                new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
	                new ReflectiveProtoInjectorInlineStrategy(this, providers);
	        }
	        ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
	            return new ReflectiveProtoInjector(providers);
	        };
	        ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
	            return this._strategy.getProviderAtIndex(index);
	        };
	        return ReflectiveProtoInjector;
	    }());
	    var ReflectiveInjectorInlineStrategy = (function () {
	        function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
	            this.injector = injector;
	            this.protoStrategy = protoStrategy;
	            this.obj0 = UNDEFINED;
	            this.obj1 = UNDEFINED;
	            this.obj2 = UNDEFINED;
	            this.obj3 = UNDEFINED;
	            this.obj4 = UNDEFINED;
	            this.obj5 = UNDEFINED;
	            this.obj6 = UNDEFINED;
	            this.obj7 = UNDEFINED;
	            this.obj8 = UNDEFINED;
	            this.obj9 = UNDEFINED;
	        }
	        ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	        ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
	            return this.injector._new(provider);
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
	            var p = this.protoStrategy;
	            var inj = this.injector;
	            if (p.keyId0 === keyId) {
	                if (this.obj0 === UNDEFINED) {
	                    this.obj0 = inj._new(p.provider0);
	                }
	                return this.obj0;
	            }
	            if (p.keyId1 === keyId) {
	                if (this.obj1 === UNDEFINED) {
	                    this.obj1 = inj._new(p.provider1);
	                }
	                return this.obj1;
	            }
	            if (p.keyId2 === keyId) {
	                if (this.obj2 === UNDEFINED) {
	                    this.obj2 = inj._new(p.provider2);
	                }
	                return this.obj2;
	            }
	            if (p.keyId3 === keyId) {
	                if (this.obj3 === UNDEFINED) {
	                    this.obj3 = inj._new(p.provider3);
	                }
	                return this.obj3;
	            }
	            if (p.keyId4 === keyId) {
	                if (this.obj4 === UNDEFINED) {
	                    this.obj4 = inj._new(p.provider4);
	                }
	                return this.obj4;
	            }
	            if (p.keyId5 === keyId) {
	                if (this.obj5 === UNDEFINED) {
	                    this.obj5 = inj._new(p.provider5);
	                }
	                return this.obj5;
	            }
	            if (p.keyId6 === keyId) {
	                if (this.obj6 === UNDEFINED) {
	                    this.obj6 = inj._new(p.provider6);
	                }
	                return this.obj6;
	            }
	            if (p.keyId7 === keyId) {
	                if (this.obj7 === UNDEFINED) {
	                    this.obj7 = inj._new(p.provider7);
	                }
	                return this.obj7;
	            }
	            if (p.keyId8 === keyId) {
	                if (this.obj8 === UNDEFINED) {
	                    this.obj8 = inj._new(p.provider8);
	                }
	                return this.obj8;
	            }
	            if (p.keyId9 === keyId) {
	                if (this.obj9 === UNDEFINED) {
	                    this.obj9 = inj._new(p.provider9);
	                }
	                return this.obj9;
	            }
	            return UNDEFINED;
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
	            if (index == 0)
	                return this.obj0;
	            if (index == 1)
	                return this.obj1;
	            if (index == 2)
	                return this.obj2;
	            if (index == 3)
	                return this.obj3;
	            if (index == 4)
	                return this.obj4;
	            if (index == 5)
	                return this.obj5;
	            if (index == 6)
	                return this.obj6;
	            if (index == 7)
	                return this.obj7;
	            if (index == 8)
	                return this.obj8;
	            if (index == 9)
	                return this.obj9;
	            throw new OutOfBoundsError(index);
	        };
	        ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
	        return ReflectiveInjectorInlineStrategy;
	    }());
	    var ReflectiveInjectorDynamicStrategy = (function () {
	        function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
	            this.protoStrategy = protoStrategy;
	            this.injector = injector;
	            this.objs = ListWrapper.createFixedSize(protoStrategy.providers.length);
	            ListWrapper.fill(this.objs, UNDEFINED);
	        }
	        ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	        ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
	            return this.injector._new(provider);
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
	            var p = this.protoStrategy;
	            for (var i = 0; i < p.keyIds.length; i++) {
	                if (p.keyIds[i] === keyId) {
	                    if (this.objs[i] === UNDEFINED) {
	                        this.objs[i] = this.injector._new(p.providers[i]);
	                    }
	                    return this.objs[i];
	                }
	            }
	            return UNDEFINED;
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
	            if (index < 0 || index >= this.objs.length) {
	                throw new OutOfBoundsError(index);
	            }
	            return this.objs[index];
	        };
	        ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
	        return ReflectiveInjectorDynamicStrategy;
	    }());
	    /**
	     * A ReflectiveDependency injection container used for instantiating objects and resolving
	     * dependencies.
	     *
	     * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
	     * constructor dependencies.
	     *
	     * In typical use, application code asks for the dependencies in the constructor and they are
	     * resolved by the `Injector`.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
	     *
	     * The following example creates an `Injector` configured to create `Engine` and `Car`.
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	     * var car = injector.get(Car);
	     * expect(car instanceof Car).toBe(true);
	     * expect(car.engine instanceof Engine).toBe(true);
	     * ```
	     *
	     * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
	     * resolve all of the object's dependencies automatically.
	     *
	     * @stable
	     */
	    var ReflectiveInjector = (function () {
	        function ReflectiveInjector() {
	        }
	        /**
	         * Turns an array of provider definitions into an array of resolved providers.
	         *
	         * A resolution is a process of flattening multiple nested arrays and converting individual
	         * providers into an array of {@link ResolvedReflectiveProvider}s.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	         *
	         * expect(providers.length).toEqual(2);
	         *
	         * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	         * expect(providers[0].key.displayName).toBe("Car");
	         * expect(providers[0].dependencies.length).toEqual(1);
	         * expect(providers[0].factory).toBeDefined();
	         *
	         * expect(providers[1].key.displayName).toBe("Engine");
	         * });
	         * ```
	         *
	         * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
	         */
	        ReflectiveInjector.resolve = function (providers) {
	            return resolveReflectiveProviders(providers);
	        };
	        /**
	         * Resolves an array of providers and creates an injector from those providers.
	         *
	         * The passed-in providers can be an array of `Type`, {@link Provider},
	         * or a recursive array of more providers.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	         * expect(injector.get(Car) instanceof Car).toBe(true);
	         * ```
	         *
	         * This function is slower than the corresponding `fromResolvedProviders`
	         * because it needs to resolve the passed-in providers first.
	         * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
	         */
	        ReflectiveInjector.resolveAndCreate = function (providers, parent) {
	            if (parent === void 0) { parent = null; }
	            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	            return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
	        };
	        /**
	         * Creates an injector from previously resolved providers.
	         *
	         * This API is the recommended way to construct injectors in performance-sensitive parts.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var providers = ReflectiveInjector.resolve([Car, Engine]);
	         * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	         * expect(injector.get(Car) instanceof Car).toBe(true);
	         * ```
	         * @experimental
	         */
	        ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
	            if (parent === void 0) { parent = null; }
	            return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
	        };
	        Object.defineProperty(ReflectiveInjector.prototype, "parent", {
	            /**
	             * Parent of this injector.
	             *
	             * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	             * -->
	             *
	             * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
	             *
	             * ```typescript
	             * var parent = ReflectiveInjector.resolveAndCreate([]);
	             * var child = parent.resolveAndCreateChild([]);
	             * expect(child.parent).toBe(parent);
	             * ```
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Resolves an array of providers and creates a child injector from those providers.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * The passed-in providers can be an array of `Type`, {@link Provider},
	         * or a recursive array of more providers.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
	         *
	         * ```typescript
	         * class ParentProvider {}
	         * class ChildProvider {}
	         *
	         * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	         * var child = parent.resolveAndCreateChild([ChildProvider]);
	         *
	         * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	         * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	         * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	         * ```
	         *
	         * This function is slower than the corresponding `createChildFromResolved`
	         * because it needs to resolve the passed-in providers first.
	         * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
	         */
	        ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) { return unimplemented(); };
	        /**
	         * Creates a child injector from previously resolved providers.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * This API is the recommended way to construct injectors in performance-sensitive parts.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
	         *
	         * ```typescript
	         * class ParentProvider {}
	         * class ChildProvider {}
	         *
	         * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	         * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	         *
	         * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	         * var child = parent.createChildFromResolved(childProviders);
	         *
	         * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	         * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	         * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	         * ```
	         */
	        ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
	            return unimplemented();
	        };
	        /**
	         * Resolves a provider and instantiates an object in the context of the injector.
	         *
	         * The created object does not get cached by the injector.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	         *
	         * var car = injector.resolveAndInstantiate(Car);
	         * expect(car.engine).toBe(injector.get(Engine));
	         * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	         * ```
	         */
	        ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return unimplemented(); };
	        /**
	         * Instantiates an object using a resolved provider in the context of the injector.
	         *
	         * The created object does not get cached by the injector.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
	         *
	         * ```typescript
	         * @Injectable()
	         * class Engine {
	         * }
	         *
	         * @Injectable()
	         * class Car {
	         *   constructor(public engine:Engine) {}
	         * }
	         *
	         * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	         * var carProvider = ReflectiveInjector.resolve([Car])[0];
	         * var car = injector.instantiateResolved(carProvider);
	         * expect(car.engine).toBe(injector.get(Engine));
	         * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	         * ```
	         */
	        ReflectiveInjector.prototype.instantiateResolved = function (provider) { return unimplemented(); };
	        return ReflectiveInjector;
	    }());
	    var ReflectiveInjector_ = (function () {
	        /**
	         * Private
	         */
	        function ReflectiveInjector_(_proto /* ProtoInjector */, _parent) {
	            if (_parent === void 0) { _parent = null; }
	            /** @internal */
	            this._constructionCounter = 0;
	            this._proto = _proto;
	            this._parent = _parent;
	            this._strategy = _proto._strategy.createInjectorStrategy(this);
	        }
	        ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            return this._getByKey(ReflectiveKey.get(token), null, null, notFoundValue);
	        };
	        ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
	        Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
	            /**
	             * @internal
	             * Internal. Do not use.
	             * We return `any` not to export the InjectorStrategy type.
	             */
	            get: function () { return this._strategy; },
	            enumerable: true,
	            configurable: true
	        });
	        ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
	            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	            return this.createChildFromResolved(ResolvedReflectiveProviders);
	        };
	        ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
	            var proto = new ReflectiveProtoInjector(providers);
	            var inj = new ReflectiveInjector_(proto);
	            inj._parent = this;
	            return inj;
	        };
	        ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
	            return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
	        };
	        ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
	            return this._instantiateProvider(provider);
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._new = function (provider) {
	            if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	                throw new CyclicDependencyError(this, provider.key);
	            }
	            return this._instantiateProvider(provider);
	        };
	        ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
	            if (provider.multiProvider) {
	                var res = ListWrapper.createFixedSize(provider.resolvedFactories.length);
	                for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                    res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
	                }
	                return res;
	            }
	            else {
	                return this._instantiate(provider, provider.resolvedFactories[0]);
	            }
	        };
	        ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
	            var factory = ResolvedReflectiveFactory.factory;
	            var deps = ResolvedReflectiveFactory.dependencies;
	            var length = deps.length;
	            var d0;
	            var d1;
	            var d2;
	            var d3;
	            var d4;
	            var d5;
	            var d6;
	            var d7;
	            var d8;
	            var d9;
	            var d10;
	            var d11;
	            var d12;
	            var d13;
	            var d14;
	            var d15;
	            var d16;
	            var d17;
	            var d18;
	            var d19;
	            try {
	                d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
	                d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
	                d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
	                d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
	                d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
	                d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
	                d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
	                d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
	                d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
	                d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
	                d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
	                d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
	                d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
	                d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
	                d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
	                d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
	                d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
	                d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
	                d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
	                d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
	            }
	            catch (e) {
	                if (e instanceof AbstractProviderError || e instanceof InstantiationError) {
	                    e.addKey(this, provider.key);
	                }
	                throw e;
	            }
	            var obj;
	            try {
	                switch (length) {
	                    case 0:
	                        obj = factory();
	                        break;
	                    case 1:
	                        obj = factory(d0);
	                        break;
	                    case 2:
	                        obj = factory(d0, d1);
	                        break;
	                    case 3:
	                        obj = factory(d0, d1, d2);
	                        break;
	                    case 4:
	                        obj = factory(d0, d1, d2, d3);
	                        break;
	                    case 5:
	                        obj = factory(d0, d1, d2, d3, d4);
	                        break;
	                    case 6:
	                        obj = factory(d0, d1, d2, d3, d4, d5);
	                        break;
	                    case 7:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                        break;
	                    case 8:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                        break;
	                    case 9:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                        break;
	                    case 10:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                        break;
	                    case 11:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                        break;
	                    case 12:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                        break;
	                    case 13:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                        break;
	                    case 14:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                        break;
	                    case 15:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                        break;
	                    case 16:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                        break;
	                    case 17:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                        break;
	                    case 18:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                        break;
	                    case 19:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                        break;
	                    case 20:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                        break;
	                    default:
	                        throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
	                }
	            }
	            catch (e) {
	                throw new InstantiationError(this, e, e.stack, provider.key);
	            }
	            return obj;
	        };
	        ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
	            return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : THROW_IF_NOT_FOUND);
	        };
	        ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
	            if (key === INJECTOR_KEY) {
	                return this;
	            }
	            if (upperBoundVisibility instanceof Self) {
	                return this._getByKeySelf(key, notFoundValue);
	            }
	            else {
	                return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
	            }
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
	            if (notFoundValue !== THROW_IF_NOT_FOUND) {
	                return notFoundValue;
	            }
	            else {
	                throw new NoProviderError(this, key);
	            }
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
	            var obj = this._strategy.getObjByKeyId(key.id);
	            return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
	        };
	        /** @internal */
	        ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
	            var inj;
	            if (lowerBoundVisibility instanceof SkipSelf) {
	                inj = this._parent;
	            }
	            else {
	                inj = this;
	            }
	            while (inj instanceof ReflectiveInjector_) {
	                var inj_ = inj;
	                var obj = inj_._strategy.getObjByKeyId(key.id);
	                if (obj !== UNDEFINED)
	                    return obj;
	                inj = inj_._parent;
	            }
	            if (inj !== null) {
	                return inj.get(key.token, notFoundValue);
	            }
	            else {
	                return this._throwOrNull(key, notFoundValue);
	            }
	        };
	        Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
	            get: function () {
	                var providers = _mapProviders(this, function (b) { return ' "' + b.key.displayName + '" '; })
	                    .join(', ');
	                return "ReflectiveInjector(providers: [" + providers + "])";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
	        return ReflectiveInjector_;
	    }());
	    var INJECTOR_KEY = ReflectiveKey.get(Injector);
	    function _mapProviders(injector, fn) {
	        var res = new Array(injector._proto.numberOfProviders);
	        for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	            res[i] = fn(injector._proto.getProviderAtIndex(i));
	        }
	        return res;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Provides a hook for centralized exception handling.
	     *
	     * The default implementation of `ErrorHandler` prints error messages to the `Console`. To
	     * intercept error handling,
	     * write a custom exception handler that replaces this default as appropriate for your app.
	     *
	     * ### Example
	     *
	     * ```javascript
	     *
	     * class MyErrorHandler implements ErrorHandler {
	     *   call(error, stackTrace = null, reason = null) {
	     *     // do something with the exception
	     *   }
	     * }
	     *
	     * @NgModule({
	     *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
	     * })
	     * class MyModule {}
	     * ```
	     * @stable
	     */
	    var ErrorHandler = (function () {
	        function ErrorHandler(rethrowError) {
	            if (rethrowError === void 0) { rethrowError = true; }
	            /**
	             * @internal
	             */
	            this._console = console;
	            this.rethrowError = rethrowError;
	        }
	        ErrorHandler.prototype.handleError = function (error) {
	            var originalError = this._findOriginalError(error);
	            var originalStack = this._findOriginalStack(error);
	            var context = this._findContext(error);
	            this._console.error("EXCEPTION: " + this._extractMessage(error));
	            if (originalError) {
	                this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
	            }
	            if (originalStack) {
	                this._console.error('ORIGINAL STACKTRACE:');
	                this._console.error(originalStack);
	            }
	            if (context) {
	                this._console.error('ERROR CONTEXT:');
	                this._console.error(context);
	            }
	            // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	            // when an error happens. If we do not rethrow, bootstrap will always succeed.
	            if (this.rethrowError)
	                throw error;
	        };
	        /** @internal */
	        ErrorHandler.prototype._extractMessage = function (error) {
	            return error instanceof Error ? error.message : error.toString();
	        };
	        /** @internal */
	        ErrorHandler.prototype._findContext = function (error) {
	            if (error) {
	                return error.context ? error.context :
	                    this._findContext(error.originalError);
	            }
	            else {
	                return null;
	            }
	        };
	        /** @internal */
	        ErrorHandler.prototype._findOriginalError = function (error) {
	            var e = error.originalError;
	            while (e && e.originalError) {
	                e = e.originalError;
	            }
	            return e;
	        };
	        /** @internal */
	        ErrorHandler.prototype._findOriginalStack = function (error) {
	            if (!(error instanceof Error))
	                return null;
	            var e = error;
	            var stack = e.stack;
	            while (e instanceof Error && e.originalError) {
	                e = e.originalError;
	                if (e instanceof Error && e.stack) {
	                    stack = e.stack;
	                }
	            }
	            return stack;
	        };
	        return ErrorHandler;
	    }());
	
	    /**
	     * A function that will be executed when an application is initialized.
	     * @experimental
	     */
	    var APP_INITIALIZER = new OpaqueToken('Application Initializer');
	    /**
	     * A class that reflects the state of running {@link APP_INITIALIZER}s.
	     *
	     * @experimental
	     */
	    var ApplicationInitStatus = (function () {
	        function ApplicationInitStatus(appInits) {
	            var _this = this;
	            this._done = false;
	            var asyncInitPromises = [];
	            if (appInits) {
	                for (var i = 0; i < appInits.length; i++) {
	                    var initResult = appInits[i]();
	                    if (isPromise(initResult)) {
	                        asyncInitPromises.push(initResult);
	                    }
	                }
	            }
	            this._donePromise = Promise.all(asyncInitPromises).then(function () { _this._done = true; });
	            if (asyncInitPromises.length === 0) {
	                this._done = true;
	            }
	        }
	        Object.defineProperty(ApplicationInitStatus.prototype, "done", {
	            get: function () { return this._done; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
	            get: function () { return this._donePromise; },
	            enumerable: true,
	            configurable: true
	        });
	        ApplicationInitStatus.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ApplicationInitStatus.ctorParameters = [
	            { type: Array, decorators: [{ type: Inject, args: [APP_INITIALIZER,] }, { type: Optional },] },
	        ];
	        return ApplicationInitStatus;
	    }());
	
	    /**
	     * A DI Token representing a unique string id assigned to the application by Angular and used
	     * primarily for prefixing application attributes and CSS styles when
	     * {@link ViewEncapsulation#Emulated} is being used.
	     *
	     * If you need to avoid randomly generated value to be used as an application id, you can provide
	     * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
	     * using this token.
	     * @experimental
	     */
	    var APP_ID = new OpaqueToken('AppId');
	    function _appIdRandomProviderFactory() {
	        return "" + _randomChar() + _randomChar() + _randomChar();
	    }
	    /**
	     * Providers that will generate a random APP_ID_TOKEN.
	     * @experimental
	     */
	    var APP_ID_RANDOM_PROVIDER = {
	        provide: APP_ID,
	        useFactory: _appIdRandomProviderFactory,
	        deps: []
	    };
	    function _randomChar() {
	        return StringWrapper.fromCharCode(97 + Math.floor(Math.random() * 25));
	    }
	    /**
	     * A function that will be executed when a platform is initialized.
	     * @experimental
	     */
	    var PLATFORM_INITIALIZER = new OpaqueToken('Platform Initializer');
	    /**
	     * All callbacks provided via this token will be called for every component that is bootstrapped.
	     * Signature of the callback:
	     *
	     * `(componentRef: ComponentRef) => void`.
	     *
	     * @experimental
	     */
	    var APP_BOOTSTRAP_LISTENER = new OpaqueToken('appBootstrapListener');
	    /**
	     * A token which indicates the root directory of the application
	     * @experimental
	     */
	    var PACKAGE_ROOT_URL = new OpaqueToken('Application Packages Root URL');
	
	    var Console = (function () {
	        function Console() {
	        }
	        Console.prototype.log = function (message) { print(message); };
	        // Note: for reporting errors use `DOM.logError()` as it is platform specific
	        Console.prototype.warn = function (message) { warn(message); };
	        Console.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        Console.ctorParameters = [];
	        return Console;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a component is still being loaded in a synchronous compile.
	     *
	     * @stable
	     */
	    var ComponentStillLoadingError = (function (_super) {
	        __extends$4(ComponentStillLoadingError, _super);
	        function ComponentStillLoadingError(compType) {
	            _super.call(this, "Can't compile synchronously as " + stringify(compType) + " is still being loaded!");
	            this.compType = compType;
	        }
	        return ComponentStillLoadingError;
	    }(BaseError));
	    /**
	     * Combination of NgModuleFactory and ComponentFactorys.
	     *
	     * @experimental
	     */
	    var ModuleWithComponentFactories = (function () {
	        function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
	            this.ngModuleFactory = ngModuleFactory;
	            this.componentFactories = componentFactories;
	        }
	        return ModuleWithComponentFactories;
	    }());
	    function _throwError() {
	        throw new Error("Runtime compiler is not loaded");
	    }
	    /**
	     * Low-level service for running the angular compiler during runtime
	     * to create {@link ComponentFactory}s, which
	     * can later be used to create and render a Component instance.
	     *
	     * Each `@NgModule` provides an own `Compiler` to its injector,
	     * that will use the directives/pipes of the ng module for compilation
	     * of components.
	     * @stable
	     */
	    var Compiler = (function () {
	        function Compiler() {
	        }
	        /**
	         * Compiles the given NgModule and all of its components. All templates of the components listed
	         * in `entryComponents`
	         * have to be inlined. Otherwise throws a {@link ComponentStillLoadingError}.
	         */
	        Compiler.prototype.compileModuleSync = function (moduleType) { throw _throwError(); };
	        /**
	         * Compiles the given NgModule and all of its components
	         */
	        Compiler.prototype.compileModuleAsync = function (moduleType) { throw _throwError(); };
	        /**
	         * Same as {@link compileModuleSync} but also creates ComponentFactories for all components.
	         */
	        Compiler.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
	            throw _throwError();
	        };
	        /**
	         * Same as {@link compileModuleAsync} but also creates ComponentFactories for all components.
	         */
	        Compiler.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
	            throw _throwError();
	        };
	        /**
	         * Clears all caches.
	         */
	        Compiler.prototype.clearCache = function () { };
	        /**
	         * Clears the cache for the given component/ngModule.
	         */
	        Compiler.prototype.clearCacheFor = function (type) { };
	        return Compiler;
	    }());
	    /**
	     * Token to provide CompilerOptions in the platform injector.
	     *
	     * @experimental
	     */
	    var COMPILER_OPTIONS = new OpaqueToken('compilerOptions');
	    /**
	     * A factory for creating a Compiler
	     *
	     * @experimental
	     */
	    var CompilerFactory = (function () {
	        function CompilerFactory() {
	        }
	        return CompilerFactory;
	    }());
	
	    var DefaultIterableDifferFactory = (function () {
	        function DefaultIterableDifferFactory() {
	        }
	        DefaultIterableDifferFactory.prototype.supports = function (obj) { return isListLikeIterable(obj); };
	        DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
	            return new DefaultIterableDiffer(trackByFn);
	        };
	        return DefaultIterableDifferFactory;
	    }());
	    var trackByIdentity = function (index, item) { return item; };
	    /**
	     * @stable
	     */
	    var DefaultIterableDiffer = (function () {
	        function DefaultIterableDiffer(_trackByFn) {
	            this._trackByFn = _trackByFn;
	            this._length = null;
	            this._collection = null;
	            // Keeps track of the used records at any point in time (during & across `_check()` calls)
	            this._linkedRecords = null;
	            // Keeps track of the removed records at any point in time during `_check()` calls.
	            this._unlinkedRecords = null;
	            this._previousItHead = null;
	            this._itHead = null;
	            this._itTail = null;
	            this._additionsHead = null;
	            this._additionsTail = null;
	            this._movesHead = null;
	            this._movesTail = null;
	            this._removalsHead = null;
	            this._removalsTail = null;
	            // Keeps track of records where custom track by is the same, but item identity has changed
	            this._identityChangesHead = null;
	            this._identityChangesTail = null;
	            this._trackByFn = isPresent(this._trackByFn) ? this._trackByFn : trackByIdentity;
	        }
	        Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
	            get: function () { return this._collection; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
	            get: function () { return this._length; },
	            enumerable: true,
	            configurable: true
	        });
	        DefaultIterableDiffer.prototype.forEachItem = function (fn) {
	            var record;
	            for (record = this._itHead; record !== null; record = record._next) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachOperation = function (fn) {
	            var nextIt = this._itHead;
	            var nextRemove = this._removalsHead;
	            var addRemoveOffset = 0;
	            var moveOffsets = null;
	            while (nextIt || nextRemove) {
	                // Figure out which is the next record to process
	                // Order: remove, add, move
	                var record = !nextRemove ||
	                    nextIt &&
	                        nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ?
	                    nextIt :
	                    nextRemove;
	                var adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
	                var currentIndex = record.currentIndex;
	                // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
	                if (record === nextRemove) {
	                    addRemoveOffset--;
	                    nextRemove = nextRemove._nextRemoved;
	                }
	                else {
	                    nextIt = nextIt._next;
	                    if (record.previousIndex == null) {
	                        addRemoveOffset++;
	                    }
	                    else {
	                        // INVARIANT:  currentIndex < previousIndex
	                        if (!moveOffsets)
	                            moveOffsets = [];
	                        var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
	                        var localCurrentIndex = currentIndex - addRemoveOffset;
	                        if (localMovePreviousIndex != localCurrentIndex) {
	                            for (var i = 0; i < localMovePreviousIndex; i++) {
	                                var offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
	                                var index = offset + i;
	                                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
	                                    moveOffsets[i] = offset + 1;
	                                }
	                            }
	                            var previousIndex = record.previousIndex;
	                            moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
	                        }
	                    }
	                }
	                if (adjPreviousIndex !== currentIndex) {
	                    fn(record, adjPreviousIndex, currentIndex);
	                }
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
	            var record;
	            for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
	            var record;
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
	            var record;
	            for (record = this._movesHead; record !== null; record = record._nextMoved) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
	            var record;
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
	            var record;
	            for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
	                fn(record);
	            }
	        };
	        DefaultIterableDiffer.prototype.diff = function (collection) {
	            if (isBlank(collection))
	                collection = [];
	            if (!isListLikeIterable(collection)) {
	                throw new Error("Error trying to diff '" + collection + "'");
	            }
	            if (this.check(collection)) {
	                return this;
	            }
	            else {
	                return null;
	            }
	        };
	        DefaultIterableDiffer.prototype.onDestroy = function () { };
	        // todo(vicb): optim for UnmodifiableListView (frozen arrays)
	        DefaultIterableDiffer.prototype.check = function (collection) {
	            var _this = this;
	            this._reset();
	            var record = this._itHead;
	            var mayBeDirty = false;
	            var index;
	            var item;
	            var itemTrackBy;
	            if (isArray(collection)) {
	                var list = collection;
	                this._length = collection.length;
	                for (index = 0; index < this._length; index++) {
	                    item = list[index];
	                    itemTrackBy = this._trackByFn(index, item);
	                    if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
	                        record = this._mismatch(record, item, itemTrackBy, index);
	                        mayBeDirty = true;
	                    }
	                    else {
	                        if (mayBeDirty) {
	                            // TODO(misko): can we limit this to duplicates only?
	                            record = this._verifyReinsertion(record, item, itemTrackBy, index);
	                        }
	                        if (!looseIdentical(record.item, item))
	                            this._addIdentityChange(record, item);
	                    }
	                    record = record._next;
	                }
	            }
	            else {
	                index = 0;
	                iterateListLike(collection, function (item /** TODO #9100 */) {
	                    itemTrackBy = _this._trackByFn(index, item);
	                    if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
	                        record = _this._mismatch(record, item, itemTrackBy, index);
	                        mayBeDirty = true;
	                    }
	                    else {
	                        if (mayBeDirty) {
	                            // TODO(misko): can we limit this to duplicates only?
	                            record = _this._verifyReinsertion(record, item, itemTrackBy, index);
	                        }
	                        if (!looseIdentical(record.item, item))
	                            _this._addIdentityChange(record, item);
	                    }
	                    record = record._next;
	                    index++;
	                });
	                this._length = index;
	            }
	            this._truncate(record);
	            this._collection = collection;
	            return this.isDirty;
	        };
	        Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
	            /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
	             * changes.
	             */
	            get: function () {
	                return this._additionsHead !== null || this._movesHead !== null ||
	                    this._removalsHead !== null || this._identityChangesHead !== null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Reset the state of the change objects to show no changes. This means set previousKey to
	         * currentKey, and clear all of the queues (additions, moves, removals).
	         * Set the previousIndexes of moved and added items to their currentIndexes
	         * Reset the list of additions, moves and removals
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._reset = function () {
	            if (this.isDirty) {
	                var record;
	                var nextRecord;
	                for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	                    record._nextPrevious = record._next;
	                }
	                for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                    record.previousIndex = record.currentIndex;
	                }
	                this._additionsHead = this._additionsTail = null;
	                for (record = this._movesHead; record !== null; record = nextRecord) {
	                    record.previousIndex = record.currentIndex;
	                    nextRecord = record._nextMoved;
	                }
	                this._movesHead = this._movesTail = null;
	                this._removalsHead = this._removalsTail = null;
	                this._identityChangesHead = this._identityChangesTail = null;
	            }
	        };
	        /**
	         * This is the core function which handles differences between collections.
	         *
	         * - `record` is the record which we saw at this position last time. If null then it is a new
	         *   item.
	         * - `item` is the current item in the collection
	         * - `index` is the position of the item in the collection
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
	            // The previous record after which we will append the current one.
	            var previousRecord;
	            if (record === null) {
	                previousRecord = this._itTail;
	            }
	            else {
	                previousRecord = record._prev;
	                // Remove the record from the collection since we know it does not match the item.
	                this._remove(record);
	            }
	            // Attempt to see if we have seen the item before.
	            record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
	            if (record !== null) {
	                // We have seen this before, we need to move it forward in the collection.
	                // But first we need to check if identity changed, so we can update in view if necessary
	                if (!looseIdentical(record.item, item))
	                    this._addIdentityChange(record, item);
	                this._moveAfter(record, previousRecord, index);
	            }
	            else {
	                // Never seen it, check evicted list.
	                record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	                if (record !== null) {
	                    // It is an item which we have evicted earlier: reinsert it back into the list.
	                    // But first we need to check if identity changed, so we can update in view if necessary
	                    if (!looseIdentical(record.item, item))
	                        this._addIdentityChange(record, item);
	                    this._reinsertAfter(record, previousRecord, index);
	                }
	                else {
	                    // It is a new item: add it.
	                    record =
	                        this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
	                }
	            }
	            return record;
	        };
	        /**
	         * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
	         *
	         * Use case: `[a, a]` => `[b, a, a]`
	         *
	         * If we did not have this check then the insertion of `b` would:
	         *   1) evict first `a`
	         *   2) insert `b` at `0` index.
	         *   3) leave `a` at index `1` as is. <-- this is wrong!
	         *   3) reinsert `a` at index 2. <-- this is wrong!
	         *
	         * The correct behavior is:
	         *   1) evict first `a`
	         *   2) insert `b` at `0` index.
	         *   3) reinsert `a` at index 1.
	         *   3) move `a` at from `1` to `2`.
	         *
	         *
	         * Double check that we have not evicted a duplicate item. We need to check if the item type may
	         * have already been removed:
	         * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
	         * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
	         * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
	         * at the end.
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
	            var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	            if (reinsertRecord !== null) {
	                record = this._reinsertAfter(reinsertRecord, record._prev, index);
	            }
	            else if (record.currentIndex != index) {
	                record.currentIndex = index;
	                this._addToMoves(record, index);
	            }
	            return record;
	        };
	        /**
	         * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
	         *
	         * - `record` The first excess {@link CollectionChangeRecord}.
	         *
	         * @internal
	         */
	        DefaultIterableDiffer.prototype._truncate = function (record) {
	            // Anything after that needs to be removed;
	            while (record !== null) {
	                var nextRecord = record._next;
	                this._addToRemovals(this._unlink(record));
	                record = nextRecord;
	            }
	            if (this._unlinkedRecords !== null) {
	                this._unlinkedRecords.clear();
	            }
	            if (this._additionsTail !== null) {
	                this._additionsTail._nextAdded = null;
	            }
	            if (this._movesTail !== null) {
	                this._movesTail._nextMoved = null;
	            }
	            if (this._itTail !== null) {
	                this._itTail._next = null;
	            }
	            if (this._removalsTail !== null) {
	                this._removalsTail._nextRemoved = null;
	            }
	            if (this._identityChangesTail !== null) {
	                this._identityChangesTail._nextIdentityChange = null;
	            }
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
	            if (this._unlinkedRecords !== null) {
	                this._unlinkedRecords.remove(record);
	            }
	            var prev = record._prevRemoved;
	            var next = record._nextRemoved;
	            if (prev === null) {
	                this._removalsHead = next;
	            }
	            else {
	                prev._nextRemoved = next;
	            }
	            if (next === null) {
	                this._removalsTail = prev;
	            }
	            else {
	                next._prevRemoved = prev;
	            }
	            this._insertAfter(record, prevRecord, index);
	            this._addToMoves(record, index);
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
	            this._unlink(record);
	            this._insertAfter(record, prevRecord, index);
	            this._addToMoves(record, index);
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
	            this._insertAfter(record, prevRecord, index);
	            if (this._additionsTail === null) {
	                // todo(vicb)
	                // assert(this._additionsHead === null);
	                this._additionsTail = this._additionsHead = record;
	            }
	            else {
	                // todo(vicb)
	                // assert(_additionsTail._nextAdded === null);
	                // assert(record._nextAdded === null);
	                this._additionsTail = this._additionsTail._nextAdded = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
	            // todo(vicb)
	            // assert(record != prevRecord);
	            // assert(record._next === null);
	            // assert(record._prev === null);
	            var next = prevRecord === null ? this._itHead : prevRecord._next;
	            // todo(vicb)
	            // assert(next != record);
	            // assert(prevRecord != record);
	            record._next = next;
	            record._prev = prevRecord;
	            if (next === null) {
	                this._itTail = record;
	            }
	            else {
	                next._prev = record;
	            }
	            if (prevRecord === null) {
	                this._itHead = record;
	            }
	            else {
	                prevRecord._next = record;
	            }
	            if (this._linkedRecords === null) {
	                this._linkedRecords = new _DuplicateMap();
	            }
	            this._linkedRecords.put(record);
	            record.currentIndex = index;
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._remove = function (record) {
	            return this._addToRemovals(this._unlink(record));
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._unlink = function (record) {
	            if (this._linkedRecords !== null) {
	                this._linkedRecords.remove(record);
	            }
	            var prev = record._prev;
	            var next = record._next;
	            // todo(vicb)
	            // assert((record._prev = null) === null);
	            // assert((record._next = null) === null);
	            if (prev === null) {
	                this._itHead = next;
	            }
	            else {
	                prev._next = next;
	            }
	            if (next === null) {
	                this._itTail = prev;
	            }
	            else {
	                next._prev = prev;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
	            // todo(vicb)
	            // assert(record._nextMoved === null);
	            if (record.previousIndex === toIndex) {
	                return record;
	            }
	            if (this._movesTail === null) {
	                // todo(vicb)
	                // assert(_movesHead === null);
	                this._movesTail = this._movesHead = record;
	            }
	            else {
	                // todo(vicb)
	                // assert(_movesTail._nextMoved === null);
	                this._movesTail = this._movesTail._nextMoved = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addToRemovals = function (record) {
	            if (this._unlinkedRecords === null) {
	                this._unlinkedRecords = new _DuplicateMap();
	            }
	            this._unlinkedRecords.put(record);
	            record.currentIndex = null;
	            record._nextRemoved = null;
	            if (this._removalsTail === null) {
	                // todo(vicb)
	                // assert(_removalsHead === null);
	                this._removalsTail = this._removalsHead = record;
	                record._prevRemoved = null;
	            }
	            else {
	                // todo(vicb)
	                // assert(_removalsTail._nextRemoved === null);
	                // assert(record._nextRemoved === null);
	                record._prevRemoved = this._removalsTail;
	                this._removalsTail = this._removalsTail._nextRemoved = record;
	            }
	            return record;
	        };
	        /** @internal */
	        DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
	            record.item = item;
	            if (this._identityChangesTail === null) {
	                this._identityChangesTail = this._identityChangesHead = record;
	            }
	            else {
	                this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
	            }
	            return record;
	        };
	        DefaultIterableDiffer.prototype.toString = function () {
	            var list = [];
	            this.forEachItem(function (record /** TODO #9100 */) { return list.push(record); });
	            var previous = [];
	            this.forEachPreviousItem(function (record /** TODO #9100 */) { return previous.push(record); });
	            var additions = [];
	            this.forEachAddedItem(function (record /** TODO #9100 */) { return additions.push(record); });
	            var moves = [];
	            this.forEachMovedItem(function (record /** TODO #9100 */) { return moves.push(record); });
	            var removals = [];
	            this.forEachRemovedItem(function (record /** TODO #9100 */) { return removals.push(record); });
	            var identityChanges = [];
	            this.forEachIdentityChange(function (record /** TODO #9100 */) { return identityChanges.push(record); });
	            return 'collection: ' + list.join(', ') + '\n' +
	                'previous: ' + previous.join(', ') + '\n' +
	                'additions: ' + additions.join(', ') + '\n' +
	                'moves: ' + moves.join(', ') + '\n' +
	                'removals: ' + removals.join(', ') + '\n' +
	                'identityChanges: ' + identityChanges.join(', ') + '\n';
	        };
	        return DefaultIterableDiffer;
	    }());
	    /**
	     * @stable
	     */
	    var CollectionChangeRecord = (function () {
	        function CollectionChangeRecord(item, trackById) {
	            this.item = item;
	            this.trackById = trackById;
	            this.currentIndex = null;
	            this.previousIndex = null;
	            /** @internal */
	            this._nextPrevious = null;
	            /** @internal */
	            this._prev = null;
	            /** @internal */
	            this._next = null;
	            /** @internal */
	            this._prevDup = null;
	            /** @internal */
	            this._nextDup = null;
	            /** @internal */
	            this._prevRemoved = null;
	            /** @internal */
	            this._nextRemoved = null;
	            /** @internal */
	            this._nextAdded = null;
	            /** @internal */
	            this._nextMoved = null;
	            /** @internal */
	            this._nextIdentityChange = null;
	        }
	        CollectionChangeRecord.prototype.toString = function () {
	            return this.previousIndex === this.currentIndex ? stringify(this.item) :
	                stringify(this.item) + '[' +
	                    stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']';
	        };
	        return CollectionChangeRecord;
	    }());
	    // A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
	    var _DuplicateItemRecordList = (function () {
	        function _DuplicateItemRecordList() {
	            /** @internal */
	            this._head = null;
	            /** @internal */
	            this._tail = null;
	        }
	        /**
	         * Append the record to the list of duplicates.
	         *
	         * Note: by design all records in the list of duplicates hold the same value in record.item.
	         */
	        _DuplicateItemRecordList.prototype.add = function (record) {
	            if (this._head === null) {
	                this._head = this._tail = record;
	                record._nextDup = null;
	                record._prevDup = null;
	            }
	            else {
	                // todo(vicb)
	                // assert(record.item ==  _head.item ||
	                //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
	                this._tail._nextDup = record;
	                record._prevDup = this._tail;
	                record._nextDup = null;
	                this._tail = record;
	            }
	        };
	        // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
	        // CollectionChangeRecord.currentIndex >= afterIndex
	        _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
	            var record;
	            for (record = this._head; record !== null; record = record._nextDup) {
	                if ((afterIndex === null || afterIndex < record.currentIndex) &&
	                    looseIdentical(record.trackById, trackById)) {
	                    return record;
	                }
	            }
	            return null;
	        };
	        /**
	         * Remove one {@link CollectionChangeRecord} from the list of duplicates.
	         *
	         * Returns whether the list of duplicates is empty.
	         */
	        _DuplicateItemRecordList.prototype.remove = function (record) {
	            // todo(vicb)
	            // assert(() {
	            //  // verify that the record being removed is in the list.
	            //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
	            //    if (identical(cursor, record)) return true;
	            //  }
	            //  return false;
	            //});
	            var prev = record._prevDup;
	            var next = record._nextDup;
	            if (prev === null) {
	                this._head = next;
	            }
	            else {
	                prev._nextDup = next;
	            }
	            if (next === null) {
	                this._tail = prev;
	            }
	            else {
	                next._prevDup = prev;
	            }
	            return this._head === null;
	        };
	        return _DuplicateItemRecordList;
	    }());
	    var _DuplicateMap = (function () {
	        function _DuplicateMap() {
	            this.map = new Map();
	        }
	        _DuplicateMap.prototype.put = function (record) {
	            // todo(vicb) handle corner cases
	            var key = getMapKey(record.trackById);
	            var duplicates = this.map.get(key);
	            if (!isPresent(duplicates)) {
	                duplicates = new _DuplicateItemRecordList();
	                this.map.set(key, duplicates);
	            }
	            duplicates.add(record);
	        };
	        /**
	         * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
	         * have already iterated over, we use the afterIndex to pretend it is not there.
	         *
	         * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
	         * have any more `a`s needs to return the last `a` not the first or second.
	         */
	        _DuplicateMap.prototype.get = function (trackById, afterIndex) {
	            if (afterIndex === void 0) { afterIndex = null; }
	            var key = getMapKey(trackById);
	            var recordList = this.map.get(key);
	            return isBlank(recordList) ? null : recordList.get(trackById, afterIndex);
	        };
	        /**
	         * Removes a {@link CollectionChangeRecord} from the list of duplicates.
	         *
	         * The list of duplicates also is removed from the map if it gets empty.
	         */
	        _DuplicateMap.prototype.remove = function (record) {
	            var key = getMapKey(record.trackById);
	            // todo(vicb)
	            // assert(this.map.containsKey(key));
	            var recordList = this.map.get(key);
	            // Remove the list of duplicates when it gets empty
	            if (recordList.remove(record)) {
	                this.map.delete(key);
	            }
	            return record;
	        };
	        Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
	            get: function () { return this.map.size === 0; },
	            enumerable: true,
	            configurable: true
	        });
	        _DuplicateMap.prototype.clear = function () { this.map.clear(); };
	        _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + stringify(this.map) + ')'; };
	        return _DuplicateMap;
	    }());
	    function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
	        var previousIndex = item.previousIndex;
	        if (previousIndex === null)
	            return previousIndex;
	        var moveOffset = 0;
	        if (moveOffsets && previousIndex < moveOffsets.length) {
	            moveOffset = moveOffsets[previousIndex];
	        }
	        return previousIndex + addRemoveOffset + moveOffset;
	    }
	
	    var DefaultKeyValueDifferFactory = (function () {
	        function DefaultKeyValueDifferFactory() {
	        }
	        DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || isJsObject(obj); };
	        DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
	        return DefaultKeyValueDifferFactory;
	    }());
	    var DefaultKeyValueDiffer = (function () {
	        function DefaultKeyValueDiffer() {
	            this._records = new Map();
	            this._mapHead = null;
	            this._previousMapHead = null;
	            this._changesHead = null;
	            this._changesTail = null;
	            this._additionsHead = null;
	            this._additionsTail = null;
	            this._removalsHead = null;
	            this._removalsTail = null;
	        }
	        Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
	            get: function () {
	                return this._additionsHead !== null || this._changesHead !== null ||
	                    this._removalsHead !== null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
	            var record;
	            for (record = this._mapHead; record !== null; record = record._next) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
	            var record;
	            for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
	            var record;
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
	            var record;
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
	            var record;
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                fn(record);
	            }
	        };
	        DefaultKeyValueDiffer.prototype.diff = function (map) {
	            if (!map) {
	                map = new Map();
	            }
	            else if (!(map instanceof Map || isJsObject(map))) {
	                throw new Error("Error trying to diff '" + map + "'");
	            }
	            return this.check(map) ? this : null;
	        };
	        DefaultKeyValueDiffer.prototype.onDestroy = function () { };
	        DefaultKeyValueDiffer.prototype.check = function (map) {
	            var _this = this;
	            this._reset();
	            var records = this._records;
	            var oldSeqRecord = this._mapHead;
	            var lastOldSeqRecord = null;
	            var lastNewSeqRecord = null;
	            var seqChanged = false;
	            this._forEach(map, function (value, key) {
	                var newSeqRecord;
	                if (oldSeqRecord && key === oldSeqRecord.key) {
	                    newSeqRecord = oldSeqRecord;
	                    _this._maybeAddToChanges(newSeqRecord, value);
	                }
	                else {
	                    seqChanged = true;
	                    if (oldSeqRecord !== null) {
	                        _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	                        _this._addToRemovals(oldSeqRecord);
	                    }
	                    if (records.has(key)) {
	                        newSeqRecord = records.get(key);
	                        _this._maybeAddToChanges(newSeqRecord, value);
	                    }
	                    else {
	                        newSeqRecord = new KeyValueChangeRecord(key);
	                        records.set(key, newSeqRecord);
	                        newSeqRecord.currentValue = value;
	                        _this._addToAdditions(newSeqRecord);
	                    }
	                }
	                if (seqChanged) {
	                    if (_this._isInRemovals(newSeqRecord)) {
	                        _this._removeFromRemovals(newSeqRecord);
	                    }
	                    if (lastNewSeqRecord == null) {
	                        _this._mapHead = newSeqRecord;
	                    }
	                    else {
	                        lastNewSeqRecord._next = newSeqRecord;
	                    }
	                }
	                lastOldSeqRecord = oldSeqRecord;
	                lastNewSeqRecord = newSeqRecord;
	                oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
	            });
	            this._truncate(lastOldSeqRecord, oldSeqRecord);
	            return this.isDirty;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._reset = function () {
	            if (this.isDirty) {
	                var record = void 0;
	                // Record the state of the mapping
	                for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	                    record._nextPrevious = record._next;
	                }
	                for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                    record.previousValue = record.currentValue;
	                }
	                for (record = this._additionsHead; record != null; record = record._nextAdded) {
	                    record.previousValue = record.currentValue;
	                }
	                this._changesHead = this._changesTail = null;
	                this._additionsHead = this._additionsTail = null;
	                this._removalsHead = this._removalsTail = null;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
	            while (record !== null) {
	                if (lastRecord === null) {
	                    this._mapHead = null;
	                }
	                else {
	                    lastRecord._next = null;
	                }
	                var nextRecord = record._next;
	                this._addToRemovals(record);
	                lastRecord = record;
	                record = nextRecord;
	            }
	            for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
	                rec.previousValue = rec.currentValue;
	                rec.currentValue = null;
	                this._records.delete(rec.key);
	            }
	        };
	        DefaultKeyValueDiffer.prototype._maybeAddToChanges = function (record, newValue) {
	            if (!looseIdentical(newValue, record.currentValue)) {
	                record.previousValue = record.currentValue;
	                record.currentValue = newValue;
	                this._addToChanges(record);
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
	            return record === this._removalsHead || record._nextRemoved !== null ||
	                record._prevRemoved !== null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
	            if (this._removalsHead === null) {
	                this._removalsHead = this._removalsTail = record;
	            }
	            else {
	                this._removalsTail._nextRemoved = record;
	                record._prevRemoved = this._removalsTail;
	                this._removalsTail = record;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
	            var next = record._next;
	            if (prev === null) {
	                this._mapHead = next;
	            }
	            else {
	                prev._next = next;
	            }
	            record._next = null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
	            var prev = record._prevRemoved;
	            var next = record._nextRemoved;
	            if (prev === null) {
	                this._removalsHead = next;
	            }
	            else {
	                prev._nextRemoved = next;
	            }
	            if (next === null) {
	                this._removalsTail = prev;
	            }
	            else {
	                next._prevRemoved = prev;
	            }
	            record._prevRemoved = record._nextRemoved = null;
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
	            if (this._additionsHead === null) {
	                this._additionsHead = this._additionsTail = record;
	            }
	            else {
	                this._additionsTail._nextAdded = record;
	                this._additionsTail = record;
	            }
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
	            if (this._changesHead === null) {
	                this._changesHead = this._changesTail = record;
	            }
	            else {
	                this._changesTail._nextChanged = record;
	                this._changesTail = record;
	            }
	        };
	        DefaultKeyValueDiffer.prototype.toString = function () {
	            var items = [];
	            var previous = [];
	            var changes = [];
	            var additions = [];
	            var removals = [];
	            var record;
	            for (record = this._mapHead; record !== null; record = record._next) {
	                items.push(stringify(record));
	            }
	            for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	                previous.push(stringify(record));
	            }
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                changes.push(stringify(record));
	            }
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                additions.push(stringify(record));
	            }
	            for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	                removals.push(stringify(record));
	            }
	            return 'map: ' + items.join(', ') + '\n' +
	                'previous: ' + previous.join(', ') + '\n' +
	                'additions: ' + additions.join(', ') + '\n' +
	                'changes: ' + changes.join(', ') + '\n' +
	                'removals: ' + removals.join(', ') + '\n';
	        };
	        /** @internal */
	        DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
	            if (obj instanceof Map) {
	                obj.forEach(fn);
	            }
	            else {
	                StringMapWrapper.forEach(obj, fn);
	            }
	        };
	        return DefaultKeyValueDiffer;
	    }());
	    /**
	     * @stable
	     */
	    var KeyValueChangeRecord = (function () {
	        function KeyValueChangeRecord(key) {
	            this.key = key;
	            this.previousValue = null;
	            this.currentValue = null;
	            /** @internal */
	            this._nextPrevious = null;
	            /** @internal */
	            this._next = null;
	            /** @internal */
	            this._nextAdded = null;
	            /** @internal */
	            this._nextRemoved = null;
	            /** @internal */
	            this._prevRemoved = null;
	            /** @internal */
	            this._nextChanged = null;
	        }
	        KeyValueChangeRecord.prototype.toString = function () {
	            return looseIdentical(this.previousValue, this.currentValue) ?
	                stringify(this.key) :
	                (stringify(this.key) + '[' + stringify(this.previousValue) + '->' +
	                    stringify(this.currentValue) + ']');
	        };
	        return KeyValueChangeRecord;
	    }());
	
	    /**
	     * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
	     * @stable
	     */
	    var IterableDiffers = (function () {
	        function IterableDiffers(factories) {
	            this.factories = factories;
	        }
	        IterableDiffers.create = function (factories, parent) {
	            if (isPresent(parent)) {
	                var copied = ListWrapper.clone(parent.factories);
	                factories = factories.concat(copied);
	                return new IterableDiffers(factories);
	            }
	            else {
	                return new IterableDiffers(factories);
	            }
	        };
	        /**
	         * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	         * inherited {@link IterableDiffers} instance with the provided factories and return a new
	         * {@link IterableDiffers} instance.
	         *
	         * The following example shows how to extend an existing list of factories,
	               * which will only be applied to the injector for this component and its children.
	               * This step is all that's required to make a new {@link IterableDiffer} available.
	         *
	         * ### Example
	         *
	         * ```
	         * @Component({
	         *   viewProviders: [
	         *     IterableDiffers.extend([new ImmutableListDiffer()])
	         *   ]
	         * })
	         * ```
	         */
	        IterableDiffers.extend = function (factories) {
	            return {
	                provide: IterableDiffers,
	                useFactory: function (parent) {
	                    if (isBlank(parent)) {
	                        // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
	                        // to
	                        // bootstrap(), which would override default pipes instead of extending them.
	                        throw new Error('Cannot extend IterableDiffers without a parent injector');
	                    }
	                    return IterableDiffers.create(factories, parent);
	                },
	                // Dependency technically isn't optional, but we can provide a better error message this way.
	                deps: [[IterableDiffers, new SkipSelf(), new Optional()]]
	            };
	        };
	        IterableDiffers.prototype.find = function (iterable) {
	            var factory = this.factories.find(function (f) { return f.supports(iterable); });
	            if (isPresent(factory)) {
	                return factory;
	            }
	            else {
	                throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + getTypeNameForDebugging(iterable) + "'");
	            }
	        };
	        return IterableDiffers;
	    }());
	
	    /**
	     * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
	     * @stable
	     */
	    var KeyValueDiffers = (function () {
	        function KeyValueDiffers(factories) {
	            this.factories = factories;
	        }
	        KeyValueDiffers.create = function (factories, parent) {
	            if (isPresent(parent)) {
	                var copied = ListWrapper.clone(parent.factories);
	                factories = factories.concat(copied);
	                return new KeyValueDiffers(factories);
	            }
	            else {
	                return new KeyValueDiffers(factories);
	            }
	        };
	        /**
	         * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	         * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	         * {@link KeyValueDiffers} instance.
	         *
	         * The following example shows how to extend an existing list of factories,
	               * which will only be applied to the injector for this component and its children.
	               * This step is all that's required to make a new {@link KeyValueDiffer} available.
	         *
	         * ### Example
	         *
	         * ```
	         * @Component({
	         *   viewProviders: [
	         *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	         *   ]
	         * })
	         * ```
	         */
	        KeyValueDiffers.extend = function (factories) {
	            return {
	                provide: KeyValueDiffers,
	                useFactory: function (parent) {
	                    if (isBlank(parent)) {
	                        // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
	                        // to
	                        // bootstrap(), which would override default pipes instead of extending them.
	                        throw new Error('Cannot extend KeyValueDiffers without a parent injector');
	                    }
	                    return KeyValueDiffers.create(factories, parent);
	                },
	                // Dependency technically isn't optional, but we can provide a better error message this way.
	                deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
	            };
	        };
	        KeyValueDiffers.prototype.find = function (kv) {
	            var factory = this.factories.find(function (f) { return f.supports(kv); });
	            if (isPresent(factory)) {
	                return factory;
	            }
	            else {
	                throw new Error("Cannot find a differ supporting object '" + kv + "'");
	            }
	        };
	        return KeyValueDiffers;
	    }());
	
	    var UNINITIALIZED = {
	        toString: function () { return 'CD_INIT_VALUE'; }
	    };
	    function devModeEqual(a, b) {
	        if (isListLikeIterable(a) && isListLikeIterable(b)) {
	            return areIterablesEqual(a, b, devModeEqual);
	        }
	        else if (!isListLikeIterable(a) && !isPrimitive(a) && !isListLikeIterable(b) && !isPrimitive(b)) {
	            return true;
	        }
	        else {
	            return looseIdentical(a, b);
	        }
	    }
	    /**
	     * Indicates that the result of a {@link Pipe} transformation has changed even though the
	     * reference
	     * has not changed.
	     *
	     * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
	     *
	     * Example:
	     *
	     * ```
	     * if (this._latestValue === this._latestReturnedValue) {
	     *    return this._latestReturnedValue;
	     *  } else {
	     *    this._latestReturnedValue = this._latestValue;
	     *    return WrappedValue.wrap(this._latestValue); // this will force update
	     *  }
	     * ```
	     * @stable
	     */
	    var WrappedValue = (function () {
	        function WrappedValue(wrapped) {
	            this.wrapped = wrapped;
	        }
	        WrappedValue.wrap = function (value) { return new WrappedValue(value); };
	        return WrappedValue;
	    }());
	    /**
	     * Helper class for unwrapping WrappedValue s
	     */
	    var ValueUnwrapper = (function () {
	        function ValueUnwrapper() {
	            this.hasWrappedValue = false;
	        }
	        ValueUnwrapper.prototype.unwrap = function (value) {
	            if (value instanceof WrappedValue) {
	                this.hasWrappedValue = true;
	                return value.wrapped;
	            }
	            return value;
	        };
	        ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
	        return ValueUnwrapper;
	    }());
	    /**
	     * Represents a basic change from a previous to a new value.
	     * @stable
	     */
	    var SimpleChange = (function () {
	        function SimpleChange(previousValue, currentValue) {
	            this.previousValue = previousValue;
	            this.currentValue = currentValue;
	        }
	        /**
	         * Check whether the new value is the first value assigned.
	         */
	        SimpleChange.prototype.isFirstChange = function () { return this.previousValue === UNINITIALIZED; };
	        return SimpleChange;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @stable
	     */
	    var ChangeDetectorRef = (function () {
	        function ChangeDetectorRef() {
	        }
	        return ChangeDetectorRef;
	    }());
	
	    /**
	     * Structural diffing for `Object`s and `Map`s.
	     */
	    var keyValDiff = [new DefaultKeyValueDifferFactory()];
	    /**
	     * Structural diffing for `Iterable` types such as `Array`s.
	     */
	    var iterableDiff = [new DefaultIterableDifferFactory()];
	    var defaultIterableDiffers = new IterableDiffers(iterableDiff);
	    var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);
	
	    /**
	     * @experimental
	     */
	    // TODO (matsko): add typing for the animation function
	    var RenderComponentType = (function () {
	        function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
	            this.id = id;
	            this.templateUrl = templateUrl;
	            this.slotCount = slotCount;
	            this.encapsulation = encapsulation;
	            this.styles = styles;
	            this.animations = animations;
	        }
	        return RenderComponentType;
	    }());
	    var RenderDebugInfo = (function () {
	        function RenderDebugInfo() {
	        }
	        Object.defineProperty(RenderDebugInfo.prototype, "injector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "component", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "references", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "context", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RenderDebugInfo.prototype, "source", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return RenderDebugInfo;
	    }());
	    /**
	     * @experimental
	     */
	    var Renderer = (function () {
	        function Renderer() {
	        }
	        return Renderer;
	    }());
	    /**
	     * Injectable service that provides a low-level interface for modifying the UI.
	     *
	     * Use this service to bypass Angular's templating and make custom UI changes that can't be
	     * expressed declaratively. For example if you need to set a property or an attribute whose name is
	     * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
	     * respectively.
	     *
	     * If you are implementing a custom renderer, you must implement this interface.
	     *
	     * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
	     * @experimental
	     */
	    var RootRenderer = (function () {
	        function RootRenderer() {
	        }
	        return RootRenderer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
	     * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
	     * handled.
	     *
	     * See DomSanitizer for more details on security in Angular applications.
	     *
	     * @stable
	     */
	    exports.SecurityContext;
	    (function (SecurityContext) {
	        SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
	        SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
	        SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
	        SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
	        SecurityContext[SecurityContext["URL"] = 4] = "URL";
	        SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
	    })(exports.SecurityContext || (exports.SecurityContext = {}));
	    /**
	     * Sanitizer is used by the views to sanitize potentially dangerous values.
	     *
	     * @stable
	     */
	    var Sanitizer = (function () {
	        function Sanitizer() {
	        }
	        return Sanitizer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * A wrapper around a native element inside of a View.
	     *
	     * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
	     * element.
	     *
	     * @security Permitting direct access to the DOM can make your application more vulnerable to
	     * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
	     * [Security Guide](http://g.co/ng/security).
	     *
	     * @stable
	     */
	    // Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
	    // i.e. users have to ask for what they need. With that, we can build better analysis tools
	    // and could do better codegen in the future.
	    var ElementRef = (function () {
	        function ElementRef(nativeElement) {
	            this.nativeElement = nativeElement;
	        }
	        return ElementRef;
	    }());
	
	    var trace;
	    var events;
	    function detectWTF() {
	        var wtf = global$1['wtf'];
	        if (wtf) {
	            trace = wtf['trace'];
	            if (trace) {
	                events = trace['events'];
	                return true;
	            }
	        }
	        return false;
	    }
	    function createScope(signature, flags) {
	        if (flags === void 0) { flags = null; }
	        return events.createScope(signature, flags);
	    }
	    function leave(scope, returnValue) {
	        trace.leaveScope(scope, returnValue);
	        return returnValue;
	    }
	    function startTimeRange(rangeType, action) {
	        return trace.beginTimeRange(rangeType, action);
	    }
	    function endTimeRange(range) {
	        trace.endTimeRange(range);
	    }
	
	    /**
	     * True if WTF is enabled.
	     */
	    var wtfEnabled = detectWTF();
	    function noopScope(arg0, arg1) {
	        return null;
	    }
	    /**
	     * Create trace scope.
	     *
	     * Scopes must be strictly nested and are analogous to stack frames, but
	     * do not have to follow the stack frames. Instead it is recommended that they follow logical
	     * nesting. You may want to use
	     * [Event
	     * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
	     * as they are defined in WTF.
	     *
	     * Used to mark scope entry. The return value is used to leave the scope.
	     *
	     *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
	     *
	     *     someMethod() {
	     *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
	     *        // DO SOME WORK HERE
	     *        return wtfLeave(s, 123); // Return value 123
	     *     }
	     *
	     * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
	     * negatively impact the performance of your application. For this reason we recommend that
	     * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
	     * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
	     * exception, will produce incorrect trace, but presence of exception signifies logic error which
	     * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
	     * an exception is expected during normal execution while profiling.
	     *
	     * @experimental
	     */
	    var wtfCreateScope = wtfEnabled ? createScope : function (signature, flags) { return noopScope; };
	    /**
	     * Used to mark end of Scope.
	     *
	     * - `scope` to end.
	     * - `returnValue` (optional) to be passed to the WTF.
	     *
	     * Returns the `returnValue for easy chaining.
	     * @experimental
	     */
	    var wtfLeave = wtfEnabled ? leave : function (s, r) { return r; };
	    /**
	     * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
	     * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
	     * enabled.
	     *
	     *     someMethod() {
	     *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
	     *        var future = new Future.delay(5).then((_) {
	     *          wtfEndTimeRange(s);
	     *        });
	     *     }
	     * @experimental
	     */
	    var wtfStartTimeRange = wtfEnabled ? startTimeRange : function (rangeType, action) { return null; };
	    /**
	     * Ends a async time range operation.
	     * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
	     * enabled.
	     * @experimental
	     */
	    var wtfEndTimeRange = wtfEnabled ? endTimeRange : function (r) { return null; };
	
	    /**
	     * Represents a container where one or more Views can be attached.
	     *
	     * The container can contain two kinds of Views. Host Views, created by instantiating a
	     * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
	     * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
	     *
	     * The location of the View Container within the containing View is specified by the Anchor
	     * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
	     * have a single View Container.
	     *
	     * Root elements of Views attached to this container become siblings of the Anchor Element in
	     * the Rendered View.
	     *
	     * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
	     * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
	     * @stable
	     */
	    var ViewContainerRef = (function () {
	        function ViewContainerRef() {
	        }
	        Object.defineProperty(ViewContainerRef.prototype, "element", {
	            /**
	             * Anchor element that specifies the location of this container in the containing View.
	             * <!-- TODO: rename to anchorElement -->
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "injector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef.prototype, "length", {
	            /**
	             * Returns the number of Views currently attached to this container.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return ViewContainerRef;
	    }());
	    var ViewContainerRef_ = (function () {
	        function ViewContainerRef_(_element) {
	            this._element = _element;
	            /** @internal */
	            this._createComponentInContainerScope = wtfCreateScope('ViewContainerRef#createComponent()');
	            /** @internal */
	            this._insertScope = wtfCreateScope('ViewContainerRef#insert()');
	            /** @internal */
	            this._removeScope = wtfCreateScope('ViewContainerRef#remove()');
	            /** @internal */
	            this._detachScope = wtfCreateScope('ViewContainerRef#detach()');
	        }
	        ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
	        Object.defineProperty(ViewContainerRef_.prototype, "length", {
	            get: function () {
	                var views = this._element.nestedViews;
	                return isPresent(views) ? views.length : 0;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "element", {
	            get: function () { return this._element.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "injector", {
	            get: function () { return this._element.injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
	            get: function () { return this._element.parentInjector; },
	            enumerable: true,
	            configurable: true
	        });
	        // TODO(rado): profile and decide whether bounds checks should be added
	        // to the methods below.
	        ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
	            if (context === void 0) { context = null; }
	            if (index === void 0) { index = -1; }
	            var viewRef = templateRef.createEmbeddedView(context);
	            this.insert(viewRef, index);
	            return viewRef;
	        };
	        ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
	            if (index === void 0) { index = -1; }
	            if (injector === void 0) { injector = null; }
	            if (projectableNodes === void 0) { projectableNodes = null; }
	            var s = this._createComponentInContainerScope();
	            var contextInjector = isPresent(injector) ? injector : this._element.parentInjector;
	            var componentRef = componentFactory.create(contextInjector, projectableNodes);
	            this.insert(componentRef.hostView, index);
	            return wtfLeave(s, componentRef);
	        };
	        // TODO(i): refactor insert+remove into move
	        ViewContainerRef_.prototype.insert = function (viewRef, index) {
	            if (index === void 0) { index = -1; }
	            var s = this._insertScope();
	            if (index == -1)
	                index = this.length;
	            var viewRef_ = viewRef;
	            this._element.attachView(viewRef_.internalView, index);
	            return wtfLeave(s, viewRef_);
	        };
	        ViewContainerRef_.prototype.move = function (viewRef, currentIndex) {
	            var s = this._insertScope();
	            if (currentIndex == -1)
	                return;
	            var viewRef_ = viewRef;
	            this._element.moveView(viewRef_.internalView, currentIndex);
	            return wtfLeave(s, viewRef_);
	        };
	        ViewContainerRef_.prototype.indexOf = function (viewRef) {
	            return ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
	        };
	        // TODO(i): rename to destroy
	        ViewContainerRef_.prototype.remove = function (index) {
	            if (index === void 0) { index = -1; }
	            var s = this._removeScope();
	            if (index == -1)
	                index = this.length - 1;
	            var view = this._element.detachView(index);
	            view.destroy();
	            // view is intentionally not returned to the client.
	            wtfLeave(s);
	        };
	        // TODO(i): refactor insert+remove into move
	        ViewContainerRef_.prototype.detach = function (index) {
	            if (index === void 0) { index = -1; }
	            var s = this._detachScope();
	            if (index == -1)
	                index = this.length - 1;
	            var view = this._element.detachView(index);
	            return wtfLeave(s, view.ref);
	        };
	        ViewContainerRef_.prototype.clear = function () {
	            for (var i = this.length - 1; i >= 0; i--) {
	                this.remove(i);
	            }
	        };
	        return ViewContainerRef_;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var ViewType;
	    (function (ViewType) {
	        // A view that contains the host element with bound component directive.
	        // Contains a COMPONENT view
	        ViewType[ViewType["HOST"] = 0] = "HOST";
	        // The view of the component
	        // Can contain 0 to n EMBEDDED views
	        ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
	        // A view that is embedded into another View via a <template> element
	        // inside of a COMPONENT view
	        ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
	    })(ViewType || (ViewType = {}));
	
	    /**
	     * An AppElement is created for elements that have a ViewContainerRef,
	     * a nested component or a <template> element to keep data around
	     * that is needed for later instantiations.
	     */
	    var AppElement = (function () {
	        function AppElement(index, parentIndex, parentView, nativeElement) {
	            this.index = index;
	            this.parentIndex = parentIndex;
	            this.parentView = parentView;
	            this.nativeElement = nativeElement;
	            this.nestedViews = null;
	            this.componentView = null;
	        }
	        Object.defineProperty(AppElement.prototype, "elementRef", {
	            get: function () { return new ElementRef(this.nativeElement); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppElement.prototype, "vcRef", {
	            get: function () { return new ViewContainerRef_(this); },
	            enumerable: true,
	            configurable: true
	        });
	        AppElement.prototype.initComponent = function (component, componentConstructorViewQueries, view) {
	            this.component = component;
	            this.componentConstructorViewQueries = componentConstructorViewQueries;
	            this.componentView = view;
	        };
	        Object.defineProperty(AppElement.prototype, "parentInjector", {
	            get: function () { return this.parentView.injector(this.parentIndex); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppElement.prototype, "injector", {
	            get: function () { return this.parentView.injector(this.index); },
	            enumerable: true,
	            configurable: true
	        });
	        AppElement.prototype.mapNestedViews = function (nestedViewClass, callback) {
	            var result = [];
	            if (isPresent(this.nestedViews)) {
	                this.nestedViews.forEach(function (nestedView) {
	                    if (nestedView.clazz === nestedViewClass) {
	                        result.push(callback(nestedView));
	                    }
	                });
	            }
	            return result;
	        };
	        AppElement.prototype.moveView = function (view, currentIndex) {
	            var previousIndex = this.nestedViews.indexOf(view);
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            var nestedViews = this.nestedViews;
	            if (nestedViews == null) {
	                nestedViews = [];
	                this.nestedViews = nestedViews;
	            }
	            ListWrapper.removeAt(nestedViews, previousIndex);
	            ListWrapper.insert(nestedViews, currentIndex, view);
	            var refRenderNode;
	            if (currentIndex > 0) {
	                var prevView = nestedViews[currentIndex - 1];
	                refRenderNode = prevView.lastRootNode;
	            }
	            else {
	                refRenderNode = this.nativeElement;
	            }
	            if (isPresent(refRenderNode)) {
	                view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	            }
	            view.markContentChildAsMoved(this);
	        };
	        AppElement.prototype.attachView = function (view, viewIndex) {
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            var nestedViews = this.nestedViews;
	            if (nestedViews == null) {
	                nestedViews = [];
	                this.nestedViews = nestedViews;
	            }
	            ListWrapper.insert(nestedViews, viewIndex, view);
	            var refRenderNode;
	            if (viewIndex > 0) {
	                var prevView = nestedViews[viewIndex - 1];
	                refRenderNode = prevView.lastRootNode;
	            }
	            else {
	                refRenderNode = this.nativeElement;
	            }
	            if (isPresent(refRenderNode)) {
	                view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	            }
	            view.addToContentChildren(this);
	        };
	        AppElement.prototype.detachView = function (viewIndex) {
	            var view = ListWrapper.removeAt(this.nestedViews, viewIndex);
	            if (view.type === ViewType.COMPONENT) {
	                throw new Error("Component views can't be moved!");
	            }
	            view.detach();
	            view.removeFromContentChildren(this);
	            return view;
	        };
	        return AppElement;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * An error thrown if application changes model breaking the top-down data flow.
	     *
	     * This exception is only thrown in dev mode.
	     *
	     * <!-- TODO: Add a link once the dev mode option is configurable -->
	     *
	     * ### Example
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'parent',
	     *   template: `
	     *     <child [prop]="parentProp"></child>
	     *   `,
	     *   directives: [forwardRef(() => Child)]
	     * })
	     * class Parent {
	     *   parentProp = "init";
	     * }
	     *
	     * @Directive({selector: 'child', inputs: ['prop']})
	     * class Child {
	     *   constructor(public parent: Parent) {}
	     *
	     *   set prop(v) {
	     *     // this updates the parent property, which is disallowed during change detection
	     *     // this will result in ExpressionChangedAfterItHasBeenCheckedError
	     *     this.parent.parentProp = "updated";
	     *   }
	     * }
	     * ```
	     * @stable
	     */
	    var ExpressionChangedAfterItHasBeenCheckedError = (function (_super) {
	        __extends$6(ExpressionChangedAfterItHasBeenCheckedError, _super);
	        function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
	            var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
	            if (oldValue === UNINITIALIZED) {
	                msg +=
	                    " It seems like the view has been created after its parent and its children have been dirty checked." +
	                        " Has it been created in a change detection hook ?";
	            }
	            _super.call(this, msg);
	        }
	        return ExpressionChangedAfterItHasBeenCheckedError;
	    }(BaseError));
	    /**
	     * Thrown when an exception was raised during view creation, change detection or destruction.
	     *
	     * This error wraps the original exception to attach additional contextual information that can
	     * be useful for debugging.
	     * @stable
	     */
	    var ViewWrappedError = (function (_super) {
	        __extends$6(ViewWrappedError, _super);
	        function ViewWrappedError(originalError, context) {
	            _super.call(this, "Error in " + context.source, originalError);
	            this.context = context;
	        }
	        return ViewWrappedError;
	    }(WrappedError));
	    /**
	     * Thrown when a destroyed view is used.
	     *
	     * This error indicates a bug in the framework.
	     *
	     * This is an internal Angular error.
	     * @stable
	     */
	    var ViewDestroyedError = (function (_super) {
	        __extends$6(ViewDestroyedError, _super);
	        function ViewDestroyedError(details) {
	            _super.call(this, "Attempt to use a destroyed view: " + details);
	        }
	        return ViewDestroyedError;
	    }(BaseError));
	
	    var ViewUtils = (function () {
	        function ViewUtils(_renderer, _appId, sanitizer) {
	            this._renderer = _renderer;
	            this._appId = _appId;
	            this._nextCompTypeId = 0;
	            this.sanitizer = sanitizer;
	        }
	        /**
	         * Used by the generated code
	         */
	        // TODO (matsko): add typing for the animation function
	        ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles, animations) {
	            return new RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
	        };
	        /** @internal */
	        ViewUtils.prototype.renderComponent = function (renderComponentType) {
	            return this._renderer.renderComponent(renderComponentType);
	        };
	        ViewUtils.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ViewUtils.ctorParameters = [
	            { type: RootRenderer, },
	            { type: undefined, decorators: [{ type: Inject, args: [APP_ID,] },] },
	            { type: Sanitizer, },
	        ];
	        return ViewUtils;
	    }());
	    function flattenNestedViewRenderNodes(nodes) {
	        return _flattenNestedViewRenderNodes(nodes, []);
	    }
	    function _flattenNestedViewRenderNodes(nodes, renderNodes) {
	        for (var i = 0; i < nodes.length; i++) {
	            var node = nodes[i];
	            if (node instanceof AppElement) {
	                var appEl = node;
	                renderNodes.push(appEl.nativeElement);
	                if (isPresent(appEl.nestedViews)) {
	                    for (var k = 0; k < appEl.nestedViews.length; k++) {
	                        _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
	                    }
	                }
	            }
	            else {
	                renderNodes.push(node);
	            }
	        }
	        return renderNodes;
	    }
	    var EMPTY_ARR = [];
	    function ensureSlotCount(projectableNodes, expectedSlotCount) {
	        var res;
	        if (isBlank(projectableNodes)) {
	            res = EMPTY_ARR;
	        }
	        else if (projectableNodes.length < expectedSlotCount) {
	            var givenSlotCount = projectableNodes.length;
	            res = ListWrapper.createFixedSize(expectedSlotCount);
	            for (var i = 0; i < expectedSlotCount; i++) {
	                res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
	            }
	        }
	        else {
	            res = projectableNodes;
	        }
	        return res;
	    }
	    var MAX_INTERPOLATION_VALUES = 9;
	    function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
	        switch (valueCount) {
	            case 1:
	                return c0 + _toStringWithNull(a1) + c1;
	            case 2:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
	            case 3:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3;
	            case 4:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4;
	            case 5:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
	            case 6:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
	            case 7:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7;
	            case 8:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
	            case 9:
	                return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                    c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                    c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
	            default:
	                throw new Error("Does not support more than 9 expressions");
	        }
	    }
	    function _toStringWithNull(v) {
	        return v != null ? v.toString() : '';
	    }
	    function checkBinding(throwOnChange, oldValue, newValue) {
	        if (throwOnChange) {
	            if (!devModeEqual(oldValue, newValue)) {
	                throw new ExpressionChangedAfterItHasBeenCheckedError(oldValue, newValue);
	            }
	            return false;
	        }
	        else {
	            return !looseIdentical(oldValue, newValue);
	        }
	    }
	    function castByValue(input, value) {
	        return input;
	    }
	    var EMPTY_ARRAY = [];
	    var EMPTY_MAP = {};
	    function pureProxy1(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        return function (p0) {
	            if (!looseIdentical(v0, p0)) {
	                v0 = p0;
	                result = fn(p0);
	            }
	            return result;
	        };
	    }
	    function pureProxy2(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        var v1 = UNINITIALIZED;
	        return function (p0, p1) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1)) {
	                v0 = p0;
	                v1 = p1;
	                result = fn(p0, p1);
	            }
	            return result;
	        };
	    }
	    function pureProxy3(fn) {
	        var result;
	        var v0 = UNINITIALIZED;
	        var v1 = UNINITIALIZED;
	        var v2 = UNINITIALIZED;
	        return function (p0, p1, p2) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                result = fn(p0, p1, p2);
	            }
	            return result;
	        };
	    }
	    function pureProxy4(fn) {
	        var result;
	        var v0, v1, v2, v3;
	        v0 = v1 = v2 = v3 = UNINITIALIZED;
	        return function (p0, p1, p2, p3) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                result = fn(p0, p1, p2, p3);
	            }
	            return result;
	        };
	    }
	    function pureProxy5(fn) {
	        var result;
	        var v0, v1, v2, v3, v4;
	        v0 = v1 = v2 = v3 = v4 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                result = fn(p0, p1, p2, p3, p4);
	            }
	            return result;
	        };
	    }
	    function pureProxy6(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5;
	        v0 = v1 = v2 = v3 = v4 = v5 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                result = fn(p0, p1, p2, p3, p4, p5);
	            }
	            return result;
	        };
	    }
	    function pureProxy7(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                result = fn(p0, p1, p2, p3, p4, p5, p6);
	            }
	            return result;
	        };
	    }
	    function pureProxy8(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
	            }
	            return result;
	        };
	    }
	    function pureProxy9(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7, v8;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                v8 = p8;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
	            }
	            return result;
	        };
	    }
	    function pureProxy10(fn) {
	        var result;
	        var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
	        v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = UNINITIALIZED;
	        return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	            if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) ||
	                !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) ||
	                !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8) ||
	                !looseIdentical(v9, p9)) {
	                v0 = p0;
	                v1 = p1;
	                v2 = p2;
	                v3 = p3;
	                v4 = p4;
	                v5 = p5;
	                v6 = p6;
	                v7 = p7;
	                v8 = p8;
	                v9 = p9;
	                result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
	            }
	            return result;
	        };
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an instance of a Component created via a {@link ComponentFactory}.
	     *
	     * `ComponentRef` provides access to the Component Instance as well other objects related to this
	     * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
	     * method.
	     * @stable
	     */
	    var ComponentRef = (function () {
	        function ComponentRef() {
	        }
	        Object.defineProperty(ComponentRef.prototype, "location", {
	            /**
	             * Location of the Host Element of this Component Instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "injector", {
	            /**
	             * The injector on which the component instance exists.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "instance", {
	            /**
	             * The instance of the Component.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef.prototype, "hostView", {
	            /**
	             * The {@link ViewRef} of the Host View of this Component instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
	            /**
	             * The {@link ChangeDetectorRef} of the Component instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef.prototype, "componentType", {
	            /**
	             * The component type.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return ComponentRef;
	    }());
	    var ComponentRef_ = (function (_super) {
	        __extends$5(ComponentRef_, _super);
	        function ComponentRef_(_hostElement, _componentType) {
	            _super.call(this);
	            this._hostElement = _hostElement;
	            this._componentType = _componentType;
	        }
	        Object.defineProperty(ComponentRef_.prototype, "location", {
	            get: function () { return this._hostElement.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "injector", {
	            get: function () { return this._hostElement.injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ComponentRef_.prototype, "instance", {
	            get: function () { return this._hostElement.component; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "hostView", {
	            get: function () { return this._hostElement.parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	            get: function () { return this._hostElement.parentView.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ComponentRef_.prototype, "componentType", {
	            get: function () { return this._componentType; },
	            enumerable: true,
	            configurable: true
	        });
	        ComponentRef_.prototype.destroy = function () { this._hostElement.parentView.destroy(); };
	        ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	        return ComponentRef_;
	    }(ComponentRef));
	    /**
	     * @experimental
	     */
	    var EMPTY_CONTEXT = new Object();
	    /**
	     * @stable
	     */
	    var ComponentFactory = (function () {
	        function ComponentFactory(selector, _viewFactory, _componentType) {
	            this.selector = selector;
	            this._viewFactory = _viewFactory;
	            this._componentType = _componentType;
	        }
	        Object.defineProperty(ComponentFactory.prototype, "componentType", {
	            get: function () { return this._componentType; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Creates a new component.
	         */
	        ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
	            if (projectableNodes === void 0) { projectableNodes = null; }
	            if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
	            var vu = injector.get(ViewUtils);
	            if (isBlank(projectableNodes)) {
	                projectableNodes = [];
	            }
	            // Note: Host views don't need a declarationAppElement!
	            var hostView = this._viewFactory(vu, injector, null);
	            var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
	            return new ComponentRef_(hostElement, this._componentType);
	        };
	        return ComponentFactory;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var NoComponentFactoryError = (function (_super) {
	        __extends$7(NoComponentFactoryError, _super);
	        function NoComponentFactoryError(component) {
	            _super.call(this, "No component factory found for " + stringify(component));
	            this.component = component;
	        }
	        return NoComponentFactoryError;
	    }(BaseError));
	    var _NullComponentFactoryResolver = (function () {
	        function _NullComponentFactoryResolver() {
	        }
	        _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
	            throw new NoComponentFactoryError(component);
	        };
	        return _NullComponentFactoryResolver;
	    }());
	    /**
	     * @stable
	     */
	    var ComponentFactoryResolver = (function () {
	        function ComponentFactoryResolver() {
	        }
	        ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
	        return ComponentFactoryResolver;
	    }());
	    var CodegenComponentFactoryResolver = (function () {
	        function CodegenComponentFactoryResolver(factories, _parent) {
	            this._parent = _parent;
	            this._factories = new Map();
	            for (var i = 0; i < factories.length; i++) {
	                var factory = factories[i];
	                this._factories.set(factory.componentType, factory);
	            }
	        }
	        CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
	            var result = this._factories.get(component);
	            if (!result) {
	                result = this._parent.resolveComponentFactory(component);
	            }
	            return result;
	        };
	        return CodegenComponentFactoryResolver;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$8(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var NgZoneImpl = (function () {
	        function NgZoneImpl(_a) {
	            var _this = this;
	            var trace = _a.trace, onEnter = _a.onEnter, onLeave = _a.onLeave, setMicrotask = _a.setMicrotask, setMacrotask = _a.setMacrotask, onError = _a.onError;
	            this.onEnter = onEnter;
	            this.onLeave = onLeave;
	            this.setMicrotask = setMicrotask;
	            this.setMacrotask = setMacrotask;
	            this.onError = onError;
	            if (typeof Zone == 'undefined') {
	                throw new Error('Angular requires Zone.js prolyfill.');
	            }
	            Zone.assertZonePatched();
	            this.outer = this.inner = Zone.current;
	            if (Zone['wtfZoneSpec']) {
	                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
	            }
	            if (trace && Zone['longStackTraceZoneSpec']) {
	                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
	            }
	            this.inner = this.inner.fork({
	                name: 'angular',
	                properties: { 'isAngularZone': true },
	                onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invokeTask(target, task, applyThis, applyArgs);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invoke(target, callback, applyThis, applyArgs, source);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onHasTask: function (delegate, current, target, hasTaskState) {
	                    delegate.hasTask(target, hasTaskState);
	                    if (current === target) {
	                        // We are only interested in hasTask events which originate from our zone
	                        // (A child hasTask event is not interesting to us)
	                        if (hasTaskState.change == 'microTask') {
	                            _this.setMicrotask(hasTaskState.microTask);
	                        }
	                        else if (hasTaskState.change == 'macroTask') {
	                            _this.setMacrotask(hasTaskState.macroTask);
	                        }
	                    }
	                },
	                onHandleError: function (delegate, current, target, error) {
	                    delegate.handleError(target, error);
	                    _this.onError(error);
	                    return false;
	                }
	            });
	        }
	        NgZoneImpl.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
	        NgZoneImpl.prototype.runInner = function (fn) { return this.inner.run(fn); };
	        ;
	        NgZoneImpl.prototype.runInnerGuarded = function (fn) { return this.inner.runGuarded(fn); };
	        ;
	        NgZoneImpl.prototype.runOuter = function (fn) { return this.outer.run(fn); };
	        ;
	        return NgZoneImpl;
	    }());
	
	    /**
	     * An injectable service for executing work inside or outside of the Angular zone.
	     *
	     * The most common use of this service is to optimize performance when starting a work consisting of
	     * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
	     * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
	     * can reenter the Angular zone via {@link #run}.
	     *
	     * <!-- TODO: add/fix links to:
	     *   - docs explaining zones and the use of zones in Angular and change-detection
	     *   - link to runOutsideAngular/run (throughout this file!)
	     *   -->
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	     * ```
	     * import {Component, View, NgZone} from '@angular/core';
	     * import {NgIf} from '@angular/common';
	     *
	     * @Component({
	     *   selector: 'ng-zone-demo'.
	     *   template: `
	     *     <h2>Demo: NgZone</h2>
	     *
	     *     <p>Progress: {{progress}}%</p>
	     *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
	     *
	     *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
	     *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
	     *   `,
	     *   directives: [NgIf]
	     * })
	     * export class NgZoneDemo {
	     *   progress: number = 0;
	     *   label: string;
	     *
	     *   constructor(private _ngZone: NgZone) {}
	     *
	     *   // Loop inside the Angular zone
	     *   // so the UI DOES refresh after each setTimeout cycle
	     *   processWithinAngularZone() {
	     *     this.label = 'inside';
	     *     this.progress = 0;
	     *     this._increaseProgress(() => console.log('Inside Done!'));
	     *   }
	     *
	     *   // Loop outside of the Angular zone
	     *   // so the UI DOES NOT refresh after each setTimeout cycle
	     *   processOutsideOfAngularZone() {
	     *     this.label = 'outside';
	     *     this.progress = 0;
	     *     this._ngZone.runOutsideAngular(() => {
	     *       this._increaseProgress(() => {
	     *       // reenter the Angular zone and display done
	     *       this._ngZone.run(() => {console.log('Outside Done!') });
	     *     }}));
	     *   }
	     *
	     *
	     *   _increaseProgress(doneCallback: () => void) {
	     *     this.progress += 1;
	     *     console.log(`Current progress: ${this.progress}%`);
	     *
	     *     if (this.progress < 100) {
	     *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
	     *     } else {
	     *       doneCallback();
	     *     }
	     *   }
	     * }
	     * ```
	     * @experimental
	     */
	    var NgZone = (function () {
	        function NgZone(_a) {
	            var _this = this;
	            var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
	            this._hasPendingMicrotasks = false;
	            this._hasPendingMacrotasks = false;
	            /** @internal */
	            this._isStable = true;
	            /** @internal */
	            this._nesting = 0;
	            /** @internal */
	            this._onUnstable = new EventEmitter(false);
	            /** @internal */
	            this._onMicrotaskEmpty = new EventEmitter(false);
	            /** @internal */
	            this._onStable = new EventEmitter(false);
	            /** @internal */
	            this._onErrorEvents = new EventEmitter(false);
	            this._zoneImpl = new NgZoneImpl({
	                trace: enableLongStackTrace,
	                onEnter: function () {
	                    // console.log('ZONE.enter', this._nesting, this._isStable);
	                    _this._nesting++;
	                    if (_this._isStable) {
	                        _this._isStable = false;
	                        _this._onUnstable.emit(null);
	                    }
	                },
	                onLeave: function () {
	                    _this._nesting--;
	                    // console.log('ZONE.leave', this._nesting, this._isStable);
	                    _this._checkStable();
	                },
	                setMicrotask: function (hasMicrotasks) {
	                    _this._hasPendingMicrotasks = hasMicrotasks;
	                    _this._checkStable();
	                },
	                setMacrotask: function (hasMacrotasks) { _this._hasPendingMacrotasks = hasMacrotasks; },
	                onError: function (error) { return _this._onErrorEvents.emit(error); }
	            });
	        }
	        NgZone.isInAngularZone = function () { return NgZoneImpl.isInAngularZone(); };
	        NgZone.assertInAngularZone = function () {
	            if (!NgZoneImpl.isInAngularZone()) {
	                throw new Error('Expected to be in Angular Zone, but it is not!');
	            }
	        };
	        NgZone.assertNotInAngularZone = function () {
	            if (NgZoneImpl.isInAngularZone()) {
	                throw new Error('Expected to not be in Angular Zone, but it is!');
	            }
	        };
	        NgZone.prototype._checkStable = function () {
	            var _this = this;
	            if (this._nesting == 0) {
	                if (!this._hasPendingMicrotasks && !this._isStable) {
	                    try {
	                        // console.log('ZONE.microtaskEmpty');
	                        this._nesting++;
	                        this._onMicrotaskEmpty.emit(null);
	                    }
	                    finally {
	                        this._nesting--;
	                        if (!this._hasPendingMicrotasks) {
	                            try {
	                                // console.log('ZONE.stable', this._nesting, this._isStable);
	                                this.runOutsideAngular(function () { return _this._onStable.emit(null); });
	                            }
	                            finally {
	                                this._isStable = true;
	                            }
	                        }
	                    }
	                }
	            }
	        };
	        ;
	        Object.defineProperty(NgZone.prototype, "onUnstable", {
	            /**
	             * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	             */
	            get: function () { return this._onUnstable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
	            /**
	             * Notifies when there is no more microtasks enqueue in the current VM Turn.
	             * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	             * For this reason this event can fire multiple times per VM Turn.
	             */
	            get: function () { return this._onMicrotaskEmpty; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onStable", {
	            /**
	             * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
	             * implies we are about to relinquish VM turn.
	             * This event gets called just once.
	             */
	            get: function () { return this._onStable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "onError", {
	            /**
	             * Notify that an error has been delivered.
	             */
	            get: function () { return this._onErrorEvents; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "isStable", {
	            /**
	             * Whether there are no outstanding microtasks or microtasks.
	             */
	            get: function () { return this._isStable; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
	            /**
	             * Whether there are any outstanding microtasks.
	             */
	            get: function () { return this._hasPendingMicrotasks; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
	            /**
	             * Whether there are any outstanding microtasks.
	             */
	            get: function () { return this._hasPendingMacrotasks; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Executes the `fn` function synchronously within the Angular zone and returns value returned by
	         * the function.
	         *
	         * Running functions via `run` allows you to reenter Angular zone from a task that was executed
	         * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	         *
	         * Any future tasks or microtasks scheduled from within this function will continue executing from
	         * within the Angular zone.
	         *
	         * If a synchronous error happens it will be rethrown and not reported via `onError`.
	         */
	        NgZone.prototype.run = function (fn) { return this._zoneImpl.runInner(fn); };
	        /**
	         * Same as #run, except that synchronous errors are caught and forwarded
	         * via `onError` and not rethrown.
	         */
	        NgZone.prototype.runGuarded = function (fn) { return this._zoneImpl.runInnerGuarded(fn); };
	        /**
	         * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
	         * the function.
	         *
	         * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
	         * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	         *
	         * Any future tasks or microtasks scheduled from within this function will continue executing from
	         * outside of the Angular zone.
	         *
	         * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
	         */
	        NgZone.prototype.runOutsideAngular = function (fn) { return this._zoneImpl.runOuter(fn); };
	        return NgZone;
	    }());
	
	    /**
	     * The Testability service provides testing hooks that can be accessed from
	     * the browser and by services such as Protractor. Each bootstrapped Angular
	     * application on the page will have an instance of Testability.
	     * @experimental
	     */
	    var Testability = (function () {
	        function Testability(_ngZone) {
	            this._ngZone = _ngZone;
	            /** @internal */
	            this._pendingCount = 0;
	            /** @internal */
	            this._isZoneStable = true;
	            /**
	             * Whether any work was done since the last 'whenStable' callback. This is
	             * useful to detect if this could have potentially destabilized another
	             * component while it is stabilizing.
	             * @internal
	             */
	            this._didWork = false;
	            /** @internal */
	            this._callbacks = [];
	            this._watchAngularEvents();
	        }
	        /** @internal */
	        Testability.prototype._watchAngularEvents = function () {
	            var _this = this;
	            this._ngZone.onUnstable.subscribe({
	                next: function () {
	                    _this._didWork = true;
	                    _this._isZoneStable = false;
	                }
	            });
	            this._ngZone.runOutsideAngular(function () {
	                _this._ngZone.onStable.subscribe({
	                    next: function () {
	                        NgZone.assertNotInAngularZone();
	                        scheduleMicroTask(function () {
	                            _this._isZoneStable = true;
	                            _this._runCallbacksIfReady();
	                        });
	                    }
	                });
	            });
	        };
	        Testability.prototype.increasePendingRequestCount = function () {
	            this._pendingCount += 1;
	            this._didWork = true;
	            return this._pendingCount;
	        };
	        Testability.prototype.decreasePendingRequestCount = function () {
	            this._pendingCount -= 1;
	            if (this._pendingCount < 0) {
	                throw new Error('pending async requests below zero');
	            }
	            this._runCallbacksIfReady();
	            return this._pendingCount;
	        };
	        Testability.prototype.isStable = function () {
	            return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
	        };
	        /** @internal */
	        Testability.prototype._runCallbacksIfReady = function () {
	            var _this = this;
	            if (this.isStable()) {
	                // Schedules the call backs in a new frame so that it is always async.
	                scheduleMicroTask(function () {
	                    while (_this._callbacks.length !== 0) {
	                        (_this._callbacks.pop())(_this._didWork);
	                    }
	                    _this._didWork = false;
	                });
	            }
	            else {
	                // Not Ready
	                this._didWork = true;
	            }
	        };
	        Testability.prototype.whenStable = function (callback) {
	            this._callbacks.push(callback);
	            this._runCallbacksIfReady();
	        };
	        Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
	        Testability.prototype.findBindings = function (using, provider, exactMatch) {
	            // TODO(juliemr): implement.
	            return [];
	        };
	        Testability.prototype.findProviders = function (using, provider, exactMatch) {
	            // TODO(juliemr): implement.
	            return [];
	        };
	        Testability.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        Testability.ctorParameters = [
	            { type: NgZone, },
	        ];
	        return Testability;
	    }());
	    /**
	     * A global registry of {@link Testability} instances for specific elements.
	     * @experimental
	     */
	    var TestabilityRegistry = (function () {
	        function TestabilityRegistry() {
	            /** @internal */
	            this._applications = new Map$1();
	            _testabilityGetter.addToWindow(this);
	        }
	        TestabilityRegistry.prototype.registerApplication = function (token, testability) {
	            this._applications.set(token, testability);
	        };
	        TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
	        TestabilityRegistry.prototype.getAllTestabilities = function () { return MapWrapper.values(this._applications); };
	        TestabilityRegistry.prototype.getAllRootElements = function () { return MapWrapper.keys(this._applications); };
	        TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
	            if (findInAncestors === void 0) { findInAncestors = true; }
	            return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
	        };
	        TestabilityRegistry.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        TestabilityRegistry.ctorParameters = [];
	        return TestabilityRegistry;
	    }());
	    var _NoopGetTestability = (function () {
	        function _NoopGetTestability() {
	        }
	        _NoopGetTestability.prototype.addToWindow = function (registry) { };
	        _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	            return null;
	        };
	        return _NoopGetTestability;
	    }());
	    /**
	     * Set the {@link GetTestability} implementation used by the Angular testing framework.
	     * @experimental
	     */
	    function setTestabilityGetter(getter) {
	        _testabilityGetter = getter;
	    }
	    var _testabilityGetter = new _NoopGetTestability();
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _devMode = true;
	    var _runModeLocked = false;
	    var _platform;
	    /**
	     * Disable Angular's development mode, which turns off assertions and other
	     * checks within the framework.
	     *
	     * One important assertion this disables verifies that a change detection pass
	     * does not result in additional changes to any bindings (also known as
	     * unidirectional data flow).
	     *
	     * @stable
	     */
	    function enableProdMode() {
	        if (_runModeLocked) {
	            throw new Error('Cannot enable prod mode after platform setup.');
	        }
	        _devMode = false;
	    }
	    /**
	     * Returns whether Angular is in development mode. After called once,
	     * the value is locked and won't change any more.
	     *
	     * By default, this is true, unless a user calls `enableProdMode` before calling this.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function isDevMode() {
	        _runModeLocked = true;
	        return _devMode;
	    }
	    /**
	     * Creates a platform.
	     * Platforms have to be eagerly created via this function.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function createPlatform(injector) {
	        if (isPresent(_platform) && !_platform.destroyed) {
	            throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
	        }
	        _platform = injector.get(PlatformRef);
	        var inits = injector.get(PLATFORM_INITIALIZER, null);
	        if (isPresent(inits))
	            inits.forEach(function (init) { return init(); });
	        return _platform;
	    }
	    /**
	     * Creates a factory for a platform
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function createPlatformFactory(parentPlaformFactory, name, providers) {
	        if (providers === void 0) { providers = []; }
	        var marker = new OpaqueToken("Platform: " + name);
	        return function (extraProviders) {
	            if (extraProviders === void 0) { extraProviders = []; }
	            if (!getPlatform()) {
	                if (parentPlaformFactory) {
	                    parentPlaformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
	                }
	                else {
	                    createPlatform(ReflectiveInjector.resolveAndCreate(providers.concat(extraProviders).concat({ provide: marker, useValue: true })));
	                }
	            }
	            return assertPlatform(marker);
	        };
	    }
	    /**
	     * Checks that there currently is a platform
	     * which contains the given token as a provider.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function assertPlatform(requiredToken) {
	        var platform = getPlatform();
	        if (isBlank(platform)) {
	            throw new Error('No platform exists!');
	        }
	        if (isPresent(platform) && isBlank(platform.injector.get(requiredToken, null))) {
	            throw new Error('A platform with a different configuration has been created. Please destroy it first.');
	        }
	        return platform;
	    }
	    /**
	     * Destroy the existing platform.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function destroyPlatform() {
	        if (isPresent(_platform) && !_platform.destroyed) {
	            _platform.destroy();
	        }
	    }
	    /**
	     * Returns the current platform.
	     *
	     * @experimental APIs related to application bootstrap are currently under review.
	     */
	    function getPlatform() {
	        return isPresent(_platform) && !_platform.destroyed ? _platform : null;
	    }
	    /**
	     * The Angular platform is the entry point for Angular on a web page. Each page
	     * has exactly one platform, and services (such as reflection) which are common
	     * to every Angular application running on the page are bound in its scope.
	     *
	     * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
	     * explicitly by calling {@link createPlatform}().
	     *
	     * @stable
	     */
	    var PlatformRef = (function () {
	        function PlatformRef() {
	        }
	        /**
	         * Creates an instance of an `@NgModule` for the given platform
	         * for offline compilation.
	         *
	         * ## Simple Example
	         *
	         * ```typescript
	         * my_module.ts:
	         *
	         * @NgModule({
	         *   imports: [BrowserModule]
	         * })
	         * class MyModule {}
	         *
	         * main.ts:
	         * import {MyModuleNgFactory} from './my_module.ngfactory';
	         * import {platformBrowser} from '@angular/platform-browser';
	         *
	         * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
	         * ```
	         *
	         * @experimental APIs related to application bootstrap are currently under review.
	         */
	        PlatformRef.prototype.bootstrapModuleFactory = function (moduleFactory) {
	            throw unimplemented();
	        };
	        /**
	         * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
	         *
	         * ## Simple Example
	         *
	         * ```typescript
	         * @NgModule({
	         *   imports: [BrowserModule]
	         * })
	         * class MyModule {}
	         *
	         * let moduleRef = platformBrowser().bootstrapModule(MyModule);
	         * ```
	         * @stable
	         */
	        PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            throw unimplemented();
	        };
	        Object.defineProperty(PlatformRef.prototype, "injector", {
	            /**
	             * Retrieve the platform {@link Injector}, which is the parent injector for
	             * every Angular application on the page and provides singleton providers.
	             */
	            get: function () { throw unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(PlatformRef.prototype, "destroyed", {
	            get: function () { throw unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return PlatformRef;
	    }());
	    function _callAndReportToErrorHandler(errorHandler, callback) {
	        try {
	            var result = callback();
	            if (isPromise(result)) {
	                return result.catch(function (e) {
	                    errorHandler.handleError(e);
	                    // rethrow as the exception handler might not do it
	                    throw e;
	                });
	            }
	            else {
	                return result;
	            }
	        }
	        catch (e) {
	            errorHandler.handleError(e);
	            // rethrow as the exception handler might not do it
	            throw e;
	        }
	    }
	    var PlatformRef_ = (function (_super) {
	        __extends$3(PlatformRef_, _super);
	        function PlatformRef_(_injector) {
	            _super.call(this);
	            this._injector = _injector;
	            this._modules = [];
	            this._destroyListeners = [];
	            this._destroyed = false;
	        }
	        PlatformRef_.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
	        Object.defineProperty(PlatformRef_.prototype, "injector", {
	            get: function () { return this._injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(PlatformRef_.prototype, "destroyed", {
	            get: function () { return this._destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        PlatformRef_.prototype.destroy = function () {
	            if (this._destroyed) {
	                throw new Error('The platform has already been destroyed!');
	            }
	            ListWrapper.clone(this._modules).forEach(function (app) { return app.destroy(); });
	            this._destroyListeners.forEach(function (dispose) { return dispose(); });
	            this._destroyed = true;
	        };
	        PlatformRef_.prototype.bootstrapModuleFactory = function (moduleFactory) {
	            return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
	        };
	        PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function (moduleFactory, ngZone) {
	            var _this = this;
	            // Note: We need to create the NgZone _before_ we instantiate the module,
	            // as instantiating the module creates some providers eagerly.
	            // So we create a mini parent injector that just contains the new NgZone and
	            // pass that as parent to the NgModuleFactory.
	            if (!ngZone)
	                ngZone = new NgZone({ enableLongStackTrace: isDevMode() });
	            // Attention: Don't use ApplicationRef.run here,
	            // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
	            return ngZone.run(function () {
	                var ngZoneInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgZone, useValue: ngZone }], _this.injector);
	                var moduleRef = moduleFactory.create(ngZoneInjector);
	                var exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
	                if (!exceptionHandler) {
	                    throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
	                }
	                moduleRef.onDestroy(function () { return ListWrapper.remove(_this._modules, moduleRef); });
	                ngZone.onError.subscribe({ next: function (error) { exceptionHandler.handleError(error); } });
	                return _callAndReportToErrorHandler(exceptionHandler, function () {
	                    var initStatus = moduleRef.injector.get(ApplicationInitStatus);
	                    return initStatus.donePromise.then(function () {
	                        _this._moduleDoBootstrap(moduleRef);
	                        return moduleRef;
	                    });
	                });
	            });
	        };
	        PlatformRef_.prototype.bootstrapModule = function (moduleType, compilerOptions) {
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
	        };
	        PlatformRef_.prototype._bootstrapModuleWithZone = function (moduleType, compilerOptions, ngZone, componentFactoryCallback) {
	            var _this = this;
	            if (compilerOptions === void 0) { compilerOptions = []; }
	            var compilerFactory = this.injector.get(CompilerFactory);
	            var compiler = compilerFactory.createCompiler(compilerOptions instanceof Array ? compilerOptions : [compilerOptions]);
	            // ugly internal api hack: generate host component factories for all declared components and
	            // pass the factories into the callback - this is used by UpdateAdapter to get hold of all
	            // factories.
	            if (componentFactoryCallback) {
	                return compiler.compileModuleAndAllComponentsAsync(moduleType)
	                    .then(function (_a) {
	                    var ngModuleFactory = _a.ngModuleFactory, componentFactories = _a.componentFactories;
	                    componentFactoryCallback(componentFactories);
	                    return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
	                });
	            }
	            return compiler.compileModuleAsync(moduleType)
	                .then(function (moduleFactory) { return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone); });
	        };
	        PlatformRef_.prototype._moduleDoBootstrap = function (moduleRef) {
	            var appRef = moduleRef.injector.get(ApplicationRef);
	            if (moduleRef.bootstrapFactories.length > 0) {
	                moduleRef.bootstrapFactories.forEach(function (compFactory) { return appRef.bootstrap(compFactory); });
	            }
	            else if (moduleRef.instance.ngDoBootstrap) {
	                moduleRef.instance.ngDoBootstrap(appRef);
	            }
	            else {
	                throw new Error(("The module " + stringify(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") +
	                    "Please define one of these.");
	            }
	        };
	        PlatformRef_.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        PlatformRef_.ctorParameters = [
	            { type: Injector, },
	        ];
	        return PlatformRef_;
	    }(PlatformRef));
	    /**
	     * A reference to an Angular application running on a page.
	     *
	     * For more about Angular applications, see the documentation for {@link bootstrap}.
	     *
	     * @stable
	     */
	    var ApplicationRef = (function () {
	        function ApplicationRef() {
	        }
	        Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
	            /**
	             * Get a list of component types registered to this application.
	             * This list is populated even before the component is created.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(ApplicationRef.prototype, "components", {
	            /**
	             * Get a list of components registered to this application.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return ApplicationRef;
	    }());
	    var ApplicationRef_ = (function (_super) {
	        __extends$3(ApplicationRef_, _super);
	        function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
	            var _this = this;
	            _super.call(this);
	            this._zone = _zone;
	            this._console = _console;
	            this._injector = _injector;
	            this._exceptionHandler = _exceptionHandler;
	            this._componentFactoryResolver = _componentFactoryResolver;
	            this._initStatus = _initStatus;
	            this._testabilityRegistry = _testabilityRegistry;
	            this._testability = _testability;
	            this._bootstrapListeners = [];
	            this._rootComponents = [];
	            this._rootComponentTypes = [];
	            this._changeDetectorRefs = [];
	            this._runningTick = false;
	            this._enforceNoNewChanges = false;
	            this._enforceNoNewChanges = isDevMode();
	            this._zone.onMicrotaskEmpty.subscribe({ next: function () { _this._zone.run(function () { _this.tick(); }); } });
	        }
	        ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
	            this._changeDetectorRefs.push(changeDetector);
	        };
	        ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
	            ListWrapper.remove(this._changeDetectorRefs, changeDetector);
	        };
	        ApplicationRef_.prototype.bootstrap = function (componentOrFactory) {
	            var _this = this;
	            if (!this._initStatus.done) {
	                throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
	            }
	            var componentFactory;
	            if (componentOrFactory instanceof ComponentFactory) {
	                componentFactory = componentOrFactory;
	            }
	            else {
	                componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
	            }
	            this._rootComponentTypes.push(componentFactory.componentType);
	            var compRef = componentFactory.create(this._injector, [], componentFactory.selector);
	            compRef.onDestroy(function () { _this._unloadComponent(compRef); });
	            var testability = compRef.injector.get(Testability, null);
	            if (isPresent(testability)) {
	                compRef.injector.get(TestabilityRegistry)
	                    .registerApplication(compRef.location.nativeElement, testability);
	            }
	            this._loadComponent(compRef);
	            if (isDevMode()) {
	                this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
	            }
	            return compRef;
	        };
	        /** @internal */
	        ApplicationRef_.prototype._loadComponent = function (componentRef) {
	            this._changeDetectorRefs.push(componentRef.changeDetectorRef);
	            this.tick();
	            this._rootComponents.push(componentRef);
	            // Get the listeners lazily to prevent DI cycles.
	            var listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, [])
	                .concat(this._bootstrapListeners);
	            listeners.forEach(function (listener) { return listener(componentRef); });
	        };
	        /** @internal */
	        ApplicationRef_.prototype._unloadComponent = function (componentRef) {
	            if (!ListWrapper.contains(this._rootComponents, componentRef)) {
	                return;
	            }
	            this.unregisterChangeDetector(componentRef.changeDetectorRef);
	            ListWrapper.remove(this._rootComponents, componentRef);
	        };
	        ApplicationRef_.prototype.tick = function () {
	            if (this._runningTick) {
	                throw new Error('ApplicationRef.tick is called recursively');
	            }
	            var s = ApplicationRef_._tickScope();
	            try {
	                this._runningTick = true;
	                this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
	                if (this._enforceNoNewChanges) {
	                    this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
	                }
	            }
	            finally {
	                this._runningTick = false;
	                wtfLeave(s);
	            }
	        };
	        ApplicationRef_.prototype.ngOnDestroy = function () {
	            // TODO(alxhub): Dispose of the NgZone.
	            ListWrapper.clone(this._rootComponents).forEach(function (ref) { return ref.destroy(); });
	        };
	        Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
	            get: function () { return this._rootComponentTypes; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ApplicationRef_.prototype, "components", {
	            get: function () { return this._rootComponents; },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        ApplicationRef_._tickScope = wtfCreateScope('ApplicationRef#tick()');
	        ApplicationRef_.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        ApplicationRef_.ctorParameters = [
	            { type: NgZone, },
	            { type: Console, },
	            { type: Injector, },
	            { type: ErrorHandler, },
	            { type: ComponentFactoryResolver, },
	            { type: ApplicationInitStatus, },
	            { type: TestabilityRegistry, decorators: [{ type: Optional },] },
	            { type: Testability, decorators: [{ type: Optional },] },
	        ];
	        return ApplicationRef_;
	    }(ApplicationRef));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an instance of an NgModule created via a {@link NgModuleFactory}.
	     *
	     * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
	     * NgModule Instance.
	     *
	     * @stable
	     */
	    var NgModuleRef = (function () {
	        function NgModuleRef() {
	        }
	        Object.defineProperty(NgModuleRef.prototype, "injector", {
	            /**
	             * The injector that contains all of the providers of the NgModule.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
	            /**
	             * The ComponentFactoryResolver to get hold of the ComponentFactories
	             * declared in the `entryComponents` property of the module.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleRef.prototype, "instance", {
	            /**
	             * The NgModule instance.
	             */
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgModuleRef;
	    }());
	    /**
	     * @experimental
	     */
	    var NgModuleFactory = (function () {
	        function NgModuleFactory(_injectorClass, _moduleType) {
	            this._injectorClass = _injectorClass;
	            this._moduleType = _moduleType;
	        }
	        Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
	            get: function () { return this._moduleType; },
	            enumerable: true,
	            configurable: true
	        });
	        NgModuleFactory.prototype.create = function (parentInjector) {
	            if (!parentInjector) {
	                parentInjector = Injector.NULL;
	            }
	            var instance = new this._injectorClass(parentInjector);
	            instance.create();
	            return instance;
	        };
	        return NgModuleFactory;
	    }());
	    var _UNDEFINED = new Object();
	    var NgModuleInjector = (function (_super) {
	        __extends$9(NgModuleInjector, _super);
	        function NgModuleInjector(parent, factories, bootstrapFactories) {
	            _super.call(this, factories, parent.get(ComponentFactoryResolver, ComponentFactoryResolver.NULL));
	            this.parent = parent;
	            this.bootstrapFactories = bootstrapFactories;
	            this._destroyListeners = [];
	            this._destroyed = false;
	        }
	        NgModuleInjector.prototype.create = function () { this.instance = this.createInternal(); };
	        NgModuleInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            if (token === Injector || token === ComponentFactoryResolver) {
	                return this;
	            }
	            var result = this.getInternal(token, _UNDEFINED);
	            return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
	        };
	        Object.defineProperty(NgModuleInjector.prototype, "injector", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        NgModuleInjector.prototype.destroy = function () {
	            if (this._destroyed) {
	                throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
	            }
	            this._destroyed = true;
	            this.destroyInternal();
	            this._destroyListeners.forEach(function (listener) { return listener(); });
	        };
	        NgModuleInjector.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
	        return NgModuleInjector;
	    }(CodegenComponentFactoryResolver));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Used to load ng module factories.
	     * @stable
	     */
	    var NgModuleFactoryLoader = (function () {
	        function NgModuleFactoryLoader() {
	        }
	        return NgModuleFactoryLoader;
	    }());
	    var moduleFactories = new Map();
	    /**
	     * Registers a loaded module. Should only be called from generated NgModuleFactory code.
	     * @experimental
	     */
	    function registerModuleFactory(id, factory) {
	        var existing = moduleFactories.get(id);
	        if (existing) {
	            throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
	        }
	        moduleFactories.set(id, factory);
	    }
	    /**
	     * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
	     * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
	     * cannot be found.
	     * @experimental
	     */
	    function getModuleFactory(id) {
	        var factory = moduleFactories.get(id);
	        if (!factory)
	            throw new Error("No module with ID " + id + " loaded");
	        return factory;
	    }
	
	    /**
	     * An unmodifiable list of items that Angular keeps up to date when the state
	     * of the application changes.
	     *
	     * The type of object that {@link Query} and {@link ViewQueryMetadata} provide.
	     *
	     * Implements an iterable interface, therefore it can be used in both ES6
	     * javascript `for (var i of items)` loops as well as in Angular templates with
	     * `*ngFor="let i of myList"`.
	     *
	     * Changes can be observed by subscribing to the changes `Observable`.
	     *
	     * NOTE: In the future this class will implement an `Observable` interface.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
	     * ```typescript
	     * @Component({...})
	     * class Container {
	     *   @ViewChildren(Item) items:QueryList<Item>;
	     * }
	     * ```
	     * @stable
	     */
	    var QueryList = (function () {
	        function QueryList() {
	            this._dirty = true;
	            this._results = [];
	            this._emitter = new EventEmitter();
	        }
	        Object.defineProperty(QueryList.prototype, "changes", {
	            get: function () { return this._emitter; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "length", {
	            get: function () { return this._results.length; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "first", {
	            get: function () { return this._results[0]; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(QueryList.prototype, "last", {
	            get: function () { return this._results[this.length - 1]; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * See
	         * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
	         */
	        QueryList.prototype.map = function (fn) { return this._results.map(fn); };
	        /**
	         * See
	         * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	         */
	        QueryList.prototype.filter = function (fn) {
	            return this._results.filter(fn);
	        };
	        /**
	         * See
	         * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	         */
	        QueryList.prototype.reduce = function (fn, init) {
	            return this._results.reduce(fn, init);
	        };
	        /**
	         * See
	         * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	         */
	        QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
	        /**
	         * See
	         * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
	         */
	        QueryList.prototype.some = function (fn) {
	            return this._results.some(fn);
	        };
	        QueryList.prototype.toArray = function () { return this._results.slice(); };
	        QueryList.prototype[getSymbolIterator()] = function () { return this._results[getSymbolIterator()](); };
	        QueryList.prototype.toString = function () { return this._results.toString(); };
	        QueryList.prototype.reset = function (res) {
	            this._results = ListWrapper.flatten(res);
	            this._dirty = false;
	        };
	        QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
	        /** internal */
	        QueryList.prototype.setDirty = function () { this._dirty = true; };
	        Object.defineProperty(QueryList.prototype, "dirty", {
	            /** internal */
	            get: function () { return this._dirty; },
	            enumerable: true,
	            configurable: true
	        });
	        return QueryList;
	    }());
	
	    var _SEPARATOR = '#';
	    var FACTORY_CLASS_SUFFIX = 'NgFactory';
	    /**
	     * Configuration for SystemJsNgModuleLoader.
	     * token.
	     *
	     * @experimental
	     */
	    var SystemJsNgModuleLoaderConfig = (function () {
	        function SystemJsNgModuleLoaderConfig() {
	        }
	        return SystemJsNgModuleLoaderConfig;
	    }());
	    var DEFAULT_CONFIG = {
	        factoryPathPrefix: '',
	        factoryPathSuffix: '.ngfactory',
	    };
	    /**
	     * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
	     * @experimental
	     */
	    var SystemJsNgModuleLoader = (function () {
	        function SystemJsNgModuleLoader(_compiler, config) {
	            this._compiler = _compiler;
	            this._config = config || DEFAULT_CONFIG;
	        }
	        SystemJsNgModuleLoader.prototype.load = function (path) {
	            var offlineMode = this._compiler instanceof Compiler;
	            return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
	        };
	        SystemJsNgModuleLoader.prototype.loadAndCompile = function (path) {
	            var _this = this;
	            var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
	            if (exportName === undefined)
	                exportName = 'default';
	            return System.import(module)
	                .then(function (module) { return module[exportName]; })
	                .then(function (type) { return checkNotEmpty(type, module, exportName); })
	                .then(function (type) { return _this._compiler.compileModuleAsync(type); });
	        };
	        SystemJsNgModuleLoader.prototype.loadFactory = function (path) {
	            var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
	            var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
	            if (exportName === undefined) {
	                exportName = 'default';
	                factoryClassSuffix = '';
	            }
	            return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
	                .then(function (module) { return module[exportName + factoryClassSuffix]; })
	                .then(function (factory) { return checkNotEmpty(factory, module, exportName); });
	        };
	        SystemJsNgModuleLoader.decorators = [
	            { type: Injectable },
	        ];
	        /** @nocollapse */
	        SystemJsNgModuleLoader.ctorParameters = [
	            { type: Compiler, },
	            { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: Optional },] },
	        ];
	        return SystemJsNgModuleLoader;
	    }());
	    function checkNotEmpty(value, modulePath, exportName) {
	        if (!value) {
	            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
	        }
	        return value;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Represents an Embedded Template that can be used to instantiate Embedded Views.
	     *
	     * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
	     * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
	     * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
	     * `TemplateRef` from a Component or a Directive via {@link Query}.
	     *
	     * To instantiate Embedded Views based on a Template, use
	     * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
	     * View Container.
	     * @stable
	     */
	    var TemplateRef = (function () {
	        function TemplateRef() {
	        }
	        Object.defineProperty(TemplateRef.prototype, "elementRef", {
	            /**
	             * The location in the View where the Embedded View logically belongs to.
	             *
	             * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
	             * inherit from the contexts of this location.
	             *
	             * Typically new Embedded Views are attached to the View Container of this location, but in
	             * advanced use-cases, the View can be attached to a different container while keeping the
	             * data-binding and injection context from the original location.
	             *
	             */
	            // TODO(i): rename to anchor or location
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return TemplateRef;
	    }());
	    var TemplateRef_ = (function (_super) {
	        __extends$10(TemplateRef_, _super);
	        function TemplateRef_(_appElement, _viewFactory) {
	            _super.call(this);
	            this._appElement = _appElement;
	            this._viewFactory = _viewFactory;
	        }
	        TemplateRef_.prototype.createEmbeddedView = function (context) {
	            var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
	            view.create(context || {}, null, null);
	            return view.ref;
	        };
	        Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	            get: function () { return this._appElement.elementRef; },
	            enumerable: true,
	            configurable: true
	        });
	        return TemplateRef_;
	    }(TemplateRef));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var _queuedAnimations = [];
	    /** @internal */
	    function queueAnimation(player) {
	        _queuedAnimations.push(player);
	    }
	    /** @internal */
	    function triggerQueuedAnimations() {
	        for (var i = 0; i < _queuedAnimations.length; i++) {
	            var player = _queuedAnimations[i];
	            player.play();
	        }
	        _queuedAnimations = [];
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @stable
	     */
	    var ViewRef = (function () {
	        function ViewRef() {
	        }
	        Object.defineProperty(ViewRef.prototype, "destroyed", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return ViewRef;
	    }());
	    /**
	     * Represents an Angular View.
	     *
	     * <!-- TODO: move the next two paragraphs to the dev guide -->
	     * A View is a fundamental building block of the application UI. It is the smallest grouping of
	     * Elements which are created and destroyed together.
	     *
	     * Properties of elements in a View can change, but the structure (number and order) of elements in
	     * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
	     * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
	     * <!-- /TODO -->
	     *
	     * ### Example
	     *
	     * Given this template...
	     *
	     * ```
	     * Count: {{items.length}}
	     * <ul>
	     *   <li *ngFor="let  item of items">{{item}}</li>
	     * </ul>
	     * ```
	     *
	     * We have two {@link TemplateRef}s:
	     *
	     * Outer {@link TemplateRef}:
	     * ```
	     * Count: {{items.length}}
	     * <ul>
	     *   <template ngFor let-item [ngForOf]="items"></template>
	     * </ul>
	     * ```
	     *
	     * Inner {@link TemplateRef}:
	     * ```
	     *   <li>{{item}}</li>
	     * ```
	     *
	     * Notice that the original template is broken down into two separate {@link TemplateRef}s.
	     *
	     * The outer/inner {@link TemplateRef}s are then assembled into views like so:
	     *
	     * ```
	     * <!-- ViewRef: outer-0 -->
	     * Count: 2
	     * <ul>
	     *   <template view-container-ref></template>
	     *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
	     *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
	     * </ul>
	     * <!-- /ViewRef: outer-0 -->
	     * ```
	     * @experimental
	     */
	    var EmbeddedViewRef = (function (_super) {
	        __extends$11(EmbeddedViewRef, _super);
	        function EmbeddedViewRef() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(EmbeddedViewRef.prototype, "context", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        return EmbeddedViewRef;
	    }(ViewRef));
	    var ViewRef_ = (function () {
	        function ViewRef_(_view) {
	            this._view = _view;
	            this._view = _view;
	            this._originalMode = this._view.cdMode;
	        }
	        Object.defineProperty(ViewRef_.prototype, "internalView", {
	            get: function () { return this._view; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "rootNodes", {
	            get: function () { return this._view.flatRootNodes; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "context", {
	            get: function () { return this._view.context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ViewRef_.prototype, "destroyed", {
	            get: function () { return this._view.destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
	        ViewRef_.prototype.detach = function () { this._view.cdMode = ChangeDetectorStatus.Detached; };
	        ViewRef_.prototype.detectChanges = function () {
	            this._view.detectChanges(false);
	            triggerQueuedAnimations();
	        };
	        ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
	        ViewRef_.prototype.reattach = function () {
	            this._view.cdMode = this._originalMode;
	            this.markForCheck();
	        };
	        ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
	        ViewRef_.prototype.destroy = function () { this._view.destroy(); };
	        return ViewRef_;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var EventListener = (function () {
	        function EventListener(name, callback) {
	            this.name = name;
	            this.callback = callback;
	        }
	        ;
	        return EventListener;
	    }());
	    /**
	     * @experimental All debugging apis are currently experimental.
	     */
	    var DebugNode = (function () {
	        function DebugNode(nativeNode, parent, _debugInfo) {
	            this._debugInfo = _debugInfo;
	            this.nativeNode = nativeNode;
	            if (isPresent(parent) && parent instanceof DebugElement) {
	                parent.addChild(this);
	            }
	            else {
	                this.parent = null;
	            }
	            this.listeners = [];
	        }
	        Object.defineProperty(DebugNode.prototype, "injector", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.injector : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "componentInstance", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.component : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "context", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.context : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "references", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.references : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "providerTokens", {
	            get: function () {
	                return isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugNode.prototype, "source", {
	            get: function () { return isPresent(this._debugInfo) ? this._debugInfo.source : null; },
	            enumerable: true,
	            configurable: true
	        });
	        return DebugNode;
	    }());
	    /**
	     * @experimental All debugging apis are currently experimental.
	     */
	    var DebugElement = (function (_super) {
	        __extends$12(DebugElement, _super);
	        function DebugElement(nativeNode, parent, _debugInfo) {
	            _super.call(this, nativeNode, parent, _debugInfo);
	            this.properties = {};
	            this.attributes = {};
	            this.classes = {};
	            this.styles = {};
	            this.childNodes = [];
	            this.nativeElement = nativeNode;
	        }
	        DebugElement.prototype.addChild = function (child) {
	            if (isPresent(child)) {
	                this.childNodes.push(child);
	                child.parent = this;
	            }
	        };
	        DebugElement.prototype.removeChild = function (child) {
	            var childIndex = this.childNodes.indexOf(child);
	            if (childIndex !== -1) {
	                child.parent = null;
	                this.childNodes.splice(childIndex, 1);
	            }
	        };
	        DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
	            var siblingIndex = this.childNodes.indexOf(child);
	            if (siblingIndex !== -1) {
	                var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
	                var nextChildren = this.childNodes.slice(siblingIndex + 1);
	                this.childNodes =
	                    ListWrapper.concat(ListWrapper.concat(previousChildren, newChildren), nextChildren);
	                for (var i = 0; i < newChildren.length; ++i) {
	                    var newChild = newChildren[i];
	                    if (isPresent(newChild.parent)) {
	                        newChild.parent.removeChild(newChild);
	                    }
	                    newChild.parent = this;
	                }
	            }
	        };
	        DebugElement.prototype.query = function (predicate) {
	            var results = this.queryAll(predicate);
	            return results.length > 0 ? results[0] : null;
	        };
	        DebugElement.prototype.queryAll = function (predicate) {
	            var matches = [];
	            _queryElementChildren(this, predicate, matches);
	            return matches;
	        };
	        DebugElement.prototype.queryAllNodes = function (predicate) {
	            var matches = [];
	            _queryNodeChildren(this, predicate, matches);
	            return matches;
	        };
	        Object.defineProperty(DebugElement.prototype, "children", {
	            get: function () {
	                var children = [];
	                this.childNodes.forEach(function (node) {
	                    if (node instanceof DebugElement) {
	                        children.push(node);
	                    }
	                });
	                return children;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
	            this.listeners.forEach(function (listener) {
	                if (listener.name == eventName) {
	                    listener.callback(eventObj);
	                }
	            });
	        };
	        return DebugElement;
	    }(DebugNode));
	    /**
	     * @experimental
	     */
	    function asNativeElements(debugEls) {
	        return debugEls.map(function (el) { return el.nativeElement; });
	    }
	    function _queryElementChildren(element, predicate, matches) {
	        element.childNodes.forEach(function (node) {
	            if (node instanceof DebugElement) {
	                if (predicate(node)) {
	                    matches.push(node);
	                }
	                _queryElementChildren(node, predicate, matches);
	            }
	        });
	    }
	    function _queryNodeChildren(parentNode, predicate, matches) {
	        if (parentNode instanceof DebugElement) {
	            parentNode.childNodes.forEach(function (node) {
	                if (predicate(node)) {
	                    matches.push(node);
	                }
	                if (node instanceof DebugElement) {
	                    _queryNodeChildren(node, predicate, matches);
	                }
	            });
	        }
	    }
	    // Need to keep the nodes in a global Map so that multiple angular apps are supported.
	    var _nativeNodeToDebugNode = new Map();
	    /**
	     * @experimental
	     */
	    function getDebugNode(nativeNode) {
	        return _nativeNodeToDebugNode.get(nativeNode);
	    }
	    function indexDebugNode(node) {
	        _nativeNodeToDebugNode.set(node.nativeNode, node);
	    }
	    function removeDebugNodeFromIndex(node) {
	        _nativeNodeToDebugNode.delete(node.nativeNode);
	    }
	
	    function _reflector() {
	        return reflector;
	    }
	    var _CORE_PLATFORM_PROVIDERS = [
	        PlatformRef_, { provide: PlatformRef, useExisting: PlatformRef_ },
	        { provide: Reflector, useFactory: _reflector, deps: [] },
	        { provide: ReflectorReader, useExisting: Reflector }, TestabilityRegistry, Console
	    ];
	    /**
	     * This platform has to be included in any other platform
	     *
	     * @experimental
	     */
	    var platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);
	
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var LOCALE_ID = new OpaqueToken('LocaleId');
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var TRANSLATIONS = new OpaqueToken('Translations');
	    /**
	     * @experimental i18n support is experimental.
	     */
	    var TRANSLATIONS_FORMAT = new OpaqueToken('TranslationsFormat');
	
	    function _iterableDiffersFactory() {
	        return defaultIterableDiffers;
	    }
	    function _keyValueDiffersFactory() {
	        return defaultKeyValueDiffers;
	    }
	    /**
	     * This module includes the providers of @angular/core that are needed
	     * to bootstrap components via `ApplicationRef`.
	     *
	     * @experimental
	     */
	    var ApplicationModule = (function () {
	        function ApplicationModule() {
	        }
	        ApplicationModule.decorators = [
	            { type: NgModule, args: [{
	                        providers: [
	                            ApplicationRef_,
	                            { provide: ApplicationRef, useExisting: ApplicationRef_ },
	                            ApplicationInitStatus,
	                            Compiler,
	                            APP_ID_RANDOM_PROVIDER,
	                            ViewUtils,
	                            { provide: IterableDiffers, useFactory: _iterableDiffersFactory },
	                            { provide: KeyValueDiffers, useFactory: _keyValueDiffersFactory },
	                            { provide: LOCALE_ID, useValue: 'en-US' },
	                        ]
	                    },] },
	        ];
	        /** @nocollapse */
	        ApplicationModule.ctorParameters = [];
	        return ApplicationModule;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var FILL_STYLE_FLAG = 'true'; // TODO (matsko): change to boolean
	    var ANY_STATE = '*';
	    var DEFAULT_STATE = '*';
	    var EMPTY_STATE = 'void';
	
	    var Math$1 = global$1.Math;
	
	    var AnimationGroupPlayer = (function () {
	        function AnimationGroupPlayer(_players) {
	            var _this = this;
	            this._players = _players;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._finished = false;
	            this._started = false;
	            this.parentPlayer = null;
	            var count = 0;
	            var total = this._players.length;
	            if (total == 0) {
	                scheduleMicroTask(function () { return _this._onFinish(); });
	            }
	            else {
	                this._players.forEach(function (player) {
	                    player.parentPlayer = _this;
	                    player.onDone(function () {
	                        if (++count >= total) {
	                            _this._onFinish();
	                        }
	                    });
	                });
	            }
	        }
	        AnimationGroupPlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                if (!isPresent(this.parentPlayer)) {
	                    this.destroy();
	                }
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        AnimationGroupPlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
	        AnimationGroupPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        AnimationGroupPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        AnimationGroupPlayer.prototype.hasStarted = function () { return this._started; };
	        AnimationGroupPlayer.prototype.play = function () {
	            if (!isPresent(this.parentPlayer)) {
	                this.init();
	            }
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._players.forEach(function (player) { return player.play(); });
	        };
	        AnimationGroupPlayer.prototype.pause = function () { this._players.forEach(function (player) { return player.pause(); }); };
	        AnimationGroupPlayer.prototype.restart = function () { this._players.forEach(function (player) { return player.restart(); }); };
	        AnimationGroupPlayer.prototype.finish = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.finish(); });
	        };
	        AnimationGroupPlayer.prototype.destroy = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.destroy(); });
	        };
	        AnimationGroupPlayer.prototype.reset = function () { this._players.forEach(function (player) { return player.reset(); }); };
	        AnimationGroupPlayer.prototype.setPosition = function (p /** TODO #9100 */) {
	            this._players.forEach(function (player) { player.setPosition(p); });
	        };
	        AnimationGroupPlayer.prototype.getPosition = function () {
	            var min = 0;
	            this._players.forEach(function (player) {
	                var p = player.getPosition();
	                min = Math$1.min(p, min);
	            });
	            return min;
	        };
	        return AnimationGroupPlayer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var AnimationKeyframe = (function () {
	        function AnimationKeyframe(offset, styles) {
	            this.offset = offset;
	            this.styles = styles;
	        }
	        return AnimationKeyframe;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var AnimationOutput = (function () {
	        function AnimationOutput(name, phase, fullPropertyName) {
	            this.name = name;
	            this.phase = phase;
	            this.fullPropertyName = fullPropertyName;
	        }
	        return AnimationOutput;
	    }());
	
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationPlayer = (function () {
	        function AnimationPlayer() {
	        }
	        Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
	            get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            set: function (player) { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationPlayer;
	    }());
	    var NoOpAnimationPlayer = (function () {
	        function NoOpAnimationPlayer() {
	            var _this = this;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._started = false;
	            this.parentPlayer = null;
	            scheduleMicroTask(function () { return _this._onFinish(); });
	        }
	        /** @internal */
	        NoOpAnimationPlayer.prototype._onFinish = function () {
	            this._onDoneFns.forEach(function (fn) { return fn(); });
	            this._onDoneFns = [];
	        };
	        NoOpAnimationPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        NoOpAnimationPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        NoOpAnimationPlayer.prototype.hasStarted = function () { return this._started; };
	        NoOpAnimationPlayer.prototype.init = function () { };
	        NoOpAnimationPlayer.prototype.play = function () {
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	            }
	            this._started = true;
	        };
	        NoOpAnimationPlayer.prototype.pause = function () { };
	        NoOpAnimationPlayer.prototype.restart = function () { };
	        NoOpAnimationPlayer.prototype.finish = function () { this._onFinish(); };
	        NoOpAnimationPlayer.prototype.destroy = function () { };
	        NoOpAnimationPlayer.prototype.reset = function () { };
	        NoOpAnimationPlayer.prototype.setPosition = function (p /** TODO #9100 */) { };
	        NoOpAnimationPlayer.prototype.getPosition = function () { return 0; };
	        return NoOpAnimationPlayer;
	    }());
	
	    var AnimationSequencePlayer = (function () {
	        function AnimationSequencePlayer(_players) {
	            var _this = this;
	            this._players = _players;
	            this._currentIndex = 0;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._finished = false;
	            this._started = false;
	            this.parentPlayer = null;
	            this._players.forEach(function (player) { player.parentPlayer = _this; });
	            this._onNext(false);
	        }
	        AnimationSequencePlayer.prototype._onNext = function (start) {
	            var _this = this;
	            if (this._finished)
	                return;
	            if (this._players.length == 0) {
	                this._activePlayer = new NoOpAnimationPlayer();
	                scheduleMicroTask(function () { return _this._onFinish(); });
	            }
	            else if (this._currentIndex >= this._players.length) {
	                this._activePlayer = new NoOpAnimationPlayer();
	                this._onFinish();
	            }
	            else {
	                var player = this._players[this._currentIndex++];
	                player.onDone(function () { return _this._onNext(true); });
	                this._activePlayer = player;
	                if (start) {
	                    player.play();
	                }
	            }
	        };
	        AnimationSequencePlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                if (!isPresent(this.parentPlayer)) {
	                    this.destroy();
	                }
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        AnimationSequencePlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
	        AnimationSequencePlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        AnimationSequencePlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        AnimationSequencePlayer.prototype.hasStarted = function () { return this._started; };
	        AnimationSequencePlayer.prototype.play = function () {
	            if (!isPresent(this.parentPlayer)) {
	                this.init();
	            }
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._activePlayer.play();
	        };
	        AnimationSequencePlayer.prototype.pause = function () { this._activePlayer.pause(); };
	        AnimationSequencePlayer.prototype.restart = function () {
	            if (this._players.length > 0) {
	                this.reset();
	                this._players[0].restart();
	            }
	        };
	        AnimationSequencePlayer.prototype.reset = function () { this._players.forEach(function (player) { return player.reset(); }); };
	        AnimationSequencePlayer.prototype.finish = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.finish(); });
	        };
	        AnimationSequencePlayer.prototype.destroy = function () {
	            this._onFinish();
	            this._players.forEach(function (player) { return player.destroy(); });
	        };
	        AnimationSequencePlayer.prototype.setPosition = function (p /** TODO #9100 */) { this._players[0].setPosition(p); };
	        AnimationSequencePlayer.prototype.getPosition = function () { return this._players[0].getPosition(); };
	        return AnimationSequencePlayer;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AUTO_STYLE = '*';
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link trigger trigger
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationEntryMetadata = (function () {
	        function AnimationEntryMetadata(name, definitions) {
	            this.name = name;
	            this.definitions = definitions;
	        }
	        return AnimationEntryMetadata;
	    }());
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateMetadata = (function () {
	        function AnimationStateMetadata() {
	        }
	        return AnimationStateMetadata;
	    }());
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link state state animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateDeclarationMetadata = (function (_super) {
	        __extends$13(AnimationStateDeclarationMetadata, _super);
	        function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
	            _super.call(this);
	            this.stateNameExpr = stateNameExpr;
	            this.styles = styles;
	        }
	        return AnimationStateDeclarationMetadata;
	    }(AnimationStateMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the
	     * {@link transition transition animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStateTransitionMetadata = (function (_super) {
	        __extends$13(AnimationStateTransitionMetadata, _super);
	        function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
	            _super.call(this);
	            this.stateChangeExpr = stateChangeExpr;
	            this.steps = steps;
	        }
	        return AnimationStateTransitionMetadata;
	    }(AnimationStateMetadata));
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationMetadata = (function () {
	        function AnimationMetadata() {
	        }
	        return AnimationMetadata;
	    }());
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link keyframes keyframes
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationKeyframesSequenceMetadata = (function (_super) {
	        __extends$13(AnimationKeyframesSequenceMetadata, _super);
	        function AnimationKeyframesSequenceMetadata(steps) {
	            _super.call(this);
	            this.steps = steps;
	        }
	        return AnimationKeyframesSequenceMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link style style animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationStyleMetadata = (function (_super) {
	        __extends$13(AnimationStyleMetadata, _super);
	        function AnimationStyleMetadata(styles, offset) {
	            if (offset === void 0) { offset = null; }
	            _super.call(this);
	            this.styles = styles;
	            this.offset = offset;
	        }
	        return AnimationStyleMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link animate animate
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationAnimateMetadata = (function (_super) {
	        __extends$13(AnimationAnimateMetadata, _super);
	        function AnimationAnimateMetadata(timings, styles) {
	            _super.call(this);
	            this.timings = timings;
	            this.styles = styles;
	        }
	        return AnimationAnimateMetadata;
	    }(AnimationMetadata));
	    /**
	     * @experimental Animation support is experimental.
	     */
	    var AnimationWithStepsMetadata = (function (_super) {
	        __extends$13(AnimationWithStepsMetadata, _super);
	        function AnimationWithStepsMetadata() {
	            _super.call(this);
	        }
	        Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
	            get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationWithStepsMetadata;
	    }(AnimationMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link sequence sequence
	     * animation function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationSequenceMetadata = (function (_super) {
	        __extends$13(AnimationSequenceMetadata, _super);
	        function AnimationSequenceMetadata(_steps) {
	            _super.call(this);
	            this._steps = _steps;
	        }
	        Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
	            get: function () { return this._steps; },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationSequenceMetadata;
	    }(AnimationWithStepsMetadata));
	    /**
	     * Metadata representing the entry of animations.
	     * Instances of this class are provided via the animation DSL when the {@link group group animation
	     * function} is called.
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationGroupMetadata = (function (_super) {
	        __extends$13(AnimationGroupMetadata, _super);
	        function AnimationGroupMetadata(_steps) {
	            _super.call(this);
	            this._steps = _steps;
	        }
	        Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
	            get: function () { return this._steps; },
	            enumerable: true,
	            configurable: true
	        });
	        return AnimationGroupMetadata;
	    }(AnimationWithStepsMetadata));
	    /**
	     * `animate` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `animate` specifies an animation step that will apply the provided `styles` data for a given
	     * amount of
	     * time based on the provided `timing` expression value. Calls to `animate` are expected to be
	     * used within {@link sequence an animation sequence}, {@link group group}, or {@link transition
	     * transition}.
	     *
	     * ### Usage
	     *
	     * The `animate` function accepts two input parameters: `timing` and `styles`:
	     *
	     * - `timing` is a string based value that can be a combination of a duration with optional
	     * delay and easing values. The format for the expression breaks down to `duration delay easing`
	     * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
	     * delay=100, easing=ease-out`.
	     * If a numeric value is provided then that will be used as the `duration` value in millisecond
	     * form.
	     * - `styles` is the style input data which can either be a call to {@link style style} or {@link
	     * keyframes keyframes}.
	     * If left empty then the styles from the destination state will be collected and used (this is
	     * useful when
	     * describing an animation step that will complete an animation by {@link
	     * transition#the-final-animate-call animating to the final state}).
	     *
	     * ```typescript
	     * // various functions for specifying timing data
	     * animate(500, style(...))
	     * animate("1s", style(...))
	     * animate("100ms 0.5s", style(...))
	     * animate("5s ease", style(...))
	     * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
	     *
	     * // either style() of keyframes() can be used
	     * animate(500, style({ background: "red" }))
	     * animate(500, keyframes([
	     *   style({ background: "blue" })),
	     *   style({ background: "red" }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function animate(timing, styles) {
	        if (styles === void 0) { styles = null; }
	        var stylesEntry = styles;
	        if (!isPresent(stylesEntry)) {
	            var EMPTY_STYLE = {};
	            stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
	        }
	        return new AnimationAnimateMetadata(timing, stylesEntry);
	    }
	    /**
	     * `group` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `group` specifies a list of animation steps that are all run in parallel. Grouped animations
	     * are useful when a series of styles must be animated/closed off
	     * at different statrting/ending times.
	     *
	     * The `group` function can either be used within a {@link sequence sequence} or a {@link transition
	     * transition}
	     * and it will only continue to the next instruction once all of the inner animation steps
	     * have completed.
	     *
	     * ### Usage
	     *
	     * The `steps` data that is passed into the `group` animation function can either consist
	     * of {@link style style} or {@link animate animate} function calls. Each call to `style()` or
	     * `animate()`
	     * within a group will be executed instantly (use {@link keyframes keyframes} or a
	     * {@link animate#usage animate() with a delay value} to offset styles to be applied at a later
	     * time).
	     *
	     * ```typescript
	     * group([
	     *   animate("1s", { background: "black" }))
	     *   animate("2s", { color: "white" }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function group(steps) {
	        return new AnimationGroupMetadata(steps);
	    }
	    /**
	     * `sequence` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used
	     * by default when an array is passed as animation data into {@link transition transition}.)
	     *
	     * The `sequence` function can either be used within a {@link group group} or a {@link transition
	     * transition}
	     * and it will only continue to the next instruction once each of the inner animation steps
	     * have completed.
	     *
	     * To perform animation styling in parallel with other animation steps then
	     * have a look at the {@link group group} animation function.
	     *
	     * ### Usage
	     *
	     * The `steps` data that is passed into the `sequence` animation function can either consist
	     * of {@link style style} or {@link animate animate} function calls. A call to `style()` will apply
	     * the
	     * provided styling data immediately while a call to `animate()` will apply its styling
	     * data over a given time depending on its timing data.
	     *
	     * ```typescript
	     * sequence([
	     *   style({ opacity: 0 })),
	     *   animate("1s", { opacity: 1 }))
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function sequence(steps) {
	        return new AnimationSequenceMetadata(steps);
	    }
	    /**
	     * `style` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `style` declares a key/value object containing CSS properties/styles that can then
	     * be used for {@link state animation states}, within an {@link sequence animation sequence}, or as
	     * styling data for both {@link animate animate} and {@link keyframes keyframes}.
	     *
	     * ### Usage
	     *
	     * `style` takes in a key/value string map as data and expects one or more CSS property/value
	     * pairs to be defined.
	     *
	     * ```typescript
	     * // string values are used for css properties
	     * style({ background: "red", color: "blue" })
	     *
	     * // numerical (pixel) values are also supported
	     * style({ width: 100, height: 0 })
	     * ```
	     *
	     * #### Auto-styles (using `*`)
	     *
	     * When an asterix (`*`) character is used as a value then it will be detected from the element
	     * being animated
	     * and applied as animation data when the animation starts.
	     *
	     * This feature proves useful for a state depending on layout and/or environment factors; in such
	     * cases
	     * the styles are calculated just before the animation starts.
	     *
	     * ```typescript
	     * // the steps below will animate from 0 to the
	     * // actual height of the element
	     * style({ height: 0 }),
	     * animate("1s", style({ height: "*" }))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function style(tokens) {
	        var input;
	        var offset = null;
	        if (isString(tokens)) {
	            input = [tokens];
	        }
	        else {
	            if (isArray(tokens)) {
	                input = tokens;
	            }
	            else {
	                input = [tokens];
	            }
	            input.forEach(function (entry) {
	                var entryOffset = entry['offset'];
	                if (isPresent(entryOffset)) {
	                    offset = offset == null ? parseFloat(entryOffset) : offset;
	                }
	            });
	        }
	        return new AnimationStyleMetadata(input, offset);
	    }
	    /**
	     * `state` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `state` declares an animation state within the given trigger. When a state is
	     * active within a component then its associated styles will persist on
	     * the element that the trigger is attached to (even when the animation ends).
	     *
	     * To animate between states, have a look at the animation {@link transition transition}
	     * DSL function. To register states to an animation trigger please have a look
	     * at the {@link trigger trigger} function.
	     *
	     * #### The `void` state
	     *
	     * The `void` state value is a reserved word that angular uses to determine when the element is not
	     * apart
	     * of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
	     * associated element
	     * is void).
	     *
	     * #### The `*` (default) state
	     *
	     * The `*` state (when styled) is a fallback state that will be used if
	     * the state that is being animated is not declared within the trigger.
	     *
	     * ### Usage
	     *
	     * `state` will declare an animation state with its associated styles
	     * within the given trigger.
	     *
	     * - `stateNameExpr` can be one or more state names separated by commas.
	     * - `styles` refers to the {@link style styling data} that will be persisted on the element once
	     * the state
	     * has been reached.
	     *
	     * ```typescript
	     * // "void" is a reserved name for a state and is used to represent
	     * // the state in which an element is detached from from the application.
	     * state("void", style({ height: 0 }))
	     *
	     * // user-defined states
	     * state("closed", style({ height: 0 }))
	     * state("open, visible", style({ height: "*" }))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function state(stateNameExpr, styles) {
	        return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
	    }
	    /**
	     * `keyframes` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `keyframes` specifies a collection of {@link style style} entries each optionally characterized
	     * by an `offset` value.
	     *
	     * ### Usage
	     *
	     * The `keyframes` animation function is designed to be used alongside the {@link animate animate}
	     * animation function. Instead of applying animations from where they are
	     * currently to their destination, keyframes can describe how each style entry is applied
	     * and at what point within the animation arc (much like CSS Keyframe Animations do).
	     *
	     * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at
	     * what percentage of the animate time the styles will be applied.
	     *
	     * ```typescript
	     * // the provided offset values describe when each backgroundColor value is applied.
	     * animate("5s", keyframes([
	     *   style({ backgroundColor: "red", offset: 0 }),
	     *   style({ backgroundColor: "blue", offset: 0.2 }),
	     *   style({ backgroundColor: "orange", offset: 0.3 }),
	     *   style({ backgroundColor: "black", offset: 1 })
	     * ]))
	     * ```
	     *
	     * Alternatively, if there are no `offset` values used within the style entries then the offsets
	     * will
	     * be calculated automatically.
	     *
	     * ```typescript
	     * animate("5s", keyframes([
	     *   style({ backgroundColor: "red" }) // offset = 0
	     *   style({ backgroundColor: "blue" }) // offset = 0.33
	     *   style({ backgroundColor: "orange" }) // offset = 0.66
	     *   style({ backgroundColor: "black" }) // offset = 1
	     * ]))
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function keyframes(steps) {
	        return new AnimationKeyframesSequenceMetadata(steps);
	    }
	    /**
	     * `transition` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `transition` declares the {@link sequence sequence of animation steps} that will be run when the
	     * provided
	     * `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 => state2`
	     * which consists
	     * of two known states (use an asterix (`*`) to refer to a dynamic starting and/or ending state).
	     *
	     * Animation transitions are placed within an {@link trigger animation trigger}. For an transition
	     * to animate to
	     * a state value and persist its styles then one or more {@link state animation states} is expected
	     * to be defined.
	     *
	     * ### Usage
	     *
	     * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
	     * what the
	     * previous state is and what the current state has become. In other words, if a transition is
	     * defined that
	     * matches the old/current state criteria then the associated animation will be triggered.
	     *
	     * ```typescript
	     * // all transition/state changes are defined within an animation trigger
	     * trigger("myAnimationTrigger", [
	     *   // if a state is defined then its styles will be persisted when the
	     *   // animation has fully completed itself
	     *   state("on", style({ background: "green" })),
	     *   state("off", style({ background: "grey" })),
	     *
	     *   // a transition animation that will be kicked off when the state value
	     *   // bound to "myAnimationTrigger" changes from "on" to "off"
	     *   transition("on => off", animate(500)),
	     *
	     *   // it is also possible to do run the same animation for both directions
	     *   transition("on <=> off", animate(500)),
	     *
	     *   // or to define multiple states pairs separated by commas
	     *   transition("on => off, off => void", animate(500)),
	     *
	     *   // this is a catch-all state change for when an element is inserted into
	     *   // the page and the destination state is unknown
	     *   transition("void => *", [
	     *     style({ opacity: 0 }),
	     *     animate(500)
	     *   ]),
	     *
	     *   // this will capture a state change between any states
	     *   transition("* => *", animate("1s 0s")),
	     * ])
	     * ```
	     *
	     * The template associated with this component will make use of the `myAnimationTrigger`
	     * animation trigger by binding to an element within its template code.
	     *
	     * ```html
	     * <!-- somewhere inside of my-component-tpl.html -->
	     * <div [@myAnimationTrigger]="myStatusExp">...</div>
	     * ```
	     *
	     * #### The final `animate` call
	     *
	     * If the final step within the transition steps is a call to `animate()` that **only**
	     * uses a timing value with **no style data** then it will be automatically used as the final
	     * animation
	     * arc for the element to animate itself to the final state. This involves an automatic mix of
	     * adding/removing CSS styles so that the element will be in the exact state it should be for the
	     * applied state to be presented correctly.
	     *
	     * ```
	     * // start off by hiding the element, but make sure that it animates properly to whatever state
	     * // is currently active for "myAnimationTrigger"
	     * transition("void => *", [
	     *   style({ opacity: 0 }),
	     *   animate(500)
	     * ])
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function transition(stateChangeExpr, steps) {
	        var animationData = isArray(steps) ? new AnimationSequenceMetadata(steps) :
	            steps;
	        return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
	    }
	    /**
	     * `trigger` is an animation-specific function that is designed to be used inside of Angular2's
	     * animation
	     * DSL language. If this information is new, please navigate to the
	     * {@link Component#animations-anchor component animations metadata
	     * page} to gain a better understanding of how animations in Angular2 are used.
	     *
	     * `trigger` Creates an animation trigger which will a list of {@link state state} and {@link
	     * transition transition}
	     * entries that will be evaluated when the expression bound to the trigger changes.
	     *
	     * Triggers are registered within the component annotation data under the
	     * {@link Component#animations-anchor animations section}. An animation trigger can
	     * be placed on an element within a template by referencing the name of the
	     * trigger followed by the expression value that the trigger is bound to
	     * (in the form of `[@triggerName]="expression"`.
	     *
	     * ### Usage
	     *
	     * `trigger` will create an animation trigger reference based on the provided `name` value.
	     * The provided `animation` value is expected to be an array consisting of {@link state state} and
	     * {@link transition transition}
	     * declarations.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-component',
	     *   templateUrl: 'my-component-tpl.html',
	     *   animations: [
	     *     trigger("myAnimationTrigger", [
	     *       state(...),
	     *       state(...),
	     *       transition(...),
	     *       transition(...)
	     *     ])
	     *   ]
	     * })
	     * class MyComponent {
	     *   myStatusExp = "something";
	     * }
	     * ```
	     *
	     * The template associated with this component will make use of the `myAnimationTrigger`
	     * animation trigger by binding to an element within its template code.
	     *
	     * ```html
	     * <!-- somewhere inside of my-component-tpl.html -->
	     * <div [@myAnimationTrigger]="myStatusExp">...</div>
	     * ```
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
	     *
	     * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
	     *
	     * @experimental Animation support is experimental.
	     */
	    function trigger(name, animation) {
	        return new AnimationEntryMetadata(name, animation);
	    }
	
	    function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
	        if (nullValue === void 0) { nullValue = null; }
	        var finalStyles = {};
	        StringMapWrapper.forEach(newStyles, function (value, prop) {
	            finalStyles[prop] = value == AUTO_STYLE ? nullValue : value.toString();
	        });
	        StringMapWrapper.forEach(previousStyles, function (value, prop) {
	            if (!isPresent(finalStyles[prop])) {
	                finalStyles[prop] = nullValue;
	            }
	        });
	        return finalStyles;
	    }
	    function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
	        var limit = keyframes.length - 1;
	        var firstKeyframe = keyframes[0];
	        // phase 1: copy all the styles from the first keyframe into the lookup map
	        var flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
	        var extraFirstKeyframeStyles = {};
	        var hasExtraFirstStyles = false;
	        StringMapWrapper.forEach(collectedStyles, function (value, prop) {
	            // if the style is already defined in the first keyframe then
	            // we do not replace it.
	            if (!flatenedFirstKeyframeStyles[prop]) {
	                flatenedFirstKeyframeStyles[prop] = value;
	                extraFirstKeyframeStyles[prop] = value;
	                hasExtraFirstStyles = true;
	            }
	        });
	        var keyframeCollectedStyles = StringMapWrapper.merge({}, flatenedFirstKeyframeStyles);
	        // phase 2: normalize the final keyframe
	        var finalKeyframe = keyframes[limit];
	        ListWrapper.insert(finalKeyframe.styles.styles, 0, finalStateStyles);
	        var flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
	        var extraFinalKeyframeStyles = {};
	        var hasExtraFinalStyles = false;
	        StringMapWrapper.forEach(keyframeCollectedStyles, function (value, prop) {
	            if (!isPresent(flatenedFinalKeyframeStyles[prop])) {
	                extraFinalKeyframeStyles[prop] = AUTO_STYLE;
	                hasExtraFinalStyles = true;
	            }
	        });
	        if (hasExtraFinalStyles) {
	            finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
	        }
	        StringMapWrapper.forEach(flatenedFinalKeyframeStyles, function (value, prop) {
	            if (!isPresent(flatenedFirstKeyframeStyles[prop])) {
	                extraFirstKeyframeStyles[prop] = AUTO_STYLE;
	                hasExtraFirstStyles = true;
	            }
	        });
	        if (hasExtraFirstStyles) {
	            firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
	        }
	        return keyframes;
	    }
	    function clearStyles(styles) {
	        var finalStyles = {};
	        StringMapWrapper.keys(styles).forEach(function (key) { finalStyles[key] = null; });
	        return finalStyles;
	    }
	    function collectAndResolveStyles(collection, styles) {
	        return styles.map(function (entry) {
	            var stylesObj = {};
	            StringMapWrapper.forEach(entry, function (value, prop) {
	                if (value == FILL_STYLE_FLAG) {
	                    value = collection[prop];
	                    if (!isPresent(value)) {
	                        value = AUTO_STYLE;
	                    }
	                }
	                collection[prop] = value;
	                stylesObj[prop] = value;
	            });
	            return stylesObj;
	        });
	    }
	    function renderStyles(element, renderer, styles) {
	        StringMapWrapper.forEach(styles, function (value, prop) { renderer.setElementStyle(element, prop, value); });
	    }
	    function flattenStyles(styles) {
	        var finalStyles = {};
	        styles.forEach(function (entry) {
	            StringMapWrapper.forEach(entry, function (value, prop) { finalStyles[prop] = value; });
	        });
	        return finalStyles;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var AnimationStyles = (function () {
	        function AnimationStyles(styles) {
	            this.styles = styles;
	        }
	        return AnimationStyles;
	    }());
	
	    var DebugDomRootRenderer = (function () {
	        function DebugDomRootRenderer(_delegate) {
	            this._delegate = _delegate;
	        }
	        DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	            return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
	        };
	        return DebugDomRootRenderer;
	    }());
	    var DebugDomRenderer = (function () {
	        function DebugDomRenderer(_delegate) {
	            this._delegate = _delegate;
	        }
	        DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	            var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
	            var debugEl = new DebugElement(nativeEl, null, debugInfo);
	            indexDebugNode(debugEl);
	            return nativeEl;
	        };
	        DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
	            var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
	            var debugEl = new DebugElement(nativeEl, getDebugNode(parentElement), debugInfo);
	            debugEl.name = name;
	            indexDebugNode(debugEl);
	            return nativeEl;
	        };
	        DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	        DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	            var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
	            var debugEl = new DebugNode(comment, getDebugNode(parentElement), debugInfo);
	            indexDebugNode(debugEl);
	            return comment;
	        };
	        DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	            var text = this._delegate.createText(parentElement, value, debugInfo);
	            var debugEl = new DebugNode(text, getDebugNode(parentElement), debugInfo);
	            indexDebugNode(debugEl);
	            return text;
	        };
	        DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	            var debugParent = getDebugNode(parentElement);
	            if (isPresent(debugParent) && debugParent instanceof DebugElement) {
	                var debugElement_1 = debugParent;
	                nodes.forEach(function (node) { debugElement_1.addChild(getDebugNode(node)); });
	            }
	            this._delegate.projectNodes(parentElement, nodes);
	        };
	        DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	            var debugNode = getDebugNode(node);
	            if (isPresent(debugNode)) {
	                var debugParent = debugNode.parent;
	                if (viewRootNodes.length > 0 && isPresent(debugParent)) {
	                    var debugViewRootNodes = [];
	                    viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(getDebugNode(rootNode)); });
	                    debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	                }
	            }
	            this._delegate.attachViewAfter(node, viewRootNodes);
	        };
	        DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	            viewRootNodes.forEach(function (node) {
	                var debugNode = getDebugNode(node);
	                if (isPresent(debugNode) && isPresent(debugNode.parent)) {
	                    debugNode.parent.removeChild(debugNode);
	                }
	            });
	            this._delegate.detachView(viewRootNodes);
	        };
	        DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	            viewAllNodes.forEach(function (node) { removeDebugNodeFromIndex(getDebugNode(node)); });
	            this._delegate.destroyView(hostElement, viewAllNodes);
	        };
	        DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl)) {
	                debugEl.listeners.push(new EventListener(name, callback));
	            }
	            return this._delegate.listen(renderElement, name, callback);
	        };
	        DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	            return this._delegate.listenGlobal(target, name, callback);
	        };
	        DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.properties[propertyName] = propertyValue;
	            }
	            this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	        };
	        DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.attributes[attributeName] = attributeValue;
	            }
	            this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	        };
	        DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	            this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	        };
	        DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.classes[className] = isAdd;
	            }
	            this._delegate.setElementClass(renderElement, className, isAdd);
	        };
	        DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	            var debugEl = getDebugNode(renderElement);
	            if (isPresent(debugEl) && debugEl instanceof DebugElement) {
	                debugEl.styles[styleName] = styleValue;
	            }
	            this._delegate.setElementStyle(renderElement, styleName, styleValue);
	        };
	        DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	            this._delegate.invokeElementMethod(renderElement, methodName, args);
	        };
	        DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	        DebugDomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing);
	        };
	        return DebugDomRenderer;
	    }());
	
	    var StaticNodeDebugInfo = (function () {
	        function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
	            this.providerTokens = providerTokens;
	            this.componentToken = componentToken;
	            this.refTokens = refTokens;
	        }
	        return StaticNodeDebugInfo;
	    }());
	    var DebugContext = (function () {
	        function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
	            this._view = _view;
	            this._nodeIndex = _nodeIndex;
	            this._tplRow = _tplRow;
	            this._tplCol = _tplCol;
	        }
	        Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
	            get: function () {
	                return isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "context", {
	            get: function () { return this._view.context; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "component", {
	            get: function () {
	                var staticNodeInfo = this._staticNodeInfo;
	                if (isPresent(staticNodeInfo) && isPresent(staticNodeInfo.componentToken)) {
	                    return this.injector.get(staticNodeInfo.componentToken);
	                }
	                return null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
	            get: function () {
	                var componentView = this._view;
	                while (isPresent(componentView.declarationAppElement) &&
	                    componentView.type !== ViewType.COMPONENT) {
	                    componentView = componentView.declarationAppElement.parentView;
	                }
	                return isPresent(componentView.declarationAppElement) ?
	                    componentView.declarationAppElement.nativeElement :
	                    null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "injector", {
	            get: function () { return this._view.injector(this._nodeIndex); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "renderNode", {
	            get: function () {
	                if (isPresent(this._nodeIndex) && this._view.allNodes) {
	                    return this._view.allNodes[this._nodeIndex];
	                }
	                else {
	                    return null;
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "providerTokens", {
	            get: function () {
	                var staticNodeInfo = this._staticNodeInfo;
	                return isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "source", {
	            get: function () {
	                return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DebugContext.prototype, "references", {
	            get: function () {
	                var _this = this;
	                var varValues = {};
	                var staticNodeInfo = this._staticNodeInfo;
	                if (isPresent(staticNodeInfo)) {
	                    var refs = staticNodeInfo.refTokens;
	                    StringMapWrapper.forEach(refs, function (refToken, refName) {
	                        var varValue;
	                        if (isBlank(refToken)) {
	                            varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
	                        }
	                        else {
	                            varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
	                        }
	                        varValues[refName] = varValue;
	                    });
	                }
	                return varValues;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return DebugContext;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * An instance of this class is returned as an event parameter when an animation
	     * callback is captured for an animation either during the start or done phase.
	     *
	     * ```typescript
	     * @Component({
	     *   host: {
	     *     '[@myAnimationTrigger]': 'someExpression',
	     *     '(@myAnimationTrigger.start)': 'captureStartEvent($event)',
	     *     '(@myAnimationTrigger.done)': 'captureDoneEvent($event)',
	     *   },
	     *   animations: [
	     *     trigger("myAnimationTrigger", [
	     *        // ...
	     *     ])
	     *   ]
	     * })
	     * class MyComponent {
	     *   someExpression: any = false;
	     *   captureStartEvent(event: AnimationTransitionEvent) {
	     *     // the toState, fromState and totalTime data is accessible from the event variable
	     *   }
	     *
	     *   captureDoneEvent(event: AnimationTransitionEvent) {
	     *     // the toState, fromState and totalTime data is accessible from the event variable
	     *   }
	     * }
	     * ```
	     *
	     * @experimental Animation support is experimental.
	     */
	    var AnimationTransitionEvent = (function () {
	        function AnimationTransitionEvent(_a) {
	            var fromState = _a.fromState, toState = _a.toState, totalTime = _a.totalTime;
	            this.fromState = fromState;
	            this.toState = toState;
	            this.totalTime = totalTime;
	        }
	        return AnimationTransitionEvent;
	    }());
	
	    var ViewAnimationMap = (function () {
	        function ViewAnimationMap() {
	            this._map = new Map$1();
	            this._allPlayers = [];
	        }
	        Object.defineProperty(ViewAnimationMap.prototype, "length", {
	            get: function () { return this.getAllPlayers().length; },
	            enumerable: true,
	            configurable: true
	        });
	        ViewAnimationMap.prototype.find = function (element, animationName) {
	            var playersByAnimation = this._map.get(element);
	            if (isPresent(playersByAnimation)) {
	                return playersByAnimation[animationName];
	            }
	        };
	        ViewAnimationMap.prototype.findAllPlayersByElement = function (element) {
	            var el = this._map.get(element);
	            return el ? StringMapWrapper.values(el) : [];
	        };
	        ViewAnimationMap.prototype.set = function (element, animationName, player) {
	            var playersByAnimation = this._map.get(element);
	            if (!isPresent(playersByAnimation)) {
	                playersByAnimation = {};
	            }
	            var existingEntry = playersByAnimation[animationName];
	            if (isPresent(existingEntry)) {
	                this.remove(element, animationName);
	            }
	            playersByAnimation[animationName] = player;
	            this._allPlayers.push(player);
	            this._map.set(element, playersByAnimation);
	        };
	        ViewAnimationMap.prototype.getAllPlayers = function () { return this._allPlayers; };
	        ViewAnimationMap.prototype.remove = function (element, animationName) {
	            var playersByAnimation = this._map.get(element);
	            if (isPresent(playersByAnimation)) {
	                var player = playersByAnimation[animationName];
	                delete playersByAnimation[animationName];
	                var index = this._allPlayers.indexOf(player);
	                ListWrapper.removeAt(this._allPlayers, index);
	                if (StringMapWrapper.isEmpty(playersByAnimation)) {
	                    this._map.delete(element);
	                }
	            }
	        };
	        return ViewAnimationMap;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$15 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _UNDEFINED$1 = new Object();
	    var ElementInjector = (function (_super) {
	        __extends$15(ElementInjector, _super);
	        function ElementInjector(_view, _nodeIndex) {
	            _super.call(this);
	            this._view = _view;
	            this._nodeIndex = _nodeIndex;
	        }
	        ElementInjector.prototype.get = function (token, notFoundValue) {
	            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
	            var result = _UNDEFINED$1;
	            if (result === _UNDEFINED$1) {
	                result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED$1);
	            }
	            if (result === _UNDEFINED$1) {
	                result = this._view.parentInjector.get(token, notFoundValue);
	            }
	            return result;
	        };
	        return ElementInjector;
	    }(Injector));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$14 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _scope_check = wtfCreateScope("AppView#check(ascii id)");
	    /**
	     * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	     *
	     */
	    var AppView = (function () {
	        function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
	            this.clazz = clazz;
	            this.componentType = componentType;
	            this.type = type;
	            this.viewUtils = viewUtils;
	            this.parentInjector = parentInjector;
	            this.declarationAppElement = declarationAppElement;
	            this.cdMode = cdMode;
	            this.contentChildren = [];
	            this.viewChildren = [];
	            this.viewContainerElement = null;
	            this.numberOfChecks = 0;
	            this.animationPlayers = new ViewAnimationMap();
	            this._animationListeners = new Map();
	            this.ref = new ViewRef_(this);
	            if (type === ViewType.COMPONENT || type === ViewType.HOST) {
	                this.renderer = viewUtils.renderComponent(componentType);
	            }
	            else {
	                this.renderer = declarationAppElement.parentView.renderer;
	            }
	        }
	        Object.defineProperty(AppView.prototype, "destroyed", {
	            get: function () { return this.cdMode === ChangeDetectorStatus.Destroyed; },
	            enumerable: true,
	            configurable: true
	        });
	        AppView.prototype.cancelActiveAnimation = function (element, animationName, removeAllAnimations) {
	            if (removeAllAnimations === void 0) { removeAllAnimations = false; }
	            if (removeAllAnimations) {
	                this.animationPlayers.findAllPlayersByElement(element).forEach(function (player) { return player.destroy(); });
	            }
	            else {
	                var player = this.animationPlayers.find(element, animationName);
	                if (isPresent(player)) {
	                    player.destroy();
	                }
	            }
	        };
	        AppView.prototype.queueAnimation = function (element, animationName, player, totalTime, fromState, toState) {
	            var _this = this;
	            queueAnimation(player);
	            var event = new AnimationTransitionEvent({ 'fromState': fromState, 'toState': toState, 'totalTime': totalTime });
	            this.animationPlayers.set(element, animationName, player);
	            player.onDone(function () {
	                // TODO: make this into a datastructure for done|start
	                _this.triggerAnimationOutput(element, animationName, 'done', event);
	                _this.animationPlayers.remove(element, animationName);
	            });
	            player.onStart(function () { _this.triggerAnimationOutput(element, animationName, 'start', event); });
	        };
	        AppView.prototype.triggerAnimationOutput = function (element, animationName, phase, event) {
	            var listeners = this._animationListeners.get(element);
	            if (isPresent(listeners) && listeners.length) {
	                for (var i = 0; i < listeners.length; i++) {
	                    var listener = listeners[i];
	                    // we check for both the name in addition to the phase in the event
	                    // that there may be more than one @trigger on the same element
	                    if (listener.output.name == animationName && listener.output.phase == phase) {
	                        listener.handler(event);
	                        break;
	                    }
	                }
	            }
	        };
	        AppView.prototype.registerAnimationOutput = function (element, outputEvent, eventHandler) {
	            var entry = new _AnimationOutputWithHandler(outputEvent, eventHandler);
	            var animations = this._animationListeners.get(element);
	            if (!isPresent(animations)) {
	                this._animationListeners.set(element, animations = []);
	            }
	            animations.push(entry);
	        };
	        AppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	            this.context = context;
	            var projectableNodes;
	            switch (this.type) {
	                case ViewType.COMPONENT:
	                    projectableNodes = ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
	                    break;
	                case ViewType.EMBEDDED:
	                    projectableNodes = this.declarationAppElement.parentView.projectableNodes;
	                    break;
	                case ViewType.HOST:
	                    // Note: Don't ensure the slot count for the projectableNodes as we store
	                    // them only for the contained component view (which will later check the slot count...)
	                    projectableNodes = givenProjectableNodes;
	                    break;
	            }
	            this._hasExternalHostElement = isPresent(rootSelectorOrNode);
	            this.projectableNodes = projectableNodes;
	            return this.createInternal(rootSelectorOrNode);
	        };
	        /**
	         * Overwritten by implementations.
	         * Returns the AppElement for the host element for ViewType.HOST.
	         */
	        AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	        AppView.prototype.init = function (rootNodesOrAppElements, allNodes, disposables, subscriptions) {
	            this.rootNodesOrAppElements = rootNodesOrAppElements;
	            this.allNodes = allNodes;
	            this.disposables = disposables;
	            this.subscriptions = subscriptions;
	            if (this.type === ViewType.COMPONENT) {
	                // Note: the render nodes have been attached to their host element
	                // in the ViewFactory already.
	                this.declarationAppElement.parentView.viewChildren.push(this);
	                this.dirtyParentQueriesInternal();
	            }
	        };
	        AppView.prototype.selectOrCreateHostElement = function (elementName, rootSelectorOrNode, debugInfo) {
	            var hostElement;
	            if (isPresent(rootSelectorOrNode)) {
	                hostElement = this.renderer.selectRootElement(rootSelectorOrNode, debugInfo);
	            }
	            else {
	                hostElement = this.renderer.createElement(null, elementName, debugInfo);
	            }
	            return hostElement;
	        };
	        AppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	            return this.injectorGetInternal(token, nodeIndex, notFoundResult);
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	            return notFoundResult;
	        };
	        AppView.prototype.injector = function (nodeIndex) {
	            if (isPresent(nodeIndex)) {
	                return new ElementInjector(this, nodeIndex);
	            }
	            else {
	                return this.parentInjector;
	            }
	        };
	        AppView.prototype.destroy = function () {
	            if (this._hasExternalHostElement) {
	                this.renderer.detachView(this.flatRootNodes);
	            }
	            else if (isPresent(this.viewContainerElement)) {
	                this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	            }
	            this._destroyRecurse();
	        };
	        AppView.prototype._destroyRecurse = function () {
	            if (this.cdMode === ChangeDetectorStatus.Destroyed) {
	                return;
	            }
	            var children = this.contentChildren;
	            for (var i = 0; i < children.length; i++) {
	                children[i]._destroyRecurse();
	            }
	            children = this.viewChildren;
	            for (var i = 0; i < children.length; i++) {
	                children[i]._destroyRecurse();
	            }
	            this.destroyLocal();
	            this.cdMode = ChangeDetectorStatus.Destroyed;
	        };
	        AppView.prototype.destroyLocal = function () {
	            var _this = this;
	            var hostElement = this.type === ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
	            for (var i = 0; i < this.disposables.length; i++) {
	                this.disposables[i]();
	            }
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                this.subscriptions[i].unsubscribe();
	            }
	            this.destroyInternal();
	            this.dirtyParentQueriesInternal();
	            if (this.animationPlayers.length == 0) {
	                this.renderer.destroyView(hostElement, this.allNodes);
	            }
	            else {
	                var player = new AnimationGroupPlayer(this.animationPlayers.getAllPlayers());
	                player.onDone(function () { _this.renderer.destroyView(hostElement, _this.allNodes); });
	            }
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.destroyInternal = function () { };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.detachInternal = function () { };
	        AppView.prototype.detach = function () {
	            var _this = this;
	            this.detachInternal();
	            if (this.animationPlayers.length == 0) {
	                this.renderer.detachView(this.flatRootNodes);
	            }
	            else {
	                var player = new AnimationGroupPlayer(this.animationPlayers.getAllPlayers());
	                player.onDone(function () { _this.renderer.detachView(_this.flatRootNodes); });
	            }
	        };
	        Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	            get: function () { return this.ref; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "parent", {
	            get: function () {
	                return isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "flatRootNodes", {
	            get: function () { return flattenNestedViewRenderNodes(this.rootNodesOrAppElements); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AppView.prototype, "lastRootNode", {
	            get: function () {
	                var lastNode = this.rootNodesOrAppElements.length > 0 ?
	                    this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] :
	                    null;
	                return _findLastRenderNode(lastNode);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.dirtyParentQueriesInternal = function () { };
	        AppView.prototype.detectChanges = function (throwOnChange) {
	            var s = _scope_check(this.clazz);
	            if (this.cdMode === ChangeDetectorStatus.Checked ||
	                this.cdMode === ChangeDetectorStatus.Errored)
	                return;
	            if (this.cdMode === ChangeDetectorStatus.Destroyed) {
	                this.throwDestroyedError('detectChanges');
	            }
	            this.detectChangesInternal(throwOnChange);
	            if (this.cdMode === ChangeDetectorStatus.CheckOnce)
	                this.cdMode = ChangeDetectorStatus.Checked;
	            this.numberOfChecks++;
	            wtfLeave(s);
	        };
	        /**
	         * Overwritten by implementations
	         */
	        AppView.prototype.detectChangesInternal = function (throwOnChange) {
	            this.detectContentChildrenChanges(throwOnChange);
	            this.detectViewChildrenChanges(throwOnChange);
	        };
	        AppView.prototype.detectContentChildrenChanges = function (throwOnChange) {
	            for (var i = 0; i < this.contentChildren.length; ++i) {
	                var child = this.contentChildren[i];
	                if (child.cdMode === ChangeDetectorStatus.Detached)
	                    continue;
	                child.detectChanges(throwOnChange);
	            }
	        };
	        AppView.prototype.detectViewChildrenChanges = function (throwOnChange) {
	            for (var i = 0; i < this.viewChildren.length; ++i) {
	                var child = this.viewChildren[i];
	                if (child.cdMode === ChangeDetectorStatus.Detached)
	                    continue;
	                child.detectChanges(throwOnChange);
	            }
	        };
	        AppView.prototype.markContentChildAsMoved = function (renderAppElement) { this.dirtyParentQueriesInternal(); };
	        AppView.prototype.addToContentChildren = function (renderAppElement) {
	            renderAppElement.parentView.contentChildren.push(this);
	            this.viewContainerElement = renderAppElement;
	            this.dirtyParentQueriesInternal();
	        };
	        AppView.prototype.removeFromContentChildren = function (renderAppElement) {
	            ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
	            this.dirtyParentQueriesInternal();
	            this.viewContainerElement = null;
	        };
	        AppView.prototype.markAsCheckOnce = function () { this.cdMode = ChangeDetectorStatus.CheckOnce; };
	        AppView.prototype.markPathToRootAsCheckOnce = function () {
	            var c = this;
	            while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
	                if (c.cdMode === ChangeDetectorStatus.Checked) {
	                    c.cdMode = ChangeDetectorStatus.CheckOnce;
	                }
	                var parentEl = c.type === ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
	                c = isPresent(parentEl) ? parentEl.parentView : null;
	            }
	        };
	        AppView.prototype.eventHandler = function (cb) { return cb; };
	        AppView.prototype.throwDestroyedError = function (details) { throw new ViewDestroyedError(details); };
	        return AppView;
	    }());
	    var DebugAppView = (function (_super) {
	        __extends$14(DebugAppView, _super);
	        function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
	            _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
	            this.staticNodeDebugInfos = staticNodeDebugInfos;
	            this._currentDebugContext = null;
	        }
	        DebugAppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	            this._resetDebug();
	            try {
	                return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	            this._resetDebug();
	            try {
	                return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.detach = function () {
	            this._resetDebug();
	            try {
	                _super.prototype.detach.call(this);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.destroyLocal = function () {
	            this._resetDebug();
	            try {
	                _super.prototype.destroyLocal.call(this);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype.detectChanges = function (throwOnChange) {
	            this._resetDebug();
	            try {
	                _super.prototype.detectChanges.call(this, throwOnChange);
	            }
	            catch (e) {
	                this._rethrowWithContext(e);
	                throw e;
	            }
	        };
	        DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
	        DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
	            return this._currentDebugContext = new DebugContext(this, nodeIndex, rowNum, colNum);
	        };
	        DebugAppView.prototype._rethrowWithContext = function (e) {
	            if (!(e instanceof ViewWrappedError)) {
	                if (!(e instanceof ExpressionChangedAfterItHasBeenCheckedError)) {
	                    this.cdMode = ChangeDetectorStatus.Errored;
	                }
	                if (isPresent(this._currentDebugContext)) {
	                    throw new ViewWrappedError(e, this._currentDebugContext);
	                }
	            }
	        };
	        DebugAppView.prototype.eventHandler = function (cb) {
	            var _this = this;
	            var superHandler = _super.prototype.eventHandler.call(this, cb);
	            return function (event) {
	                _this._resetDebug();
	                try {
	                    return superHandler(event);
	                }
	                catch (e) {
	                    _this._rethrowWithContext(e);
	                    throw e;
	                }
	            };
	        };
	        return DebugAppView;
	    }(AppView));
	    function _findLastRenderNode(node) {
	        var lastNode;
	        if (node instanceof AppElement) {
	            var appEl = node;
	            lastNode = appEl.nativeElement;
	            if (isPresent(appEl.nestedViews)) {
	                // Note: Views might have no root nodes at all!
	                for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
	                    var nestedView = appEl.nestedViews[i];
	                    if (nestedView.rootNodesOrAppElements.length > 0) {
	                        lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
	                    }
	                }
	            }
	        }
	        else {
	            lastNode = node;
	        }
	        return lastNode;
	    }
	    var _AnimationOutputWithHandler = (function () {
	        function _AnimationOutputWithHandler(output, handler) {
	            this.output = output;
	            this.handler = handler;
	        }
	        return _AnimationOutputWithHandler;
	    }());
	
	    var __core_private__ = {
	        isDefaultChangeDetectionStrategy: isDefaultChangeDetectionStrategy,
	        ChangeDetectorStatus: ChangeDetectorStatus,
	        CHANGE_DETECTION_STRATEGY_VALUES: CHANGE_DETECTION_STRATEGY_VALUES,
	        constructDependencies: constructDependencies,
	        LifecycleHooks: LifecycleHooks,
	        LIFECYCLE_HOOKS_VALUES: LIFECYCLE_HOOKS_VALUES,
	        ReflectorReader: ReflectorReader,
	        CodegenComponentFactoryResolver: CodegenComponentFactoryResolver,
	        AppElement: AppElement,
	        AppView: AppView,
	        DebugAppView: DebugAppView,
	        NgModuleInjector: NgModuleInjector,
	        registerModuleFactory: registerModuleFactory,
	        ViewType: ViewType,
	        MAX_INTERPOLATION_VALUES: MAX_INTERPOLATION_VALUES,
	        checkBinding: checkBinding,
	        flattenNestedViewRenderNodes: flattenNestedViewRenderNodes,
	        interpolate: interpolate,
	        ViewUtils: ViewUtils,
	        VIEW_ENCAPSULATION_VALUES: VIEW_ENCAPSULATION_VALUES,
	        ViewMetadata: ViewMetadata,
	        DebugContext: DebugContext,
	        StaticNodeDebugInfo: StaticNodeDebugInfo,
	        devModeEqual: devModeEqual,
	        UNINITIALIZED: UNINITIALIZED,
	        ValueUnwrapper: ValueUnwrapper,
	        RenderDebugInfo: RenderDebugInfo,
	        TemplateRef_: TemplateRef_,
	        ReflectionCapabilities: ReflectionCapabilities,
	        makeDecorator: makeDecorator,
	        DebugDomRootRenderer: DebugDomRootRenderer,
	        EMPTY_ARRAY: EMPTY_ARRAY,
	        EMPTY_MAP: EMPTY_MAP,
	        pureProxy1: pureProxy1,
	        pureProxy2: pureProxy2,
	        pureProxy3: pureProxy3,
	        pureProxy4: pureProxy4,
	        pureProxy5: pureProxy5,
	        pureProxy6: pureProxy6,
	        pureProxy7: pureProxy7,
	        pureProxy8: pureProxy8,
	        pureProxy9: pureProxy9,
	        pureProxy10: pureProxy10,
	        castByValue: castByValue,
	        Console: Console,
	        reflector: reflector,
	        Reflector: Reflector,
	        NoOpAnimationPlayer: NoOpAnimationPlayer,
	        AnimationPlayer: AnimationPlayer,
	        AnimationSequencePlayer: AnimationSequencePlayer,
	        AnimationGroupPlayer: AnimationGroupPlayer,
	        AnimationKeyframe: AnimationKeyframe,
	        prepareFinalAnimationStyles: prepareFinalAnimationStyles,
	        balanceAnimationKeyframes: balanceAnimationKeyframes,
	        flattenStyles: flattenStyles,
	        clearStyles: clearStyles,
	        renderStyles: renderStyles,
	        collectAndResolveStyles: collectAndResolveStyles,
	        AnimationStyles: AnimationStyles,
	        AnimationOutput: AnimationOutput,
	        ANY_STATE: ANY_STATE,
	        DEFAULT_STATE: DEFAULT_STATE,
	        EMPTY_STATE: EMPTY_STATE,
	        FILL_STYLE_FLAG: FILL_STYLE_FLAG,
	        ComponentStillLoadingError: ComponentStillLoadingError
	    };
	
	    exports.createPlatform = createPlatform;
	    exports.assertPlatform = assertPlatform;
	    exports.destroyPlatform = destroyPlatform;
	    exports.getPlatform = getPlatform;
	    exports.PlatformRef = PlatformRef;
	    exports.ApplicationRef = ApplicationRef;
	    exports.enableProdMode = enableProdMode;
	    exports.isDevMode = isDevMode;
	    exports.createPlatformFactory = createPlatformFactory;
	    exports.APP_ID = APP_ID;
	    exports.PACKAGE_ROOT_URL = PACKAGE_ROOT_URL;
	    exports.PLATFORM_INITIALIZER = PLATFORM_INITIALIZER;
	    exports.APP_BOOTSTRAP_LISTENER = APP_BOOTSTRAP_LISTENER;
	    exports.APP_INITIALIZER = APP_INITIALIZER;
	    exports.ApplicationInitStatus = ApplicationInitStatus;
	    exports.DebugElement = DebugElement;
	    exports.DebugNode = DebugNode;
	    exports.asNativeElements = asNativeElements;
	    exports.getDebugNode = getDebugNode;
	    exports.Testability = Testability;
	    exports.TestabilityRegistry = TestabilityRegistry;
	    exports.setTestabilityGetter = setTestabilityGetter;
	    exports.TRANSLATIONS = TRANSLATIONS;
	    exports.TRANSLATIONS_FORMAT = TRANSLATIONS_FORMAT;
	    exports.LOCALE_ID = LOCALE_ID;
	    exports.ApplicationModule = ApplicationModule;
	    exports.wtfCreateScope = wtfCreateScope;
	    exports.wtfLeave = wtfLeave;
	    exports.wtfStartTimeRange = wtfStartTimeRange;
	    exports.wtfEndTimeRange = wtfEndTimeRange;
	    exports.Type = Type;
	    exports.EventEmitter = EventEmitter;
	    exports.ErrorHandler = ErrorHandler;
	    exports.AnimationTransitionEvent = AnimationTransitionEvent;
	    exports.AnimationPlayer = AnimationPlayer;
	    exports.Sanitizer = Sanitizer;
	    exports.ANALYZE_FOR_ENTRY_COMPONENTS = ANALYZE_FOR_ENTRY_COMPONENTS;
	    exports.Attribute = Attribute;
	    exports.ContentChild = ContentChild;
	    exports.ContentChildren = ContentChildren;
	    exports.Query = Query;
	    exports.ViewChild = ViewChild;
	    exports.ViewChildren = ViewChildren;
	    exports.Component = Component;
	    exports.Directive = Directive;
	    exports.HostBinding = HostBinding;
	    exports.HostListener = HostListener;
	    exports.Input = Input;
	    exports.Output = Output;
	    exports.Pipe = Pipe;
	    exports.AfterContentChecked = AfterContentChecked;
	    exports.AfterContentInit = AfterContentInit;
	    exports.AfterViewChecked = AfterViewChecked;
	    exports.AfterViewInit = AfterViewInit;
	    exports.DoCheck = DoCheck;
	    exports.OnChanges = OnChanges;
	    exports.OnDestroy = OnDestroy;
	    exports.OnInit = OnInit;
	    exports.CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
	    exports.NO_ERRORS_SCHEMA = NO_ERRORS_SCHEMA;
	    exports.NgModule = NgModule;
	    exports.Class = Class;
	    exports.forwardRef = forwardRef;
	    exports.resolveForwardRef = resolveForwardRef;
	    exports.Injector = Injector;
	    exports.ReflectiveInjector = ReflectiveInjector;
	    exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
	    exports.ReflectiveKey = ReflectiveKey;
	    exports.OpaqueToken = OpaqueToken;
	    exports.Inject = Inject;
	    exports.Optional = Optional;
	    exports.Injectable = Injectable;
	    exports.Self = Self;
	    exports.SkipSelf = SkipSelf;
	    exports.Host = Host;
	    exports.NgZone = NgZone;
	    exports.RenderComponentType = RenderComponentType;
	    exports.Renderer = Renderer;
	    exports.RootRenderer = RootRenderer;
	    exports.COMPILER_OPTIONS = COMPILER_OPTIONS;
	    exports.Compiler = Compiler;
	    exports.CompilerFactory = CompilerFactory;
	    exports.ModuleWithComponentFactories = ModuleWithComponentFactories;
	    exports.ComponentFactory = ComponentFactory;
	    exports.ComponentRef = ComponentRef;
	    exports.ComponentFactoryResolver = ComponentFactoryResolver;
	    exports.ElementRef = ElementRef;
	    exports.NgModuleFactory = NgModuleFactory;
	    exports.NgModuleRef = NgModuleRef;
	    exports.NgModuleFactoryLoader = NgModuleFactoryLoader;
	    exports.getModuleFactory = getModuleFactory;
	    exports.QueryList = QueryList;
	    exports.SystemJsNgModuleLoader = SystemJsNgModuleLoader;
	    exports.SystemJsNgModuleLoaderConfig = SystemJsNgModuleLoaderConfig;
	    exports.TemplateRef = TemplateRef;
	    exports.ViewContainerRef = ViewContainerRef;
	    exports.EmbeddedViewRef = EmbeddedViewRef;
	    exports.ViewRef = ViewRef;
	    exports.ChangeDetectorRef = ChangeDetectorRef;
	    exports.CollectionChangeRecord = CollectionChangeRecord;
	    exports.DefaultIterableDiffer = DefaultIterableDiffer;
	    exports.IterableDiffers = IterableDiffers;
	    exports.KeyValueChangeRecord = KeyValueChangeRecord;
	    exports.KeyValueDiffers = KeyValueDiffers;
	    exports.SimpleChange = SimpleChange;
	    exports.WrappedValue = WrappedValue;
	    exports.platformCore = platformCore;
	    exports.__core_private__ = __core_private__;
	    exports.AUTO_STYLE = AUTO_STYLE;
	    exports.AnimationEntryMetadata = AnimationEntryMetadata;
	    exports.AnimationStateMetadata = AnimationStateMetadata;
	    exports.AnimationStateDeclarationMetadata = AnimationStateDeclarationMetadata;
	    exports.AnimationStateTransitionMetadata = AnimationStateTransitionMetadata;
	    exports.AnimationMetadata = AnimationMetadata;
	    exports.AnimationKeyframesSequenceMetadata = AnimationKeyframesSequenceMetadata;
	    exports.AnimationStyleMetadata = AnimationStyleMetadata;
	    exports.AnimationAnimateMetadata = AnimationAnimateMetadata;
	    exports.AnimationWithStepsMetadata = AnimationWithStepsMetadata;
	    exports.AnimationSequenceMetadata = AnimationSequenceMetadata;
	    exports.AnimationGroupMetadata = AnimationGroupMetadata;
	    exports.animate = animate;
	    exports.group = group;
	    exports.sequence = sequence;
	    exports.style = style;
	    exports.state = state;
	    exports.keyframes = keyframes;
	    exports.transition = transition;
	    exports.trigger = trigger;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)(module), (function() { return this; }())))

/***/ },

/***/ 14:
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(11);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.observable) {
	        exports.$$observable = Symbol.observable;
	    }
	    else {
	        if (typeof Symbol.for === 'function') {
	            exports.$$observable = Symbol.for('observable');
	        }
	        else {
	            exports.$$observable = Symbol('observable');
	        }
	        Symbol.observable = exports.$$observable;
	    }
	}
	else {
	    exports.$$observable = '@@observable';
	}
	//# sourceMappingURL=observable.js.map

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(11);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },

/***/ 26:
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },

/***/ 36:
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(11);
	var observable_1 = __webpack_require__(22);
	var toSubscriber_1 = __webpack_require__(298);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },

/***/ 55:
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        this.name = 'UnsubscriptionError';
	        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },

/***/ 56:
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },

/***/ 59:
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(303);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	
	      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	        lib$es6$promise$$internal$$makePromise(child);
	      }
	
	      var state = parent._state;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    var lib$es6$promise$$internal$$id = 0;
	    function lib$es6$promise$$internal$$nextId() {
	      return lib$es6$promise$$internal$$id++;
	    }
	
	    function lib$es6$promise$$internal$$makePromise(promise) {
	      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        return new Constructor(function(resolve, reject) {
	          reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function(resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	      this._result = this._state = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	        lib$es6$promise$$internal$$makePromise(this.promise);
	      }
	
	      if (lib$es6$promise$utils$$isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	      }
	    }
	
	    function lib$es6$promise$enumerator$$validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(301)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(60)(module)))

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) { /*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.35.1
	  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	  /*global define, module, exports */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.returnExports = factory();
	  }
	}(this, function () {
	  'use strict';
	
	  var _apply = Function.call.bind(Function.apply);
	  var _call = Function.call.bind(Function.call);
	  var isArray = Array.isArray;
	  var keys = Object.keys;
	
	  var not = function notThunker(func) {
	    return function notThunk() {
	      return !_apply(func, this, arguments);
	    };
	  };
	  var throwsError = function (func) {
	    try {
	      func();
	      return false;
	    } catch (e) {
	      return true;
	    }
	  };
	  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
	    try {
	      return func();
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isCallableWithoutNew = not(throwsError);
	  var arePropertyDescriptorsSupported = function () {
	    // if Object.defineProperty exists but throws, it's IE 8
	    return !throwsError(function () {
	      Object.defineProperty({}, 'x', { get: function () {} });
	    });
	  };
	  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
	  var functionsHaveNames = (function foo() {}).name === 'foo'; // eslint-disable-line no-extra-parens
	
	  var _forEach = Function.call.bind(Array.prototype.forEach);
	  var _reduce = Function.call.bind(Array.prototype.reduce);
	  var _filter = Function.call.bind(Array.prototype.filter);
	  var _some = Function.call.bind(Array.prototype.some);
	
	  var defineProperty = function (object, name, value, force) {
	    if (!force && name in object) { return; }
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	
	  // Define configurable, writable and non-enumerable props
	  // if they don’t exist.
	  var defineProperties = function (object, map, forceOverride) {
	    _forEach(keys(map), function (name) {
	      var method = map[name];
	      defineProperty(object, name, method, !!forceOverride);
	    });
	  };
	
	  var _toString = Function.call.bind(Object.prototype.toString);
	  var isCallable =  false ? function IsCallableSlow(x) {
	    // Some old browsers (IE, FF) say that typeof /abc/ === 'function'
	    return typeof x === 'function' && _toString(x) === '[object Function]';
	  } : function IsCallableFast(x) { return typeof x === 'function'; };
	
	  var Value = {
	    getter: function (object, name, getter) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        get: getter
	      });
	    },
	    proxy: function (originalObject, key, targetObject) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
	      Object.defineProperty(targetObject, key, {
	        configurable: originalDescriptor.configurable,
	        enumerable: originalDescriptor.enumerable,
	        get: function getKey() { return originalObject[key]; },
	        set: function setKey(value) { originalObject[key] = value; }
	      });
	    },
	    redefine: function (object, property, newValue) {
	      if (supportsDescriptors) {
	        var descriptor = Object.getOwnPropertyDescriptor(object, property);
	        descriptor.value = newValue;
	        Object.defineProperty(object, property, descriptor);
	      } else {
	        object[property] = newValue;
	      }
	    },
	    defineByDescriptor: function (object, property, descriptor) {
	      if (supportsDescriptors) {
	        Object.defineProperty(object, property, descriptor);
	      } else if ('value' in descriptor) {
	        object[property] = descriptor.value;
	      }
	    },
	    preserveToString: function (target, source) {
	      if (source && isCallable(source.toString)) {
	        defineProperty(target, 'toString', source.toString.bind(source), true);
	      }
	    }
	  };
	
	  // Simple shim for Object.create on ES3 browsers
	  // (unlike real shim, no attempt to support `prototype === null`)
	  var create = Object.create || function (prototype, properties) {
	    var Prototype = function Prototype() {};
	    Prototype.prototype = prototype;
	    var object = new Prototype();
	    if (typeof properties !== 'undefined') {
	      keys(properties).forEach(function (key) {
	        Value.defineByDescriptor(object, key, properties[key]);
	      });
	    }
	    return object;
	  };
	
	  var supportsSubclassing = function (C, f) {
	    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }
	    return valueOrFalseIfThrows(function () {
	      var Sub = function Subclass(arg) {
	        var o = new C(arg);
	        Object.setPrototypeOf(o, Subclass.prototype);
	        return o;
	      };
	      Object.setPrototypeOf(Sub, C);
	      Sub.prototype = create(C.prototype, {
	        constructor: { value: Sub }
	      });
	      return f(Sub);
	    });
	  };
	
	  var getGlobal = function () {
	    /* global self, window, global */
	    // the only reliable means to get the global object is
	    // `Function('return this')()`
	    // However, this causes CSP violations in Chrome apps.
	    if (typeof self !== 'undefined') { return self; }
	    if (typeof window !== 'undefined') { return window; }
	    if (typeof global !== 'undefined') { return global; }
	    throw new Error('unable to locate global object');
	  };
	
	  var globals = getGlobal();
	  var globalIsFinite = globals.isFinite;
	  var _indexOf = Function.call.bind(String.prototype.indexOf);
	  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
	  var _concat = Function.call.bind(Array.prototype.concat);
	  // var _sort = Function.call.bind(Array.prototype.sort);
	  var _strSlice = Function.call.bind(String.prototype.slice);
	  var _push = Function.call.bind(Array.prototype.push);
	  var _pushApply = Function.apply.bind(Array.prototype.push);
	  var _shift = Function.call.bind(Array.prototype.shift);
	  var _max = Math.max;
	  var _min = Math.min;
	  var _floor = Math.floor;
	  var _abs = Math.abs;
	  var _exp = Math.exp;
	  var _log = Math.log;
	  var _sqrt = Math.sqrt;
	  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	  var ArrayIterator; // make our implementation private
	  var noop = function () {};
	
	  var Symbol = globals.Symbol || {};
	  var symbolSpecies = Symbol.species || '@@species';
	
	  var numberIsNaN = Number.isNaN || function isNaN(value) {
	    // NaN !== NaN, but they are identical.
	    // NaNs are the only non-reflexive value, i.e., if x !== x,
	    // then x is NaN.
	    // isNaN is broken: it converts its argument to number, so
	    // isNaN('foo') => true
	    return value !== value;
	  };
	  var numberIsFinite = Number.isFinite || function isFinite(value) {
	    return typeof value === 'number' && globalIsFinite(value);
	  };
	  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
	    var number = Number(value);
	    if (number === 0) { return number; }
	    if (numberIsNaN(number)) { return number; }
	    return number < 0 ? -1 : 1;
	  };
	
	  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	  // can be replaced with require('is-arguments') if we ever use a build process instead
	  var isStandardArguments = function isArguments(value) {
	    return _toString(value) === '[object Arguments]';
	  };
	  var isLegacyArguments = function isArguments(value) {
	    return value !== null &&
	      typeof value === 'object' &&
	      typeof value.length === 'number' &&
	      value.length >= 0 &&
	      _toString(value) !== '[object Array]' &&
	      _toString(value.callee) === '[object Function]';
	  };
	  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
	
	  var Type = {
	    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },
	    string: function (x) { return _toString(x) === '[object String]'; },
	    regex: function (x) { return _toString(x) === '[object RegExp]'; },
	    symbol: function (x) {
	      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
	    }
	  };
	
	  var overrideNative = function overrideNative(object, property, replacement) {
	    var original = object[property];
	    defineProperty(object, property, replacement, true);
	    Value.preserveToString(object[property], original);
	  };
	
	  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());
	
	  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
	  // we're going to use an arbitrary _-prefixed name to make our shims
	  // work properly with each other, even though we don't have full Iterator
	  // support.  That is, `Array.from(map.keys())` will work, but we don't
	  // pretend to export a "real" Iterator interface.
	  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
	  // Firefox ships a partial implementation using the name @@iterator.
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
	  // So use that name if we detect it.
	  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	
	  // Reflect
	  if (!globals.Reflect) {
	    defineProperty(globals, 'Reflect', {}, true);
	  }
	  var Reflect = globals.Reflect;
	
	  var $String = String;
	
	  var ES = {
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-call
	    Call: function Call(F, V) {
	      var args = arguments.length > 2 ? arguments[2] : [];
	      if (!ES.IsCallable(F)) {
	        throw new TypeError(F + ' is not a function');
	      }
	      return _apply(F, V, args);
	    },
	
	    RequireObjectCoercible: function (x, optMessage) {
	      /* jshint eqnull:true */
	      if (x == null) {
	        throw new TypeError(optMessage || 'Cannot call method on ' + x);
	      }
	      return x;
	    },
	
	    // This might miss the "(non-standard exotic and does not implement
	    // [[Call]])" case from
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
	    // but we can't find any evidence these objects exist in practice.
	    // If we find some in the future, you could test `Object(x) === x`,
	    // which is reliable according to
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
	    // but is not well optimized by runtimes and creates an object
	    // whenever it returns false, and thus is very slow.
	    TypeIsObject: function (x) {
	      if (x === void 0 || x === null || x === true || x === false) {
	        return false;
	      }
	      return typeof x === 'function' || typeof x === 'object';
	    },
	
	    ToObject: function (o, optMessage) {
	      return Object(ES.RequireObjectCoercible(o, optMessage));
	    },
	
	    IsCallable: isCallable,
	
	    IsConstructor: function (x) {
	      // We can't tell callables from constructors in ES5
	      return ES.IsCallable(x);
	    },
	
	    ToInt32: function (x) {
	      return ES.ToNumber(x) >> 0;
	    },
	
	    ToUint32: function (x) {
	      return ES.ToNumber(x) >>> 0;
	    },
	
	    ToNumber: function (value) {
	      if (_toString(value) === '[object Symbol]') {
	        throw new TypeError('Cannot convert a Symbol value to a number');
	      }
	      return +value;
	    },
	
	    ToInteger: function (value) {
	      var number = ES.ToNumber(value);
	      if (numberIsNaN(number)) { return 0; }
	      if (number === 0 || !numberIsFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * _floor(_abs(number));
	    },
	
	    ToLength: function (value) {
	      var len = ES.ToInteger(value);
	      if (len <= 0) { return 0; } // includes converting -0 to +0
	      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
	      return len;
	    },
	
	    SameValue: function (a, b) {
	      if (a === b) {
	        // 0 === -0, but they are not identical.
	        if (a === 0) { return 1 / a === 1 / b; }
	        return true;
	      }
	      return numberIsNaN(a) && numberIsNaN(b);
	    },
	
	    SameValueZero: function (a, b) {
	      // same as SameValue except for SameValueZero(+0, -0) == true
	      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
	    },
	
	    IsIterable: function (o) {
	      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
	    },
	
	    GetIterator: function (o) {
	      if (isArguments(o)) {
	        // special case support for `arguments`
	        return new ArrayIterator(o, 'value');
	      }
	      var itFn = ES.GetMethod(o, $iterator$);
	      if (!ES.IsCallable(itFn)) {
	        // Better diagnostics if itFn is null or undefined
	        throw new TypeError('value is not an iterable');
	      }
	      var it = ES.Call(itFn, o);
	      if (!ES.TypeIsObject(it)) {
	        throw new TypeError('bad iterator');
	      }
	      return it;
	    },
	
	    GetMethod: function (o, p) {
	      var func = ES.ToObject(o)[p];
	      if (func === void 0 || func === null) {
	        return void 0;
	      }
	      if (!ES.IsCallable(func)) {
	        throw new TypeError('Method not callable: ' + p);
	      }
	      return func;
	    },
	
	    IteratorComplete: function (iterResult) {
	      return !!iterResult.done;
	    },
	
	    IteratorClose: function (iterator, completionIsThrow) {
	      var returnMethod = ES.GetMethod(iterator, 'return');
	      if (returnMethod === void 0) {
	        return;
	      }
	      var innerResult, innerException;
	      try {
	        innerResult = ES.Call(returnMethod, iterator);
	      } catch (e) {
	        innerException = e;
	      }
	      if (completionIsThrow) {
	        return;
	      }
	      if (innerException) {
	        throw innerException;
	      }
	      if (!ES.TypeIsObject(innerResult)) {
	        throw new TypeError("Iterator's return method returned a non-object.");
	      }
	    },
	
	    IteratorNext: function (it) {
	      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
	      if (!ES.TypeIsObject(result)) {
	        throw new TypeError('bad iterator');
	      }
	      return result;
	    },
	
	    IteratorStep: function (it) {
	      var result = ES.IteratorNext(it);
	      var done = ES.IteratorComplete(result);
	      return done ? false : result;
	    },
	
	    Construct: function (C, args, newTarget, isES6internal) {
	      var target = typeof newTarget === 'undefined' ? C : newTarget;
	
	      if (!isES6internal && Reflect.construct) {
	        // Try to use Reflect.construct if available
	        return Reflect.construct(C, args, target);
	      }
	      // OK, we have to fake it.  This will only work if the
	      // C.[[ConstructorKind]] == "base" -- but that's the only
	      // kind we can make in ES5 code anyway.
	
	      // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
	      var proto = target.prototype;
	      if (!ES.TypeIsObject(proto)) {
	        proto = Object.prototype;
	      }
	      var obj = create(proto);
	      // Call the constructor.
	      var result = ES.Call(C, obj, args);
	      return ES.TypeIsObject(result) ? result : obj;
	    },
	
	    SpeciesConstructor: function (O, defaultConstructor) {
	      var C = O.constructor;
	      if (C === void 0) {
	        return defaultConstructor;
	      }
	      if (!ES.TypeIsObject(C)) {
	        throw new TypeError('Bad constructor');
	      }
	      var S = C[symbolSpecies];
	      if (S === void 0 || S === null) {
	        return defaultConstructor;
	      }
	      if (!ES.IsConstructor(S)) {
	        throw new TypeError('Bad @@species');
	      }
	      return S;
	    },
	
	    CreateHTML: function (string, tag, attribute, value) {
	      var S = ES.ToString(string);
	      var p1 = '<' + tag;
	      if (attribute !== '') {
	        var V = ES.ToString(value);
	        var escapedV = V.replace(/"/g, '&quot;');
	        p1 += ' ' + attribute + '="' + escapedV + '"';
	      }
	      var p2 = p1 + '>';
	      var p3 = p2 + S;
	      return p3 + '</' + tag + '>';
	    },
	
	    IsRegExp: function IsRegExp(argument) {
	      if (!ES.TypeIsObject(argument)) {
	        return false;
	      }
	      var isRegExp = argument[Symbol.match];
	      if (typeof isRegExp !== 'undefined') {
	        return !!isRegExp;
	      }
	      return Type.regex(argument);
	    },
	
	    ToString: function ToString(string) {
	      return $String(string);
	    }
	  };
	
	  // Well-known Symbol shims
	  if (supportsDescriptors && hasSymbols) {
	    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
	      if (Type.symbol(Symbol[name])) {
	        return Symbol[name];
	      }
	      var sym = Symbol['for']('Symbol.' + name);
	      Object.defineProperty(Symbol, name, {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: sym
	      });
	      return sym;
	    };
	    if (!Type.symbol(Symbol.search)) {
	      var symbolSearch = defineWellKnownSymbol('search');
	      var originalSearch = String.prototype.search;
	      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
	        return ES.Call(originalSearch, string, [this]);
	      });
	      var searchShim = function search(regexp) {
	        var O = ES.RequireObjectCoercible(this);
	        if (regexp !== null && typeof regexp !== 'undefined') {
	          var searcher = ES.GetMethod(regexp, symbolSearch);
	          if (typeof searcher !== 'undefined') {
	            return ES.Call(searcher, regexp, [O]);
	          }
	        }
	        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
	      };
	      overrideNative(String.prototype, 'search', searchShim);
	    }
	    if (!Type.symbol(Symbol.replace)) {
	      var symbolReplace = defineWellKnownSymbol('replace');
	      var originalReplace = String.prototype.replace;
	      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
	        return ES.Call(originalReplace, string, [this, replaceValue]);
	      });
	      var replaceShim = function replace(searchValue, replaceValue) {
	        var O = ES.RequireObjectCoercible(this);
	        if (searchValue !== null && typeof searchValue !== 'undefined') {
	          var replacer = ES.GetMethod(searchValue, symbolReplace);
	          if (typeof replacer !== 'undefined') {
	            return ES.Call(replacer, searchValue, [O, replaceValue]);
	          }
	        }
	        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
	      };
	      overrideNative(String.prototype, 'replace', replaceShim);
	    }
	    if (!Type.symbol(Symbol.split)) {
	      var symbolSplit = defineWellKnownSymbol('split');
	      var originalSplit = String.prototype.split;
	      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
	        return ES.Call(originalSplit, string, [this, limit]);
	      });
	      var splitShim = function split(separator, limit) {
	        var O = ES.RequireObjectCoercible(this);
	        if (separator !== null && typeof separator !== 'undefined') {
	          var splitter = ES.GetMethod(separator, symbolSplit);
	          if (typeof splitter !== 'undefined') {
	            return ES.Call(splitter, separator, [O, limit]);
	          }
	        }
	        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
	      };
	      overrideNative(String.prototype, 'split', splitShim);
	    }
	    var symbolMatchExists = Type.symbol(Symbol.match);
	    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function () {
	      // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
	      // Firefox 40 and below have Symbol.match but String#match works fine.
	      var o = {};
	      o[Symbol.match] = function () { return 42; };
	      return 'a'.match(o) !== 42;
	    }());
	    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
	      var symbolMatch = defineWellKnownSymbol('match');
	
	      var originalMatch = String.prototype.match;
	      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
	        return ES.Call(originalMatch, string, [this]);
	      });
	
	      var matchShim = function match(regexp) {
	        var O = ES.RequireObjectCoercible(this);
	        if (regexp !== null && typeof regexp !== 'undefined') {
	          var matcher = ES.GetMethod(regexp, symbolMatch);
	          if (typeof matcher !== 'undefined') {
	            return ES.Call(matcher, regexp, [O]);
	          }
	        }
	        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
	      };
	      overrideNative(String.prototype, 'match', matchShim);
	    }
	  }
	
	  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
	    Value.preserveToString(replacement, original);
	    if (Object.setPrototypeOf) {
	      // sets up proper prototype chain where possible
	      Object.setPrototypeOf(original, replacement);
	    }
	    if (supportsDescriptors) {
	      _forEach(Object.getOwnPropertyNames(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        Value.proxy(original, key, replacement);
	      });
	    } else {
	      _forEach(Object.keys(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        replacement[key] = original[key];
	      });
	    }
	    replacement.prototype = original.prototype;
	    Value.redefine(original.prototype, 'constructor', replacement);
	  };
	
	  var defaultSpeciesGetter = function () { return this; };
	  var addDefaultSpecies = function (C) {
	    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
	      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
	    }
	  };
	
	  var addIterator = function (prototype, impl) {
	    var implementation = impl || function iterator() { return this; };
	    defineProperty(prototype, $iterator$, implementation);
	    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
	      // implementations are buggy when $iterator$ is a Symbol
	      prototype[$iterator$] = implementation;
	    }
	  };
	
	  var createDataProperty = function createDataProperty(object, name, value) {
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: true,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
	    createDataProperty(object, name, value);
	    if (!ES.SameValue(object[name], value)) {
	      throw new TypeError('property is nonconfigurable');
	    }
	  };
	
	  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {
	    // This is an es5 approximation to es6 construct semantics.  in es6,
	    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
	    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
	    // to Foo and then returns Foo().
	
	    // Many ES6 object then have constructors of the form:
	    // 1. If NewTarget is undefined, throw a TypeError exception
	    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)
	
	    // So we're going to emulate those first two steps.
	    if (!ES.TypeIsObject(o)) {
	      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
	    }
	    var proto = defaultNewTarget.prototype;
	    if (!ES.TypeIsObject(proto)) {
	      proto = defaultProto;
	    }
	    var obj = create(proto);
	    for (var name in slots) {
	      if (_hasOwnProperty(slots, name)) {
	        var value = slots[name];
	        defineProperty(obj, name, value, true);
	      }
	    }
	    return obj;
	  };
	
	  // Firefox 31 reports this function's length as 0
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
	  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
	    var originalFromCodePoint = String.fromCodePoint;
	    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
	      return ES.Call(originalFromCodePoint, this, arguments);
	    });
	  }
	
	  var StringShims = {
	    fromCodePoint: function fromCodePoint(codePoints) {
	      var result = [];
	      var next;
	      for (var i = 0, length = arguments.length; i < length; i++) {
	        next = Number(arguments[i]);
	        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
	          throw new RangeError('Invalid code point ' + next);
	        }
	
	        if (next < 0x10000) {
	          _push(result, String.fromCharCode(next));
	        } else {
	          next -= 0x10000;
	          _push(result, String.fromCharCode((next >> 10) + 0xD800));
	          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
	        }
	      }
	      return result.join('');
	    },
	
	    raw: function raw(callSite) {
	      var cooked = ES.ToObject(callSite, 'bad callSite');
	      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
	      var len = rawString.length;
	      var literalsegments = ES.ToLength(len);
	      if (literalsegments <= 0) {
	        return '';
	      }
	
	      var stringElements = [];
	      var nextIndex = 0;
	      var nextKey, next, nextSeg, nextSub;
	      while (nextIndex < literalsegments) {
	        nextKey = ES.ToString(nextIndex);
	        nextSeg = ES.ToString(rawString[nextKey]);
	        _push(stringElements, nextSeg);
	        if (nextIndex + 1 >= literalsegments) {
	          break;
	        }
	        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
	        nextSub = ES.ToString(next);
	        _push(stringElements, nextSub);
	        nextIndex += 1;
	      }
	      return stringElements.join('');
	    }
	  };
	  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
	    // IE 11 TP has a broken String.raw implementation
	    overrideNative(String, 'raw', StringShims.raw);
	  }
	  defineProperties(String, StringShims);
	
	  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
	  // Perf: http://jsperf.com/string-repeat2/2
	  var stringRepeat = function repeat(s, times) {
	    if (times < 1) { return ''; }
	    if (times % 2) { return repeat(s, times - 1) + s; }
	    var half = repeat(s, times / 2);
	    return half + half;
	  };
	  var stringMaxLength = Infinity;
	
	  var StringPrototypeShims = {
	    repeat: function repeat(times) {
	      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
	      var numTimes = ES.ToInteger(times);
	      if (numTimes < 0 || numTimes >= stringMaxLength) {
	        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
	      }
	      return stringRepeat(thisStr, numTimes);
	    },
	
	    startsWith: function startsWith(searchString) {
	      var S = ES.ToString(ES.RequireObjectCoercible(this));
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('Cannot call method "startsWith" with a regex');
	      }
	      var searchStr = ES.ToString(searchString);
	      var position;
	      if (arguments.length > 1) {
	        position = arguments[1];
	      }
	      var start = _max(ES.ToInteger(position), 0);
	      return _strSlice(S, start, start + searchStr.length) === searchStr;
	    },
	
	    endsWith: function endsWith(searchString) {
	      var S = ES.ToString(ES.RequireObjectCoercible(this));
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('Cannot call method "endsWith" with a regex');
	      }
	      var searchStr = ES.ToString(searchString);
	      var len = S.length;
	      var endPosition;
	      if (arguments.length > 1) {
	        endPosition = arguments[1];
	      }
	      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
	      var end = _min(_max(pos, 0), len);
	      return _strSlice(S, end - searchStr.length, end) === searchStr;
	    },
	
	    includes: function includes(searchString) {
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('"includes" does not accept a RegExp');
	      }
	      var searchStr = ES.ToString(searchString);
	      var position;
	      if (arguments.length > 1) {
	        position = arguments[1];
	      }
	      // Somehow this trick makes method 100% compat with the spec.
	      return _indexOf(this, searchStr, position) !== -1;
	    },
	
	    codePointAt: function codePointAt(pos) {
	      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
	      var position = ES.ToInteger(pos);
	      var length = thisStr.length;
	      if (position >= 0 && position < length) {
	        var first = thisStr.charCodeAt(position);
	        var isEnd = position + 1 === length;
	        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
	        var second = thisStr.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) { return first; }
	        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
	      }
	    }
	  };
	  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
	    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
	  }
	
	  if (String.prototype.startsWith && String.prototype.endsWith) {
	    var startsWithRejectsRegex = throwsError(function () {
	      /* throws if spec-compliant */
	      '/a/'.startsWith(/a/);
	    });
	    var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {
	      return 'abc'.startsWith('a', Infinity) === false;
	    });
	    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
	      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
	      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
	      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
	    }
	  }
	  if (hasSymbols) {
	    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.startsWith(re);
	    });
	    if (!startsWithSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
	    }
	    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.endsWith(re);
	    });
	    if (!endsWithSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
	    }
	    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.includes(re);
	    });
	    if (!includesSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
	    }
	  }
	
	  defineProperties(String.prototype, StringPrototypeShims);
	
	  // whitespace from: http://es5.github.io/#x15.5.4.20
	  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	  var ws = [
	    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	    '\u2029\uFEFF'
	  ].join('');
	  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	  var trimShim = function trim() {
	    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
	  };
	  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	  var isBadHexRegex = /^[\-+]0x[0-9a-f]+$/i;
	  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
	  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
	
	  // Given an argument x, it will return an IteratorResult object,
	  // with value set to x and done to false.
	  // Given no arguments, it will return an iterator completion object.
	  var iteratorResult = function (x) {
	    return { value: x, done: arguments.length === 0 };
	  };
	
	  // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator
	  var StringIterator = function (s) {
	    ES.RequireObjectCoercible(s);
	    this._s = ES.ToString(s);
	    this._i = 0;
	  };
	  StringIterator.prototype.next = function () {
	    var s = this._s;
	    var i = this._i;
	    if (typeof s === 'undefined' || i >= s.length) {
	      this._s = void 0;
	      return iteratorResult();
	    }
	    var first = s.charCodeAt(i);
	    var second, len;
	    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
	      len = 1;
	    } else {
	      second = s.charCodeAt(i + 1);
	      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
	    }
	    this._i = i + len;
	    return iteratorResult(s.substr(i, len));
	  };
	  addIterator(StringIterator.prototype);
	  addIterator(String.prototype, function () {
	    return new StringIterator(this);
	  });
	
	  var ArrayShims = {
	    from: function from(items) {
	      var C = this;
	      var mapFn;
	      if (arguments.length > 1) {
	        mapFn = arguments[1];
	      }
	      var mapping, T;
	      if (typeof mapFn === 'undefined') {
	        mapping = false;
	      } else {
	        if (!ES.IsCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }
	        if (arguments.length > 2) {
	          T = arguments[2];
	        }
	        mapping = true;
	      }
	
	      // Note that that Arrays will use ArrayIterator:
	      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
	      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
	
	      var length, result, i;
	      if (usingIterator) {
	        result = ES.IsConstructor(C) ? Object(new C()) : [];
	        var iterator = ES.GetIterator(items);
	        var next, nextValue;
	
	        i = 0;
	        while (true) {
	          next = ES.IteratorStep(iterator);
	          if (next === false) {
	            break;
	          }
	          nextValue = next.value;
	          try {
	            if (mapping) {
	              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
	            }
	            result[i] = nextValue;
	          } catch (e) {
	            ES.IteratorClose(iterator, true);
	            throw e;
	          }
	          i += 1;
	        }
	        length = i;
	      } else {
	        var arrayLike = ES.ToObject(items);
	        length = ES.ToLength(arrayLike.length);
	        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
	        var value;
	        for (i = 0; i < length; ++i) {
	          value = arrayLike[i];
	          if (mapping) {
	            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
	          }
	          createDataPropertyOrThrow(result, i, value);
	        }
	      }
	
	      result.length = length;
	      return result;
	    },
	
	    of: function of() {
	      var len = arguments.length;
	      var C = this;
	      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
	      for (var k = 0; k < len; ++k) {
	        createDataPropertyOrThrow(A, k, arguments[k]);
	      }
	      A.length = len;
	      return A;
	    }
	  };
	  defineProperties(Array, ArrayShims);
	  addDefaultSpecies(Array);
	
	  // Our ArrayIterator is private; see
	  // https://github.com/paulmillr/es6-shim/issues/252
	  ArrayIterator = function (array, kind) {
	    this.i = 0;
	    this.array = array;
	    this.kind = kind;
	  };
	
	  defineProperties(ArrayIterator.prototype, {
	    next: function () {
	      var i = this.i;
	      var array = this.array;
	      if (!(this instanceof ArrayIterator)) {
	        throw new TypeError('Not an ArrayIterator');
	      }
	      if (typeof array !== 'undefined') {
	        var len = ES.ToLength(array.length);
	        for (; i < len; i++) {
	          var kind = this.kind;
	          var retval;
	          if (kind === 'key') {
	            retval = i;
	          } else if (kind === 'value') {
	            retval = array[i];
	          } else if (kind === 'entry') {
	            retval = [i, array[i]];
	          }
	          this.i = i + 1;
	          return iteratorResult(retval);
	        }
	      }
	      this.array = void 0;
	      return iteratorResult();
	    }
	  });
	  addIterator(ArrayIterator.prototype);
	
	/*
	  var orderKeys = function orderKeys(a, b) {
	    var aNumeric = String(ES.ToInteger(a)) === a;
	    var bNumeric = String(ES.ToInteger(b)) === b;
	    if (aNumeric && bNumeric) {
	      return b - a;
	    } else if (aNumeric && !bNumeric) {
	      return -1;
	    } else if (!aNumeric && bNumeric) {
	      return 1;
	    } else {
	      return a.localeCompare(b);
	    }
	  };
	
	  var getAllKeys = function getAllKeys(object) {
	    var ownKeys = [];
	    var keys = [];
	
	    for (var key in object) {
	      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
	    }
	    _sort(ownKeys, orderKeys);
	    _sort(keys, orderKeys);
	
	    return _concat(ownKeys, keys);
	  };
	  */
	
	  // note: this is positioned here because it depends on ArrayIterator
	  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {
	    // Detects a bug in Webkit nightly r181886
	    var Foo = function Foo(len) { this.length = len; };
	    Foo.prototype = [];
	    var fooArr = Array.of.apply(Foo, [1, 2]);
	    return fooArr instanceof Foo && fooArr.length === 2;
	  }());
	  if (!arrayOfSupportsSubclassing) {
	    overrideNative(Array, 'of', ArrayShims.of);
	  }
	
	  var ArrayPrototypeShims = {
	    copyWithin: function copyWithin(target, start) {
	      var o = ES.ToObject(this);
	      var len = ES.ToLength(o.length);
	      var relativeTarget = ES.ToInteger(target);
	      var relativeStart = ES.ToInteger(start);
	      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
	      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
	      var end;
	      if (arguments.length > 2) {
	        end = arguments[2];
	      }
	      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
	      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
	      var count = _min(finalItem - from, len - to);
	      var direction = 1;
	      if (from < to && to < (from + count)) {
	        direction = -1;
	        from += count - 1;
	        to += count - 1;
	      }
	      while (count > 0) {
	        if (from in o) {
	          o[to] = o[from];
	        } else {
	          delete o[to];
	        }
	        from += direction;
	        to += direction;
	        count -= 1;
	      }
	      return o;
	    },
	
	    fill: function fill(value) {
	      var start;
	      if (arguments.length > 1) {
	        start = arguments[1];
	      }
	      var end;
	      if (arguments.length > 2) {
	        end = arguments[2];
	      }
	      var O = ES.ToObject(this);
	      var len = ES.ToLength(O.length);
	      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
	      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
	
	      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
	      var relativeEnd = end < 0 ? len + end : end;
	
	      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
	        O[i] = value;
	      }
	      return O;
	    },
	
	    find: function find(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#find: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0, value; i < length; i++) {
	        value = list[i];
	        if (thisArg) {
	          if (_call(predicate, thisArg, value, i, list)) {
	            return value;
	          }
	        } else if (predicate(value, i, list)) {
	          return value;
	        }
	      }
	    },
	
	    findIndex: function findIndex(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#findIndex: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0; i < length; i++) {
	        if (thisArg) {
	          if (_call(predicate, thisArg, list[i], i, list)) {
	            return i;
	          }
	        } else if (predicate(list[i], i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	
	    keys: function keys() {
	      return new ArrayIterator(this, 'key');
	    },
	
	    values: function values() {
	      return new ArrayIterator(this, 'value');
	    },
	
	    entries: function entries() {
	      return new ArrayIterator(this, 'entry');
	    }
	  };
	  // Safari 7.1 defines Array#keys and Array#entries natively,
	  // but the resulting ArrayIterator objects don't have a "next" method.
	  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
	    delete Array.prototype.keys;
	  }
	  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
	    delete Array.prototype.entries;
	  }
	
	  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
	  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
	    defineProperties(Array.prototype, {
	      values: Array.prototype[$iterator$]
	    });
	    if (Type.symbol(Symbol.unscopables)) {
	      Array.prototype[Symbol.unscopables].values = true;
	    }
	  }
	  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
	  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
	    var originalArrayPrototypeValues = Array.prototype.values;
	    overrideNative(Array.prototype, 'values', function values() { return ES.Call(originalArrayPrototypeValues, this, arguments); });
	    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
	  }
	  defineProperties(Array.prototype, ArrayPrototypeShims);
	
	  if (1 / [true].indexOf(true, -0) < 0) {
	    // indexOf when given a position arg of -0 should return +0.
	    // https://github.com/tc39/ecma262/pull/316
	    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
	      var value = _arrayIndexOfApply(this, arguments);
	      if (value === 0 && (1 / value) < 0) {
	        return 0;
	      }
	      return value;
	    }, true);
	  }
	
	  addIterator(Array.prototype, function () { return this.values(); });
	  // Chrome defines keys/values/entries on Array, but doesn't give us
	  // any way to identify its iterator.  So add our own shimmed field.
	  if (Object.getPrototypeOf) {
	    addIterator(Object.getPrototypeOf([].values()));
	  }
	
	  // note: this is positioned here because it relies on Array#entries
	  var arrayFromSwallowsNegativeLengths = (function () {
	    // Detects a Firefox bug in v32
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
	    return valueOrFalseIfThrows(function () {
	      return Array.from({ length: -1 }).length === 0;
	    });
	  }());
	  var arrayFromHandlesIterables = (function () {
	    // Detects a bug in Webkit nightly r181886
	    var arr = Array.from([0].entries());
	    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
	  }());
	  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
	    overrideNative(Array, 'from', ArrayShims.from);
	  }
	  var arrayFromHandlesUndefinedMapFunction = (function () {
	    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
	    // but the spec doesn't care if it's provided or not - undefined doesn't throw.
	    return valueOrFalseIfThrows(function () {
	      return Array.from([0], void 0);
	    });
	  }());
	  if (!arrayFromHandlesUndefinedMapFunction) {
	    var origArrayFrom = Array.from;
	    overrideNative(Array, 'from', function from(items) {
	      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	        return ES.Call(origArrayFrom, this, arguments);
	      } else {
	        return _call(origArrayFrom, this, items);
	      }
	    });
	  }
	
	  var int32sAsOne = -(Math.pow(2, 32) - 1);
	  var toLengthsCorrectly = function (method, reversed) {
	    var obj = { length: int32sAsOne };
	    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
	    return valueOrFalseIfThrows(function () {
	      _call(method, obj, function () {
	        // note: in nonconforming browsers, this will be called
	        // -1 >>> 0 times, which is 4294967295, so the throw matters.
	        throw new RangeError('should not reach here');
	      }, []);
	      return true;
	    });
	  };
	  if (!toLengthsCorrectly(Array.prototype.forEach)) {
	    var originalForEach = Array.prototype.forEach;
	    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
	      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.map)) {
	    var originalMap = Array.prototype.map;
	    overrideNative(Array.prototype, 'map', function map(callbackFn) {
	      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.filter)) {
	    var originalFilter = Array.prototype.filter;
	    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
	      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.some)) {
	    var originalSome = Array.prototype.some;
	    overrideNative(Array.prototype, 'some', function some(callbackFn) {
	      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.every)) {
	    var originalEvery = Array.prototype.every;
	    overrideNative(Array.prototype, 'every', function every(callbackFn) {
	      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduce)) {
	    var originalReduce = Array.prototype.reduce;
	    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
	      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
	    var originalReduceRight = Array.prototype.reduceRight;
	    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
	      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	
	  var lacksOctalSupport = Number('0o10') !== 8;
	  var lacksBinarySupport = Number('0b10') !== 2;
	  var trimsNonWhitespace = _some(nonWS, function (c) {
	    return Number(c + 0 + c) === 0;
	  });
	  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
	    var OrigNumber = Number;
	    var binaryRegex = /^0b[01]+$/i;
	    var octalRegex = /^0o[0-7]+$/i;
	    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
	    var isBinary = binaryRegex.test.bind(binaryRegex);
	    var isOctal = octalRegex.test.bind(octalRegex);
	    var toPrimitive = function (O) { // need to replace this with `es-to-primitive/es6`
	      var result;
	      if (typeof O.valueOf === 'function') {
	        result = O.valueOf();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      if (typeof O.toString === 'function') {
	        result = O.toString();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      throw new TypeError('No default value');
	    };
	    var hasNonWS = nonWSregex.test.bind(nonWSregex);
	    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
	    var NumberShim = (function () {
	      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
	      var NumberShim = function Number(value) {
	        var primValue;
	        if (arguments.length > 0) {
	          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
	        } else {
	          primValue = 0;
	        }
	        if (typeof primValue === 'string') {
	          primValue = ES.Call(trimShim, primValue);
	          if (isBinary(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 2);
	          } else if (isOctal(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 8);
	          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
	            primValue = NaN;
	          }
	        }
	        var receiver = this;
	        var valueOfSucceeds = valueOrFalseIfThrows(function () {
	          OrigNumber.prototype.valueOf.call(receiver);
	          return true;
	        });
	        if (receiver instanceof NumberShim && !valueOfSucceeds) {
	          return new OrigNumber(primValue);
	        }
	        /* jshint newcap: false */
	        return OrigNumber(primValue);
	        /* jshint newcap: true */
	      };
	      return NumberShim;
	    }());
	    wrapConstructor(OrigNumber, NumberShim, {});
	    // this is necessary for ES3 browsers, where these properties are non-enumerable.
	    defineProperties(NumberShim, {
	      NaN: OrigNumber.NaN,
	      MAX_VALUE: OrigNumber.MAX_VALUE,
	      MIN_VALUE: OrigNumber.MIN_VALUE,
	      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
	      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
	    });
	    /* globals Number: true */
	    /* eslint-disable no-undef */
	    /* jshint -W020 */
	    Number = NumberShim;
	    Value.redefine(globals, 'Number', NumberShim);
	    /* jshint +W020 */
	    /* eslint-enable no-undef */
	    /* globals Number: false */
	  }
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  defineProperties(Number, {
	    MAX_SAFE_INTEGER: maxSafeInteger,
	    MIN_SAFE_INTEGER: -maxSafeInteger,
	    EPSILON: 2.220446049250313e-16,
	
	    parseInt: globals.parseInt,
	    parseFloat: globals.parseFloat,
	
	    isFinite: numberIsFinite,
	
	    isInteger: function isInteger(value) {
	      return numberIsFinite(value) && ES.ToInteger(value) === value;
	    },
	
	    isSafeInteger: function isSafeInteger(value) {
	      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
	    },
	
	    isNaN: numberIsNaN
	  });
	  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
	  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
	
	  // Work around bugs in Array#find and Array#findIndex -- early
	  // implementations skipped holes in sparse arrays. (Note that the
	  // implementations of find/findIndex indirectly use shimmed
	  // methods of Number, so this test has to happen down here.)
	  /*jshint elision: true */
	  /* eslint-disable no-sparse-arrays */
	  if (![, 1].find(function (item, idx) { return idx === 0; })) {
	    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
	  }
	  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
	    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
	  }
	  /* eslint-enable no-sparse-arrays */
	  /*jshint elision: false */
	
	  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
	  var ensureEnumerable = function ensureEnumerable(obj, prop) {
	    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
	      Object.defineProperty(obj, prop, { enumerable: false });
	    }
	  };
	  var sliceArgs = function sliceArgs() {
	    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
	    var initial = Number(this);
	    var len = arguments.length;
	    var desiredArgCount = len - initial;
	    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
	    for (var i = initial; i < len; ++i) {
	      args[i - initial] = arguments[i];
	    }
	    return args;
	  };
	  var assignTo = function assignTo(source) {
	    return function assignToSource(target, key) {
	      target[key] = source[key];
	      return target;
	    };
	  };
	  var assignReducer = function (target, source) {
	    var sourceKeys = keys(Object(source));
	    var symbols;
	    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
	    }
	    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
	  };
	
	  var ObjectShims = {
	    // 19.1.3.1
	    assign: function (target, source) {
	      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
	      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
	    },
	
	    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
	    is: function is(a, b) {
	      return ES.SameValue(a, b);
	    }
	  };
	  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {
	    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	    // which is 72% slower than our shim, and Firefox 40's native implementation.
	    var thrower = Object.preventExtensions({ 1: 2 });
	    try {
	      Object.assign(thrower, 'xy');
	    } catch (e) {
	      return thrower[1] === 'y';
	    }
	  }());
	  if (assignHasPendingExceptions) {
	    overrideNative(Object, 'assign', ObjectShims.assign);
	  }
	  defineProperties(Object, ObjectShims);
	
	  if (supportsDescriptors) {
	    var ES5ObjectShims = {
	      // 19.1.3.9
	      // shim from https://gist.github.com/WebReflection/5593554
	      setPrototypeOf: (function (Object, magic) {
	        var set;
	
	        var checkArgs = function (O, proto) {
	          if (!ES.TypeIsObject(O)) {
	            throw new TypeError('cannot set prototype on a non-object');
	          }
	          if (!(proto === null || ES.TypeIsObject(proto))) {
	            throw new TypeError('can only set prototype to an object or null' + proto);
	          }
	        };
	
	        var setPrototypeOf = function (O, proto) {
	          checkArgs(O, proto);
	          _call(set, O, proto);
	          return O;
	        };
	
	        try {
	          // this works already in Firefox and Safari
	          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	          _call(set, {}, null);
	        } catch (e) {
	          if (Object.prototype !== {}[magic]) {
	            // IE < 11 cannot be shimmed
	            return;
	          }
	          // probably Chrome or some old Mobile stock browser
	          set = function (proto) {
	            this[magic] = proto;
	          };
	          // please note that this will **not** work
	          // in those browsers that do not inherit
	          // __proto__ by mistake from Object.prototype
	          // in these cases we should probably throw an error
	          // or at least be informed about the issue
	          setPrototypeOf.polyfill = setPrototypeOf(
	            setPrototypeOf({}, null),
	            Object.prototype
	          ) instanceof Object;
	          // setPrototypeOf.polyfill === true means it works as meant
	          // setPrototypeOf.polyfill === false means it's not 100% reliable
	          // setPrototypeOf.polyfill === undefined
	          // or
	          // setPrototypeOf.polyfill ==  null means it's not a polyfill
	          // which means it works as expected
	          // we can even delete Object.prototype.__proto__;
	        }
	        return setPrototypeOf;
	      }(Object, '__proto__'))
	    };
	
	    defineProperties(Object, ES5ObjectShims);
	  }
	
	  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
	  // but Object.create(null) does.
	  if (Object.setPrototypeOf && Object.getPrototypeOf &&
	      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
	      Object.getPrototypeOf(Object.create(null)) === null) {
	    (function () {
	      var FAKENULL = Object.create(null);
	      var gpo = Object.getPrototypeOf;
	      var spo = Object.setPrototypeOf;
	      Object.getPrototypeOf = function (o) {
	        var result = gpo(o);
	        return result === FAKENULL ? null : result;
	      };
	      Object.setPrototypeOf = function (o, p) {
	        var proto = p === null ? FAKENULL : p;
	        return spo(o, proto);
	      };
	      Object.setPrototypeOf.polyfill = false;
	    }());
	  }
	
	  var objectKeysAcceptsPrimitives = !throwsError(function () { Object.keys('foo'); });
	  if (!objectKeysAcceptsPrimitives) {
	    var originalObjectKeys = Object.keys;
	    overrideNative(Object, 'keys', function keys(value) {
	      return originalObjectKeys(ES.ToObject(value));
	    });
	    keys = Object.keys;
	  }
	  var objectKeysRejectsRegex = throwsError(function () { Object.keys(/a/g); });
	  if (objectKeysRejectsRegex) {
	    var regexRejectingObjectKeys = Object.keys;
	    overrideNative(Object, 'keys', function keys(value) {
	      if (Type.regex(value)) {
	        var regexKeys = [];
	        for (var k in value) {
	          if (_hasOwnProperty(value, k)) {
	            _push(regexKeys, k);
	          }
	        }
	        return regexKeys;
	      }
	      return regexRejectingObjectKeys(value);
	    });
	    keys = Object.keys;
	  }
	
	  if (Object.getOwnPropertyNames) {
	    var objectGOPNAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyNames('foo'); });
	    if (!objectGOPNAcceptsPrimitives) {
	      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
	      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
	      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
	        var val = ES.ToObject(value);
	        if (_toString(val) === '[object Window]') {
	          try {
	            return originalObjectGetOwnPropertyNames(val);
	          } catch (e) {
	            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
	            return _concat([], cachedWindowNames);
	          }
	        }
	        return originalObjectGetOwnPropertyNames(val);
	      });
	    }
	  }
	  if (Object.getOwnPropertyDescriptor) {
	    var objectGOPDAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyDescriptor('foo', 'bar'); });
	    if (!objectGOPDAcceptsPrimitives) {
	      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
	        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
	      });
	    }
	  }
	  if (Object.seal) {
	    var objectSealAcceptsPrimitives = !throwsError(function () { Object.seal('foo'); });
	    if (!objectSealAcceptsPrimitives) {
	      var originalObjectSeal = Object.seal;
	      overrideNative(Object, 'seal', function seal(value) {
	        if (!ES.TypeIsObject(value)) { return value; }
	        return originalObjectSeal(value);
	      });
	    }
	  }
	  if (Object.isSealed) {
	    var objectIsSealedAcceptsPrimitives = !throwsError(function () { Object.isSealed('foo'); });
	    if (!objectIsSealedAcceptsPrimitives) {
	      var originalObjectIsSealed = Object.isSealed;
	      overrideNative(Object, 'isSealed', function isSealed(value) {
	        if (!ES.TypeIsObject(value)) { return true; }
	        return originalObjectIsSealed(value);
	      });
	    }
	  }
	  if (Object.freeze) {
	    var objectFreezeAcceptsPrimitives = !throwsError(function () { Object.freeze('foo'); });
	    if (!objectFreezeAcceptsPrimitives) {
	      var originalObjectFreeze = Object.freeze;
	      overrideNative(Object, 'freeze', function freeze(value) {
	        if (!ES.TypeIsObject(value)) { return value; }
	        return originalObjectFreeze(value);
	      });
	    }
	  }
	  if (Object.isFrozen) {
	    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { Object.isFrozen('foo'); });
	    if (!objectIsFrozenAcceptsPrimitives) {
	      var originalObjectIsFrozen = Object.isFrozen;
	      overrideNative(Object, 'isFrozen', function isFrozen(value) {
	        if (!ES.TypeIsObject(value)) { return true; }
	        return originalObjectIsFrozen(value);
	      });
	    }
	  }
	  if (Object.preventExtensions) {
	    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { Object.preventExtensions('foo'); });
	    if (!objectPreventExtensionsAcceptsPrimitives) {
	      var originalObjectPreventExtensions = Object.preventExtensions;
	      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
	        if (!ES.TypeIsObject(value)) { return value; }
	        return originalObjectPreventExtensions(value);
	      });
	    }
	  }
	  if (Object.isExtensible) {
	    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { Object.isExtensible('foo'); });
	    if (!objectIsExtensibleAcceptsPrimitives) {
	      var originalObjectIsExtensible = Object.isExtensible;
	      overrideNative(Object, 'isExtensible', function isExtensible(value) {
	        if (!ES.TypeIsObject(value)) { return false; }
	        return originalObjectIsExtensible(value);
	      });
	    }
	  }
	  if (Object.getPrototypeOf) {
	    var objectGetProtoAcceptsPrimitives = !throwsError(function () { Object.getPrototypeOf('foo'); });
	    if (!objectGetProtoAcceptsPrimitives) {
	      var originalGetProto = Object.getPrototypeOf;
	      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
	        return originalGetProto(ES.ToObject(value));
	      });
	    }
	  }
	
	  var hasFlags = supportsDescriptors && (function () {
	    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
	    return desc && ES.IsCallable(desc.get);
	  }());
	  if (supportsDescriptors && !hasFlags) {
	    var regExpFlagsGetter = function flags() {
	      if (!ES.TypeIsObject(this)) {
	        throw new TypeError('Method called on incompatible type: must be an object.');
	      }
	      var result = '';
	      if (this.global) {
	        result += 'g';
	      }
	      if (this.ignoreCase) {
	        result += 'i';
	      }
	      if (this.multiline) {
	        result += 'm';
	      }
	      if (this.unicode) {
	        result += 'u';
	      }
	      if (this.sticky) {
	        result += 'y';
	      }
	      return result;
	    };
	
	    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
	  }
	
	  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {
	    return String(new RegExp(/a/g, 'i')) === '/a/i';
	  });
	  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function () {
	    // Edge 0.12 supports flags fully, but does not support Symbol.match
	    var regex = /./;
	    regex[Symbol.match] = false;
	    return RegExp(regex) === regex;
	  }());
	
	  var regexToStringIsGeneric = valueOrFalseIfThrows(function () {
	    return RegExp.prototype.toString.call({ source: 'abc' }) === '/abc/';
	  });
	  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {
	    return RegExp.prototype.toString.call({ source: 'a', flags: 'b' }) === '/a/b';
	  });
	  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
	    var origRegExpToString = RegExp.prototype.toString;
	    defineProperty(RegExp.prototype, 'toString', function toString() {
	      var R = ES.RequireObjectCoercible(this);
	      if (Type.regex(R)) {
	        return _call(origRegExpToString, R);
	      }
	      var pattern = $String(R.source);
	      var flags = $String(R.flags);
	      return '/' + pattern + '/' + flags;
	    }, true);
	    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
	  }
	
	  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
	    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
	    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
	    var legacySourceGetter = function () { return this.source; }; // prior to it being a getter, it's own + nonconfigurable
	    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
	
	    var OrigRegExp = RegExp;
	    var RegExpShim = (function () {
	      return function RegExp(pattern, flags) {
	        var patternIsRegExp = ES.IsRegExp(pattern);
	        var calledWithNew = this instanceof RegExp;
	        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
	          return pattern;
	        }
	
	        var P = pattern;
	        var F = flags;
	        if (Type.regex(pattern)) {
	          P = ES.Call(sourceGetter, pattern);
	          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
	          return new RegExp(P, F);
	        } else if (patternIsRegExp) {
	          P = pattern.source;
	          F = typeof flags === 'undefined' ? pattern.flags : flags;
	        }
	        return new OrigRegExp(pattern, flags);
	      };
	    }());
	    wrapConstructor(OrigRegExp, RegExpShim, {
	      $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
	    });
	    /* globals RegExp: true */
	    /* eslint-disable no-undef */
	    /* jshint -W020 */
	    RegExp = RegExpShim;
	    Value.redefine(globals, 'RegExp', RegExpShim);
	    /* jshint +W020 */
	    /* eslint-enable no-undef */
	    /* globals RegExp: false */
	  }
	
	  if (supportsDescriptors) {
	    var regexGlobals = {
	      input: '$_',
	      lastMatch: '$&',
	      lastParen: '$+',
	      leftContext: '$`',
	      rightContext: '$\''
	    };
	    _forEach(keys(regexGlobals), function (prop) {
	      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
	        Value.getter(RegExp, regexGlobals[prop], function get() {
	          return RegExp[prop];
	        });
	      }
	    });
	  }
	  addDefaultSpecies(RegExp);
	
	  var inverseEpsilon = 1 / Number.EPSILON;
	  var roundTiesToEven = function roundTiesToEven(n) {
	    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
	    return (n + inverseEpsilon) - inverseEpsilon;
	  };
	  var BINARY_32_EPSILON = Math.pow(2, -23);
	  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
	  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
	  var E = Math.E;
	  var LOG2E = Math.LOG2E;
	  var LOG10E = Math.LOG10E;
	  var numberCLZ = Number.prototype.clz;
	  delete Number.prototype.clz; // Safari 8 has Number#clz
	
	  var MathShims = {
	    acosh: function acosh(value) {
	      var x = Number(value);
	      if (numberIsNaN(x) || value < 1) { return NaN; }
	      if (x === 1) { return 0; }
	      if (x === Infinity) { return x; }
	      return _log(x / E + _sqrt(x + 1) * _sqrt(x - 1) / E) + 1;
	    },
	
	    asinh: function asinh(value) {
	      var x = Number(value);
	      if (x === 0 || !globalIsFinite(x)) {
	        return x;
	      }
	      return x < 0 ? -asinh(-x) : _log(x + _sqrt(x * x + 1));
	    },
	
	    atanh: function atanh(value) {
	      var x = Number(value);
	      if (numberIsNaN(x) || x < -1 || x > 1) {
	        return NaN;
	      }
	      if (x === -1) { return -Infinity; }
	      if (x === 1) { return Infinity; }
	      if (x === 0) { return x; }
	      return 0.5 * _log((1 + x) / (1 - x));
	    },
	
	    cbrt: function cbrt(value) {
	      var x = Number(value);
	      if (x === 0) { return x; }
	      var negate = x < 0;
	      var result;
	      if (negate) { x = -x; }
	      if (x === Infinity) {
	        result = Infinity;
	      } else {
	        result = _exp(_log(x) / 3);
	        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
	        result = (x / (result * result) + (2 * result)) / 3;
	      }
	      return negate ? -result : result;
	    },
	
	    clz32: function clz32(value) {
	      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
	      var x = Number(value);
	      var number = ES.ToUint32(x);
	      if (number === 0) {
	        return 32;
	      }
	      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
	    },
	
	    cosh: function cosh(value) {
	      var x = Number(value);
	      if (x === 0) { return 1; } // +0 or -0
	      if (numberIsNaN(x)) { return NaN; }
	      if (!globalIsFinite(x)) { return Infinity; }
	      if (x < 0) { x = -x; }
	      if (x > 21) { return _exp(x) / 2; }
	      return (_exp(x) + _exp(-x)) / 2;
	    },
	
	    expm1: function expm1(value) {
	      var x = Number(value);
	      if (x === -Infinity) { return -1; }
	      if (!globalIsFinite(x) || x === 0) { return x; }
	      if (_abs(x) > 0.5) {
	        return _exp(x) - 1;
	      }
	      // A more precise approximation using Taylor series expansion
	      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
	      var t = x;
	      var sum = 0;
	      var n = 1;
	      while (sum + t !== sum) {
	        sum += t;
	        n += 1;
	        t *= x / n;
	      }
	      return sum;
	    },
	
	    hypot: function hypot(x, y) {
	      var result = 0;
	      var largest = 0;
	      for (var i = 0; i < arguments.length; ++i) {
	        var value = _abs(Number(arguments[i]));
	        if (largest < value) {
	          result *= (largest / value) * (largest / value);
	          result += 1;
	          largest = value;
	        } else {
	          result += value > 0 ? (value / largest) * (value / largest) : value;
	        }
	      }
	      return largest === Infinity ? Infinity : largest * _sqrt(result);
	    },
	
	    log2: function log2(value) {
	      return _log(value) * LOG2E;
	    },
	
	    log10: function log10(value) {
	      return _log(value) * LOG10E;
	    },
	
	    log1p: function log1p(value) {
	      var x = Number(value);
	      if (x < -1 || numberIsNaN(x)) { return NaN; }
	      if (x === 0 || x === Infinity) { return x; }
	      if (x === -1) { return -Infinity; }
	
	      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
	    },
	
	    sign: _sign,
	
	    sinh: function sinh(value) {
	      var x = Number(value);
	      if (!globalIsFinite(x) || x === 0) { return x; }
	
	      if (_abs(x) < 1) {
	        return (Math.expm1(x) - Math.expm1(-x)) / 2;
	      }
	      return (_exp(x - 1) - _exp(-x - 1)) * E / 2;
	    },
	
	    tanh: function tanh(value) {
	      var x = Number(value);
	      if (numberIsNaN(x) || x === 0) { return x; }
	      // can exit early at +-20 as JS loses precision for true value at this integer
	      if (x >= 20) { return 1; }
	      if (x <= -20) { return -1; }
	
	      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
	    },
	
	    trunc: function trunc(value) {
	      var x = Number(value);
	      return x < 0 ? -_floor(-x) : _floor(x);
	    },
	
	    imul: function imul(x, y) {
	      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	      var a = ES.ToUint32(x);
	      var b = ES.ToUint32(y);
	      var ah = (a >>> 16) & 0xffff;
	      var al = a & 0xffff;
	      var bh = (b >>> 16) & 0xffff;
	      var bl = b & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
	    },
	
	    fround: function fround(x) {
	      var v = Number(x);
	      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
	        return v;
	      }
	      var sign = _sign(v);
	      var abs = _abs(v);
	      if (abs < BINARY_32_MIN_VALUE) {
	        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
	      }
	      // Veltkamp's splitting (?)
	      var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
	      var result = a - (a - abs);
	      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
	        return sign * Infinity;
	      }
	      return sign * result;
	    }
	  };
	  defineProperties(Math, MathShims);
	  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
	  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
	  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
	  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
	  // Chrome 40 has an imprecise Math.tanh with very small numbers
	  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
	  // Chrome 40 loses Math.acosh precision with high numbers
	  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
	  // Firefox 38 on Windows
	  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
	  // node 0.11 has an imprecise Math.sinh with very small numbers
	  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
	  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
	  var expm1OfTen = Math.expm1(10);
	  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
	
	  var origMathRound = Math.round;
	  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
	  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
	
	  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
	  // This behavior should be governed by "round to nearest, ties to even mode"
	  // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type
	  // These are the boundary cases where it breaks.
	  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
	  var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
	  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function (num) {
	    return Math.round(num) === num;
	  });
	  defineProperty(Math, 'round', function round(x) {
	    var floor = _floor(x);
	    var ceil = floor === -1 ? -0 : floor + 1;
	    return x - floor < 0.5 ? floor : ceil;
	  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
	  Value.preserveToString(Math.round, origMathRound);
	
	  var origImul = Math.imul;
	  if (Math.imul(0xffffffff, 5) !== -5) {
	    // Safari 6.1, at least, reports "0" for this value
	    Math.imul = MathShims.imul;
	    Value.preserveToString(Math.imul, origImul);
	  }
	  if (Math.imul.length !== 2) {
	    // Safari 8.0.4 has a length of 1
	    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
	    overrideNative(Math, 'imul', function imul(x, y) {
	      return ES.Call(origImul, Math, arguments);
	    });
	  }
	
	  // Promises
	  // Simplest possible implementation; use a 3rd-party library if you
	  // want the best possible speed and/or long stack traces.
	  var PromiseShim = (function () {
	    var setTimeout = globals.setTimeout;
	    // some environments don't have setTimeout - no way to shim here.
	    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }
	
	    ES.IsPromise = function (promise) {
	      if (!ES.TypeIsObject(promise)) {
	        return false;
	      }
	      if (typeof promise._promise === 'undefined') {
	        return false; // uninitialized, or missing our hidden field.
	      }
	      return true;
	    };
	
	    // "PromiseCapability" in the spec is what most promise implementations
	    // call a "deferred".
	    var PromiseCapability = function (C) {
	      if (!ES.IsConstructor(C)) {
	        throw new TypeError('Bad promise constructor');
	      }
	      var capability = this;
	      var resolver = function (resolve, reject) {
	        if (capability.resolve !== void 0 || capability.reject !== void 0) {
	          throw new TypeError('Bad Promise implementation!');
	        }
	        capability.resolve = resolve;
	        capability.reject = reject;
	      };
	      // Initialize fields to inform optimizers about the object shape.
	      capability.resolve = void 0;
	      capability.reject = void 0;
	      capability.promise = new C(resolver);
	      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
	        throw new TypeError('Bad promise constructor');
	      }
	    };
	
	    // find an appropriate setImmediate-alike
	    var makeZeroTimeout;
	    /*global window */
	    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
	      makeZeroTimeout = function () {
	        // from http://dbaron.org/log/20100309-faster-timeouts
	        var timeouts = [];
	        var messageName = 'zero-timeout-message';
	        var setZeroTimeout = function (fn) {
	          _push(timeouts, fn);
	          window.postMessage(messageName, '*');
	        };
	        var handleMessage = function (event) {
	          if (event.source === window && event.data === messageName) {
	            event.stopPropagation();
	            if (timeouts.length === 0) { return; }
	            var fn = _shift(timeouts);
	            fn();
	          }
	        };
	        window.addEventListener('message', handleMessage, true);
	        return setZeroTimeout;
	      };
	    }
	    var makePromiseAsap = function () {
	      // An efficient task-scheduler based on a pre-existing Promise
	      // implementation, which we can use even if we override the
	      // global Promise below (in order to workaround bugs)
	      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
	      var P = globals.Promise;
	      var pr = P && P.resolve && P.resolve();
	      return pr && function (task) {
	        return pr.then(task);
	      };
	    };
	    /*global process */
	    /* jscs:disable disallowMultiLineTernary */
	    var enqueue = ES.IsCallable(globals.setImmediate) ?
	      globals.setImmediate :
	      typeof process === 'object' && process.nextTick ? process.nextTick :
	      makePromiseAsap() ||
	      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
	      function (task) { setTimeout(task, 0); }); // fallback
	    /* jscs:enable disallowMultiLineTernary */
	
	    // Constants for Promise implementation
	    var PROMISE_IDENTITY = function (x) { return x; };
	    var PROMISE_THROWER = function (e) { throw e; };
	    var PROMISE_PENDING = 0;
	    var PROMISE_FULFILLED = 1;
	    var PROMISE_REJECTED = 2;
	    // We store fulfill/reject handlers and capabilities in a single array.
	    var PROMISE_FULFILL_OFFSET = 0;
	    var PROMISE_REJECT_OFFSET = 1;
	    var PROMISE_CAPABILITY_OFFSET = 2;
	    // This is used in an optimization for chaining promises via then.
	    var PROMISE_FAKE_CAPABILITY = {};
	
	    var enqueuePromiseReactionJob = function (handler, capability, argument) {
	      enqueue(function () {
	        promiseReactionJob(handler, capability, argument);
	      });
	    };
	
	    var promiseReactionJob = function (handler, promiseCapability, argument) {
	      var handlerResult, f;
	      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
	        // Fast case, when we don't actually need to chain through to a
	        // (real) promiseCapability.
	        return handler(argument);
	      }
	      try {
	        handlerResult = handler(argument);
	        f = promiseCapability.resolve;
	      } catch (e) {
	        handlerResult = e;
	        f = promiseCapability.reject;
	      }
	      f(handlerResult);
	    };
	
	    var fulfillPromise = function (promise, value) {
	      var _promise = promise._promise;
	      var length = _promise.reactionLength;
	      if (length > 0) {
	        enqueuePromiseReactionJob(
	          _promise.fulfillReactionHandler0,
	          _promise.reactionCapability0,
	          value
	        );
	        _promise.fulfillReactionHandler0 = void 0;
	        _promise.rejectReactions0 = void 0;
	        _promise.reactionCapability0 = void 0;
	        if (length > 1) {
	          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
	            enqueuePromiseReactionJob(
	              _promise[idx + PROMISE_FULFILL_OFFSET],
	              _promise[idx + PROMISE_CAPABILITY_OFFSET],
	              value
	            );
	            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
	            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
	            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
	          }
	        }
	      }
	      _promise.result = value;
	      _promise.state = PROMISE_FULFILLED;
	      _promise.reactionLength = 0;
	    };
	
	    var rejectPromise = function (promise, reason) {
	      var _promise = promise._promise;
	      var length = _promise.reactionLength;
	      if (length > 0) {
	        enqueuePromiseReactionJob(
	          _promise.rejectReactionHandler0,
	          _promise.reactionCapability0,
	          reason
	        );
	        _promise.fulfillReactionHandler0 = void 0;
	        _promise.rejectReactions0 = void 0;
	        _promise.reactionCapability0 = void 0;
	        if (length > 1) {
	          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
	            enqueuePromiseReactionJob(
	              _promise[idx + PROMISE_REJECT_OFFSET],
	              _promise[idx + PROMISE_CAPABILITY_OFFSET],
	              reason
	            );
	            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
	            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
	            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
	          }
	        }
	      }
	      _promise.result = reason;
	      _promise.state = PROMISE_REJECTED;
	      _promise.reactionLength = 0;
	    };
	
	    var createResolvingFunctions = function (promise) {
	      var alreadyResolved = false;
	      var resolve = function (resolution) {
	        var then;
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        if (resolution === promise) {
	          return rejectPromise(promise, new TypeError('Self resolution'));
	        }
	        if (!ES.TypeIsObject(resolution)) {
	          return fulfillPromise(promise, resolution);
	        }
	        try {
	          then = resolution.then;
	        } catch (e) {
	          return rejectPromise(promise, e);
	        }
	        if (!ES.IsCallable(then)) {
	          return fulfillPromise(promise, resolution);
	        }
	        enqueue(function () {
	          promiseResolveThenableJob(promise, resolution, then);
	        });
	      };
	      var reject = function (reason) {
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        return rejectPromise(promise, reason);
	      };
	      return { resolve: resolve, reject: reject };
	    };
	
	    var optimizedThen = function (then, thenable, resolve, reject) {
	      // Optimization: since we discard the result, we can pass our
	      // own then implementation a special hint to let it know it
	      // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
	      // object is local to this implementation and unforgeable outside.)
	      if (then === Promise$prototype$then) {
	        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
	      } else {
	        _call(then, thenable, resolve, reject);
	      }
	    };
	    var promiseResolveThenableJob = function (promise, thenable, then) {
	      var resolvingFunctions = createResolvingFunctions(promise);
	      var resolve = resolvingFunctions.resolve;
	      var reject = resolvingFunctions.reject;
	      try {
	        optimizedThen(then, thenable, resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	    };
	
	    var Promise$prototype, Promise$prototype$then;
	    var Promise = (function () {
	      var PromiseShim = function Promise(resolver) {
	        if (!(this instanceof PromiseShim)) {
	          throw new TypeError('Constructor Promise requires "new"');
	        }
	        if (this && this._promise) {
	          throw new TypeError('Bad construction');
	        }
	        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
	        if (!ES.IsCallable(resolver)) {
	          throw new TypeError('not a valid resolver');
	        }
	        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
	          _promise: {
	            result: void 0,
	            state: PROMISE_PENDING,
	            // The first member of the "reactions" array is inlined here,
	            // since most promises only have one reaction.
	            // We've also exploded the 'reaction' object to inline the
	            // "handler" and "capability" fields, since both fulfill and
	            // reject reactions share the same capability.
	            reactionLength: 0,
	            fulfillReactionHandler0: void 0,
	            rejectReactionHandler0: void 0,
	            reactionCapability0: void 0
	          }
	        });
	        var resolvingFunctions = createResolvingFunctions(promise);
	        var reject = resolvingFunctions.reject;
	        try {
	          resolver(resolvingFunctions.resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        return promise;
	      };
	      return PromiseShim;
	    }());
	    Promise$prototype = Promise.prototype;
	
	    var _promiseAllResolver = function (index, values, capability, remaining) {
	      var alreadyCalled = false;
	      return function (x) {
	        if (alreadyCalled) { return; }
	        alreadyCalled = true;
	        values[index] = x;
	        if ((--remaining.count) === 0) {
	          var resolve = capability.resolve;
	          resolve(values); // call w/ this===undefined
	        }
	      };
	    };
	
	    var performPromiseAll = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator;
	      var values = [];
	      var remaining = { count: 1 };
	      var next, nextValue;
	      var index = 0;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        values[index] = void 0;
	        var nextPromise = C.resolve(nextValue);
	        var resolveElement = _promiseAllResolver(
	          index, values, resultCapability, remaining
	        );
	        remaining.count += 1;
	        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
	        index += 1;
	      }
	      if ((--remaining.count) === 0) {
	        var resolve = resultCapability.resolve;
	        resolve(values); // call w/ this===undefined
	      }
	      return resultCapability.promise;
	    };
	
	    var performPromiseRace = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator;
	      var next, nextValue, nextPromise;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            // NOTE: If iterable has no items, resulting promise will never
	            // resolve; see:
	            // https://github.com/domenic/promises-unwrapping/issues/75
	            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        nextPromise = C.resolve(nextValue);
	        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
	      }
	      return resultCapability.promise;
	    };
	
	    defineProperties(Promise, {
	      all: function all(iterable) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Promise is not object');
	        }
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseAll(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      race: function race(iterable) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Promise is not object');
	        }
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseRace(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      reject: function reject(reason) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Bad promise constructor');
	        }
	        var capability = new PromiseCapability(C);
	        var rejectFunc = capability.reject;
	        rejectFunc(reason); // call with this===undefined
	        return capability.promise;
	      },
	
	      resolve: function resolve(v) {
	        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Bad promise constructor');
	        }
	        if (ES.IsPromise(v)) {
	          var constructor = v.constructor;
	          if (constructor === C) {
	            return v;
	          }
	        }
	        var capability = new PromiseCapability(C);
	        var resolveFunc = capability.resolve;
	        resolveFunc(v); // call with this===undefined
	        return capability.promise;
	      }
	    });
	
	    defineProperties(Promise$prototype, {
	      'catch': function (onRejected) {
	        return this.then(null, onRejected);
	      },
	
	      then: function then(onFulfilled, onRejected) {
	        var promise = this;
	        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
	        var C = ES.SpeciesConstructor(promise, Promise);
	        var resultCapability;
	        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
	        if (returnValueIsIgnored && C === Promise) {
	          resultCapability = PROMISE_FAKE_CAPABILITY;
	        } else {
	          resultCapability = new PromiseCapability(C);
	        }
	        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
	        // Note that we've split the 'reaction' object into its two
	        // components, "capabilities" and "handler"
	        // "capabilities" is always equal to `resultCapability`
	        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
	        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
	        var _promise = promise._promise;
	        var value;
	        if (_promise.state === PROMISE_PENDING) {
	          if (_promise.reactionLength === 0) {
	            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
	            _promise.rejectReactionHandler0 = rejectReactionHandler;
	            _promise.reactionCapability0 = resultCapability;
	          } else {
	            var idx = 3 * (_promise.reactionLength - 1);
	            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
	            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
	            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
	          }
	          _promise.reactionLength += 1;
	        } else if (_promise.state === PROMISE_FULFILLED) {
	          value = _promise.result;
	          enqueuePromiseReactionJob(
	            fulfillReactionHandler, resultCapability, value
	          );
	        } else if (_promise.state === PROMISE_REJECTED) {
	          value = _promise.result;
	          enqueuePromiseReactionJob(
	            rejectReactionHandler, resultCapability, value
	          );
	        } else {
	          throw new TypeError('unexpected Promise state');
	        }
	        return resultCapability.promise;
	      }
	    });
	    // This helps the optimizer by ensuring that methods which take
	    // capabilities aren't polymorphic.
	    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
	    Promise$prototype$then = Promise$prototype.then;
	
	    return Promise;
	  }());
	
	  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
	  if (globals.Promise) {
	    delete globals.Promise.accept;
	    delete globals.Promise.defer;
	    delete globals.Promise.prototype.chain;
	  }
	
	  if (typeof PromiseShim === 'function') {
	    // export the Promise constructor.
	    defineProperties(globals, { Promise: PromiseShim });
	    // In Chrome 33 (and thereabouts) Promise is defined, but the
	    // implementation is buggy in a number of ways.  Let's check subclassing
	    // support to see if we have a buggy implementation.
	    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
	      return S.resolve(42).then(function () {}) instanceof S;
	    });
	    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () { globals.Promise.reject(42).then(null, 5).then(null, noop); });
	    var promiseRequiresObjectContext = throwsError(function () { globals.Promise.call(3, noop); });
	    // Promise.resolve() was errata'ed late in the ES6 process.
	    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
	    //      https://code.google.com/p/v8/issues/detail?id=4161
	    // It serves as a proxy for a number of other bugs in early Promise
	    // implementations.
	    var promiseResolveBroken = (function (Promise) {
	      var p = Promise.resolve(5);
	      p.constructor = {};
	      var p2 = Promise.resolve(p);
	      try {
	        p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
	      } catch (e) {
	        return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
	      }
	      return p === p2; // This *should* be false!
	    }(globals.Promise));
	
	    // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
	    var getsThenSynchronously = supportsDescriptors && (function () {
	      var count = 0;
	      var thenable = Object.defineProperty({}, 'then', { get: function () { count += 1; } });
	      Promise.resolve(thenable);
	      return count === 1;
	    }());
	
	    var BadResolverPromise = function BadResolverPromise(executor) {
	      var p = new Promise(executor);
	      executor(3, function () {});
	      this.then = p.then;
	      this.constructor = BadResolverPromise;
	    };
	    BadResolverPromise.prototype = Promise.prototype;
	    BadResolverPromise.all = Promise.all;
	    // Chrome Canary 49 (probably older too) has some implementation bugs
	    var hasBadResolverPromise = valueOrFalseIfThrows(function () {
	      return !!BadResolverPromise.all([1, 2]);
	    });
	
	    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks ||
	        !promiseRequiresObjectContext || promiseResolveBroken ||
	        !getsThenSynchronously || hasBadResolverPromise) {
	      /* globals Promise: true */
	      /* eslint-disable no-undef */
	      /* jshint -W020 */
	      Promise = PromiseShim;
	      /* jshint +W020 */
	      /* eslint-enable no-undef */
	      /* globals Promise: false */
	      overrideNative(globals, 'Promise', PromiseShim);
	    }
	    if (Promise.all.length !== 1) {
	      var origAll = Promise.all;
	      overrideNative(Promise, 'all', function all(iterable) {
	        return ES.Call(origAll, this, arguments);
	      });
	    }
	    if (Promise.race.length !== 1) {
	      var origRace = Promise.race;
	      overrideNative(Promise, 'race', function race(iterable) {
	        return ES.Call(origRace, this, arguments);
	      });
	    }
	    if (Promise.resolve.length !== 1) {
	      var origResolve = Promise.resolve;
	      overrideNative(Promise, 'resolve', function resolve(x) {
	        return ES.Call(origResolve, this, arguments);
	      });
	    }
	    if (Promise.reject.length !== 1) {
	      var origReject = Promise.reject;
	      overrideNative(Promise, 'reject', function reject(r) {
	        return ES.Call(origReject, this, arguments);
	      });
	    }
	    ensureEnumerable(Promise, 'all');
	    ensureEnumerable(Promise, 'race');
	    ensureEnumerable(Promise, 'resolve');
	    ensureEnumerable(Promise, 'reject');
	    addDefaultSpecies(Promise);
	  }
	
	  // Map and Set require a true ES5 environment
	  // Their fast path also requires that the environment preserve
	  // property insertion order, which is not guaranteed by the spec.
	  var testOrder = function (a) {
	    var b = keys(_reduce(a, function (o, k) {
	      o[k] = true;
	      return o;
	    }, {}));
	    return a.join(':') === b.join(':');
	  };
	  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
	  // some engines (eg, Chrome) only preserve insertion order for string keys
	  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
	
	  if (supportsDescriptors) {
	
	    var fastkey = function fastkey(key) {
	      if (!preservesInsertionOrder) {
	        return null;
	      }
	      if (typeof key === 'undefined' || key === null) {
	        return '^' + ES.ToString(key);
	      } else if (typeof key === 'string') {
	        return '$' + key;
	      } else if (typeof key === 'number') {
	        // note that -0 will get coerced to "0" when used as a property key
	        if (!preservesNumericInsertionOrder) {
	          return 'n' + key;
	        }
	        return key;
	      } else if (typeof key === 'boolean') {
	        return 'b' + key;
	      }
	      return null;
	    };
	
	    var emptyObject = function emptyObject() {
	      // accomodate some older not-quite-ES5 browsers
	      return Object.create ? Object.create(null) : {};
	    };
	
	    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (entry) {
	          if (!ES.TypeIsObject(entry)) {
	            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
	          }
	          map.set(entry[0], entry[1]);
	        });
	      } else if (iterable instanceof MapConstructor) {
	        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
	          map.set(key, value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = map.set;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextItem = next.value;
	            try {
	              if (!ES.TypeIsObject(nextItem)) {
	                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
	              }
	              _call(adder, map, nextItem[0], nextItem[1]);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (value) {
	          set.add(value);
	        });
	      } else if (iterable instanceof SetConstructor) {
	        _call(SetConstructor.prototype.forEach, iterable, function (value) {
	          set.add(value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = set.add;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextValue = next.value;
	            try {
	              _call(adder, set, nextValue);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	
	    var collectionShims = {
	      Map: (function () {
	
	        var empty = {};
	
	        var MapEntry = function MapEntry(key, value) {
	          this.key = key;
	          this.value = value;
	          this.next = null;
	          this.prev = null;
	        };
	
	        MapEntry.prototype.isRemoved = function isRemoved() {
	          return this.key === empty;
	        };
	
	        var isMap = function isMap(map) {
	          return !!map._es6map;
	        };
	
	        var requireMapSlot = function requireMapSlot(map, method) {
	          if (!ES.TypeIsObject(map) || !isMap(map)) {
	            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
	          }
	        };
	
	        var MapIterator = function MapIterator(map, kind) {
	          requireMapSlot(map, '[[MapIterator]]');
	          this.head = map._head;
	          this.i = this.head;
	          this.kind = kind;
	        };
	
	        MapIterator.prototype = {
	          next: function next() {
	            var i = this.i;
	            var kind = this.kind;
	            var head = this.head;
	            if (typeof this.i === 'undefined') {
	              return iteratorResult();
	            }
	            while (i.isRemoved() && i !== head) {
	              // back up off of removed entries
	              i = i.prev;
	            }
	            // advance to next unreturned element.
	            var result;
	            while (i.next !== head) {
	              i = i.next;
	              if (!i.isRemoved()) {
	                if (kind === 'key') {
	                  result = i.key;
	                } else if (kind === 'value') {
	                  result = i.value;
	                } else {
	                  result = [i.key, i.value];
	                }
	                this.i = i;
	                return iteratorResult(result);
	              }
	            }
	            // once the iterator is done, it is done forever.
	            this.i = void 0;
	            return iteratorResult();
	          }
	        };
	        addIterator(MapIterator.prototype);
	
	        var Map$prototype;
	        var MapShim = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          if (this && this._es6map) {
	            throw new TypeError('Bad construction');
	          }
	          var map = emulateES6construct(this, Map, Map$prototype, {
	            _es6map: true,
	            _head: null,
	            _storage: emptyObject(),
	            _size: 0
	          });
	
	          var head = new MapEntry(null, null);
	          // circular doubly-linked list.
	          head.next = head.prev = head;
	          map._head = head;
	
	          // Optionally initialize map from iterable
	          if (arguments.length > 0) {
	            addIterableToMap(Map, map, arguments[0]);
	          }
	          return map;
	        };
	        Map$prototype = MapShim.prototype;
	
	        Value.getter(Map$prototype, 'size', function () {
	          if (typeof this._size === 'undefined') {
	            throw new TypeError('size method called on incompatible Map');
	          }
	          return this._size;
	        });
	
	        defineProperties(Map$prototype, {
	          get: function get(key) {
	            requireMapSlot(this, 'get');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              var entry = this._storage[fkey];
	              if (entry) {
	                return entry.value;
	              } else {
	                return;
	              }
	            }
	            var head = this._head;
	            var i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return i.value;
	              }
	            }
	          },
	
	          has: function has(key) {
	            requireMapSlot(this, 'has');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              return typeof this._storage[fkey] !== 'undefined';
	            }
	            var head = this._head;
	            var i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return true;
	              }
	            }
	            return false;
	          },
	
	          set: function set(key, value) {
	            requireMapSlot(this, 'set');
	            var head = this._head;
	            var i = head;
	            var entry;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] !== 'undefined') {
	                this._storage[fkey].value = value;
	                return this;
	              } else {
	                entry = this._storage[fkey] = new MapEntry(key, value);
	                i = head.prev;
	                // fall through
	              }
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.value = value;
	                return this;
	              }
	            }
	            entry = entry || new MapEntry(key, value);
	            if (ES.SameValue(-0, key)) {
	              entry.key = +0; // coerce -0 to +0 in entry
	            }
	            entry.next = this._head;
	            entry.prev = this._head.prev;
	            entry.prev.next = entry;
	            entry.next.prev = entry;
	            this._size += 1;
	            return this;
	          },
	
	          'delete': function (key) {
	            requireMapSlot(this, 'delete');
	            var head = this._head;
	            var i = head;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] === 'undefined') {
	                return false;
	              }
	              i = this._storage[fkey].prev;
	              delete this._storage[fkey];
	              // fall through
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.key = i.value = empty;
	                i.prev.next = i.next;
	                i.next.prev = i.prev;
	                this._size -= 1;
	                return true;
	              }
	            }
	            return false;
	          },
	
	          clear: function clear() {
	            requireMapSlot(this, 'clear');
	            this._size = 0;
	            this._storage = emptyObject();
	            var head = this._head;
	            var i = head;
	            var p = i.next;
	            while ((i = p) !== head) {
	              i.key = i.value = empty;
	              p = i.next;
	              i.next = i.prev = head;
	            }
	            head.next = head.prev = head;
	          },
	
	          keys: function keys() {
	            requireMapSlot(this, 'keys');
	            return new MapIterator(this, 'key');
	          },
	
	          values: function values() {
	            requireMapSlot(this, 'values');
	            return new MapIterator(this, 'value');
	          },
	
	          entries: function entries() {
	            requireMapSlot(this, 'entries');
	            return new MapIterator(this, 'key+value');
	          },
	
	          forEach: function forEach(callback) {
	            requireMapSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var it = this.entries();
	            for (var entry = it.next(); !entry.done; entry = it.next()) {
	              if (context) {
	                _call(callback, context, entry.value[1], entry.value[0], this);
	              } else {
	                callback(entry.value[1], entry.value[0], this);
	              }
	            }
	          }
	        });
	        addIterator(Map$prototype, Map$prototype.entries);
	
	        return MapShim;
	      }()),
	
	      Set: (function () {
	        var isSet = function isSet(set) {
	          return set._es6set && typeof set._storage !== 'undefined';
	        };
	        var requireSetSlot = function requireSetSlot(set, method) {
	          if (!ES.TypeIsObject(set) || !isSet(set)) {
	            // https://github.com/paulmillr/es6-shim/issues/176
	            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
	          }
	        };
	
	        // Creating a Map is expensive.  To speed up the common case of
	        // Sets containing only string or numeric keys, we use an object
	        // as backing storage and lazily create a full Map only when
	        // required.
	        var Set$prototype;
	        var SetShim = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          if (this && this._es6set) {
	            throw new TypeError('Bad construction');
	          }
	          var set = emulateES6construct(this, Set, Set$prototype, {
	            _es6set: true,
	            '[[SetData]]': null,
	            _storage: emptyObject()
	          });
	          if (!set._es6set) {
	            throw new TypeError('bad set');
	          }
	
	          // Optionally initialize Set from iterable
	          if (arguments.length > 0) {
	            addIterableToSet(Set, set, arguments[0]);
	          }
	          return set;
	        };
	        Set$prototype = SetShim.prototype;
	
	        var decodeKey = function (key) {
	          var k = key;
	          if (k === '^null') {
	            return null;
	          } else if (k === '^undefined') {
	            return void 0;
	          } else {
	            var first = k.charAt(0);
	            if (first === '$') {
	              return _strSlice(k, 1);
	            } else if (first === 'n') {
	              return +_strSlice(k, 1);
	            } else if (first === 'b') {
	              return k === 'btrue';
	            }
	          }
	          return +k;
	        };
	        // Switch from the object backing storage to a full Map.
	        var ensureMap = function ensureMap(set) {
	          if (!set['[[SetData]]']) {
	            var m = set['[[SetData]]'] = new collectionShims.Map();
	            _forEach(keys(set._storage), function (key) {
	              var k = decodeKey(key);
	              m.set(k, k);
	            });
	            set['[[SetData]]'] = m;
	          }
	          set._storage = null; // free old backing storage
	        };
	
	        Value.getter(SetShim.prototype, 'size', function () {
	          requireSetSlot(this, 'size');
	          if (this._storage) {
	            return keys(this._storage).length;
	          }
	          ensureMap(this);
	          return this['[[SetData]]'].size;
	        });
	
	        defineProperties(SetShim.prototype, {
	          has: function has(key) {
	            requireSetSlot(this, 'has');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              return !!this._storage[fkey];
	            }
	            ensureMap(this);
	            return this['[[SetData]]'].has(key);
	          },
	
	          add: function add(key) {
	            requireSetSlot(this, 'add');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              this._storage[fkey] = true;
	              return this;
	            }
	            ensureMap(this);
	            this['[[SetData]]'].set(key, key);
	            return this;
	          },
	
	          'delete': function (key) {
	            requireSetSlot(this, 'delete');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              var hasFKey = _hasOwnProperty(this._storage, fkey);
	              return (delete this._storage[fkey]) && hasFKey;
	            }
	            ensureMap(this);
	            return this['[[SetData]]']['delete'](key);
	          },
	
	          clear: function clear() {
	            requireSetSlot(this, 'clear');
	            if (this._storage) {
	              this._storage = emptyObject();
	            }
	            if (this['[[SetData]]']) {
	              this['[[SetData]]'].clear();
	            }
	          },
	
	          values: function values() {
	            requireSetSlot(this, 'values');
	            ensureMap(this);
	            return this['[[SetData]]'].values();
	          },
	
	          entries: function entries() {
	            requireSetSlot(this, 'entries');
	            ensureMap(this);
	            return this['[[SetData]]'].entries();
	          },
	
	          forEach: function forEach(callback) {
	            requireSetSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var entireSet = this;
	            ensureMap(entireSet);
	            this['[[SetData]]'].forEach(function (value, key) {
	              if (context) {
	                _call(callback, context, key, key, entireSet);
	              } else {
	                callback(key, key, entireSet);
	              }
	            });
	          }
	        });
	        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
	        addIterator(SetShim.prototype, SetShim.prototype.values);
	
	        return SetShim;
	      }())
	    };
	
	    if (globals.Map || globals.Set) {
	      // Safari 8, for example, doesn't accept an iterable.
	      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });
	      if (!mapAcceptsArguments) {
	        var OrigMapNoArgs = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMapNoArgs();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          delete m.constructor;
	          Object.setPrototypeOf(m, globals.Map.prototype);
	          return m;
	        };
	        globals.Map.prototype = create(OrigMapNoArgs.prototype);
	        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
	        Value.preserveToString(globals.Map, OrigMapNoArgs);
	      }
	      var testMap = new Map();
	      var mapUsesSameValueZero = (function () {
	        // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
	        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
	        m.set(-0, m);
	        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
	      }());
	      var mapSupportsChaining = testMap.set(1, 2) === testMap;
	      if (!mapUsesSameValueZero || !mapSupportsChaining) {
	        var origMapSet = Map.prototype.set;
	        overrideNative(Map.prototype, 'set', function set(k, v) {
	          _call(origMapSet, this, k === 0 ? 0 : k, v);
	          return this;
	        });
	      }
	      if (!mapUsesSameValueZero) {
	        var origMapGet = Map.prototype.get;
	        var origMapHas = Map.prototype.has;
	        defineProperties(Map.prototype, {
	          get: function get(k) {
	            return _call(origMapGet, this, k === 0 ? 0 : k);
	          },
	          has: function has(k) {
	            return _call(origMapHas, this, k === 0 ? 0 : k);
	          }
	        }, true);
	        Value.preserveToString(Map.prototype.get, origMapGet);
	        Value.preserveToString(Map.prototype.has, origMapHas);
	      }
	      var testSet = new Set();
	      var setUsesSameValueZero = (function (s) {
	        s['delete'](0);
	        s.add(-0);
	        return !s.has(0);
	      }(testSet));
	      var setSupportsChaining = testSet.add(1) === testSet;
	      if (!setUsesSameValueZero || !setSupportsChaining) {
	        var origSetAdd = Set.prototype.add;
	        Set.prototype.add = function add(v) {
	          _call(origSetAdd, this, v === 0 ? 0 : v);
	          return this;
	        };
	        Value.preserveToString(Set.prototype.add, origSetAdd);
	      }
	      if (!setUsesSameValueZero) {
	        var origSetHas = Set.prototype.has;
	        Set.prototype.has = function has(v) {
	          return _call(origSetHas, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype.has, origSetHas);
	        var origSetDel = Set.prototype['delete'];
	        Set.prototype['delete'] = function SetDelete(v) {
	          return _call(origSetDel, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype['delete'], origSetDel);
	      }
	      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
	        var m = new M([]);
	        // Firefox 32 is ok with the instantiating the subclass but will
	        // throw when the map is used.
	        m.set(42, 42);
	        return m instanceof M;
	      });
	      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var mapRequiresNew = (function () {
	        try {
	          return !(globals.Map() instanceof globals.Map);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
	        var OrigMap = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMap();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          delete m.constructor;
	          Object.setPrototypeOf(m, Map.prototype);
	          return m;
	        };
	        globals.Map.prototype = OrigMap.prototype;
	        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
	        Value.preserveToString(globals.Map, OrigMap);
	      }
	      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
	        var s = new S([]);
	        s.add(42, 42);
	        return s instanceof S;
	      });
	      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var setRequiresNew = (function () {
	        try {
	          return !(globals.Set() instanceof globals.Set);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
	        var OrigSet = globals.Set;
	        globals.Set = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          var s = new OrigSet();
	          if (arguments.length > 0) {
	            addIterableToSet(Set, s, arguments[0]);
	          }
	          delete s.constructor;
	          Object.setPrototypeOf(s, Set.prototype);
	          return s;
	        };
	        globals.Set.prototype = OrigSet.prototype;
	        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
	        Value.preserveToString(globals.Set, OrigSet);
	      }
	      var newMap = new globals.Map();
	      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
	        return newMap.keys().next().done;
	      });
	      /*
	        - In Firefox < 23, Map#size is a function.
	        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
	        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
	        - In Firefox 24, Map and Set do not implement forEach
	        - In Firefox 25 at least, Map and Set are callable without "new"
	      */
	      if (
	        typeof globals.Map.prototype.clear !== 'function' ||
	        new globals.Set().size !== 0 ||
	        newMap.size !== 0 ||
	        typeof globals.Map.prototype.keys !== 'function' ||
	        typeof globals.Set.prototype.keys !== 'function' ||
	        typeof globals.Map.prototype.forEach !== 'function' ||
	        typeof globals.Set.prototype.forEach !== 'function' ||
	        isCallableWithoutNew(globals.Map) ||
	        isCallableWithoutNew(globals.Set) ||
	        typeof newMap.keys().next !== 'function' || // Safari 8
	        mapIterationThrowsStopIterator || // Firefox 25
	        !mapSupportsSubclassing
	      ) {
	        defineProperties(globals, {
	          Map: collectionShims.Map,
	          Set: collectionShims.Set
	        }, true);
	      }
	
	      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
	        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
	        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
	      }
	
	      // Shim incomplete iterator implementations.
	      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
	      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
	
	      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
	        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
	        var anonymousSetHas = globals.Set.prototype.has;
	        overrideNative(globals.Set.prototype, 'has', function has(key) {
	          return _call(anonymousSetHas, this, key);
	        });
	      }
	    }
	    defineProperties(globals, collectionShims);
	    addDefaultSpecies(globals.Map);
	    addDefaultSpecies(globals.Set);
	  }
	
	  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
	    if (!ES.TypeIsObject(target)) {
	      throw new TypeError('target must be an object');
	    }
	  };
	
	  // Some Reflect methods are basically the same as
	  // those on the Object global, except that a TypeError is thrown if
	  // target isn't an object. As well as returning a boolean indicating
	  // the success of the operation.
	  var ReflectShims = {
	    // Apply method in a functional form.
	    apply: function apply() {
	      return ES.Call(ES.Call, null, arguments);
	    },
	
	    // New operator in a functional form.
	    construct: function construct(constructor, args) {
	      if (!ES.IsConstructor(constructor)) {
	        throw new TypeError('First argument must be a constructor.');
	      }
	      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
	      if (!ES.IsConstructor(newTarget)) {
	        throw new TypeError('new.target must be a constructor.');
	      }
	      return ES.Construct(constructor, args, newTarget, 'internal');
	    },
	
	    // When deleting a non-existent or configurable property,
	    // true is returned.
	    // When attempting to delete a non-configurable property,
	    // it will return false.
	    deleteProperty: function deleteProperty(target, key) {
	      throwUnlessTargetIsObject(target);
	      if (supportsDescriptors) {
	        var desc = Object.getOwnPropertyDescriptor(target, key);
	
	        if (desc && !desc.configurable) {
	          return false;
	        }
	      }
	
	      // Will return true.
	      return delete target[key];
	    },
	
	    has: function has(target, key) {
	      throwUnlessTargetIsObject(target);
	      return key in target;
	    }
	  };
	
	  if (Object.getOwnPropertyNames) {
	    Object.assign(ReflectShims, {
	      // Basically the result of calling the internal [[OwnPropertyKeys]].
	      // Concatenating propertyNames and propertySymbols should do the trick.
	      // This should continue to work together with a Symbol shim
	      // which overrides Object.getOwnPropertyNames and implements
	      // Object.getOwnPropertySymbols.
	      ownKeys: function ownKeys(target) {
	        throwUnlessTargetIsObject(target);
	        var keys = Object.getOwnPropertyNames(target);
	
	        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	          _pushApply(keys, Object.getOwnPropertySymbols(target));
	        }
	
	        return keys;
	      }
	    });
	  }
	
	  var callAndCatchException = function ConvertExceptionToBoolean(func) {
	    return !throwsError(func);
	  };
	
	  if (Object.preventExtensions) {
	    Object.assign(ReflectShims, {
	      isExtensible: function isExtensible(target) {
	        throwUnlessTargetIsObject(target);
	        return Object.isExtensible(target);
	      },
	      preventExtensions: function preventExtensions(target) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.preventExtensions(target);
	        });
	      }
	    });
	  }
	
	  if (supportsDescriptors) {
	    var internalGet = function get(target, key, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent === null) {
	          return void 0;
	        }
	
	        return internalGet(parent, key, receiver);
	      }
	
	      if ('value' in desc) {
	        return desc.value;
	      }
	
	      if (desc.get) {
	        return ES.Call(desc.get, receiver);
	      }
	
	      return void 0;
	    };
	
	    var internalSet = function set(target, key, value, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent !== null) {
	          return internalSet(parent, key, value, receiver);
	        }
	
	        desc = {
	          value: void 0,
	          writable: true,
	          enumerable: true,
	          configurable: true
	        };
	      }
	
	      if ('value' in desc) {
	        if (!desc.writable) {
	          return false;
	        }
	
	        if (!ES.TypeIsObject(receiver)) {
	          return false;
	        }
	
	        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
	
	        if (existingDesc) {
	          return Reflect.defineProperty(receiver, key, {
	            value: value
	          });
	        } else {
	          return Reflect.defineProperty(receiver, key, {
	            value: value,
	            writable: true,
	            enumerable: true,
	            configurable: true
	          });
	        }
	      }
	
	      if (desc.set) {
	        _call(desc.set, receiver, value);
	        return true;
	      }
	
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      defineProperty: function defineProperty(target, propertyKey, attributes) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.defineProperty(target, propertyKey, attributes);
	        });
	      },
	
	      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	        throwUnlessTargetIsObject(target);
	        return Object.getOwnPropertyDescriptor(target, propertyKey);
	      },
	
	      // Syntax in a functional form.
	      get: function get(target, key) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 2 ? arguments[2] : target;
	
	        return internalGet(target, key, receiver);
	      },
	
	      set: function set(target, key, value) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 3 ? arguments[3] : target;
	
	        return internalSet(target, key, value, receiver);
	      }
	    });
	  }
	
	  if (Object.getPrototypeOf) {
	    var objectDotGetPrototypeOf = Object.getPrototypeOf;
	    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
	      throwUnlessTargetIsObject(target);
	      return objectDotGetPrototypeOf(target);
	    };
	  }
	
	  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
	    var willCreateCircularPrototype = function (object, lastProto) {
	      var proto = lastProto;
	      while (proto) {
	        if (object === proto) {
	          return true;
	        }
	        proto = ReflectShims.getPrototypeOf(proto);
	      }
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      // Sets the prototype of the given object.
	      // Returns true on success, otherwise false.
	      setPrototypeOf: function setPrototypeOf(object, proto) {
	        throwUnlessTargetIsObject(object);
	        if (proto !== null && !ES.TypeIsObject(proto)) {
	          throw new TypeError('proto must be an object or null');
	        }
	
	        // If they already are the same, we're done.
	        if (proto === Reflect.getPrototypeOf(object)) {
	          return true;
	        }
	
	        // Cannot alter prototype if object not extensible.
	        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
	          return false;
	        }
	
	        // Ensure that we do not create a circular prototype chain.
	        if (willCreateCircularPrototype(object, proto)) {
	          return false;
	        }
	
	        Object.setPrototypeOf(object, proto);
	
	        return true;
	      }
	    });
	  }
	  var defineOrOverrideReflectProperty = function (key, shim) {
	    if (!ES.IsCallable(globals.Reflect[key])) {
	      defineProperty(globals.Reflect, key, shim);
	    } else {
	      var acceptsPrimitives = valueOrFalseIfThrows(function () {
	        globals.Reflect[key](1);
	        globals.Reflect[key](NaN);
	        globals.Reflect[key](true);
	        return true;
	      });
	      if (acceptsPrimitives) {
	        overrideNative(globals.Reflect, key, shim);
	      }
	    }
	  };
	  Object.keys(ReflectShims).forEach(function (key) {
	    defineOrOverrideReflectProperty(key, ReflectShims[key]);
	  });
	  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
	  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
	    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
	      return _call(originalReflectGetProto, globals.Reflect, target);
	    });
	  }
	  if (globals.Reflect.setPrototypeOf) {
	    if (valueOrFalseIfThrows(function () {
	      globals.Reflect.setPrototypeOf(1, {});
	      return true;
	    })) {
	      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
	    }
	  }
	  if (globals.Reflect.defineProperty) {
	    if (!valueOrFalseIfThrows(function () {
	      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });
	      // "extensible" fails on Edge 0.12
	      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
	      return basic && extensible;
	    })) {
	      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
	    }
	  }
	  if (globals.Reflect.construct) {
	    if (!valueOrFalseIfThrows(function () {
	      var F = function F() {};
	      return globals.Reflect.construct(function () {}, [], F) instanceof F;
	    })) {
	      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
	    }
	  }
	
	  if (String(new Date(NaN)) !== 'Invalid Date') {
	    var dateToString = Date.prototype.toString;
	    var shimmedDateToString = function toString() {
	      var valueOf = +this;
	      if (valueOf !== valueOf) {
	        return 'Invalid Date';
	      }
	      return ES.Call(dateToString, this);
	    };
	    overrideNative(Date.prototype, 'toString', shimmedDateToString);
	  }
	
	  // Annex B HTML methods
	  // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object
	  var stringHTMLshims = {
	    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
	    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
	    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
	    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
	    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
	    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
	    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
	    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
	    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
	    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
	    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
	    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
	    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
	  };
	  _forEach(Object.keys(stringHTMLshims), function (key) {
	    var method = String.prototype[key];
	    var shouldOverwrite = false;
	    if (ES.IsCallable(method)) {
	      var output = _call(method, '', ' " ');
	      var quotesCount = _concat([], output.match(/"/g)).length;
	      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
	    } else {
	      shouldOverwrite = true;
	    }
	    if (shouldOverwrite) {
	      overrideNative(String.prototype, key, stringHTMLshims[key]);
	    }
	  });
	
	  var JSONstringifiesSymbols = (function () {
	    // Microsoft Edge v0.12 stringifies Symbols incorrectly
	    if (!hasSymbols) { return false; } // Symbols are not supported
	    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
	    if (!stringify) { return false; } // JSON.stringify is not supported
	    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`
	    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`
	    var obj = { a: Symbol() };
	    obj[Symbol()] = true;
	    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted
	    return false;
	  }());
	  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
	    // Chrome 45 throws on stringifying object symbols
	    if (!hasSymbols) { return true; } // Symbols are not supported
	    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
	  });
	  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
	    var origStringify = JSON.stringify;
	    overrideNative(JSON, 'stringify', function stringify(value) {
	      if (typeof value === 'symbol') { return; }
	      var replacer;
	      if (arguments.length > 1) {
	        replacer = arguments[1];
	      }
	      var args = [value];
	      if (!isArray(replacer)) {
	        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
	        var wrappedReplacer = function (key, val) {
	          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
	          if (typeof parsedValue !== 'symbol') {
	            if (Type.symbol(parsedValue)) {
	              return assignTo({})(parsedValue);
	            } else {
	              return parsedValue;
	            }
	          }
	        };
	        args.push(wrappedReplacer);
	      } else {
	        // create wrapped replacer that handles an array replacer?
	        args.push(replacer);
	      }
	      if (arguments.length > 2) {
	        args.push(arguments[2]);
	      }
	      return origStringify.apply(this, args);
	    });
	  }
	
	  return globals;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 74:
/***/ function(module, exports) {



/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	"use strict";
	var Reflect;
	(function (Reflect) {
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && __webpack_require__(74);
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 78:
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(7);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(2);
	var rxSubscriber_1 = __webpack_require__(23);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },

/***/ 301:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
	     true ? factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (factory());
	}(this, (function () { 'use strict';
	
	var Zone$1 = (function (global) {
	    if (global.Zone) {
	        throw new Error('Zone already loaded.');
	    }
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Zone.assertZonePatched = function () {
	            if (global.Promise !== ZoneAwarePromise) {
	                throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` " +
	                    "has been overwritten.\n" +
	                    "Most likely cause is that a Promise polyfill has been loaded " +
	                    "after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. " +
	                    "If you must load one, do so before loading zone.js.)");
	            }
	        };
	        Object.defineProperty(Zone, "current", {
	            get: function () { return _currentZone; },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () { return _currentTask; },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () { return this._name; },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' +
	                    task.zone.name + '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS
	                ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
	                : new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS
	                ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
	                : callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS
	                ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
	                : callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS
	                ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
	                : true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS
	                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
	                    : task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                _numberOfNestedTaskFrames++;
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    if (_numberOfNestedTaskFrames == 1) {
	                        drainMicroTaskQueue();
	                    }
	                    _numberOfNestedTaskFrames--;
	                }
	            };
	        }
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId;
	            }
	            else {
	                return this.toString();
	            }
	        };
	        return ZoneTask;
	    }());
	    function __symbol__(name) { return '__zone_symbol__' + name; }
	    
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _numberOfNestedTaskFrames = 0;
	    function scheduleQueueDrain() {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var _loop_1 = function() {
	                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                while (_uncaughtPromiseErrors.length) {
	                    _loop_1();
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) { return value; }
	    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error("Uncaught (in promise): " + value);
	                    }
	                    catch (e) {
	                        var error_1 = e;
	                        error_1.rejection = value;
	                        error_1.promise = promise;
	                        error_1.zone = Zone.current;
	                        error_1.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error_1);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            function onResolve(value) { promise && (promise = null || resolve(value)); }
	            function onReject(error) { promise && (promise = null || reject(error)); }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            var count = 0;
	            var resolvedValues = [];
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (!count) {
	                        resolve(resolvedValues);
	                    }
	                }; })(count), reject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    // Protect against aggressive optimizers dropping seemingly unused properties.
	    // E.g. Closure Compiler in advanced mode.
	    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
	    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
	    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
	    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    function patchThen(NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen = NativePromiseProtototype[__symbol__('then')]
	            = NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen.call(nativePromise, resolve, reject);
	            }).then(onResolve, onReject);
	        };
	    }
	    if (NativePromise) {
	        patchThen(NativePromise);
	        if (typeof global['fetch'] !== 'undefined') {
	            var fetchPromise = void 0;
	            try {
	                // In MS Edge this throws
	                fetchPromise = global['fetch']();
	            }
	            catch (e) {
	                // In Chrome this throws instead.
	                fetchPromise = global['fetch']('about:blank');
	            }
	            // ignore output to prevent error;
	            fetchPromise.then(function () { return null; }, function () { return null; });
	            if (fetchPromise.constructor != NativePromise) {
	                patchThen(fetchPromise.constructor);
	            }
	        }
	    }
	    // This is not part of public API, but it is usefull for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return global.Zone = Zone;
	})(typeof window === 'object' && window || typeof self === 'object' && self || global);
	
	/**
	 * Suppress closure compiler errors about unknown 'process' variable
	 * @fileoverview
	 * @suppress {undefinedVars}
	 */
	var zoneSymbol = Zone['__symbol__'];
	var _global$1 = typeof window === 'object' && window || typeof self === 'object' && self || global;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	
	var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	var isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
	        enumerable: true,
	        configurable: true
	    };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    // The getter would return undefined for unassigned properties but the default value of an unassigned property is null
	    desc.get = function () {
	        return this[_prop] || null;
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	
	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}
	
	var EVENT_TASKS = zoneSymbol('eventTasks');
	// For EventTarget
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler
	                && data.useCapturing === capture
	                && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    if (allowDuplicates === void 0) { allowDuplicates = false; }
	    var addFnSymbol = zoneSymbol(addFnName);
	    var removeFnSymbol = zoneSymbol(removeFnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    function scheduleEventListener(eventTask) {
	        var meta = eventTask.data;
	        attachRegisteredEvent(meta.target, eventTask);
	        return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    function cancelEventListener(eventTask) {
	        var meta = eventTask.data;
	        findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	        meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    return function zoneAwareAddListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var delegate = null;
	        if (typeof handler == 'function') {
	            delegate = handler;
	        }
	        else if (handler && handler.handleEvent) {
	            delegate = function (event) { return handler.handleEvent(event); };
	        }
	        var validZoneHandler = false;
	        try {
	            // In cross site contexts (such as WebDriver frameworks like Selenium),
	            // accessing the handler object here will cause an exception to be thrown which
	            // will fail tests prematurely.
	            validZoneHandler = handler && handler.toString() === "[object FunctionWrapper]";
	        }
	        catch (e) {
	            // Returning nothing here is fine, because objects in a cross-site context are unusable
	            return;
	        }
	        // Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
	        if (!delegate || validZoneHandler) {
	            return target[addFnSymbol](eventName, handler, useCapturing);
	        }
	        if (!allowDuplicates) {
	            var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	            if (eventTask) {
	                // we already registered, so this will have noop.
	                return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
	            }
	        }
	        var zone = Zone.current;
	        var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
	        var data = {
	            target: target,
	            eventName: eventName,
	            name: eventName,
	            useCapturing: useCapturing,
	            handler: handler
	        };
	        zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	    };
	}
	function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    var symbol = zoneSymbol(fnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    return function zoneAwareRemoveListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	        if (eventTask) {
	            eventTask.zone.cancelTask(eventTask);
	        }
	        else {
	            target[symbol](eventName, handler, useCapturing);
	        }
	    };
	}
	
	var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
	var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	var originalInstanceKey = zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global$1[className];
	    if (!OriginalClass)
	        return;
	    _global$1[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default: throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global$1[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global$1[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global$1[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	
	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && !proto.hasOwnProperty(name)) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}
	
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        patchEventTargetMethods(type && type.prototype);
	    }
	}
	
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	
	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}
	
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (e) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            try {
	                return _defineProperty(obj, prop, desc);
	            }
	            catch (e) {
	                var descJson = null;
	                try {
	                    descJson = JSON.stringify(desc);
	                }
	                catch (e) {
	                    descJson = descJson.toString();
	                }
	                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + e);
	            }
	        }
	        else {
	            throw e;
	        }
	    }
	}
	
	function registerElementPatch(_global) {
	    if (!isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = [
	        'createdCallback',
	        'attachedCallback',
	        'detachedCallback',
	        'attributeChangedCallback'
	    ];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        _redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}
	
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
	function propertyDescriptorPatch(_global) {
	    if (isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (isBrowser) {
	            patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            patchOnProperties(IDBIndex.prototype, null);
	            patchOnProperties(IDBRequest.prototype, null);
	            patchOnProperties(IDBOpenDBRequest.prototype, null);
	            patchOnProperties(IDBDatabase.prototype, null);
	            patchOnProperties(IDBTransaction.prototype, null);
	            patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            apply(_global);
	        }
	    }
	}
	function canPatchViaPropertyDescriptor() {
	    if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
	        && typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	
	var unboundKey = zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        document.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    
	}
	
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = task.invoke;
	        data.handleId = setNative.apply(window, data.args);
	        return task;
	    }
	    function clearTask(task) {
	        return clearNative(task.data.handleId);
	    }
	    setNative = patchMethod(window, setName, function (delegate) { return function (self, args) {
	        if (typeof args[0] === 'function') {
	            var zone = Zone.current;
	            var options = {
	                handleId: null,
	                isPeriodic: nameSuffix === 'Interval',
	                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                args: args
	            };
	            var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	            if (!task) {
	                return task;
	            }
	            // Node.js must additionally support the ref and unref functions.
	            var handle = task.data.handleId;
	            if (handle.ref && handle.unref) {
	                task.ref = handle.ref.bind(handle);
	                task.unref = handle.unref.bind(handle);
	            }
	            return task;
	        }
	        else {
	            // cause an error by calling it directly.
	            return delegate.apply(window, args);
	        }
	    }; });
	    clearNative = patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	        var task = args[0];
	        if (task && typeof task.type === 'string') {
	            if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                // Do not cancel already canceled functions
	                task.zone.cancelTask(task);
	            }
	        }
	        else {
	            // cause an error by calling it directly.
	            delegate.apply(window, args);
	        }
	    }; });
	}
	
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
	patchTimer(_global, set, clear, 'Timeout');
	patchTimer(_global, set, clear, 'Interval');
	patchTimer(_global, set, clear, 'Immediate');
	patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
	patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	eventTargetPatch(_global);
	propertyDescriptorPatch(_global);
	patchClass('MutationObserver');
	patchClass('WebKitMutationObserver');
	patchClass('FileReader');
	propertyPatch();
	registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = zoneSymbol('xhrTask');
	var XHR_SYNC = zoneSymbol('xhrSync');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === data.target.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        sendNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() {
	    }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return abortNative.apply(data.target, data.args);
	    }
	    var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
	        self[XHR_SYNC] = args[2] == false;
	        return openNative.apply(self, args);
	    }; });
	    var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        if (self[XHR_SYNC]) {
	            // if the XHR is sync there is no task to schedule, just execute the code.
	            return sendNative.apply(self, args);
	        }
	        else {
	            var options = {
	                target: self,
	                isPeriodic: false,
	                delay: null,
	                args: args,
	                aborted: false
	            };
	            return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	        }
	    }; });
	    var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    patchPrototype(_global['navigator'].geolocation, [
	        'getCurrentPosition',
	        'watchPosition'
	    ]);
	}
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 303:
/***/ function(module, exports) {

	/* (ignored) */

/***/ }

/******/ });
//# sourceMappingURL=vendor.1e9b5801290836ae227e.bundle.map
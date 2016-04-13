'use strict';

var _core = require('angular2/core');

var _common = require('angular2/common');

var _browser = require('angular2/platform/browser');

var _http = require('angular2/http');

var _chomsky = require('chomsky/lib/chomsky');

var _demo = require('./demo/demo.component');

// Vendor
// Angular 2

(0, _browser.bootstrap)(_demo.DemoApp, [_common.CORE_DIRECTIVES, (0, _core.provide)(_chomsky.Chomsky, { useClass: _chomsky.Chomsky }), _http.HTTP_PROVIDERS]).catch(function (err) {
    return console.error(err);
});
// App
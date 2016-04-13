'use strict';

var _core = require('angular2/core');

var _testing_internal = require('angular2/testing_internal');

var _location_mock = require('angular2/src/mock/location_mock');

var _router = require('angular2/src/router/router');

var _router2 = require('angular2/router');

var _route_registry = require('angular2/src/router/route_registry');

var _seek = require('./seek.component');

(0, _testing_internal.describe)('Component: SeekApp', function () {

    (0, _testing_internal.beforeEachProviders)(function () {
        return [_route_registry.RouteRegistry, (0, _core.provide)(_router2.Location, { useClass: _location_mock.SpyLocation }), (0, _core.provide)(_router2.ROUTER_PRIMARY_COMPONENT, { useValue: _seek.SeekApp }), (0, _core.provide)(_router2.Router, { useClass: _router.RootRouter })];
    });

    (0, _testing_internal.it)('renders it\'s HTML template.', (0, _testing_internal.inject)([_testing_internal.TestComponentBuilder, _testing_internal.AsyncTestCompleter], function (tcb, async) {
        tcb.createAsync(_seek.SeekApp).then(function (fixture) {
            fixture.detectChanges();

            var appHTML = fixture.debugElement.nativeElement.innerHTML;

            (0, _testing_internal.expect)(appHTML).toContain('navigation');
            (0, _testing_internal.expect)(appHTML).toContain('Seek');
            (0, _testing_internal.expect)(appHTML).toContain('router-outlet');

            async.done();
        }).catch(function (e) {
            return console.error(e);
        });
    }));
});
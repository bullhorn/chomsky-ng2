import 'babel-polyfill';
import 'phantomjs-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

function addProviders(providers:Array<any>):void {
    if (!providers) return;
    TestBed.configureTestingModule({ providers: providers });
}

// Assign all these to the global namespace
Object.assign(global, {
    addProviders,
    inject
});

Error.stackTraceLimit = Infinity;

describe('Chomsky-NG2', () => {
    let testContext = require.context('../src', true, /\.spec\.js/);
    testContext.keys().forEach(testContext);
});

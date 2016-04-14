// Angular 2
import {provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
// Vendor
import {Chomsky} from 'chomsky/lib/chomsky';
// App
import {DemoApp} from './demo/demo.component';
import {NGChomsky} from './service/ngchomsky.service';


bootstrap(DemoApp, [
    CORE_DIRECTIVES,
    NGChomsky,
    HTTP_PROVIDERS
]).catch(err => console.error(err));

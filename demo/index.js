import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { TRANSLATE_PROVIDERS } from './../src/chomsky-ng2';

import { DemoApp } from './pages/app/App';
import './index.scss';

bootstrap(DemoApp, [
    ...ROUTER_PROVIDERS,
    ...TRANSLATE_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err)); // eslint-disable-line

import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { TRANSLATE_PROVIDERS } from './../src/chomsky-ng2';

import { DemoApp } from './pages/app/App';
import './index.scss';

bootstrap(DemoApp, [
    ...TRANSLATE_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch(err => console.error(err)); // eslint-disable-line

// NG2
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { DemoApp } from './pages/app/App';
import { ChomskyModule } from '../src/chomsky-ng2';
// import { TRANSLATE_PROVIDERS } from '../src/services/translate.service';
import './index.scss';

@NgModule({
    declarations: [
        DemoApp
    ],
    imports: [
        BrowserModule,
        ChomskyModule
    ],
    entryComponents: [
        DemoApp
    ],
    bootstrap: [DemoApp]
})
export class DemoModule {}

/**
 * Bootstrap via function to ensure DOM is ready
 */
export function main() {
    platformBrowserDynamic().bootstrapModule(DemoModule);
}

/**
 * Bootstrap
 */
export function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();

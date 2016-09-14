// NG2
import { Component } from '@angular/core';
// App
import { TranslateService } from './../../../src/chomsky-ng2';
const template = require('./App.html');

@Component({
    selector: 'demo-app',
    template: template
})
export class DemoApp {
    constructor(translateService:TranslateService) {
        // Local instance
        this.translateService = translateService;
        // Locales
        this.usLocale = 'en-US';
        this.frLocale = 'fr-FR';
        this.ruLocale = 'ru-RU';
        // Listen for changes
        this.translateService.onLocaleChange.subscribe(locale => {
            console.log(`[Language Change]: ${locale}`); // eslint-disable-line
        });
        // Use en-US
        this.translateService.use(this.usLocale);
        // TODO: log out a replayed var if null and then the value is fulfilled.
        // Variable for today
        this.localToday = new Date();
        this.greeting = 'greeting';
        this.demoVariables = {
            today: new Date(),
            name: 'Jane',
            balance: 9874.34
        };
    }

    changeLanguage(locale) {
        this.currentLocale = locale;
        this.translateService.use(locale);
    }
}

// NG2
import { Component } from '@angular/core';
// App
import { TranslateService } from './../../../src/chomsky-ng2';

@Component({
    selector: 'demo-app',
    template: require('./App.html')
})
export class DemoApp {
    constructor(translateService:TranslateService) {
        // Local instance
        this.translateService = translateService;
        // Locales
        this.usLocale = 'en-US'; // eslint-disable-line
        this.frLocale = 'fr-FR'; // eslint-disable-line
        this.ruLocale = 'ru-RU'; // eslint-disable-line
        // Listen for changes
        this.translateService.onLocaleChange.subscribe(locale => {
            console.log(`[Language Change]: ${locale}`); // eslint-disable-line
        });
        // Variable for today
        this.localToday = new Date(); // eslint-disable-line
        this.greeting = 'greeting';
        /* eslint-disable */
        this.demoVariables = {
            today: new Date(),
            name: 'Jane',
            balance: 9874.34,
            count: 1
        };
        /* eslint-enable */
        // Use en-US
        this.changeLanguage(this.usLocale);
    }

    /* eslint-disable */
    changeLanguage(locale) {
        this.currentLocale = locale;
        this.translateService.use(locale);
    }
    /* eslint-enable */
}

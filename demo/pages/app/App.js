import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { TranslatePipe, Translate, TranslateService } from './../../../src/chomsky-ng2';

const template = require('./App.html');

@Component({
    selector: 'demo-app',
    template: template,
    directives: [
        CORE_DIRECTIVES,
        Translate
    ],
    pipes: [
        TranslatePipe
    ]
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

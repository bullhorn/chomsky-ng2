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
        // Sample english translation
        let enTranslation = {
            greeting: 'Hello!',
            farewell: 'Goodbye, {name}.',
            today: 'Today is {today:date}.',
            debt: 'You owe: {balance:currency}',
            messages: {
                zero: 'You have no messages.',
                1: 'You have {count:number} message.',
                20: 'You have {count:number:0.00} messages.',
                many: 'You have {count:number} messages.'
            }
        };

        this.usLocale = 'en-US';
        this.frLocale = 'fr-FR';
        this.ruLocale = 'ru-RU';

        // HTTP Load es
        Promise.all([
            this.translateService.setLanguage(this.frLocale, './../../i18n/fr-FR.json'),
            this.translateService.setLanguage(this.ruLocale, './../../i18n/ru-RU.json')
        ])
            .then(() => {
                // Object Load English
                this.translateService.setLanguage(this.usLocale, enTranslation);
            });

        // Variable for today
        this.localToday = new Date();

        this.greeting = 'greeting';

        this.demoVariables = {
            today: new Date(),
            name: 'Jane',
            balance: 9874.34
        };

        this.changeLanguage(this.usLocale);
    }

    getDictionary(languageKey) {
        let languageCode = (languageKey.split('-')[0] || '').toLowerCase();
        let variantCode = (languageKey.split('-')[1] || '').toUpperCase();
        return this.translateService.dictionaryManager.dictionaries[languageCode][variantCode];
    }

    changeLanguage(language) {
        this.currentLanguage = language;
        this.translateService.setLanguage(language);
    }
}

// NG2
import { Component } from '@angular/core';
// App
import { TranslateService } from './../../../index';

@Component({
    selector: 'demo-app',
    template: require('./App.html')
})
export class DemoApp {
    public usLocale:string = 'en-US';
    public frLocale:string = 'fr-FR';
    public ruLocale:string = 'ru-RU';
    public greeting:string = 'greeting';
    public demoVariables:any = {
        today: new Date(),
        name: 'Jane',
        balance: 9874.34,
        count: 1
    };
    public currentLocale:string;

    constructor() {
        // Listen for changes
        console.log('WHAT', TranslateService);
        TranslateService.onLocaleChange.subscribe(locale => {
            console.log(`[Language Change]: ${locale}`);
        });
        // Use en-US
        this.changeLanguage(this.usLocale);
    }

    /* eslint-disable */
    changeLanguage(locale) {
        this.currentLocale = locale;
        TranslateService.use(locale);
    }

    /* eslint-enable */
}

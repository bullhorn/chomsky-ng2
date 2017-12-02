import { Component } from '@angular/core';

import { TranslateService } from '../platform';

@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public usLocale: string = 'en-US';
    public frLocale: string = 'fr-FR';
    public ruLocale: string = 'ru-RU';
    public greeting: string = 'greeting';
    public demoVariables: any = {
        today: new Date(),
        name: 'Jane',
        balance: 9874.34,
        count: 1
    };
    public currentLocale: string;
    public translateService: any = TranslateService;

    constructor() {
        // Listen for changes
        console.log('[TranslateService]', TranslateService); // tslint:disable-line
        TranslateService.onLocaleChange.subscribe(locale => {
            console.log(`[Language Change]: ${locale}`); // tslint:disable-line
        });
        // Use en-US
        this.changeLanguage(this.usLocale);
    }

    changeLanguage(locale) {
        this.currentLocale = locale;
        TranslateService.use(locale);
    }
}

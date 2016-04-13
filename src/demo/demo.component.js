// Angular
import {Component} from 'angular2/core';
// Vendor
import {Chomsky} from 'chomsky/lib/chomsky';
// App
import {TranslatePipe} from '../pipe/translate.pipe';

@Component({
    selector: 'demo-app',
    template: `
        <p>Chomsky NG2 Demo</p>
        <p>{{ 'greeting' | translate | async }}</p>
        <ul>
            <li>
                <a (click)="changeLanguage('en')">English</a>
            </li>
            <li>
                <a (click)="changeLanguage('es')">Spanish</a>
            </li>
        </ul>
        <p>{{ 'farewell' | translate:{ name: 'John' } | async }}</p>
    `,
    directives: [
    ],
    pipes: [
        TranslatePipe
    ]
})
export class DemoApp {
    constructor(chomsky: Chomsky) {

        this.chomsky = chomsky;

        let enTranslation = {
            greeting: 'Hello!',
            farewell: 'Goodbye, {name}.'
        };

        this.chomsky.setLanguage('es', './i18n/es.json');


        this.chomsky.setLanguage('en', enTranslation);


        this.chomsky.setLanguage('es');

    }

    changeLanguage(language) {
        console.log(1);
        this.chomsky.setLanguage(language);
    }
}

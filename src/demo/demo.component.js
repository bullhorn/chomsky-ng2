// Angular
import {Component} from 'angular2/core';
// Vendor
import {Chomsky} from 'chomsky/lib/chomsky';
// App
import {TranslatePipe} from '../pipe/translate.pipe';
import {Translate} from '../directive/translate.directive';

@Component({
    selector: 'demo-app',
    template: `
        <div class="container">
            <!-- MAIN HEADER -->
            <section class="row">
                <div class="col-xs-12 text-center">
                    <h1>Chomsky NG2 Demo</h1>
                    <p>Avram Noam Chomsky (/ˈnoʊm ˈtʃɒmski/; born December 7, 1928) is an American linguist, philosopher, cognitive scientist, historian, logician, social critic, and political activist. Sometimes described as "the father of modern linguistics," Chomsky is also a major figure in analytic philosophy, and one of the founders of the field of cognitive science. He has spent more than half a century at the Massachusetts Institute of Technology (MIT), where he is Institute Professor Emeritus, and is the author of over 100 books on topics such as linguistics, war, politics, and mass media. Ideologically, he aligns with anarcho-syndicalism and libertarian socialism.</p>
                </div>
            </section>
            <!-- CHOOSE LANGUAGE -->
            <section class="row">
                <div class="col-xs-12 text-center">
                    <h3 class="text-muted">Select A Language:</h3>
                    <div class="btn-group" role="group">
                        <button type="button" (click)="changeLanguage(usLocale)" [class.active]="currentLanguage === usLocale" class="btn btn-primary">English</button>
                        <button type="button" (click)="changeLanguage(ruLocale)" [class.active]="currentLanguage === ruLocale" class="btn btn-primary">Russian</button>
                        <button type="button" (click)="changeLanguage(frLocale)" [class.active]="currentLanguage === frLocale" class="btn btn-primary">French</button>
                    </div>
                </div>
            </section>
            <div class="clear-fix">&nbsp;</div>
            <!-- PIPE & DIRECTIVE -->
            <section class="row">
                <!-- PIPE -->
                <div class="col-xs-12 col-md-3">
                    <h2>Pipe</h2>
                    <br>
                    <p><strong>Simple Text</strong></p>
                    <p>{{ 'greeting' | translate | async }}</p>
                    <p><strong>Variable</strong></p>
                    <p>{{ 'farewell' | translate:{ name: 'John' } | async }}</p>
                    <p><strong>Variable Date</strong></p>
                    <p>{{ 'today' | translate:{ today: localToday } | async }}</p>
                    <!--<p><strong>Variable Number</strong></p>-->
                    <!--<p>{{ 'today' | translate:{ today: localToday } | async }}</p>-->
                    <p><strong>Variable Currency</strong></p>
                    <p>{{ 'debt' | translate:{ balance: demoVariables.balance } | async }}</p>
                </div>
                <!-- DIRECTIVE -->
                <div class="col-xs-12 col-md-3">
                    <h2>Directive</h2>
                    <br>
                    <p><strong>Simple Text</strong></p>
                    <p [translate]="'greeting'"></p>
                    <p><strong>Variable</strong></p>
                    <p [translate]="'farewell'" [dynamicValues]="demoVariables"></p>
                    <p><strong>Variable Date</strong></p>
                    <p [translate]="'today'" [dynamicValues]="demoVariables"></p>
                    <!--<p><strong>Variable Number</strong></p>-->
                    <!--<p>todo</p>-->
                    <p><strong>Variable Currency</strong></p>
                    <p [translate]="'debt'" [dynamicValues]="demoVariables"></p>
                </div>
                <!-- JSON -->
                <div class="col-xs-12 col-md-6">
                    <h2>JSON</h2>
                    <br>
                    <pre>{{ chomsky.dictionaryManager.dictionaries[currentLanguage] | json }}</pre>
                </div>
            </section>
        </div>
    `,
    directives: [
        Translate
    ],
    pipes: [
        TranslatePipe
    ]
})
export class DemoApp {
    constructor(chomsky: Chomsky) {
        // Local instance
        this.chomsky = chomsky;
        // Sample english translation
        let enTranslation = {
            greeting: 'Hello!',
            farewell: 'Goodbye, {name}.',
            today: 'Today is {today:date}.',
            debt: 'You owe: {balance:currency:USD}'
        };
        
        this.usLocale = 'en-US';
        this.frLocale = 'fr-FR';
        this.ruLocale = 'ru-RU';

        // HTTP Load es
        this.chomsky.setLanguage(this.frLocale, './i18n/fr-FR.json');
        this.chomsky.setLanguage(this.ruLocale, './i18n/ru-RU.json');
        // Object Load English
        this.chomsky.setLanguage(this.usLocale, enTranslation);

        // Variable for today
        this.localToday = new Date();

        this.greeting = 'greeting';

        this.demoVariables = {
            today: new Date(),
            name: 'Jane',
            balance: 9874.34
        };

        this.changeLanguage(this.ruLocale);
    }

    changeLanguage(language) {
        this.currentLanguage = language;
        this.chomsky.setLanguage(language);
    }
}

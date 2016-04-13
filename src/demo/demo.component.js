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
                        <button type="button" (click)="changeLanguage('en')" [class.active]="currentLanguage === 'en'" class="btn btn-primary">English</button>
                        <!--<button type="button" (click)="changeLanguage('en')" [class.active]="currentLanguage === 'en'" class="btn btn-primary">English</button>-->
                        <button type="button" (click)="changeLanguage('es')" [class.active]="currentLanguage === 'es'" class="btn btn-primary">French</button>
                    </div>
                </div>
            </section>
            <!-- PIPE & DIRECTIVE -->
            <section class="row">
                <!-- PIPE -->
                <div class="col-xs-12 col-md-6">
                    <h2>Pipe</h2>
                    <br>
                    <p><strong>Simple Text</strong></p>
                    <p>{{ 'greeting' | translate | async }}</p>
                    <p><strong>Variable</strong></p>
                    <p>{{ 'farewell' | translate:{ name: 'John' } | async }}</p>
                    <p><strong>Variable Date</strong></p>
                    <p>{{ 'today' | translate:{ today: localToday } | async }}</p>
                    <p><strong>Variable Number</strong></p>
                    <p>todo</p>
                    <p><strong>Variable Currency</strong></p>
                    <p>todo</p>
                </div>
                <!-- DIRECTIVE -->
                <div class="col-xs-12 col-md-6">
                    <h2>Directive</h2>
                    <br>
                    <p><strong>Simple Text</strong></p>
                    <p [translate]="'greeting'"></p>
                    <p><strong>Variable</strong></p>
                    <p [translate]="'farewell'" [dynamicValues]="demoVariables"></p>
                    <p><strong>Variable Date</strong></p>
                    <p [translate]="'today'" [dynamicValues]="demoVariables"></p>
                    <p><strong>Variable Number</strong></p>
                    <p>todo</p>
                    <p><strong>Variable Currency</strong></p>
                    <p>todo</p>
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
            today: 'Today is { today:date:MM[/]DD[/]YYYY }.'
        };

        this.currentLanguage = 'es';

        // HTTP Load es
        this.chomsky.setLanguage('es', './i18n/es.json');
        // Object Load English
        this.chomsky.setLanguage('en', enTranslation);
        // Set Language to ES
        this.chomsky.setLanguage('es');

        // Variable for today
        this.localToday = new Date();

        this.greeting = 'greeting';

        this.demoVariables = {
            today: new Date(),
            name: 'Jane'
        };
    }

    changeLanguage(language) {
        this.currentLanguage = language;
        this.chomsky.setLanguage(language);
    }
}

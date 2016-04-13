'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DemoApp = undefined;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _dec, _class; // Angular

// Vendor

// App

var _core = require('angular2/core');

var _chomsky = require('chomsky/lib/chomsky');

var _translate = require('../pipe/translate.pipe');

var _translate2 = require('../directive/translate.directive');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DemoApp = exports.DemoApp = (_dec = (0, _core.Component)({
    selector: 'demo-app',
    template: '\n        <div class="container">\n            <!-- MAIN HEADER -->\n            <section class="row">\n                <div class="col-xs-12 text-center">\n                    <h1>Chomsky NG2 Demo</h1>\n                    <p>Avram Noam Chomsky (/ˈnoʊm ˈtʃɒmski/; born December 7, 1928) is an American linguist, philosopher, cognitive scientist, historian, logician, social critic, and political activist. Sometimes described as "the father of modern linguistics," Chomsky is also a major figure in analytic philosophy, and one of the founders of the field of cognitive science. He has spent more than half a century at the Massachusetts Institute of Technology (MIT), where he is Institute Professor Emeritus, and is the author of over 100 books on topics such as linguistics, war, politics, and mass media. Ideologically, he aligns with anarcho-syndicalism and libertarian socialism.</p>\n                </div>\n            </section>\n            <!-- CHOOSE LANGUAGE -->\n            <section class="row">\n                <div class="col-xs-12 text-center">\n                    <h3 class="text-muted">Select A Language:</h3>\n                    <div class="btn-group" role="group">\n                        <button type="button" (click)="changeLanguage(\'en\')" [class.active]="currentLanguage === \'en\'" class="btn btn-primary">English</button>\n                        <!--<button type="button" (click)="changeLanguage(\'en\')" [class.active]="currentLanguage === \'en\'" class="btn btn-primary">English</button>-->\n                        <button type="button" (click)="changeLanguage(\'es\')" [class.active]="currentLanguage === \'es\'" class="btn btn-primary">French</button>\n                    </div>\n                </div>\n            </section>\n            <!-- PIPE & DIRECTIVE -->\n            <section class="row">\n                <!-- PIPE -->\n                <div class="col-xs-12 col-md-6">\n                    <h2>Pipe</h2>\n                    <br>\n                    <p><strong>Simple Text</strong></p>\n                    <p>{{ \'greeting\' | translate | async }}</p>\n                    <p><strong>Variable</strong></p>\n                    <p>{{ \'farewell\' | translate:{ name: \'John\' } | async }}</p>\n                    <p><strong>Variable Date</strong></p>\n                    <p>{{ \'today\' | translate:{ today: localToday } | async }}</p>\n                    <p><strong>Variable Number</strong></p>\n                    <p>todo</p>\n                    <p><strong>Variable Currency</strong></p>\n                    <p>todo</p>\n                </div>\n                <!-- DIRECTIVE -->\n                <div class="col-xs-12 col-md-6">\n                    <h2>Directive</h2>\n                    <br>\n                    <p><strong>Simple Text</strong></p>\n                    <p [translate]="\'greeting\'"></p>\n                    <p><strong>Variable</strong></p>\n                    <p [translate]="\'farewell\'" [dynamicValues]="demoVariables"></p>\n                    <p><strong>Variable Date</strong></p>\n                    <p [translate]="\'today\'" [dynamicValues]="demoVariables"></p>\n                    <p><strong>Variable Number</strong></p>\n                    <p>todo</p>\n                    <p><strong>Variable Currency</strong></p>\n                    <p>todo</p>\n                </div>\n            </section>\n        </div>\n    ',
    directives: [_translate2.Translate],
    pipes: [_translate.TranslatePipe]
}), _dec(_class = (function () {
    function DemoApp(chomsky) {
        _classCallCheck(this, DemoApp);

        // Local instance
        this.chomsky = chomsky;
        // Sample english translation
        var enTranslation = {
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

    _createClass(DemoApp, [{
        key: 'changeLanguage',
        value: function changeLanguage(language) {
            this.currentLanguage = language;
            this.chomsky.setLanguage(language);
        }
    }]);

    return DemoApp;
})()) || _class);
Reflect.defineMetadata('design:paramtypes', [_chomsky.Chomsky], DemoApp);
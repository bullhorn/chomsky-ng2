// Angular
import {ElementRef, Directive} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
// Vendor
//import {Chomsky} from 'chomsky/lib/chomsky';
// App
import {NGChomsky} from '../service/ngchomsky.service';

@Directive({
    selector: '[translate]',
    inputs: [
        'translate',
        'dynamicValues'
    ]
})
export class Translate {
    constructor(chomsky: NGChomsky, element: ElementRef) {
        this.element = element;
        this.translationService = chomsky;
    }

    ngOnInit() {
        this.translationService.onChange(() => {
            this.renderContent(this.translate, this.dynamicValues)
        });
        this.renderContent(this.translate, this.dynamicValues);
    }

    renderContent(phrase, dynamicValues) {
        this.element.nativeElement.innerHTML = this.translationService.translate(phrase, dynamicValues);
    }
}

// Angular
import {ElementRef, Directive} from 'angular2/core';
// Vendor
import {Chomsky} from 'chomsky/lib/chomsky';
// App


@Directive({
    selector: '[translate]',
    inputs: [
        'translate',
        'dynamicValues'
    ]
})
class Translate {
    constructor(element: ElementRef) {
        this.element = element;
        this.chomsky = new Chomsky;
    }

    ngOnInit() {
        let text = '';
        if (this.dynamicValues) {
            text = this.chomsky.translate(this.translate, this.dynamicValues);
        } else {
            text = this.chomsky.translate(this.translate);
        }
        this.element.nativeElement.innerHTML = text;
    }
}

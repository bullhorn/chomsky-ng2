import { ElementRef, Directive } from 'angular2/core';

import { TranslateService } from '../services/translate.service';

@Directive({
    selector: '[translate]',
    inputs: [
        'translate',
        'dynamicValues'
    ]
})
export class Translate {
    constructor(translateService:TranslateService, element:ElementRef) {
        this.element = element;
        this.translateService = translateService;
    }

    ngOnInit() {
        this.translateService.changeHandler.subscribe(() => {
            this.renderContent(this.translate, this.dynamicValues);
        });
        this.renderContent(this.translate, this.dynamicValues);
    }

    //ngOnDestroy() {
    //    this.translateService.changeHandler.unsubscribe();
    //}

    renderContent(phrase, dynamicValues) {
        this.element.nativeElement.innerHTML = this.translateService.translate(phrase, dynamicValues);
    }
}

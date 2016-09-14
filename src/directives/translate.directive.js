// NG2
import { ElementRef, Directive } from '@angular/core';
// APP
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
        this.translateService.onLocaleChange.subscribe(() => {
            this.renderContent(this.translate, this.dynamicValues);
        });
        this.renderContent(this.translate, this.dynamicValues);
    }

    ngOnDestroy() {
        this.translateService.onLocaleChange.unsubscribe();
    }

    renderContent(key, interpolation) {
        this.element.nativeElement.innerHTML = this.translateService.translate(key, interpolation);
    }
}

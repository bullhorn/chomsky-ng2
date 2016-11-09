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
    constructor(element:ElementRef) {
        this.element = element;
    }

    ngOnInit() {
        TranslateService.onLocaleChange.subscribe(() => {
            this.renderContent(this.translate, this.dynamicValues);
        });
        this.renderContent(this.translate, this.dynamicValues);
    }

    ngOnDestroy() {
        TranslateService.onLocaleChange.unsubscribe();
    }

    renderContent(key, interpolation) {
        // TODO: work with HTML (& NG2's HTML sanitation)
        this.element.nativeElement.innerHTML = TranslateService.translate(key, interpolation);
    }
}

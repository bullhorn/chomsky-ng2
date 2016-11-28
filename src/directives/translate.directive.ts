// NG2
import { ElementRef, Directive, Input, OnInit, OnDestroy } from '@angular/core';
// APP
import { TranslateService } from '../services/translate.service';

@Directive({
    selector: '[translate]'
})
export class Translate implements OnInit, OnDestroy {
    @Input() translate:string;
    @Input() dynamicValues:any;

    constructor(private element:ElementRef) {
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

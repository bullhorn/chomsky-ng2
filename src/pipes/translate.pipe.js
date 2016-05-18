import { Pipe, ChangeDetectorRef } from 'angular2/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe {
    constructor(translateService:TranslateService, changeDetector: ChangeDetectorRef) {
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.subscription = null;
        this.latestValue = null;
    }

    ngOnDestroy() {
        this.translateService.changeHandler.unsubscribe();
        this.subscription = null;
        this.latestValue = null;
    }

    transform(phraseKey, dynamicVariables) {
        if (!this.subscription) {
            this.subscription = this.translateService.changeHandler.subscribe(() => {
                this.latestValue = this.translateService.translate(phraseKey.toString(), dynamicVariables[0]);
                this.changeDetector.markForCheck();
            });
        }
        return this.latestValue;
    }
}

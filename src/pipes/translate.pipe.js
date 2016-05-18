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
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }

    transform(phraseKey, dynamicVariables) {
        return this.translateService.liveTranslate(phraseKey, dynamicVariables[0]);
    }
}

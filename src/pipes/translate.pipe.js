import { Pipe } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { TranslateService } from '../services/translate.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe {
    constructor(translateService:TranslateService) {
        this.translateService = translateService;
    }

    translate(phrase, dynamicValues) {
        return this.translateService.translate(phrase, dynamicValues);
    }

    transform(phraseKey, dynamicVariables) {
        let phrase = phraseKey.toString();
        let dynamicValues = dynamicVariables[0];
        this.asyncTranslation = Observable.create(observer => {
            observer.next(this.translate(phrase, dynamicValues));
            this.translateService.onChange(() => {
                observer.next(this.translate(phrase, dynamicValues));
            });
        });
        return this.asyncTranslation;
    }
}

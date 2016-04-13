// Angular
import {Pipe} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
// Vendor
import {Chomsky} from 'chomsky/lib/chomsky';
// App

@Pipe({
    name: 'translate'
})
export class TranslatePipe {

    constructor(chomsky: Chomsky) {
        this.translationService = chomsky;
    }

    translate(phrase, dynamicValues) {
        return this.translationService.translate(phrase, dynamicValues);
    }

    transform(phraseKey, dynamicVariables) {
        let phrase = phraseKey.toString();
        let dynamicValues = dynamicVariables[0];
        this.asyncTranslation = Observable.create(observer => {
            observer.next(this.translate(phrase, dynamicValues));
            this.translationService.onChange(() => {
                observer.next(this.translate(phrase, dynamicValues));
            });
        });
        return this.asyncTranslation;
    }
}

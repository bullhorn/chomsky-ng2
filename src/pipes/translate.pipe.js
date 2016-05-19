import { Pipe, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe {
    constructor(translateService:TranslateService, changeDetector:ChangeDetectorRef) {
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.onLangChange = null;
        this.lastKey = '';
        this.lastParams = '';
    }

    equals(objectOne, objectTwo) {
        if (objectOne === objectTwo) return true;
        if (objectOne === null || objectTwo === null) return false;
        if (objectOne !== objectOne && objectTwo !== objectTwo) return true; // eslint-disable-line
        let typeOne = typeof objectOne, typeTwo = typeof objectTwo, length, key, keySet;
        if (typeOne === typeTwo && typeOne === 'object') {
            if (Array.isArray(objectOne)) {
                if (!Array.isArray(objectTwo)) return false;
                if ((length = objectOne.length) === objectTwo.length) { // eslint-disable-line
                    for (key = 0; key < length; key++) {
                        if (!this.equals(objectOne[key], objectTwo[key])) return false;
                    }
                    return true;
                }
            } else {
                if (Array.isArray(objectTwo)) {
                    return false;
                }
                keySet = Object.create(null);
                for (key in objectOne) {
                    if (!this.equals(objectOne[key], objectTwo[key])) {
                        return false;
                    }
                    keySet[key] = true;
                }
                for (key in objectTwo) {
                    if (!(key in keySet) && typeof objectTwo[key] !== 'undefined') {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    updateValue(phraseKey, dynamicVariables) {
        this.value = this.translateService.translate(phraseKey, dynamicVariables);
        this.changeDetector.markForCheck();
    }

    transform(phraseKey, dynamicVariables) {
        if (!phraseKey || phraseKey.length === 0) {
            return phraseKey;
        }
        if (this.equals(phraseKey, this.lastKey) && this.equals(dynamicVariables, this.lastParams)) {
            return this.value;
        }
        this.lastKey = phraseKey;
        this.lastParams = dynamicVariables;
        this.updateValue(phraseKey, dynamicVariables);
        this.unsubscribe();
        this.onLangChange = this.translateService.changeHandler.subscribe(() => {
            this.updateValue(phraseKey, dynamicVariables);
        });
        return this.value;
    }

    unsubscribe() {
        if (this.onLangChange) {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
    }
}

import { Pipe, ChangeDetectorRef, PipeTransform, OnDestroy } from '@angular/core';

import { TranslateService } from '../services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
    lastKey: string = '';
    lastParams: string = '';
    value: string;
    onLangChange: any = null;

    constructor(private changeDetector?: ChangeDetectorRef) {
        this.changeDetector = changeDetector;
    }

    /**
     * @name equals
     * @param objectOne
     * @param objectTwo
     * @returns {boolean}
     * @description A utility function for checking equality.
     */
    equals(objectOne, objectTwo) {
        if (objectOne === objectTwo) {
            return true;
        }
        if (objectOne === null || objectTwo === null) {
            return false;
        }
        let typeOne = typeof objectOne;
        let typeTwo = typeof objectTwo;
        let length;
        let key;
        let keySet;
        if (typeOne === typeTwo && typeOne === 'object') {
            if (Array.isArray(objectOne)) {
                // Array checker
                if (!Array.isArray(objectTwo)) {
                    return false;
                }
                if ((length = objectOne.length) === objectTwo.length) {
                    for (key = 0; key < length; key++) {
                        if (!this.equals(objectOne[key], objectTwo[key])) {
                            return false;
                        }
                    }
                    return true;
                }
            } else {
                // Object checker
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

    /**
     * @name ngOnDestroy
     * @description Garbage collection for angular
     */
    ngOnDestroy() {
        this.unsubscribe();
    }

    /**
     * @name updateValue
     * @param phraseKey
     * @param dynamicVariables
     */
    updateValue(phraseKey, dynamicVariables) {
        this.value = TranslateService.translate(phraseKey, dynamicVariables);
        this.changeDetector.markForCheck();
    }

    /**
     * @name transform
     * @param phraseKey
     * @param dynamicVariables
     * @returns {*}
     */
    transform(phraseKey: string, dynamicVariables?: any) {
        if (!phraseKey || phraseKey.length === 0) {
            return null;
        }
        if (this.equals(phraseKey, this.lastKey) && this.equals(dynamicVariables, this.lastParams)) {
            return this.value;
        }
        this.lastKey = phraseKey;
        this.lastParams = dynamicVariables;
        this.updateValue(phraseKey, dynamicVariables);
        this.unsubscribe();
        this.onLangChange = TranslateService.onLocaleChange.subscribe(() => {
            this.updateValue(phraseKey, dynamicVariables);
        });
        return this.value;
    }

    /**
     * @name unsubscribe
     */
    unsubscribe() {
        if (this.onLangChange) {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
    }
}

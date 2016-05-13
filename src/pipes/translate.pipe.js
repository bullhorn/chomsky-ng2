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

// import { Pipe, ChangeDetectorRef, Injectable } from 'angular2/core';
// // import { isPresent } from 'angular2/core/src/facade/lang';
//
// import { TranslateService } from '../services/translate.service';
//
// @Injectable()
// @Pipe({
//     name: 'translate',
//     pure: false // required to update the value when the promise is resolved
// })
// export class TranslatePipe {
//     value = '';
//
//     constructor(translateService:TranslateService, _ref:ChangeDetectorRef) {
//         this.translateService = translateService;
//         this._ref = _ref;
//         this.init = false;
//     }
//
//     translate(phrase, dynamicValues) {
//         this.value = this.translateService.translate(phrase, dynamicValues);
//         this._ref.markForCheck();
//     }
//
//     transform(phraseKey, dynamicVariables) {
//         let phrase = phraseKey.toString();
//         let dynamicValues = dynamicVariables[0];
//
//         this._dispose();
//
//         // TODO - when chomsky is observables, dispose to take off handler
//         if (!this.init) {
//             this.translateService.onChange(() => {
//                 this.translate(phrase, dynamicValues);
//             });
//             this.init = true;
//         }
//
//         return this.value;
//     }
//
//     _dispose():void {
//         // if (isPresent(this.onLangChange)) {
//         //     this.onLangChange.unsubscribe();
//         //     this.onLangChange = undefined;
//         // }
//     }
//
//     ngOnDestroy():void {
//         this._dispose();
//     }
// }

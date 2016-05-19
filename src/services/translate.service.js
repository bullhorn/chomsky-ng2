import { Injectable, Provider } from '@angular/core';
import { Chomsky } from 'chomsky/lib/chomsky';

@Injectable()
export class TranslateService extends Chomsky {
}

export const TRANSLATE_PROVIDERS = [
    new Provider(TranslateService, { useClass: TranslateService })
];

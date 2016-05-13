import { describe, it, beforeEach } from 'angular2/testing';
import { TranslateService } from './translate.service';

describe('Service: TranslateService', () => {
    let service;

    beforeEach(() => {
        service = new TranslateService();
    });

    describe('TODO', () => {
        it('should return true', () => {
            expect(service).toBeDefined();
        });
    });
});

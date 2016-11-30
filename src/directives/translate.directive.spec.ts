import { ElementRef } from '@angular/core';
import { Translate } from './translate.directive';

describe('Directive: Translate', () => {
    let directive;
    beforeEach(() => {
        directive = new Translate(new ElementRef({}));
    });
    it('should initialize', () => {
        expect(directive).toBeDefined();
        expect(directive.element.innerHTML).toBeDefined();
        expect(directive.translateService).toBeDefined();
    });

    describe('Function: ngOnInit()', () => {
        it('should be defined.', () => {
            expect(directive.ngOnInit).toBeDefined();
            directive.translateService = {
                translate: () => { },
                onLocaleChange: {
                    subscribe: () => { }
                }
            };
            spyOn(directive.translateService.onLocaleChange, 'subscribe').and.callThrough();
            directive.ngOnInit();
            expect(directive.translateService.onLocaleChange.subscribe).toHaveBeenCalled();
        });
    });

    describe('Function: ngOnDestroy()', () => {
        it('should unsubscribe from localeChange events.', () => {
            expect(directive.ngOnDestroy).toBeDefined();
            directive.translateService = {
                translate: () => { },
                onLocaleChange: {
                    unsubscribe: () => { }
                }
            };
            spyOn(directive.translateService.onLocaleChange, 'unsubscribe').and.callThrough();
            directive.ngOnDestroy();
            expect(directive.translateService.onLocaleChange.unsubscribe).toHaveBeenCalled();
        });
    });

    describe('Function: renderContent(key, interpolation)', () => {
        it('should set the inner HTML of an element to a translated string.', () => {
            expect(directive.renderContent).toBeDefined();
            directive.translateService = {
                translate: () => {
                    return 'Hello world';
                }
            };
            directive.renderContent();
            expect(directive.element.nativeElement.innerHTML).toBe('Hello world');
        });
    });
});

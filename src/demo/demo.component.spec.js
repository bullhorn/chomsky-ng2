import {Component, provide} from 'angular2/core';
import {AsyncTestCompleter, beforeEach, beforeEachProviders, describe, expect, inject, it, TestComponentBuilder} from 'angular2/testing_internal';

import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import {Router, Location, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {RouteRegistry} from 'angular2/src/router/route_registry';

import {SeekApp} from './seek.component';

describe('Component: SeekApp', () => {

    beforeEachProviders(() => {
        return [
            RouteRegistry,
            provide(Location, { useClass: SpyLocation }),
            provide(ROUTER_PRIMARY_COMPONENT, { useValue: SeekApp }),
            provide(Router, {useClass: RootRouter})
        ];
    });

    it('renders it\'s HTML template.', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(SeekApp)
            .then((fixture) => {
                fixture.detectChanges();

                let appHTML = fixture.debugElement.nativeElement.innerHTML;

                expect(appHTML).toContain('navigation');
                expect(appHTML).toContain('Seek');
                expect(appHTML).toContain('router-outlet');

                async.done();
            })
            .catch((e) => console.error(e));
    }));
});

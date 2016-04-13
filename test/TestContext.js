import * as Rx from 'rxjs/Rx';
import {MockBackend} from 'angular2/http/testing';
import {inject, TestComponentBuilder} from 'angular2/testing';

const tokens = [TestComponentBuilder, MockBackend];

export function createTestContext(onCreate) {
    return inject(tokens, (tcb, backend) => {
        const ctx = new TestContext(tcb, backend);
        onCreate(ctx);
    });
}

export class TestContext {
    constructor(tcb, backend, router, location) {
        this._tcb = tcb;
        this._backend = backend;
        this._router = router;
        this._location = location;
    }

    init(rootComponent) {
        let promise = this._tcb.createAsync(rootComponent)
            .then(fixture => {
                this._fixture = fixture;
                fixture.detectChanges();
            });
        return Rx.Observable.fromPromise(promise);
    }

    get backend() {
        return this._backend;
    }

    get fixture() {
        return this._fixture;
    }
}

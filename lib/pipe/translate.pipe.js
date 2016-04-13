'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranslatePipe = undefined;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _dec, _class; // Angular

// Vendor

var _core = require('angular2/core');

var _Rx = require('rxjs/Rx');

var _chomsky = require('chomsky/lib/chomsky');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// App

var TranslatePipe = exports.TranslatePipe = (_dec = (0, _core.Pipe)({
    name: 'translate'
}), _dec(_class = (function () {
    function TranslatePipe(chomsky) {
        _classCallCheck(this, TranslatePipe);

        this.translationService = chomsky;
    }

    _createClass(TranslatePipe, [{
        key: 'translate',
        value: function translate(phrase, dynamicValues) {
            return this.translationService.translate(phrase, dynamicValues);
        }
    }, {
        key: 'transform',
        value: function transform(phraseKey, dynamicVariables) {
            var _this = this;

            var phrase = phraseKey.toString();
            var dynamicValues = dynamicVariables[0];
            this.asyncTranslation = _Rx.Observable.create(function (observer) {
                observer.next(_this.translate(phrase, dynamicValues));
                _this.translationService.onChange(function () {
                    observer.next(_this.translate(phrase, dynamicValues));
                });
            });
            return this.asyncTranslation;
        }
    }]);

    return TranslatePipe;
})()) || _class);
Reflect.defineMetadata('design:paramtypes', [_chomsky.Chomsky], TranslatePipe);
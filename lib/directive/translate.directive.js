'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Translate = undefined;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _dec, _class; // Angular

// Vendor

var _core = require('angular2/core');

var _Rx = require('rxjs/Rx');

var _chomsky = require('chomsky/lib/chomsky');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// App

var Translate = exports.Translate = (_dec = (0, _core.Directive)({
    selector: '[translate]',
    inputs: ['translate', 'dynamicValues']
}), _dec(_class = (function () {
    function Translate(chomsky, element) {
        _classCallCheck(this, Translate);

        this.element = element;
        this.translationService = chomsky;
    }

    _createClass(Translate, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            var _this = this;

            this.translationService.onChange(function () {
                _this.renderContent(_this.translate, _this.dynamicValues);
            });
            this.renderContent(this.translate, this.dynamicValues);
        }
    }, {
        key: 'renderContent',
        value: function renderContent(phrase, dynamicValues) {
            this.element.nativeElement.innerHTML = this.translationService.translate(phrase, dynamicValues);
        }
    }]);

    return Translate;
})()) || _class);
Reflect.defineMetadata('design:paramtypes', [_chomsky.Chomsky, _core.ElementRef], Translate);
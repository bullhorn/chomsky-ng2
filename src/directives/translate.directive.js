"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// NG2
var core_1 = require('@angular/core');
// APP
var translate_service_1 = require('../services/translate.service');
var Translate = (function () {
    function Translate(element) {
        this.element = element;
    }
    Translate.prototype.ngOnInit = function () {
        var _this = this;
        translate_service_1.TranslateService.onLocaleChange.subscribe(function () {
            _this.renderContent(_this.translate, _this.dynamicValues);
        });
        this.renderContent(this.translate, this.dynamicValues);
    };
    Translate.prototype.ngOnDestroy = function () {
        translate_service_1.TranslateService.onLocaleChange.unsubscribe();
    };
    Translate.prototype.renderContent = function (key, interpolation) {
        // TODO: work with HTML (& NG2's HTML sanitation)
        this.element.nativeElement.innerHTML = translate_service_1.TranslateService.translate(key, interpolation);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Translate.prototype, "translate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Translate.prototype, "dynamicValues", void 0);
    Translate = __decorate([
        core_1.Directive({
            selector: '[translate]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Translate);
    return Translate;
}());
exports.Translate = Translate;

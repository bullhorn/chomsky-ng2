'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translate = require('/pipe/translate.pipe');

Object.keys(_translate).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _translate[key];
    }
  });
});

var _translate2 = require('/directive/translate.directive');

Object.keys(_translate2).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _translate2[key];
    }
  });
});
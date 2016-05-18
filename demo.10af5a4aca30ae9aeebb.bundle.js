webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _browser = __webpack_require__(255);
	
	var _core = __webpack_require__(5);
	
	var _router = __webpack_require__(256);
	
	var _chomskyNg = __webpack_require__(88);
	
	var _App = __webpack_require__(241);
	
	__webpack_require__(555);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	(0, _browser.bootstrap)(_App.DemoApp, [].concat(_toConsumableArray(_router.ROUTER_PROVIDERS), _toConsumableArray(_chomskyNg.TRANSLATE_PROVIDERS), [(0, _core.provide)(_router.LocationStrategy, { useClass: _router.HashLocationStrategy })])).catch(function (err) {
	    return console.error(err);
	}); // eslint-disable-line
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQUVBLG1KQUdJLDZDQUEwQixFQUFFLHNDQUFGLEVBQTFCLENBSEosSUFJRyxLQUpILENBSVM7QUFBQSxXQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsQ0FBUDtBQUFBLENBSlQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3N3ZWVuL0RvY3VtZW50cy9naXQvY2hvbXNreS1uZzIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHsgVFJBTlNMQVRFX1BST1ZJREVSUyB9IGZyb20gJy4vLi4vc3JjL2Nob21za3ktbmcyJztcblxuaW1wb3J0IHsgRGVtb0FwcCB9IGZyb20gJy4vcGFnZXMvYXBwL0FwcCc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmJvb3RzdHJhcChEZW1vQXBwLCBbXG4gICAgLi4uUk9VVEVSX1BST1ZJREVSUyxcbiAgICAuLi5UUkFOU0xBVEVfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSlcbl0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iXX0=

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(244);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(552)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{\"browsers\":[\"last 2 versions\",\"iOS >= 7\",\"Android >= 4\",\"Explorer >= 10\",\"ExplorerMobile >= 11\"],\"cascade\":false}!./../node_modules/sass-loader/index.js?sourceMap!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{\"browsers\":[\"last 2 versions\",\"iOS >= 7\",\"Android >= 4\",\"Explorer >= 10\",\"ExplorerMobile >= 11\"],\"cascade\":false}!./../node_modules/sass-loader/index.js?sourceMap!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(547)();
	// imports
	
	
	// module
	exports.push([module.id, "body, html {\n  margin: 0;\n  padding: 0; }\n\n*:active,\n*:focus {\n  outline: none !important; }\n", "", {"version":3,"sources":["/./demo/demo/index.scss"],"names":[],"mappings":"AAAA;EACI,UAAU;EACV,WAAW,EACd;;AAED;;EAEI,yBAAyB,EAC5B","file":"index.scss","sourcesContent":["body, html {\n    margin: 0;\n    padding: 0;\n}\n\n*:active,\n*:focus {\n    outline: none !important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 245:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <!-- MAIN HEADER -->\n    <section class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h1>Chomsky NG2 Demo</h1>\n            <p>Avram Noam Chomsky (/ˈnoʊm ˈtʃɒmski/; born December 7, 1928) is an American linguist, philosopher, cognitive scientist, historian, logician, social critic, and political activist. Sometimes described as \"the father of modern linguistics,\" Chomsky is also a major figure in analytic philosophy, and one of the founders of the field of cognitive science. He has spent more than half a century at the Massachusetts Institute of Technology (MIT), where he is Institute Professor Emeritus, and is the author of over 100 books on topics such as linguistics, war, politics, and mass media. Ideologically, he aligns with anarcho-syndicalism and libertarian socialism.</p>\n        </div>\n    </section>\n    <!-- CHOOSE LANGUAGE -->\n    <section class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h3 class=\"text-muted\">Select A Language:</h3>\n            <div class=\"btn-group\" role=\"group\">\n                <button type=\"button\" (click)=\"changeLanguage(usLocale)\" [class.active]=\"currentLanguage === usLocale\" class=\"btn btn-primary\">English</button>\n                <button type=\"button\" (click)=\"changeLanguage(ruLocale)\" [class.active]=\"currentLanguage === ruLocale\" class=\"btn btn-primary\">Russian</button>\n                <button type=\"button\" (click)=\"changeLanguage(frLocale)\" [class.active]=\"currentLanguage === frLocale\" class=\"btn btn-primary\">French</button>\n            </div>\n        </div>\n    </section>\n    <div class=\"clear-fix\">&nbsp;</div>\n    <!-- PIPE & DIRECTIVE -->\n    <section class=\"row\">\n        <!-- PIPE -->\n        <div class=\"col-xs-12 col-md-3\">\n            <h2>Pipe</h2>\n            <br>\n            <p><strong>Simple Text</strong></p>\n            <p>{{ 'greeting' | translate }}</p>\n            <p><strong>Variable</strong></p>\n            <p>{{ 'farewell' | translate:{ name: 'John' } }}</p>\n            <p><strong>Variable Date</strong></p>\n            <p>{{ 'today' | translate:{ today: localToday } }}</p>\n            <p><strong>Pluralized Number</strong></p>\n            <p>{{ 'messages' | translate:0 }}</p>\n            <p>{{ 'messages' | translate:1 }}</p>\n            <p>{{ 'messages' | translate:20 }}</p>\n            <p>{{ 'messages' | translate:125 }}</p>\n            <p><strong>Variable Currency</strong></p>\n            <p>{{ 'debt' | translate:{ balance: demoVariables.balance } }}</p>\n        </div>\n        <!-- DIRECTIVE -->\n        <div class=\"col-xs-12 col-md-3\">\n            <h2>Directive</h2>\n            <br>\n            <p><strong>Simple Text</strong></p>\n            <p [translate]=\"'greeting'\"></p>\n            <p><strong>Variable</strong></p>\n            <p [translate]=\"'farewell'\" [dynamicValues]=\"demoVariables\"></p>\n            <p><strong>Variable Date</strong></p>\n            <p [translate]=\"'today'\" [dynamicValues]=\"demoVariables\"></p>\n            <p><strong>Pluralized Number</strong></p>\n            <p [translate]=\"'messages'\" [dynamicValues]=\"0\"></p>\n            <p [translate]=\"'messages'\" [dynamicValues]=\"1\"></p>\n            <p [translate]=\"'messages'\" [dynamicValues]=\"20\"></p>\n            <p [translate]=\"'messages'\" [dynamicValues]=\"125\"></p>\n            <p><strong>Variable Currency</strong></p>\n            <p [translate]=\"'debt'\" [dynamicValues]=\"demoVariables\"></p>\n        </div>\n        <!-- JSON -->\n        <div class=\"col-xs-12 col-md-6\">\n            <h2>JSON</h2>\n            <br>\n            <pre>{{ getDictionary(currentLanguage) | json }}</pre>\n        </div>\n    </section>\n</div>\n"

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DemoApp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(5);
	
	var _common = __webpack_require__(94);
	
	var _chomskyNg = __webpack_require__(88);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = __webpack_require__(245);
	
	var DemoApp = exports.DemoApp = (_dec = (0, _core.Component)({
	    selector: 'demo-app',
	    template: template,
	    directives: [_common.CORE_DIRECTIVES, _chomskyNg.Translate],
	    pipes: [_chomskyNg.TranslatePipe]
	}), _dec(_class = function () {
	    function DemoApp(translateService) {
	        var _this = this;
	
	        _classCallCheck(this, DemoApp);
	
	        // Local instance
	        this.translateService = translateService;
	        // Sample english translation
	        var enTranslation = {
	            greeting: 'Hello!',
	            farewell: 'Goodbye, {name}.',
	            today: 'Today is {today:date}.',
	            debt: 'You owe: {balance:currency}',
	            messages: {
	                zero: 'You have no messages.',
	                1: 'You have {count:number} message.',
	                20: 'You have {count:number:0.00} messages.',
	                many: 'You have {count:number} messages.'
	            }
	        };
	
	        this.usLocale = 'en-US';
	        this.frLocale = 'fr-FR';
	        this.ruLocale = 'ru-RU';
	
	        // HTTP Load es
	        Promise.all([this.translateService.setLanguage(this.frLocale, './../../i18n/fr-FR.json'), this.translateService.setLanguage(this.ruLocale, './../../i18n/ru-RU.json')]).then(function () {
	            // Object Load English
	            _this.translateService.setLanguage(_this.usLocale, enTranslation);
	        });
	
	        // Variable for today
	        this.localToday = new Date();
	
	        this.greeting = 'greeting';
	
	        this.demoVariables = {
	            today: new Date(),
	            name: 'Jane',
	            balance: 9874.34
	        };
	
	        this.changeLanguage(this.usLocale);
	    }
	
	    _createClass(DemoApp, [{
	        key: 'getDictionary',
	        value: function getDictionary(languageKey) {
	            var languageCode = (languageKey.split('-')[0] || '').toLowerCase();
	            var variantCode = (languageKey.split('-')[1] || '').toUpperCase();
	            return this.translateService.dictionaryManager.dictionaries[languageCode][variantCode];
	        }
	    }, {
	        key: 'changeLanguage',
	        value: function changeLanguage(language) {
	            this.currentLanguage = language;
	            this.translateService.setLanguage(language);
	        }
	    }]);
	
	    return DemoApp;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_chomskyNg.TranslateService], DemoApp);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvYXBwL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTSxXQUFXLFFBQVEsWUFBUixDQUFqQjs7SUFhYSxPLFdBQUEsTyxXQVhaLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVAsY0FBVSxRQUZIO0FBR1AsZ0JBQVksK0NBSEw7QUFPUCxXQUFPO0FBUEEsQ0FBVixDO0FBWUcscUJBQVksZ0JBQVosRUFBK0M7QUFBQTs7QUFBQTs7O0FBRTNDLGFBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCOztBQUVBLFlBQUksZ0JBQWdCO0FBQ2hCLHNCQUFVLFFBRE07QUFFaEIsc0JBQVUsa0JBRk07QUFHaEIsbUJBQU8sd0JBSFM7QUFJaEIsa0JBQU0sNkJBSlU7QUFLaEIsc0JBQVU7QUFDTixzQkFBTSx1QkFEQTtBQUVOLG1CQUFHLGtDQUZHO0FBR04sb0JBQUksd0NBSEU7QUFJTixzQkFBTTtBQUpBO0FBTE0sU0FBcEI7O0FBYUEsYUFBSyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLE9BQWhCOzs7QUFHQSxnQkFBUSxHQUFSLENBQVksQ0FDUixLQUFLLGdCQUFMLENBQXNCLFdBQXRCLENBQWtDLEtBQUssUUFBdkMsRUFBaUQseUJBQWpELENBRFEsRUFFUixLQUFLLGdCQUFMLENBQXNCLFdBQXRCLENBQWtDLEtBQUssUUFBdkMsRUFBaUQseUJBQWpELENBRlEsQ0FBWixFQUlLLElBSkwsQ0FJVSxZQUFNOztBQUVSLGtCQUFLLGdCQUFMLENBQXNCLFdBQXRCLENBQWtDLE1BQUssUUFBdkMsRUFBaUQsYUFBakQ7QUFDSCxTQVBMOzs7QUFVQSxhQUFLLFVBQUwsR0FBa0IsSUFBSSxJQUFKLEVBQWxCOztBQUVBLGFBQUssUUFBTCxHQUFnQixVQUFoQjs7QUFFQSxhQUFLLGFBQUwsR0FBcUI7QUFDakIsbUJBQU8sSUFBSSxJQUFKLEVBRFU7QUFFakIsa0JBQU0sTUFGVztBQUdqQixxQkFBUztBQUhRLFNBQXJCOztBQU1BLGFBQUssY0FBTCxDQUFvQixLQUFLLFFBQXpCO0FBQ0g7Ozs7c0NBRWEsVyxFQUFhO0FBQ3ZCLGdCQUFJLGVBQWUsQ0FBQyxZQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsS0FBNkIsRUFBOUIsRUFBa0MsV0FBbEMsRUFBbkI7QUFDQSxnQkFBSSxjQUFjLENBQUMsWUFBWSxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEtBQTZCLEVBQTlCLEVBQWtDLFdBQWxDLEVBQWxCO0FBQ0EsbUJBQU8sS0FBSyxnQkFBTCxDQUFzQixpQkFBdEIsQ0FBd0MsWUFBeEMsQ0FBcUQsWUFBckQsRUFBbUUsV0FBbkUsQ0FBUDtBQUNIOzs7dUNBRWMsUSxFQUFVO0FBQ3JCLGlCQUFLLGVBQUwsR0FBdUIsUUFBdkI7QUFDQSxpQkFBSyxnQkFBTCxDQUFzQixXQUF0QixDQUFrQyxRQUFsQztBQUNIOzs7OzsyRUF2RFEsTyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tzd2Vlbi9Eb2N1bWVudHMvZ2l0L2Nob21za3ktbmcyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NyYy9jaG9tc2t5LW5nMic7XG5cbmNvbnN0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi9BcHAuaHRtbCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RlbW8tYXBwJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBDT1JFX0RJUkVDVElWRVMsXG4gICAgICAgIFRyYW5zbGF0ZVxuICAgIF0sXG4gICAgcGlwZXM6IFtcbiAgICAgICAgVHJhbnNsYXRlUGlwZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVtb0FwcCB7XG4gICAgY29uc3RydWN0b3IodHJhbnNsYXRlU2VydmljZTpUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIC8vIExvY2FsIGluc3RhbmNlXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZSA9IHRyYW5zbGF0ZVNlcnZpY2U7XG4gICAgICAgIC8vIFNhbXBsZSBlbmdsaXNoIHRyYW5zbGF0aW9uXG4gICAgICAgIGxldCBlblRyYW5zbGF0aW9uID0ge1xuICAgICAgICAgICAgZ3JlZXRpbmc6ICdIZWxsbyEnLFxuICAgICAgICAgICAgZmFyZXdlbGw6ICdHb29kYnllLCB7bmFtZX0uJyxcbiAgICAgICAgICAgIHRvZGF5OiAnVG9kYXkgaXMge3RvZGF5OmRhdGV9LicsXG4gICAgICAgICAgICBkZWJ0OiAnWW91IG93ZToge2JhbGFuY2U6Y3VycmVuY3l9JyxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgemVybzogJ1lvdSBoYXZlIG5vIG1lc3NhZ2VzLicsXG4gICAgICAgICAgICAgICAgMTogJ1lvdSBoYXZlIHtjb3VudDpudW1iZXJ9IG1lc3NhZ2UuJyxcbiAgICAgICAgICAgICAgICAyMDogJ1lvdSBoYXZlIHtjb3VudDpudW1iZXI6MC4wMH0gbWVzc2FnZXMuJyxcbiAgICAgICAgICAgICAgICBtYW55OiAnWW91IGhhdmUge2NvdW50Om51bWJlcn0gbWVzc2FnZXMuJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXNMb2NhbGUgPSAnZW4tVVMnO1xuICAgICAgICB0aGlzLmZyTG9jYWxlID0gJ2ZyLUZSJztcbiAgICAgICAgdGhpcy5ydUxvY2FsZSA9ICdydS1SVSc7XG5cbiAgICAgICAgLy8gSFRUUCBMb2FkIGVzXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRMYW5ndWFnZSh0aGlzLmZyTG9jYWxlLCAnLi8uLi8uLi9pMThuL2ZyLUZSLmpzb24nKSxcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRMYW5ndWFnZSh0aGlzLnJ1TG9jYWxlLCAnLi8uLi8uLi9pMThuL3J1LVJVLmpzb24nKVxuICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE9iamVjdCBMb2FkIEVuZ2xpc2hcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0TGFuZ3VhZ2UodGhpcy51c0xvY2FsZSwgZW5UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBWYXJpYWJsZSBmb3IgdG9kYXlcbiAgICAgICAgdGhpcy5sb2NhbFRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmdyZWV0aW5nID0gJ2dyZWV0aW5nJztcblxuICAgICAgICB0aGlzLmRlbW9WYXJpYWJsZXMgPSB7XG4gICAgICAgICAgICB0b2RheTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIG5hbWU6ICdKYW5lJyxcbiAgICAgICAgICAgIGJhbGFuY2U6IDk4NzQuMzRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNoYW5nZUxhbmd1YWdlKHRoaXMudXNMb2NhbGUpO1xuICAgIH1cblxuICAgIGdldERpY3Rpb25hcnkobGFuZ3VhZ2VLZXkpIHtcbiAgICAgICAgbGV0IGxhbmd1YWdlQ29kZSA9IChsYW5ndWFnZUtleS5zcGxpdCgnLScpWzBdIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgdmFyaWFudENvZGUgPSAobGFuZ3VhZ2VLZXkuc3BsaXQoJy0nKVsxXSB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5kaWN0aW9uYXJ5TWFuYWdlci5kaWN0aW9uYXJpZXNbbGFuZ3VhZ2VDb2RlXVt2YXJpYW50Q29kZV07XG4gICAgfVxuXG4gICAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgICB9XG59XG4iXX0=

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * Starting point to import all compiler APIs.
	 */
	__export(__webpack_require__(44));
	__export(__webpack_require__(35));
	__export(__webpack_require__(269));


/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var angular_entrypoint_1 = __webpack_require__(273);
	exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
	var browser_common_1 = __webpack_require__(210);
	exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
	exports.CACHED_TEMPLATE_PROVIDER = browser_common_1.CACHED_TEMPLATE_PROVIDER;
	exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
	exports.inspectNativeElement = browser_common_1.inspectNativeElement;
	exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
	exports.By = browser_common_1.By;
	exports.Title = browser_common_1.Title;
	exports.DOCUMENT = browser_common_1.DOCUMENT;
	exports.enableDebugTools = browser_common_1.enableDebugTools;
	exports.disableDebugTools = browser_common_1.disableDebugTools;
	var lang_1 = __webpack_require__(1);
	var browser_common_2 = __webpack_require__(210);
	var compiler_1 = __webpack_require__(150);
	var core_1 = __webpack_require__(5);
	var reflection_capabilities_1 = __webpack_require__(202);
	var xhr_impl_1 = __webpack_require__(209);
	var compiler_2 = __webpack_require__(150);
	var di_1 = __webpack_require__(7);
	/**
	 * An array of providers that should be passed into `application()` when bootstrapping a component.
	 */
	exports.BROWSER_APP_PROVIDERS = lang_1.CONST_EXPR([
	    browser_common_2.BROWSER_APP_COMMON_PROVIDERS,
	    compiler_1.COMPILER_PROVIDERS,
	    new di_1.Provider(compiler_2.XHR, { useClass: xhr_impl_1.XHRImpl }),
	]);
	/**
	 * Bootstrapping for Angular applications.
	 *
	 * You instantiate an Angular application by explicitly specifying a component to use
	 * as the root component for your application via the `bootstrap()` method.
	 *
	 * ## Simple Example
	 *
	 * Assuming this `index.html`:
	 *
	 * ```html
	 * <html>
	 *   <!-- load Angular script tags here. -->
	 *   <body>
	 *     <my-app>loading...</my-app>
	 *   </body>
	 * </html>
	 * ```
	 *
	 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
	 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
	 * mainly for security reasons, as well as architectural changes in Angular 2. This means
	 * that `index.html` can safely be processed using server-side technologies such as
	 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
	 * Angular 2 component double-curly `{{ syntax }}`.
	 *
	 * We can use this script code:
	 *
	 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
	 *
	 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
	 * argument, Angular performs the following tasks:
	 *
	 *  1. It uses the component's `selector` property to locate the DOM element which needs
	 *     to be upgraded into the angular component.
	 *  2. It creates a new child injector (from the platform injector). Optionally, you can
	 *     also override the injector configuration for an app by invoking `bootstrap` with the
	 *     `componentInjectableBindings` argument.
	 *  3. It creates a new `Zone` and connects it to the angular application's change detection
	 *     domain instance.
	 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
	 *     template into it.
	 *  5. It instantiates the specified component.
	 *  6. Finally, Angular performs change detection to apply the initial data providers for the
	 *     application.
	 *
	 *
	 * ## Bootstrapping Multiple Applications
	 *
	 * When working within a browser window, there are many singleton resources: cookies, title,
	 * location, and others. Angular services that represent these resources must likewise be
	 * shared across all Angular applications that occupy the same browser window. For this
	 * reason, Angular creates exactly one global platform object which stores all shared
	 * services, and each angular application injector has the platform injector as its parent.
	 *
	 * Each application has its own private injector as well. When there are multiple
	 * applications on a page, Angular treats each application injector's services as private
	 * to that application.
	 *
	 * ## API
	 *
	 * - `appComponentType`: The root component which should act as the application. This is
	 *   a reference to a `Type` which is annotated with `@Component(...)`.
	 * - `customProviders`: An additional set of providers that can be added to the
	 *   app injector to override default injection behavior.
	 *
	 * Returns a `Promise` of {@link ComponentRef}.
	 */
	function bootstrap(appComponentType, customProviders) {
	    core_1.reflector.reflectionCapabilities = new reflection_capabilities_1.ReflectionCapabilities();
	    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
	    return core_1.platform(browser_common_2.BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
	}
	exports.bootstrap = bootstrap;


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This is a set of classes and objects that can be used both in the browser and on the server.
	 */
	var dom_adapter_1 = __webpack_require__(11);
	exports.DOM = dom_adapter_1.DOM;
	exports.setRootDomAdapter = dom_adapter_1.setRootDomAdapter;
	exports.DomAdapter = dom_adapter_1.DomAdapter;
	var dom_renderer_1 = __webpack_require__(130);
	exports.DomRenderer = dom_renderer_1.DomRenderer;
	var dom_tokens_1 = __webpack_require__(54);
	exports.DOCUMENT = dom_tokens_1.DOCUMENT;
	var shared_styles_host_1 = __webpack_require__(75);
	exports.SharedStylesHost = shared_styles_host_1.SharedStylesHost;
	exports.DomSharedStylesHost = shared_styles_host_1.DomSharedStylesHost;
	var dom_events_1 = __webpack_require__(211);
	exports.DomEventsPlugin = dom_events_1.DomEventsPlugin;
	var event_manager_1 = __webpack_require__(40);
	exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
	exports.EventManager = event_manager_1.EventManager;
	exports.EventManagerPlugin = event_manager_1.EventManagerPlugin;
	__export(__webpack_require__(303));
	__export(__webpack_require__(304));


/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * Maps application URLs into application states, to support deep-linking and navigation.
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var router_1 = __webpack_require__(78);
	exports.Router = router_1.Router;
	var router_outlet_1 = __webpack_require__(214);
	exports.RouterOutlet = router_outlet_1.RouterOutlet;
	var router_link_1 = __webpack_require__(213);
	exports.RouterLink = router_link_1.RouterLink;
	var instruction_1 = __webpack_require__(31);
	exports.RouteParams = instruction_1.RouteParams;
	exports.RouteData = instruction_1.RouteData;
	var platform_location_1 = __webpack_require__(56);
	exports.PlatformLocation = platform_location_1.PlatformLocation;
	var route_registry_1 = __webpack_require__(133);
	exports.RouteRegistry = route_registry_1.RouteRegistry;
	exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
	var location_strategy_1 = __webpack_require__(55);
	exports.LocationStrategy = location_strategy_1.LocationStrategy;
	exports.APP_BASE_HREF = location_strategy_1.APP_BASE_HREF;
	var hash_location_strategy_1 = __webpack_require__(308);
	exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
	var path_location_strategy_1 = __webpack_require__(217);
	exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
	var location_1 = __webpack_require__(76);
	exports.Location = location_1.Location;
	__export(__webpack_require__(218));
	var lifecycle_annotations_1 = __webpack_require__(215);
	exports.CanActivate = lifecycle_annotations_1.CanActivate;
	var instruction_2 = __webpack_require__(31);
	exports.Instruction = instruction_2.Instruction;
	exports.ComponentInstruction = instruction_2.ComponentInstruction;
	var core_1 = __webpack_require__(5);
	exports.OpaqueToken = core_1.OpaqueToken;
	var router_providers_common_1 = __webpack_require__(219);
	exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
	var router_providers_1 = __webpack_require__(310);
	exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
	exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
	var router_outlet_2 = __webpack_require__(214);
	var router_link_2 = __webpack_require__(213);
	var lang_1 = __webpack_require__(1);
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);


/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var math_1 = __webpack_require__(207);
	var util_1 = __webpack_require__(212);
	var collection_1 = __webpack_require__(3);
	var dom_adapter_1 = __webpack_require__(11);
	var Animation = (function () {
	    /**
	     * Stores the start time and starts the animation
	     * @param element
	     * @param data
	     * @param browserDetails
	     */
	    function Animation(element, data, browserDetails) {
	        var _this = this;
	        this.element = element;
	        this.data = data;
	        this.browserDetails = browserDetails;
	        /** functions to be called upon completion */
	        this.callbacks = [];
	        /** functions for removing event listeners */
	        this.eventClearFunctions = [];
	        /** flag used to track whether or not the animation has finished */
	        this.completed = false;
	        this._stringPrefix = '';
	        this.startTime = lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        this._stringPrefix = dom_adapter_1.DOM.getAnimationPrefix();
	        this.setup();
	        this.wait(function (timestamp) { return _this.start(); });
	    }
	    Object.defineProperty(Animation.prototype, "totalTime", {
	        /** total amount of time that the animation should take including delay */
	        get: function () {
	            var delay = this.computedDelay != null ? this.computedDelay : 0;
	            var duration = this.computedDuration != null ? this.computedDuration : 0;
	            return delay + duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Animation.prototype.wait = function (callback) {
	        // Firefox requires 2 frames for some reason
	        this.browserDetails.raf(callback, 2);
	    };
	    /**
	     * Sets up the initial styles before the animation is started
	     */
	    Animation.prototype.setup = function () {
	        if (this.data.fromStyles != null)
	            this.applyStyles(this.data.fromStyles);
	        if (this.data.duration != null)
	            this.applyStyles({ 'transitionDuration': this.data.duration.toString() + 'ms' });
	        if (this.data.delay != null)
	            this.applyStyles({ 'transitionDelay': this.data.delay.toString() + 'ms' });
	    };
	    /**
	     * After the initial setup has occurred, this method adds the animation styles
	     */
	    Animation.prototype.start = function () {
	        this.addClasses(this.data.classesToAdd);
	        this.addClasses(this.data.animationClasses);
	        this.removeClasses(this.data.classesToRemove);
	        if (this.data.toStyles != null)
	            this.applyStyles(this.data.toStyles);
	        var computedStyles = dom_adapter_1.DOM.getComputedStyle(this.element);
	        this.computedDelay =
	            math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-delay')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-delay')));
	        this.computedDuration = math_1.Math.max(this.parseDurationString(computedStyles.getPropertyValue(this._stringPrefix + 'transition-duration')), this.parseDurationString(this.element.style.getPropertyValue(this._stringPrefix + 'transition-duration')));
	        this.addEvents();
	    };
	    /**
	     * Applies the provided styles to the element
	     * @param styles
	     */
	    Animation.prototype.applyStyles = function (styles) {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(styles, function (value, key) {
	            var dashCaseKey = util_1.camelCaseToDashCase(key);
	            if (lang_1.isPresent(dom_adapter_1.DOM.getStyle(_this.element, dashCaseKey))) {
	                dom_adapter_1.DOM.setStyle(_this.element, dashCaseKey, value.toString());
	            }
	            else {
	                dom_adapter_1.DOM.setStyle(_this.element, _this._stringPrefix + dashCaseKey, value.toString());
	            }
	        });
	    };
	    /**
	     * Adds the provided classes to the element
	     * @param classes
	     */
	    Animation.prototype.addClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.DOM.addClass(this.element, classes[i]);
	    };
	    /**
	     * Removes the provided classes from the element
	     * @param classes
	     */
	    Animation.prototype.removeClasses = function (classes) {
	        for (var i = 0, len = classes.length; i < len; i++)
	            dom_adapter_1.DOM.removeClass(this.element, classes[i]);
	    };
	    /**
	     * Adds events to track when animations have finished
	     */
	    Animation.prototype.addEvents = function () {
	        var _this = this;
	        if (this.totalTime > 0) {
	            this.eventClearFunctions.push(dom_adapter_1.DOM.onAndCancel(this.element, dom_adapter_1.DOM.getTransitionEnd(), function (event) { return _this.handleAnimationEvent(event); }));
	        }
	        else {
	            this.handleAnimationCompleted();
	        }
	    };
	    Animation.prototype.handleAnimationEvent = function (event) {
	        var elapsedTime = math_1.Math.round(event.elapsedTime * 1000);
	        if (!this.browserDetails.elapsedTimeIncludesDelay)
	            elapsedTime += this.computedDelay;
	        event.stopPropagation();
	        if (elapsedTime >= this.totalTime)
	            this.handleAnimationCompleted();
	    };
	    /**
	     * Runs all animation callbacks and removes temporary classes
	     */
	    Animation.prototype.handleAnimationCompleted = function () {
	        this.removeClasses(this.data.animationClasses);
	        this.callbacks.forEach(function (callback) { return callback(); });
	        this.callbacks = [];
	        this.eventClearFunctions.forEach(function (fn) { return fn(); });
	        this.eventClearFunctions = [];
	        this.completed = true;
	    };
	    /**
	     * Adds animation callbacks to be called upon completion
	     * @param callback
	     * @returns {Animation}
	     */
	    Animation.prototype.onComplete = function (callback) {
	        if (this.completed) {
	            callback();
	        }
	        else {
	            this.callbacks.push(callback);
	        }
	        return this;
	    };
	    /**
	     * Converts the duration string to the number of milliseconds
	     * @param duration
	     * @returns {number}
	     */
	    Animation.prototype.parseDurationString = function (duration) {
	        var maxValue = 0;
	        // duration must have at least 2 characters to be valid. (number + type)
	        if (duration == null || duration.length < 2) {
	            return maxValue;
	        }
	        else if (duration.substring(duration.length - 2) == 'ms') {
	            var value = lang_1.NumberWrapper.parseInt(this.stripLetters(duration), 10);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        else if (duration.substring(duration.length - 1) == 's') {
	            var ms = lang_1.NumberWrapper.parseFloat(this.stripLetters(duration)) * 1000;
	            var value = math_1.Math.floor(ms);
	            if (value > maxValue)
	                maxValue = value;
	        }
	        return maxValue;
	    };
	    /**
	     * Strips the letters from the duration string
	     * @param str
	     * @returns {string}
	     */
	    Animation.prototype.stripLetters = function (str) {
	        return lang_1.StringWrapper.replaceAll(str, lang_1.RegExpWrapper.create('[^0-9]+$', ''), '');
	    };
	    return Animation;
	}());
	exports.Animation = Animation;


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(7);
	var css_animation_builder_1 = __webpack_require__(258);
	var browser_details_1 = __webpack_require__(153);
	var AnimationBuilder = (function () {
	    /**
	     * Used for DI
	     * @param browserDetails
	     */
	    function AnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	    }
	    /**
	     * Creates a new CSS Animation
	     * @returns {CssAnimationBuilder}
	     */
	    AnimationBuilder.prototype.css = function () { return new css_animation_builder_1.CssAnimationBuilder(this.browserDetails); };
	    AnimationBuilder = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_details_1.BrowserDetails])
	    ], AnimationBuilder);
	    return AnimationBuilder;
	}());
	exports.AnimationBuilder = AnimationBuilder;


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(7);
	var math_1 = __webpack_require__(207);
	var dom_adapter_1 = __webpack_require__(11);
	var BrowserDetails = (function () {
	    function BrowserDetails() {
	        this.elapsedTimeIncludesDelay = false;
	        this.doesElapsedTimeIncludesDelay();
	    }
	    /**
	     * Determines if `event.elapsedTime` includes transition delay in the current browser.  At this
	     * time, Chrome and Opera seem to be the only browsers that include this.
	     */
	    BrowserDetails.prototype.doesElapsedTimeIncludesDelay = function () {
	        var _this = this;
	        var div = dom_adapter_1.DOM.createElement('div');
	        dom_adapter_1.DOM.setAttribute(div, 'style', "position: absolute; top: -9999px; left: -9999px; width: 1px;\n      height: 1px; transition: all 1ms linear 1ms;");
	        // Firefox requires that we wait for 2 frames for some reason
	        this.raf(function (timestamp) {
	            dom_adapter_1.DOM.on(div, 'transitionend', function (event) {
	                var elapsed = math_1.Math.round(event.elapsedTime * 1000);
	                _this.elapsedTimeIncludesDelay = elapsed == 2;
	                dom_adapter_1.DOM.remove(div);
	            });
	            dom_adapter_1.DOM.setStyle(div, 'width', '2px');
	        }, 2);
	    };
	    BrowserDetails.prototype.raf = function (callback, frames) {
	        if (frames === void 0) { frames = 1; }
	        var queue = new RafQueue(callback, frames);
	        return function () { return queue.cancel(); };
	    };
	    BrowserDetails = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserDetails);
	    return BrowserDetails;
	}());
	exports.BrowserDetails = BrowserDetails;
	var RafQueue = (function () {
	    function RafQueue(callback, frames) {
	        this.callback = callback;
	        this.frames = frames;
	        this._raf();
	    }
	    RafQueue.prototype._raf = function () {
	        var _this = this;
	        this.currentFrameId =
	            dom_adapter_1.DOM.requestAnimationFrame(function (timestamp) { return _this._nextFrame(timestamp); });
	    };
	    RafQueue.prototype._nextFrame = function (timestamp) {
	        this.frames--;
	        if (this.frames > 0) {
	            this._raf();
	        }
	        else {
	            this.callback(timestamp);
	        }
	    };
	    RafQueue.prototype.cancel = function () {
	        dom_adapter_1.DOM.cancelAnimationFrame(this.currentFrameId);
	        this.currentFrameId = null;
	    };
	    return RafQueue;
	}());


/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var css_animation_options_1 = __webpack_require__(259);
	var animation_1 = __webpack_require__(257);
	var CssAnimationBuilder = (function () {
	    /**
	     * Accepts public properties for CssAnimationBuilder
	     */
	    function CssAnimationBuilder(browserDetails) {
	        this.browserDetails = browserDetails;
	        /** @type {CssAnimationOptions} */
	        this.data = new css_animation_options_1.CssAnimationOptions();
	    }
	    /**
	     * Adds a temporary class that will be removed at the end of the animation
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addAnimationClass = function (className) {
	        this.data.animationClasses.push(className);
	        return this;
	    };
	    /**
	     * Adds a class that will remain on the element after the animation has finished
	     * @param className
	     */
	    CssAnimationBuilder.prototype.addClass = function (className) {
	        this.data.classesToAdd.push(className);
	        return this;
	    };
	    /**
	     * Removes a class from the element
	     * @param className
	     */
	    CssAnimationBuilder.prototype.removeClass = function (className) {
	        this.data.classesToRemove.push(className);
	        return this;
	    };
	    /**
	     * Sets the animation duration (and overrides any defined through CSS)
	     * @param duration
	     */
	    CssAnimationBuilder.prototype.setDuration = function (duration) {
	        this.data.duration = duration;
	        return this;
	    };
	    /**
	     * Sets the animation delay (and overrides any defined through CSS)
	     * @param delay
	     */
	    CssAnimationBuilder.prototype.setDelay = function (delay) {
	        this.data.delay = delay;
	        return this;
	    };
	    /**
	     * Sets styles for both the initial state and the destination state
	     * @param from
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setStyles = function (from, to) {
	        return this.setFromStyles(from).setToStyles(to);
	    };
	    /**
	     * Sets the initial styles for the animation
	     * @param from
	     */
	    CssAnimationBuilder.prototype.setFromStyles = function (from) {
	        this.data.fromStyles = from;
	        return this;
	    };
	    /**
	     * Sets the destination styles for the animation
	     * @param to
	     */
	    CssAnimationBuilder.prototype.setToStyles = function (to) {
	        this.data.toStyles = to;
	        return this;
	    };
	    /**
	     * Starts the animation and returns a promise
	     * @param element
	     */
	    CssAnimationBuilder.prototype.start = function (element) {
	        return new animation_1.Animation(element, this.data, this.browserDetails);
	    };
	    return CssAnimationBuilder;
	}());
	exports.CssAnimationBuilder = CssAnimationBuilder;


/***/ },

/***/ 259:
/***/ function(module, exports) {

	'use strict';"use strict";
	var CssAnimationOptions = (function () {
	    function CssAnimationOptions() {
	        /** classes to be added to the element */
	        this.classesToAdd = [];
	        /** classes to be removed from the element */
	        this.classesToRemove = [];
	        /** classes to be added for the duration of the animation */
	        this.animationClasses = [];
	    }
	    return CssAnimationOptions;
	}());
	exports.CssAnimationOptions = CssAnimationOptions;


/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	function assertArrayOfStrings(identifier, value) {
	    if (!lang_1.assertionsEnabled() || lang_1.isBlank(value)) {
	        return;
	    }
	    if (!lang_1.isArray(value)) {
	        throw new exceptions_1.BaseException("Expected '" + identifier + "' to be an array of strings.");
	    }
	    for (var i = 0; i < value.length; i += 1) {
	        if (!lang_1.isString(value[i])) {
	            throw new exceptions_1.BaseException("Expected '" + identifier + "' to be an array of strings.");
	        }
	    }
	}
	exports.assertArrayOfStrings = assertArrayOfStrings;


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var reflection_1 = __webpack_require__(12);
	var change_detection_1 = __webpack_require__(18);
	var template_ast_1 = __webpack_require__(34);
	var interfaces_1 = __webpack_require__(68);
	function createChangeDetectorDefinitions(componentType, componentStrategy, genConfig, parsedTemplate) {
	    var pvVisitors = [];
	    var visitor = new ProtoViewVisitor(null, pvVisitors, componentStrategy);
	    template_ast_1.templateVisitAll(visitor, parsedTemplate);
	    return createChangeDefinitions(pvVisitors, componentType, genConfig);
	}
	exports.createChangeDetectorDefinitions = createChangeDetectorDefinitions;
	var ProtoViewVisitor = (function () {
	    function ProtoViewVisitor(parent, allVisitors, strategy) {
	        this.parent = parent;
	        this.allVisitors = allVisitors;
	        this.strategy = strategy;
	        this.nodeCount = 0;
	        this.boundElementCount = 0;
	        this.variableNames = [];
	        this.bindingRecords = [];
	        this.eventRecords = [];
	        this.directiveRecords = [];
	        this.viewIndex = allVisitors.length;
	        allVisitors.push(this);
	    }
	    ProtoViewVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        this.nodeCount++;
	        this.boundElementCount++;
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        for (var i = 0; i < ast.directives.length; i++) {
	            ast.directives[i].visit(this, i);
	        }
	        var childVisitor = new ProtoViewVisitor(this, this.allVisitors, change_detection_1.ChangeDetectionStrategy.Default);
	        // Attention: variables present on an embedded template count towards
	        // the embedded template and not the template anchor!
	        template_ast_1.templateVisitAll(childVisitor, ast.vars);
	        template_ast_1.templateVisitAll(childVisitor, ast.children);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitElement = function (ast, context) {
	        this.nodeCount++;
	        if (ast.isBound()) {
	            this.boundElementCount++;
	        }
	        template_ast_1.templateVisitAll(this, ast.inputs, null);
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.exportAsVars);
	        for (var i = 0; i < ast.directives.length; i++) {
	            ast.directives[i].visit(this, i);
	        }
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    ProtoViewVisitor.prototype.visitVariable = function (ast, context) {
	        this.variableNames.push(ast.name);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitEvent = function (ast, directiveRecord) {
	        var bindingRecord = lang_1.isPresent(directiveRecord) ?
	            change_detection_1.BindingRecord.createForHostEvent(ast.handler, ast.fullName, directiveRecord) :
	            change_detection_1.BindingRecord.createForEvent(ast.handler, ast.fullName, this.boundElementCount - 1);
	        this.eventRecords.push(bindingRecord);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitElementProperty = function (ast, directiveRecord) {
	        var boundElementIndex = this.boundElementCount - 1;
	        var dirIndex = lang_1.isPresent(directiveRecord) ? directiveRecord.directiveIndex : null;
	        var bindingRecord;
	        if (ast.type === template_ast_1.PropertyBindingType.Property) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostProperty(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementProperty(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Attribute) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostAttribute(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementAttribute(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Class) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostClass(dirIndex, ast.value, ast.name) :
	                    change_detection_1.BindingRecord.createForElementClass(ast.value, boundElementIndex, ast.name);
	        }
	        else if (ast.type === template_ast_1.PropertyBindingType.Style) {
	            bindingRecord =
	                lang_1.isPresent(dirIndex) ?
	                    change_detection_1.BindingRecord.createForHostStyle(dirIndex, ast.value, ast.name, ast.unit) :
	                    change_detection_1.BindingRecord.createForElementStyle(ast.value, boundElementIndex, ast.name, ast.unit);
	        }
	        this.bindingRecords.push(bindingRecord);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitAttr = function (ast, context) { return null; };
	    ProtoViewVisitor.prototype.visitBoundText = function (ast, context) {
	        var nodeIndex = this.nodeCount++;
	        this.bindingRecords.push(change_detection_1.BindingRecord.createForTextNode(ast.value, nodeIndex));
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitText = function (ast, context) {
	        this.nodeCount++;
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitDirective = function (ast, directiveIndexAsNumber) {
	        var directiveIndex = new change_detection_1.DirectiveIndex(this.boundElementCount - 1, directiveIndexAsNumber);
	        var directiveMetadata = ast.directive;
	        var outputsArray = [];
	        collection_1.StringMapWrapper.forEach(ast.directive.outputs, function (eventName, dirProperty) { return outputsArray.push([dirProperty, eventName]); });
	        var directiveRecord = new change_detection_1.DirectiveRecord({
	            directiveIndex: directiveIndex,
	            callAfterContentInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentInit) !== -1,
	            callAfterContentChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterContentChecked) !== -1,
	            callAfterViewInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewInit) !== -1,
	            callAfterViewChecked: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.AfterViewChecked) !== -1,
	            callOnChanges: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnChanges) !== -1,
	            callDoCheck: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.DoCheck) !== -1,
	            callOnInit: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnInit) !== -1,
	            callOnDestroy: directiveMetadata.lifecycleHooks.indexOf(interfaces_1.LifecycleHooks.OnDestroy) !== -1,
	            changeDetection: directiveMetadata.changeDetection,
	            outputs: outputsArray
	        });
	        this.directiveRecords.push(directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.inputs, directiveRecord);
	        var bindingRecords = this.bindingRecords;
	        if (directiveRecord.callOnChanges) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnChanges(directiveRecord));
	        }
	        if (directiveRecord.callOnInit) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveOnInit(directiveRecord));
	        }
	        if (directiveRecord.callDoCheck) {
	            bindingRecords.push(change_detection_1.BindingRecord.createDirectiveDoCheck(directiveRecord));
	        }
	        template_ast_1.templateVisitAll(this, ast.hostProperties, directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.hostEvents, directiveRecord);
	        template_ast_1.templateVisitAll(this, ast.exportAsVars);
	        return null;
	    };
	    ProtoViewVisitor.prototype.visitDirectiveProperty = function (ast, directiveRecord) {
	        // TODO: these setters should eventually be created by change detection, to make
	        // it monomorphic!
	        var setter = reflection_1.reflector.setter(ast.directiveName);
	        this.bindingRecords.push(change_detection_1.BindingRecord.createForDirective(ast.value, ast.directiveName, setter, directiveRecord));
	        return null;
	    };
	    return ProtoViewVisitor;
	}());
	function createChangeDefinitions(pvVisitors, componentType, genConfig) {
	    var pvVariableNames = _collectNestedProtoViewsVariableNames(pvVisitors);
	    return pvVisitors.map(function (pvVisitor) {
	        var id = componentType.name + "_" + pvVisitor.viewIndex;
	        return new change_detection_1.ChangeDetectorDefinition(id, pvVisitor.strategy, pvVariableNames[pvVisitor.viewIndex], pvVisitor.bindingRecords, pvVisitor.eventRecords, pvVisitor.directiveRecords, genConfig);
	    });
	}
	function _collectNestedProtoViewsVariableNames(pvVisitors) {
	    var nestedPvVariableNames = collection_1.ListWrapper.createFixedSize(pvVisitors.length);
	    pvVisitors.forEach(function (pv) {
	        var parentVariableNames = lang_1.isPresent(pv.parent) ? nestedPvVariableNames[pv.parent.viewIndex] : [];
	        nestedPvVariableNames[pv.viewIndex] = parentVariableNames.concat(pv.variableNames);
	    });
	    return nestedPvVariableNames;
	}


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var source_module_1 = __webpack_require__(33);
	var change_detection_jit_generator_1 = __webpack_require__(183);
	var abstract_change_detector_1 = __webpack_require__(114);
	var change_detection_util_1 = __webpack_require__(36);
	var constants_1 = __webpack_require__(24);
	var change_definition_factory_1 = __webpack_require__(268);
	var lang_1 = __webpack_require__(1);
	var change_detection_1 = __webpack_require__(18);
	var change_detector_codegen_1 = __webpack_require__(317);
	var util_1 = __webpack_require__(23);
	var di_1 = __webpack_require__(7);
	var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
	var UTIL = "ChangeDetectionUtil";
	var CHANGE_DETECTOR_STATE = "ChangeDetectorState";
	exports.CHANGE_DETECTION_JIT_IMPORTS = lang_1.CONST_EXPR({
	    'AbstractChangeDetector': abstract_change_detector_1.AbstractChangeDetector,
	    'ChangeDetectionUtil': change_detection_util_1.ChangeDetectionUtil,
	    'ChangeDetectorState': constants_1.ChangeDetectorState
	});
	var ABSTRACT_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/abstract_change_detector" + util_1.MODULE_SUFFIX);
	var UTIL_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/change_detection_util" + util_1.MODULE_SUFFIX);
	var PREGEN_PROTO_CHANGE_DETECTOR_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/pregen_proto_change_detector" + util_1.MODULE_SUFFIX);
	var CONSTANTS_MODULE = source_module_1.moduleRef("package:angular2/src/core/change_detection/constants" + util_1.MODULE_SUFFIX);
	var ChangeDetectionCompiler = (function () {
	    function ChangeDetectionCompiler(_genConfig) {
	        this._genConfig = _genConfig;
	    }
	    ChangeDetectionCompiler.prototype.compileComponentRuntime = function (componentType, strategy, parsedTemplate) {
	        var _this = this;
	        var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
	        return changeDetectorDefinitions.map(function (definition) {
	            return _this._createChangeDetectorFactory(definition);
	        });
	    };
	    ChangeDetectionCompiler.prototype._createChangeDetectorFactory = function (definition) {
	        var proto = new change_detection_1.DynamicProtoChangeDetector(definition);
	        return function () { return proto.instantiate(); };
	    };
	    ChangeDetectionCompiler.prototype.compileComponentCodeGen = function (componentType, strategy, parsedTemplate) {
	        var changeDetectorDefinitions = change_definition_factory_1.createChangeDetectorDefinitions(componentType, strategy, this._genConfig, parsedTemplate);
	        var factories = [];
	        var index = 0;
	        var sourceParts = changeDetectorDefinitions.map(function (definition) {
	            var codegen;
	            var sourcePart;
	            // TODO(tbosch): move the 2 code generators to the same place, one with .dart and one with .ts
	            // suffix
	            // and have the same API for calling them!
	            if (lang_1.IS_DART) {
	                codegen = new change_detector_codegen_1.Codegen(PREGEN_PROTO_CHANGE_DETECTOR_MODULE);
	                var className = "_" + definition.id;
	                var typeRef = (index === 0 && componentType.isHost) ?
	                    'dynamic' :
	                    "" + source_module_1.moduleRef(componentType.moduleUrl) + componentType.name;
	                codegen.generate(typeRef, className, definition);
	                factories.push(className + ".newChangeDetector");
	                sourcePart = codegen.toString();
	            }
	            else {
	                codegen = new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition, "" + UTIL_MODULE + UTIL, "" + ABSTRACT_CHANGE_DETECTOR_MODULE + ABSTRACT_CHANGE_DETECTOR, "" + CONSTANTS_MODULE + CHANGE_DETECTOR_STATE);
	                factories.push("function() { return new " + codegen.typeName + "(); }");
	                sourcePart = codegen.generateSource();
	            }
	            index++;
	            return sourcePart;
	        });
	        return new source_module_1.SourceExpressions(sourceParts, factories);
	    };
	    ChangeDetectionCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [change_detection_1.ChangeDetectorGenConfig])
	    ], ChangeDetectionCompiler);
	    return ChangeDetectionCompiler;
	}());
	exports.ChangeDetectionCompiler = ChangeDetectionCompiler;


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var runtime_compiler_1 = __webpack_require__(173);
	var template_compiler_1 = __webpack_require__(112);
	exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
	var directive_metadata_1 = __webpack_require__(64);
	exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
	exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
	exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
	var source_module_1 = __webpack_require__(33);
	exports.SourceModule = source_module_1.SourceModule;
	exports.SourceWithImports = source_module_1.SourceWithImports;
	var platform_directives_and_pipes_1 = __webpack_require__(127);
	exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
	exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
	__export(__webpack_require__(34));
	var template_parser_1 = __webpack_require__(113);
	exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(7);
	var template_parser_2 = __webpack_require__(113);
	var html_parser_1 = __webpack_require__(107);
	var template_normalizer_1 = __webpack_require__(177);
	var runtime_metadata_1 = __webpack_require__(174);
	var change_detector_compiler_1 = __webpack_require__(172);
	var style_compiler_1 = __webpack_require__(176);
	var view_compiler_1 = __webpack_require__(179);
	var proto_view_compiler_1 = __webpack_require__(109);
	var template_compiler_2 = __webpack_require__(112);
	var change_detection_1 = __webpack_require__(18);
	var compiler_1 = __webpack_require__(38);
	var runtime_compiler_2 = __webpack_require__(173);
	var element_schema_registry_1 = __webpack_require__(110);
	var dom_element_schema_registry_1 = __webpack_require__(271);
	var url_resolver_1 = __webpack_require__(44);
	var change_detection_2 = __webpack_require__(18);
	function _createChangeDetectorGenConfig() {
	    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
	}
	/**
	 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
	 * template compilation.
	 */
	exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
	    change_detection_2.Lexer,
	    change_detection_2.Parser,
	    html_parser_1.HtmlParser,
	    template_parser_2.TemplateParser,
	    template_normalizer_1.TemplateNormalizer,
	    runtime_metadata_1.RuntimeMetadataResolver,
	    url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER,
	    style_compiler_1.StyleCompiler,
	    proto_view_compiler_1.ProtoViewCompiler,
	    view_compiler_1.ViewCompiler,
	    change_detector_compiler_1.ChangeDetectionCompiler,
	    new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, { useFactory: _createChangeDetectorGenConfig, deps: [] }),
	    template_compiler_2.TemplateCompiler,
	    new di_1.Provider(runtime_compiler_2.RuntimeCompiler, { useClass: runtime_compiler_1.RuntimeCompiler_ }),
	    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_2.RuntimeCompiler }),
	    dom_element_schema_registry_1.DomElementSchemaRegistry,
	    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
	    url_resolver_1.UrlResolver
	]);


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(3);
	var change_detection_1 = __webpack_require__(18);
	var view_1 = __webpack_require__(30);
	var selector_1 = __webpack_require__(175);
	var util_1 = __webpack_require__(23);
	var interfaces_1 = __webpack_require__(68);
	// group 1: "property" from "[property]"
	// group 2: "event" from "(event)"
	var HOST_REG_EXP = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))$/g;
	var CompileMetadataWithIdentifier = (function () {
	    function CompileMetadataWithIdentifier() {
	    }
	    Object.defineProperty(CompileMetadataWithIdentifier.prototype, "identifier", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileMetadataWithIdentifier;
	}());
	exports.CompileMetadataWithIdentifier = CompileMetadataWithIdentifier;
	var CompileMetadataWithType = (function (_super) {
	    __extends(CompileMetadataWithType, _super);
	    function CompileMetadataWithType() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(CompileMetadataWithType.prototype, "type", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CompileMetadataWithType.prototype, "identifier", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileMetadataWithType;
	}(CompileMetadataWithIdentifier));
	exports.CompileMetadataWithType = CompileMetadataWithType;
	function metadataFromJson(data) {
	    return _COMPILE_METADATA_FROM_JSON[data['class']](data);
	}
	exports.metadataFromJson = metadataFromJson;
	var CompileIdentifierMetadata = (function () {
	    function CompileIdentifierMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, runtime = _b.runtime, name = _b.name, moduleUrl = _b.moduleUrl, prefix = _b.prefix, constConstructor = _b.constConstructor, value = _b.value;
	        this.runtime = runtime;
	        this.name = name;
	        this.prefix = prefix;
	        this.moduleUrl = moduleUrl;
	        this.constConstructor = constConstructor;
	        this.value = value;
	    }
	    CompileIdentifierMetadata.fromJson = function (data) {
	        var value = lang_1.isArray(data['value']) ? arrayFromJson(data['value'], metadataFromJson) :
	            objFromJson(data['value'], metadataFromJson);
	        return new CompileIdentifierMetadata({
	            name: data['name'],
	            prefix: data['prefix'],
	            moduleUrl: data['moduleUrl'],
	            constConstructor: data['constConstructor'],
	            value: value
	        });
	    };
	    CompileIdentifierMetadata.prototype.toJson = function () {
	        var value = lang_1.isArray(this.value) ? arrayToJson(this.value) : objToJson(this.value);
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Identifier',
	            'name': this.name,
	            'moduleUrl': this.moduleUrl,
	            'prefix': this.prefix,
	            'constConstructor': this.constConstructor,
	            'value': value
	        };
	    };
	    Object.defineProperty(CompileIdentifierMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    return CompileIdentifierMetadata;
	}());
	exports.CompileIdentifierMetadata = CompileIdentifierMetadata;
	var CompileDiDependencyMetadata = (function () {
	    function CompileDiDependencyMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, isAttribute = _b.isAttribute, isSelf = _b.isSelf, isHost = _b.isHost, isSkipSelf = _b.isSkipSelf, isOptional = _b.isOptional, query = _b.query, viewQuery = _b.viewQuery, token = _b.token;
	        this.isAttribute = lang_1.normalizeBool(isAttribute);
	        this.isSelf = lang_1.normalizeBool(isSelf);
	        this.isHost = lang_1.normalizeBool(isHost);
	        this.isSkipSelf = lang_1.normalizeBool(isSkipSelf);
	        this.isOptional = lang_1.normalizeBool(isOptional);
	        this.query = query;
	        this.viewQuery = viewQuery;
	        this.token = token;
	    }
	    CompileDiDependencyMetadata.fromJson = function (data) {
	        return new CompileDiDependencyMetadata({
	            token: objFromJson(data['token'], CompileIdentifierMetadata.fromJson),
	            query: objFromJson(data['query'], CompileQueryMetadata.fromJson),
	            viewQuery: objFromJson(data['viewQuery'], CompileQueryMetadata.fromJson),
	            isAttribute: data['isAttribute'],
	            isSelf: data['isSelf'],
	            isHost: data['isHost'],
	            isSkipSelf: data['isSkipSelf'],
	            isOptional: data['isOptional']
	        });
	    };
	    CompileDiDependencyMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'token': objToJson(this.token),
	            'query': objToJson(this.query),
	            'viewQuery': objToJson(this.viewQuery),
	            'isAttribute': this.isAttribute,
	            'isSelf': this.isSelf,
	            'isHost': this.isHost,
	            'isSkipSelf': this.isSkipSelf,
	            'isOptional': this.isOptional
	        };
	    };
	    return CompileDiDependencyMetadata;
	}());
	exports.CompileDiDependencyMetadata = CompileDiDependencyMetadata;
	var CompileProviderMetadata = (function () {
	    function CompileProviderMetadata(_a) {
	        var token = _a.token, useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.deps = deps;
	        this.multi = multi;
	    }
	    CompileProviderMetadata.fromJson = function (data) {
	        return new CompileProviderMetadata({
	            token: objFromJson(data['token'], CompileIdentifierMetadata.fromJson),
	            useClass: objFromJson(data['useClass'], CompileTypeMetadata.fromJson),
	            useExisting: objFromJson(data['useExisting'], CompileIdentifierMetadata.fromJson),
	            useValue: objFromJson(data['useValue'], CompileIdentifierMetadata.fromJson),
	            useFactory: objFromJson(data['useFactory'], CompileFactoryMetadata.fromJson)
	        });
	    };
	    CompileProviderMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Provider',
	            'token': objToJson(this.token),
	            'useClass': objToJson(this.useClass),
	            'useExisting': objToJson(this.useExisting),
	            'useValue': objToJson(this.useValue),
	            'useFactory': objToJson(this.useFactory)
	        };
	    };
	    return CompileProviderMetadata;
	}());
	exports.CompileProviderMetadata = CompileProviderMetadata;
	var CompileFactoryMetadata = (function () {
	    function CompileFactoryMetadata(_a) {
	        var runtime = _a.runtime, name = _a.name, moduleUrl = _a.moduleUrl, prefix = _a.prefix, constConstructor = _a.constConstructor, diDeps = _a.diDeps, value = _a.value;
	        this.runtime = runtime;
	        this.name = name;
	        this.prefix = prefix;
	        this.moduleUrl = moduleUrl;
	        this.diDeps = diDeps;
	        this.constConstructor = constConstructor;
	        this.value = value;
	    }
	    Object.defineProperty(CompileFactoryMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileFactoryMetadata.fromJson = function (data) {
	        return new CompileFactoryMetadata({
	            name: data['name'],
	            prefix: data['prefix'],
	            moduleUrl: data['moduleUrl'],
	            constConstructor: data['constConstructor'],
	            value: data['value'],
	            diDeps: arrayFromJson(data['diDeps'], CompileDiDependencyMetadata.fromJson)
	        });
	    };
	    CompileFactoryMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Factory',
	            'name': this.name,
	            'prefix': this.prefix,
	            'moduleUrl': this.moduleUrl,
	            'constConstructor': this.constConstructor,
	            'value': this.value,
	            'diDeps': arrayToJson(this.diDeps)
	        };
	    };
	    return CompileFactoryMetadata;
	}());
	exports.CompileFactoryMetadata = CompileFactoryMetadata;
	/**
	 * Metadata regarding compilation of a type.
	 */
	var CompileTypeMetadata = (function () {
	    function CompileTypeMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, runtime = _b.runtime, name = _b.name, moduleUrl = _b.moduleUrl, prefix = _b.prefix, isHost = _b.isHost, constConstructor = _b.constConstructor, value = _b.value, diDeps = _b.diDeps;
	        this.runtime = runtime;
	        this.name = name;
	        this.moduleUrl = moduleUrl;
	        this.prefix = prefix;
	        this.isHost = lang_1.normalizeBool(isHost);
	        this.constConstructor = constConstructor;
	        this.value = value;
	        this.diDeps = lang_1.normalizeBlank(diDeps);
	    }
	    CompileTypeMetadata.fromJson = function (data) {
	        return new CompileTypeMetadata({
	            name: data['name'],
	            moduleUrl: data['moduleUrl'],
	            prefix: data['prefix'],
	            isHost: data['isHost'],
	            constConstructor: data['constConstructor'],
	            value: data['value'],
	            diDeps: arrayFromJson(data['diDeps'], CompileDiDependencyMetadata.fromJson)
	        });
	    };
	    Object.defineProperty(CompileTypeMetadata.prototype, "identifier", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CompileTypeMetadata.prototype, "type", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileTypeMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'class': 'Type',
	            'name': this.name,
	            'moduleUrl': this.moduleUrl,
	            'prefix': this.prefix,
	            'isHost': this.isHost,
	            'constConstructor': this.constConstructor,
	            'value': this.value,
	            'diDeps': arrayToJson(this.diDeps)
	        };
	    };
	    return CompileTypeMetadata;
	}());
	exports.CompileTypeMetadata = CompileTypeMetadata;
	var CompileQueryMetadata = (function () {
	    function CompileQueryMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selectors = _b.selectors, descendants = _b.descendants, first = _b.first, propertyName = _b.propertyName;
	        this.selectors = selectors;
	        this.descendants = descendants;
	        this.first = lang_1.normalizeBool(first);
	        this.propertyName = propertyName;
	    }
	    CompileQueryMetadata.fromJson = function (data) {
	        return new CompileQueryMetadata({
	            selectors: arrayFromJson(data['selectors'], CompileIdentifierMetadata.fromJson),
	            descendants: data['descendants'],
	            first: data['first'],
	            propertyName: data['propertyName']
	        });
	    };
	    CompileQueryMetadata.prototype.toJson = function () {
	        return {
	            // Note: Runtime type can't be serialized...
	            'selectors': arrayToJson(this.selectors),
	            'descendants': this.descendants,
	            'first': this.first,
	            'propertyName': this.propertyName
	        };
	    };
	    return CompileQueryMetadata;
	}());
	exports.CompileQueryMetadata = CompileQueryMetadata;
	/**
	 * Metadata regarding compilation of a template.
	 */
	var CompileTemplateMetadata = (function () {
	    function CompileTemplateMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, encapsulation = _b.encapsulation, template = _b.template, templateUrl = _b.templateUrl, styles = _b.styles, styleUrls = _b.styleUrls, ngContentSelectors = _b.ngContentSelectors;
	        this.encapsulation = lang_1.isPresent(encapsulation) ? encapsulation : view_1.ViewEncapsulation.Emulated;
	        this.template = template;
	        this.templateUrl = templateUrl;
	        this.styles = lang_1.isPresent(styles) ? styles : [];
	        this.styleUrls = lang_1.isPresent(styleUrls) ? styleUrls : [];
	        this.ngContentSelectors = lang_1.isPresent(ngContentSelectors) ? ngContentSelectors : [];
	    }
	    CompileTemplateMetadata.fromJson = function (data) {
	        return new CompileTemplateMetadata({
	            encapsulation: lang_1.isPresent(data['encapsulation']) ?
	                view_1.VIEW_ENCAPSULATION_VALUES[data['encapsulation']] :
	                data['encapsulation'],
	            template: data['template'],
	            templateUrl: data['templateUrl'],
	            styles: data['styles'],
	            styleUrls: data['styleUrls'],
	            ngContentSelectors: data['ngContentSelectors']
	        });
	    };
	    CompileTemplateMetadata.prototype.toJson = function () {
	        return {
	            'encapsulation': lang_1.isPresent(this.encapsulation) ? lang_1.serializeEnum(this.encapsulation) : this.encapsulation,
	            'template': this.template,
	            'templateUrl': this.templateUrl,
	            'styles': this.styles,
	            'styleUrls': this.styleUrls,
	            'ngContentSelectors': this.ngContentSelectors
	        };
	    };
	    return CompileTemplateMetadata;
	}());
	exports.CompileTemplateMetadata = CompileTemplateMetadata;
	/**
	 * Metadata regarding compilation of a directive.
	 */
	var CompileDirectiveMetadata = (function () {
	    function CompileDirectiveMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, isComponent = _b.isComponent, dynamicLoadable = _b.dynamicLoadable, selector = _b.selector, exportAs = _b.exportAs, changeDetection = _b.changeDetection, inputs = _b.inputs, outputs = _b.outputs, hostListeners = _b.hostListeners, hostProperties = _b.hostProperties, hostAttributes = _b.hostAttributes, lifecycleHooks = _b.lifecycleHooks, providers = _b.providers, viewProviders = _b.viewProviders, queries = _b.queries, viewQueries = _b.viewQueries, template = _b.template;
	        this.type = type;
	        this.isComponent = isComponent;
	        this.dynamicLoadable = dynamicLoadable;
	        this.selector = selector;
	        this.exportAs = exportAs;
	        this.changeDetection = changeDetection;
	        this.inputs = inputs;
	        this.outputs = outputs;
	        this.hostListeners = hostListeners;
	        this.hostProperties = hostProperties;
	        this.hostAttributes = hostAttributes;
	        this.lifecycleHooks = lifecycleHooks;
	        this.providers = lang_1.normalizeBlank(providers);
	        this.viewProviders = lang_1.normalizeBlank(viewProviders);
	        this.queries = lang_1.normalizeBlank(queries);
	        this.viewQueries = lang_1.normalizeBlank(viewQueries);
	        this.template = template;
	    }
	    CompileDirectiveMetadata.create = function (_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, isComponent = _b.isComponent, dynamicLoadable = _b.dynamicLoadable, selector = _b.selector, exportAs = _b.exportAs, changeDetection = _b.changeDetection, inputs = _b.inputs, outputs = _b.outputs, host = _b.host, lifecycleHooks = _b.lifecycleHooks, providers = _b.providers, viewProviders = _b.viewProviders, queries = _b.queries, viewQueries = _b.viewQueries, template = _b.template;
	        var hostListeners = {};
	        var hostProperties = {};
	        var hostAttributes = {};
	        if (lang_1.isPresent(host)) {
	            collection_1.StringMapWrapper.forEach(host, function (value, key) {
	                var matches = lang_1.RegExpWrapper.firstMatch(HOST_REG_EXP, key);
	                if (lang_1.isBlank(matches)) {
	                    hostAttributes[key] = value;
	                }
	                else if (lang_1.isPresent(matches[1])) {
	                    hostProperties[matches[1]] = value;
	                }
	                else if (lang_1.isPresent(matches[2])) {
	                    hostListeners[matches[2]] = value;
	                }
	            });
	        }
	        var inputsMap = {};
	        if (lang_1.isPresent(inputs)) {
	            inputs.forEach(function (bindConfig) {
	                // canonical syntax: `dirProp: elProp`
	                // if there is no `:`, use dirProp = elProp
	                var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
	                inputsMap[parts[0]] = parts[1];
	            });
	        }
	        var outputsMap = {};
	        if (lang_1.isPresent(outputs)) {
	            outputs.forEach(function (bindConfig) {
	                // canonical syntax: `dirProp: elProp`
	                // if there is no `:`, use dirProp = elProp
	                var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
	                outputsMap[parts[0]] = parts[1];
	            });
	        }
	        return new CompileDirectiveMetadata({
	            type: type,
	            isComponent: lang_1.normalizeBool(isComponent),
	            dynamicLoadable: lang_1.normalizeBool(dynamicLoadable),
	            selector: selector,
	            exportAs: exportAs,
	            changeDetection: changeDetection,
	            inputs: inputsMap,
	            outputs: outputsMap,
	            hostListeners: hostListeners,
	            hostProperties: hostProperties,
	            hostAttributes: hostAttributes,
	            lifecycleHooks: lang_1.isPresent(lifecycleHooks) ? lifecycleHooks : [],
	            providers: providers,
	            viewProviders: viewProviders,
	            queries: queries,
	            viewQueries: viewQueries,
	            template: template
	        });
	    };
	    Object.defineProperty(CompileDirectiveMetadata.prototype, "identifier", {
	        get: function () { return this.type; },
	        enumerable: true,
	        configurable: true
	    });
	    CompileDirectiveMetadata.fromJson = function (data) {
	        return new CompileDirectiveMetadata({
	            isComponent: data['isComponent'],
	            dynamicLoadable: data['dynamicLoadable'],
	            selector: data['selector'],
	            exportAs: data['exportAs'],
	            type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
	            changeDetection: lang_1.isPresent(data['changeDetection']) ?
	                change_detection_1.CHANGE_DETECTION_STRATEGY_VALUES[data['changeDetection']] :
	                data['changeDetection'],
	            inputs: data['inputs'],
	            outputs: data['outputs'],
	            hostListeners: data['hostListeners'],
	            hostProperties: data['hostProperties'],
	            hostAttributes: data['hostAttributes'],
	            lifecycleHooks: data['lifecycleHooks'].map(function (hookValue) { return interfaces_1.LIFECYCLE_HOOKS_VALUES[hookValue]; }),
	            template: lang_1.isPresent(data['template']) ? CompileTemplateMetadata.fromJson(data['template']) :
	                data['template'],
	            providers: arrayFromJson(data['providers'], metadataFromJson),
	            viewProviders: arrayFromJson(data['viewProviders'], metadataFromJson),
	            queries: arrayFromJson(data['queries'], CompileQueryMetadata.fromJson),
	            viewQueries: arrayFromJson(data['viewQueries'], CompileQueryMetadata.fromJson)
	        });
	    };
	    CompileDirectiveMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Directive',
	            'isComponent': this.isComponent,
	            'dynamicLoadable': this.dynamicLoadable,
	            'selector': this.selector,
	            'exportAs': this.exportAs,
	            'type': lang_1.isPresent(this.type) ? this.type.toJson() : this.type,
	            'changeDetection': lang_1.isPresent(this.changeDetection) ? lang_1.serializeEnum(this.changeDetection) :
	                this.changeDetection,
	            'inputs': this.inputs,
	            'outputs': this.outputs,
	            'hostListeners': this.hostListeners,
	            'hostProperties': this.hostProperties,
	            'hostAttributes': this.hostAttributes,
	            'lifecycleHooks': this.lifecycleHooks.map(function (hook) { return lang_1.serializeEnum(hook); }),
	            'template': lang_1.isPresent(this.template) ? this.template.toJson() : this.template,
	            'providers': arrayToJson(this.providers),
	            'viewProviders': arrayToJson(this.viewProviders),
	            'queries': arrayToJson(this.queries),
	            'viewQueries': arrayToJson(this.viewQueries)
	        };
	    };
	    return CompileDirectiveMetadata;
	}());
	exports.CompileDirectiveMetadata = CompileDirectiveMetadata;
	/**
	 * Construct {@link CompileDirectiveMetadata} from {@link ComponentTypeMetadata} and a selector.
	 */
	function createHostComponentMeta(componentType, componentSelector) {
	    var template = selector_1.CssSelector.parse(componentSelector)[0].getMatchingElementTemplate();
	    return CompileDirectiveMetadata.create({
	        type: new CompileTypeMetadata({
	            runtime: Object,
	            name: "Host" + componentType.name,
	            moduleUrl: componentType.moduleUrl,
	            isHost: true
	        }),
	        template: new CompileTemplateMetadata({ template: template, templateUrl: '', styles: [], styleUrls: [], ngContentSelectors: [] }),
	        changeDetection: change_detection_1.ChangeDetectionStrategy.Default,
	        inputs: [],
	        outputs: [],
	        host: {},
	        lifecycleHooks: [],
	        isComponent: true,
	        dynamicLoadable: false,
	        selector: '*',
	        providers: [],
	        viewProviders: [],
	        queries: [],
	        viewQueries: []
	    });
	}
	exports.createHostComponentMeta = createHostComponentMeta;
	var CompilePipeMetadata = (function () {
	    function CompilePipeMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, type = _b.type, name = _b.name, pure = _b.pure;
	        this.type = type;
	        this.name = name;
	        this.pure = lang_1.normalizeBool(pure);
	    }
	    Object.defineProperty(CompilePipeMetadata.prototype, "identifier", {
	        get: function () { return this.type; },
	        enumerable: true,
	        configurable: true
	    });
	    CompilePipeMetadata.fromJson = function (data) {
	        return new CompilePipeMetadata({
	            type: lang_1.isPresent(data['type']) ? CompileTypeMetadata.fromJson(data['type']) : data['type'],
	            name: data['name'],
	            pure: data['pure']
	        });
	    };
	    CompilePipeMetadata.prototype.toJson = function () {
	        return {
	            'class': 'Pipe',
	            'type': lang_1.isPresent(this.type) ? this.type.toJson() : null,
	            'name': this.name,
	            'pure': this.pure
	        };
	    };
	    return CompilePipeMetadata;
	}());
	exports.CompilePipeMetadata = CompilePipeMetadata;
	var _COMPILE_METADATA_FROM_JSON = {
	    'Directive': CompileDirectiveMetadata.fromJson,
	    'Pipe': CompilePipeMetadata.fromJson,
	    'Type': CompileTypeMetadata.fromJson,
	    'Provider': CompileProviderMetadata.fromJson,
	    'Identifier': CompileIdentifierMetadata.fromJson,
	    'Factory': CompileFactoryMetadata.fromJson
	};
	function arrayFromJson(obj, fn) {
	    return lang_1.isBlank(obj) ? null : obj.map(function (o) { return objFromJson(o, fn); });
	}
	function arrayToJson(obj) {
	    return lang_1.isBlank(obj) ? null : obj.map(objToJson);
	}
	function objFromJson(obj, fn) {
	    if (lang_1.isArray(obj))
	        return arrayFromJson(obj, fn);
	    if (lang_1.isString(obj) || lang_1.isBlank(obj) || lang_1.isBoolean(obj) || lang_1.isNumber(obj))
	        return obj;
	    return fn(obj);
	}
	function objToJson(obj) {
	    if (lang_1.isArray(obj))
	        return arrayToJson(obj);
	    if (lang_1.isString(obj) || lang_1.isBlank(obj) || lang_1.isBoolean(obj) || lang_1.isNumber(obj))
	        return obj;
	    return obj.toJson();
	}


/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var HtmlTextAst = (function () {
	    function HtmlTextAst(value, sourceSpan) {
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlTextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
	    return HtmlTextAst;
	}());
	exports.HtmlTextAst = HtmlTextAst;
	var HtmlAttrAst = (function () {
	    function HtmlAttrAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlAttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
	    return HtmlAttrAst;
	}());
	exports.HtmlAttrAst = HtmlAttrAst;
	var HtmlElementAst = (function () {
	    function HtmlElementAst(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
	        this.name = name;
	        this.attrs = attrs;
	        this.children = children;
	        this.sourceSpan = sourceSpan;
	        this.startSourceSpan = startSourceSpan;
	        this.endSourceSpan = endSourceSpan;
	    }
	    HtmlElementAst.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
	    return HtmlElementAst;
	}());
	exports.HtmlElementAst = HtmlElementAst;
	var HtmlCommentAst = (function () {
	    function HtmlCommentAst(value, sourceSpan) {
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    HtmlCommentAst.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
	    return HtmlCommentAst;
	}());
	exports.HtmlCommentAst = HtmlCommentAst;
	function htmlVisitAll(visitor, asts, context) {
	    if (context === void 0) { context = null; }
	    var result = [];
	    asts.forEach(function (ast) {
	        var astResult = ast.visit(visitor, context);
	        if (lang_1.isPresent(astResult)) {
	            result.push(astResult);
	        }
	    });
	    return result;
	}
	exports.htmlVisitAll = htmlVisitAll;


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var parse_util_1 = __webpack_require__(108);
	var html_tags_1 = __webpack_require__(43);
	(function (HtmlTokenType) {
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_START"] = 0] = "TAG_OPEN_START";
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_END"] = 1] = "TAG_OPEN_END";
	    HtmlTokenType[HtmlTokenType["TAG_OPEN_END_VOID"] = 2] = "TAG_OPEN_END_VOID";
	    HtmlTokenType[HtmlTokenType["TAG_CLOSE"] = 3] = "TAG_CLOSE";
	    HtmlTokenType[HtmlTokenType["TEXT"] = 4] = "TEXT";
	    HtmlTokenType[HtmlTokenType["ESCAPABLE_RAW_TEXT"] = 5] = "ESCAPABLE_RAW_TEXT";
	    HtmlTokenType[HtmlTokenType["RAW_TEXT"] = 6] = "RAW_TEXT";
	    HtmlTokenType[HtmlTokenType["COMMENT_START"] = 7] = "COMMENT_START";
	    HtmlTokenType[HtmlTokenType["COMMENT_END"] = 8] = "COMMENT_END";
	    HtmlTokenType[HtmlTokenType["CDATA_START"] = 9] = "CDATA_START";
	    HtmlTokenType[HtmlTokenType["CDATA_END"] = 10] = "CDATA_END";
	    HtmlTokenType[HtmlTokenType["ATTR_NAME"] = 11] = "ATTR_NAME";
	    HtmlTokenType[HtmlTokenType["ATTR_VALUE"] = 12] = "ATTR_VALUE";
	    HtmlTokenType[HtmlTokenType["DOC_TYPE"] = 13] = "DOC_TYPE";
	    HtmlTokenType[HtmlTokenType["EOF"] = 14] = "EOF";
	})(exports.HtmlTokenType || (exports.HtmlTokenType = {}));
	var HtmlTokenType = exports.HtmlTokenType;
	var HtmlToken = (function () {
	    function HtmlToken(type, parts, sourceSpan) {
	        this.type = type;
	        this.parts = parts;
	        this.sourceSpan = sourceSpan;
	    }
	    return HtmlToken;
	}());
	exports.HtmlToken = HtmlToken;
	var HtmlTokenError = (function (_super) {
	    __extends(HtmlTokenError, _super);
	    function HtmlTokenError(errorMsg, tokenType, span) {
	        _super.call(this, span, errorMsg);
	        this.tokenType = tokenType;
	    }
	    return HtmlTokenError;
	}(parse_util_1.ParseError));
	exports.HtmlTokenError = HtmlTokenError;
	var HtmlTokenizeResult = (function () {
	    function HtmlTokenizeResult(tokens, errors) {
	        this.tokens = tokens;
	        this.errors = errors;
	    }
	    return HtmlTokenizeResult;
	}());
	exports.HtmlTokenizeResult = HtmlTokenizeResult;
	function tokenizeHtml(sourceContent, sourceUrl) {
	    return new _HtmlTokenizer(new parse_util_1.ParseSourceFile(sourceContent, sourceUrl)).tokenize();
	}
	exports.tokenizeHtml = tokenizeHtml;
	var $EOF = 0;
	var $TAB = 9;
	var $LF = 10;
	var $FF = 12;
	var $CR = 13;
	var $SPACE = 32;
	var $BANG = 33;
	var $DQ = 34;
	var $HASH = 35;
	var $$ = 36;
	var $AMPERSAND = 38;
	var $SQ = 39;
	var $MINUS = 45;
	var $SLASH = 47;
	var $0 = 48;
	var $SEMICOLON = 59;
	var $9 = 57;
	var $COLON = 58;
	var $LT = 60;
	var $EQ = 61;
	var $GT = 62;
	var $QUESTION = 63;
	var $LBRACKET = 91;
	var $RBRACKET = 93;
	var $A = 65;
	var $F = 70;
	var $X = 88;
	var $Z = 90;
	var $a = 97;
	var $f = 102;
	var $z = 122;
	var $x = 120;
	var $NBSP = 160;
	var CR_OR_CRLF_REGEXP = /\r\n?/g;
	function unexpectedCharacterErrorMsg(charCode) {
	    var char = charCode === $EOF ? 'EOF' : lang_1.StringWrapper.fromCharCode(charCode);
	    return "Unexpected character \"" + char + "\"";
	}
	function unknownEntityErrorMsg(entitySrc) {
	    return "Unknown entity \"" + entitySrc + "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax";
	}
	var ControlFlowError = (function () {
	    function ControlFlowError(error) {
	        this.error = error;
	    }
	    return ControlFlowError;
	}());
	// See http://www.w3.org/TR/html51/syntax.html#writing
	var _HtmlTokenizer = (function () {
	    function _HtmlTokenizer(file) {
	        this.file = file;
	        // Note: this is always lowercase!
	        this.peek = -1;
	        this.index = -1;
	        this.line = 0;
	        this.column = -1;
	        this.tokens = [];
	        this.errors = [];
	        this.input = file.content;
	        this.length = file.content.length;
	        this._advance();
	    }
	    _HtmlTokenizer.prototype._processCarriageReturns = function (content) {
	        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
	        // In order to keep the original position in the source, we can not
	        // pre-process it.
	        // Instead CRs are processed right before instantiating the tokens.
	        return lang_1.StringWrapper.replaceAll(content, CR_OR_CRLF_REGEXP, '\n');
	    };
	    _HtmlTokenizer.prototype.tokenize = function () {
	        while (this.peek !== $EOF) {
	            var start = this._getLocation();
	            try {
	                if (this._attemptCharCode($LT)) {
	                    if (this._attemptCharCode($BANG)) {
	                        if (this._attemptCharCode($LBRACKET)) {
	                            this._consumeCdata(start);
	                        }
	                        else if (this._attemptCharCode($MINUS)) {
	                            this._consumeComment(start);
	                        }
	                        else {
	                            this._consumeDocType(start);
	                        }
	                    }
	                    else if (this._attemptCharCode($SLASH)) {
	                        this._consumeTagClose(start);
	                    }
	                    else {
	                        this._consumeTagOpen(start);
	                    }
	                }
	                else {
	                    this._consumeText();
	                }
	            }
	            catch (e) {
	                if (e instanceof ControlFlowError) {
	                    this.errors.push(e.error);
	                }
	                else {
	                    throw e;
	                }
	            }
	        }
	        this._beginToken(HtmlTokenType.EOF);
	        this._endToken([]);
	        return new HtmlTokenizeResult(mergeTextTokens(this.tokens), this.errors);
	    };
	    _HtmlTokenizer.prototype._getLocation = function () {
	        return new parse_util_1.ParseLocation(this.file, this.index, this.line, this.column);
	    };
	    _HtmlTokenizer.prototype._getSpan = function (start, end) {
	        if (lang_1.isBlank(start)) {
	            start = this._getLocation();
	        }
	        if (lang_1.isBlank(end)) {
	            end = this._getLocation();
	        }
	        return new parse_util_1.ParseSourceSpan(start, end);
	    };
	    _HtmlTokenizer.prototype._beginToken = function (type, start) {
	        if (start === void 0) { start = null; }
	        if (lang_1.isBlank(start)) {
	            start = this._getLocation();
	        }
	        this.currentTokenStart = start;
	        this.currentTokenType = type;
	    };
	    _HtmlTokenizer.prototype._endToken = function (parts, end) {
	        if (end === void 0) { end = null; }
	        if (lang_1.isBlank(end)) {
	            end = this._getLocation();
	        }
	        var token = new HtmlToken(this.currentTokenType, parts, new parse_util_1.ParseSourceSpan(this.currentTokenStart, end));
	        this.tokens.push(token);
	        this.currentTokenStart = null;
	        this.currentTokenType = null;
	        return token;
	    };
	    _HtmlTokenizer.prototype._createError = function (msg, span) {
	        var error = new HtmlTokenError(msg, this.currentTokenType, span);
	        this.currentTokenStart = null;
	        this.currentTokenType = null;
	        return new ControlFlowError(error);
	    };
	    _HtmlTokenizer.prototype._advance = function () {
	        if (this.index >= this.length) {
	            throw this._createError(unexpectedCharacterErrorMsg($EOF), this._getSpan());
	        }
	        if (this.peek === $LF) {
	            this.line++;
	            this.column = 0;
	        }
	        else if (this.peek !== $LF && this.peek !== $CR) {
	            this.column++;
	        }
	        this.index++;
	        this.peek = this.index >= this.length ? $EOF : lang_1.StringWrapper.charCodeAt(this.input, this.index);
	    };
	    _HtmlTokenizer.prototype._attemptCharCode = function (charCode) {
	        if (this.peek === charCode) {
	            this._advance();
	            return true;
	        }
	        return false;
	    };
	    _HtmlTokenizer.prototype._attemptCharCodeCaseInsensitive = function (charCode) {
	        if (compareCharCodeCaseInsensitive(this.peek, charCode)) {
	            this._advance();
	            return true;
	        }
	        return false;
	    };
	    _HtmlTokenizer.prototype._requireCharCode = function (charCode) {
	        var location = this._getLocation();
	        if (!this._attemptCharCode(charCode)) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(location, location));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptStr = function (chars) {
	        for (var i = 0; i < chars.length; i++) {
	            if (!this._attemptCharCode(lang_1.StringWrapper.charCodeAt(chars, i))) {
	                return false;
	            }
	        }
	        return true;
	    };
	    _HtmlTokenizer.prototype._attemptStrCaseInsensitive = function (chars) {
	        for (var i = 0; i < chars.length; i++) {
	            if (!this._attemptCharCodeCaseInsensitive(lang_1.StringWrapper.charCodeAt(chars, i))) {
	                return false;
	            }
	        }
	        return true;
	    };
	    _HtmlTokenizer.prototype._requireStr = function (chars) {
	        var location = this._getLocation();
	        if (!this._attemptStr(chars)) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(location));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptCharCodeUntilFn = function (predicate) {
	        while (!predicate(this.peek)) {
	            this._advance();
	        }
	    };
	    _HtmlTokenizer.prototype._requireCharCodeUntilFn = function (predicate, len) {
	        var start = this._getLocation();
	        this._attemptCharCodeUntilFn(predicate);
	        if (this.index - start.offset < len) {
	            throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan(start, start));
	        }
	    };
	    _HtmlTokenizer.prototype._attemptUntilChar = function (char) {
	        while (this.peek !== char) {
	            this._advance();
	        }
	    };
	    _HtmlTokenizer.prototype._readChar = function (decodeEntities) {
	        if (decodeEntities && this.peek === $AMPERSAND) {
	            return this._decodeEntity();
	        }
	        else {
	            var index = this.index;
	            this._advance();
	            return this.input[index];
	        }
	    };
	    _HtmlTokenizer.prototype._decodeEntity = function () {
	        var start = this._getLocation();
	        this._advance();
	        if (this._attemptCharCode($HASH)) {
	            var isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
	            var numberStart = this._getLocation().offset;
	            this._attemptCharCodeUntilFn(isDigitEntityEnd);
	            if (this.peek != $SEMICOLON) {
	                throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan());
	            }
	            this._advance();
	            var strNum = this.input.substring(numberStart, this.index - 1);
	            try {
	                var charCode = lang_1.NumberWrapper.parseInt(strNum, isHex ? 16 : 10);
	                return lang_1.StringWrapper.fromCharCode(charCode);
	            }
	            catch (e) {
	                var entity = this.input.substring(start.offset + 1, this.index - 1);
	                throw this._createError(unknownEntityErrorMsg(entity), this._getSpan(start));
	            }
	        }
	        else {
	            var startPosition = this._savePosition();
	            this._attemptCharCodeUntilFn(isNamedEntityEnd);
	            if (this.peek != $SEMICOLON) {
	                this._restorePosition(startPosition);
	                return '&';
	            }
	            this._advance();
	            var name_1 = this.input.substring(start.offset + 1, this.index - 1);
	            var char = html_tags_1.NAMED_ENTITIES[name_1];
	            if (lang_1.isBlank(char)) {
	                throw this._createError(unknownEntityErrorMsg(name_1), this._getSpan(start));
	            }
	            return char;
	        }
	    };
	    _HtmlTokenizer.prototype._consumeRawText = function (decodeEntities, firstCharOfEnd, attemptEndRest) {
	        var tagCloseStart;
	        var textStart = this._getLocation();
	        this._beginToken(decodeEntities ? HtmlTokenType.ESCAPABLE_RAW_TEXT : HtmlTokenType.RAW_TEXT, textStart);
	        var parts = [];
	        while (true) {
	            tagCloseStart = this._getLocation();
	            if (this._attemptCharCode(firstCharOfEnd) && attemptEndRest()) {
	                break;
	            }
	            if (this.index > tagCloseStart.offset) {
	                parts.push(this.input.substring(tagCloseStart.offset, this.index));
	            }
	            while (this.peek !== firstCharOfEnd) {
	                parts.push(this._readChar(decodeEntities));
	            }
	        }
	        return this._endToken([this._processCarriageReturns(parts.join(''))], tagCloseStart);
	    };
	    _HtmlTokenizer.prototype._consumeComment = function (start) {
	        var _this = this;
	        this._beginToken(HtmlTokenType.COMMENT_START, start);
	        this._requireCharCode($MINUS);
	        this._endToken([]);
	        var textToken = this._consumeRawText(false, $MINUS, function () { return _this._attemptStr('->'); });
	        this._beginToken(HtmlTokenType.COMMENT_END, textToken.sourceSpan.end);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeCdata = function (start) {
	        var _this = this;
	        this._beginToken(HtmlTokenType.CDATA_START, start);
	        this._requireStr('CDATA[');
	        this._endToken([]);
	        var textToken = this._consumeRawText(false, $RBRACKET, function () { return _this._attemptStr(']>'); });
	        this._beginToken(HtmlTokenType.CDATA_END, textToken.sourceSpan.end);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeDocType = function (start) {
	        this._beginToken(HtmlTokenType.DOC_TYPE, start);
	        this._attemptUntilChar($GT);
	        this._advance();
	        this._endToken([this.input.substring(start.offset + 2, this.index - 1)]);
	    };
	    _HtmlTokenizer.prototype._consumePrefixAndName = function () {
	        var nameOrPrefixStart = this.index;
	        var prefix = null;
	        while (this.peek !== $COLON && !isPrefixEnd(this.peek)) {
	            this._advance();
	        }
	        var nameStart;
	        if (this.peek === $COLON) {
	            this._advance();
	            prefix = this.input.substring(nameOrPrefixStart, this.index - 1);
	            nameStart = this.index;
	        }
	        else {
	            nameStart = nameOrPrefixStart;
	        }
	        this._requireCharCodeUntilFn(isNameEnd, this.index === nameStart ? 1 : 0);
	        var name = this.input.substring(nameStart, this.index);
	        return [prefix, name];
	    };
	    _HtmlTokenizer.prototype._consumeTagOpen = function (start) {
	        var savedPos = this._savePosition();
	        var lowercaseTagName;
	        try {
	            if (!isAsciiLetter(this.peek)) {
	                throw this._createError(unexpectedCharacterErrorMsg(this.peek), this._getSpan());
	            }
	            var nameStart = this.index;
	            this._consumeTagOpenStart(start);
	            lowercaseTagName = this.input.substring(nameStart, this.index).toLowerCase();
	            this._attemptCharCodeUntilFn(isNotWhitespace);
	            while (this.peek !== $SLASH && this.peek !== $GT) {
	                this._consumeAttributeName();
	                this._attemptCharCodeUntilFn(isNotWhitespace);
	                if (this._attemptCharCode($EQ)) {
	                    this._attemptCharCodeUntilFn(isNotWhitespace);
	                    this._consumeAttributeValue();
	                }
	                this._attemptCharCodeUntilFn(isNotWhitespace);
	            }
	            this._consumeTagOpenEnd();
	        }
	        catch (e) {
	            if (e instanceof ControlFlowError) {
	                // When the start tag is invalid, assume we want a "<"
	                this._restorePosition(savedPos);
	                // Back to back text tokens are merged at the end
	                this._beginToken(HtmlTokenType.TEXT, start);
	                this._endToken(['<']);
	                return;
	            }
	            throw e;
	        }
	        var contentTokenType = html_tags_1.getHtmlTagDefinition(lowercaseTagName).contentType;
	        if (contentTokenType === html_tags_1.HtmlTagContentType.RAW_TEXT) {
	            this._consumeRawTextWithTagClose(lowercaseTagName, false);
	        }
	        else if (contentTokenType === html_tags_1.HtmlTagContentType.ESCAPABLE_RAW_TEXT) {
	            this._consumeRawTextWithTagClose(lowercaseTagName, true);
	        }
	    };
	    _HtmlTokenizer.prototype._consumeRawTextWithTagClose = function (lowercaseTagName, decodeEntities) {
	        var _this = this;
	        var textToken = this._consumeRawText(decodeEntities, $LT, function () {
	            if (!_this._attemptCharCode($SLASH))
	                return false;
	            _this._attemptCharCodeUntilFn(isNotWhitespace);
	            if (!_this._attemptStrCaseInsensitive(lowercaseTagName))
	                return false;
	            _this._attemptCharCodeUntilFn(isNotWhitespace);
	            if (!_this._attemptCharCode($GT))
	                return false;
	            return true;
	        });
	        this._beginToken(HtmlTokenType.TAG_CLOSE, textToken.sourceSpan.end);
	        this._endToken([null, lowercaseTagName]);
	    };
	    _HtmlTokenizer.prototype._consumeTagOpenStart = function (start) {
	        this._beginToken(HtmlTokenType.TAG_OPEN_START, start);
	        var parts = this._consumePrefixAndName();
	        this._endToken(parts);
	    };
	    _HtmlTokenizer.prototype._consumeAttributeName = function () {
	        this._beginToken(HtmlTokenType.ATTR_NAME);
	        var prefixAndName = this._consumePrefixAndName();
	        this._endToken(prefixAndName);
	    };
	    _HtmlTokenizer.prototype._consumeAttributeValue = function () {
	        this._beginToken(HtmlTokenType.ATTR_VALUE);
	        var value;
	        if (this.peek === $SQ || this.peek === $DQ) {
	            var quoteChar = this.peek;
	            this._advance();
	            var parts = [];
	            while (this.peek !== quoteChar) {
	                parts.push(this._readChar(true));
	            }
	            value = parts.join('');
	            this._advance();
	        }
	        else {
	            var valueStart = this.index;
	            this._requireCharCodeUntilFn(isNameEnd, 1);
	            value = this.input.substring(valueStart, this.index);
	        }
	        this._endToken([this._processCarriageReturns(value)]);
	    };
	    _HtmlTokenizer.prototype._consumeTagOpenEnd = function () {
	        var tokenType = this._attemptCharCode($SLASH) ? HtmlTokenType.TAG_OPEN_END_VOID :
	            HtmlTokenType.TAG_OPEN_END;
	        this._beginToken(tokenType);
	        this._requireCharCode($GT);
	        this._endToken([]);
	    };
	    _HtmlTokenizer.prototype._consumeTagClose = function (start) {
	        this._beginToken(HtmlTokenType.TAG_CLOSE, start);
	        this._attemptCharCodeUntilFn(isNotWhitespace);
	        var prefixAndName;
	        prefixAndName = this._consumePrefixAndName();
	        this._attemptCharCodeUntilFn(isNotWhitespace);
	        this._requireCharCode($GT);
	        this._endToken(prefixAndName);
	    };
	    _HtmlTokenizer.prototype._consumeText = function () {
	        var start = this._getLocation();
	        this._beginToken(HtmlTokenType.TEXT, start);
	        var parts = [this._readChar(true)];
	        while (!isTextEnd(this.peek)) {
	            parts.push(this._readChar(true));
	        }
	        this._endToken([this._processCarriageReturns(parts.join(''))]);
	    };
	    _HtmlTokenizer.prototype._savePosition = function () {
	        return [this.peek, this.index, this.column, this.line, this.tokens.length];
	    };
	    _HtmlTokenizer.prototype._restorePosition = function (position) {
	        this.peek = position[0];
	        this.index = position[1];
	        this.column = position[2];
	        this.line = position[3];
	        var nbTokens = position[4];
	        if (nbTokens < this.tokens.length) {
	            // remove any extra tokens
	            this.tokens = collection_1.ListWrapper.slice(this.tokens, 0, nbTokens);
	        }
	    };
	    return _HtmlTokenizer;
	}());
	function isNotWhitespace(code) {
	    return !isWhitespace(code) || code === $EOF;
	}
	function isWhitespace(code) {
	    return (code >= $TAB && code <= $SPACE) || (code === $NBSP);
	}
	function isNameEnd(code) {
	    return isWhitespace(code) || code === $GT || code === $SLASH || code === $SQ || code === $DQ ||
	        code === $EQ;
	}
	function isPrefixEnd(code) {
	    return (code < $a || $z < code) && (code < $A || $Z < code) && (code < $0 || code > $9);
	}
	function isDigitEntityEnd(code) {
	    return code == $SEMICOLON || code == $EOF || !isAsciiHexDigit(code);
	}
	function isNamedEntityEnd(code) {
	    return code == $SEMICOLON || code == $EOF || !isAsciiLetter(code);
	}
	function isTextEnd(code) {
	    return code === $LT || code === $EOF;
	}
	function isAsciiLetter(code) {
	    return code >= $a && code <= $z || code >= $A && code <= $Z;
	}
	function isAsciiHexDigit(code) {
	    return code >= $a && code <= $f || code >= $A && code <= $F || code >= $0 && code <= $9;
	}
	function compareCharCodeCaseInsensitive(code1, code2) {
	    return toUpperCaseCharCode(code1) == toUpperCaseCharCode(code2);
	}
	function toUpperCaseCharCode(code) {
	    return code >= $a && code <= $z ? code - $a + $A : code;
	}
	function mergeTextTokens(srcTokens) {
	    var dstTokens = [];
	    var lastDstToken;
	    for (var i = 0; i < srcTokens.length; i++) {
	        var token = srcTokens[i];
	        if (lang_1.isPresent(lastDstToken) && lastDstToken.type == HtmlTokenType.TEXT &&
	            token.type == HtmlTokenType.TEXT) {
	            lastDstToken.parts[0] += token.parts[0];
	            lastDstToken.sourceSpan.end = token.sourceSpan.end;
	        }
	        else {
	            lastDstToken = token;
	            dstTokens.push(lastDstToken);
	        }
	    }
	    return dstTokens;
	}


/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var html_ast_1 = __webpack_require__(106);
	var di_1 = __webpack_require__(7);
	var html_lexer_1 = __webpack_require__(270);
	var parse_util_1 = __webpack_require__(108);
	var html_tags_1 = __webpack_require__(43);
	var HtmlTreeError = (function (_super) {
	    __extends(HtmlTreeError, _super);
	    function HtmlTreeError(elementName, span, msg) {
	        _super.call(this, span, msg);
	        this.elementName = elementName;
	    }
	    HtmlTreeError.create = function (elementName, span, msg) {
	        return new HtmlTreeError(elementName, span, msg);
	    };
	    return HtmlTreeError;
	}(parse_util_1.ParseError));
	exports.HtmlTreeError = HtmlTreeError;
	var HtmlParseTreeResult = (function () {
	    function HtmlParseTreeResult(rootNodes, errors) {
	        this.rootNodes = rootNodes;
	        this.errors = errors;
	    }
	    return HtmlParseTreeResult;
	}());
	exports.HtmlParseTreeResult = HtmlParseTreeResult;
	var HtmlParser = (function () {
	    function HtmlParser() {
	    }
	    HtmlParser.prototype.parse = function (sourceContent, sourceUrl) {
	        var tokensAndErrors = html_lexer_1.tokenizeHtml(sourceContent, sourceUrl);
	        var treeAndErrors = new TreeBuilder(tokensAndErrors.tokens).build();
	        return new HtmlParseTreeResult(treeAndErrors.rootNodes, tokensAndErrors.errors
	            .concat(treeAndErrors.errors));
	    };
	    HtmlParser = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HtmlParser);
	    return HtmlParser;
	}());
	exports.HtmlParser = HtmlParser;
	var TreeBuilder = (function () {
	    function TreeBuilder(tokens) {
	        this.tokens = tokens;
	        this.index = -1;
	        this.rootNodes = [];
	        this.errors = [];
	        this.elementStack = [];
	        this._advance();
	    }
	    TreeBuilder.prototype.build = function () {
	        while (this.peek.type !== html_lexer_1.HtmlTokenType.EOF) {
	            if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_START) {
	                this._consumeStartTag(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_CLOSE) {
	                this._consumeEndTag(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.CDATA_START) {
	                this._closeVoidElement();
	                this._consumeCdata(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.COMMENT_START) {
	                this._closeVoidElement();
	                this._consumeComment(this._advance());
	            }
	            else if (this.peek.type === html_lexer_1.HtmlTokenType.TEXT ||
	                this.peek.type === html_lexer_1.HtmlTokenType.RAW_TEXT ||
	                this.peek.type === html_lexer_1.HtmlTokenType.ESCAPABLE_RAW_TEXT) {
	                this._closeVoidElement();
	                this._consumeText(this._advance());
	            }
	            else {
	                // Skip all other tokens...
	                this._advance();
	            }
	        }
	        return new HtmlParseTreeResult(this.rootNodes, this.errors);
	    };
	    TreeBuilder.prototype._advance = function () {
	        var prev = this.peek;
	        if (this.index < this.tokens.length - 1) {
	            // Note: there is always an EOF token at the end
	            this.index++;
	        }
	        this.peek = this.tokens[this.index];
	        return prev;
	    };
	    TreeBuilder.prototype._advanceIf = function (type) {
	        if (this.peek.type === type) {
	            return this._advance();
	        }
	        return null;
	    };
	    TreeBuilder.prototype._consumeCdata = function (startToken) {
	        this._consumeText(this._advance());
	        this._advanceIf(html_lexer_1.HtmlTokenType.CDATA_END);
	    };
	    TreeBuilder.prototype._consumeComment = function (token) {
	        var text = this._advanceIf(html_lexer_1.HtmlTokenType.RAW_TEXT);
	        this._advanceIf(html_lexer_1.HtmlTokenType.COMMENT_END);
	        var value = lang_1.isPresent(text) ? text.parts[0].trim() : null;
	        this._addToParent(new html_ast_1.HtmlCommentAst(value, token.sourceSpan));
	    };
	    TreeBuilder.prototype._consumeText = function (token) {
	        var text = token.parts[0];
	        if (text.length > 0 && text[0] == '\n') {
	            var parent_1 = this._getParentElement();
	            if (lang_1.isPresent(parent_1) && parent_1.children.length == 0 &&
	                html_tags_1.getHtmlTagDefinition(parent_1.name).ignoreFirstLf) {
	                text = text.substring(1);
	            }
	        }
	        if (text.length > 0) {
	            this._addToParent(new html_ast_1.HtmlTextAst(text, token.sourceSpan));
	        }
	    };
	    TreeBuilder.prototype._closeVoidElement = function () {
	        if (this.elementStack.length > 0) {
	            var el = collection_1.ListWrapper.last(this.elementStack);
	            if (html_tags_1.getHtmlTagDefinition(el.name).isVoid) {
	                this.elementStack.pop();
	            }
	        }
	    };
	    TreeBuilder.prototype._consumeStartTag = function (startTagToken) {
	        var prefix = startTagToken.parts[0];
	        var name = startTagToken.parts[1];
	        var attrs = [];
	        while (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_NAME) {
	            attrs.push(this._consumeAttr(this._advance()));
	        }
	        var fullName = getElementFullName(prefix, name, this._getParentElement());
	        var selfClosing = false;
	        // Note: There could have been a tokenizer error
	        // so that we don't get a token for the end tag...
	        if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END_VOID) {
	            this._advance();
	            selfClosing = true;
	            if (html_tags_1.getNsPrefix(fullName) == null && !html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
	                this.errors.push(HtmlTreeError.create(fullName, startTagToken.sourceSpan, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
	            }
	        }
	        else if (this.peek.type === html_lexer_1.HtmlTokenType.TAG_OPEN_END) {
	            this._advance();
	            selfClosing = false;
	        }
	        var end = this.peek.sourceSpan.start;
	        var span = new parse_util_1.ParseSourceSpan(startTagToken.sourceSpan.start, end);
	        var el = new html_ast_1.HtmlElementAst(fullName, attrs, [], span, span, null);
	        this._pushElement(el);
	        if (selfClosing) {
	            this._popElement(fullName);
	            el.endSourceSpan = span;
	        }
	    };
	    TreeBuilder.prototype._pushElement = function (el) {
	        if (this.elementStack.length > 0) {
	            var parentEl = collection_1.ListWrapper.last(this.elementStack);
	            if (html_tags_1.getHtmlTagDefinition(parentEl.name).isClosedByChild(el.name)) {
	                this.elementStack.pop();
	            }
	        }
	        var tagDef = html_tags_1.getHtmlTagDefinition(el.name);
	        var parentEl = this._getParentElement();
	        if (tagDef.requireExtraParent(lang_1.isPresent(parentEl) ? parentEl.name : null)) {
	            var newParent = new html_ast_1.HtmlElementAst(tagDef.parentToAdd, [], [el], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
	            this._addToParent(newParent);
	            this.elementStack.push(newParent);
	            this.elementStack.push(el);
	        }
	        else {
	            this._addToParent(el);
	            this.elementStack.push(el);
	        }
	    };
	    TreeBuilder.prototype._consumeEndTag = function (endTagToken) {
	        var fullName = getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
	        this._getParentElement().endSourceSpan = endTagToken.sourceSpan;
	        if (html_tags_1.getHtmlTagDefinition(fullName).isVoid) {
	            this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
	        }
	        else if (!this._popElement(fullName)) {
	            this.errors.push(HtmlTreeError.create(fullName, endTagToken.sourceSpan, "Unexpected closing tag \"" + endTagToken.parts[1] + "\""));
	        }
	    };
	    TreeBuilder.prototype._popElement = function (fullName) {
	        for (var stackIndex = this.elementStack.length - 1; stackIndex >= 0; stackIndex--) {
	            var el = this.elementStack[stackIndex];
	            if (el.name == fullName) {
	                collection_1.ListWrapper.splice(this.elementStack, stackIndex, this.elementStack.length - stackIndex);
	                return true;
	            }
	            if (!html_tags_1.getHtmlTagDefinition(el.name).closedByParent) {
	                return false;
	            }
	        }
	        return false;
	    };
	    TreeBuilder.prototype._consumeAttr = function (attrName) {
	        var fullName = html_tags_1.mergeNsAndName(attrName.parts[0], attrName.parts[1]);
	        var end = attrName.sourceSpan.end;
	        var value = '';
	        if (this.peek.type === html_lexer_1.HtmlTokenType.ATTR_VALUE) {
	            var valueToken = this._advance();
	            value = valueToken.parts[0];
	            end = valueToken.sourceSpan.end;
	        }
	        return new html_ast_1.HtmlAttrAst(fullName, value, new parse_util_1.ParseSourceSpan(attrName.sourceSpan.start, end));
	    };
	    TreeBuilder.prototype._getParentElement = function () {
	        return this.elementStack.length > 0 ? collection_1.ListWrapper.last(this.elementStack) : null;
	    };
	    TreeBuilder.prototype._addToParent = function (node) {
	        var parent = this._getParentElement();
	        if (lang_1.isPresent(parent)) {
	            parent.children.push(node);
	        }
	        else {
	            this.rootNodes.push(node);
	        }
	    };
	    return TreeBuilder;
	}());
	function getElementFullName(prefix, localName, parentElement) {
	    if (lang_1.isBlank(prefix)) {
	        prefix = html_tags_1.getHtmlTagDefinition(localName).implicitNamespacePrefix;
	        if (lang_1.isBlank(prefix) && lang_1.isPresent(parentElement)) {
	            prefix = html_tags_1.getNsPrefix(parentElement.name);
	        }
	    }
	    return html_tags_1.mergeNsAndName(prefix, localName);
	}


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	// see http://www.w3.org/TR/html51/syntax.html#named-character-references
	// see https://html.spec.whatwg.org/multipage/entities.json
	// This list is not exhaustive to keep the compiler footprint low.
	// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not exist.
	exports.NAMED_ENTITIES = lang_1.CONST_EXPR({
	    'Aacute': '\u00C1',
	    'aacute': '\u00E1',
	    'Acirc': '\u00C2',
	    'acirc': '\u00E2',
	    'acute': '\u00B4',
	    'AElig': '\u00C6',
	    'aelig': '\u00E6',
	    'Agrave': '\u00C0',
	    'agrave': '\u00E0',
	    'alefsym': '\u2135',
	    'Alpha': '\u0391',
	    'alpha': '\u03B1',
	    'amp': '&',
	    'and': '\u2227',
	    'ang': '\u2220',
	    'apos': '\u0027',
	    'Aring': '\u00C5',
	    'aring': '\u00E5',
	    'asymp': '\u2248',
	    'Atilde': '\u00C3',
	    'atilde': '\u00E3',
	    'Auml': '\u00C4',
	    'auml': '\u00E4',
	    'bdquo': '\u201E',
	    'Beta': '\u0392',
	    'beta': '\u03B2',
	    'brvbar': '\u00A6',
	    'bull': '\u2022',
	    'cap': '\u2229',
	    'Ccedil': '\u00C7',
	    'ccedil': '\u00E7',
	    'cedil': '\u00B8',
	    'cent': '\u00A2',
	    'Chi': '\u03A7',
	    'chi': '\u03C7',
	    'circ': '\u02C6',
	    'clubs': '\u2663',
	    'cong': '\u2245',
	    'copy': '\u00A9',
	    'crarr': '\u21B5',
	    'cup': '\u222A',
	    'curren': '\u00A4',
	    'dagger': '\u2020',
	    'Dagger': '\u2021',
	    'darr': '\u2193',
	    'dArr': '\u21D3',
	    'deg': '\u00B0',
	    'Delta': '\u0394',
	    'delta': '\u03B4',
	    'diams': '\u2666',
	    'divide': '\u00F7',
	    'Eacute': '\u00C9',
	    'eacute': '\u00E9',
	    'Ecirc': '\u00CA',
	    'ecirc': '\u00EA',
	    'Egrave': '\u00C8',
	    'egrave': '\u00E8',
	    'empty': '\u2205',
	    'emsp': '\u2003',
	    'ensp': '\u2002',
	    'Epsilon': '\u0395',
	    'epsilon': '\u03B5',
	    'equiv': '\u2261',
	    'Eta': '\u0397',
	    'eta': '\u03B7',
	    'ETH': '\u00D0',
	    'eth': '\u00F0',
	    'Euml': '\u00CB',
	    'euml': '\u00EB',
	    'euro': '\u20AC',
	    'exist': '\u2203',
	    'fnof': '\u0192',
	    'forall': '\u2200',
	    'frac12': '\u00BD',
	    'frac14': '\u00BC',
	    'frac34': '\u00BE',
	    'frasl': '\u2044',
	    'Gamma': '\u0393',
	    'gamma': '\u03B3',
	    'ge': '\u2265',
	    'gt': '>',
	    'harr': '\u2194',
	    'hArr': '\u21D4',
	    'hearts': '\u2665',
	    'hellip': '\u2026',
	    'Iacute': '\u00CD',
	    'iacute': '\u00ED',
	    'Icirc': '\u00CE',
	    'icirc': '\u00EE',
	    'iexcl': '\u00A1',
	    'Igrave': '\u00CC',
	    'igrave': '\u00EC',
	    'image': '\u2111',
	    'infin': '\u221E',
	    'int': '\u222B',
	    'Iota': '\u0399',
	    'iota': '\u03B9',
	    'iquest': '\u00BF',
	    'isin': '\u2208',
	    'Iuml': '\u00CF',
	    'iuml': '\u00EF',
	    'Kappa': '\u039A',
	    'kappa': '\u03BA',
	    'Lambda': '\u039B',
	    'lambda': '\u03BB',
	    'lang': '\u27E8',
	    'laquo': '\u00AB',
	    'larr': '\u2190',
	    'lArr': '\u21D0',
	    'lceil': '\u2308',
	    'ldquo': '\u201C',
	    'le': '\u2264',
	    'lfloor': '\u230A',
	    'lowast': '\u2217',
	    'loz': '\u25CA',
	    'lrm': '\u200E',
	    'lsaquo': '\u2039',
	    'lsquo': '\u2018',
	    'lt': '<',
	    'macr': '\u00AF',
	    'mdash': '\u2014',
	    'micro': '\u00B5',
	    'middot': '\u00B7',
	    'minus': '\u2212',
	    'Mu': '\u039C',
	    'mu': '\u03BC',
	    'nabla': '\u2207',
	    'nbsp': '\u00A0',
	    'ndash': '\u2013',
	    'ne': '\u2260',
	    'ni': '\u220B',
	    'not': '\u00AC',
	    'notin': '\u2209',
	    'nsub': '\u2284',
	    'Ntilde': '\u00D1',
	    'ntilde': '\u00F1',
	    'Nu': '\u039D',
	    'nu': '\u03BD',
	    'Oacute': '\u00D3',
	    'oacute': '\u00F3',
	    'Ocirc': '\u00D4',
	    'ocirc': '\u00F4',
	    'OElig': '\u0152',
	    'oelig': '\u0153',
	    'Ograve': '\u00D2',
	    'ograve': '\u00F2',
	    'oline': '\u203E',
	    'Omega': '\u03A9',
	    'omega': '\u03C9',
	    'Omicron': '\u039F',
	    'omicron': '\u03BF',
	    'oplus': '\u2295',
	    'or': '\u2228',
	    'ordf': '\u00AA',
	    'ordm': '\u00BA',
	    'Oslash': '\u00D8',
	    'oslash': '\u00F8',
	    'Otilde': '\u00D5',
	    'otilde': '\u00F5',
	    'otimes': '\u2297',
	    'Ouml': '\u00D6',
	    'ouml': '\u00F6',
	    'para': '\u00B6',
	    'permil': '\u2030',
	    'perp': '\u22A5',
	    'Phi': '\u03A6',
	    'phi': '\u03C6',
	    'Pi': '\u03A0',
	    'pi': '\u03C0',
	    'piv': '\u03D6',
	    'plusmn': '\u00B1',
	    'pound': '\u00A3',
	    'prime': '\u2032',
	    'Prime': '\u2033',
	    'prod': '\u220F',
	    'prop': '\u221D',
	    'Psi': '\u03A8',
	    'psi': '\u03C8',
	    'quot': '\u0022',
	    'radic': '\u221A',
	    'rang': '\u27E9',
	    'raquo': '\u00BB',
	    'rarr': '\u2192',
	    'rArr': '\u21D2',
	    'rceil': '\u2309',
	    'rdquo': '\u201D',
	    'real': '\u211C',
	    'reg': '\u00AE',
	    'rfloor': '\u230B',
	    'Rho': '\u03A1',
	    'rho': '\u03C1',
	    'rlm': '\u200F',
	    'rsaquo': '\u203A',
	    'rsquo': '\u2019',
	    'sbquo': '\u201A',
	    'Scaron': '\u0160',
	    'scaron': '\u0161',
	    'sdot': '\u22C5',
	    'sect': '\u00A7',
	    'shy': '\u00AD',
	    'Sigma': '\u03A3',
	    'sigma': '\u03C3',
	    'sigmaf': '\u03C2',
	    'sim': '\u223C',
	    'spades': '\u2660',
	    'sub': '\u2282',
	    'sube': '\u2286',
	    'sum': '\u2211',
	    'sup': '\u2283',
	    'sup1': '\u00B9',
	    'sup2': '\u00B2',
	    'sup3': '\u00B3',
	    'supe': '\u2287',
	    'szlig': '\u00DF',
	    'Tau': '\u03A4',
	    'tau': '\u03C4',
	    'there4': '\u2234',
	    'Theta': '\u0398',
	    'theta': '\u03B8',
	    'thetasym': '\u03D1',
	    'thinsp': '\u2009',
	    'THORN': '\u00DE',
	    'thorn': '\u00FE',
	    'tilde': '\u02DC',
	    'times': '\u00D7',
	    'trade': '\u2122',
	    'Uacute': '\u00DA',
	    'uacute': '\u00FA',
	    'uarr': '\u2191',
	    'uArr': '\u21D1',
	    'Ucirc': '\u00DB',
	    'ucirc': '\u00FB',
	    'Ugrave': '\u00D9',
	    'ugrave': '\u00F9',
	    'uml': '\u00A8',
	    'upsih': '\u03D2',
	    'Upsilon': '\u03A5',
	    'upsilon': '\u03C5',
	    'Uuml': '\u00DC',
	    'uuml': '\u00FC',
	    'weierp': '\u2118',
	    'Xi': '\u039E',
	    'xi': '\u03BE',
	    'Yacute': '\u00DD',
	    'yacute': '\u00FD',
	    'yen': '\u00A5',
	    'yuml': '\u00FF',
	    'Yuml': '\u0178',
	    'Zeta': '\u0396',
	    'zeta': '\u03B6',
	    'zwj': '\u200D',
	    'zwnj': '\u200C',
	});
	(function (HtmlTagContentType) {
	    HtmlTagContentType[HtmlTagContentType["RAW_TEXT"] = 0] = "RAW_TEXT";
	    HtmlTagContentType[HtmlTagContentType["ESCAPABLE_RAW_TEXT"] = 1] = "ESCAPABLE_RAW_TEXT";
	    HtmlTagContentType[HtmlTagContentType["PARSABLE_DATA"] = 2] = "PARSABLE_DATA";
	})(exports.HtmlTagContentType || (exports.HtmlTagContentType = {}));
	var HtmlTagContentType = exports.HtmlTagContentType;
	var HtmlTagDefinition = (function () {
	    function HtmlTagDefinition(_a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, closedByChildren = _b.closedByChildren, requiredParents = _b.requiredParents, implicitNamespacePrefix = _b.implicitNamespacePrefix, contentType = _b.contentType, closedByParent = _b.closedByParent, isVoid = _b.isVoid, ignoreFirstLf = _b.ignoreFirstLf;
	        this.closedByChildren = {};
	        this.closedByParent = false;
	        if (lang_1.isPresent(closedByChildren) && closedByChildren.length > 0) {
	            closedByChildren.forEach(function (tagName) { return _this.closedByChildren[tagName] = true; });
	        }
	        this.isVoid = lang_1.normalizeBool(isVoid);
	        this.closedByParent = lang_1.normalizeBool(closedByParent) || this.isVoid;
	        if (lang_1.isPresent(requiredParents) && requiredParents.length > 0) {
	            this.requiredParents = {};
	            this.parentToAdd = requiredParents[0];
	            requiredParents.forEach(function (tagName) { return _this.requiredParents[tagName] = true; });
	        }
	        this.implicitNamespacePrefix = implicitNamespacePrefix;
	        this.contentType = lang_1.isPresent(contentType) ? contentType : HtmlTagContentType.PARSABLE_DATA;
	        this.ignoreFirstLf = lang_1.normalizeBool(ignoreFirstLf);
	    }
	    HtmlTagDefinition.prototype.requireExtraParent = function (currentParent) {
	        if (lang_1.isBlank(this.requiredParents)) {
	            return false;
	        }
	        if (lang_1.isBlank(currentParent)) {
	            return true;
	        }
	        var lcParent = currentParent.toLowerCase();
	        return this.requiredParents[lcParent] != true && lcParent != 'template';
	    };
	    HtmlTagDefinition.prototype.isClosedByChild = function (name) {
	        return this.isVoid || lang_1.normalizeBool(this.closedByChildren[name.toLowerCase()]);
	    };
	    return HtmlTagDefinition;
	}());
	exports.HtmlTagDefinition = HtmlTagDefinition;
	// see http://www.w3.org/TR/html51/syntax.html#optional-tags
	// This implementation does not fully conform to the HTML5 spec.
	var TAG_DEFINITIONS = {
	    'base': new HtmlTagDefinition({ isVoid: true }),
	    'meta': new HtmlTagDefinition({ isVoid: true }),
	    'area': new HtmlTagDefinition({ isVoid: true }),
	    'embed': new HtmlTagDefinition({ isVoid: true }),
	    'link': new HtmlTagDefinition({ isVoid: true }),
	    'img': new HtmlTagDefinition({ isVoid: true }),
	    'input': new HtmlTagDefinition({ isVoid: true }),
	    'param': new HtmlTagDefinition({ isVoid: true }),
	    'hr': new HtmlTagDefinition({ isVoid: true }),
	    'br': new HtmlTagDefinition({ isVoid: true }),
	    'source': new HtmlTagDefinition({ isVoid: true }),
	    'track': new HtmlTagDefinition({ isVoid: true }),
	    'wbr': new HtmlTagDefinition({ isVoid: true }),
	    'p': new HtmlTagDefinition({
	        closedByChildren: [
	            'address',
	            'article',
	            'aside',
	            'blockquote',
	            'div',
	            'dl',
	            'fieldset',
	            'footer',
	            'form',
	            'h1',
	            'h2',
	            'h3',
	            'h4',
	            'h5',
	            'h6',
	            'header',
	            'hgroup',
	            'hr',
	            'main',
	            'nav',
	            'ol',
	            'p',
	            'pre',
	            'section',
	            'table',
	            'ul'
	        ],
	        closedByParent: true
	    }),
	    'thead': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'] }),
	    'tbody': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'], closedByParent: true }),
	    'tfoot': new HtmlTagDefinition({ closedByChildren: ['tbody'], closedByParent: true }),
	    'tr': new HtmlTagDefinition({
	        closedByChildren: ['tr'],
	        requiredParents: ['tbody', 'tfoot', 'thead'],
	        closedByParent: true
	    }),
	    'td': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
	    'th': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
	    'col': new HtmlTagDefinition({ requiredParents: ['colgroup'], isVoid: true }),
	    'svg': new HtmlTagDefinition({ implicitNamespacePrefix: 'svg' }),
	    'math': new HtmlTagDefinition({ implicitNamespacePrefix: 'math' }),
	    'li': new HtmlTagDefinition({ closedByChildren: ['li'], closedByParent: true }),
	    'dt': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'] }),
	    'dd': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'], closedByParent: true }),
	    'rb': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'rt': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'rtc': new HtmlTagDefinition({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: true }),
	    'rp': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
	    'optgroup': new HtmlTagDefinition({ closedByChildren: ['optgroup'], closedByParent: true }),
	    'option': new HtmlTagDefinition({ closedByChildren: ['option', 'optgroup'], closedByParent: true }),
	    'pre': new HtmlTagDefinition({ ignoreFirstLf: true }),
	    'listing': new HtmlTagDefinition({ ignoreFirstLf: true }),
	    'style': new HtmlTagDefinition({ contentType: HtmlTagContentType.RAW_TEXT }),
	    'script': new HtmlTagDefinition({ contentType: HtmlTagContentType.RAW_TEXT }),
	    'title': new HtmlTagDefinition({ contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT }),
	    'textarea': new HtmlTagDefinition({ contentType: HtmlTagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }),
	};
	var DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
	function getHtmlTagDefinition(tagName) {
	    var result = TAG_DEFINITIONS[tagName.toLowerCase()];
	    return lang_1.isPresent(result) ? result : DEFAULT_TAG_DEFINITION;
	}
	exports.getHtmlTagDefinition = getHtmlTagDefinition;
	var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
	function splitNsName(elementName) {
	    if (elementName[0] != '@') {
	        return [null, elementName];
	    }
	    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, elementName);
	    return [match[1], match[2]];
	}
	exports.splitNsName = splitNsName;
	function getNsPrefix(elementName) {
	    return splitNsName(elementName)[0];
	}
	exports.getNsPrefix = getNsPrefix;
	function mergeNsAndName(prefix, localName) {
	    return lang_1.isPresent(prefix) ? "@" + prefix + ":" + localName : localName;
	}
	exports.mergeNsAndName = mergeNsAndName;


/***/ },

/***/ 108:
/***/ function(module, exports) {

	'use strict';"use strict";
	var ParseLocation = (function () {
	    function ParseLocation(file, offset, line, col) {
	        this.file = file;
	        this.offset = offset;
	        this.line = line;
	        this.col = col;
	    }
	    ParseLocation.prototype.toString = function () { return this.file.url + "@" + this.line + ":" + this.col; };
	    return ParseLocation;
	}());
	exports.ParseLocation = ParseLocation;
	var ParseSourceFile = (function () {
	    function ParseSourceFile(content, url) {
	        this.content = content;
	        this.url = url;
	    }
	    return ParseSourceFile;
	}());
	exports.ParseSourceFile = ParseSourceFile;
	var ParseSourceSpan = (function () {
	    function ParseSourceSpan(start, end) {
	        this.start = start;
	        this.end = end;
	    }
	    ParseSourceSpan.prototype.toString = function () {
	        return this.start.file.content.substring(this.start.offset, this.end.offset);
	    };
	    return ParseSourceSpan;
	}());
	exports.ParseSourceSpan = ParseSourceSpan;
	var ParseError = (function () {
	    function ParseError(span, msg) {
	        this.span = span;
	        this.msg = msg;
	    }
	    ParseError.prototype.toString = function () {
	        var source = this.span.start.file.content;
	        var ctxStart = this.span.start.offset;
	        if (ctxStart > source.length - 1) {
	            ctxStart = source.length - 1;
	        }
	        var ctxEnd = ctxStart;
	        var ctxLen = 0;
	        var ctxLines = 0;
	        while (ctxLen < 100 && ctxStart > 0) {
	            ctxStart--;
	            ctxLen++;
	            if (source[ctxStart] == "\n") {
	                if (++ctxLines == 3) {
	                    break;
	                }
	            }
	        }
	        ctxLen = 0;
	        ctxLines = 0;
	        while (ctxLen < 100 && ctxEnd < source.length - 1) {
	            ctxEnd++;
	            ctxLen++;
	            if (source[ctxEnd] == "\n") {
	                if (++ctxLines == 3) {
	                    break;
	                }
	            }
	        }
	        var context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
	            source.substring(this.span.start.offset, ctxEnd + 1);
	        return this.msg + " (\"" + context + "\"): " + this.span.start;
	    };
	    return ParseError;
	}());
	exports.ParseError = ParseError;


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var template_ast_1 = __webpack_require__(34);
	var source_module_1 = __webpack_require__(33);
	var view_1 = __webpack_require__(49);
	var view_type_1 = __webpack_require__(50);
	var element_1 = __webpack_require__(67);
	var util_1 = __webpack_require__(23);
	var di_1 = __webpack_require__(7);
	exports.PROTO_VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({ 'AppProtoView': view_1.AppProtoView, 'AppProtoElement': element_1.AppProtoElement, 'ViewType': view_type_1.ViewType });
	// TODO: have a single file that reexports everything needed for
	// codegen explicitly
	// - helps understanding what codegen works against
	// - less imports in codegen code
	exports.APP_VIEW_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view' + util_1.MODULE_SUFFIX);
	exports.VIEW_TYPE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/view_type' + util_1.MODULE_SUFFIX);
	exports.APP_EL_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/element' + util_1.MODULE_SUFFIX);
	exports.METADATA_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/metadata/view' + util_1.MODULE_SUFFIX);
	var IMPLICIT_TEMPLATE_VAR = '\$implicit';
	var CLASS_ATTR = 'class';
	var STYLE_ATTR = 'style';
	var ProtoViewCompiler = (function () {
	    function ProtoViewCompiler() {
	    }
	    ProtoViewCompiler.prototype.compileProtoViewRuntime = function (metadataCache, component, template, pipes) {
	        var protoViewFactory = new RuntimeProtoViewFactory(metadataCache, component, pipes);
	        var allProtoViews = [];
	        protoViewFactory.createCompileProtoView(template, [], [], allProtoViews);
	        return new CompileProtoViews([], allProtoViews);
	    };
	    ProtoViewCompiler.prototype.compileProtoViewCodeGen = function (resolvedMetadataCacheExpr, component, template, pipes) {
	        var protoViewFactory = new CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes);
	        var allProtoViews = [];
	        var allStatements = [];
	        protoViewFactory.createCompileProtoView(template, [], allStatements, allProtoViews);
	        return new CompileProtoViews(allStatements.map(function (stmt) { return stmt.statement; }), allProtoViews);
	    };
	    ProtoViewCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ProtoViewCompiler);
	    return ProtoViewCompiler;
	}());
	exports.ProtoViewCompiler = ProtoViewCompiler;
	var CompileProtoViews = (function () {
	    function CompileProtoViews(declarations, protoViews) {
	        this.declarations = declarations;
	        this.protoViews = protoViews;
	    }
	    return CompileProtoViews;
	}());
	exports.CompileProtoViews = CompileProtoViews;
	var CompileProtoView = (function () {
	    function CompileProtoView(embeddedTemplateIndex, protoElements, protoView) {
	        this.embeddedTemplateIndex = embeddedTemplateIndex;
	        this.protoElements = protoElements;
	        this.protoView = protoView;
	    }
	    return CompileProtoView;
	}());
	exports.CompileProtoView = CompileProtoView;
	var CompileProtoElement = (function () {
	    function CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl) {
	        this.boundElementIndex = boundElementIndex;
	        this.attrNameAndValues = attrNameAndValues;
	        this.variableNameAndValues = variableNameAndValues;
	        this.renderEvents = renderEvents;
	        this.directives = directives;
	        this.embeddedTemplateIndex = embeddedTemplateIndex;
	        this.appProtoEl = appProtoEl;
	    }
	    return CompileProtoElement;
	}());
	exports.CompileProtoElement = CompileProtoElement;
	function visitAndReturnContext(visitor, asts, context) {
	    template_ast_1.templateVisitAll(visitor, asts, context);
	    return context;
	}
	var ProtoViewFactory = (function () {
	    function ProtoViewFactory(component) {
	        this.component = component;
	    }
	    ProtoViewFactory.prototype.createCompileProtoView = function (template, templateVariableBindings, targetStatements, targetProtoViews) {
	        var embeddedTemplateIndex = targetProtoViews.length;
	        // Note: targetProtoViews needs to be in depth first order.
	        // So we "reserve" a space here that we fill after the recursion is done
	        targetProtoViews.push(null);
	        var builder = new ProtoViewBuilderVisitor(this, targetStatements, targetProtoViews);
	        template_ast_1.templateVisitAll(builder, template);
	        var viewType = getViewType(this.component, embeddedTemplateIndex);
	        var appProtoView = this.createAppProtoView(embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements);
	        var cpv = new CompileProtoView(embeddedTemplateIndex, builder.protoElements, appProtoView);
	        targetProtoViews[embeddedTemplateIndex] = cpv;
	        return cpv;
	    };
	    return ProtoViewFactory;
	}());
	var CodeGenProtoViewFactory = (function (_super) {
	    __extends(CodeGenProtoViewFactory, _super);
	    function CodeGenProtoViewFactory(resolvedMetadataCacheExpr, component, pipes) {
	        _super.call(this, component);
	        this.resolvedMetadataCacheExpr = resolvedMetadataCacheExpr;
	        this.pipes = pipes;
	        this._nextVarId = 0;
	    }
	    CodeGenProtoViewFactory.prototype._nextProtoViewVar = function (embeddedTemplateIndex) {
	        return "appProtoView" + this._nextVarId++ + "_" + this.component.type.name + embeddedTemplateIndex;
	    };
	    CodeGenProtoViewFactory.prototype.createAppProtoView = function (embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
	        var protoViewVarName = this._nextProtoViewVar(embeddedTemplateIndex);
	        var viewTypeExpr = codeGenViewType(viewType);
	        var pipesExpr = embeddedTemplateIndex === 0 ?
	            codeGenTypesArray(this.pipes.map(function (pipeMeta) { return pipeMeta.type; })) :
	            null;
	        var statement = "var " + protoViewVarName + " = " + exports.APP_VIEW_MODULE_REF + "AppProtoView.create(" + this.resolvedMetadataCacheExpr.expression + ", " + viewTypeExpr + ", " + pipesExpr + ", " + util_1.codeGenStringMap(templateVariableBindings) + ");";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(protoViewVarName);
	    };
	    CodeGenProtoViewFactory.prototype.createAppProtoElement = function (boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
	        var varName = "appProtoEl" + this._nextVarId++ + "_" + this.component.type.name;
	        var value = exports.APP_EL_MODULE_REF + "AppProtoElement.create(\n        " + this.resolvedMetadataCacheExpr.expression + ",\n        " + boundElementIndex + ",\n        " + util_1.codeGenStringMap(attrNameAndValues) + ",\n        " + codeGenDirectivesArray(directives) + ",\n        " + util_1.codeGenStringMap(variableNameAndValues) + "\n      )";
	        var statement = "var " + varName + " = " + value + ";";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    return CodeGenProtoViewFactory;
	}(ProtoViewFactory));
	var RuntimeProtoViewFactory = (function (_super) {
	    __extends(RuntimeProtoViewFactory, _super);
	    function RuntimeProtoViewFactory(metadataCache, component, pipes) {
	        _super.call(this, component);
	        this.metadataCache = metadataCache;
	        this.pipes = pipes;
	    }
	    RuntimeProtoViewFactory.prototype.createAppProtoView = function (embeddedTemplateIndex, viewType, templateVariableBindings, targetStatements) {
	        var pipes = embeddedTemplateIndex === 0 ? this.pipes.map(function (pipeMeta) { return pipeMeta.type.runtime; }) : [];
	        var templateVars = keyValueArrayToStringMap(templateVariableBindings);
	        return view_1.AppProtoView.create(this.metadataCache, viewType, pipes, templateVars);
	    };
	    RuntimeProtoViewFactory.prototype.createAppProtoElement = function (boundElementIndex, attrNameAndValues, variableNameAndValues, directives, targetStatements) {
	        var attrs = keyValueArrayToStringMap(attrNameAndValues);
	        return element_1.AppProtoElement.create(this.metadataCache, boundElementIndex, attrs, directives.map(function (dirMeta) { return dirMeta.type.runtime; }), keyValueArrayToStringMap(variableNameAndValues));
	    };
	    return RuntimeProtoViewFactory;
	}(ProtoViewFactory));
	var ProtoViewBuilderVisitor = (function () {
	    function ProtoViewBuilderVisitor(factory, allStatements, allProtoViews) {
	        this.factory = factory;
	        this.allStatements = allStatements;
	        this.allProtoViews = allProtoViews;
	        this.protoElements = [];
	        this.boundElementCount = 0;
	    }
	    ProtoViewBuilderVisitor.prototype._readAttrNameAndValues = function (directives, attrAsts) {
	        var attrs = visitAndReturnContext(this, attrAsts, {});
	        directives.forEach(function (directiveMeta) {
	            collection_1.StringMapWrapper.forEach(directiveMeta.hostAttributes, function (value, name) {
	                var prevValue = attrs[name];
	                attrs[name] = lang_1.isPresent(prevValue) ? mergeAttributeValue(name, prevValue, value) : value;
	            });
	        });
	        return mapToKeyValueArray(attrs);
	    };
	    ProtoViewBuilderVisitor.prototype.visitBoundText = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitText = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitElement = function (ast, context) {
	        var _this = this;
	        var boundElementIndex = null;
	        if (ast.isBound()) {
	            boundElementIndex = this.boundElementCount++;
	        }
	        var component = ast.getComponent();
	        var variableNameAndValues = [];
	        if (lang_1.isBlank(component)) {
	            ast.exportAsVars.forEach(function (varAst) { variableNameAndValues.push([varAst.name, null]); });
	        }
	        var directives = [];
	        var renderEvents = visitAndReturnContext(this, ast.outputs, new Map());
	        collection_1.ListWrapper.forEachWithIndex(ast.directives, function (directiveAst, index) {
	            directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, renderEvents, variableNameAndValues, directives));
	        });
	        var renderEventArray = [];
	        renderEvents.forEach(function (eventAst, _) { return renderEventArray.push(eventAst); });
	        var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
	        this._addProtoElement(ast.isBound(), boundElementIndex, attrNameAndValues, variableNameAndValues, renderEventArray, directives, null);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        var _this = this;
	        var boundElementIndex = this.boundElementCount++;
	        var directives = [];
	        collection_1.ListWrapper.forEachWithIndex(ast.directives, function (directiveAst, index) {
	            directiveAst.visit(_this, new DirectiveContext(index, boundElementIndex, new Map(), [], directives));
	        });
	        var attrNameAndValues = this._readAttrNameAndValues(directives, ast.attrs);
	        var templateVariableBindings = ast.vars.map(function (varAst) { return [varAst.value.length > 0 ? varAst.value : IMPLICIT_TEMPLATE_VAR, varAst.name]; });
	        var nestedProtoView = this.factory.createCompileProtoView(ast.children, templateVariableBindings, this.allStatements, this.allProtoViews);
	        this._addProtoElement(true, boundElementIndex, attrNameAndValues, [], [], directives, nestedProtoView.embeddedTemplateIndex);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype._addProtoElement = function (isBound, boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex) {
	        var appProtoEl = null;
	        if (isBound) {
	            appProtoEl =
	                this.factory.createAppProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, directives, this.allStatements);
	        }
	        var compileProtoEl = new CompileProtoElement(boundElementIndex, attrNameAndValues, variableNameAndValues, renderEvents, directives, embeddedTemplateIndex, appProtoEl);
	        this.protoElements.push(compileProtoEl);
	    };
	    ProtoViewBuilderVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitAttr = function (ast, attrNameAndValues) {
	        attrNameAndValues[ast.name] = ast.value;
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitDirective = function (ast, ctx) {
	        ctx.targetDirectives.push(ast.directive);
	        template_ast_1.templateVisitAll(this, ast.hostEvents, ctx.hostEventTargetAndNames);
	        ast.exportAsVars.forEach(function (varAst) { ctx.targetVariableNameAndValues.push([varAst.name, ctx.index]); });
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        eventTargetAndNames.set(ast.fullName, ast);
	        return null;
	    };
	    ProtoViewBuilderVisitor.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    ProtoViewBuilderVisitor.prototype.visitElementProperty = function (ast, context) { return null; };
	    return ProtoViewBuilderVisitor;
	}());
	function mapToKeyValueArray(data) {
	    var entryArray = [];
	    collection_1.StringMapWrapper.forEach(data, function (value, name) { entryArray.push([name, value]); });
	    // We need to sort to get a defined output order
	    // for tests and for caching generated artifacts...
	    collection_1.ListWrapper.sort(entryArray, function (entry1, entry2) {
	        return lang_1.StringWrapper.compare(entry1[0], entry2[0]);
	    });
	    var keyValueArray = [];
	    entryArray.forEach(function (entry) { keyValueArray.push([entry[0], entry[1]]); });
	    return keyValueArray;
	}
	function mergeAttributeValue(attrName, attrValue1, attrValue2) {
	    if (attrName == CLASS_ATTR || attrName == STYLE_ATTR) {
	        return attrValue1 + " " + attrValue2;
	    }
	    else {
	        return attrValue2;
	    }
	}
	var DirectiveContext = (function () {
	    function DirectiveContext(index, boundElementIndex, hostEventTargetAndNames, targetVariableNameAndValues, targetDirectives) {
	        this.index = index;
	        this.boundElementIndex = boundElementIndex;
	        this.hostEventTargetAndNames = hostEventTargetAndNames;
	        this.targetVariableNameAndValues = targetVariableNameAndValues;
	        this.targetDirectives = targetDirectives;
	    }
	    return DirectiveContext;
	}());
	function keyValueArrayToStringMap(keyValueArray) {
	    var stringMap = {};
	    for (var i = 0; i < keyValueArray.length; i++) {
	        var entry = keyValueArray[i];
	        stringMap[entry[0]] = entry[1];
	    }
	    return stringMap;
	}
	function codeGenDirectivesArray(directives) {
	    var expressions = directives.map(function (directiveType) { return typeRef(directiveType.type); });
	    return "[" + expressions.join(',') + "]";
	}
	function codeGenTypesArray(types) {
	    var expressions = types.map(typeRef);
	    return "[" + expressions.join(',') + "]";
	}
	function codeGenViewType(value) {
	    if (lang_1.IS_DART) {
	        return "" + exports.VIEW_TYPE_MODULE_REF + value;
	    }
	    else {
	        return "" + value;
	    }
	}
	function typeRef(type) {
	    return "" + source_module_1.moduleRef(type.moduleUrl) + type.name;
	}
	function getViewType(component, embeddedTemplateIndex) {
	    if (embeddedTemplateIndex > 0) {
	        return view_type_1.ViewType.EMBEDDED;
	    }
	    else if (component.type.isHost) {
	        return view_type_1.ViewType.HOST;
	    }
	    else {
	        return view_type_1.ViewType.COMPONENT;
	    }
	}


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var compiler_1 = __webpack_require__(38);
	var view_ref_1 = __webpack_require__(70);
	var template_compiler_1 = __webpack_require__(112);
	var di_1 = __webpack_require__(7);
	var RuntimeCompiler = (function (_super) {
	    __extends(RuntimeCompiler, _super);
	    function RuntimeCompiler() {
	        _super.apply(this, arguments);
	    }
	    return RuntimeCompiler;
	}(compiler_1.Compiler));
	exports.RuntimeCompiler = RuntimeCompiler;
	var RuntimeCompiler_ = (function (_super) {
	    __extends(RuntimeCompiler_, _super);
	    function RuntimeCompiler_(_templateCompiler) {
	        _super.call(this);
	        this._templateCompiler = _templateCompiler;
	    }
	    RuntimeCompiler_.prototype.compileInHost = function (componentType) {
	        return this._templateCompiler.compileHostComponentRuntime(componentType)
	            .then(function (hostViewFactory) { return new view_ref_1.HostViewFactoryRef_(hostViewFactory); });
	    };
	    RuntimeCompiler_.prototype.clearCache = function () {
	        _super.prototype.clearCache.call(this);
	        this._templateCompiler.clearCache();
	    };
	    RuntimeCompiler_ = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [template_compiler_1.TemplateCompiler])
	    ], RuntimeCompiler_);
	    return RuntimeCompiler_;
	}(compiler_1.Compiler_));
	exports.RuntimeCompiler_ = RuntimeCompiler_;


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(7);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var cpl = __webpack_require__(64);
	var md = __webpack_require__(51);
	var directive_resolver_1 = __webpack_require__(66);
	var pipe_resolver_1 = __webpack_require__(123);
	var view_resolver_1 = __webpack_require__(125);
	var directive_lifecycle_reflector_1 = __webpack_require__(286);
	var interfaces_1 = __webpack_require__(68);
	var reflection_1 = __webpack_require__(12);
	var di_2 = __webpack_require__(7);
	var platform_directives_and_pipes_1 = __webpack_require__(127);
	var util_1 = __webpack_require__(23);
	var assertions_1 = __webpack_require__(267);
	var url_resolver_1 = __webpack_require__(44);
	var RuntimeMetadataResolver = (function () {
	    function RuntimeMetadataResolver(_directiveResolver, _pipeResolver, _viewResolver, _platformDirectives, _platformPipes) {
	        this._directiveResolver = _directiveResolver;
	        this._pipeResolver = _pipeResolver;
	        this._viewResolver = _viewResolver;
	        this._platformDirectives = _platformDirectives;
	        this._platformPipes = _platformPipes;
	        this._directiveCache = new Map();
	        this._pipeCache = new Map();
	        this._anonymousTypes = new Map();
	        this._anonymousTypeIndex = 0;
	    }
	    /**
	     * Wrap the stringify method to avoid naming things `function (arg1...) {`
	     */
	    RuntimeMetadataResolver.prototype.sanitizeName = function (obj) {
	        var result = lang_1.stringify(obj);
	        if (result.indexOf('(') < 0) {
	            return result;
	        }
	        var found = this._anonymousTypes.get(obj);
	        if (!found) {
	            this._anonymousTypes.set(obj, this._anonymousTypeIndex++);
	            found = this._anonymousTypes.get(obj);
	        }
	        return "anonymous_type_" + found + "_";
	    };
	    RuntimeMetadataResolver.prototype.getDirectiveMetadata = function (directiveType) {
	        var meta = this._directiveCache.get(directiveType);
	        if (lang_1.isBlank(meta)) {
	            var dirMeta = this._directiveResolver.resolve(directiveType);
	            var moduleUrl = null;
	            var templateMeta = null;
	            var changeDetectionStrategy = null;
	            if (dirMeta instanceof md.ComponentMetadata) {
	                assertions_1.assertArrayOfStrings('styles', dirMeta.styles);
	                var cmpMeta = dirMeta;
	                moduleUrl = calcModuleUrl(directiveType, cmpMeta);
	                var viewMeta = this._viewResolver.resolve(directiveType);
	                assertions_1.assertArrayOfStrings('styles', viewMeta.styles);
	                templateMeta = new cpl.CompileTemplateMetadata({
	                    encapsulation: viewMeta.encapsulation,
	                    template: viewMeta.template,
	                    templateUrl: viewMeta.templateUrl,
	                    styles: viewMeta.styles,
	                    styleUrls: viewMeta.styleUrls
	                });
	                changeDetectionStrategy = cmpMeta.changeDetection;
	            }
	            meta = cpl.CompileDirectiveMetadata.create({
	                selector: dirMeta.selector,
	                exportAs: dirMeta.exportAs,
	                isComponent: lang_1.isPresent(templateMeta),
	                dynamicLoadable: true,
	                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(directiveType), moduleUrl: moduleUrl, runtime: directiveType }),
	                template: templateMeta,
	                changeDetection: changeDetectionStrategy,
	                inputs: dirMeta.inputs,
	                outputs: dirMeta.outputs,
	                host: dirMeta.host,
	                lifecycleHooks: interfaces_1.LIFECYCLE_HOOKS_VALUES.filter(function (hook) { return directive_lifecycle_reflector_1.hasLifecycleHook(hook, directiveType); })
	            });
	            this._directiveCache.set(directiveType, meta);
	        }
	        return meta;
	    };
	    RuntimeMetadataResolver.prototype.getPipeMetadata = function (pipeType) {
	        var meta = this._pipeCache.get(pipeType);
	        if (lang_1.isBlank(meta)) {
	            var pipeMeta = this._pipeResolver.resolve(pipeType);
	            var moduleUrl = reflection_1.reflector.importUri(pipeType);
	            meta = new cpl.CompilePipeMetadata({
	                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(pipeType), moduleUrl: moduleUrl, runtime: pipeType }),
	                name: pipeMeta.name,
	                pure: pipeMeta.pure
	            });
	            this._pipeCache.set(pipeType, meta);
	        }
	        return meta;
	    };
	    RuntimeMetadataResolver.prototype.getViewDirectivesMetadata = function (component) {
	        var _this = this;
	        var view = this._viewResolver.resolve(component);
	        var directives = flattenDirectives(view, this._platformDirectives);
	        for (var i = 0; i < directives.length; i++) {
	            if (!isValidType(directives[i])) {
	                throw new exceptions_1.BaseException("Unexpected directive value '" + lang_1.stringify(directives[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
	            }
	        }
	        return directives.map(function (type) { return _this.getDirectiveMetadata(type); });
	    };
	    RuntimeMetadataResolver.prototype.getViewPipesMetadata = function (component) {
	        var _this = this;
	        var view = this._viewResolver.resolve(component);
	        var pipes = flattenPipes(view, this._platformPipes);
	        for (var i = 0; i < pipes.length; i++) {
	            if (!isValidType(pipes[i])) {
	                throw new exceptions_1.BaseException("Unexpected piped value '" + lang_1.stringify(pipes[i]) + "' on the View of component '" + lang_1.stringify(component) + "'");
	            }
	        }
	        return pipes.map(function (type) { return _this.getPipeMetadata(type); });
	    };
	    RuntimeMetadataResolver = __decorate([
	        di_2.Injectable(),
	        __param(3, di_2.Optional()),
	        __param(3, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_DIRECTIVES)),
	        __param(4, di_2.Optional()),
	        __param(4, di_2.Inject(platform_directives_and_pipes_1.PLATFORM_PIPES)), 
	        __metadata('design:paramtypes', [directive_resolver_1.DirectiveResolver, pipe_resolver_1.PipeResolver, view_resolver_1.ViewResolver, Array, Array])
	    ], RuntimeMetadataResolver);
	    return RuntimeMetadataResolver;
	}());
	exports.RuntimeMetadataResolver = RuntimeMetadataResolver;
	function flattenDirectives(view, platformDirectives) {
	    var directives = [];
	    if (lang_1.isPresent(platformDirectives)) {
	        flattenArray(platformDirectives, directives);
	    }
	    if (lang_1.isPresent(view.directives)) {
	        flattenArray(view.directives, directives);
	    }
	    return directives;
	}
	function flattenPipes(view, platformPipes) {
	    var pipes = [];
	    if (lang_1.isPresent(platformPipes)) {
	        flattenArray(platformPipes, pipes);
	    }
	    if (lang_1.isPresent(view.pipes)) {
	        flattenArray(view.pipes, pipes);
	    }
	    return pipes;
	}
	function flattenArray(tree, out) {
	    for (var i = 0; i < tree.length; i++) {
	        var item = di_1.resolveForwardRef(tree[i]);
	        if (lang_1.isArray(item)) {
	            flattenArray(item, out);
	        }
	        else {
	            out.push(item);
	        }
	    }
	}
	function isValidType(value) {
	    return lang_1.isPresent(value) && (value instanceof lang_1.Type);
	}
	function calcModuleUrl(type, cmpMetadata) {
	    var moduleId = cmpMetadata.moduleId;
	    if (lang_1.isPresent(moduleId)) {
	        var scheme = url_resolver_1.getUrlScheme(moduleId);
	        return lang_1.isPresent(scheme) && scheme.length > 0 ? moduleId :
	            "package:" + moduleId + util_1.MODULE_SUFFIX;
	    }
	    else {
	        return reflection_1.reflector.importUri(type);
	    }
	}


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var di_1 = __webpack_require__(7);
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var dom_adapter_1 = __webpack_require__(11);
	var html_tags_1 = __webpack_require__(43);
	var element_schema_registry_1 = __webpack_require__(110);
	var NAMESPACE_URIS = lang_1.CONST_EXPR({ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' });
	var DomElementSchemaRegistry = (function (_super) {
	    __extends(DomElementSchemaRegistry, _super);
	    function DomElementSchemaRegistry() {
	        _super.apply(this, arguments);
	        this._protoElements = new Map();
	    }
	    DomElementSchemaRegistry.prototype._getProtoElement = function (tagName) {
	        var element = this._protoElements.get(tagName);
	        if (lang_1.isBlank(element)) {
	            var nsAndName = html_tags_1.splitNsName(tagName);
	            element = lang_1.isPresent(nsAndName[0]) ?
	                dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	                dom_adapter_1.DOM.createElement(nsAndName[1]);
	            this._protoElements.set(tagName, element);
	        }
	        return element;
	    };
	    DomElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) {
	        if (tagName.indexOf('-') !== -1) {
	            // can't tell now as we don't know which properties a custom element will get
	            // once it is instantiated
	            return true;
	        }
	        else {
	            var elm = this._getProtoElement(tagName);
	            return dom_adapter_1.DOM.hasProperty(elm, propName);
	        }
	    };
	    DomElementSchemaRegistry.prototype.getMappedPropName = function (propName) {
	        var mappedPropName = collection_1.StringMapWrapper.get(dom_adapter_1.DOM.attrToPropMap, propName);
	        return lang_1.isPresent(mappedPropName) ? mappedPropName : propName;
	    };
	    DomElementSchemaRegistry = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DomElementSchemaRegistry);
	    return DomElementSchemaRegistry;
	}(element_schema_registry_1.ElementSchemaRegistry));
	exports.DomElementSchemaRegistry = DomElementSchemaRegistry;


/***/ },

/***/ 110:
/***/ function(module, exports) {

	'use strict';"use strict";
	var ElementSchemaRegistry = (function () {
	    function ElementSchemaRegistry() {
	    }
	    ElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) { return true; };
	    ElementSchemaRegistry.prototype.getMappedPropName = function (propName) { return propName; };
	    return ElementSchemaRegistry;
	}());
	exports.ElementSchemaRegistry = ElementSchemaRegistry;


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var _EMPTY_ATTR_VALUE = '';
	// TODO: Can't use `const` here as
	// in Dart this is not transpiled into `final` yet...
	var _SELECTOR_REGEXP = lang_1.RegExpWrapper.create('(\\:not\\()|' +
	    '([-\\w]+)|' +
	    '(?:\\.([-\\w]+))|' +
	    '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])|' +
	    '(\\))|' +
	    '(\\s*,\\s*)'); // ","
	/**
	 * A css selector contains an element name,
	 * css classes and attribute/value pairs with the purpose
	 * of selecting subsets out of them.
	 */
	var CssSelector = (function () {
	    function CssSelector() {
	        this.element = null;
	        this.classNames = [];
	        this.attrs = [];
	        this.notSelectors = [];
	    }
	    CssSelector.parse = function (selector) {
	        var results = [];
	        var _addResult = function (res, cssSel) {
	            if (cssSel.notSelectors.length > 0 && lang_1.isBlank(cssSel.element) &&
	                collection_1.ListWrapper.isEmpty(cssSel.classNames) && collection_1.ListWrapper.isEmpty(cssSel.attrs)) {
	                cssSel.element = "*";
	            }
	            res.push(cssSel);
	        };
	        var cssSelector = new CssSelector();
	        var matcher = lang_1.RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
	        var match;
	        var current = cssSelector;
	        var inNot = false;
	        while (lang_1.isPresent(match = lang_1.RegExpMatcherWrapper.next(matcher))) {
	            if (lang_1.isPresent(match[1])) {
	                if (inNot) {
	                    throw new exceptions_1.BaseException('Nesting :not is not allowed in a selector');
	                }
	                inNot = true;
	                current = new CssSelector();
	                cssSelector.notSelectors.push(current);
	            }
	            if (lang_1.isPresent(match[2])) {
	                current.setElement(match[2]);
	            }
	            if (lang_1.isPresent(match[3])) {
	                current.addClassName(match[3]);
	            }
	            if (lang_1.isPresent(match[4])) {
	                current.addAttribute(match[4], match[5]);
	            }
	            if (lang_1.isPresent(match[6])) {
	                inNot = false;
	                current = cssSelector;
	            }
	            if (lang_1.isPresent(match[7])) {
	                if (inNot) {
	                    throw new exceptions_1.BaseException('Multiple selectors in :not are not supported');
	                }
	                _addResult(results, cssSelector);
	                cssSelector = current = new CssSelector();
	            }
	        }
	        _addResult(results, cssSelector);
	        return results;
	    };
	    CssSelector.prototype.isElementSelector = function () {
	        return lang_1.isPresent(this.element) && collection_1.ListWrapper.isEmpty(this.classNames) &&
	            collection_1.ListWrapper.isEmpty(this.attrs) && this.notSelectors.length === 0;
	    };
	    CssSelector.prototype.setElement = function (element) {
	        if (element === void 0) { element = null; }
	        this.element = element;
	    };
	    /** Gets a template string for an element that matches the selector. */
	    CssSelector.prototype.getMatchingElementTemplate = function () {
	        var tagName = lang_1.isPresent(this.element) ? this.element : 'div';
	        var classAttr = this.classNames.length > 0 ? " class=\"" + this.classNames.join(' ') + "\"" : '';
	        var attrs = '';
	        for (var i = 0; i < this.attrs.length; i += 2) {
	            var attrName = this.attrs[i];
	            var attrValue = this.attrs[i + 1] !== '' ? "=\"" + this.attrs[i + 1] + "\"" : '';
	            attrs += " " + attrName + attrValue;
	        }
	        return "<" + tagName + classAttr + attrs + "></" + tagName + ">";
	    };
	    CssSelector.prototype.addAttribute = function (name, value) {
	        if (value === void 0) { value = _EMPTY_ATTR_VALUE; }
	        this.attrs.push(name);
	        if (lang_1.isPresent(value)) {
	            value = value.toLowerCase();
	        }
	        else {
	            value = _EMPTY_ATTR_VALUE;
	        }
	        this.attrs.push(value);
	    };
	    CssSelector.prototype.addClassName = function (name) { this.classNames.push(name.toLowerCase()); };
	    CssSelector.prototype.toString = function () {
	        var res = '';
	        if (lang_1.isPresent(this.element)) {
	            res += this.element;
	        }
	        if (lang_1.isPresent(this.classNames)) {
	            for (var i = 0; i < this.classNames.length; i++) {
	                res += '.' + this.classNames[i];
	            }
	        }
	        if (lang_1.isPresent(this.attrs)) {
	            for (var i = 0; i < this.attrs.length;) {
	                var attrName = this.attrs[i++];
	                var attrValue = this.attrs[i++];
	                res += '[' + attrName;
	                if (attrValue.length > 0) {
	                    res += '=' + attrValue;
	                }
	                res += ']';
	            }
	        }
	        this.notSelectors.forEach(function (notSelector) { return res += ":not(" + notSelector + ")"; });
	        return res;
	    };
	    return CssSelector;
	}());
	exports.CssSelector = CssSelector;
	/**
	 * Reads a list of CssSelectors and allows to calculate which ones
	 * are contained in a given CssSelector.
	 */
	var SelectorMatcher = (function () {
	    function SelectorMatcher() {
	        this._elementMap = new collection_1.Map();
	        this._elementPartialMap = new collection_1.Map();
	        this._classMap = new collection_1.Map();
	        this._classPartialMap = new collection_1.Map();
	        this._attrValueMap = new collection_1.Map();
	        this._attrValuePartialMap = new collection_1.Map();
	        this._listContexts = [];
	    }
	    SelectorMatcher.createNotMatcher = function (notSelectors) {
	        var notMatcher = new SelectorMatcher();
	        notMatcher.addSelectables(notSelectors, null);
	        return notMatcher;
	    };
	    SelectorMatcher.prototype.addSelectables = function (cssSelectors, callbackCtxt) {
	        var listContext = null;
	        if (cssSelectors.length > 1) {
	            listContext = new SelectorListContext(cssSelectors);
	            this._listContexts.push(listContext);
	        }
	        for (var i = 0; i < cssSelectors.length; i++) {
	            this._addSelectable(cssSelectors[i], callbackCtxt, listContext);
	        }
	    };
	    /**
	     * Add an object that can be found later on by calling `match`.
	     * @param cssSelector A css selector
	     * @param callbackCtxt An opaque object that will be given to the callback of the `match` function
	     */
	    SelectorMatcher.prototype._addSelectable = function (cssSelector, callbackCtxt, listContext) {
	        var matcher = this;
	        var element = cssSelector.element;
	        var classNames = cssSelector.classNames;
	        var attrs = cssSelector.attrs;
	        var selectable = new SelectorContext(cssSelector, callbackCtxt, listContext);
	        if (lang_1.isPresent(element)) {
	            var isTerminal = attrs.length === 0 && classNames.length === 0;
	            if (isTerminal) {
	                this._addTerminal(matcher._elementMap, element, selectable);
	            }
	            else {
	                matcher = this._addPartial(matcher._elementPartialMap, element);
	            }
	        }
	        if (lang_1.isPresent(classNames)) {
	            for (var index = 0; index < classNames.length; index++) {
	                var isTerminal = attrs.length === 0 && index === classNames.length - 1;
	                var className = classNames[index];
	                if (isTerminal) {
	                    this._addTerminal(matcher._classMap, className, selectable);
	                }
	                else {
	                    matcher = this._addPartial(matcher._classPartialMap, className);
	                }
	            }
	        }
	        if (lang_1.isPresent(attrs)) {
	            for (var index = 0; index < attrs.length;) {
	                var isTerminal = index === attrs.length - 2;
	                var attrName = attrs[index++];
	                var attrValue = attrs[index++];
	                if (isTerminal) {
	                    var terminalMap = matcher._attrValueMap;
	                    var terminalValuesMap = terminalMap.get(attrName);
	                    if (lang_1.isBlank(terminalValuesMap)) {
	                        terminalValuesMap = new collection_1.Map();
	                        terminalMap.set(attrName, terminalValuesMap);
	                    }
	                    this._addTerminal(terminalValuesMap, attrValue, selectable);
	                }
	                else {
	                    var parttialMap = matcher._attrValuePartialMap;
	                    var partialValuesMap = parttialMap.get(attrName);
	                    if (lang_1.isBlank(partialValuesMap)) {
	                        partialValuesMap = new collection_1.Map();
	                        parttialMap.set(attrName, partialValuesMap);
	                    }
	                    matcher = this._addPartial(partialValuesMap, attrValue);
	                }
	            }
	        }
	    };
	    SelectorMatcher.prototype._addTerminal = function (map, name, selectable) {
	        var terminalList = map.get(name);
	        if (lang_1.isBlank(terminalList)) {
	            terminalList = [];
	            map.set(name, terminalList);
	        }
	        terminalList.push(selectable);
	    };
	    SelectorMatcher.prototype._addPartial = function (map, name) {
	        var matcher = map.get(name);
	        if (lang_1.isBlank(matcher)) {
	            matcher = new SelectorMatcher();
	            map.set(name, matcher);
	        }
	        return matcher;
	    };
	    /**
	     * Find the objects that have been added via `addSelectable`
	     * whose css selector is contained in the given css selector.
	     * @param cssSelector A css selector
	     * @param matchedCallback This callback will be called with the object handed into `addSelectable`
	     * @return boolean true if a match was found
	    */
	    SelectorMatcher.prototype.match = function (cssSelector, matchedCallback) {
	        var result = false;
	        var element = cssSelector.element;
	        var classNames = cssSelector.classNames;
	        var attrs = cssSelector.attrs;
	        for (var i = 0; i < this._listContexts.length; i++) {
	            this._listContexts[i].alreadyMatched = false;
	        }
	        result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
	        result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) ||
	            result;
	        if (lang_1.isPresent(classNames)) {
	            for (var index = 0; index < classNames.length; index++) {
	                var className = classNames[index];
	                result =
	                    this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
	                result =
	                    this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) ||
	                        result;
	            }
	        }
	        if (lang_1.isPresent(attrs)) {
	            for (var index = 0; index < attrs.length;) {
	                var attrName = attrs[index++];
	                var attrValue = attrs[index++];
	                var terminalValuesMap = this._attrValueMap.get(attrName);
	                if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
	                    result = this._matchTerminal(terminalValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) ||
	                        result;
	                }
	                result = this._matchTerminal(terminalValuesMap, attrValue, cssSelector, matchedCallback) ||
	                    result;
	                var partialValuesMap = this._attrValuePartialMap.get(attrName);
	                if (!lang_1.StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
	                    result = this._matchPartial(partialValuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) ||
	                        result;
	                }
	                result =
	                    this._matchPartial(partialValuesMap, attrValue, cssSelector, matchedCallback) || result;
	            }
	        }
	        return result;
	    };
	    /** @internal */
	    SelectorMatcher.prototype._matchTerminal = function (map, name, cssSelector, matchedCallback) {
	        if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
	            return false;
	        }
	        var selectables = map.get(name);
	        var starSelectables = map.get("*");
	        if (lang_1.isPresent(starSelectables)) {
	            selectables = selectables.concat(starSelectables);
	        }
	        if (lang_1.isBlank(selectables)) {
	            return false;
	        }
	        var selectable;
	        var result = false;
	        for (var index = 0; index < selectables.length; index++) {
	            selectable = selectables[index];
	            result = selectable.finalize(cssSelector, matchedCallback) || result;
	        }
	        return result;
	    };
	    /** @internal */
	    SelectorMatcher.prototype._matchPartial = function (map, name, cssSelector, matchedCallback /*: (c: CssSelector, a: any) => void*/) {
	        if (lang_1.isBlank(map) || lang_1.isBlank(name)) {
	            return false;
	        }
	        var nestedSelector = map.get(name);
	        if (lang_1.isBlank(nestedSelector)) {
	            return false;
	        }
	        // TODO(perf): get rid of recursion and measure again
	        // TODO(perf): don't pass the whole selector into the recursion,
	        // but only the not processed parts
	        return nestedSelector.match(cssSelector, matchedCallback);
	    };
	    return SelectorMatcher;
	}());
	exports.SelectorMatcher = SelectorMatcher;
	var SelectorListContext = (function () {
	    function SelectorListContext(selectors) {
	        this.selectors = selectors;
	        this.alreadyMatched = false;
	    }
	    return SelectorListContext;
	}());
	exports.SelectorListContext = SelectorListContext;
	// Store context to pass back selector and context when a selector is matched
	var SelectorContext = (function () {
	    function SelectorContext(selector, cbContext, listContext) {
	        this.selector = selector;
	        this.cbContext = cbContext;
	        this.listContext = listContext;
	        this.notSelectors = selector.notSelectors;
	    }
	    SelectorContext.prototype.finalize = function (cssSelector, callback) {
	        var result = true;
	        if (this.notSelectors.length > 0 &&
	            (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
	            var notMatcher = SelectorMatcher.createNotMatcher(this.notSelectors);
	            result = !notMatcher.match(cssSelector, null);
	        }
	        if (result && lang_1.isPresent(callback) &&
	            (lang_1.isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
	            if (lang_1.isPresent(this.listContext)) {
	                this.listContext.alreadyMatched = true;
	            }
	            callback(this.selector, this.cbContext);
	        }
	        return result;
	    };
	    return SelectorContext;
	}());
	exports.SelectorContext = SelectorContext;


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	/**
	 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
	 *
	 * Please make sure to keep to edits in sync with the source file.
	 *
	 * Source:
	 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
	 *
	 * The original file level comment is reproduced below
	 */
	/*
	  This is a limited shim for ShadowDOM css styling.
	  https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html#styles
	
	  The intention here is to support only the styling features which can be
	  relatively simply implemented. The goal is to allow users to avoid the
	  most obvious pitfalls and do so without compromising performance significantly.
	  For ShadowDOM styling that's not covered here, a set of best practices
	  can be provided that should allow users to accomplish more complex styling.
	
	  The following is a list of specific ShadowDOM styling features and a brief
	  discussion of the approach used to shim.
	
	  Shimmed features:
	
	  * :host, :host-context: ShadowDOM allows styling of the shadowRoot's host
	  element using the :host rule. To shim this feature, the :host styles are
	  reformatted and prefixed with a given scope name and promoted to a
	  document level stylesheet.
	  For example, given a scope name of .foo, a rule like this:
	
	    :host {
	        background: red;
	      }
	    }
	
	  becomes:
	
	    .foo {
	      background: red;
	    }
	
	  * encapsultion: Styles defined within ShadowDOM, apply only to
	  dom inside the ShadowDOM. Polymer uses one of two techniques to implement
	  this feature.
	
	  By default, rules are prefixed with the host element tag name
	  as a descendant selector. This ensures styling does not leak out of the 'top'
	  of the element's ShadowDOM. For example,
	
	  div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	  x-foo div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	
	  Alternatively, if WebComponents.ShadowCSS.strictStyling is set to true then
	  selectors are scoped by adding an attribute selector suffix to each
	  simple selector that contains the host element tag name. Each element
	  in the element's ShadowDOM template is also given the scope attribute.
	  Thus, these rules match only elements that have the scope attribute.
	  For example, given a scope name of x-foo, a rule like this:
	
	    div {
	      font-weight: bold;
	    }
	
	  becomes:
	
	    div[x-foo] {
	      font-weight: bold;
	    }
	
	  Note that elements that are dynamically added to a scope must have the scope
	  selector added to them manually.
	
	  * upper/lower bound encapsulation: Styles which are defined outside a
	  shadowRoot should not cross the ShadowDOM boundary and should not apply
	  inside a shadowRoot.
	
	  This styling behavior is not emulated. Some possible ways to do this that
	  were rejected due to complexity and/or performance concerns include: (1) reset
	  every possible property for every possible selector for a given scope name;
	  (2) re-implement css in javascript.
	
	  As an alternative, users should make sure to use selectors
	  specific to the scope in which they are working.
	
	  * ::distributed: This behavior is not emulated. It's often not necessary
	  to style the contents of a specific insertion point and instead, descendants
	  of the host element can be styled selectively. Users can also create an
	  extra node around an insertion point and style that node's contents
	  via descendent selectors. For example, with a shadowRoot like this:
	
	    <style>
	      ::content(div) {
	        background: red;
	      }
	    </style>
	    <content></content>
	
	  could become:
	
	    <style>
	      / *@polyfill .content-container div * /
	      ::content(div) {
	        background: red;
	      }
	    </style>
	    <div class="content-container">
	      <content></content>
	    </div>
	
	  Note the use of @polyfill in the comment above a ShadowDOM specific style
	  declaration. This is a directive to the styling shim to use the selector
	  in comments in lieu of the next selector when running under polyfill.
	*/
	var ShadowCss = (function () {
	    function ShadowCss() {
	        this.strictStyling = true;
	    }
	    /*
	    * Shim some cssText with the given selector. Returns cssText that can
	    * be included in the document via WebComponents.ShadowCSS.addCssToDocument(css).
	    *
	    * When strictStyling is true:
	    * - selector is the attribute added to all elements inside the host,
	    * - hostSelector is the attribute added to the host itself.
	    */
	    ShadowCss.prototype.shimCssText = function (cssText, selector, hostSelector) {
	        if (hostSelector === void 0) { hostSelector = ''; }
	        cssText = stripComments(cssText);
	        cssText = this._insertDirectives(cssText);
	        return this._scopeCssText(cssText, selector, hostSelector);
	    };
	    ShadowCss.prototype._insertDirectives = function (cssText) {
	        cssText = this._insertPolyfillDirectivesInCssText(cssText);
	        return this._insertPolyfillRulesInCssText(cssText);
	    };
	    /*
	     * Process styles to convert native ShadowDOM rules that will trip
	     * up the css parser; we rely on decorating the stylesheet with inert rules.
	     *
	     * For example, we convert this rule:
	     *
	     * polyfill-next-selector { content: ':host menu-item'; }
	     * ::content menu-item {
	     *
	     * to this:
	     *
	     * scopeName menu-item {
	     *
	    **/
	    ShadowCss.prototype._insertPolyfillDirectivesInCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentNextSelectorRe, function (m) { return m[1] + '{'; });
	    };
	    /*
	     * Process styles to add rules which will only apply under the polyfill
	     *
	     * For example, we convert this rule:
	     *
	     * polyfill-rule {
	     *   content: ':host menu-item';
	     * ...
	     * }
	     *
	     * to this:
	     *
	     * scopeName menu-item {...}
	     *
	    **/
	    ShadowCss.prototype._insertPolyfillRulesInCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        return lang_1.StringWrapper.replaceAllMapped(cssText, _cssContentRuleRe, function (m) {
	            var rule = m[0];
	            rule = lang_1.StringWrapper.replace(rule, m[1], '');
	            rule = lang_1.StringWrapper.replace(rule, m[2], '');
	            return m[3] + rule;
	        });
	    };
	    /* Ensure styles are scoped. Pseudo-scoping takes a rule like:
	     *
	     *  .foo {... }
	     *
	     *  and converts this to
	     *
	     *  scopeName .foo { ... }
	    */
	    ShadowCss.prototype._scopeCssText = function (cssText, scopeSelector, hostSelector) {
	        var unscoped = this._extractUnscopedRulesFromCssText(cssText);
	        cssText = this._insertPolyfillHostInCssText(cssText);
	        cssText = this._convertColonHost(cssText);
	        cssText = this._convertColonHostContext(cssText);
	        cssText = this._convertShadowDOMSelectors(cssText);
	        if (lang_1.isPresent(scopeSelector)) {
	            cssText = this._scopeSelectors(cssText, scopeSelector, hostSelector);
	        }
	        cssText = cssText + '\n' + unscoped;
	        return cssText.trim();
	    };
	    /*
	     * Process styles to add rules which will only apply under the polyfill
	     * and do not process via CSSOM. (CSSOM is destructive to rules on rare
	     * occasions, e.g. -webkit-calc on Safari.)
	     * For example, we convert this rule:
	     *
	     * @polyfill-unscoped-rule {
	     *   content: 'menu-item';
	     * ... }
	     *
	     * to this:
	     *
	     * menu-item {...}
	     *
	    **/
	    ShadowCss.prototype._extractUnscopedRulesFromCssText = function (cssText) {
	        // Difference with webcomponents.js: does not handle comments
	        var r = '', m;
	        var matcher = lang_1.RegExpWrapper.matcher(_cssContentUnscopedRuleRe, cssText);
	        while (lang_1.isPresent(m = lang_1.RegExpMatcherWrapper.next(matcher))) {
	            var rule = m[0];
	            rule = lang_1.StringWrapper.replace(rule, m[2], '');
	            rule = lang_1.StringWrapper.replace(rule, m[1], m[3]);
	            r += rule + '\n\n';
	        }
	        return r;
	    };
	    /*
	     * convert a rule like :host(.foo) > .bar { }
	     *
	     * to
	     *
	     * scopeName.foo > .bar
	    */
	    ShadowCss.prototype._convertColonHost = function (cssText) {
	        return this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer);
	    };
	    /*
	     * convert a rule like :host-context(.foo) > .bar { }
	     *
	     * to
	     *
	     * scopeName.foo > .bar, .foo scopeName > .bar { }
	     *
	     * and
	     *
	     * :host-context(.foo:host) .bar { ... }
	     *
	     * to
	     *
	     * scopeName.foo .bar { ... }
	    */
	    ShadowCss.prototype._convertColonHostContext = function (cssText) {
	        return this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer);
	    };
	    ShadowCss.prototype._convertColonRule = function (cssText, regExp, partReplacer) {
	        // p1 = :host, p2 = contents of (), p3 rest of rule
	        return lang_1.StringWrapper.replaceAllMapped(cssText, regExp, function (m) {
	            if (lang_1.isPresent(m[2])) {
	                var parts = m[2].split(','), r = [];
	                for (var i = 0; i < parts.length; i++) {
	                    var p = parts[i];
	                    if (lang_1.isBlank(p))
	                        break;
	                    p = p.trim();
	                    r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
	                }
	                return r.join(',');
	            }
	            else {
	                return _polyfillHostNoCombinator + m[3];
	            }
	        });
	    };
	    ShadowCss.prototype._colonHostContextPartReplacer = function (host, part, suffix) {
	        if (lang_1.StringWrapper.contains(part, _polyfillHost)) {
	            return this._colonHostPartReplacer(host, part, suffix);
	        }
	        else {
	            return host + part + suffix + ', ' + part + ' ' + host + suffix;
	        }
	    };
	    ShadowCss.prototype._colonHostPartReplacer = function (host, part, suffix) {
	        return host + lang_1.StringWrapper.replace(part, _polyfillHost, '') + suffix;
	    };
	    /*
	     * Convert combinators like ::shadow and pseudo-elements like ::content
	     * by replacing with space.
	    */
	    ShadowCss.prototype._convertShadowDOMSelectors = function (cssText) {
	        for (var i = 0; i < _shadowDOMSelectorsRe.length; i++) {
	            cssText = lang_1.StringWrapper.replaceAll(cssText, _shadowDOMSelectorsRe[i], ' ');
	        }
	        return cssText;
	    };
	    // change a selector like 'div' to 'name div'
	    ShadowCss.prototype._scopeSelectors = function (cssText, scopeSelector, hostSelector) {
	        var _this = this;
	        return processRules(cssText, function (rule) {
	            var selector = rule.selector;
	            var content = rule.content;
	            if (rule.selector[0] != '@' || rule.selector.startsWith('@page')) {
	                selector =
	                    _this._scopeSelector(rule.selector, scopeSelector, hostSelector, _this.strictStyling);
	            }
	            else if (rule.selector.startsWith('@media')) {
	                content = _this._scopeSelectors(rule.content, scopeSelector, hostSelector);
	            }
	            return new CssRule(selector, content);
	        });
	    };
	    ShadowCss.prototype._scopeSelector = function (selector, scopeSelector, hostSelector, strict) {
	        var r = [], parts = selector.split(',');
	        for (var i = 0; i < parts.length; i++) {
	            var p = parts[i].trim();
	            var deepParts = lang_1.StringWrapper.split(p, _shadowDeepSelectors);
	            var shallowPart = deepParts[0];
	            if (this._selectorNeedsScoping(shallowPart, scopeSelector)) {
	                deepParts[0] = strict && !lang_1.StringWrapper.contains(shallowPart, _polyfillHostNoCombinator) ?
	                    this._applyStrictSelectorScope(shallowPart, scopeSelector) :
	                    this._applySelectorScope(shallowPart, scopeSelector, hostSelector);
	            }
	            // replace /deep/ with a space for child selectors
	            r.push(deepParts.join(' '));
	        }
	        return r.join(', ');
	    };
	    ShadowCss.prototype._selectorNeedsScoping = function (selector, scopeSelector) {
	        var re = this._makeScopeMatcher(scopeSelector);
	        return !lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(re, selector));
	    };
	    ShadowCss.prototype._makeScopeMatcher = function (scopeSelector) {
	        var lre = /\[/g;
	        var rre = /\]/g;
	        scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, lre, '\\[');
	        scopeSelector = lang_1.StringWrapper.replaceAll(scopeSelector, rre, '\\]');
	        return lang_1.RegExpWrapper.create('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
	    };
	    ShadowCss.prototype._applySelectorScope = function (selector, scopeSelector, hostSelector) {
	        // Difference from webcomponentsjs: scopeSelector could not be an array
	        return this._applySimpleSelectorScope(selector, scopeSelector, hostSelector);
	    };
	    // scope via name and [is=name]
	    ShadowCss.prototype._applySimpleSelectorScope = function (selector, scopeSelector, hostSelector) {
	        if (lang_1.isPresent(lang_1.RegExpWrapper.firstMatch(_polyfillHostRe, selector))) {
	            var replaceBy = this.strictStyling ? "[" + hostSelector + "]" : scopeSelector;
	            selector = lang_1.StringWrapper.replace(selector, _polyfillHostNoCombinator, replaceBy);
	            return lang_1.StringWrapper.replaceAll(selector, _polyfillHostRe, replaceBy + ' ');
	        }
	        else {
	            return scopeSelector + ' ' + selector;
	        }
	    };
	    // return a selector with [name] suffix on each simple selector
	    // e.g. .foo.bar > .zot becomes .foo[name].bar[name] > .zot[name]  /** @internal */
	    ShadowCss.prototype._applyStrictSelectorScope = function (selector, scopeSelector) {
	        var isRe = /\[is=([^\]]*)\]/g;
	        scopeSelector = lang_1.StringWrapper.replaceAllMapped(scopeSelector, isRe, function (m) { return m[1]; });
	        var splits = [' ', '>', '+', '~'], scoped = selector, attrName = '[' + scopeSelector + ']';
	        for (var i = 0; i < splits.length; i++) {
	            var sep = splits[i];
	            var parts = scoped.split(sep);
	            scoped = parts.map(function (p) {
	                // remove :host since it should be unnecessary
	                var t = lang_1.StringWrapper.replaceAll(p.trim(), _polyfillHostRe, '');
	                if (t.length > 0 && !collection_1.ListWrapper.contains(splits, t) &&
	                    !lang_1.StringWrapper.contains(t, attrName)) {
	                    var re = /([^:]*)(:*)(.*)/g;
	                    var m = lang_1.RegExpWrapper.firstMatch(re, t);
	                    if (lang_1.isPresent(m)) {
	                        p = m[1] + attrName + m[2] + m[3];
	                    }
	                }
	                return p;
	            })
	                .join(sep);
	        }
	        return scoped;
	    };
	    ShadowCss.prototype._insertPolyfillHostInCssText = function (selector) {
	        selector = lang_1.StringWrapper.replaceAll(selector, _colonHostContextRe, _polyfillHostContext);
	        selector = lang_1.StringWrapper.replaceAll(selector, _colonHostRe, _polyfillHost);
	        return selector;
	    };
	    return ShadowCss;
	}());
	exports.ShadowCss = ShadowCss;
	var _cssContentNextSelectorRe = /polyfill-next-selector[^}]*content:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim;
	var _cssContentRuleRe = /(polyfill-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
	var _cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim;
	var _polyfillHost = '-shadowcsshost';
	// note: :host-context pre-processed to -shadowcsshostcontext.
	var _polyfillHostContext = '-shadowcsscontext';
	var _parenSuffix = ')(?:\\((' +
	    '(?:\\([^)(]*\\)|[^)(]*)+?' +
	    ')\\))?([^,{]*)';
	var _cssColonHostRe = lang_1.RegExpWrapper.create('(' + _polyfillHost + _parenSuffix, 'im');
	var _cssColonHostContextRe = lang_1.RegExpWrapper.create('(' + _polyfillHostContext + _parenSuffix, 'im');
	var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
	var _shadowDOMSelectorsRe = [
	    /::shadow/g,
	    /::content/g,
	    // Deprecated selectors
	    // TODO(vicb): see https://github.com/angular/clang-format/issues/16
	    // clang-format off
	    /\/shadow-deep\//g,
	    /\/shadow\//g,
	];
	var _shadowDeepSelectors = /(?:>>>)|(?:\/deep\/)/g;
	var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
	var _polyfillHostRe = lang_1.RegExpWrapper.create(_polyfillHost, 'im');
	var _colonHostRe = /:host/gim;
	var _colonHostContextRe = /:host-context/gim;
	var _commentRe = /\/\*[\s\S]*?\*\//g;
	function stripComments(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, _commentRe, function (_) { return ''; });
	}
	var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
	var _curlyRe = /([{}])/g;
	var OPEN_CURLY = '{';
	var CLOSE_CURLY = '}';
	var BLOCK_PLACEHOLDER = '%BLOCK%';
	var CssRule = (function () {
	    function CssRule(selector, content) {
	        this.selector = selector;
	        this.content = content;
	    }
	    return CssRule;
	}());
	exports.CssRule = CssRule;
	function processRules(input, ruleCallback) {
	    var inputWithEscapedBlocks = escapeBlocks(input);
	    var nextBlockIndex = 0;
	    return lang_1.StringWrapper.replaceAllMapped(inputWithEscapedBlocks.escapedString, _ruleRe, function (m) {
	        var selector = m[2];
	        var content = '';
	        var suffix = m[4];
	        var contentPrefix = '';
	        if (lang_1.isPresent(m[4]) && m[4].startsWith('{' + BLOCK_PLACEHOLDER)) {
	            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
	            suffix = m[4].substring(BLOCK_PLACEHOLDER.length + 1);
	            contentPrefix = '{';
	        }
	        var rule = ruleCallback(new CssRule(selector, content));
	        return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
	    });
	}
	exports.processRules = processRules;
	var StringWithEscapedBlocks = (function () {
	    function StringWithEscapedBlocks(escapedString, blocks) {
	        this.escapedString = escapedString;
	        this.blocks = blocks;
	    }
	    return StringWithEscapedBlocks;
	}());
	function escapeBlocks(input) {
	    var inputParts = lang_1.StringWrapper.split(input, _curlyRe);
	    var resultParts = [];
	    var escapedBlocks = [];
	    var bracketCount = 0;
	    var currentBlockParts = [];
	    for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
	        var part = inputParts[partIndex];
	        if (part == CLOSE_CURLY) {
	            bracketCount--;
	        }
	        if (bracketCount > 0) {
	            currentBlockParts.push(part);
	        }
	        else {
	            if (currentBlockParts.length > 0) {
	                escapedBlocks.push(currentBlockParts.join(''));
	                resultParts.push(BLOCK_PLACEHOLDER);
	                currentBlockParts = [];
	            }
	            resultParts.push(part);
	        }
	        if (part == OPEN_CURLY) {
	            bracketCount++;
	        }
	    }
	    if (currentBlockParts.length > 0) {
	        escapedBlocks.push(currentBlockParts.join(''));
	        resultParts.push(BLOCK_PLACEHOLDER);
	    }
	    return new StringWithEscapedBlocks(resultParts.join(''), escapedBlocks);
	}


/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var MODULE_REGEXP = /#MODULE\[([^\]]*)\]/g;
	function moduleRef(moduleUrl) {
	    return "#MODULE[" + moduleUrl + "]";
	}
	exports.moduleRef = moduleRef;
	/**
	 * Represents generated source code with module references. Internal to the Angular compiler.
	 */
	var SourceModule = (function () {
	    function SourceModule(moduleUrl, sourceWithModuleRefs) {
	        this.moduleUrl = moduleUrl;
	        this.sourceWithModuleRefs = sourceWithModuleRefs;
	    }
	    SourceModule.getSourceWithoutImports = function (sourceWithModuleRefs) {
	        return lang_1.StringWrapper.replaceAllMapped(sourceWithModuleRefs, MODULE_REGEXP, function (match) { return ''; });
	    };
	    SourceModule.prototype.getSourceWithImports = function () {
	        var _this = this;
	        var moduleAliases = {};
	        var imports = [];
	        var newSource = lang_1.StringWrapper.replaceAllMapped(this.sourceWithModuleRefs, MODULE_REGEXP, function (match) {
	            var moduleUrl = match[1];
	            var alias = moduleAliases[moduleUrl];
	            if (lang_1.isBlank(alias)) {
	                if (moduleUrl == _this.moduleUrl) {
	                    alias = '';
	                }
	                else {
	                    alias = "import" + imports.length;
	                    imports.push([moduleUrl, alias]);
	                }
	                moduleAliases[moduleUrl] = alias;
	            }
	            return alias.length > 0 ? alias + "." : '';
	        });
	        return new SourceWithImports(newSource, imports);
	    };
	    return SourceModule;
	}());
	exports.SourceModule = SourceModule;
	var SourceExpression = (function () {
	    function SourceExpression(declarations, expression) {
	        this.declarations = declarations;
	        this.expression = expression;
	    }
	    return SourceExpression;
	}());
	exports.SourceExpression = SourceExpression;
	var SourceExpressions = (function () {
	    function SourceExpressions(declarations, expressions) {
	        this.declarations = declarations;
	        this.expressions = expressions;
	    }
	    return SourceExpressions;
	}());
	exports.SourceExpressions = SourceExpressions;
	/**
	 * Represents generated source code with imports. Internal to the Angular compiler.
	 */
	var SourceWithImports = (function () {
	    function SourceWithImports(source, imports) {
	        this.source = source;
	        this.imports = imports;
	    }
	    return SourceWithImports;
	}());
	exports.SourceWithImports = SourceWithImports;


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var source_module_1 = __webpack_require__(33);
	var view_1 = __webpack_require__(30);
	var xhr_1 = __webpack_require__(35);
	var lang_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(10);
	var shadow_css_1 = __webpack_require__(272);
	var url_resolver_1 = __webpack_require__(44);
	var style_url_resolver_1 = __webpack_require__(111);
	var util_1 = __webpack_require__(23);
	var di_1 = __webpack_require__(7);
	var COMPONENT_VARIABLE = '%COMP%';
	var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
	var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
	var StyleCompiler = (function () {
	    function StyleCompiler(_xhr, _urlResolver) {
	        this._xhr = _xhr;
	        this._urlResolver = _urlResolver;
	        this._styleCache = new Map();
	        this._shadowCss = new shadow_css_1.ShadowCss();
	    }
	    StyleCompiler.prototype.compileComponentRuntime = function (template) {
	        var styles = template.styles;
	        var styleAbsUrls = template.styleUrls;
	        return this._loadStyles(styles, styleAbsUrls, template.encapsulation === view_1.ViewEncapsulation.Emulated);
	    };
	    StyleCompiler.prototype.compileComponentCodeGen = function (template) {
	        var shim = template.encapsulation === view_1.ViewEncapsulation.Emulated;
	        return this._styleCodeGen(template.styles, template.styleUrls, shim);
	    };
	    StyleCompiler.prototype.compileStylesheetCodeGen = function (stylesheetUrl, cssText) {
	        var styleWithImports = style_url_resolver_1.extractStyleUrls(this._urlResolver, stylesheetUrl, cssText);
	        return [
	            this._styleModule(stylesheetUrl, false, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, false)),
	            this._styleModule(stylesheetUrl, true, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, true))
	        ];
	    };
	    StyleCompiler.prototype.clearCache = function () { this._styleCache.clear(); };
	    StyleCompiler.prototype._loadStyles = function (plainStyles, absUrls, encapsulate) {
	        var _this = this;
	        var promises = absUrls.map(function (absUrl) {
	            var cacheKey = "" + absUrl + (encapsulate ? '.shim' : '');
	            var result = _this._styleCache.get(cacheKey);
	            if (lang_1.isBlank(result)) {
	                result = _this._xhr.get(absUrl).then(function (style) {
	                    var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, absUrl, style);
	                    return _this._loadStyles([styleWithImports.style], styleWithImports.styleUrls, encapsulate);
	                });
	                _this._styleCache.set(cacheKey, result);
	            }
	            return result;
	        });
	        return async_1.PromiseWrapper.all(promises).then(function (nestedStyles) {
	            var result = plainStyles.map(function (plainStyle) { return _this._shimIfNeeded(plainStyle, encapsulate); });
	            nestedStyles.forEach(function (styles) { return result.push(styles); });
	            return result;
	        });
	    };
	    StyleCompiler.prototype._styleCodeGen = function (plainStyles, absUrls, shim) {
	        var _this = this;
	        var arrayPrefix = lang_1.IS_DART ? "const" : '';
	        var styleExpressions = plainStyles.map(function (plainStyle) { return util_1.escapeSingleQuoteString(_this._shimIfNeeded(plainStyle, shim)); });
	        for (var i = 0; i < absUrls.length; i++) {
	            var moduleUrl = this._createModuleUrl(absUrls[i], shim);
	            styleExpressions.push(source_module_1.moduleRef(moduleUrl) + "STYLES");
	        }
	        var expressionSource = arrayPrefix + " [" + styleExpressions.join(',') + "]";
	        return new source_module_1.SourceExpression([], expressionSource);
	    };
	    StyleCompiler.prototype._styleModule = function (stylesheetUrl, shim, expression) {
	        var moduleSource = "\n      " + expression.declarations.join('\n') + "\n      " + util_1.codeGenExportVariable('STYLES') + expression.expression + ";\n    ";
	        return new source_module_1.SourceModule(this._createModuleUrl(stylesheetUrl, shim), moduleSource);
	    };
	    StyleCompiler.prototype._shimIfNeeded = function (style, shim) {
	        return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
	    };
	    StyleCompiler.prototype._createModuleUrl = function (stylesheetUrl, shim) {
	        return shim ? stylesheetUrl + ".shim" + util_1.MODULE_SUFFIX : "" + stylesheetUrl + util_1.MODULE_SUFFIX;
	    };
	    StyleCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver])
	    ], StyleCompiler);
	    return StyleCompiler;
	}());
	exports.StyleCompiler = StyleCompiler;


/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';// Some of the code comes from WebComponents.JS
	// https://github.com/webcomponents/webcomponentsjs/blob/master/src/HTMLImports/path.js
	"use strict";
	var lang_1 = __webpack_require__(1);
	var StyleWithImports = (function () {
	    function StyleWithImports(style, styleUrls) {
	        this.style = style;
	        this.styleUrls = styleUrls;
	    }
	    return StyleWithImports;
	}());
	exports.StyleWithImports = StyleWithImports;
	function isStyleUrlResolvable(url) {
	    if (lang_1.isBlank(url) || url.length === 0 || url[0] == '/')
	        return false;
	    var schemeMatch = lang_1.RegExpWrapper.firstMatch(_urlWithSchemaRe, url);
	    return lang_1.isBlank(schemeMatch) || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
	}
	exports.isStyleUrlResolvable = isStyleUrlResolvable;
	/**
	 * Rewrites stylesheets by resolving and removing the @import urls that
	 * are either relative or don't have a `package:` scheme
	 */
	function extractStyleUrls(resolver, baseUrl, cssText) {
	    var foundUrls = [];
	    var modifiedCssText = lang_1.StringWrapper.replaceAllMapped(cssText, _cssImportRe, function (m) {
	        var url = lang_1.isPresent(m[1]) ? m[1] : m[2];
	        if (!isStyleUrlResolvable(url)) {
	            // Do not attempt to resolve non-package absolute URLs with URI scheme
	            return m[0];
	        }
	        foundUrls.push(resolver.resolve(baseUrl, url));
	        return '';
	    });
	    return new StyleWithImports(modifiedCssText, foundUrls);
	}
	exports.extractStyleUrls = extractStyleUrls;
	var _cssImportRe = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
	// TODO: can't use /^[^:/?#.]+:/g due to clang-format bug:
	//       https://github.com/angular/angular/issues/4596
	var _urlWithSchemaRe = /^([a-zA-Z\-\+\.]+):/g;


/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	/**
	 * A segment of text within the template.
	 */
	var TextAst = (function () {
	    function TextAst(value, ngContentIndex, sourceSpan) {
	        this.value = value;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    TextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
	    return TextAst;
	}());
	exports.TextAst = TextAst;
	/**
	 * A bound expression within the text of a template.
	 */
	var BoundTextAst = (function () {
	    function BoundTextAst(value, ngContentIndex, sourceSpan) {
	        this.value = value;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundTextAst.prototype.visit = function (visitor, context) {
	        return visitor.visitBoundText(this, context);
	    };
	    return BoundTextAst;
	}());
	exports.BoundTextAst = BoundTextAst;
	/**
	 * A plain attribute on an element.
	 */
	var AttrAst = (function () {
	    function AttrAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    AttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
	    return AttrAst;
	}());
	exports.AttrAst = AttrAst;
	/**
	 * A binding for an element property (e.g. `[property]="expression"`).
	 */
	var BoundElementPropertyAst = (function () {
	    function BoundElementPropertyAst(name, type, value, unit, sourceSpan) {
	        this.name = name;
	        this.type = type;
	        this.value = value;
	        this.unit = unit;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundElementPropertyAst.prototype.visit = function (visitor, context) {
	        return visitor.visitElementProperty(this, context);
	    };
	    return BoundElementPropertyAst;
	}());
	exports.BoundElementPropertyAst = BoundElementPropertyAst;
	/**
	 * A binding for an element event (e.g. `(event)="handler()"`).
	 */
	var BoundEventAst = (function () {
	    function BoundEventAst(name, target, handler, sourceSpan) {
	        this.name = name;
	        this.target = target;
	        this.handler = handler;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundEventAst.prototype.visit = function (visitor, context) {
	        return visitor.visitEvent(this, context);
	    };
	    Object.defineProperty(BoundEventAst.prototype, "fullName", {
	        get: function () {
	            if (lang_1.isPresent(this.target)) {
	                return this.target + ":" + this.name;
	            }
	            else {
	                return this.name;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BoundEventAst;
	}());
	exports.BoundEventAst = BoundEventAst;
	/**
	 * A variable declaration on an element (e.g. `#var="expression"`).
	 */
	var VariableAst = (function () {
	    function VariableAst(name, value, sourceSpan) {
	        this.name = name;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    VariableAst.prototype.visit = function (visitor, context) {
	        return visitor.visitVariable(this, context);
	    };
	    return VariableAst;
	}());
	exports.VariableAst = VariableAst;
	/**
	 * An element declaration in a template.
	 */
	var ElementAst = (function () {
	    function ElementAst(name, attrs, inputs, outputs, exportAsVars, directives, children, ngContentIndex, sourceSpan) {
	        this.name = name;
	        this.attrs = attrs;
	        this.inputs = inputs;
	        this.outputs = outputs;
	        this.exportAsVars = exportAsVars;
	        this.directives = directives;
	        this.children = children;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    ElementAst.prototype.visit = function (visitor, context) {
	        return visitor.visitElement(this, context);
	    };
	    /**
	     * Whether the element has any active bindings (inputs, outputs, vars, or directives).
	     */
	    ElementAst.prototype.isBound = function () {
	        return (this.inputs.length > 0 || this.outputs.length > 0 || this.exportAsVars.length > 0 ||
	            this.directives.length > 0);
	    };
	    /**
	     * Get the component associated with this element, if any.
	     */
	    ElementAst.prototype.getComponent = function () {
	        return this.directives.length > 0 && this.directives[0].directive.isComponent ?
	            this.directives[0].directive :
	            null;
	    };
	    return ElementAst;
	}());
	exports.ElementAst = ElementAst;
	/**
	 * A `<template>` element included in an Angular template.
	 */
	var EmbeddedTemplateAst = (function () {
	    function EmbeddedTemplateAst(attrs, outputs, vars, directives, children, ngContentIndex, sourceSpan) {
	        this.attrs = attrs;
	        this.outputs = outputs;
	        this.vars = vars;
	        this.directives = directives;
	        this.children = children;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    EmbeddedTemplateAst.prototype.visit = function (visitor, context) {
	        return visitor.visitEmbeddedTemplate(this, context);
	    };
	    return EmbeddedTemplateAst;
	}());
	exports.EmbeddedTemplateAst = EmbeddedTemplateAst;
	/**
	 * A directive property with a bound value (e.g. `*ngIf="condition").
	 */
	var BoundDirectivePropertyAst = (function () {
	    function BoundDirectivePropertyAst(directiveName, templateName, value, sourceSpan) {
	        this.directiveName = directiveName;
	        this.templateName = templateName;
	        this.value = value;
	        this.sourceSpan = sourceSpan;
	    }
	    BoundDirectivePropertyAst.prototype.visit = function (visitor, context) {
	        return visitor.visitDirectiveProperty(this, context);
	    };
	    return BoundDirectivePropertyAst;
	}());
	exports.BoundDirectivePropertyAst = BoundDirectivePropertyAst;
	/**
	 * A directive declared on an element.
	 */
	var DirectiveAst = (function () {
	    function DirectiveAst(directive, inputs, hostProperties, hostEvents, exportAsVars, sourceSpan) {
	        this.directive = directive;
	        this.inputs = inputs;
	        this.hostProperties = hostProperties;
	        this.hostEvents = hostEvents;
	        this.exportAsVars = exportAsVars;
	        this.sourceSpan = sourceSpan;
	    }
	    DirectiveAst.prototype.visit = function (visitor, context) {
	        return visitor.visitDirective(this, context);
	    };
	    return DirectiveAst;
	}());
	exports.DirectiveAst = DirectiveAst;
	/**
	 * Position where content is to be projected (instance of `<ng-content>` in a template).
	 */
	var NgContentAst = (function () {
	    function NgContentAst(index, ngContentIndex, sourceSpan) {
	        this.index = index;
	        this.ngContentIndex = ngContentIndex;
	        this.sourceSpan = sourceSpan;
	    }
	    NgContentAst.prototype.visit = function (visitor, context) {
	        return visitor.visitNgContent(this, context);
	    };
	    return NgContentAst;
	}());
	exports.NgContentAst = NgContentAst;
	/**
	 * Enumeration of types of property bindings.
	 */
	(function (PropertyBindingType) {
	    /**
	     * A normal binding to a property (e.g. `[property]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Property"] = 0] = "Property";
	    /**
	     * A binding to an element attribute (e.g. `[attr.name]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Attribute"] = 1] = "Attribute";
	    /**
	     * A binding to a CSS class (e.g. `[class.name]="condition"`).
	     */
	    PropertyBindingType[PropertyBindingType["Class"] = 2] = "Class";
	    /**
	     * A binding to a style rule (e.g. `[style.rule]="expression"`).
	     */
	    PropertyBindingType[PropertyBindingType["Style"] = 3] = "Style";
	})(exports.PropertyBindingType || (exports.PropertyBindingType = {}));
	var PropertyBindingType = exports.PropertyBindingType;
	/**
	 * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
	 */
	function templateVisitAll(visitor, asts, context) {
	    if (context === void 0) { context = null; }
	    var result = [];
	    asts.forEach(function (ast) {
	        var astResult = ast.visit(visitor, context);
	        if (lang_1.isPresent(astResult)) {
	            result.push(astResult);
	        }
	    });
	    return result;
	}
	exports.templateVisitAll = templateVisitAll;


/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(10);
	var directive_metadata_1 = __webpack_require__(64);
	var template_ast_1 = __webpack_require__(34);
	var di_1 = __webpack_require__(7);
	var source_module_1 = __webpack_require__(33);
	var change_detector_compiler_1 = __webpack_require__(172);
	var style_compiler_1 = __webpack_require__(176);
	var view_compiler_1 = __webpack_require__(179);
	var proto_view_compiler_1 = __webpack_require__(109);
	var template_parser_1 = __webpack_require__(113);
	var template_normalizer_1 = __webpack_require__(177);
	var runtime_metadata_1 = __webpack_require__(174);
	var view_1 = __webpack_require__(49);
	var change_detection_1 = __webpack_require__(18);
	var resolved_metadata_cache_1 = __webpack_require__(198);
	var util_1 = __webpack_require__(23);
	exports.METADATA_CACHE_MODULE_REF = source_module_1.moduleRef('package:angular2/src/core/linker/resolved_metadata_cache' + util_1.MODULE_SUFFIX);
	/**
	 * An internal module of the Angular compiler that begins with component types,
	 * extracts templates, and eventually produces a compiled version of the component
	 * ready for linking into an application.
	 */
	var TemplateCompiler = (function () {
	    function TemplateCompiler(_runtimeMetadataResolver, _templateNormalizer, _templateParser, _styleCompiler, _cdCompiler, _protoViewCompiler, _viewCompiler, _resolvedMetadataCache, _genConfig) {
	        this._runtimeMetadataResolver = _runtimeMetadataResolver;
	        this._templateNormalizer = _templateNormalizer;
	        this._templateParser = _templateParser;
	        this._styleCompiler = _styleCompiler;
	        this._cdCompiler = _cdCompiler;
	        this._protoViewCompiler = _protoViewCompiler;
	        this._viewCompiler = _viewCompiler;
	        this._resolvedMetadataCache = _resolvedMetadataCache;
	        this._genConfig = _genConfig;
	        this._hostCacheKeys = new Map();
	        this._compiledTemplateCache = new Map();
	        this._compiledTemplateDone = new Map();
	    }
	    TemplateCompiler.prototype.normalizeDirectiveMetadata = function (directive) {
	        if (!directive.isComponent) {
	            // For non components there is nothing to be normalized yet.
	            return async_1.PromiseWrapper.resolve(directive);
	        }
	        return this._templateNormalizer.normalizeTemplate(directive.type, directive.template)
	            .then(function (normalizedTemplate) { return new directive_metadata_1.CompileDirectiveMetadata({
	            type: directive.type,
	            isComponent: directive.isComponent,
	            dynamicLoadable: directive.dynamicLoadable,
	            selector: directive.selector,
	            exportAs: directive.exportAs,
	            changeDetection: directive.changeDetection,
	            inputs: directive.inputs,
	            outputs: directive.outputs,
	            hostListeners: directive.hostListeners,
	            hostProperties: directive.hostProperties,
	            hostAttributes: directive.hostAttributes,
	            lifecycleHooks: directive.lifecycleHooks,
	            providers: directive.providers,
	            viewProviders: directive.viewProviders,
	            queries: directive.queries,
	            viewQueries: directive.viewQueries,
	            template: normalizedTemplate
	        }); });
	    };
	    TemplateCompiler.prototype.compileHostComponentRuntime = function (type) {
	        var compMeta = this._runtimeMetadataResolver.getDirectiveMetadata(type);
	        var hostCacheKey = this._hostCacheKeys.get(type);
	        if (lang_1.isBlank(hostCacheKey)) {
	            hostCacheKey = new Object();
	            this._hostCacheKeys.set(type, hostCacheKey);
	            assertComponent(compMeta);
	            var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
	            this._compileComponentRuntime(hostCacheKey, hostMeta, [compMeta], [], []);
	        }
	        return this._compiledTemplateDone.get(hostCacheKey)
	            .then(function (compiledTemplate) {
	            return new view_1.HostViewFactory(compMeta.selector, compiledTemplate.viewFactory);
	        });
	    };
	    TemplateCompiler.prototype.clearCache = function () {
	        this._styleCompiler.clearCache();
	        this._compiledTemplateCache.clear();
	        this._compiledTemplateDone.clear();
	        this._hostCacheKeys.clear();
	    };
	    TemplateCompiler.prototype.compileTemplatesCodeGen = function (components) {
	        var _this = this;
	        if (components.length === 0) {
	            throw new exceptions_1.BaseException('No components given');
	        }
	        var declarations = [];
	        components.forEach(function (componentWithDirs) {
	            var compMeta = componentWithDirs.component;
	            assertComponent(compMeta);
	            _this._compileComponentCodeGen(compMeta, componentWithDirs.directives, componentWithDirs.pipes, declarations);
	            if (compMeta.dynamicLoadable) {
	                var hostMeta = directive_metadata_1.createHostComponentMeta(compMeta.type, compMeta.selector);
	                var viewFactoryExpression = _this._compileComponentCodeGen(hostMeta, [compMeta], [], declarations);
	                var constructionKeyword = lang_1.IS_DART ? 'const' : 'new';
	                var compiledTemplateExpr = constructionKeyword + " " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "HostViewFactory('" + compMeta.selector + "'," + viewFactoryExpression + ")";
	                var varName = codeGenHostViewFactoryName(compMeta.type);
	                declarations.push("" + util_1.codeGenExportVariable(varName) + compiledTemplateExpr + ";");
	            }
	        });
	        var moduleUrl = components[0].component.type.moduleUrl;
	        return new source_module_1.SourceModule("" + templateModuleUrl(moduleUrl), declarations.join('\n'));
	    };
	    TemplateCompiler.prototype.compileStylesheetCodeGen = function (stylesheetUrl, cssText) {
	        return this._styleCompiler.compileStylesheetCodeGen(stylesheetUrl, cssText);
	    };
	    TemplateCompiler.prototype._compileComponentRuntime = function (cacheKey, compMeta, viewDirectives, pipes, compilingComponentsPath) {
	        var _this = this;
	        var uniqViewDirectives = removeDuplicates(viewDirectives);
	        var uniqViewPipes = removeDuplicates(pipes);
	        var compiledTemplate = this._compiledTemplateCache.get(cacheKey);
	        var done = this._compiledTemplateDone.get(cacheKey);
	        if (lang_1.isBlank(compiledTemplate)) {
	            compiledTemplate = new CompiledTemplate();
	            this._compiledTemplateCache.set(cacheKey, compiledTemplate);
	            done = async_1.PromiseWrapper
	                .all([this._styleCompiler.compileComponentRuntime(compMeta.template)].concat(uniqViewDirectives.map(function (dirMeta) { return _this.normalizeDirectiveMetadata(dirMeta); })))
	                .then(function (stylesAndNormalizedViewDirMetas) {
	                var normalizedViewDirMetas = stylesAndNormalizedViewDirMetas.slice(1);
	                var styles = stylesAndNormalizedViewDirMetas[0];
	                var parsedTemplate = _this._templateParser.parse(compMeta.template.template, normalizedViewDirMetas, uniqViewPipes, compMeta.type.name);
	                var childPromises = [];
	                var usedDirectives = DirectiveCollector.findUsedDirectives(parsedTemplate);
	                usedDirectives.components.forEach(function (component) { return _this._compileNestedComponentRuntime(component, compilingComponentsPath, childPromises); });
	                return async_1.PromiseWrapper.all(childPromises)
	                    .then(function (_) {
	                    var filteredPipes = filterPipes(parsedTemplate, uniqViewPipes);
	                    compiledTemplate.init(_this._createViewFactoryRuntime(compMeta, parsedTemplate, usedDirectives.directives, styles, filteredPipes));
	                    return compiledTemplate;
	                });
	            });
	            this._compiledTemplateDone.set(cacheKey, done);
	        }
	        return compiledTemplate;
	    };
	    TemplateCompiler.prototype._compileNestedComponentRuntime = function (childComponentDir, parentCompilingComponentsPath, childPromises) {
	        var compilingComponentsPath = collection_1.ListWrapper.clone(parentCompilingComponentsPath);
	        var childCacheKey = childComponentDir.type.runtime;
	        var childViewDirectives = this._runtimeMetadataResolver.getViewDirectivesMetadata(childComponentDir.type.runtime);
	        var childViewPipes = this._runtimeMetadataResolver.getViewPipesMetadata(childComponentDir.type.runtime);
	        var childIsRecursive = collection_1.ListWrapper.contains(compilingComponentsPath, childCacheKey);
	        compilingComponentsPath.push(childCacheKey);
	        this._compileComponentRuntime(childCacheKey, childComponentDir, childViewDirectives, childViewPipes, compilingComponentsPath);
	        if (!childIsRecursive) {
	            // Only wait for a child if it is not a cycle
	            childPromises.push(this._compiledTemplateDone.get(childCacheKey));
	        }
	    };
	    TemplateCompiler.prototype._createViewFactoryRuntime = function (compMeta, parsedTemplate, directives, styles, pipes) {
	        var _this = this;
	        if (lang_1.IS_DART || !this._genConfig.useJit) {
	            var changeDetectorFactories = this._cdCompiler.compileComponentRuntime(compMeta.type, compMeta.changeDetection, parsedTemplate);
	            var protoViews = this._protoViewCompiler.compileProtoViewRuntime(this._resolvedMetadataCache, compMeta, parsedTemplate, pipes);
	            return this._viewCompiler.compileComponentRuntime(compMeta, parsedTemplate, styles, protoViews.protoViews, changeDetectorFactories, function (compMeta) { return _this._getNestedComponentViewFactory(compMeta); });
	        }
	        else {
	            var declarations = [];
	            var viewFactoryExpr = this._createViewFactoryCodeGen('resolvedMetadataCache', compMeta, new source_module_1.SourceExpression([], 'styles'), parsedTemplate, pipes, declarations);
	            var vars = { 'exports': {}, 'styles': styles, 'resolvedMetadataCache': this._resolvedMetadataCache };
	            directives.forEach(function (dirMeta) {
	                vars[dirMeta.type.name] = dirMeta.type.runtime;
	                if (dirMeta.isComponent && dirMeta.type.runtime !== compMeta.type.runtime) {
	                    vars[("viewFactory_" + dirMeta.type.name + "0")] = _this._getNestedComponentViewFactory(dirMeta);
	                }
	            });
	            pipes.forEach(function (pipeMeta) { return vars[pipeMeta.type.name] = pipeMeta.type.runtime; });
	            var declarationsWithoutImports = source_module_1.SourceModule.getSourceWithoutImports(declarations.join('\n'));
	            return lang_1.evalExpression("viewFactory_" + compMeta.type.name, viewFactoryExpr, declarationsWithoutImports, mergeStringMaps([vars, change_detector_compiler_1.CHANGE_DETECTION_JIT_IMPORTS, proto_view_compiler_1.PROTO_VIEW_JIT_IMPORTS, view_compiler_1.VIEW_JIT_IMPORTS]));
	        }
	    };
	    TemplateCompiler.prototype._getNestedComponentViewFactory = function (compMeta) {
	        return this._compiledTemplateCache.get(compMeta.type.runtime).viewFactory;
	    };
	    TemplateCompiler.prototype._compileComponentCodeGen = function (compMeta, directives, pipes, targetDeclarations) {
	        var uniqueDirectives = removeDuplicates(directives);
	        var uniqPipes = removeDuplicates(pipes);
	        var styleExpr = this._styleCompiler.compileComponentCodeGen(compMeta.template);
	        var parsedTemplate = this._templateParser.parse(compMeta.template.template, uniqueDirectives, uniqPipes, compMeta.type.name);
	        var filteredPipes = filterPipes(parsedTemplate, uniqPipes);
	        return this._createViewFactoryCodeGen(exports.METADATA_CACHE_MODULE_REF + "CODEGEN_RESOLVED_METADATA_CACHE", compMeta, styleExpr, parsedTemplate, filteredPipes, targetDeclarations);
	    };
	    TemplateCompiler.prototype._createViewFactoryCodeGen = function (resolvedMetadataCacheExpr, compMeta, styleExpr, parsedTemplate, pipes, targetDeclarations) {
	        var changeDetectorsExprs = this._cdCompiler.compileComponentCodeGen(compMeta.type, compMeta.changeDetection, parsedTemplate);
	        var protoViewExprs = this._protoViewCompiler.compileProtoViewCodeGen(new util_1.Expression(resolvedMetadataCacheExpr), compMeta, parsedTemplate, pipes);
	        var viewFactoryExpr = this._viewCompiler.compileComponentCodeGen(compMeta, parsedTemplate, styleExpr, protoViewExprs.protoViews, changeDetectorsExprs, codeGenComponentViewFactoryName);
	        util_1.addAll(changeDetectorsExprs.declarations, targetDeclarations);
	        util_1.addAll(protoViewExprs.declarations, targetDeclarations);
	        util_1.addAll(viewFactoryExpr.declarations, targetDeclarations);
	        return viewFactoryExpr.expression;
	    };
	    TemplateCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [runtime_metadata_1.RuntimeMetadataResolver, template_normalizer_1.TemplateNormalizer, template_parser_1.TemplateParser, style_compiler_1.StyleCompiler, change_detector_compiler_1.ChangeDetectionCompiler, proto_view_compiler_1.ProtoViewCompiler, view_compiler_1.ViewCompiler, resolved_metadata_cache_1.ResolvedMetadataCache, change_detection_1.ChangeDetectorGenConfig])
	    ], TemplateCompiler);
	    return TemplateCompiler;
	}());
	exports.TemplateCompiler = TemplateCompiler;
	var NormalizedComponentWithViewDirectives = (function () {
	    function NormalizedComponentWithViewDirectives(component, directives, pipes) {
	        this.component = component;
	        this.directives = directives;
	        this.pipes = pipes;
	    }
	    return NormalizedComponentWithViewDirectives;
	}());
	exports.NormalizedComponentWithViewDirectives = NormalizedComponentWithViewDirectives;
	var CompiledTemplate = (function () {
	    function CompiledTemplate() {
	        this.viewFactory = null;
	    }
	    CompiledTemplate.prototype.init = function (viewFactory) { this.viewFactory = viewFactory; };
	    return CompiledTemplate;
	}());
	function assertComponent(meta) {
	    if (!meta.isComponent) {
	        throw new exceptions_1.BaseException("Could not compile '" + meta.type.name + "' because it is not a component.");
	    }
	}
	function templateModuleUrl(moduleUrl) {
	    var urlWithoutSuffix = moduleUrl.substring(0, moduleUrl.length - util_1.MODULE_SUFFIX.length);
	    return urlWithoutSuffix + ".template" + util_1.MODULE_SUFFIX;
	}
	function codeGenHostViewFactoryName(type) {
	    return "hostViewFactory_" + type.name;
	}
	function codeGenComponentViewFactoryName(nestedCompType) {
	    return source_module_1.moduleRef(templateModuleUrl(nestedCompType.type.moduleUrl)) + "viewFactory_" + nestedCompType.type.name + "0";
	}
	function mergeStringMaps(maps) {
	    var result = {};
	    maps.forEach(function (map) { collection_1.StringMapWrapper.forEach(map, function (value, key) { result[key] = value; }); });
	    return result;
	}
	function removeDuplicates(items) {
	    var res = [];
	    items.forEach(function (item) {
	        var hasMatch = res.filter(function (r) { return r.type.name == item.type.name && r.type.moduleUrl == item.type.moduleUrl &&
	            r.type.runtime == item.type.runtime; })
	            .length > 0;
	        if (!hasMatch) {
	            res.push(item);
	        }
	    });
	    return res;
	}
	var DirectiveCollector = (function () {
	    function DirectiveCollector() {
	        this.directives = [];
	        this.components = [];
	    }
	    DirectiveCollector.findUsedDirectives = function (parsedTemplate) {
	        var collector = new DirectiveCollector();
	        template_ast_1.templateVisitAll(collector, parsedTemplate);
	        return collector;
	    };
	    DirectiveCollector.prototype.visitBoundText = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitText = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitNgContent = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitElement = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    DirectiveCollector.prototype.visitEmbeddedTemplate = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    DirectiveCollector.prototype.visitVariable = function (ast, ctx) { return null; };
	    DirectiveCollector.prototype.visitAttr = function (ast, attrNameAndValues) { return null; };
	    DirectiveCollector.prototype.visitDirective = function (ast, ctx) {
	        if (ast.directive.isComponent) {
	            this.components.push(ast.directive);
	        }
	        this.directives.push(ast.directive);
	        return null;
	    };
	    DirectiveCollector.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        return null;
	    };
	    DirectiveCollector.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    DirectiveCollector.prototype.visitElementProperty = function (ast, context) { return null; };
	    return DirectiveCollector;
	}());
	function filterPipes(template, allPipes) {
	    var visitor = new PipeVisitor();
	    template_ast_1.templateVisitAll(visitor, template);
	    return allPipes.filter(function (pipeMeta) { return collection_1.SetWrapper.has(visitor.collector.pipes, pipeMeta.name); });
	}
	var PipeVisitor = (function () {
	    function PipeVisitor() {
	        this.collector = new template_parser_1.PipeCollector();
	    }
	    PipeVisitor.prototype.visitBoundText = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitText = function (ast, context) { return null; };
	    PipeVisitor.prototype.visitNgContent = function (ast, context) { return null; };
	    PipeVisitor.prototype.visitElement = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.inputs);
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    PipeVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
	        template_ast_1.templateVisitAll(this, ast.outputs);
	        template_ast_1.templateVisitAll(this, ast.directives);
	        template_ast_1.templateVisitAll(this, ast.children);
	        return null;
	    };
	    PipeVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    PipeVisitor.prototype.visitAttr = function (ast, attrNameAndValues) { return null; };
	    PipeVisitor.prototype.visitDirective = function (ast, ctx) {
	        template_ast_1.templateVisitAll(this, ast.inputs);
	        template_ast_1.templateVisitAll(this, ast.hostEvents);
	        template_ast_1.templateVisitAll(this, ast.hostProperties);
	        return null;
	    };
	    PipeVisitor.prototype.visitEvent = function (ast, eventTargetAndNames) {
	        ast.handler.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitDirectiveProperty = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    PipeVisitor.prototype.visitElementProperty = function (ast, context) {
	        ast.value.visit(this.collector);
	        return null;
	    };
	    return PipeVisitor;
	}());


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var directive_metadata_1 = __webpack_require__(64);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var async_1 = __webpack_require__(10);
	var xhr_1 = __webpack_require__(35);
	var url_resolver_1 = __webpack_require__(44);
	var style_url_resolver_1 = __webpack_require__(111);
	var di_1 = __webpack_require__(7);
	var view_1 = __webpack_require__(30);
	var html_ast_1 = __webpack_require__(106);
	var html_parser_1 = __webpack_require__(107);
	var template_preparser_1 = __webpack_require__(178);
	var TemplateNormalizer = (function () {
	    function TemplateNormalizer(_xhr, _urlResolver, _htmlParser) {
	        this._xhr = _xhr;
	        this._urlResolver = _urlResolver;
	        this._htmlParser = _htmlParser;
	    }
	    TemplateNormalizer.prototype.normalizeTemplate = function (directiveType, template) {
	        var _this = this;
	        if (lang_1.isPresent(template.template)) {
	            return async_1.PromiseWrapper.resolve(this.normalizeLoadedTemplate(directiveType, template, template.template, directiveType.moduleUrl));
	        }
	        else if (lang_1.isPresent(template.templateUrl)) {
	            var sourceAbsUrl = this._urlResolver.resolve(directiveType.moduleUrl, template.templateUrl);
	            return this._xhr.get(sourceAbsUrl)
	                .then(function (templateContent) { return _this.normalizeLoadedTemplate(directiveType, template, templateContent, sourceAbsUrl); });
	        }
	        else {
	            throw new exceptions_1.BaseException("No template specified for component " + directiveType.name);
	        }
	    };
	    TemplateNormalizer.prototype.normalizeLoadedTemplate = function (directiveType, templateMeta, template, templateAbsUrl) {
	        var _this = this;
	        var rootNodesAndErrors = this._htmlParser.parse(template, directiveType.name);
	        if (rootNodesAndErrors.errors.length > 0) {
	            var errorString = rootNodesAndErrors.errors.join('\n');
	            throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
	        }
	        var visitor = new TemplatePreparseVisitor();
	        html_ast_1.htmlVisitAll(visitor, rootNodesAndErrors.rootNodes);
	        var allStyles = templateMeta.styles.concat(visitor.styles);
	        var allStyleAbsUrls = visitor.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable)
	            .map(function (url) { return _this._urlResolver.resolve(templateAbsUrl, url); })
	            .concat(templateMeta.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable)
	            .map(function (url) { return _this._urlResolver.resolve(directiveType.moduleUrl, url); }));
	        var allResolvedStyles = allStyles.map(function (style) {
	            var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, templateAbsUrl, style);
	            styleWithImports.styleUrls.forEach(function (styleUrl) { return allStyleAbsUrls.push(styleUrl); });
	            return styleWithImports.style;
	        });
	        var encapsulation = templateMeta.encapsulation;
	        if (encapsulation === view_1.ViewEncapsulation.Emulated && allResolvedStyles.length === 0 &&
	            allStyleAbsUrls.length === 0) {
	            encapsulation = view_1.ViewEncapsulation.None;
	        }
	        return new directive_metadata_1.CompileTemplateMetadata({
	            encapsulation: encapsulation,
	            template: template,
	            templateUrl: templateAbsUrl,
	            styles: allResolvedStyles,
	            styleUrls: allStyleAbsUrls,
	            ngContentSelectors: visitor.ngContentSelectors
	        });
	    };
	    TemplateNormalizer = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [xhr_1.XHR, url_resolver_1.UrlResolver, html_parser_1.HtmlParser])
	    ], TemplateNormalizer);
	    return TemplateNormalizer;
	}());
	exports.TemplateNormalizer = TemplateNormalizer;
	var TemplatePreparseVisitor = (function () {
	    function TemplatePreparseVisitor() {
	        this.ngContentSelectors = [];
	        this.styles = [];
	        this.styleUrls = [];
	        this.ngNonBindableStackCount = 0;
	    }
	    TemplatePreparseVisitor.prototype.visitElement = function (ast, context) {
	        var preparsedElement = template_preparser_1.preparseElement(ast);
	        switch (preparsedElement.type) {
	            case template_preparser_1.PreparsedElementType.NG_CONTENT:
	                if (this.ngNonBindableStackCount === 0) {
	                    this.ngContentSelectors.push(preparsedElement.selectAttr);
	                }
	                break;
	            case template_preparser_1.PreparsedElementType.STYLE:
	                var textContent = '';
	                ast.children.forEach(function (child) {
	                    if (child instanceof html_ast_1.HtmlTextAst) {
	                        textContent += child.value;
	                    }
	                });
	                this.styles.push(textContent);
	                break;
	            case template_preparser_1.PreparsedElementType.STYLESHEET:
	                this.styleUrls.push(preparsedElement.hrefAttr);
	                break;
	            default:
	                // DDC reports this as error. See:
	                // https://github.com/dart-lang/dev_compiler/issues/428
	                break;
	        }
	        if (preparsedElement.nonBindable) {
	            this.ngNonBindableStackCount++;
	        }
	        html_ast_1.htmlVisitAll(this, ast.children);
	        if (preparsedElement.nonBindable) {
	            this.ngNonBindableStackCount--;
	        }
	        return null;
	    };
	    TemplatePreparseVisitor.prototype.visitComment = function (ast, context) { return null; };
	    TemplatePreparseVisitor.prototype.visitAttr = function (ast, context) { return null; };
	    TemplatePreparseVisitor.prototype.visitText = function (ast, context) { return null; };
	    return TemplatePreparseVisitor;
	}());


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	var lang_2 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var change_detection_1 = __webpack_require__(18);
	var html_parser_1 = __webpack_require__(107);
	var html_tags_1 = __webpack_require__(43);
	var parse_util_1 = __webpack_require__(108);
	var ast_1 = __webpack_require__(65);
	var template_ast_1 = __webpack_require__(34);
	var selector_1 = __webpack_require__(175);
	var element_schema_registry_1 = __webpack_require__(110);
	var template_preparser_1 = __webpack_require__(178);
	var style_url_resolver_1 = __webpack_require__(111);
	var html_ast_1 = __webpack_require__(106);
	var util_1 = __webpack_require__(23);
	// Group 1 = "bind-"
	// Group 2 = "var-" or "#"
	// Group 3 = "on-"
	// Group 4 = "bindon-"
	// Group 5 = the identifier after "bind-", "var-/#", or "on-"
	// Group 6 = identifier inside [()]
	// Group 7 = identifier inside []
	// Group 8 = identifier inside ()
	var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(var-|#)|(on-)|(bindon-))(.+))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/g;
	var TEMPLATE_ELEMENT = 'template';
	var TEMPLATE_ATTR = 'template';
	var TEMPLATE_ATTR_PREFIX = '*';
	var CLASS_ATTR = 'class';
	var PROPERTY_PARTS_SEPARATOR = '.';
	var ATTRIBUTE_PREFIX = 'attr';
	var CLASS_PREFIX = 'class';
	var STYLE_PREFIX = 'style';
	var TEXT_CSS_SELECTOR = selector_1.CssSelector.parse('*')[0];
	/**
	 * Provides an array of {@link TemplateAstVisitor}s which will be used to transform
	 * parsed templates before compilation is invoked, allowing custom expression syntax
	 * and other advanced transformations.
	 *
	 * This is currently an internal-only feature and not meant for general use.
	 */
	exports.TEMPLATE_TRANSFORMS = lang_2.CONST_EXPR(new core_1.OpaqueToken('TemplateTransforms'));
	var TemplateParseError = (function (_super) {
	    __extends(TemplateParseError, _super);
	    function TemplateParseError(message, span) {
	        _super.call(this, span, message);
	    }
	    return TemplateParseError;
	}(parse_util_1.ParseError));
	exports.TemplateParseError = TemplateParseError;
	var TemplateParseResult = (function () {
	    function TemplateParseResult(templateAst, errors) {
	        this.templateAst = templateAst;
	        this.errors = errors;
	    }
	    return TemplateParseResult;
	}());
	exports.TemplateParseResult = TemplateParseResult;
	var TemplateParser = (function () {
	    function TemplateParser(_exprParser, _schemaRegistry, _htmlParser, transforms) {
	        this._exprParser = _exprParser;
	        this._schemaRegistry = _schemaRegistry;
	        this._htmlParser = _htmlParser;
	        this.transforms = transforms;
	    }
	    TemplateParser.prototype.parse = function (template, directives, pipes, templateUrl) {
	        var result = this.tryParse(template, directives, pipes, templateUrl);
	        if (lang_1.isPresent(result.errors)) {
	            var errorString = result.errors.join('\n');
	            throw new exceptions_1.BaseException("Template parse errors:\n" + errorString);
	        }
	        return result.templateAst;
	    };
	    TemplateParser.prototype.tryParse = function (template, directives, pipes, templateUrl) {
	        var parseVisitor = new TemplateParseVisitor(directives, pipes, this._exprParser, this._schemaRegistry);
	        var htmlAstWithErrors = this._htmlParser.parse(template, templateUrl);
	        var result = html_ast_1.htmlVisitAll(parseVisitor, htmlAstWithErrors.rootNodes, EMPTY_COMPONENT);
	        var errors = htmlAstWithErrors.errors.concat(parseVisitor.errors);
	        if (errors.length > 0) {
	            return new TemplateParseResult(result, errors);
	        }
	        if (lang_1.isPresent(this.transforms)) {
	            this.transforms.forEach(function (transform) { result = template_ast_1.templateVisitAll(transform, result); });
	        }
	        return new TemplateParseResult(result);
	    };
	    TemplateParser = __decorate([
	        core_1.Injectable(),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.TEMPLATE_TRANSFORMS)), 
	        __metadata('design:paramtypes', [change_detection_1.Parser, element_schema_registry_1.ElementSchemaRegistry, html_parser_1.HtmlParser, Array])
	    ], TemplateParser);
	    return TemplateParser;
	}());
	exports.TemplateParser = TemplateParser;
	var TemplateParseVisitor = (function () {
	    function TemplateParseVisitor(directives, pipes, _exprParser, _schemaRegistry) {
	        var _this = this;
	        this._exprParser = _exprParser;
	        this._schemaRegistry = _schemaRegistry;
	        this.errors = [];
	        this.directivesIndex = new Map();
	        this.ngContentCount = 0;
	        this.selectorMatcher = new selector_1.SelectorMatcher();
	        collection_1.ListWrapper.forEachWithIndex(directives, function (directive, index) {
	            var selector = selector_1.CssSelector.parse(directive.selector);
	            _this.selectorMatcher.addSelectables(selector, directive);
	            _this.directivesIndex.set(directive, index);
	        });
	        this.pipesByName = new Map();
	        pipes.forEach(function (pipe) { return _this.pipesByName.set(pipe.name, pipe); });
	    }
	    TemplateParseVisitor.prototype._reportError = function (message, sourceSpan) {
	        this.errors.push(new TemplateParseError(message, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseInterpolation = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseInterpolation(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseAction = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseAction(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseBinding = function (value, sourceSpan) {
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var ast = this._exprParser.parseBinding(value, sourceInfo);
	            this._checkPipes(ast, sourceSpan);
	            return ast;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return this._exprParser.wrapLiteralPrimitive('ERROR', sourceInfo);
	        }
	    };
	    TemplateParseVisitor.prototype._parseTemplateBindings = function (value, sourceSpan) {
	        var _this = this;
	        var sourceInfo = sourceSpan.start.toString();
	        try {
	            var bindings = this._exprParser.parseTemplateBindings(value, sourceInfo);
	            bindings.forEach(function (binding) {
	                if (lang_1.isPresent(binding.expression)) {
	                    _this._checkPipes(binding.expression, sourceSpan);
	                }
	            });
	            return bindings;
	        }
	        catch (e) {
	            this._reportError("" + e, sourceSpan);
	            return [];
	        }
	    };
	    TemplateParseVisitor.prototype._checkPipes = function (ast, sourceSpan) {
	        var _this = this;
	        if (lang_1.isPresent(ast)) {
	            var collector = new PipeCollector();
	            ast.visit(collector);
	            collector.pipes.forEach(function (pipeName) {
	                if (!_this.pipesByName.has(pipeName)) {
	                    _this._reportError("The pipe '" + pipeName + "' could not be found", sourceSpan);
	                }
	            });
	        }
	    };
	    TemplateParseVisitor.prototype.visitText = function (ast, component) {
	        var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
	        var expr = this._parseInterpolation(ast.value, ast.sourceSpan);
	        if (lang_1.isPresent(expr)) {
	            return new template_ast_1.BoundTextAst(expr, ngContentIndex, ast.sourceSpan);
	        }
	        else {
	            return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
	        }
	    };
	    TemplateParseVisitor.prototype.visitAttr = function (ast, contex) {
	        return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
	    };
	    TemplateParseVisitor.prototype.visitComment = function (ast, context) { return null; };
	    TemplateParseVisitor.prototype.visitElement = function (element, component) {
	        var _this = this;
	        var nodeName = element.name;
	        var preparsedElement = template_preparser_1.preparseElement(element);
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE) {
	            // Skipping <script> for security reasons
	            // Skipping <style> as we already processed them
	            // in the StyleCompiler
	            return null;
	        }
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET &&
	            style_url_resolver_1.isStyleUrlResolvable(preparsedElement.hrefAttr)) {
	            // Skipping stylesheets with either relative urls or package scheme as we already processed
	            // them in the StyleCompiler
	            return null;
	        }
	        var matchableAttrs = [];
	        var elementOrDirectiveProps = [];
	        var vars = [];
	        var events = [];
	        var templateElementOrDirectiveProps = [];
	        var templateVars = [];
	        var templateMatchableAttrs = [];
	        var hasInlineTemplates = false;
	        var attrs = [];
	        element.attrs.forEach(function (attr) {
	            var hasBinding = _this._parseAttr(attr, matchableAttrs, elementOrDirectiveProps, events, vars);
	            var hasTemplateBinding = _this._parseInlineTemplateBinding(attr, templateMatchableAttrs, templateElementOrDirectiveProps, templateVars);
	            if (!hasBinding && !hasTemplateBinding) {
	                // don't include the bindings as attributes as well in the AST
	                attrs.push(_this.visitAttr(attr, null));
	                matchableAttrs.push([attr.name, attr.value]);
	            }
	            if (hasTemplateBinding) {
	                hasInlineTemplates = true;
	            }
	        });
	        var lcElName = html_tags_1.splitNsName(nodeName.toLowerCase())[1];
	        var isTemplateElement = lcElName == TEMPLATE_ELEMENT;
	        var elementCssSelector = createElementCssSelector(nodeName, matchableAttrs);
	        var directives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, elementCssSelector), elementOrDirectiveProps, isTemplateElement ? [] : vars, element.sourceSpan);
	        var elementProps = this._createElementPropertyAsts(element.name, elementOrDirectiveProps, directives);
	        var children = html_ast_1.htmlVisitAll(preparsedElement.nonBindable ? NON_BINDABLE_VISITOR : this, element.children, Component.create(directives));
	        // Override the actual selector when the `ngProjectAs` attribute is provided
	        var projectionSelector = lang_1.isPresent(preparsedElement.projectAs) ?
	            selector_1.CssSelector.parse(preparsedElement.projectAs)[0] :
	            elementCssSelector;
	        var ngContentIndex = component.findNgContentIndex(projectionSelector);
	        var parsedElement;
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.NG_CONTENT) {
	            if (lang_1.isPresent(element.children) && element.children.length > 0) {
	                this._reportError("<ng-content> element cannot have content. <ng-content> must be immediately followed by </ng-content>", element.sourceSpan);
	            }
	            parsedElement = new template_ast_1.NgContentAst(this.ngContentCount++, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
	        }
	        else if (isTemplateElement) {
	            this._assertAllEventsPublishedByDirectives(directives, events);
	            this._assertNoComponentsNorElementBindingsOnTemplate(directives, elementProps, element.sourceSpan);
	            parsedElement =
	                new template_ast_1.EmbeddedTemplateAst(attrs, events, vars, directives, children, hasInlineTemplates ? null : ngContentIndex, element.sourceSpan);
	        }
	        else {
	            this._assertOnlyOneComponent(directives, element.sourceSpan);
	            var elementExportAsVars = vars.filter(function (varAst) { return varAst.value.length === 0; });
	            var ngContentIndex_1 = hasInlineTemplates ? null : component.findNgContentIndex(projectionSelector);
	            parsedElement =
	                new template_ast_1.ElementAst(nodeName, attrs, elementProps, events, elementExportAsVars, directives, children, hasInlineTemplates ? null : ngContentIndex_1, element.sourceSpan);
	        }
	        if (hasInlineTemplates) {
	            var templateCssSelector = createElementCssSelector(TEMPLATE_ELEMENT, templateMatchableAttrs);
	            var templateDirectives = this._createDirectiveAsts(element.name, this._parseDirectives(this.selectorMatcher, templateCssSelector), templateElementOrDirectiveProps, [], element.sourceSpan);
	            var templateElementProps = this._createElementPropertyAsts(element.name, templateElementOrDirectiveProps, templateDirectives);
	            this._assertNoComponentsNorElementBindingsOnTemplate(templateDirectives, templateElementProps, element.sourceSpan);
	            parsedElement = new template_ast_1.EmbeddedTemplateAst([], [], templateVars, templateDirectives, [parsedElement], ngContentIndex, element.sourceSpan);
	        }
	        return parsedElement;
	    };
	    TemplateParseVisitor.prototype._parseInlineTemplateBinding = function (attr, targetMatchableAttrs, targetProps, targetVars) {
	        var templateBindingsSource = null;
	        if (attr.name == TEMPLATE_ATTR) {
	            templateBindingsSource = attr.value;
	        }
	        else if (attr.name.startsWith(TEMPLATE_ATTR_PREFIX)) {
	            var key = attr.name.substring(TEMPLATE_ATTR_PREFIX.length); // remove the star
	            templateBindingsSource = (attr.value.length == 0) ? key : key + ' ' + attr.value;
	        }
	        if (lang_1.isPresent(templateBindingsSource)) {
	            var bindings = this._parseTemplateBindings(templateBindingsSource, attr.sourceSpan);
	            for (var i = 0; i < bindings.length; i++) {
	                var binding = bindings[i];
	                if (binding.keyIsVar) {
	                    targetVars.push(new template_ast_1.VariableAst(binding.key, binding.name, attr.sourceSpan));
	                    targetMatchableAttrs.push([binding.key, binding.name]);
	                }
	                else if (lang_1.isPresent(binding.expression)) {
	                    this._parsePropertyAst(binding.key, binding.expression, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                }
	                else {
	                    targetMatchableAttrs.push([binding.key, '']);
	                    this._parseLiteralAttr(binding.key, null, attr.sourceSpan, targetProps);
	                }
	            }
	            return true;
	        }
	        return false;
	    };
	    TemplateParseVisitor.prototype._parseAttr = function (attr, targetMatchableAttrs, targetProps, targetEvents, targetVars) {
	        var attrName = this._normalizeAttributeName(attr.name);
	        var attrValue = attr.value;
	        var bindParts = lang_1.RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
	        var hasBinding = false;
	        if (lang_1.isPresent(bindParts)) {
	            hasBinding = true;
	            if (lang_1.isPresent(bindParts[1])) {
	                this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	            }
	            else if (lang_1.isPresent(bindParts[2])) {
	                var identifier = bindParts[5];
	                this._parseVariable(identifier, attrValue, attr.sourceSpan, targetVars);
	            }
	            else if (lang_1.isPresent(bindParts[3])) {
	                this._parseEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[4])) {
	                this._parseProperty(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                this._parseAssignmentEvent(bindParts[5], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[6])) {
	                this._parseProperty(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	                this._parseAssignmentEvent(bindParts[6], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	            else if (lang_1.isPresent(bindParts[7])) {
	                this._parseProperty(bindParts[7], attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	            }
	            else if (lang_1.isPresent(bindParts[8])) {
	                this._parseEvent(bindParts[8], attrValue, attr.sourceSpan, targetMatchableAttrs, targetEvents);
	            }
	        }
	        else {
	            hasBinding = this._parsePropertyInterpolation(attrName, attrValue, attr.sourceSpan, targetMatchableAttrs, targetProps);
	        }
	        if (!hasBinding) {
	            this._parseLiteralAttr(attrName, attrValue, attr.sourceSpan, targetProps);
	        }
	        return hasBinding;
	    };
	    TemplateParseVisitor.prototype._normalizeAttributeName = function (attrName) {
	        return attrName.toLowerCase().startsWith('data-') ? attrName.substring(5) : attrName;
	    };
	    TemplateParseVisitor.prototype._parseVariable = function (identifier, value, sourceSpan, targetVars) {
	        if (identifier.indexOf('-') > -1) {
	            this._reportError("\"-\" is not allowed in variable names", sourceSpan);
	        }
	        targetVars.push(new template_ast_1.VariableAst(identifier, value, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseProperty = function (name, expression, sourceSpan, targetMatchableAttrs, targetProps) {
	        this._parsePropertyAst(name, this._parseBinding(expression, sourceSpan), sourceSpan, targetMatchableAttrs, targetProps);
	    };
	    TemplateParseVisitor.prototype._parsePropertyInterpolation = function (name, value, sourceSpan, targetMatchableAttrs, targetProps) {
	        var expr = this._parseInterpolation(value, sourceSpan);
	        if (lang_1.isPresent(expr)) {
	            this._parsePropertyAst(name, expr, sourceSpan, targetMatchableAttrs, targetProps);
	            return true;
	        }
	        return false;
	    };
	    TemplateParseVisitor.prototype._parsePropertyAst = function (name, ast, sourceSpan, targetMatchableAttrs, targetProps) {
	        targetMatchableAttrs.push([name, ast.source]);
	        targetProps.push(new BoundElementOrDirectiveProperty(name, ast, false, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseAssignmentEvent = function (name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
	        this._parseEvent(name + "Change", expression + "=$event", sourceSpan, targetMatchableAttrs, targetEvents);
	    };
	    TemplateParseVisitor.prototype._parseEvent = function (name, expression, sourceSpan, targetMatchableAttrs, targetEvents) {
	        // long format: 'target: eventName'
	        var parts = util_1.splitAtColon(name, [null, name]);
	        var target = parts[0];
	        var eventName = parts[1];
	        var ast = this._parseAction(expression, sourceSpan);
	        targetMatchableAttrs.push([name, ast.source]);
	        targetEvents.push(new template_ast_1.BoundEventAst(eventName, target, ast, sourceSpan));
	        // Don't detect directives for event names for now,
	        // so don't add the event name to the matchableAttrs
	    };
	    TemplateParseVisitor.prototype._parseLiteralAttr = function (name, value, sourceSpan, targetProps) {
	        targetProps.push(new BoundElementOrDirectiveProperty(name, this._exprParser.wrapLiteralPrimitive(value, ''), true, sourceSpan));
	    };
	    TemplateParseVisitor.prototype._parseDirectives = function (selectorMatcher, elementCssSelector) {
	        var _this = this;
	        var directives = [];
	        selectorMatcher.match(elementCssSelector, function (selector, directive) { directives.push(directive); });
	        // Need to sort the directives so that we get consistent results throughout,
	        // as selectorMatcher uses Maps inside.
	        // Also need to make components the first directive in the array
	        collection_1.ListWrapper.sort(directives, function (dir1, dir2) {
	            var dir1Comp = dir1.isComponent;
	            var dir2Comp = dir2.isComponent;
	            if (dir1Comp && !dir2Comp) {
	                return -1;
	            }
	            else if (!dir1Comp && dir2Comp) {
	                return 1;
	            }
	            else {
	                return _this.directivesIndex.get(dir1) - _this.directivesIndex.get(dir2);
	            }
	        });
	        return directives;
	    };
	    TemplateParseVisitor.prototype._createDirectiveAsts = function (elementName, directives, props, possibleExportAsVars, sourceSpan) {
	        var _this = this;
	        var matchedVariables = new Set();
	        var directiveAsts = directives.map(function (directive) {
	            var hostProperties = [];
	            var hostEvents = [];
	            var directiveProperties = [];
	            _this._createDirectiveHostPropertyAsts(elementName, directive.hostProperties, sourceSpan, hostProperties);
	            _this._createDirectiveHostEventAsts(directive.hostListeners, sourceSpan, hostEvents);
	            _this._createDirectivePropertyAsts(directive.inputs, props, directiveProperties);
	            var exportAsVars = [];
	            possibleExportAsVars.forEach(function (varAst) {
	                if ((varAst.value.length === 0 && directive.isComponent) ||
	                    (directive.exportAs == varAst.value)) {
	                    exportAsVars.push(varAst);
	                    matchedVariables.add(varAst.name);
	                }
	            });
	            return new template_ast_1.DirectiveAst(directive, directiveProperties, hostProperties, hostEvents, exportAsVars, sourceSpan);
	        });
	        possibleExportAsVars.forEach(function (varAst) {
	            if (varAst.value.length > 0 && !collection_1.SetWrapper.has(matchedVariables, varAst.name)) {
	                _this._reportError("There is no directive with \"exportAs\" set to \"" + varAst.value + "\"", varAst.sourceSpan);
	            }
	        });
	        return directiveAsts;
	    };
	    TemplateParseVisitor.prototype._createDirectiveHostPropertyAsts = function (elementName, hostProps, sourceSpan, targetPropertyAsts) {
	        var _this = this;
	        if (lang_1.isPresent(hostProps)) {
	            collection_1.StringMapWrapper.forEach(hostProps, function (expression, propName) {
	                var exprAst = _this._parseBinding(expression, sourceSpan);
	                targetPropertyAsts.push(_this._createElementPropertyAst(elementName, propName, exprAst, sourceSpan));
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createDirectiveHostEventAsts = function (hostListeners, sourceSpan, targetEventAsts) {
	        var _this = this;
	        if (lang_1.isPresent(hostListeners)) {
	            collection_1.StringMapWrapper.forEach(hostListeners, function (expression, propName) {
	                _this._parseEvent(propName, expression, sourceSpan, [], targetEventAsts);
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createDirectivePropertyAsts = function (directiveProperties, boundProps, targetBoundDirectiveProps) {
	        if (lang_1.isPresent(directiveProperties)) {
	            var boundPropsByName = new Map();
	            boundProps.forEach(function (boundProp) {
	                var prevValue = boundPropsByName.get(boundProp.name);
	                if (lang_1.isBlank(prevValue) || prevValue.isLiteral) {
	                    // give [a]="b" a higher precedence than a="b" on the same element
	                    boundPropsByName.set(boundProp.name, boundProp);
	                }
	            });
	            collection_1.StringMapWrapper.forEach(directiveProperties, function (elProp, dirProp) {
	                var boundProp = boundPropsByName.get(elProp);
	                // Bindings are optional, so this binding only needs to be set up if an expression is given.
	                if (lang_1.isPresent(boundProp)) {
	                    targetBoundDirectiveProps.push(new template_ast_1.BoundDirectivePropertyAst(dirProp, boundProp.name, boundProp.expression, boundProp.sourceSpan));
	                }
	            });
	        }
	    };
	    TemplateParseVisitor.prototype._createElementPropertyAsts = function (elementName, props, directives) {
	        var _this = this;
	        var boundElementProps = [];
	        var boundDirectivePropsIndex = new Map();
	        directives.forEach(function (directive) {
	            directive.inputs.forEach(function (prop) {
	                boundDirectivePropsIndex.set(prop.templateName, prop);
	            });
	        });
	        props.forEach(function (prop) {
	            if (!prop.isLiteral && lang_1.isBlank(boundDirectivePropsIndex.get(prop.name))) {
	                boundElementProps.push(_this._createElementPropertyAst(elementName, prop.name, prop.expression, prop.sourceSpan));
	            }
	        });
	        return boundElementProps;
	    };
	    TemplateParseVisitor.prototype._createElementPropertyAst = function (elementName, name, ast, sourceSpan) {
	        var unit = null;
	        var bindingType;
	        var boundPropertyName;
	        var parts = name.split(PROPERTY_PARTS_SEPARATOR);
	        if (parts.length === 1) {
	            boundPropertyName = this._schemaRegistry.getMappedPropName(parts[0]);
	            bindingType = template_ast_1.PropertyBindingType.Property;
	            if (!this._schemaRegistry.hasProperty(elementName, boundPropertyName)) {
	                this._reportError("Can't bind to '" + boundPropertyName + "' since it isn't a known native property", sourceSpan);
	            }
	        }
	        else {
	            if (parts[0] == ATTRIBUTE_PREFIX) {
	                boundPropertyName = parts[1];
	                var nsSeparatorIdx = boundPropertyName.indexOf(':');
	                if (nsSeparatorIdx > -1) {
	                    var ns = boundPropertyName.substring(0, nsSeparatorIdx);
	                    var name_1 = boundPropertyName.substring(nsSeparatorIdx + 1);
	                    boundPropertyName = html_tags_1.mergeNsAndName(ns, name_1);
	                }
	                bindingType = template_ast_1.PropertyBindingType.Attribute;
	            }
	            else if (parts[0] == CLASS_PREFIX) {
	                boundPropertyName = parts[1];
	                bindingType = template_ast_1.PropertyBindingType.Class;
	            }
	            else if (parts[0] == STYLE_PREFIX) {
	                unit = parts.length > 2 ? parts[2] : null;
	                boundPropertyName = parts[1];
	                bindingType = template_ast_1.PropertyBindingType.Style;
	            }
	            else {
	                this._reportError("Invalid property name '" + name + "'", sourceSpan);
	                bindingType = null;
	            }
	        }
	        return new template_ast_1.BoundElementPropertyAst(boundPropertyName, bindingType, ast, unit, sourceSpan);
	    };
	    TemplateParseVisitor.prototype._findComponentDirectiveNames = function (directives) {
	        var componentTypeNames = [];
	        directives.forEach(function (directive) {
	            var typeName = directive.directive.type.name;
	            if (directive.directive.isComponent) {
	                componentTypeNames.push(typeName);
	            }
	        });
	        return componentTypeNames;
	    };
	    TemplateParseVisitor.prototype._assertOnlyOneComponent = function (directives, sourceSpan) {
	        var componentTypeNames = this._findComponentDirectiveNames(directives);
	        if (componentTypeNames.length > 1) {
	            this._reportError("More than one component: " + componentTypeNames.join(','), sourceSpan);
	        }
	    };
	    TemplateParseVisitor.prototype._assertNoComponentsNorElementBindingsOnTemplate = function (directives, elementProps, sourceSpan) {
	        var _this = this;
	        var componentTypeNames = this._findComponentDirectiveNames(directives);
	        if (componentTypeNames.length > 0) {
	            this._reportError("Components on an embedded template: " + componentTypeNames.join(','), sourceSpan);
	        }
	        elementProps.forEach(function (prop) {
	            _this._reportError("Property binding " + prop.name + " not used by any directive on an embedded template", sourceSpan);
	        });
	    };
	    TemplateParseVisitor.prototype._assertAllEventsPublishedByDirectives = function (directives, events) {
	        var _this = this;
	        var allDirectiveEvents = new Set();
	        directives.forEach(function (directive) {
	            collection_1.StringMapWrapper.forEach(directive.directive.outputs, function (eventName, _) { allDirectiveEvents.add(eventName); });
	        });
	        events.forEach(function (event) {
	            if (lang_1.isPresent(event.target) || !collection_1.SetWrapper.has(allDirectiveEvents, event.name)) {
	                _this._reportError("Event binding " + event.fullName + " not emitted by any directive on an embedded template", event.sourceSpan);
	            }
	        });
	    };
	    return TemplateParseVisitor;
	}());
	var NonBindableVisitor = (function () {
	    function NonBindableVisitor() {
	    }
	    NonBindableVisitor.prototype.visitElement = function (ast, component) {
	        var preparsedElement = template_preparser_1.preparseElement(ast);
	        if (preparsedElement.type === template_preparser_1.PreparsedElementType.SCRIPT ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLE ||
	            preparsedElement.type === template_preparser_1.PreparsedElementType.STYLESHEET) {
	            // Skipping <script> for security reasons
	            // Skipping <style> and stylesheets as we already processed them
	            // in the StyleCompiler
	            return null;
	        }
	        var attrNameAndValues = ast.attrs.map(function (attrAst) { return [attrAst.name, attrAst.value]; });
	        var selector = createElementCssSelector(ast.name, attrNameAndValues);
	        var ngContentIndex = component.findNgContentIndex(selector);
	        var children = html_ast_1.htmlVisitAll(this, ast.children, EMPTY_COMPONENT);
	        return new template_ast_1.ElementAst(ast.name, html_ast_1.htmlVisitAll(this, ast.attrs), [], [], [], [], children, ngContentIndex, ast.sourceSpan);
	    };
	    NonBindableVisitor.prototype.visitComment = function (ast, context) { return null; };
	    NonBindableVisitor.prototype.visitAttr = function (ast, context) {
	        return new template_ast_1.AttrAst(ast.name, ast.value, ast.sourceSpan);
	    };
	    NonBindableVisitor.prototype.visitText = function (ast, component) {
	        var ngContentIndex = component.findNgContentIndex(TEXT_CSS_SELECTOR);
	        return new template_ast_1.TextAst(ast.value, ngContentIndex, ast.sourceSpan);
	    };
	    return NonBindableVisitor;
	}());
	var BoundElementOrDirectiveProperty = (function () {
	    function BoundElementOrDirectiveProperty(name, expression, isLiteral, sourceSpan) {
	        this.name = name;
	        this.expression = expression;
	        this.isLiteral = isLiteral;
	        this.sourceSpan = sourceSpan;
	    }
	    return BoundElementOrDirectiveProperty;
	}());
	function splitClasses(classAttrValue) {
	    return lang_1.StringWrapper.split(classAttrValue.trim(), /\s+/g);
	}
	exports.splitClasses = splitClasses;
	var Component = (function () {
	    function Component(ngContentIndexMatcher, wildcardNgContentIndex) {
	        this.ngContentIndexMatcher = ngContentIndexMatcher;
	        this.wildcardNgContentIndex = wildcardNgContentIndex;
	    }
	    Component.create = function (directives) {
	        if (directives.length === 0 || !directives[0].directive.isComponent) {
	            return EMPTY_COMPONENT;
	        }
	        var matcher = new selector_1.SelectorMatcher();
	        var ngContentSelectors = directives[0].directive.template.ngContentSelectors;
	        var wildcardNgContentIndex = null;
	        for (var i = 0; i < ngContentSelectors.length; i++) {
	            var selector = ngContentSelectors[i];
	            if (lang_1.StringWrapper.equals(selector, '*')) {
	                wildcardNgContentIndex = i;
	            }
	            else {
	                matcher.addSelectables(selector_1.CssSelector.parse(ngContentSelectors[i]), i);
	            }
	        }
	        return new Component(matcher, wildcardNgContentIndex);
	    };
	    Component.prototype.findNgContentIndex = function (selector) {
	        var ngContentIndices = [];
	        this.ngContentIndexMatcher.match(selector, function (selector, ngContentIndex) { ngContentIndices.push(ngContentIndex); });
	        collection_1.ListWrapper.sort(ngContentIndices);
	        if (lang_1.isPresent(this.wildcardNgContentIndex)) {
	            ngContentIndices.push(this.wildcardNgContentIndex);
	        }
	        return ngContentIndices.length > 0 ? ngContentIndices[0] : null;
	    };
	    return Component;
	}());
	function createElementCssSelector(elementName, matchableAttrs) {
	    var cssSelector = new selector_1.CssSelector();
	    var elNameNoNs = html_tags_1.splitNsName(elementName)[1];
	    cssSelector.setElement(elNameNoNs);
	    for (var i = 0; i < matchableAttrs.length; i++) {
	        var attrName = matchableAttrs[i][0];
	        var attrNameNoNs = html_tags_1.splitNsName(attrName)[1];
	        var attrValue = matchableAttrs[i][1];
	        cssSelector.addAttribute(attrNameNoNs, attrValue);
	        if (attrName.toLowerCase() == CLASS_ATTR) {
	            var classes = splitClasses(attrValue);
	            classes.forEach(function (className) { return cssSelector.addClassName(className); });
	        }
	    }
	    return cssSelector;
	}
	var EMPTY_COMPONENT = new Component(new selector_1.SelectorMatcher(), null);
	var NON_BINDABLE_VISITOR = new NonBindableVisitor();
	var PipeCollector = (function (_super) {
	    __extends(PipeCollector, _super);
	    function PipeCollector() {
	        _super.apply(this, arguments);
	        this.pipes = new Set();
	    }
	    PipeCollector.prototype.visitPipe = function (ast) {
	        this.pipes.add(ast.name);
	        ast.exp.visit(this);
	        this.visitAll(ast.args);
	        return null;
	    };
	    return PipeCollector;
	}(ast_1.RecursiveAstVisitor));
	exports.PipeCollector = PipeCollector;


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var html_tags_1 = __webpack_require__(43);
	var NG_CONTENT_SELECT_ATTR = 'select';
	var NG_CONTENT_ELEMENT = 'ng-content';
	var LINK_ELEMENT = 'link';
	var LINK_STYLE_REL_ATTR = 'rel';
	var LINK_STYLE_HREF_ATTR = 'href';
	var LINK_STYLE_REL_VALUE = 'stylesheet';
	var STYLE_ELEMENT = 'style';
	var SCRIPT_ELEMENT = 'script';
	var NG_NON_BINDABLE_ATTR = 'ngNonBindable';
	var NG_PROJECT_AS = 'ngProjectAs';
	function preparseElement(ast) {
	    var selectAttr = null;
	    var hrefAttr = null;
	    var relAttr = null;
	    var nonBindable = false;
	    var projectAs = null;
	    ast.attrs.forEach(function (attr) {
	        var lcAttrName = attr.name.toLowerCase();
	        if (lcAttrName == NG_CONTENT_SELECT_ATTR) {
	            selectAttr = attr.value;
	        }
	        else if (lcAttrName == LINK_STYLE_HREF_ATTR) {
	            hrefAttr = attr.value;
	        }
	        else if (lcAttrName == LINK_STYLE_REL_ATTR) {
	            relAttr = attr.value;
	        }
	        else if (attr.name == NG_NON_BINDABLE_ATTR) {
	            nonBindable = true;
	        }
	        else if (attr.name == NG_PROJECT_AS) {
	            if (attr.value.length > 0) {
	                projectAs = attr.value;
	            }
	        }
	    });
	    selectAttr = normalizeNgContentSelect(selectAttr);
	    var nodeName = ast.name.toLowerCase();
	    var type = PreparsedElementType.OTHER;
	    if (html_tags_1.splitNsName(nodeName)[1] == NG_CONTENT_ELEMENT) {
	        type = PreparsedElementType.NG_CONTENT;
	    }
	    else if (nodeName == STYLE_ELEMENT) {
	        type = PreparsedElementType.STYLE;
	    }
	    else if (nodeName == SCRIPT_ELEMENT) {
	        type = PreparsedElementType.SCRIPT;
	    }
	    else if (nodeName == LINK_ELEMENT && relAttr == LINK_STYLE_REL_VALUE) {
	        type = PreparsedElementType.STYLESHEET;
	    }
	    return new PreparsedElement(type, selectAttr, hrefAttr, nonBindable, projectAs);
	}
	exports.preparseElement = preparseElement;
	(function (PreparsedElementType) {
	    PreparsedElementType[PreparsedElementType["NG_CONTENT"] = 0] = "NG_CONTENT";
	    PreparsedElementType[PreparsedElementType["STYLE"] = 1] = "STYLE";
	    PreparsedElementType[PreparsedElementType["STYLESHEET"] = 2] = "STYLESHEET";
	    PreparsedElementType[PreparsedElementType["SCRIPT"] = 3] = "SCRIPT";
	    PreparsedElementType[PreparsedElementType["OTHER"] = 4] = "OTHER";
	})(exports.PreparsedElementType || (exports.PreparsedElementType = {}));
	var PreparsedElementType = exports.PreparsedElementType;
	var PreparsedElement = (function () {
	    function PreparsedElement(type, selectAttr, hrefAttr, nonBindable, projectAs) {
	        this.type = type;
	        this.selectAttr = selectAttr;
	        this.hrefAttr = hrefAttr;
	        this.nonBindable = nonBindable;
	        this.projectAs = projectAs;
	    }
	    return PreparsedElement;
	}());
	exports.PreparsedElement = PreparsedElement;
	function normalizeNgContentSelect(selectAttr) {
	    if (lang_1.isBlank(selectAttr) || selectAttr.length === 0) {
	        return '*';
	    }
	    return selectAttr;
	}


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(7);
	var lang_1 = __webpack_require__(1);
	var application_tokens_1 = __webpack_require__(45);
	var di_2 = __webpack_require__(7);
	/**
	 * Create a {@link UrlResolver} with no package prefix.
	 */
	function createWithoutPackagePrefix() {
	    return new UrlResolver();
	}
	exports.createWithoutPackagePrefix = createWithoutPackagePrefix;
	/**
	 * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
	 */
	exports.DEFAULT_PACKAGE_URL_PROVIDER = new di_2.Provider(application_tokens_1.PACKAGE_ROOT_URL, { useValue: "/" });
	/**
	 * Used by the {@link Compiler} when resolving HTML and CSS template URLs.
	 *
	 * This class can be overridden by the application developer to create custom behavior.
	 *
	 * See {@link Compiler}
	 *
	 * ## Example
	 *
	 * {@example compiler/ts/url_resolver/url_resolver.ts region='url_resolver'}
	 */
	var UrlResolver = (function () {
	    function UrlResolver(packagePrefix) {
	        if (packagePrefix === void 0) { packagePrefix = null; }
	        if (lang_1.isPresent(packagePrefix)) {
	            this._packagePrefix = lang_1.StringWrapper.stripRight(packagePrefix, "/") + "/";
	        }
	    }
	    /**
	     * Resolves the `url` given the `baseUrl`:
	     * - when the `url` is null, the `baseUrl` is returned,
	     * - if `url` is relative ('path/to/here', './path/to/here'), the resolved url is a combination of
	     * `baseUrl` and `url`,
	     * - if `url` is absolute (it has a scheme: 'http://', 'https://' or start with '/'), the `url` is
	     * returned as is (ignoring the `baseUrl`)
	     *
	     * @param {string} baseUrl
	     * @param {string} url
	     * @returns {string} the resolved URL
	     */
	    UrlResolver.prototype.resolve = function (baseUrl, url) {
	        var resolvedUrl = url;
	        if (lang_1.isPresent(baseUrl) && baseUrl.length > 0) {
	            resolvedUrl = _resolveUrl(baseUrl, resolvedUrl);
	        }
	        if (lang_1.isPresent(this._packagePrefix) && getUrlScheme(resolvedUrl) == "package") {
	            resolvedUrl = resolvedUrl.replace("package:", this._packagePrefix);
	        }
	        return resolvedUrl;
	    };
	    UrlResolver = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(application_tokens_1.PACKAGE_ROOT_URL)), 
	        __metadata('design:paramtypes', [String])
	    ], UrlResolver);
	    return UrlResolver;
	}());
	exports.UrlResolver = UrlResolver;
	/**
	 * Extract the scheme of a URL.
	 */
	function getUrlScheme(url) {
	    var match = _split(url);
	    return (match && match[_ComponentIndex.Scheme]) || "";
	}
	exports.getUrlScheme = getUrlScheme;
	// The code below is adapted from Traceur:
	// https://github.com/google/traceur-compiler/blob/9511c1dafa972bf0de1202a8a863bad02f0f95a8/src/runtime/url.js
	/**
	 * Builds a URI string from already-encoded parts.
	 *
	 * No encoding is performed.  Any component may be omitted as either null or
	 * undefined.
	 *
	 * @param {?string=} opt_scheme The scheme such as 'http'.
	 * @param {?string=} opt_userInfo The user name before the '@'.
	 * @param {?string=} opt_domain The domain such as 'www.google.com', already
	 *     URI-encoded.
	 * @param {(string|null)=} opt_port The port number.
	 * @param {?string=} opt_path The path, already URI-encoded.  If it is not
	 *     empty, it must begin with a slash.
	 * @param {?string=} opt_queryData The URI-encoded query data.
	 * @param {?string=} opt_fragment The URI-encoded fragment identifier.
	 * @return {string} The fully combined URI.
	 */
	function _buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
	    var out = [];
	    if (lang_1.isPresent(opt_scheme)) {
	        out.push(opt_scheme + ':');
	    }
	    if (lang_1.isPresent(opt_domain)) {
	        out.push('//');
	        if (lang_1.isPresent(opt_userInfo)) {
	            out.push(opt_userInfo + '@');
	        }
	        out.push(opt_domain);
	        if (lang_1.isPresent(opt_port)) {
	            out.push(':' + opt_port);
	        }
	    }
	    if (lang_1.isPresent(opt_path)) {
	        out.push(opt_path);
	    }
	    if (lang_1.isPresent(opt_queryData)) {
	        out.push('?' + opt_queryData);
	    }
	    if (lang_1.isPresent(opt_fragment)) {
	        out.push('#' + opt_fragment);
	    }
	    return out.join('');
	}
	/**
	 * A regular expression for breaking a URI into its component parts.
	 *
	 * {@link http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234} says
	 * As the "first-match-wins" algorithm is identical to the "greedy"
	 * disambiguation method used by POSIX regular expressions, it is natural and
	 * commonplace to use a regular expression for parsing the potential five
	 * components of a URI reference.
	 *
	 * The following line is the regular expression for breaking-down a
	 * well-formed URI reference into its components.
	 *
	 * <pre>
	 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	 *  12            3  4          5       6  7        8 9
	 * </pre>
	 *
	 * The numbers in the second line above are only to assist readability; they
	 * indicate the reference points for each subexpression (i.e., each paired
	 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	 * For example, matching the above expression to
	 * <pre>
	 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	 * </pre>
	 * results in the following subexpression matches:
	 * <pre>
	 *    $1 = http:
	 *    $2 = http
	 *    $3 = //www.ics.uci.edu
	 *    $4 = www.ics.uci.edu
	 *    $5 = /pub/ietf/uri/
	 *    $6 = <undefined>
	 *    $7 = <undefined>
	 *    $8 = #Related
	 *    $9 = Related
	 * </pre>
	 * where <undefined> indicates that the component is not present, as is the
	 * case for the query component in the above example. Therefore, we can
	 * determine the value of the five components as
	 * <pre>
	 *    scheme    = $2
	 *    authority = $4
	 *    path      = $5
	 *    query     = $7
	 *    fragment  = $9
	 * </pre>
	 *
	 * The regular expression has been modified slightly to expose the
	 * userInfo, domain, and port separately from the authority.
	 * The modified version yields
	 * <pre>
	 *    $1 = http              scheme
	 *    $2 = <undefined>       userInfo -\
	 *    $3 = www.ics.uci.edu   domain     | authority
	 *    $4 = <undefined>       port     -/
	 *    $5 = /pub/ietf/uri/    path
	 *    $6 = <undefined>       query without ?
	 *    $7 = Related           fragment without #
	 * </pre>
	 * @type {!RegExp}
	 * @internal
	 */
	var _splitRe = lang_1.RegExpWrapper.create('^' +
	    '(?:' +
	    '([^:/?#.]+)' +
	    // used by other URL parts such as :,
	    // ?, /, #, and .
	    ':)?' +
	    '(?://' +
	    '(?:([^/?#]*)@)?' +
	    '([\\w\\d\\-\\u0100-\\uffff.%]*)' +
	    // digits, dashes, dots, percent
	    // escapes, and unicode characters.
	    '(?::([0-9]+))?' +
	    ')?' +
	    '([^?#]+)?' +
	    '(?:\\?([^#]*))?' +
	    '(?:#(.*))?' +
	    '$');
	/**
	 * The index of each URI component in the return value of goog.uri.utils.split.
	 * @enum {number}
	 */
	var _ComponentIndex;
	(function (_ComponentIndex) {
	    _ComponentIndex[_ComponentIndex["Scheme"] = 1] = "Scheme";
	    _ComponentIndex[_ComponentIndex["UserInfo"] = 2] = "UserInfo";
	    _ComponentIndex[_ComponentIndex["Domain"] = 3] = "Domain";
	    _ComponentIndex[_ComponentIndex["Port"] = 4] = "Port";
	    _ComponentIndex[_ComponentIndex["Path"] = 5] = "Path";
	    _ComponentIndex[_ComponentIndex["QueryData"] = 6] = "QueryData";
	    _ComponentIndex[_ComponentIndex["Fragment"] = 7] = "Fragment";
	})(_ComponentIndex || (_ComponentIndex = {}));
	/**
	 * Splits a URI into its component parts.
	 *
	 * Each component can be accessed via the component indices; for example:
	 * <pre>
	 * goog.uri.utils.split(someStr)[goog.uri.utils.CompontentIndex.QUERY_DATA];
	 * </pre>
	 *
	 * @param {string} uri The URI string to examine.
	 * @return {!Array.<string|undefined>} Each component still URI-encoded.
	 *     Each component that is present will contain the encoded value, whereas
	 *     components that are not present will be undefined or empty, depending
	 *     on the browser's regular expression implementation.  Never null, since
	 *     arbitrary strings may still look like path names.
	 */
	function _split(uri) {
	    return lang_1.RegExpWrapper.firstMatch(_splitRe, uri);
	}
	/**
	  * Removes dot segments in given path component, as described in
	  * RFC 3986, section 5.2.4.
	  *
	  * @param {string} path A non-empty path component.
	  * @return {string} Path component with removed dot segments.
	  */
	function _removeDotSegments(path) {
	    if (path == '/')
	        return '/';
	    var leadingSlash = path[0] == '/' ? '/' : '';
	    var trailingSlash = path[path.length - 1] === '/' ? '/' : '';
	    var segments = path.split('/');
	    var out = [];
	    var up = 0;
	    for (var pos = 0; pos < segments.length; pos++) {
	        var segment = segments[pos];
	        switch (segment) {
	            case '':
	            case '.':
	                break;
	            case '..':
	                if (out.length > 0) {
	                    out.pop();
	                }
	                else {
	                    up++;
	                }
	                break;
	            default:
	                out.push(segment);
	        }
	    }
	    if (leadingSlash == '') {
	        while (up-- > 0) {
	            out.unshift('..');
	        }
	        if (out.length === 0)
	            out.push('.');
	    }
	    return leadingSlash + out.join('/') + trailingSlash;
	}
	/**
	 * Takes an array of the parts from split and canonicalizes the path part
	 * and then joins all the parts.
	 * @param {Array.<string?>} parts
	 * @return {string}
	 */
	function _joinAndCanonicalizePath(parts) {
	    var path = parts[_ComponentIndex.Path];
	    path = lang_1.isBlank(path) ? '' : _removeDotSegments(path);
	    parts[_ComponentIndex.Path] = path;
	    return _buildFromEncodedParts(parts[_ComponentIndex.Scheme], parts[_ComponentIndex.UserInfo], parts[_ComponentIndex.Domain], parts[_ComponentIndex.Port], path, parts[_ComponentIndex.QueryData], parts[_ComponentIndex.Fragment]);
	}
	/**
	 * Resolves a URL.
	 * @param {string} base The URL acting as the base URL.
	 * @param {string} to The URL to resolve.
	 * @return {string}
	 */
	function _resolveUrl(base, url) {
	    var parts = _split(encodeURI(url));
	    var baseParts = _split(base);
	    if (lang_1.isPresent(parts[_ComponentIndex.Scheme])) {
	        return _joinAndCanonicalizePath(parts);
	    }
	    else {
	        parts[_ComponentIndex.Scheme] = baseParts[_ComponentIndex.Scheme];
	    }
	    for (var i = _ComponentIndex.Scheme; i <= _ComponentIndex.Port; i++) {
	        if (lang_1.isBlank(parts[i])) {
	            parts[i] = baseParts[i];
	        }
	    }
	    if (parts[_ComponentIndex.Path][0] == '/') {
	        return _joinAndCanonicalizePath(parts);
	    }
	    var path = baseParts[_ComponentIndex.Path];
	    if (lang_1.isBlank(path))
	        path = '/';
	    var index = path.lastIndexOf('/');
	    path = path.substring(0, index + 1) + parts[_ComponentIndex.Path];
	    parts[_ComponentIndex.Path] = path;
	    return _joinAndCanonicalizePath(parts);
	}


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var CAMEL_CASE_REGEXP = /([A-Z])/g;
	var DASH_CASE_REGEXP = /-([a-z])/g;
	var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
	var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
	exports.MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '.js';
	exports.CONST_VAR = lang_1.IS_DART ? 'const' : 'var';
	function camelCaseToDashCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
	}
	exports.camelCaseToDashCase = camelCaseToDashCase;
	function dashCaseToCamelCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
	}
	exports.dashCaseToCamelCase = dashCaseToCamelCase;
	function escapeSingleQuoteString(input) {
	    if (lang_1.isBlank(input)) {
	        return null;
	    }
	    return "'" + escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE) + "'";
	}
	exports.escapeSingleQuoteString = escapeSingleQuoteString;
	function escapeDoubleQuoteString(input) {
	    if (lang_1.isBlank(input)) {
	        return null;
	    }
	    return "\"" + escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE) + "\"";
	}
	exports.escapeDoubleQuoteString = escapeDoubleQuoteString;
	function escapeString(input, re) {
	    return lang_1.StringWrapper.replaceAllMapped(input, re, function (match) {
	        if (match[0] == '$') {
	            return lang_1.IS_DART ? '\\$' : '$';
	        }
	        else if (match[0] == '\n') {
	            return '\\n';
	        }
	        else if (match[0] == '\r') {
	            return '\\r';
	        }
	        else {
	            return "\\" + match[0];
	        }
	    });
	}
	function codeGenExportVariable(name) {
	    if (lang_1.IS_DART) {
	        return "const " + name + " = ";
	    }
	    else {
	        return "var " + name + " = exports['" + name + "'] = ";
	    }
	}
	exports.codeGenExportVariable = codeGenExportVariable;
	function codeGenConstConstructorCall(name) {
	    if (lang_1.IS_DART) {
	        return "const " + name;
	    }
	    else {
	        return "new " + name;
	    }
	}
	exports.codeGenConstConstructorCall = codeGenConstConstructorCall;
	function codeGenValueFn(params, value, fnName) {
	    if (fnName === void 0) { fnName = ''; }
	    if (lang_1.IS_DART) {
	        return codeGenFnHeader(params, fnName) + " => " + value;
	    }
	    else {
	        return codeGenFnHeader(params, fnName) + " { return " + value + "; }";
	    }
	}
	exports.codeGenValueFn = codeGenValueFn;
	function codeGenFnHeader(params, fnName) {
	    if (fnName === void 0) { fnName = ''; }
	    if (lang_1.IS_DART) {
	        return fnName + "(" + params.join(',') + ")";
	    }
	    else {
	        return "function " + fnName + "(" + params.join(',') + ")";
	    }
	}
	exports.codeGenFnHeader = codeGenFnHeader;
	function codeGenToString(expr) {
	    if (lang_1.IS_DART) {
	        return "'${" + expr + "}'";
	    }
	    else {
	        // JS automatically converts to string...
	        return expr;
	    }
	}
	exports.codeGenToString = codeGenToString;
	function splitAtColon(input, defaultValues) {
	    var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
	    if (parts.length > 1) {
	        return parts;
	    }
	    else {
	        return defaultValues;
	    }
	}
	exports.splitAtColon = splitAtColon;
	var Statement = (function () {
	    function Statement(statement) {
	        this.statement = statement;
	    }
	    return Statement;
	}());
	exports.Statement = Statement;
	var Expression = (function () {
	    function Expression(expression, isArray) {
	        if (isArray === void 0) { isArray = false; }
	        this.expression = expression;
	        this.isArray = isArray;
	    }
	    return Expression;
	}());
	exports.Expression = Expression;
	function escapeValue(value) {
	    if (value instanceof Expression) {
	        return value.expression;
	    }
	    else if (lang_1.isString(value)) {
	        return escapeSingleQuoteString(value);
	    }
	    else if (lang_1.isBlank(value)) {
	        return 'null';
	    }
	    else {
	        return "" + value;
	    }
	}
	exports.escapeValue = escapeValue;
	function codeGenArray(data) {
	    return "[" + data.map(escapeValue).join(',') + "]";
	}
	exports.codeGenArray = codeGenArray;
	function codeGenFlatArray(values) {
	    var result = '([';
	    var isFirstArrayEntry = true;
	    var concatFn = lang_1.IS_DART ? '.addAll' : 'concat';
	    for (var i = 0; i < values.length; i++) {
	        var value = values[i];
	        if (value instanceof Expression && value.isArray) {
	            result += "])." + concatFn + "(" + value.expression + ")." + concatFn + "([";
	            isFirstArrayEntry = true;
	        }
	        else {
	            if (!isFirstArrayEntry) {
	                result += ',';
	            }
	            isFirstArrayEntry = false;
	            result += escapeValue(value);
	        }
	    }
	    result += '])';
	    return result;
	}
	exports.codeGenFlatArray = codeGenFlatArray;
	function codeGenStringMap(keyValueArray) {
	    return "{" + keyValueArray.map(codeGenKeyValue).join(',') + "}";
	}
	exports.codeGenStringMap = codeGenStringMap;
	function codeGenKeyValue(keyValue) {
	    return escapeValue(keyValue[0]) + ":" + escapeValue(keyValue[1]);
	}
	function addAll(source, target) {
	    for (var i = 0; i < source.length; i++) {
	        target.push(source[i]);
	    }
	}
	exports.addAll = addAll;
	function flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	exports.flattenArray = flattenArray;


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var template_ast_1 = __webpack_require__(34);
	var source_module_1 = __webpack_require__(33);
	var view_1 = __webpack_require__(49);
	var view_type_1 = __webpack_require__(50);
	var element_1 = __webpack_require__(67);
	var view_2 = __webpack_require__(30);
	var util_1 = __webpack_require__(23);
	var di_1 = __webpack_require__(7);
	var proto_view_compiler_1 = __webpack_require__(109);
	exports.VIEW_JIT_IMPORTS = lang_1.CONST_EXPR({
	    'AppView': view_1.AppView,
	    'AppElement': element_1.AppElement,
	    'flattenNestedViewRenderNodes': view_1.flattenNestedViewRenderNodes,
	    'checkSlotCount': view_1.checkSlotCount
	});
	var ViewCompiler = (function () {
	    function ViewCompiler() {
	    }
	    ViewCompiler.prototype.compileComponentRuntime = function (component, template, styles, protoViews, changeDetectorFactories, componentViewFactory) {
	        var viewFactory = new RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory);
	        return viewFactory.createViewFactory(template, 0, []);
	    };
	    ViewCompiler.prototype.compileComponentCodeGen = function (component, template, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory) {
	        var viewFactory = new CodeGenViewFactory(component, styles, protoViews, changeDetectorFactoryExpressions, componentViewFactory);
	        var targetStatements = [];
	        var viewFactoryExpression = viewFactory.createViewFactory(template, 0, targetStatements);
	        return new source_module_1.SourceExpression(targetStatements.map(function (stmt) { return stmt.statement; }), viewFactoryExpression.expression);
	    };
	    ViewCompiler = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ViewCompiler);
	    return ViewCompiler;
	}());
	exports.ViewCompiler = ViewCompiler;
	var CodeGenViewFactory = (function () {
	    function CodeGenViewFactory(component, styles, protoViews, changeDetectorExpressions, componentViewFactory) {
	        this.component = component;
	        this.styles = styles;
	        this.protoViews = protoViews;
	        this.changeDetectorExpressions = changeDetectorExpressions;
	        this.componentViewFactory = componentViewFactory;
	        this._nextVarId = 0;
	    }
	    CodeGenViewFactory.prototype._nextVar = function (prefix) {
	        return "" + prefix + this._nextVarId++ + "_" + this.component.type.name;
	    };
	    CodeGenViewFactory.prototype._nextRenderVar = function () { return this._nextVar('render'); };
	    CodeGenViewFactory.prototype._nextAppVar = function () { return this._nextVar('app'); };
	    CodeGenViewFactory.prototype._nextDisposableVar = function () {
	        return "disposable" + this._nextVarId++ + "_" + this.component.type.name;
	    };
	    CodeGenViewFactory.prototype.createText = function (renderer, parent, text, targetStatements) {
	        var varName = this._nextRenderVar();
	        var statement = "var " + varName + " = " + renderer.expression + ".createText(" + (lang_1.isPresent(parent) ? parent.expression : null) + ", " + util_1.escapeSingleQuoteString(text) + ");";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createElement = function (renderer, parentRenderNode, name, rootSelector, targetStatements) {
	        var varName = this._nextRenderVar();
	        var valueExpr;
	        if (lang_1.isPresent(rootSelector)) {
	            valueExpr = rootSelector.expression + " == null ?\n        " + renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ") :\n        " + renderer.expression + ".selectRootElement(" + rootSelector.expression + ");";
	        }
	        else {
	            valueExpr =
	                renderer.expression + ".createElement(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ", " + util_1.escapeSingleQuoteString(name) + ")";
	        }
	        var statement = "var " + varName + " = " + valueExpr + ";";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createTemplateAnchor = function (renderer, parentRenderNode, targetStatements) {
	        var varName = this._nextRenderVar();
	        var valueExpr = renderer.expression + ".createTemplateAnchor(" + (lang_1.isPresent(parentRenderNode) ? parentRenderNode.expression : null) + ");";
	        targetStatements.push(new util_1.Statement("var " + varName + " = " + valueExpr));
	        return new util_1.Expression(varName);
	    };
	    CodeGenViewFactory.prototype.createGlobalEventListener = function (renderer, appView, boundElementIndex, eventAst, targetStatements) {
	        var disposableVar = this._nextDisposableVar();
	        var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
	        targetStatements.push(new util_1.Statement("var " + disposableVar + " = " + renderer.expression + ".listenGlobal(" + util_1.escapeValue(eventAst.target) + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
	        return new util_1.Expression(disposableVar);
	    };
	    CodeGenViewFactory.prototype.createElementEventListener = function (renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
	        var disposableVar = this._nextDisposableVar();
	        var eventHandlerExpr = codeGenEventHandler(appView, boundElementIndex, eventAst.fullName);
	        targetStatements.push(new util_1.Statement("var " + disposableVar + " = " + renderer.expression + ".listen(" + renderNode.expression + ", " + util_1.escapeValue(eventAst.name) + ", " + eventHandlerExpr + ");"));
	        return new util_1.Expression(disposableVar);
	    };
	    CodeGenViewFactory.prototype.setElementAttribute = function (renderer, renderNode, attrName, attrValue, targetStatements) {
	        targetStatements.push(new util_1.Statement(renderer.expression + ".setElementAttribute(" + renderNode.expression + ", " + util_1.escapeSingleQuoteString(attrName) + ", " + util_1.escapeSingleQuoteString(attrValue) + ");"));
	    };
	    CodeGenViewFactory.prototype.createAppElement = function (appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
	        var appVar = this._nextAppVar();
	        var varValue = "new " + proto_view_compiler_1.APP_EL_MODULE_REF + "AppElement(" + appProtoEl.expression + ", " + appView.expression + ",\n      " + (lang_1.isPresent(parentAppEl) ? parentAppEl.expression : null) + ", " + renderNode.expression + ", " + (lang_1.isPresent(embeddedViewFactory) ? embeddedViewFactory.expression : null) + ")";
	        targetStatements.push(new util_1.Statement("var " + appVar + " = " + varValue + ";"));
	        return new util_1.Expression(appVar);
	    };
	    CodeGenViewFactory.prototype.createAndSetComponentView = function (renderer, viewManager, view, appEl, component, contentNodesByNgContentIndex, targetStatements) {
	        var codeGenContentNodes;
	        if (this.component.type.isHost) {
	            codeGenContentNodes = view.expression + ".projectableNodes";
	        }
	        else {
	            codeGenContentNodes =
	                "[" + contentNodesByNgContentIndex.map(function (nodes) { return util_1.codeGenFlatArray(nodes); }).join(',') + "]";
	        }
	        targetStatements.push(new util_1.Statement(this.componentViewFactory(component) + "(" + renderer.expression + ", " + viewManager.expression + ", " + appEl.expression + ", " + codeGenContentNodes + ", null, null, null);"));
	    };
	    CodeGenViewFactory.prototype.getProjectedNodes = function (projectableNodes, ngContentIndex) {
	        return new util_1.Expression(projectableNodes.expression + "[" + ngContentIndex + "]", true);
	    };
	    CodeGenViewFactory.prototype.appendProjectedNodes = function (renderer, parent, nodes, targetStatements) {
	        targetStatements.push(new util_1.Statement(renderer.expression + ".projectNodes(" + parent.expression + ", " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "flattenNestedViewRenderNodes(" + nodes.expression + "));"));
	    };
	    CodeGenViewFactory.prototype.createViewFactory = function (asts, embeddedTemplateIndex, targetStatements) {
	        var compileProtoView = this.protoViews[embeddedTemplateIndex];
	        var isHostView = this.component.type.isHost;
	        var isComponentView = embeddedTemplateIndex === 0 && !isHostView;
	        var visitor = new ViewBuilderVisitor(new util_1.Expression('renderer'), new util_1.Expression('viewManager'), new util_1.Expression('projectableNodes'), isHostView ? new util_1.Expression('rootSelector') : null, new util_1.Expression('view'), compileProtoView, targetStatements, this);
	        template_ast_1.templateVisitAll(visitor, asts, new ParentElement(isComponentView ? new util_1.Expression('parentRenderNode') : null, null, null));
	        var appProtoView = compileProtoView.protoView.expression;
	        var viewFactoryName = codeGenViewFactoryName(this.component, embeddedTemplateIndex);
	        var changeDetectorFactory = this.changeDetectorExpressions.expressions[embeddedTemplateIndex];
	        var factoryArgs = [
	            'parentRenderer',
	            'viewManager',
	            'containerEl',
	            'projectableNodes',
	            'rootSelector',
	            'dynamicallyCreatedProviders',
	            'rootInjector'
	        ];
	        var initRendererStmts = [];
	        var rendererExpr = "parentRenderer";
	        if (embeddedTemplateIndex === 0) {
	            var renderCompTypeVar = this._nextVar('renderType');
	            targetStatements.push(new util_1.Statement("var " + renderCompTypeVar + " = null;"));
	            var stylesVar = this._nextVar('styles');
	            targetStatements.push(new util_1.Statement(util_1.CONST_VAR + " " + stylesVar + " = " + this.styles.expression + ";"));
	            var encapsulation = this.component.template.encapsulation;
	            initRendererStmts.push("if (" + renderCompTypeVar + " == null) {\n        " + renderCompTypeVar + " = viewManager.createRenderComponentType(" + codeGenViewEncapsulation(encapsulation) + ", " + stylesVar + ");\n      }");
	            rendererExpr = "parentRenderer.renderComponent(" + renderCompTypeVar + ")";
	        }
	        var statement = "\n" + util_1.codeGenFnHeader(factoryArgs, viewFactoryName) + "{\n  " + initRendererStmts.join('\n') + "\n  var renderer = " + rendererExpr + ";\n  var view = new " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "AppView(\n    " + appProtoView + ", renderer, viewManager,\n    projectableNodes,\n    containerEl,\n    dynamicallyCreatedProviders, rootInjector,\n    " + changeDetectorFactory + "()\n  );\n  " + proto_view_compiler_1.APP_VIEW_MODULE_REF + "checkSlotCount(" + util_1.escapeValue(this.component.type.name) + ", " + this.component.template.ngContentSelectors.length + ", projectableNodes);\n  " + (isComponentView ? 'var parentRenderNode = renderer.createViewRoot(view.containerAppElement.nativeElement);' : '') + "\n  " + visitor.renderStmts.map(function (stmt) { return stmt.statement; }).join('\n') + "\n  " + visitor.appStmts.map(function (stmt) { return stmt.statement; }).join('\n') + "\n\n  view.init(" + util_1.codeGenFlatArray(visitor.rootNodesOrAppElements) + ", " + util_1.codeGenArray(visitor.renderNodes) + ", " + util_1.codeGenArray(visitor.appDisposables) + ",\n            " + util_1.codeGenArray(visitor.appElements) + ");\n  return view;\n}";
	        targetStatements.push(new util_1.Statement(statement));
	        return new util_1.Expression(viewFactoryName);
	    };
	    return CodeGenViewFactory;
	}());
	var RuntimeViewFactory = (function () {
	    function RuntimeViewFactory(component, styles, protoViews, changeDetectorFactories, componentViewFactory) {
	        this.component = component;
	        this.styles = styles;
	        this.protoViews = protoViews;
	        this.changeDetectorFactories = changeDetectorFactories;
	        this.componentViewFactory = componentViewFactory;
	    }
	    RuntimeViewFactory.prototype.createText = function (renderer, parent, text, targetStatements) {
	        return renderer.createText(parent, text);
	    };
	    RuntimeViewFactory.prototype.createElement = function (renderer, parent, name, rootSelector, targetStatements) {
	        var el;
	        if (lang_1.isPresent(rootSelector)) {
	            el = renderer.selectRootElement(rootSelector);
	        }
	        else {
	            el = renderer.createElement(parent, name);
	        }
	        return el;
	    };
	    RuntimeViewFactory.prototype.createTemplateAnchor = function (renderer, parent, targetStatements) {
	        return renderer.createTemplateAnchor(parent);
	    };
	    RuntimeViewFactory.prototype.createGlobalEventListener = function (renderer, appView, boundElementIndex, eventAst, targetStatements) {
	        return renderer.listenGlobal(eventAst.target, eventAst.name, function (event) { return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex); });
	    };
	    RuntimeViewFactory.prototype.createElementEventListener = function (renderer, appView, boundElementIndex, renderNode, eventAst, targetStatements) {
	        return renderer.listen(renderNode, eventAst.name, function (event) { return appView.triggerEventHandlers(eventAst.fullName, event, boundElementIndex); });
	    };
	    RuntimeViewFactory.prototype.setElementAttribute = function (renderer, renderNode, attrName, attrValue, targetStatements) {
	        renderer.setElementAttribute(renderNode, attrName, attrValue);
	    };
	    RuntimeViewFactory.prototype.createAppElement = function (appProtoEl, appView, renderNode, parentAppEl, embeddedViewFactory, targetStatements) {
	        return new element_1.AppElement(appProtoEl, appView, parentAppEl, renderNode, embeddedViewFactory);
	    };
	    RuntimeViewFactory.prototype.createAndSetComponentView = function (renderer, viewManager, appView, appEl, component, contentNodesByNgContentIndex, targetStatements) {
	        var flattenedContentNodes;
	        if (this.component.type.isHost) {
	            flattenedContentNodes = appView.projectableNodes;
	        }
	        else {
	            flattenedContentNodes = collection_1.ListWrapper.createFixedSize(contentNodesByNgContentIndex.length);
	            for (var i = 0; i < contentNodesByNgContentIndex.length; i++) {
	                flattenedContentNodes[i] = util_1.flattenArray(contentNodesByNgContentIndex[i], []);
	            }
	        }
	        this.componentViewFactory(component)(renderer, viewManager, appEl, flattenedContentNodes);
	    };
	    RuntimeViewFactory.prototype.getProjectedNodes = function (projectableNodes, ngContentIndex) {
	        return projectableNodes[ngContentIndex];
	    };
	    RuntimeViewFactory.prototype.appendProjectedNodes = function (renderer, parent, nodes, targetStatements) {
	        renderer.projectNodes(parent, view_1.flattenNestedViewRenderNodes(nodes));
	    };
	    RuntimeViewFactory.prototype.createViewFactory = function (asts, embeddedTemplateIndex, targetStatements) {
	        var _this = this;
	        var compileProtoView = this.protoViews[embeddedTemplateIndex];
	        var isComponentView = compileProtoView.protoView.type === view_type_1.ViewType.COMPONENT;
	        var renderComponentType = null;
	        return function (parentRenderer, viewManager, containerEl, projectableNodes, rootSelector, dynamicallyCreatedProviders, rootInjector) {
	            if (rootSelector === void 0) { rootSelector = null; }
	            if (dynamicallyCreatedProviders === void 0) { dynamicallyCreatedProviders = null; }
	            if (rootInjector === void 0) { rootInjector = null; }
	            view_1.checkSlotCount(_this.component.type.name, _this.component.template.ngContentSelectors.length, projectableNodes);
	            var renderer;
	            if (embeddedTemplateIndex === 0) {
	                if (lang_1.isBlank(renderComponentType)) {
	                    renderComponentType = viewManager.createRenderComponentType(_this.component.template.encapsulation, _this.styles);
	                }
	                renderer = parentRenderer.renderComponent(renderComponentType);
	            }
	            else {
	                renderer = parentRenderer;
	            }
	            var changeDetector = _this.changeDetectorFactories[embeddedTemplateIndex]();
	            var view = new view_1.AppView(compileProtoView.protoView, renderer, viewManager, projectableNodes, containerEl, dynamicallyCreatedProviders, rootInjector, changeDetector);
	            var visitor = new ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, compileProtoView, [], _this);
	            var parentRenderNode = isComponentView ? renderer.createViewRoot(containerEl.nativeElement) : null;
	            template_ast_1.templateVisitAll(visitor, asts, new ParentElement(parentRenderNode, null, null));
	            view.init(util_1.flattenArray(visitor.rootNodesOrAppElements, []), visitor.renderNodes, visitor.appDisposables, visitor.appElements);
	            return view;
	        };
	    };
	    return RuntimeViewFactory;
	}());
	var ParentElement = (function () {
	    function ParentElement(renderNode, appEl, component) {
	        this.renderNode = renderNode;
	        this.appEl = appEl;
	        this.component = component;
	        if (lang_1.isPresent(component)) {
	            this.contentNodesByNgContentIndex =
	                collection_1.ListWrapper.createFixedSize(component.template.ngContentSelectors.length);
	            for (var i = 0; i < this.contentNodesByNgContentIndex.length; i++) {
	                this.contentNodesByNgContentIndex[i] = [];
	            }
	        }
	        else {
	            this.contentNodesByNgContentIndex = null;
	        }
	    }
	    ParentElement.prototype.addContentNode = function (ngContentIndex, nodeExpr) {
	        this.contentNodesByNgContentIndex[ngContentIndex].push(nodeExpr);
	    };
	    return ParentElement;
	}());
	var ViewBuilderVisitor = (function () {
	    function ViewBuilderVisitor(renderer, viewManager, projectableNodes, rootSelector, view, protoView, targetStatements, factory) {
	        this.renderer = renderer;
	        this.viewManager = viewManager;
	        this.projectableNodes = projectableNodes;
	        this.rootSelector = rootSelector;
	        this.view = view;
	        this.protoView = protoView;
	        this.targetStatements = targetStatements;
	        this.factory = factory;
	        this.renderStmts = [];
	        this.renderNodes = [];
	        this.appStmts = [];
	        this.appElements = [];
	        this.appDisposables = [];
	        this.rootNodesOrAppElements = [];
	        this.elementCount = 0;
	    }
	    ViewBuilderVisitor.prototype._addRenderNode = function (renderNode, appEl, ngContentIndex, parent) {
	        this.renderNodes.push(renderNode);
	        if (lang_1.isPresent(parent.component)) {
	            if (lang_1.isPresent(ngContentIndex)) {
	                parent.addContentNode(ngContentIndex, lang_1.isPresent(appEl) ? appEl : renderNode);
	            }
	        }
	        else if (lang_1.isBlank(parent.renderNode)) {
	            this.rootNodesOrAppElements.push(lang_1.isPresent(appEl) ? appEl : renderNode);
	        }
	    };
	    ViewBuilderVisitor.prototype._getParentRenderNode = function (ngContentIndex, parent) {
	        return lang_1.isPresent(parent.component) &&
	            parent.component.template.encapsulation !== view_2.ViewEncapsulation.Native ?
	            null :
	            parent.renderNode;
	    };
	    ViewBuilderVisitor.prototype.visitBoundText = function (ast, parent) {
	        return this._visitText('', ast.ngContentIndex, parent);
	    };
	    ViewBuilderVisitor.prototype.visitText = function (ast, parent) {
	        return this._visitText(ast.value, ast.ngContentIndex, parent);
	    };
	    ViewBuilderVisitor.prototype._visitText = function (value, ngContentIndex, parent) {
	        var renderNode = this.factory.createText(this.renderer, this._getParentRenderNode(ngContentIndex, parent), value, this.renderStmts);
	        this._addRenderNode(renderNode, null, ngContentIndex, parent);
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitNgContent = function (ast, parent) {
	        var nodesExpression = this.factory.getProjectedNodes(this.projectableNodes, ast.index);
	        if (lang_1.isPresent(parent.component)) {
	            if (lang_1.isPresent(ast.ngContentIndex)) {
	                parent.addContentNode(ast.ngContentIndex, nodesExpression);
	            }
	        }
	        else {
	            if (lang_1.isPresent(parent.renderNode)) {
	                this.factory.appendProjectedNodes(this.renderer, parent.renderNode, nodesExpression, this.renderStmts);
	            }
	            else {
	                this.rootNodesOrAppElements.push(nodesExpression);
	            }
	        }
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitElement = function (ast, parent) {
	        var _this = this;
	        var renderNode = this.factory.createElement(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), ast.name, this.rootSelector, this.renderStmts);
	        var component = ast.getComponent();
	        var elementIndex = this.elementCount++;
	        var protoEl = this.protoView.protoElements[elementIndex];
	        protoEl.renderEvents.forEach(function (eventAst) {
	            var disposable;
	            if (lang_1.isPresent(eventAst.target)) {
	                disposable = _this.factory.createGlobalEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, eventAst, _this.renderStmts);
	            }
	            else {
	                disposable = _this.factory.createElementEventListener(_this.renderer, _this.view, protoEl.boundElementIndex, renderNode, eventAst, _this.renderStmts);
	            }
	            _this.appDisposables.push(disposable);
	        });
	        for (var i = 0; i < protoEl.attrNameAndValues.length; i++) {
	            var attrName = protoEl.attrNameAndValues[i][0];
	            var attrValue = protoEl.attrNameAndValues[i][1];
	            this.factory.setElementAttribute(this.renderer, renderNode, attrName, attrValue, this.renderStmts);
	        }
	        var appEl = null;
	        if (lang_1.isPresent(protoEl.appProtoEl)) {
	            appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, null, this.appStmts);
	            this.appElements.push(appEl);
	        }
	        this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
	        var newParent = new ParentElement(renderNode, lang_1.isPresent(appEl) ? appEl : parent.appEl, component);
	        template_ast_1.templateVisitAll(this, ast.children, newParent);
	        if (lang_1.isPresent(appEl) && lang_1.isPresent(component)) {
	            this.factory.createAndSetComponentView(this.renderer, this.viewManager, this.view, appEl, component, newParent.contentNodesByNgContentIndex, this.appStmts);
	        }
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitEmbeddedTemplate = function (ast, parent) {
	        var renderNode = this.factory.createTemplateAnchor(this.renderer, this._getParentRenderNode(ast.ngContentIndex, parent), this.renderStmts);
	        var elementIndex = this.elementCount++;
	        var protoEl = this.protoView.protoElements[elementIndex];
	        var embeddedViewFactory = this.factory.createViewFactory(ast.children, protoEl.embeddedTemplateIndex, this.targetStatements);
	        var appEl = this.factory.createAppElement(protoEl.appProtoEl, this.view, renderNode, parent.appEl, embeddedViewFactory, this.appStmts);
	        this._addRenderNode(renderNode, appEl, ast.ngContentIndex, parent);
	        this.appElements.push(appEl);
	        return null;
	    };
	    ViewBuilderVisitor.prototype.visitVariable = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitAttr = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitDirective = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitEvent = function (ast, ctx) { return null; };
	    ViewBuilderVisitor.prototype.visitDirectiveProperty = function (ast, context) { return null; };
	    ViewBuilderVisitor.prototype.visitElementProperty = function (ast, context) { return null; };
	    return ViewBuilderVisitor;
	}());
	function codeGenEventHandler(view, boundElementIndex, eventName) {
	    return util_1.codeGenValueFn(['event'], view.expression + ".triggerEventHandlers(" + util_1.escapeValue(eventName) + ", event, " + boundElementIndex + ")");
	}
	function codeGenViewFactoryName(component, embeddedTemplateIndex) {
	    return "viewFactory_" + component.type.name + embeddedTemplateIndex;
	}
	function codeGenViewEncapsulation(value) {
	    if (lang_1.IS_DART) {
	        return "" + proto_view_compiler_1.METADATA_MODULE_REF + value;
	    }
	    else {
	        return "" + value;
	    }
	}


/***/ },

/***/ 35:
/***/ function(module, exports) {

	'use strict';"use strict";
	// TODO: vsavkin rename it into TemplateLoader
	/**
	 * An interface for retrieving documents by URL that the compiler uses
	 * to load templates.
	 */
	var XHR = (function () {
	    function XHR() {
	    }
	    XHR.prototype.get = function (url) { return null; };
	    return XHR;
	}());
	exports.XHR = XHR;


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	/**
	 * Marks a function or method as an Angular 2 entrypoint. Only necessary in Dart code.
	 *
	 * The optional `name` parameter will be reflected in logs when the entry point is processed.
	 *
	 * See [the wiki][] for detailed documentation.
	 * [the wiki]: https://github.com/angular/angular/wiki/Angular-2-Dart-Transformer#entry_points
	 *
	 * ## Example
	 *
	 * ```
	 * @AngularEntrypoint("name-for-debug")
	 * void main() {
	 *   bootstrap(MyComponent);
	 * }
	 * ```
	 */
	var AngularEntrypoint = (function () {
	    function AngularEntrypoint(name) {
	        this.name = name;
	    }
	    AngularEntrypoint = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], AngularEntrypoint);
	    return AngularEntrypoint;
	}());
	exports.AngularEntrypoint = AngularEntrypoint;


/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var debug_node_1 = __webpack_require__(117);
	var DebugDomRootRenderer = (function () {
	    function DebugDomRootRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	        return new DebugDomRenderer(this, this._delegate.renderComponent(componentProto));
	    };
	    return DebugDomRootRenderer;
	}());
	exports.DebugDomRootRenderer = DebugDomRootRenderer;
	var DebugDomRenderer = (function () {
	    function DebugDomRenderer(_rootRenderer, _delegate) {
	        this._rootRenderer = _rootRenderer;
	        this._delegate = _delegate;
	    }
	    DebugDomRenderer.prototype.renderComponent = function (componentType) {
	        return this._rootRenderer.renderComponent(componentType);
	    };
	    DebugDomRenderer.prototype.selectRootElement = function (selector) {
	        var nativeEl = this._delegate.selectRootElement(selector);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, null);
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createElement = function (parentElement, name) {
	        var nativeEl = this._delegate.createElement(parentElement, name);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, debug_node_1.getDebugNode(parentElement));
	        debugEl.name = name;
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement) {
	        var comment = this._delegate.createTemplateAnchor(parentElement);
	        var debugEl = new debug_node_1.DebugNode(comment, debug_node_1.getDebugNode(parentElement));
	        debug_node_1.indexDebugNode(debugEl);
	        return comment;
	    };
	    DebugDomRenderer.prototype.createText = function (parentElement, value) {
	        var text = this._delegate.createText(parentElement, value);
	        var debugEl = new debug_node_1.DebugNode(text, debug_node_1.getDebugNode(parentElement));
	        debug_node_1.indexDebugNode(debugEl);
	        return text;
	    };
	    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        var debugParent = debug_node_1.getDebugNode(parentElement);
	        if (lang_1.isPresent(debugParent) && debugParent instanceof debug_node_1.DebugElement) {
	            var debugElement_1 = debugParent;
	            nodes.forEach(function (node) { debugElement_1.addChild(debug_node_1.getDebugNode(node)); });
	        }
	        this._delegate.projectNodes(parentElement, nodes);
	    };
	    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        var debugNode = debug_node_1.getDebugNode(node);
	        if (lang_1.isPresent(debugNode)) {
	            var debugParent = debugNode.parent;
	            if (viewRootNodes.length > 0 && lang_1.isPresent(debugParent)) {
	                var debugViewRootNodes = [];
	                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(debug_node_1.getDebugNode(rootNode)); });
	                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	            }
	        }
	        this._delegate.attachViewAfter(node, viewRootNodes);
	    };
	    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	        viewRootNodes.forEach(function (node) {
	            var debugNode = debug_node_1.getDebugNode(node);
	            if (lang_1.isPresent(debugNode) && lang_1.isPresent(debugNode.parent)) {
	                debugNode.parent.removeChild(debugNode);
	            }
	        });
	        this._delegate.detachView(viewRootNodes);
	    };
	    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        viewAllNodes.forEach(function (node) { debug_node_1.removeDebugNodeFromIndex(debug_node_1.getDebugNode(node)); });
	        this._delegate.destroyView(hostElement, viewAllNodes);
	    };
	    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl)) {
	            debugEl.listeners.push(new debug_node_1.EventListener(name, callback));
	        }
	        return this._delegate.listen(renderElement, name, callback);
	    };
	    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._delegate.listenGlobal(target, name, callback);
	    };
	    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.properties.set(propertyName, propertyValue);
	        }
	        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.attributes.set(attributeName, attributeValue);
	        }
	        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	    };
	    /**
	     * Used only in debug mode to serialize property changes to comment nodes,
	     * such as <template> placeholders.
	     */
	    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	    };
	    /**
	     * Used only in development mode to set information needed by the DebugNode for this element.
	     */
	    DebugDomRenderer.prototype.setElementDebugInfo = function (renderElement, info) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        debugEl.setDebugInfo(info);
	        this._delegate.setElementDebugInfo(renderElement, info);
	    };
	    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        this._delegate.setElementClass(renderElement, className, isAdd);
	    };
	    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        this._delegate.setElementStyle(renderElement, styleName, styleValue);
	    };
	    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        this._delegate.invokeElementMethod(renderElement, methodName, args);
	    };
	    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	    return DebugDomRenderer;
	}());
	exports.DebugDomRenderer = DebugDomRenderer;


/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var interfaces_1 = __webpack_require__(68);
	function hasLifecycleHook(lcInterface, token) {
	    if (!(token instanceof lang_1.Type))
	        return false;
	    var proto = token.prototype;
	    switch (lcInterface) {
	        case interfaces_1.LifecycleHooks.AfterContentInit:
	            return !!proto.ngAfterContentInit;
	        case interfaces_1.LifecycleHooks.AfterContentChecked:
	            return !!proto.ngAfterContentChecked;
	        case interfaces_1.LifecycleHooks.AfterViewInit:
	            return !!proto.ngAfterViewInit;
	        case interfaces_1.LifecycleHooks.AfterViewChecked:
	            return !!proto.ngAfterViewChecked;
	        case interfaces_1.LifecycleHooks.OnChanges:
	            return !!proto.ngOnChanges;
	        case interfaces_1.LifecycleHooks.DoCheck:
	            return !!proto.ngDoCheck;
	        case interfaces_1.LifecycleHooks.OnDestroy:
	            return !!proto.ngOnDestroy;
	        case interfaces_1.LifecycleHooks.OnInit:
	            return !!proto.ngOnInit;
	        default:
	            return false;
	    }
	}
	exports.hasLifecycleHook = hasLifecycleHook;


/***/ },

/***/ 68:
/***/ function(module, exports) {

	'use strict';"use strict";
	(function (LifecycleHooks) {
	    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
	var LifecycleHooks = exports.LifecycleHooks;
	/**
	 * @internal
	 */
	exports.LIFECYCLE_HOOKS_VALUES = [
	    LifecycleHooks.OnInit,
	    LifecycleHooks.OnDestroy,
	    LifecycleHooks.DoCheck,
	    LifecycleHooks.OnChanges,
	    LifecycleHooks.AfterContentInit,
	    LifecycleHooks.AfterContentChecked,
	    LifecycleHooks.AfterViewInit,
	    LifecycleHooks.AfterViewChecked
	];


/***/ },

/***/ 290:
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * This is here because DART requires it. It is noop in JS.
	 */
	function wtfInit() { }
	exports.wtfInit = wtfInit;


/***/ },

/***/ 295:
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * JS version of browser APIs. This library can only run in the browser.
	 */
	var win = window;
	exports.window = win;
	exports.document = window.document;
	exports.location = window.location;
	exports.gc = window['gc'] ? function () { return window['gc'](); } : function () { return null; };
	exports.performance = window['performance'] ? window['performance'] : null;
	exports.Event = window['Event'];
	exports.MouseEvent = window['MouseEvent'];
	exports.KeyboardEvent = window['KeyboardEvent'];
	exports.EventTarget = window['EventTarget'];
	exports.History = window['History'];
	exports.Location = window['Location'];
	exports.EventListener = window['EventListener'];


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	exports.Math = lang_1.global.Math;
	exports.NaN = typeof exports.NaN;


/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(11);
	var generic_browser_adapter_1 = __webpack_require__(297);
	var _attrToPropMap = {
	    'class': 'className',
	    'innerHtml': 'innerHTML',
	    'readonly': 'readOnly',
	    'tabindex': 'tabIndex'
	};
	var DOM_KEY_LOCATION_NUMPAD = 3;
	// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	var _keyMap = {
	    // The following values are here for cross-browser compatibility and to match the W3C standard
	    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
	    '\b': 'Backspace',
	    '\t': 'Tab',
	    '\x7F': 'Delete',
	    '\x1B': 'Escape',
	    'Del': 'Delete',
	    'Esc': 'Escape',
	    'Left': 'ArrowLeft',
	    'Right': 'ArrowRight',
	    'Up': 'ArrowUp',
	    'Down': 'ArrowDown',
	    'Menu': 'ContextMenu',
	    'Scroll': 'ScrollLock',
	    'Win': 'OS'
	};
	// There is a bug in Chrome for numeric keypad keys:
	// https://code.google.com/p/chromium/issues/detail?id=155654
	// 1, 2, 3 ... are reported as A, B, C ...
	var _chromeNumKeyPadMap = {
	    'A': '1',
	    'B': '2',
	    'C': '3',
	    'D': '4',
	    'E': '5',
	    'F': '6',
	    'G': '7',
	    'H': '8',
	    'I': '9',
	    'J': '*',
	    'K': '+',
	    'M': '-',
	    'N': '.',
	    'O': '/',
	    '\x60': '0',
	    '\x90': 'NumLock'
	};
	/**
	 * A `DomAdapter` powered by full browser DOM APIs.
	 */
	/* tslint:disable:requireParameterType */
	var BrowserDomAdapter = (function (_super) {
	    __extends(BrowserDomAdapter, _super);
	    function BrowserDomAdapter() {
	        _super.apply(this, arguments);
	    }
	    BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error("parse not implemented"); };
	    BrowserDomAdapter.makeCurrent = function () { dom_adapter_1.setRootDomAdapter(new BrowserDomAdapter()); };
	    BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	    BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
	    BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
	    BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
	        el[methodName].apply(el, args);
	    };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.logError = function (error) {
	        if (window.console.error) {
	            window.console.error(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.log = function (error) { window.console.log(error); };
	    BrowserDomAdapter.prototype.logGroup = function (error) {
	        if (window.console.group) {
	            window.console.group(error);
	            this.logError(error);
	        }
	        else {
	            window.console.log(error);
	        }
	    };
	    BrowserDomAdapter.prototype.logGroupEnd = function () {
	        if (window.console.groupEnd) {
	            window.console.groupEnd();
	        }
	    };
	    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	        get: function () { return _attrToPropMap; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
	    BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	    BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	    BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	        el.addEventListener(evt, listener, false);
	        // Needed to follow Dart's subscription semantic, until fix of
	        // https://code.google.com/p/dart/issues/detail?id=17406
	        return function () { el.removeEventListener(evt, listener, false); };
	    };
	    BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	    BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	        var evt = document.createEvent('MouseEvent');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.createEvent = function (eventType) {
	        var evt = document.createEvent('Event');
	        evt.initEvent(eventType, true, true);
	        return evt;
	    };
	    BrowserDomAdapter.prototype.preventDefault = function (evt) {
	        evt.preventDefault();
	        evt.returnValue = false;
	    };
	    BrowserDomAdapter.prototype.isPrevented = function (evt) {
	        return evt.defaultPrevented || lang_1.isPresent(evt.returnValue) && !evt.returnValue;
	    };
	    BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	    BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	    BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	    BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	    BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	    BrowserDomAdapter.prototype.content = function (node) {
	        if (this.hasProperty(node, "content")) {
	            return node.content;
	        }
	        else {
	            return node;
	        }
	    };
	    BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	    BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	    BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	    BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	    BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	        var childNodes = el.childNodes;
	        var res = collection_1.ListWrapper.createFixedSize(childNodes.length);
	        for (var i = 0; i < childNodes.length; i++) {
	            res[i] = childNodes[i];
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.clearNodes = function (el) {
	        while (el.firstChild) {
	            el.removeChild(el.firstChild);
	        }
	    };
	    BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	    BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	    BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	    BrowserDomAdapter.prototype.remove = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild(node);
	        }
	        return node;
	    };
	    BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	    BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) { nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); }); };
	    BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	    BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	    BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	    // TODO(vicb): removed Element type because it does not support StyleElement
	    BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	    BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	    BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	    BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	    BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	    BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	    BrowserDomAdapter.prototype.createTemplate = function (html) {
	        var t = document.createElement('template');
	        t.innerHTML = html;
	        return t;
	    };
	    BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElement(tagName);
	    };
	    BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createElementNS(ns, tagName);
	    };
	    BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	        if (doc === void 0) { doc = document; }
	        return doc.createTextNode(text);
	    };
	    BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	        if (doc === void 0) { doc = document; }
	        var el = doc.createElement('SCRIPT');
	        el.setAttribute(attrName, attrValue);
	        return el;
	    };
	    BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	        if (doc === void 0) { doc = document; }
	        var style = doc.createElement('style');
	        this.appendChild(style, this.createTextNode(css));
	        return style;
	    };
	    BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
	    BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
	    BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
	    BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	    BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	        return element.getElementsByClassName(name);
	    };
	    BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	        return element.getElementsByTagName(name);
	    };
	    BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	    BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	    BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	    BrowserDomAdapter.prototype.hasClass = function (element, className) { return element.classList.contains(className); };
	    BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	        element.style[styleName] = styleValue;
	    };
	    BrowserDomAdapter.prototype.removeStyle = function (element, stylename) { element.style[stylename] = null; };
	    BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	    BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	        if (styleValue === void 0) { styleValue = null; }
	        var value = this.getStyle(element, styleName) || '';
	        return styleValue ? value == styleValue : value.length > 0;
	    };
	    BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	    BrowserDomAdapter.prototype.attributeMap = function (element) {
	        var res = new Map();
	        var elAttrs = element.attributes;
	        for (var i = 0; i < elAttrs.length; i++) {
	            var attrib = elAttrs[i];
	            res.set(attrib.name, attrib.value);
	        }
	        return res;
	    };
	    BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) { return element.hasAttribute(attribute); };
	    BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	        return element.hasAttributeNS(ns, attribute);
	    };
	    BrowserDomAdapter.prototype.getAttribute = function (element, attribute) { return element.getAttribute(attribute); };
	    BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	        return element.getAttributeNS(ns, name);
	    };
	    BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	    BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	        element.setAttributeNS(ns, name, value);
	    };
	    BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	    BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) { element.removeAttributeNS(ns, name); };
	    BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	    BrowserDomAdapter.prototype.createHtmlDocument = function () {
	        return document.implementation.createHTMLDocument('fakeTitle');
	    };
	    BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	    BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	        try {
	            return el.getBoundingClientRect();
	        }
	        catch (e) {
	            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	        }
	    };
	    BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	    BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	    BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	        var matches = false;
	        if (n instanceof HTMLElement) {
	            if (n.matches) {
	                matches = n.matches(selector);
	            }
	            else if (n.msMatchesSelector) {
	                matches = n.msMatchesSelector(selector);
	            }
	            else if (n.webkitMatchesSelector) {
	                matches = n.webkitMatchesSelector(selector);
	            }
	        }
	        return matches;
	    };
	    BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	        return el instanceof HTMLElement && el.nodeName == "TEMPLATE";
	    };
	    BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	    BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	    BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	    BrowserDomAdapter.prototype.hasShadowRoot = function (node) { return node instanceof HTMLElement && lang_1.isPresent(node.shadowRoot); };
	    BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	    BrowserDomAdapter.prototype.importIntoDoc = function (node) {
	        var toImport = node;
	        if (this.isTemplateElement(node)) {
	            toImport = this.content(node);
	        }
	        return document.importNode(toImport, true);
	    };
	    BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	    BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
	    BrowserDomAdapter.prototype.getEventKey = function (event) {
	        var key = event.key;
	        if (lang_1.isBlank(key)) {
	            key = event.keyIdentifier;
	            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
	            // Safari
	            // cf
	            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
	            if (lang_1.isBlank(key)) {
	                return 'Unidentified';
	            }
	            if (key.startsWith('U+')) {
	                key = String.fromCharCode(parseInt(key.substring(2), 16));
	                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
	                    // There is a bug in Chrome for numeric keypad keys:
	                    // https://code.google.com/p/chromium/issues/detail?id=155654
	                    // 1, 2, 3 ... are reported as A, B, C ...
	                    key = _chromeNumKeyPadMap[key];
	                }
	            }
	        }
	        if (_keyMap.hasOwnProperty(key)) {
	            key = _keyMap[key];
	        }
	        return key;
	    };
	    BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
	        if (target == "window") {
	            return window;
	        }
	        else if (target == "document") {
	            return document;
	        }
	        else if (target == "body") {
	            return document.body;
	        }
	    };
	    BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	    BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	    BrowserDomAdapter.prototype.getBaseHref = function () {
	        var href = getBaseElementHref();
	        if (lang_1.isBlank(href)) {
	            return null;
	        }
	        return relativePath(href);
	    };
	    BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	    BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	    BrowserDomAdapter.prototype.setData = function (element, name, value) {
	        this.setAttribute(element, 'data-' + name, value);
	    };
	    BrowserDomAdapter.prototype.getData = function (element, name) { return this.getAttribute(element, 'data-' + name); };
	    BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	    // TODO(tbosch): move this into a separate environment class once we have it
	    BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { lang_1.setValueOnPath(lang_1.global, path, value); };
	    BrowserDomAdapter.prototype.requestAnimationFrame = function (callback) { return window.requestAnimationFrame(callback); };
	    BrowserDomAdapter.prototype.cancelAnimationFrame = function (id) { window.cancelAnimationFrame(id); };
	    BrowserDomAdapter.prototype.performanceNow = function () {
	        // performance.now() is not available in all browsers, see
	        // http://caniuse.com/#search=performance.now
	        if (lang_1.isPresent(window.performance) && lang_1.isPresent(window.performance.now)) {
	            return window.performance.now();
	        }
	        else {
	            return lang_1.DateWrapper.toMillis(lang_1.DateWrapper.now());
	        }
	    };
	    return BrowserDomAdapter;
	}(generic_browser_adapter_1.GenericBrowserDomAdapter));
	exports.BrowserDomAdapter = BrowserDomAdapter;
	var baseElement = null;
	function getBaseElementHref() {
	    if (lang_1.isBlank(baseElement)) {
	        baseElement = document.querySelector('base');
	        if (lang_1.isBlank(baseElement)) {
	            return null;
	        }
	    }
	    return baseElement.getAttribute('href');
	}
	// based on urlUtils.js in AngularJS 1
	var urlParsingNode = null;
	function relativePath(url) {
	    if (lang_1.isBlank(urlParsingNode)) {
	        urlParsingNode = document.createElement("a");
	    }
	    urlParsingNode.setAttribute('href', url);
	    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	        '/' + urlParsingNode.pathname;
	}


/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(11);
	var xhr_impl_1 = __webpack_require__(209);
	/**
	 * Provides DOM operations in any browser environment.
	 */
	var GenericBrowserDomAdapter = (function (_super) {
	    __extends(GenericBrowserDomAdapter, _super);
	    function GenericBrowserDomAdapter() {
	        var _this = this;
	        _super.call(this);
	        this._animationPrefix = null;
	        this._transitionEnd = null;
	        try {
	            var element = this.createElement('div', this.defaultDoc());
	            if (lang_1.isPresent(this.getStyle(element, 'animationName'))) {
	                this._animationPrefix = '';
	            }
	            else {
	                var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	                for (var i = 0; i < domPrefixes.length; i++) {
	                    if (lang_1.isPresent(this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
	                        this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
	                        break;
	                    }
	                }
	            }
	            var transEndEventNames = {
	                WebkitTransition: 'webkitTransitionEnd',
	                MozTransition: 'transitionend',
	                OTransition: 'oTransitionEnd otransitionend',
	                transition: 'transitionend'
	            };
	            collection_1.StringMapWrapper.forEach(transEndEventNames, function (value, key) {
	                if (lang_1.isPresent(_this.getStyle(element, key))) {
	                    _this._transitionEnd = value;
	                }
	            });
	        }
	        catch (e) {
	            this._animationPrefix = null;
	            this._transitionEnd = null;
	        }
	    }
	    GenericBrowserDomAdapter.prototype.getXHR = function () { return xhr_impl_1.XHRImpl; };
	    GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
	    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	    };
	    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	        return lang_1.isFunction(this.defaultDoc().body.createShadowRoot);
	    };
	    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () {
	        return lang_1.isPresent(this._animationPrefix) ? this._animationPrefix : "";
	    };
	    GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return lang_1.isPresent(this._transitionEnd) ? this._transitionEnd : ""; };
	    GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
	        return lang_1.isPresent(this._animationPrefix) && lang_1.isPresent(this._transitionEnd);
	    };
	    return GenericBrowserDomAdapter;
	}(dom_adapter_1.DomAdapter));
	exports.GenericBrowserDomAdapter = GenericBrowserDomAdapter;


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(11);
	var core_1 = __webpack_require__(5);
	var PublicTestability = (function () {
	    function PublicTestability(testability) {
	        this._testability = testability;
	    }
	    PublicTestability.prototype.isStable = function () { return this._testability.isStable(); };
	    PublicTestability.prototype.whenStable = function (callback) { this._testability.whenStable(callback); };
	    PublicTestability.prototype.findBindings = function (using, provider, exactMatch) {
	        return this.findProviders(using, provider, exactMatch);
	    };
	    PublicTestability.prototype.findProviders = function (using, provider, exactMatch) {
	        return this._testability.findBindings(using, provider, exactMatch);
	    };
	    return PublicTestability;
	}());
	var BrowserGetTestability = (function () {
	    function BrowserGetTestability() {
	    }
	    BrowserGetTestability.init = function () { core_1.setTestabilityGetter(new BrowserGetTestability()); };
	    BrowserGetTestability.prototype.addToWindow = function (registry) {
	        lang_1.global.getAngularTestability = function (elem, findInAncestors) {
	            if (findInAncestors === void 0) { findInAncestors = true; }
	            var testability = registry.findTestabilityInTree(elem, findInAncestors);
	            if (testability == null) {
	                throw new Error('Could not find testability for element.');
	            }
	            return new PublicTestability(testability);
	        };
	        lang_1.global.getAllAngularTestabilities = function () {
	            var testabilities = registry.getAllTestabilities();
	            return testabilities.map(function (testability) { return new PublicTestability(testability); });
	        };
	        lang_1.global.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	        var whenAllStable = function (callback) {
	            var testabilities = lang_1.global.getAllAngularTestabilities();
	            var count = testabilities.length;
	            var didWork = false;
	            var decrement = function (didWork_) {
	                didWork = didWork || didWork_;
	                count--;
	                if (count == 0) {
	                    callback(didWork);
	                }
	            };
	            testabilities.forEach(function (testability) { testability.whenStable(decrement); });
	        };
	        if (!lang_1.global.frameworkStabilizers) {
	            lang_1.global.frameworkStabilizers = collection_1.ListWrapper.createGrowableSize(0);
	        }
	        lang_1.global.frameworkStabilizers.push(whenAllStable);
	    };
	    BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        if (elem == null) {
	            return null;
	        }
	        var t = registry.getTestability(elem);
	        if (lang_1.isPresent(t)) {
	            return t;
	        }
	        else if (!findInAncestors) {
	            return null;
	        }
	        if (dom_adapter_1.DOM.isShadowRoot(elem)) {
	            return this.findTestabilityInTree(registry, dom_adapter_1.DOM.getHost(elem), true);
	        }
	        return this.findTestabilityInTree(registry, dom_adapter_1.DOM.parentElement(elem), true);
	    };
	    return BrowserGetTestability;
	}());
	exports.BrowserGetTestability = BrowserGetTestability;


/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var dom_adapter_1 = __webpack_require__(11);
	/**
	 * A service that can be used to get and set the title of a current HTML document.
	 *
	 * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
	 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
	 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
	 * title value.
	 */
	var Title = (function () {
	    function Title() {
	    }
	    /**
	     * Get the title of the current HTML document.
	     * @returns {string}
	     */
	    Title.prototype.getTitle = function () { return dom_adapter_1.DOM.getTitle(); };
	    /**
	     * Set the title of the current HTML document.
	     * @param newTitle
	     */
	    Title.prototype.setTitle = function (newTitle) { dom_adapter_1.DOM.setTitle(newTitle); };
	    return Title;
	}());
	exports.Title = Title;


/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var application_ref_1 = __webpack_require__(180);
	var lang_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(295);
	var dom_adapter_1 = __webpack_require__(11);
	/**
	 * Entry point for all Angular debug tools. This object corresponds to the `ng`
	 * global variable accessible in the dev console.
	 */
	var AngularTools = (function () {
	    function AngularTools(ref) {
	        this.profiler = new AngularProfiler(ref);
	    }
	    return AngularTools;
	}());
	exports.AngularTools = AngularTools;
	/**
	 * Entry point for all Angular profiling-related debug tools. This object
	 * corresponds to the `ng.profiler` in the dev console.
	 */
	var AngularProfiler = (function () {
	    function AngularProfiler(ref) {
	        this.appRef = ref.injector.get(application_ref_1.ApplicationRef);
	    }
	    /**
	     * Exercises change detection in a loop and then prints the average amount of
	     * time in milliseconds how long a single round of change detection takes for
	     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
	     * of 500 milliseconds.
	     *
	     * Optionally, a user may pass a `config` parameter containing a map of
	     * options. Supported options are:
	     *
	     * `record` (boolean) - causes the profiler to record a CPU profile while
	     * it exercises the change detector. Example:
	     *
	     * ```
	     * ng.profiler.timeChangeDetection({record: true})
	     * ```
	     */
	    AngularProfiler.prototype.timeChangeDetection = function (config) {
	        var record = lang_1.isPresent(config) && config['record'];
	        var profileName = 'Change Detection';
	        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	        var isProfilerAvailable = lang_1.isPresent(browser_1.window.console.profile);
	        if (record && isProfilerAvailable) {
	            browser_1.window.console.profile(profileName);
	        }
	        var start = dom_adapter_1.DOM.performanceNow();
	        var numTicks = 0;
	        while (numTicks < 5 || (dom_adapter_1.DOM.performanceNow() - start) < 500) {
	            this.appRef.tick();
	            numTicks++;
	        }
	        var end = dom_adapter_1.DOM.performanceNow();
	        if (record && isProfilerAvailable) {
	            // need to cast to <any> because type checker thinks there's no argument
	            // while in fact there is:
	            //
	            // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	            browser_1.window.console.profileEnd(profileName);
	        }
	        var msPerTick = (end - start) / numTicks;
	        browser_1.window.console.log("ran " + numTicks + " change detection cycles");
	        browser_1.window.console.log(lang_1.NumberWrapper.toFixed(msPerTick, 2) + " ms per check");
	    };
	    return AngularProfiler;
	}());
	exports.AngularProfiler = AngularProfiler;


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var common_tools_1 = __webpack_require__(300);
	var context = lang_1.global;
	/**
	 * Enabled Angular 2 debug tools that are accessible via your browser's
	 * developer console.
	 *
	 * Usage:
	 *
	 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
	 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
	 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
	 *    then hit Enter.
	 */
	function enableDebugTools(ref) {
	    context.ng = new common_tools_1.AngularTools(ref);
	}
	exports.enableDebugTools = enableDebugTools;
	/**
	 * Disables Angular 2 tools.
	 */
	function disableDebugTools() {
	    delete context.ng;
	}
	exports.disableDebugTools = disableDebugTools;


/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var xhr_1 = __webpack_require__(35);
	var exceptions_1 = __webpack_require__(4);
	var lang_1 = __webpack_require__(1);
	var promise_1 = __webpack_require__(39);
	/**
	 * An implementation of XHR that uses a template cache to avoid doing an actual
	 * XHR.
	 *
	 * The template cache needs to be built and loaded into window.$templateCache
	 * via a separate mechanism.
	 */
	var CachedXHR = (function (_super) {
	    __extends(CachedXHR, _super);
	    function CachedXHR() {
	        _super.call(this);
	        this._cache = lang_1.global.$templateCache;
	        if (this._cache == null) {
	            throw new exceptions_1.BaseException('CachedXHR: Template cache was not found in $templateCache.');
	        }
	    }
	    CachedXHR.prototype.get = function (url) {
	        if (this._cache.hasOwnProperty(url)) {
	            return promise_1.PromiseWrapper.resolve(this._cache[url]);
	        }
	        else {
	            return promise_1.PromiseWrapper.reject('CachedXHR: Did not find cached template for ' + url, null);
	        }
	    };
	    return CachedXHR;
	}(xhr_1.XHR));
	exports.CachedXHR = CachedXHR;


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var promise_1 = __webpack_require__(39);
	var lang_1 = __webpack_require__(1);
	var xhr_1 = __webpack_require__(35);
	var XHRImpl = (function (_super) {
	    __extends(XHRImpl, _super);
	    function XHRImpl() {
	        _super.apply(this, arguments);
	    }
	    XHRImpl.prototype.get = function (url) {
	        var completer = promise_1.PromiseWrapper.completer();
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url, true);
	        xhr.responseType = 'text';
	        xhr.onload = function () {
	            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	            // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
	            var response = lang_1.isPresent(xhr.response) ? xhr.response : xhr.responseText;
	            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	            var status = xhr.status === 1223 ? 204 : xhr.status;
	            // fix status code when it is 0 (0 status is undocumented).
	            // Occurs when accessing file resources or on Android 4.1 stock browser
	            // while retrieving files from application cache.
	            if (status === 0) {
	                status = response ? 200 : 0;
	            }
	            if (200 <= status && status <= 300) {
	                completer.resolve(response);
	            }
	            else {
	                completer.reject("Failed to load " + url, null);
	            }
	        };
	        xhr.onerror = function () { completer.reject("Failed to load " + url, null); };
	        xhr.send();
	        return completer.promise;
	    };
	    return XHRImpl;
	}(xhr_1.XHR));
	exports.XHRImpl = XHRImpl;


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(7);
	var xhr_1 = __webpack_require__(35);
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(94);
	var testability_1 = __webpack_require__(73);
	var dom_adapter_1 = __webpack_require__(11);
	var dom_events_1 = __webpack_require__(211);
	var key_events_1 = __webpack_require__(306);
	var hammer_gestures_1 = __webpack_require__(131);
	var dom_tokens_1 = __webpack_require__(54);
	var dom_renderer_1 = __webpack_require__(130);
	var shared_styles_host_1 = __webpack_require__(75);
	var shared_styles_host_2 = __webpack_require__(75);
	var browser_details_1 = __webpack_require__(153);
	var animation_builder_1 = __webpack_require__(152);
	var browser_adapter_1 = __webpack_require__(208);
	var testability_2 = __webpack_require__(298);
	var xhr_cache_1 = __webpack_require__(302);
	var wtf_init_1 = __webpack_require__(290);
	var event_manager_1 = __webpack_require__(40);
	var hammer_gestures_2 = __webpack_require__(131);
	var common_dom_1 = __webpack_require__(151);
	var dom_tokens_2 = __webpack_require__(54);
	exports.DOCUMENT = dom_tokens_2.DOCUMENT;
	var title_1 = __webpack_require__(299);
	exports.Title = title_1.Title;
	var common_dom_2 = __webpack_require__(151);
	exports.ELEMENT_PROBE_PROVIDERS = common_dom_2.ELEMENT_PROBE_PROVIDERS;
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = common_dom_2.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
	exports.inspectNativeElement = common_dom_2.inspectNativeElement;
	exports.By = common_dom_2.By;
	var browser_adapter_2 = __webpack_require__(208);
	exports.BrowserDomAdapter = browser_adapter_2.BrowserDomAdapter;
	var tools_1 = __webpack_require__(301);
	exports.enableDebugTools = tools_1.enableDebugTools;
	exports.disableDebugTools = tools_1.disableDebugTools;
	var hammer_gestures_3 = __webpack_require__(131);
	exports.HAMMER_GESTURE_CONFIG = hammer_gestures_3.HAMMER_GESTURE_CONFIG;
	exports.HammerGestureConfig = hammer_gestures_3.HammerGestureConfig;
	/**
	 * A set of providers to initialize the Angular platform in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
	 */
	exports.BROWSER_PROVIDERS = lang_1.CONST_EXPR([
	    core_1.PLATFORM_COMMON_PROVIDERS,
	    new di_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initDomAdapter, multi: true }),
	]);
	function _exceptionHandler() {
	    // !IS_DART is required because we must rethrow exceptions in JS,
	    // but must not rethrow exceptions in Dart
	    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
	}
	function _document() {
	    return dom_adapter_1.DOM.defaultDoc();
	}
	/**
	 * A set of providers to initialize an Angular application in a web browser.
	 *
	 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
	 */
	exports.BROWSER_APP_COMMON_PROVIDERS = lang_1.CONST_EXPR([
	    core_1.APPLICATION_COMMON_PROVIDERS,
	    common_1.FORM_PROVIDERS,
	    new di_1.Provider(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
	    new di_1.Provider(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
	    new di_1.Provider(core_1.ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
	    new di_1.Provider(dom_tokens_1.DOCUMENT, { useFactory: _document, deps: [] }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: key_events_1.KeyEventsPlugin, multi: true }),
	    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true }),
	    new di_1.Provider(hammer_gestures_2.HAMMER_GESTURE_CONFIG, { useClass: hammer_gestures_2.HammerGestureConfig }),
	    new di_1.Provider(dom_renderer_1.DomRootRenderer, { useClass: dom_renderer_1.DomRootRenderer_ }),
	    new di_1.Provider(core_1.RootRenderer, { useExisting: dom_renderer_1.DomRootRenderer }),
	    new di_1.Provider(shared_styles_host_2.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
	    shared_styles_host_1.DomSharedStylesHost,
	    testability_1.Testability,
	    browser_details_1.BrowserDetails,
	    animation_builder_1.AnimationBuilder,
	    event_manager_1.EventManager,
	    common_dom_1.ELEMENT_PROBE_PROVIDERS
	]);
	exports.CACHED_TEMPLATE_PROVIDER = lang_1.CONST_EXPR([new di_1.Provider(xhr_1.XHR, { useClass: xhr_cache_1.CachedXHR })]);
	function initDomAdapter() {
	    browser_adapter_1.BrowserDomAdapter.makeCurrent();
	    wtf_init_1.wtfInit();
	    testability_2.BrowserGetTestability.init();
	}
	exports.initDomAdapter = initDomAdapter;


/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var dom_adapter_1 = __webpack_require__(11);
	/**
	 * Predicates for use with {@link DebugElement}'s query functions.
	 */
	var By = (function () {
	    function By() {
	    }
	    /**
	     * Match all elements.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
	     */
	    By.all = function () { return function (debugElement) { return true; }; };
	    /**
	     * Match elements by the given CSS selector.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
	     */
	    By.css = function (selector) {
	        return function (debugElement) {
	            return lang_1.isPresent(debugElement.nativeElement) ?
	                dom_adapter_1.DOM.elementMatches(debugElement.nativeElement, selector) :
	                false;
	        };
	    };
	    /**
	     * Match elements that have the given directive present.
	     *
	     * ## Example
	     *
	     * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
	     */
	    By.directive = function (type) {
	        return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	    };
	    return By;
	}());
	exports.By = By;


/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var di_1 = __webpack_require__(7);
	var dom_adapter_1 = __webpack_require__(11);
	var debug_node_1 = __webpack_require__(117);
	var dom_renderer_1 = __webpack_require__(130);
	var core_1 = __webpack_require__(5);
	var debug_renderer_1 = __webpack_require__(283);
	var CORE_TOKENS = lang_1.CONST_EXPR({ 'ApplicationRef': core_1.ApplicationRef, 'NgZone': core_1.NgZone });
	var INSPECT_GLOBAL_NAME = 'ng.probe';
	var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	/**
	 * Returns a {@link DebugElement} for the given native DOM element, or
	 * null if the given native element does not have an Angular view associated
	 * with it.
	 */
	function inspectNativeElement(element) {
	    return debug_node_1.getDebugNode(element);
	}
	exports.inspectNativeElement = inspectNativeElement;
	function _createConditionalRootRenderer(rootRenderer) {
	    if (lang_1.assertionsEnabled()) {
	        return _createRootRenderer(rootRenderer);
	    }
	    return rootRenderer;
	}
	function _createRootRenderer(rootRenderer) {
	    dom_adapter_1.DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	    dom_adapter_1.DOM.setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
	    return new debug_renderer_1.DebugDomRootRenderer(rootRenderer);
	}
	/**
	 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	 */
	exports.ELEMENT_PROBE_PROVIDERS = lang_1.CONST_EXPR([
	    new di_1.Provider(core_1.RootRenderer, { useFactory: _createConditionalRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })
	]);
	exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = lang_1.CONST_EXPR([new di_1.Provider(core_1.RootRenderer, { useFactory: _createRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })]);


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	exports.DOM = null;
	function setRootDomAdapter(adapter) {
	    if (lang_1.isBlank(exports.DOM)) {
	        exports.DOM = adapter;
	    }
	}
	exports.setRootDomAdapter = setRootDomAdapter;
	/* tslint:disable:requireParameterType */
	/**
	 * Provides DOM operations in an environment-agnostic way.
	 */
	var DomAdapter = (function () {
	    function DomAdapter() {
	    }
	    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	        /**
	         * Maps attribute names to their corresponding property names for cases
	         * where attribute name doesn't match property name.
	         */
	        get: function () { return this._attrToPropMap; },
	        set: function (value) { this._attrToPropMap = value; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    return DomAdapter;
	}());
	exports.DomAdapter = DomAdapter;


/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var di_1 = __webpack_require__(7);
	var animation_builder_1 = __webpack_require__(152);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var shared_styles_host_1 = __webpack_require__(75);
	var event_manager_1 = __webpack_require__(40);
	var dom_tokens_1 = __webpack_require__(54);
	var metadata_1 = __webpack_require__(71);
	var dom_adapter_1 = __webpack_require__(11);
	var util_1 = __webpack_require__(212);
	var NAMESPACE_URIS = lang_1.CONST_EXPR({ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' });
	var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
	var DomRootRenderer = (function () {
	    function DomRootRenderer(document, eventManager, sharedStylesHost, animate) {
	        this.document = document;
	        this.eventManager = eventManager;
	        this.sharedStylesHost = sharedStylesHost;
	        this.animate = animate;
	        this._registeredComponents = new Map();
	    }
	    DomRootRenderer.prototype.renderComponent = function (componentProto) {
	        var renderer = this._registeredComponents.get(componentProto.id);
	        if (lang_1.isBlank(renderer)) {
	            renderer = new DomRenderer(this, componentProto);
	            this._registeredComponents.set(componentProto.id, renderer);
	        }
	        return renderer;
	    };
	    return DomRootRenderer;
	}());
	exports.DomRootRenderer = DomRootRenderer;
	var DomRootRenderer_ = (function (_super) {
	    __extends(DomRootRenderer_, _super);
	    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animate) {
	        _super.call(this, _document, _eventManager, sharedStylesHost, animate);
	    }
	    DomRootRenderer_ = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), 
	        __metadata('design:paramtypes', [Object, event_manager_1.EventManager, shared_styles_host_1.DomSharedStylesHost, animation_builder_1.AnimationBuilder])
	    ], DomRootRenderer_);
	    return DomRootRenderer_;
	}(DomRootRenderer));
	exports.DomRootRenderer_ = DomRootRenderer_;
	var DomRenderer = (function () {
	    function DomRenderer(_rootRenderer, componentProto) {
	        this._rootRenderer = _rootRenderer;
	        this.componentProto = componentProto;
	        this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
	        if (componentProto.encapsulation !== metadata_1.ViewEncapsulation.Native) {
	            this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	        }
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Emulated) {
	            this._contentAttr = _shimContentAttribute(componentProto.id);
	            this._hostAttr = _shimHostAttribute(componentProto.id);
	        }
	        else {
	            this._contentAttr = null;
	            this._hostAttr = null;
	        }
	    }
	    DomRenderer.prototype.renderComponent = function (componentProto) {
	        return this._rootRenderer.renderComponent(componentProto);
	    };
	    DomRenderer.prototype.selectRootElement = function (selector) {
	        var el = dom_adapter_1.DOM.querySelector(this._rootRenderer.document, selector);
	        if (lang_1.isBlank(el)) {
	            throw new exceptions_1.BaseException("The selector \"" + selector + "\" did not match any elements");
	        }
	        dom_adapter_1.DOM.clearNodes(el);
	        return el;
	    };
	    DomRenderer.prototype.createElement = function (parent, name) {
	        var nsAndName = splitNamespace(name);
	        var el = lang_1.isPresent(nsAndName[0]) ?
	            dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	            dom_adapter_1.DOM.createElement(nsAndName[1]);
	        if (lang_1.isPresent(this._contentAttr)) {
	            dom_adapter_1.DOM.setAttribute(el, this._contentAttr, '');
	        }
	        if (lang_1.isPresent(parent)) {
	            dom_adapter_1.DOM.appendChild(parent, el);
	        }
	        return el;
	    };
	    DomRenderer.prototype.createViewRoot = function (hostElement) {
	        var nodesParent;
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native) {
	            nodesParent = dom_adapter_1.DOM.createShadowRoot(hostElement);
	            this._rootRenderer.sharedStylesHost.addHost(nodesParent);
	            for (var i = 0; i < this._styles.length; i++) {
	                dom_adapter_1.DOM.appendChild(nodesParent, dom_adapter_1.DOM.createStyleElement(this._styles[i]));
	            }
	        }
	        else {
	            if (lang_1.isPresent(this._hostAttr)) {
	                dom_adapter_1.DOM.setAttribute(hostElement, this._hostAttr, '');
	            }
	            nodesParent = hostElement;
	        }
	        return nodesParent;
	    };
	    DomRenderer.prototype.createTemplateAnchor = function (parentElement) {
	        var comment = dom_adapter_1.DOM.createComment(TEMPLATE_COMMENT_TEXT);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.DOM.appendChild(parentElement, comment);
	        }
	        return comment;
	    };
	    DomRenderer.prototype.createText = function (parentElement, value) {
	        var node = dom_adapter_1.DOM.createTextNode(value);
	        if (lang_1.isPresent(parentElement)) {
	            dom_adapter_1.DOM.appendChild(parentElement, node);
	        }
	        return node;
	    };
	    DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        if (lang_1.isBlank(parentElement))
	            return;
	        appendNodes(parentElement, nodes);
	    };
	    DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        moveNodesAfterSibling(node, viewRootNodes);
	        for (var i = 0; i < viewRootNodes.length; i++)
	            this.animateNodeEnter(viewRootNodes[i]);
	    };
	    DomRenderer.prototype.detachView = function (viewRootNodes) {
	        for (var i = 0; i < viewRootNodes.length; i++) {
	            var node = viewRootNodes[i];
	            dom_adapter_1.DOM.remove(node);
	            this.animateNodeLeave(node);
	        }
	    };
	    DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        if (this.componentProto.encapsulation === metadata_1.ViewEncapsulation.Native && lang_1.isPresent(hostElement)) {
	            this._rootRenderer.sharedStylesHost.removeHost(dom_adapter_1.DOM.getShadowRoot(hostElement));
	        }
	    };
	    DomRenderer.prototype.listen = function (renderElement, name, callback) {
	        return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	    };
	    DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        dom_adapter_1.DOM.setProperty(renderElement, propertyName, propertyValue);
	    };
	    DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var attrNs;
	        var nsAndName = splitNamespace(attributeName);
	        if (lang_1.isPresent(nsAndName[0])) {
	            attributeName = nsAndName[0] + ':' + nsAndName[1];
	            attrNs = NAMESPACE_URIS[nsAndName[0]];
	        }
	        if (lang_1.isPresent(attributeValue)) {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.DOM.setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
	            }
	            else {
	                dom_adapter_1.DOM.setAttribute(renderElement, attributeName, attributeValue);
	            }
	        }
	        else {
	            if (lang_1.isPresent(attrNs)) {
	                dom_adapter_1.DOM.removeAttributeNS(renderElement, attrNs, nsAndName[1]);
	            }
	            else {
	                dom_adapter_1.DOM.removeAttribute(renderElement, attributeName);
	            }
	        }
	    };
	    DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        var dashCasedPropertyName = util_1.camelCaseToDashCase(propertyName);
	        if (dom_adapter_1.DOM.isCommentNode(renderElement)) {
	            var existingBindings = lang_1.RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, lang_1.StringWrapper.replaceAll(dom_adapter_1.DOM.getText(renderElement), /\n/g, ''));
	            var parsedBindings = lang_1.Json.parse(existingBindings[1]);
	            parsedBindings[dashCasedPropertyName] = propertyValue;
	            dom_adapter_1.DOM.setText(renderElement, lang_1.StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', lang_1.Json.stringify(parsedBindings)));
	        }
	        else {
	            this.setElementAttribute(renderElement, propertyName, propertyValue);
	        }
	    };
	    DomRenderer.prototype.setElementDebugInfo = function (renderElement, info) { };
	    DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        if (isAdd) {
	            dom_adapter_1.DOM.addClass(renderElement, className);
	        }
	        else {
	            dom_adapter_1.DOM.removeClass(renderElement, className);
	        }
	    };
	    DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        if (lang_1.isPresent(styleValue)) {
	            dom_adapter_1.DOM.setStyle(renderElement, styleName, lang_1.stringify(styleValue));
	        }
	        else {
	            dom_adapter_1.DOM.removeStyle(renderElement, styleName);
	        }
	    };
	    DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        dom_adapter_1.DOM.invoke(renderElement, methodName, args);
	    };
	    DomRenderer.prototype.setText = function (renderNode, text) { dom_adapter_1.DOM.setText(renderNode, text); };
	    /**
	     * Performs animations if necessary
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeEnter = function (node) {
	        if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
	            dom_adapter_1.DOM.addClass(node, 'ng-enter');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-enter-active')
	                .start(node)
	                .onComplete(function () { dom_adapter_1.DOM.removeClass(node, 'ng-enter'); });
	        }
	    };
	    /**
	     * If animations are necessary, performs animations then removes the element; otherwise, it just
	     * removes the element.
	     * @param node
	     */
	    DomRenderer.prototype.animateNodeLeave = function (node) {
	        if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
	            dom_adapter_1.DOM.addClass(node, 'ng-leave');
	            this._rootRenderer.animate.css()
	                .addAnimationClass('ng-leave-active')
	                .start(node)
	                .onComplete(function () {
	                dom_adapter_1.DOM.removeClass(node, 'ng-leave');
	                dom_adapter_1.DOM.remove(node);
	            });
	        }
	        else {
	            dom_adapter_1.DOM.remove(node);
	        }
	    };
	    return DomRenderer;
	}());
	exports.DomRenderer = DomRenderer;
	function moveNodesAfterSibling(sibling, nodes) {
	    var parent = dom_adapter_1.DOM.parentElement(sibling);
	    if (nodes.length > 0 && lang_1.isPresent(parent)) {
	        var nextSibling = dom_adapter_1.DOM.nextSibling(sibling);
	        if (lang_1.isPresent(nextSibling)) {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.DOM.insertBefore(nextSibling, nodes[i]);
	            }
	        }
	        else {
	            for (var i = 0; i < nodes.length; i++) {
	                dom_adapter_1.DOM.appendChild(parent, nodes[i]);
	            }
	        }
	    }
	}
	function appendNodes(parent, nodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        dom_adapter_1.DOM.appendChild(parent, nodes[i]);
	    }
	}
	function decoratePreventDefault(eventHandler) {
	    return function (event) {
	        var allowDefaultBehavior = eventHandler(event);
	        if (allowDefaultBehavior === false) {
	            // TODO(tbosch): move preventDefault into event plugins...
	            dom_adapter_1.DOM.preventDefault(event);
	        }
	    };
	}
	var COMPONENT_REGEX = /%COMP%/g;
	exports.COMPONENT_VARIABLE = '%COMP%';
	exports.HOST_ATTR = "_nghost-" + exports.COMPONENT_VARIABLE;
	exports.CONTENT_ATTR = "_ngcontent-" + exports.COMPONENT_VARIABLE;
	function _shimContentAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _shimHostAttribute(componentShortId) {
	    return lang_1.StringWrapper.replaceAll(exports.HOST_ATTR, COMPONENT_REGEX, componentShortId);
	}
	function _flattenStyles(compId, styles, target) {
	    for (var i = 0; i < styles.length; i++) {
	        var style = styles[i];
	        if (lang_1.isArray(style)) {
	            _flattenStyles(compId, style, target);
	        }
	        else {
	            style = lang_1.StringWrapper.replaceAll(style, COMPONENT_REGEX, compId);
	            target.push(style);
	        }
	    }
	    return target;
	}
	var NS_PREFIX_RE = /^@([^:]+):(.+)/g;
	function splitNamespace(name) {
	    if (name[0] != '@') {
	        return [null, name];
	    }
	    var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
	    return [match[1], match[2]];
	}


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var di_1 = __webpack_require__(7);
	var lang_1 = __webpack_require__(1);
	/**
	 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	 *
	 * Note: Document might not be available in the Application Context when Application and Rendering
	 * Contexts are not the same (e.g. when running the application into a Web Worker).
	 */
	exports.DOCUMENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('DocumentToken'));


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(11);
	var core_1 = __webpack_require__(5);
	var event_manager_1 = __webpack_require__(40);
	var DomEventsPlugin = (function (_super) {
	    __extends(DomEventsPlugin, _super);
	    function DomEventsPlugin() {
	        _super.apply(this, arguments);
	    }
	    // This plugin should come last in the list of plugins, because it accepts all
	    // events.
	    DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	    DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.run(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.DOM.onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var element = dom_adapter_1.DOM.getGlobalEventTarget(target);
	        var zone = this.manager.getZone();
	        var outsideHandler = function (event) { return zone.run(function () { return handler(event); }); };
	        return this.manager.getZone().runOutsideAngular(function () { return dom_adapter_1.DOM.onAndCancel(element, eventName, outsideHandler); });
	    };
	    DomEventsPlugin = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DomEventsPlugin);
	    return DomEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.DomEventsPlugin = DomEventsPlugin;


/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var di_1 = __webpack_require__(7);
	var ng_zone_1 = __webpack_require__(74);
	var collection_1 = __webpack_require__(3);
	exports.EVENT_MANAGER_PLUGINS = lang_1.CONST_EXPR(new di_1.OpaqueToken("EventManagerPlugins"));
	var EventManager = (function () {
	    function EventManager(plugins, _zone) {
	        var _this = this;
	        this._zone = _zone;
	        plugins.forEach(function (p) { return p.manager = _this; });
	        this._plugins = collection_1.ListWrapper.reversed(plugins);
	    }
	    EventManager.prototype.addEventListener = function (element, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addEventListener(element, eventName, handler);
	    };
	    EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	        var plugin = this._findPluginFor(eventName);
	        return plugin.addGlobalEventListener(target, eventName, handler);
	    };
	    EventManager.prototype.getZone = function () { return this._zone; };
	    /** @internal */
	    EventManager.prototype._findPluginFor = function (eventName) {
	        var plugins = this._plugins;
	        for (var i = 0; i < plugins.length; i++) {
	            var plugin = plugins[i];
	            if (plugin.supports(eventName)) {
	                return plugin;
	            }
	        }
	        throw new exceptions_1.BaseException("No event manager plugin found for event " + eventName);
	    };
	    EventManager = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(exports.EVENT_MANAGER_PLUGINS)), 
	        __metadata('design:paramtypes', [Array, ng_zone_1.NgZone])
	    ], EventManager);
	    return EventManager;
	}());
	exports.EventManager = EventManager;
	var EventManagerPlugin = (function () {
	    function EventManagerPlugin() {
	    }
	    // That is equivalent to having supporting $event.target
	    EventManagerPlugin.prototype.supports = function (eventName) { return false; };
	    EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	        throw "not implemented";
	    };
	    return EventManagerPlugin;
	}());
	exports.EventManagerPlugin = EventManagerPlugin;


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var event_manager_1 = __webpack_require__(40);
	var collection_1 = __webpack_require__(3);
	var _eventNames = {
	    // pan
	    'pan': true,
	    'panstart': true,
	    'panmove': true,
	    'panend': true,
	    'pancancel': true,
	    'panleft': true,
	    'panright': true,
	    'panup': true,
	    'pandown': true,
	    // pinch
	    'pinch': true,
	    'pinchstart': true,
	    'pinchmove': true,
	    'pinchend': true,
	    'pinchcancel': true,
	    'pinchin': true,
	    'pinchout': true,
	    // press
	    'press': true,
	    'pressup': true,
	    // rotate
	    'rotate': true,
	    'rotatestart': true,
	    'rotatemove': true,
	    'rotateend': true,
	    'rotatecancel': true,
	    // swipe
	    'swipe': true,
	    'swipeleft': true,
	    'swiperight': true,
	    'swipeup': true,
	    'swipedown': true,
	    // tap
	    'tap': true,
	};
	var HammerGesturesPluginCommon = (function (_super) {
	    __extends(HammerGesturesPluginCommon, _super);
	    function HammerGesturesPluginCommon() {
	        _super.call(this);
	    }
	    HammerGesturesPluginCommon.prototype.supports = function (eventName) {
	        eventName = eventName.toLowerCase();
	        return collection_1.StringMapWrapper.contains(_eventNames, eventName);
	    };
	    return HammerGesturesPluginCommon;
	}(event_manager_1.EventManagerPlugin));
	exports.HammerGesturesPluginCommon = HammerGesturesPluginCommon;


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var hammer_common_1 = __webpack_require__(305);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(5);
	exports.HAMMER_GESTURE_CONFIG = lang_1.CONST_EXPR(new core_1.OpaqueToken("HammerGestureConfig"));
	var HammerGestureConfig = (function () {
	    function HammerGestureConfig() {
	        this.events = [];
	        this.overrides = {};
	    }
	    HammerGestureConfig.prototype.buildHammer = function (element) {
	        var mc = new Hammer(element);
	        mc.get('pinch').set({ enable: true });
	        mc.get('rotate').set({ enable: true });
	        for (var eventName in this.overrides) {
	            mc.get(eventName).set(this.overrides[eventName]);
	        }
	        return mc;
	    };
	    HammerGestureConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HammerGestureConfig);
	    return HammerGestureConfig;
	}());
	exports.HammerGestureConfig = HammerGestureConfig;
	var HammerGesturesPlugin = (function (_super) {
	    __extends(HammerGesturesPlugin, _super);
	    function HammerGesturesPlugin(_config) {
	        _super.call(this);
	        this._config = _config;
	    }
	    HammerGesturesPlugin.prototype.supports = function (eventName) {
	        if (!_super.prototype.supports.call(this, eventName) && !this.isCustomEvent(eventName))
	            return false;
	        if (!lang_1.isPresent(window['Hammer'])) {
	            throw new exceptions_1.BaseException("Hammer.js is not loaded, can not bind " + eventName + " event");
	        }
	        return true;
	    };
	    HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var _this = this;
	        var zone = this.manager.getZone();
	        eventName = eventName.toLowerCase();
	        return zone.runOutsideAngular(function () {
	            // Creating the manager bind events, must be done outside of angular
	            var mc = _this._config.buildHammer(element);
	            var callback = function (eventObj) { zone.run(function () { handler(eventObj); }); };
	            mc.on(eventName, callback);
	            return function () { mc.off(eventName, callback); };
	        });
	    };
	    HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	    HammerGesturesPlugin = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.HAMMER_GESTURE_CONFIG)), 
	        __metadata('design:paramtypes', [HammerGestureConfig])
	    ], HammerGesturesPlugin);
	    return HammerGesturesPlugin;
	}(hammer_common_1.HammerGesturesPluginCommon));
	exports.HammerGesturesPlugin = HammerGesturesPlugin;


/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var event_manager_1 = __webpack_require__(40);
	var di_1 = __webpack_require__(7);
	var modifierKeys = ['alt', 'control', 'meta', 'shift'];
	var modifierKeyGetters = {
	    'alt': function (event) { return event.altKey; },
	    'control': function (event) { return event.ctrlKey; },
	    'meta': function (event) { return event.metaKey; },
	    'shift': function (event) { return event.shiftKey; }
	};
	var KeyEventsPlugin = (function (_super) {
	    __extends(KeyEventsPlugin, _super);
	    function KeyEventsPlugin() {
	        _super.call(this);
	    }
	    KeyEventsPlugin.prototype.supports = function (eventName) {
	        return lang_1.isPresent(KeyEventsPlugin.parseEventName(eventName));
	    };
	    KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	        var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	        var outsideHandler = KeyEventsPlugin.eventCallback(element, collection_1.StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
	        return this.manager.getZone().runOutsideAngular(function () {
	            return dom_adapter_1.DOM.onAndCancel(element, collection_1.StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
	        });
	    };
	    KeyEventsPlugin.parseEventName = function (eventName) {
	        var parts = eventName.toLowerCase().split('.');
	        var domEventName = parts.shift();
	        if ((parts.length === 0) ||
	            !(lang_1.StringWrapper.equals(domEventName, 'keydown') ||
	                lang_1.StringWrapper.equals(domEventName, 'keyup'))) {
	            return null;
	        }
	        var key = KeyEventsPlugin._normalizeKey(parts.pop());
	        var fullKey = '';
	        modifierKeys.forEach(function (modifierName) {
	            if (collection_1.ListWrapper.contains(parts, modifierName)) {
	                collection_1.ListWrapper.remove(parts, modifierName);
	                fullKey += modifierName + '.';
	            }
	        });
	        fullKey += key;
	        if (parts.length != 0 || key.length === 0) {
	            // returning null instead of throwing to let another plugin process the event
	            return null;
	        }
	        var result = collection_1.StringMapWrapper.create();
	        collection_1.StringMapWrapper.set(result, 'domEventName', domEventName);
	        collection_1.StringMapWrapper.set(result, 'fullKey', fullKey);
	        return result;
	    };
	    KeyEventsPlugin.getEventFullKey = function (event) {
	        var fullKey = '';
	        var key = dom_adapter_1.DOM.getEventKey(event);
	        key = key.toLowerCase();
	        if (lang_1.StringWrapper.equals(key, ' ')) {
	            key = 'space'; // for readability
	        }
	        else if (lang_1.StringWrapper.equals(key, '.')) {
	            key = 'dot'; // because '.' is used as a separator in event names
	        }
	        modifierKeys.forEach(function (modifierName) {
	            if (modifierName != key) {
	                var modifierGetter = collection_1.StringMapWrapper.get(modifierKeyGetters, modifierName);
	                if (modifierGetter(event)) {
	                    fullKey += modifierName + '.';
	                }
	            }
	        });
	        fullKey += key;
	        return fullKey;
	    };
	    KeyEventsPlugin.eventCallback = function (element, fullKey, handler, zone) {
	        return function (event) {
	            if (lang_1.StringWrapper.equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
	                zone.run(function () { return handler(event); });
	            }
	        };
	    };
	    /** @internal */
	    KeyEventsPlugin._normalizeKey = function (keyName) {
	        // TODO: switch to a StringMap if the mapping grows too much
	        switch (keyName) {
	            case 'esc':
	                return 'escape';
	            default:
	                return keyName;
	        }
	    };
	    KeyEventsPlugin = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], KeyEventsPlugin);
	    return KeyEventsPlugin;
	}(event_manager_1.EventManagerPlugin));
	exports.KeyEventsPlugin = KeyEventsPlugin;


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var dom_adapter_1 = __webpack_require__(11);
	var di_1 = __webpack_require__(7);
	var collection_1 = __webpack_require__(3);
	var dom_tokens_1 = __webpack_require__(54);
	var SharedStylesHost = (function () {
	    function SharedStylesHost() {
	        /** @internal */
	        this._styles = [];
	        /** @internal */
	        this._stylesSet = new Set();
	    }
	    SharedStylesHost.prototype.addStyles = function (styles) {
	        var _this = this;
	        var additions = [];
	        styles.forEach(function (style) {
	            if (!collection_1.SetWrapper.has(_this._stylesSet, style)) {
	                _this._stylesSet.add(style);
	                _this._styles.push(style);
	                additions.push(style);
	            }
	        });
	        this.onStylesAdded(additions);
	    };
	    SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	    SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
	    SharedStylesHost = __decorate([
	        di_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], SharedStylesHost);
	    return SharedStylesHost;
	}());
	exports.SharedStylesHost = SharedStylesHost;
	var DomSharedStylesHost = (function (_super) {
	    __extends(DomSharedStylesHost, _super);
	    function DomSharedStylesHost(doc) {
	        _super.call(this);
	        this._hostNodes = new Set();
	        this._hostNodes.add(doc.head);
	    }
	    /** @internal */
	    DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	        for (var i = 0; i < styles.length; i++) {
	            var style = styles[i];
	            dom_adapter_1.DOM.appendChild(host, dom_adapter_1.DOM.createStyleElement(style));
	        }
	    };
	    DomSharedStylesHost.prototype.addHost = function (hostNode) {
	        this._addStylesToHost(this._styles, hostNode);
	        this._hostNodes.add(hostNode);
	    };
	    DomSharedStylesHost.prototype.removeHost = function (hostNode) { collection_1.SetWrapper.delete(this._hostNodes, hostNode); };
	    DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	        var _this = this;
	        this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
	    };
	    DomSharedStylesHost = __decorate([
	        di_1.Injectable(),
	        __param(0, di_1.Inject(dom_tokens_1.DOCUMENT)), 
	        __metadata('design:paramtypes', [Object])
	    ], DomSharedStylesHost);
	    return DomSharedStylesHost;
	}(SharedStylesHost));
	exports.DomSharedStylesHost = DomSharedStylesHost;


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var CAMEL_CASE_REGEXP = /([A-Z])/g;
	var DASH_CASE_REGEXP = /-([a-z])/g;
	function camelCaseToDashCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
	}
	exports.camelCaseToDashCase = camelCaseToDashCase;
	function dashCaseToCamelCase(input) {
	    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
	}
	exports.dashCaseToCamelCase = dashCaseToCamelCase;


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(78);
	var location_1 = __webpack_require__(76);
	/**
	 * The RouterLink directive lets you link to specific parts of your app.
	 *
	 * Consider the following route configuration:
	
	 * ```
	 * @RouteConfig([
	 *   { path: '/user', component: UserCmp, as: 'User' }
	 * ]);
	 * class MyComp {}
	 * ```
	 *
	 * When linking to this `User` route, you can write:
	 *
	 * ```
	 * <a [routerLink]="['./User']">link to user component</a>
	 * ```
	 *
	 * RouterLink expects the value to be an array of route names, followed by the params
	 * for that level of routing. For instance `['/Team', {teamId: 1}, 'User', {userId: 2}]`
	 * means that we want to generate a link for the `Team` route with params `{teamId: 1}`,
	 * and with a child route `User` with params `{userId: 2}`.
	 *
	 * The first route name should be prepended with `/`, `./`, or `../`.
	 * If the route begins with `/`, the router will look up the route from the root of the app.
	 * If the route begins with `./`, the router will instead look in the current component's
	 * children for the route. And if the route begins with `../`, the router will look at the
	 * current component's parent.
	 */
	var RouterLink = (function () {
	    function RouterLink(_router, _location) {
	        var _this = this;
	        this._router = _router;
	        this._location = _location;
	        // we need to update the link whenever a route changes to account for aux routes
	        this._router.subscribe(function (_) { return _this._updateLink(); });
	    }
	    // because auxiliary links take existing primary and auxiliary routes into account,
	    // we need to update the link whenever params or other routes change.
	    RouterLink.prototype._updateLink = function () {
	        this._navigationInstruction = this._router.generate(this._routeParams);
	        var navigationHref = this._navigationInstruction.toLinkUrl();
	        this.visibleHref = this._location.prepareExternalUrl(navigationHref);
	    };
	    Object.defineProperty(RouterLink.prototype, "isRouteActive", {
	        get: function () { return this._router.isRouteActive(this._navigationInstruction); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterLink.prototype, "routeParams", {
	        set: function (changes) {
	            this._routeParams = changes;
	            this._updateLink();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigateByInstruction(this._navigationInstruction);
	            return false;
	        }
	        return true;
	    };
	    RouterLink = __decorate([
	        core_1.Directive({
	            selector: '[routerLink]',
	            inputs: ['routeParams: routerLink', 'target: target'],
	            host: {
	                '(click)': 'onClick()',
	                '[attr.href]': 'visibleHref',
	                '[class.router-link-active]': 'isRouteActive'
	            }
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, location_1.Location])
	    ], RouterLink);
	    return RouterLink;
	}());
	exports.RouterLink = RouterLink;


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var async_1 = __webpack_require__(10);
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	var routerMod = __webpack_require__(78);
	var instruction_1 = __webpack_require__(31);
	var hookMod = __webpack_require__(215);
	var route_lifecycle_reflector_1 = __webpack_require__(216);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	/**
	 * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
	 *
	 * ## Use
	 *
	 * ```
	 * <router-outlet></router-outlet>
	 * ```
	 */
	var RouterOutlet = (function () {
	    function RouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
	        this._elementRef = _elementRef;
	        this._loader = _loader;
	        this._parentRouter = _parentRouter;
	        this.name = null;
	        this._componentRef = null;
	        this._currentInstruction = null;
	        if (lang_1.isPresent(nameAttr)) {
	            this.name = nameAttr;
	            this._parentRouter.registerAuxOutlet(this);
	        }
	        else {
	            this._parentRouter.registerPrimaryOutlet(this);
	        }
	    }
	    /**
	     * Called by the Router to instantiate a new component during the commit phase of a navigation.
	     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
	     */
	    RouterOutlet.prototype.activate = function (nextInstruction) {
	        var _this = this;
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        var componentType = nextInstruction.componentType;
	        var childRouter = this._parentRouter.childRouter(componentType);
	        var providers = core_1.Injector.resolve([
	            core_1.provide(instruction_1.RouteData, { useValue: nextInstruction.routeData }),
	            core_1.provide(instruction_1.RouteParams, { useValue: new instruction_1.RouteParams(nextInstruction.params) }),
	            core_1.provide(routerMod.Router, { useValue: childRouter })
	        ]);
	        this._componentRef =
	            this._loader.loadNextToLocation(componentType, this._elementRef, providers);
	        return this._componentRef.then(function (componentRef) {
	            if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnActivate, componentType)) {
	                return _this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnActivate(nextInstruction, previousInstruction);
	                });
	            }
	            else {
	                return componentRef;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during the commit phase of a navigation when an outlet
	     * reuses a component between different routes.
	     * This method in turn is responsible for calling the `routerOnReuse` hook of its child.
	     */
	    RouterOutlet.prototype.reuse = function (nextInstruction) {
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        // it's possible the component is removed before it can be reactivated (if nested withing
	        // another dynamically loaded component, for instance). In that case, we simply activate
	        // a new one.
	        if (lang_1.isBlank(this._componentRef)) {
	            return this.activate(nextInstruction);
	        }
	        else {
	            return async_1.PromiseWrapper.resolve(route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnReuse, this._currentInstruction.componentType) ?
	                this._componentRef.then(function (ref) {
	                    return ref.instance.routerOnReuse(nextInstruction, previousInstruction);
	                }) :
	                true);
	        }
	    };
	    /**
	     * Called by the {@link Router} when an outlet disposes of a component's contents.
	     * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
	     */
	    RouterOutlet.prototype.deactivate = function (nextInstruction) {
	        var _this = this;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._componentRef) && lang_1.isPresent(this._currentInstruction) &&
	            route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerOnDeactivate, this._currentInstruction.componentType)) {
	            next = this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerOnDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        return next.then(function (_) {
	            if (lang_1.isPresent(_this._componentRef)) {
	                var onDispose = _this._componentRef.then(function (ref) { return ref.dispose(); });
	                _this._componentRef = null;
	                return onDispose;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If this resolves to `false`, the given navigation is cancelled.
	     *
	     * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
	     * and otherwise resolves to true.
	     */
	    RouterOutlet.prototype.routerCanDeactivate = function (nextInstruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._currentInstruction)) {
	            return _resolveToTrue;
	        }
	        if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanDeactivate, this._currentInstruction.componentType)) {
	            return this._componentRef.then(function (ref) {
	                return ref.instance
	                    .routerCanDeactivate(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            return _resolveToTrue;
	        }
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If the new child component has a different Type than the existing child component,
	     * this will resolve to `false`. You can't reuse an old component when the new component
	     * is of a different Type.
	     *
	     * Otherwise, this method delegates to the child component's `routerCanReuse` hook if it exists,
	     * or resolves to true if the hook is not present.
	     */
	    RouterOutlet.prototype.routerCanReuse = function (nextInstruction) {
	        var _this = this;
	        var result;
	        if (lang_1.isBlank(this._currentInstruction) ||
	            this._currentInstruction.componentType != nextInstruction.componentType) {
	            result = false;
	        }
	        else if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.routerCanReuse, this._currentInstruction.componentType)) {
	            result = this._componentRef.then(function (ref) {
	                return ref.instance.routerCanReuse(nextInstruction, _this._currentInstruction);
	            });
	        }
	        else {
	            result = nextInstruction == this._currentInstruction ||
	                (lang_1.isPresent(nextInstruction.params) && lang_1.isPresent(this._currentInstruction.params) &&
	                    collection_1.StringMapWrapper.equals(nextInstruction.params, this._currentInstruction.params));
	        }
	        return async_1.PromiseWrapper.resolve(result);
	    };
	    RouterOutlet.prototype.ngOnDestroy = function () { this._parentRouter.unregisterPrimaryOutlet(this); };
	    RouterOutlet = __decorate([
	        core_1.Directive({ selector: 'router-outlet' }),
	        __param(3, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, routerMod.Router, String])
	    ], RouterOutlet);
	    return RouterOutlet;
	}());
	exports.RouterOutlet = RouterOutlet;


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(10);
	/**
	 * `RouteParams` is an immutable map of parameters for the given route
	 * based on the url matcher and optional parameters for that route.
	 *
	 * You can inject `RouteParams` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp'},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({ template: 'user: {{id}}' })
	 * class UserCmp {
	 *   id: string;
	 *   constructor(params: RouteParams) {
	 *     this.id = params.get('id');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteParams = (function () {
	    function RouteParams(params) {
	        this.params = params;
	    }
	    RouteParams.prototype.get = function (param) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.params, param)); };
	    return RouteParams;
	}());
	exports.RouteParams = RouteParams;
	/**
	 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
	 *
	 * You can inject `RouteData` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from
	 * 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp', data: {isAdmin: true}},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({
	 *   ...,
	 *   template: 'user: {{isAdmin}}'
	 * })
	 * class UserCmp {
	 *   string: isAdmin;
	 *   constructor(data: RouteData) {
	 *     this.isAdmin = data.get('isAdmin');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteData = (function () {
	    function RouteData(data) {
	        if (data === void 0) { data = lang_1.CONST_EXPR({}); }
	        this.data = data;
	    }
	    RouteData.prototype.get = function (key) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.data, key)); };
	    return RouteData;
	}());
	exports.RouteData = RouteData;
	exports.BLANK_ROUTE_DATA = new RouteData();
	/**
	 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
	 * to transition each component in the app to a given route, including all auxiliary routes.
	 *
	 * `Instruction`s can be created using {@link Router#generate}, and can be used to
	 * perform route changes with {@link Router#navigateByInstruction}.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(router: Router) {
	 *     var instruction = router.generate(['/MyRoute']);
	 *     router.navigateByInstruction(instruction);
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var Instruction = (function () {
	    function Instruction(component, child, auxInstruction) {
	        this.component = component;
	        this.child = child;
	        this.auxInstruction = auxInstruction;
	    }
	    Object.defineProperty(Instruction.prototype, "urlPath", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlPath : ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "urlParams", {
	        get: function () { return lang_1.isPresent(this.component) ? this.component.urlParams : []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Instruction.prototype, "specificity", {
	        get: function () {
	            var total = '';
	            if (lang_1.isPresent(this.component)) {
	                total += this.component.specificity;
	            }
	            if (lang_1.isPresent(this.child)) {
	                total += this.child.specificity;
	            }
	            return total;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * converts the instruction into a URL string
	     */
	    Instruction.prototype.toRootUrl = function () { return this.toUrlPath() + this.toUrlQuery(); };
	    /** @internal */
	    Instruction.prototype._toNonRootUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    Instruction.prototype.toUrlQuery = function () { return this.urlParams.length > 0 ? ('?' + this.urlParams.join('&')) : ''; };
	    /**
	     * Returns a new instruction that shares the state of the existing instruction, but with
	     * the given child {@link Instruction} replacing the existing child.
	     */
	    Instruction.prototype.replaceChild = function (child) {
	        return new ResolvedInstruction(this.component, child, this.auxInstruction);
	    };
	    /**
	     * If the final URL for the instruction is ``
	     */
	    Instruction.prototype.toUrlPath = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toNonRootUrl() : '');
	    };
	    // default instructions override these
	    Instruction.prototype.toLinkUrl = function () {
	        return this.urlPath + this._stringifyAux() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '') + this.toUrlQuery();
	    };
	    // this is the non-root version (called recursively)
	    /** @internal */
	    Instruction.prototype._toLinkUrl = function () {
	        return this._stringifyPathMatrixAuxPrefixed() +
	            (lang_1.isPresent(this.child) ? this.child._toLinkUrl() : '');
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAuxPrefixed = function () {
	        var primary = this._stringifyPathMatrixAux();
	        if (primary.length > 0) {
	            primary = '/' + primary;
	        }
	        return primary;
	    };
	    /** @internal */
	    Instruction.prototype._stringifyMatrixParams = function () {
	        return this.urlParams.length > 0 ? (';' + this.urlParams.join(';')) : '';
	    };
	    /** @internal */
	    Instruction.prototype._stringifyPathMatrixAux = function () {
	        if (lang_1.isBlank(this.component)) {
	            return '';
	        }
	        return this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
	    };
	    /** @internal */
	    Instruction.prototype._stringifyAux = function () {
	        var routes = [];
	        collection_1.StringMapWrapper.forEach(this.auxInstruction, function (auxInstruction, _) {
	            routes.push(auxInstruction._stringifyPathMatrixAux());
	        });
	        if (routes.length > 0) {
	            return '(' + routes.join('//') + ')';
	        }
	        return '';
	    };
	    return Instruction;
	}());
	exports.Instruction = Instruction;
	/**
	 * a resolved instruction has an outlet instruction for itself, but maybe not for...
	 */
	var ResolvedInstruction = (function (_super) {
	    __extends(ResolvedInstruction, _super);
	    function ResolvedInstruction(component, child, auxInstruction) {
	        _super.call(this, component, child, auxInstruction);
	    }
	    ResolvedInstruction.prototype.resolveComponent = function () {
	        return async_1.PromiseWrapper.resolve(this.component);
	    };
	    return ResolvedInstruction;
	}(Instruction));
	exports.ResolvedInstruction = ResolvedInstruction;
	/**
	 * Represents a resolved default route
	 */
	var DefaultInstruction = (function (_super) {
	    __extends(DefaultInstruction, _super);
	    function DefaultInstruction(component, child) {
	        _super.call(this, component, child, {});
	    }
	    DefaultInstruction.prototype.toLinkUrl = function () { return ''; };
	    /** @internal */
	    DefaultInstruction.prototype._toLinkUrl = function () { return ''; };
	    return DefaultInstruction;
	}(ResolvedInstruction));
	exports.DefaultInstruction = DefaultInstruction;
	/**
	 * Represents a component that may need to do some redirection or lazy loading at a later time.
	 */
	var UnresolvedInstruction = (function (_super) {
	    __extends(UnresolvedInstruction, _super);
	    function UnresolvedInstruction(_resolver, _urlPath, _urlParams) {
	        if (_urlPath === void 0) { _urlPath = ''; }
	        if (_urlParams === void 0) { _urlParams = lang_1.CONST_EXPR([]); }
	        _super.call(this, null, null, {});
	        this._resolver = _resolver;
	        this._urlPath = _urlPath;
	        this._urlParams = _urlParams;
	    }
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlPath", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlPath;
	            }
	            if (lang_1.isPresent(this._urlPath)) {
	                return this._urlPath;
	            }
	            return '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UnresolvedInstruction.prototype, "urlParams", {
	        get: function () {
	            if (lang_1.isPresent(this.component)) {
	                return this.component.urlParams;
	            }
	            if (lang_1.isPresent(this._urlParams)) {
	                return this._urlParams;
	            }
	            return [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    UnresolvedInstruction.prototype.resolveComponent = function () {
	        var _this = this;
	        if (lang_1.isPresent(this.component)) {
	            return async_1.PromiseWrapper.resolve(this.component);
	        }
	        return this._resolver().then(function (instruction) {
	            _this.child = lang_1.isPresent(instruction) ? instruction.child : null;
	            return _this.component = lang_1.isPresent(instruction) ? instruction.component : null;
	        });
	    };
	    return UnresolvedInstruction;
	}(Instruction));
	exports.UnresolvedInstruction = UnresolvedInstruction;
	var RedirectInstruction = (function (_super) {
	    __extends(RedirectInstruction, _super);
	    function RedirectInstruction(component, child, auxInstruction, _specificity) {
	        _super.call(this, component, child, auxInstruction);
	        this._specificity = _specificity;
	    }
	    Object.defineProperty(RedirectInstruction.prototype, "specificity", {
	        get: function () { return this._specificity; },
	        enumerable: true,
	        configurable: true
	    });
	    return RedirectInstruction;
	}(ResolvedInstruction));
	exports.RedirectInstruction = RedirectInstruction;
	/**
	 * A `ComponentInstruction` represents the route state for a single component.
	 *
	 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
	 * to route lifecycle hooks, like {@link CanActivate}.
	 *
	 * `ComponentInstruction`s are [hash consed](https://en.wikipedia.org/wiki/Hash_consing). You should
	 * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
	 * construct `ComponentInstruction`s.
	 *
	 * You should not modify this object. It should be treated as immutable.
	 */
	var ComponentInstruction = (function () {
	    /**
	     * @internal
	     */
	    function ComponentInstruction(urlPath, urlParams, data, componentType, terminal, specificity, params, routeName) {
	        if (params === void 0) { params = null; }
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.componentType = componentType;
	        this.terminal = terminal;
	        this.specificity = specificity;
	        this.params = params;
	        this.routeName = routeName;
	        this.reuse = false;
	        this.routeData = lang_1.isPresent(data) ? data : exports.BLANK_ROUTE_DATA;
	    }
	    return ComponentInstruction;
	}());
	exports.ComponentInstruction = ComponentInstruction;


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * This indirection is needed to free up Component, etc symbols in the public API
	 * to be used by the decorator versions of these annotations.
	 */
	"use strict";
	var decorators_1 = __webpack_require__(53);
	var lifecycle_annotations_impl_1 = __webpack_require__(132);
	var lifecycle_annotations_impl_2 = __webpack_require__(132);
	exports.routerCanReuse = lifecycle_annotations_impl_2.routerCanReuse;
	exports.routerCanDeactivate = lifecycle_annotations_impl_2.routerCanDeactivate;
	exports.routerOnActivate = lifecycle_annotations_impl_2.routerOnActivate;
	exports.routerOnReuse = lifecycle_annotations_impl_2.routerOnReuse;
	exports.routerOnDeactivate = lifecycle_annotations_impl_2.routerOnDeactivate;
	/**
	 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
	 * if a component can be instantiated as part of a navigation.
	 *
	 * <aside class="is-right">
	 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
	 * This is because the `CanActivate` function is called before the component is instantiated.
	 * </aside>
	 *
	 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
	 * representing the current route being navigated to, and the second parameter representing the
	 * previous route or `null`.
	 *
	 * ```typescript
	 * @CanActivate((next, prev) => boolean | Promise<boolean>)
	 * ```
	 *
	 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
	 * If `CanActivate` throws or rejects, the navigation is also cancelled.
	 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
	 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
	 *
	 * ### Example
	 *
	 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
	 */
	exports.CanActivate = decorators_1.makeDecorator(lifecycle_annotations_impl_1.CanActivate);


/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var RouteLifecycleHook = (function () {
	    function RouteLifecycleHook(name) {
	        this.name = name;
	    }
	    RouteLifecycleHook = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], RouteLifecycleHook);
	    return RouteLifecycleHook;
	}());
	exports.RouteLifecycleHook = RouteLifecycleHook;
	var CanActivate = (function () {
	    function CanActivate(fn) {
	        this.fn = fn;
	    }
	    CanActivate = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Function])
	    ], CanActivate);
	    return CanActivate;
	}());
	exports.CanActivate = CanActivate;
	exports.routerCanReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
	exports.routerCanDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
	exports.routerOnActivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
	exports.routerOnReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
	exports.routerOnDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));


/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var lifecycle_annotations_impl_1 = __webpack_require__(132);
	var reflection_1 = __webpack_require__(12);
	function hasLifecycleHook(e, type) {
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return e.name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	function getCanActivateHook(type) {
	    var annotations = reflection_1.reflector.annotations(type);
	    for (var i = 0; i < annotations.length; i += 1) {
	        var annotation = annotations[i];
	        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
	            return annotation.fn;
	        }
	    }
	    return null;
	}
	exports.getCanActivateHook = getCanActivateHook;


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var platform_location_1 = __webpack_require__(56);
	var dom_adapter_1 = __webpack_require__(11);
	/**
	 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 */
	var BrowserPlatformLocation = (function (_super) {
	    __extends(BrowserPlatformLocation, _super);
	    function BrowserPlatformLocation() {
	        _super.call(this);
	        this._init();
	    }
	    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	    /** @internal */
	    BrowserPlatformLocation.prototype._init = function () {
	        this._location = dom_adapter_1.DOM.getLocation();
	        this._history = dom_adapter_1.DOM.getHistory();
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	        /** @internal */
	        get: function () { return this._location; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return dom_adapter_1.DOM.getBaseHref(); };
	    BrowserPlatformLocation.prototype.onPopState = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	    };
	    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	    };
	    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	        get: function () { return this._location.pathname; },
	        set: function (newPath) { this._location.pathname = newPath; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	        get: function () { return this._location.search; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	        get: function () { return this._location.hash; },
	        enumerable: true,
	        configurable: true
	    });
	    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	        this._history.pushState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	        this._history.replaceState(state, title, url);
	    };
	    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	    BrowserPlatformLocation = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserPlatformLocation);
	    return BrowserPlatformLocation;
	}(platform_location_1.PlatformLocation));
	exports.BrowserPlatformLocation = BrowserPlatformLocation;


/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(5);
	var location_strategy_1 = __webpack_require__(55);
	var lang_1 = __webpack_require__(1);
	var platform_location_1 = __webpack_require__(56);
	/**
	 * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	 * of the browser's URL.
	 *
	 * For instance, if you call `location.go('/foo')`, the browser's URL will become
	 * `example.com#/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location,
	 *   LocationStrategy,
	 *   HashLocationStrategy
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(LocationStrategy, {useClass: HashLocationStrategy})
	 * ]);
	 * ```
	 */
	var HashLocationStrategy = (function (_super) {
	    __extends(HashLocationStrategy, _super);
	    function HashLocationStrategy(_platformLocation, _baseHref) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        this._baseHref = '';
	        if (lang_1.isPresent(_baseHref)) {
	            this._baseHref = _baseHref;
	        }
	    }
	    HashLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    HashLocationStrategy.prototype.path = function () {
	        // the hash value is always prefixed with a `#`
	        // and if it is empty then it will stay empty
	        var path = this._platformLocation.hash;
	        if (!lang_1.isPresent(path))
	            path = '#';
	        // Dart will complain if a call to substring is
	        // executed with a position value that extends the
	        // length of string.
	        return (path.length > 0 ? path.substring(1) : path);
	    };
	    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        var url = location_strategy_1.joinWithSlash(this._baseHref, internal);
	        return url.length > 0 ? ('#' + url) : url;
	    };
	    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.pushState(state, title, url);
	    };
	    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
	        var url = this.prepareExternalUrl(path + location_strategy_1.normalizeQueryParams(queryParams));
	        if (url.length == 0) {
	            url = this._platformLocation.pathname;
	        }
	        this._platformLocation.replaceState(state, title, url);
	    };
	    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    HashLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], HashLocationStrategy);
	    return HashLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.HashLocationStrategy = HashLocationStrategy;


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var location_strategy_1 = __webpack_require__(55);
	var async_1 = __webpack_require__(10);
	var core_1 = __webpack_require__(5);
	/**
	 * `Location` is a service that applications can use to interact with a browser's URL.
	 * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	 * to the URL's path or the URL's hash segment.
	 *
	 * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	 * `Location` only if you need to interact with or create normalized URLs outside of
	 * routing.
	 *
	 * `Location` is responsible for normalizing the URL against the application's base href.
	 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	 * trailing slash:
	 * - `/my/app/user/123` is normalized
	 * - `my/app/user/123` **is not** normalized
	 * - `/my/app/user/123/` **is not** normalized
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	var Location = (function () {
	    function Location(platformStrategy) {
	        var _this = this;
	        this.platformStrategy = platformStrategy;
	        /** @internal */
	        this._subject = new async_1.EventEmitter();
	        var browserBaseHref = this.platformStrategy.getBaseHref();
	        this._baseHref = stripTrailingSlash(stripIndexHtml(browserBaseHref));
	        this.platformStrategy.onPopState(function (ev) {
	            async_1.ObservableWrapper.callEmit(_this._subject, { 'url': _this.path(), 'pop': true, 'type': ev.type });
	        });
	    }
	    /**
	     * Returns the normalized URL path.
	     */
	    Location.prototype.path = function () { return this.normalize(this.platformStrategy.path()); };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Location.prototype.normalize = function (url) {
	        return stripTrailingSlash(_stripBaseHref(this._baseHref, stripIndexHtml(url)));
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Location.prototype.prepareExternalUrl = function (url) {
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url);
	    };
	    // TODO: rename this method to pushState
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Location.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, query);
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Location.prototype.replaceState = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Location.prototype.forward = function () { this.platformStrategy.forward(); };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Location.prototype.back = function () { this.platformStrategy.back(); };
	    /**
	     * Subscribe to the platform's `popState` events.
	     */
	    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	        if (onThrow === void 0) { onThrow = null; }
	        if (onReturn === void 0) { onReturn = null; }
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
	    };
	    Location = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [location_strategy_1.LocationStrategy])
	    ], Location);
	    return Location;
	}());
	exports.Location = Location;
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	/**
	 * `LocationStrategy` is responsible for representing and reading route state
	 * from the browser's URL. Angular provides two strategies:
	 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
	 *
	 * This is used under the hood of the {@link Location} service.
	 *
	 * Applications should use the {@link Router} or {@link Location} services to
	 * interact with application route state.
	 *
	 * For instance, {@link HashLocationStrategy} produces URLs like
	 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	 * `http://example.com/foo` as an equivalent URL.
	 *
	 * See these two classes for more.
	 */
	var LocationStrategy = (function () {
	    function LocationStrategy() {
	    }
	    return LocationStrategy;
	}());
	exports.LocationStrategy = LocationStrategy;
	/**
	 * The `APP_BASE_HREF` token represents the base href to be used with the
	 * {@link PathLocationStrategy}.
	 *
	 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	 * representing the URL prefix that should be preserved when generating and recognizing
	 * URLs.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	exports.APP_BASE_HREF = lang_1.CONST_EXPR(new core_1.OpaqueToken('appBaseHref'));
	function normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	}
	exports.normalizeQueryParams = normalizeQueryParams;
	function joinWithSlash(start, end) {
	    if (start.length == 0) {
	        return end;
	    }
	    if (end.length == 0) {
	        return start;
	    }
	    var slashes = 0;
	    if (start.endsWith('/')) {
	        slashes++;
	    }
	    if (end.startsWith('/')) {
	        slashes++;
	    }
	    if (slashes == 2) {
	        return start + end.substring(1);
	    }
	    if (slashes == 1) {
	        return start + end;
	    }
	    return start + '/' + end;
	}
	exports.joinWithSlash = joinWithSlash;


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var location_strategy_1 = __webpack_require__(55);
	var platform_location_1 = __webpack_require__(56);
	/**
	 * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	 * browser's URL.
	 *
	 * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	 * provided in {@link ROUTER_PROVIDERS}.
	 *
	 * If you're using `PathLocationStrategy`, you must provide a provider for
	 * {@link APP_BASE_HREF} to a string representing the URL prefix that should
	 * be preserved when generating and recognizing URLs.
	 *
	 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	 * `location.go('/foo')`, the browser's URL will become
	 * `example.com/my/app/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/core';
	 * import {
	 *   APP_BASE_HREF
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS, // includes binding to PathLocationStrategy
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	var PathLocationStrategy = (function (_super) {
	    __extends(PathLocationStrategy, _super);
	    function PathLocationStrategy(_platformLocation, href) {
	        _super.call(this);
	        this._platformLocation = _platformLocation;
	        if (lang_1.isBlank(href)) {
	            href = this._platformLocation.getBaseHrefFromDOM();
	        }
	        if (lang_1.isBlank(href)) {
	            throw new exceptions_1.BaseException("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
	        }
	        this._baseHref = href;
	    }
	    PathLocationStrategy.prototype.onPopState = function (fn) {
	        this._platformLocation.onPopState(fn);
	        this._platformLocation.onHashChange(fn);
	    };
	    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) { return location_strategy_1.joinWithSlash(this._baseHref, internal); };
	    PathLocationStrategy.prototype.path = function () {
	        return this._platformLocation.pathname + location_strategy_1.normalizeQueryParams(this._platformLocation.search);
	    };
	    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.pushState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
	        var externalUrl = this.prepareExternalUrl(url + location_strategy_1.normalizeQueryParams(queryParams));
	        this._platformLocation.replaceState(state, title, externalUrl);
	    };
	    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
	    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
	    PathLocationStrategy = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Optional()),
	        __param(1, core_1.Inject(location_strategy_1.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [platform_location_1.PlatformLocation, String])
	    ], PathLocationStrategy);
	    return PathLocationStrategy;
	}(location_strategy_1.LocationStrategy));
	exports.PathLocationStrategy = PathLocationStrategy;


/***/ },

/***/ 56:
/***/ function(module, exports) {

	'use strict';"use strict";
	/**
	 * This class should not be used directly by an application developer. Instead, use
	 * {@link Location}.
	 *
	 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
	 * agnostic.
	 * This means that we can have different implementation of `PlatformLocation` for the different
	 * platforms
	 * that angular supports. For example, the default `PlatformLocation` is {@link
	 * BrowserPlatformLocation},
	 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
	 *
	 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
	 * when
	 * they need to interact with the DOM apis like pushState, popState, etc...
	 *
	 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
	 * by
	 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
	 * Router} /
	 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
	 * class
	 * they are all platform independent.
	 */
	var PlatformLocation = (function () {
	    function PlatformLocation() {
	    }
	    Object.defineProperty(PlatformLocation.prototype, "pathname", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "search", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformLocation.prototype, "hash", {
	        /* abstract */ get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformLocation;
	}());
	exports.PlatformLocation = PlatformLocation;


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var route_config_impl_1 = __webpack_require__(77);
	var decorators_1 = __webpack_require__(53);
	var route_config_impl_2 = __webpack_require__(77);
	exports.Route = route_config_impl_2.Route;
	exports.Redirect = route_config_impl_2.Redirect;
	exports.AuxRoute = route_config_impl_2.AuxRoute;
	exports.AsyncRoute = route_config_impl_2.AsyncRoute;
	// Copied from RouteConfig in route_config_impl.
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	exports.RouteConfig = decorators_1.makeDecorator(route_config_impl_1.RouteConfig);


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(1);
	var __make_dart_analyzer_happy = null;
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	var RouteConfig = (function () {
	    function RouteConfig(configs) {
	        this.configs = configs;
	    }
	    RouteConfig = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Array])
	    ], RouteConfig);
	    return RouteConfig;
	}());
	exports.RouteConfig = RouteConfig;
	var AbstractRoute = (function () {
	    function AbstractRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data;
	        this.name = name;
	        this.useAsDefault = useAsDefault;
	        this.path = path;
	        this.regex = regex;
	        this.serializer = serializer;
	        this.data = data;
	    }
	    AbstractRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AbstractRoute);
	    return AbstractRoute;
	}());
	exports.AbstractRoute = AbstractRoute;
	/**
	 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Route = (function (_super) {
	    __extends(Route, _super);
	    function Route(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.component = component;
	    }
	    Route = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Route);
	    return Route;
	}(AbstractRoute));
	exports.Route = Route;
	/**
	 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
	 *
	 * It takes an object with the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AuxRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AuxRoute({path: '/home', component: HomeCmp})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AuxRoute = (function (_super) {
	    __extends(AuxRoute, _super);
	    function AuxRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.component = component;
	    }
	    AuxRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AuxRoute);
	    return AuxRoute;
	}(AbstractRoute));
	exports.AuxRoute = AuxRoute;
	/**
	 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
	 * loaded component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `loader` is a function that returns a promise that resolves to a component.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
	 * route is specified during the navigation.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AsyncRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
	 * 'MyLoadedCmp'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AsyncRoute = (function (_super) {
	    __extends(AsyncRoute, _super);
	    function AsyncRoute(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, loader = _a.loader;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.aux = null;
	        this.loader = loader;
	    }
	    AsyncRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AsyncRoute);
	    return AsyncRoute;
	}(AbstractRoute));
	exports.AsyncRoute = AsyncRoute;
	/**
	 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `redirectTo` is an array representing the link DSL.
	 *
	 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
	 * option.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, Route, Redirect} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
	 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Redirect = (function (_super) {
	    __extends(Redirect, _super);
	    function Redirect(_a) {
	        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, redirectTo = _a.redirectTo;
	        _super.call(this, {
	            name: name,
	            useAsDefault: useAsDefault,
	            path: path,
	            regex: regex,
	            serializer: serializer,
	            data: data
	        });
	        this.redirectTo = redirectTo;
	    }
	    Redirect = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Redirect);
	    return Redirect;
	}(AbstractRoute));
	exports.Redirect = Redirect;


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var route_config_decorator_1 = __webpack_require__(218);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	/**
	 * Given a JS Object that represents a route config, returns a corresponding Route, AsyncRoute,
	 * AuxRoute or Redirect object.
	 *
	 * Also wraps an AsyncRoute's loader function to add the loaded component's route config to the
	 * `RouteRegistry`.
	 */
	function normalizeRouteConfig(config, registry) {
	    if (config instanceof route_config_decorator_1.AsyncRoute) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AuxRoute) {
	        return config;
	    }
	    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
	    }
	    if (config.as && config.name) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
	    }
	    if (config.as) {
	        config.name = config.as;
	    }
	    if (config.loader) {
	        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
	        return new route_config_decorator_1.AsyncRoute({
	            path: config.path,
	            loader: wrappedLoader,
	            name: config.name,
	            data: config.data,
	            useAsDefault: config.useAsDefault
	        });
	    }
	    if (config.aux) {
	        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
	    }
	    if (config.component) {
	        if (typeof config.component == 'object') {
	            var componentDefinitionObject = config.component;
	            if (componentDefinitionObject.type == 'constructor') {
	                return new route_config_decorator_1.Route({
	                    path: config.path,
	                    component: componentDefinitionObject.constructor,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else if (componentDefinitionObject.type == 'loader') {
	                return new route_config_decorator_1.AsyncRoute({
	                    path: config.path,
	                    loader: componentDefinitionObject.loader,
	                    name: config.name,
	                    data: config.data,
	                    useAsDefault: config.useAsDefault
	                });
	            }
	            else {
	                throw new exceptions_1.BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
	            }
	        }
	        return new route_config_decorator_1.Route(config);
	    }
	    if (config.redirectTo) {
	        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
	    }
	    return config;
	}
	exports.normalizeRouteConfig = normalizeRouteConfig;
	function wrapLoaderToReconfigureRegistry(loader, registry) {
	    return function () {
	        return loader().then(function (componentType) {
	            registry.configFromComponent(componentType);
	            return componentType;
	        });
	    };
	}
	function assertComponentExists(component, path) {
	    if (!lang_1.isType(component)) {
	        throw new exceptions_1.BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
	    }
	}
	exports.assertComponentExists = assertComponentExists;


/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var collection_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(10);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var reflection_1 = __webpack_require__(12);
	var core_1 = __webpack_require__(5);
	var route_config_impl_1 = __webpack_require__(77);
	var rules_1 = __webpack_require__(221);
	var rule_set_1 = __webpack_require__(315);
	var instruction_1 = __webpack_require__(31);
	var route_config_normalizer_1 = __webpack_require__(309);
	var url_parser_1 = __webpack_require__(134);
	var _resolveToNull = async_1.PromiseWrapper.resolve(null);
	// A LinkItemArray is an array, which describes a set of routes
	// The items in the array are found in groups:
	// - the first item is the name of the route
	// - the next items are:
	//   - an object containing parameters
	//   - or an array describing an aux route
	// export type LinkRouteItem = string | Object;
	// export type LinkItem = LinkRouteItem | Array<LinkRouteItem>;
	// export type LinkItemArray = Array<LinkItem>;
	/**
	 * Token used to bind the component with the top-level {@link RouteConfig}s for the
	 * application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PRIMARY_COMPONENT = lang_1.CONST_EXPR(new core_1.OpaqueToken('RouterPrimaryComponent'));
	/**
	 * The RouteRegistry holds route configurations for each component in an Angular app.
	 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
	 * parameters.
	 */
	var RouteRegistry = (function () {
	    function RouteRegistry(_rootComponent) {
	        this._rootComponent = _rootComponent;
	        this._rules = new collection_1.Map();
	    }
	    /**
	     * Given a component and a configuration object, add the route to this registry
	     */
	    RouteRegistry.prototype.config = function (parentComponent, config) {
	        config = route_config_normalizer_1.normalizeRouteConfig(config, this);
	        // this is here because Dart type guard reasons
	        if (config instanceof route_config_impl_1.Route) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        else if (config instanceof route_config_impl_1.AuxRoute) {
	            route_config_normalizer_1.assertComponentExists(config.component, config.path);
	        }
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            rules = new rule_set_1.RuleSet();
	            this._rules.set(parentComponent, rules);
	        }
	        var terminal = rules.config(config);
	        if (config instanceof route_config_impl_1.Route) {
	            if (terminal) {
	                assertTerminalComponent(config.component, config.path);
	            }
	            else {
	                this.configFromComponent(config.component);
	            }
	        }
	    };
	    /**
	     * Reads the annotations of a component and configures the registry based on them
	     */
	    RouteRegistry.prototype.configFromComponent = function (component) {
	        var _this = this;
	        if (!lang_1.isType(component)) {
	            return;
	        }
	        // Don't read the annotations from a type more than once –
	        // this prevents an infinite loop if a component routes recursively.
	        if (this._rules.has(component)) {
	            return;
	        }
	        var annotations = reflection_1.reflector.annotations(component);
	        if (lang_1.isPresent(annotations)) {
	            for (var i = 0; i < annotations.length; i++) {
	                var annotation = annotations[i];
	                if (annotation instanceof route_config_impl_1.RouteConfig) {
	                    var routeCfgs = annotation.configs;
	                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
	                }
	            }
	        }
	    };
	    /**
	     * Given a URL and a parent component, return the most specific instruction for navigating
	     * the application into the state specified by the url
	     */
	    RouteRegistry.prototype.recognize = function (url, ancestorInstructions) {
	        var parsedUrl = url_parser_1.parser.parse(url);
	        return this._recognize(parsedUrl, []);
	    };
	    /**
	     * Recognizes all parent-child routes, but creates unresolved auxiliary routes
	     */
	    RouteRegistry.prototype._recognize = function (parsedUrl, ancestorInstructions, _aux) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        var parentComponent = lang_1.isPresent(parentInstruction) ? parentInstruction.component.componentType :
	            this._rootComponent;
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return _resolveToNull;
	        }
	        // Matches some beginning part of the given URL
	        var possibleMatches = _aux ? rules.recognizeAuxiliary(parsedUrl) : rules.recognize(parsedUrl);
	        var matchPromises = possibleMatches.map(function (candidate) { return candidate.then(function (candidate) {
	            if (candidate instanceof rules_1.PathMatch) {
	                var auxParentInstructions = ancestorInstructions.length > 0 ? [collection_1.ListWrapper.last(ancestorInstructions)] : [];
	                var auxInstructions = _this._auxRoutesToUnresolved(candidate.remainingAux, auxParentInstructions);
	                var instruction = new instruction_1.ResolvedInstruction(candidate.instruction, null, auxInstructions);
	                if (lang_1.isBlank(candidate.instruction) || candidate.instruction.terminal) {
	                    return instruction;
	                }
	                var newAncestorInstructions = ancestorInstructions.concat([instruction]);
	                return _this._recognize(candidate.remaining, newAncestorInstructions)
	                    .then(function (childInstruction) {
	                    if (lang_1.isBlank(childInstruction)) {
	                        return null;
	                    }
	                    // redirect instructions are already absolute
	                    if (childInstruction instanceof instruction_1.RedirectInstruction) {
	                        return childInstruction;
	                    }
	                    instruction.child = childInstruction;
	                    return instruction;
	                });
	            }
	            if (candidate instanceof rules_1.RedirectMatch) {
	                var instruction = _this.generate(candidate.redirectTo, ancestorInstructions.concat([null]));
	                return new instruction_1.RedirectInstruction(instruction.component, instruction.child, instruction.auxInstruction, candidate.specificity);
	            }
	        }); });
	        if ((lang_1.isBlank(parsedUrl) || parsedUrl.path == '') && possibleMatches.length == 0) {
	            return async_1.PromiseWrapper.resolve(this.generateDefault(parentComponent));
	        }
	        return async_1.PromiseWrapper.all(matchPromises).then(mostSpecific);
	    };
	    RouteRegistry.prototype._auxRoutesToUnresolved = function (auxRoutes, parentInstructions) {
	        var _this = this;
	        var unresolvedAuxInstructions = {};
	        auxRoutes.forEach(function (auxUrl) {
	            unresolvedAuxInstructions[auxUrl.path] = new instruction_1.UnresolvedInstruction(function () { return _this._recognize(auxUrl, parentInstructions, true); });
	        });
	        return unresolvedAuxInstructions;
	    };
	    /**
	     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
	     * generates a url with a leading slash relative to the provided `parentComponent`.
	     *
	     * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
	     * route boundary.
	     */
	    RouteRegistry.prototype.generate = function (linkParams, ancestorInstructions, _aux) {
	        if (_aux === void 0) { _aux = false; }
	        var params = splitAndFlattenLinkParams(linkParams);
	        var prevInstruction;
	        // The first segment should be either '.' (generate from parent) or '' (generate from root).
	        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
	        if (collection_1.ListWrapper.first(params) == '') {
	            params.shift();
	            prevInstruction = collection_1.ListWrapper.first(ancestorInstructions);
	            ancestorInstructions = [];
	        }
	        else {
	            prevInstruction = ancestorInstructions.length > 0 ? ancestorInstructions.pop() : null;
	            if (collection_1.ListWrapper.first(params) == '.') {
	                params.shift();
	            }
	            else if (collection_1.ListWrapper.first(params) == '..') {
	                while (collection_1.ListWrapper.first(params) == '..') {
	                    if (ancestorInstructions.length <= 0) {
	                        throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
	                    }
	                    prevInstruction = ancestorInstructions.pop();
	                    params = collection_1.ListWrapper.slice(params, 1);
	                }
	            }
	            else {
	                // we must only peak at the link param, and not consume it
	                var routeName = collection_1.ListWrapper.first(params);
	                var parentComponentType = this._rootComponent;
	                var grandparentComponentType = null;
	                if (ancestorInstructions.length > 1) {
	                    var parentComponentInstruction = ancestorInstructions[ancestorInstructions.length - 1];
	                    var grandComponentInstruction = ancestorInstructions[ancestorInstructions.length - 2];
	                    parentComponentType = parentComponentInstruction.component.componentType;
	                    grandparentComponentType = grandComponentInstruction.component.componentType;
	                }
	                else if (ancestorInstructions.length == 1) {
	                    parentComponentType = ancestorInstructions[0].component.componentType;
	                    grandparentComponentType = this._rootComponent;
	                }
	                // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
	                // If both exist, we throw. Otherwise, we prefer whichever exists.
	                var childRouteExists = this.hasRoute(routeName, parentComponentType);
	                var parentRouteExists = lang_1.isPresent(grandparentComponentType) &&
	                    this.hasRoute(routeName, grandparentComponentType);
	                if (parentRouteExists && childRouteExists) {
	                    var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
	                    throw new exceptions_1.BaseException(msg);
	                }
	                if (parentRouteExists) {
	                    prevInstruction = ancestorInstructions.pop();
	                }
	            }
	        }
	        if (params[params.length - 1] == '') {
	            params.pop();
	        }
	        if (params.length > 0 && params[0] == '') {
	            params.shift();
	        }
	        if (params.length < 1) {
	            var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" must include a route name.";
	            throw new exceptions_1.BaseException(msg);
	        }
	        var generatedInstruction = this._generate(params, ancestorInstructions, prevInstruction, _aux, linkParams);
	        // we don't clone the first (root) element
	        for (var i = ancestorInstructions.length - 1; i >= 0; i--) {
	            var ancestorInstruction = ancestorInstructions[i];
	            if (lang_1.isBlank(ancestorInstruction)) {
	                break;
	            }
	            generatedInstruction = ancestorInstruction.replaceChild(generatedInstruction);
	        }
	        return generatedInstruction;
	    };
	    /*
	     * Internal helper that does not make any assertions about the beginning of the link DSL.
	     * `ancestorInstructions` are parents that will be cloned.
	     * `prevInstruction` is the existing instruction that would be replaced, but which might have
	     * aux routes that need to be cloned.
	     */
	    RouteRegistry.prototype._generate = function (linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink) {
	        var _this = this;
	        if (_aux === void 0) { _aux = false; }
	        var parentComponentType = this._rootComponent;
	        var componentInstruction = null;
	        var auxInstructions = {};
	        var parentInstruction = collection_1.ListWrapper.last(ancestorInstructions);
	        if (lang_1.isPresent(parentInstruction) && lang_1.isPresent(parentInstruction.component)) {
	            parentComponentType = parentInstruction.component.componentType;
	        }
	        if (linkParams.length == 0) {
	            var defaultInstruction = this.generateDefault(parentComponentType);
	            if (lang_1.isBlank(defaultInstruction)) {
	                throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(_originalLink) + "\" does not resolve to a terminal instruction.");
	            }
	            return defaultInstruction;
	        }
	        // for non-aux routes, we want to reuse the predecessor's existing primary and aux routes
	        // and only override routes for which the given link DSL provides
	        if (lang_1.isPresent(prevInstruction) && !_aux) {
	            auxInstructions = collection_1.StringMapWrapper.merge(prevInstruction.auxInstruction, auxInstructions);
	            componentInstruction = prevInstruction.component;
	        }
	        var rules = this._rules.get(parentComponentType);
	        if (lang_1.isBlank(rules)) {
	            throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route config.");
	        }
	        var linkParamIndex = 0;
	        var routeParams = {};
	        // first, recognize the primary route if one is provided
	        if (linkParamIndex < linkParams.length && lang_1.isString(linkParams[linkParamIndex])) {
	            var routeName = linkParams[linkParamIndex];
	            if (routeName == '' || routeName == '.' || routeName == '..') {
	                throw new exceptions_1.BaseException("\"" + routeName + "/\" is only allowed at the beginning of a link DSL.");
	            }
	            linkParamIndex += 1;
	            if (linkParamIndex < linkParams.length) {
	                var linkParam = linkParams[linkParamIndex];
	                if (lang_1.isStringMap(linkParam) && !lang_1.isArray(linkParam)) {
	                    routeParams = linkParam;
	                    linkParamIndex += 1;
	                }
	            }
	            var routeRecognizer = (_aux ? rules.auxRulesByName : rules.rulesByName).get(routeName);
	            if (lang_1.isBlank(routeRecognizer)) {
	                throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(parentComponentType) + "\" has no route named \"" + routeName + "\".");
	            }
	            // Create an "unresolved instruction" for async routes
	            // we'll figure out the rest of the route when we resolve the instruction and
	            // perform a navigation
	            if (lang_1.isBlank(routeRecognizer.handler.componentType)) {
	                var generatedUrl = routeRecognizer.generateComponentPathValues(routeParams);
	                return new instruction_1.UnresolvedInstruction(function () {
	                    return routeRecognizer.handler.resolveComponentType().then(function (_) {
	                        return _this._generate(linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink);
	                    });
	                }, generatedUrl.urlPath, url_parser_1.convertUrlParamsToArray(generatedUrl.urlParams));
	            }
	            componentInstruction = _aux ? rules.generateAuxiliary(routeName, routeParams) :
	                rules.generate(routeName, routeParams);
	        }
	        // Next, recognize auxiliary instructions.
	        // If we have an ancestor instruction, we preserve whatever aux routes are active from it.
	        while (linkParamIndex < linkParams.length && lang_1.isArray(linkParams[linkParamIndex])) {
	            var auxParentInstruction = [parentInstruction];
	            var auxInstruction = this._generate(linkParams[linkParamIndex], auxParentInstruction, null, true, _originalLink);
	            // TODO: this will not work for aux routes with parameters or multiple segments
	            auxInstructions[auxInstruction.component.urlPath] = auxInstruction;
	            linkParamIndex += 1;
	        }
	        var instruction = new instruction_1.ResolvedInstruction(componentInstruction, null, auxInstructions);
	        // If the component is sync, we can generate resolved child route instructions
	        // If not, we'll resolve the instructions at navigation time
	        if (lang_1.isPresent(componentInstruction) && lang_1.isPresent(componentInstruction.componentType)) {
	            var childInstruction = null;
	            if (componentInstruction.terminal) {
	                if (linkParamIndex >= linkParams.length) {
	                }
	            }
	            else {
	                var childAncestorComponents = ancestorInstructions.concat([instruction]);
	                var remainingLinkParams = linkParams.slice(linkParamIndex);
	                childInstruction = this._generate(remainingLinkParams, childAncestorComponents, null, false, _originalLink);
	            }
	            instruction.child = childInstruction;
	        }
	        return instruction;
	    };
	    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
	        var rules = this._rules.get(parentComponent);
	        if (lang_1.isBlank(rules)) {
	            return false;
	        }
	        return rules.hasRoute(name);
	    };
	    RouteRegistry.prototype.generateDefault = function (componentCursor) {
	        var _this = this;
	        if (lang_1.isBlank(componentCursor)) {
	            return null;
	        }
	        var rules = this._rules.get(componentCursor);
	        if (lang_1.isBlank(rules) || lang_1.isBlank(rules.defaultRule)) {
	            return null;
	        }
	        var defaultChild = null;
	        if (lang_1.isPresent(rules.defaultRule.handler.componentType)) {
	            var componentInstruction = rules.defaultRule.generate({});
	            if (!rules.defaultRule.terminal) {
	                defaultChild = this.generateDefault(rules.defaultRule.handler.componentType);
	            }
	            return new instruction_1.DefaultInstruction(componentInstruction, defaultChild);
	        }
	        return new instruction_1.UnresolvedInstruction(function () {
	            return rules.defaultRule.handler.resolveComponentType().then(function (_) { return _this.generateDefault(componentCursor); });
	        });
	    };
	    RouteRegistry = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [lang_1.Type])
	    ], RouteRegistry);
	    return RouteRegistry;
	}());
	exports.RouteRegistry = RouteRegistry;
	/*
	 * Given: ['/a/b', {c: 2}]
	 * Returns: ['', 'a', 'b', {c: 2}]
	 */
	function splitAndFlattenLinkParams(linkParams) {
	    var accumulation = [];
	    linkParams.forEach(function (item) {
	        if (lang_1.isString(item)) {
	            var strItem = item;
	            accumulation = accumulation.concat(strItem.split('/'));
	        }
	        else {
	            accumulation.push(item);
	        }
	    });
	    return accumulation;
	}
	/*
	 * Given a list of instructions, returns the most specific instruction
	 */
	function mostSpecific(instructions) {
	    instructions = instructions.filter(function (instruction) { return lang_1.isPresent(instruction); });
	    if (instructions.length == 0) {
	        return null;
	    }
	    if (instructions.length == 1) {
	        return instructions[0];
	    }
	    var first = instructions[0];
	    var rest = instructions.slice(1);
	    return rest.reduce(function (instruction, contender) {
	        if (compareSpecificityStrings(contender.specificity, instruction.specificity) == -1) {
	            return contender;
	        }
	        return instruction;
	    }, first);
	}
	/*
	 * Expects strings to be in the form of "[0-2]+"
	 * Returns -1 if string A should be sorted above string B, 1 if it should be sorted after,
	 * or 0 if they are the same.
	 */
	function compareSpecificityStrings(a, b) {
	    var l = lang_1.Math.min(a.length, b.length);
	    for (var i = 0; i < l; i += 1) {
	        var ai = lang_1.StringWrapper.charCodeAt(a, i);
	        var bi = lang_1.StringWrapper.charCodeAt(b, i);
	        var difference = bi - ai;
	        if (difference != 0) {
	            return difference;
	        }
	    }
	    return a.length - b.length;
	}
	function assertTerminalComponent(component, path) {
	    if (!lang_1.isType(component)) {
	        return;
	    }
	    var annotations = reflection_1.reflector.annotations(component);
	    if (lang_1.isPresent(annotations)) {
	        for (var i = 0; i < annotations.length; i++) {
	            var annotation = annotations[i];
	            if (annotation instanceof route_config_impl_1.RouteConfig) {
	                throw new exceptions_1.BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
	            }
	        }
	    }
	}


/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var async_1 = __webpack_require__(10);
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(5);
	var route_registry_1 = __webpack_require__(133);
	var location_1 = __webpack_require__(76);
	var route_lifecycle_reflector_1 = __webpack_require__(216);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	var _resolveToFalse = async_1.PromiseWrapper.resolve(false);
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only field `router.navigating`.
	 * This may be useful for showing a spinner, for instance.
	 *
	 * ## Concepts
	 *
	 * Routers and component instances have a 1:1 correspondence.
	 *
	 * The router holds reference to a number of {@link RouterOutlet}.
	 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
	 *
	 * When the router navigates from a URL, it must first recognize it and serialize it into an
	 * `Instruction`.
	 * The router uses the `RouteRegistry` to get an `Instruction`.
	 */
	var Router = (function () {
	    function Router(registry, parent, hostComponent, root) {
	        this.registry = registry;
	        this.parent = parent;
	        this.hostComponent = hostComponent;
	        this.root = root;
	        this.navigating = false;
	        /**
	         * The current `Instruction` for the router
	         */
	        this.currentInstruction = null;
	        this._currentNavigation = _resolveToTrue;
	        this._outlet = null;
	        this._auxRouters = new collection_1.Map();
	        this._subject = new async_1.EventEmitter();
	    }
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.childRouter = function (hostComponent) {
	        return this._childRouter = new ChildRouter(this, hostComponent);
	    };
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
	    /**
	     * Register an outlet to be notified of primary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            throw new exceptions_1.BaseException("Primary outlet is already registered.");
	        }
	        this._outlet = outlet;
	        if (lang_1.isPresent(this.currentInstruction)) {
	            return this.commit(this.currentInstruction, false);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Unregister an outlet (because it was destroyed, etc).
	     *
	     * You probably don't need to use this unless you're writing a custom outlet implementation.
	     */
	    Router.prototype.unregisterPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        this._outlet = null;
	    };
	    /**
	     * Register an outlet to notified of auxiliary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerAuxOutlet = function (outlet) {
	        var outletName = outlet.name;
	        if (lang_1.isBlank(outletName)) {
	            throw new exceptions_1.BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
	        }
	        var router = this.auxRouter(this.hostComponent);
	        this._auxRouters.set(outletName, router);
	        router._outlet = outlet;
	        var auxInstruction;
	        if (lang_1.isPresent(this.currentInstruction) &&
	            lang_1.isPresent(auxInstruction = this.currentInstruction.auxInstruction[outletName])) {
	            return router.commit(auxInstruction);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Given an instruction, returns `true` if the instruction is currently active,
	     * otherwise `false`.
	     */
	    Router.prototype.isRouteActive = function (instruction) {
	        var _this = this;
	        var router = this;
	        if (lang_1.isBlank(this.currentInstruction)) {
	            return false;
	        }
	        // `instruction` corresponds to the root router
	        while (lang_1.isPresent(router.parent) && lang_1.isPresent(instruction.child)) {
	            router = router.parent;
	            instruction = instruction.child;
	        }
	        if (lang_1.isBlank(instruction.component) || lang_1.isBlank(this.currentInstruction.component) ||
	            this.currentInstruction.component.routeName != instruction.component.routeName) {
	            return false;
	        }
	        var paramEquals = true;
	        if (lang_1.isPresent(this.currentInstruction.component.params)) {
	            collection_1.StringMapWrapper.forEach(instruction.component.params, function (value, key) {
	                if (_this.currentInstruction.component.params[key] !== value) {
	                    paramEquals = false;
	                }
	            });
	        }
	        return paramEquals;
	    };
	    /**
	     * Dynamically update the routing configuration and trigger a navigation.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.config([
	     *   { 'path': '/', 'component': IndexComp },
	     *   { 'path': '/user/:id', 'component': UserComp },
	     * ]);
	     * ```
	     */
	    Router.prototype.config = function (definitions) {
	        var _this = this;
	        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
	        return this.renavigate();
	    };
	    /**
	     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
	     * over `navigateByUrl`.
	     *
	     * ### Usage
	     *
	     * This method takes an array representing the Route Link DSL:
	     * ```
	     * ['./MyCmp', {param: 3}]
	     * ```
	     * See the {@link RouterLink} directive for more.
	     */
	    Router.prototype.navigate = function (linkParams) {
	        var instruction = this.generate(linkParams);
	        return this.navigateByInstruction(instruction, false);
	    };
	    /**
	     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
	     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
	     *
	     * If the given URL begins with a `/`, router will navigate absolutely.
	     * If the given URL does not begin with `/`, the router will navigate relative to this component.
	     */
	    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this.lastNavigationAttempt = url;
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
	                if (lang_1.isBlank(instruction)) {
	                    return false;
	                }
	                return _this._navigate(instruction, _skipLocationChange);
	            }));
	        });
	    };
	    /**
	     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
	     * complete.
	     */
	    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        if (lang_1.isBlank(instruction)) {
	            return _resolveToFalse;
	        }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
	        });
	    };
	    /** @internal */
	    Router.prototype._settleInstruction = function (instruction) {
	        var _this = this;
	        return instruction.resolveComponent().then(function (_) {
	            var unsettledInstructions = [];
	            if (lang_1.isPresent(instruction.component)) {
	                instruction.component.reuse = false;
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                unsettledInstructions.push(_this._settleInstruction(instruction.child));
	            }
	            collection_1.StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
	                unsettledInstructions.push(_this._settleInstruction(instruction));
	            });
	            return async_1.PromiseWrapper.all(unsettledInstructions);
	        });
	    };
	    /** @internal */
	    Router.prototype._navigate = function (instruction, _skipLocationChange) {
	        var _this = this;
	        return this._settleInstruction(instruction)
	            .then(function (_) { return _this._routerCanReuse(instruction); })
	            .then(function (_) { return _this._canActivate(instruction); })
	            .then(function (result) {
	            if (!result) {
	                return false;
	            }
	            return _this._routerCanDeactivate(instruction)
	                .then(function (result) {
	                if (result) {
	                    return _this.commit(instruction, _skipLocationChange)
	                        .then(function (_) {
	                        _this._emitNavigationFinish(instruction.toRootUrl());
	                        return true;
	                    });
	                }
	            });
	        });
	    };
	    Router.prototype._emitNavigationFinish = function (url) { async_1.ObservableWrapper.callEmit(this._subject, url); };
	    /** @internal */
	    Router.prototype._emitNavigationFail = function (url) { async_1.ObservableWrapper.callError(this._subject, url); };
	    Router.prototype._afterPromiseFinishNavigating = function (promise) {
	        var _this = this;
	        return async_1.PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
	            _this._finishNavigating();
	            throw err;
	        });
	    };
	    /*
	     * Recursively set reuse flags
	     */
	    /** @internal */
	    Router.prototype._routerCanReuse = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToFalse;
	        }
	        if (lang_1.isBlank(instruction.component)) {
	            return _resolveToTrue;
	        }
	        return this._outlet.routerCanReuse(instruction.component)
	            .then(function (result) {
	            instruction.component.reuse = result;
	            if (result && lang_1.isPresent(_this._childRouter) && lang_1.isPresent(instruction.child)) {
	                return _this._childRouter._routerCanReuse(instruction.child);
	            }
	        });
	    };
	    Router.prototype._canActivate = function (nextInstruction) {
	        return canActivateOne(nextInstruction, this.currentInstruction);
	    };
	    Router.prototype._routerCanDeactivate = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToTrue;
	        }
	        var next;
	        var childInstruction = null;
	        var reuse = false;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	            reuse = lang_1.isBlank(instruction.component) || instruction.component.reuse;
	        }
	        if (reuse) {
	            next = _resolveToTrue;
	        }
	        else {
	            next = this._outlet.routerCanDeactivate(componentInstruction);
	        }
	        // TODO: aux route lifecycle hooks
	        return next.then(function (result) {
	            if (result == false) {
	                return false;
	            }
	            if (lang_1.isPresent(_this._childRouter)) {
	                // TODO: ideally, this closure would map to async-await in Dart.
	                // For now, casting to any to suppress an error.
	                return _this._childRouter._routerCanDeactivate(childInstruction);
	            }
	            return true;
	        });
	    };
	    /**
	     * Updates this router and all descendant routers according to the given instruction
	     */
	    Router.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        this.currentInstruction = instruction;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._outlet) && lang_1.isPresent(instruction.component)) {
	            var componentInstruction = instruction.component;
	            if (componentInstruction.reuse) {
	                next = this._outlet.reuse(componentInstruction);
	            }
	            else {
	                next =
	                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                next = next.then(function (_) {
	                    if (lang_1.isPresent(_this._childRouter)) {
	                        return _this._childRouter.commit(instruction.child);
	                    }
	                });
	            }
	        }
	        var promises = [];
	        this._auxRouters.forEach(function (router, name) {
	            if (lang_1.isPresent(instruction.auxInstruction[name])) {
	                promises.push(router.commit(instruction.auxInstruction[name]));
	            }
	        });
	        return next.then(function (_) { return async_1.PromiseWrapper.all(promises); });
	    };
	    /** @internal */
	    Router.prototype._startNavigating = function () { this.navigating = true; };
	    /** @internal */
	    Router.prototype._finishNavigating = function () { this.navigating = false; };
	    /**
	     * Subscribe to URL updates from the router
	     */
	    Router.prototype.subscribe = function (onNext, onError) {
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onError);
	    };
	    /**
	     * Removes the contents of this router's outlet and all descendant outlets
	     */
	    Router.prototype.deactivate = function (instruction) {
	        var _this = this;
	        var childInstruction = null;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	        }
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._childRouter)) {
	            next = this._childRouter.deactivate(childInstruction);
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
	        }
	        // TODO: handle aux routes
	        return next;
	    };
	    /**
	     * Given a URL, returns an instruction representing the component graph
	     */
	    Router.prototype.recognize = function (url) {
	        var ancestorComponents = this._getAncestorInstructions();
	        return this.registry.recognize(url, ancestorComponents);
	    };
	    Router.prototype._getAncestorInstructions = function () {
	        var ancestorInstructions = [this.currentInstruction];
	        var ancestorRouter = this;
	        while (lang_1.isPresent(ancestorRouter = ancestorRouter.parent)) {
	            ancestorInstructions.unshift(ancestorRouter.currentInstruction);
	        }
	        return ancestorInstructions;
	    };
	    /**
	     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
	     * router has yet to successfully navigate.
	     */
	    Router.prototype.renavigate = function () {
	        if (lang_1.isBlank(this.lastNavigationAttempt)) {
	            return this._currentNavigation;
	        }
	        return this.navigateByUrl(this.lastNavigationAttempt);
	    };
	    /**
	     * Generate an `Instruction` based on the provided Route Link DSL.
	     */
	    Router.prototype.generate = function (linkParams) {
	        var ancestorInstructions = this._getAncestorInstructions();
	        return this.registry.generate(linkParams, ancestorInstructions);
	    };
	    Router = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, Router, Object, Router])
	    ], Router);
	    return Router;
	}());
	exports.Router = Router;
	var RootRouter = (function (_super) {
	    __extends(RootRouter, _super);
	    function RootRouter(registry, location, primaryComponent) {
	        var _this = this;
	        _super.call(this, registry, null, primaryComponent);
	        this.root = this;
	        this._location = location;
	        this._locationSub = this._location.subscribe(function (change) {
	            // we call recognize ourselves
	            _this.recognize(change['url'])
	                .then(function (instruction) {
	                if (lang_1.isPresent(instruction)) {
	                    _this.navigateByInstruction(instruction, lang_1.isPresent(change['pop']))
	                        .then(function (_) {
	                        // this is a popstate event; no need to change the URL
	                        if (lang_1.isPresent(change['pop']) && change['type'] != 'hashchange') {
	                            return;
	                        }
	                        var emitPath = instruction.toUrlPath();
	                        var emitQuery = instruction.toUrlQuery();
	                        if (emitPath.length > 0 && emitPath[0] != '/') {
	                            emitPath = '/' + emitPath;
	                        }
	                        // We've opted to use pushstate and popState APIs regardless of whether you
	                        // an app uses HashLocationStrategy or PathLocationStrategy.
	                        // However, apps that are migrating might have hash links that operate outside
	                        // angular to which routing must respond.
	                        // Therefore we know that all hashchange events occur outside Angular.
	                        // To support these cases where we respond to hashchanges and redirect as a
	                        // result, we need to replace the top item on the stack.
	                        if (change['type'] == 'hashchange') {
	                            if (instruction.toRootUrl() != _this._location.path()) {
	                                _this._location.replaceState(emitPath, emitQuery);
	                            }
	                        }
	                        else {
	                            _this._location.go(emitPath, emitQuery);
	                        }
	                    });
	                }
	                else {
	                    _this._emitNavigationFail(change['url']);
	                }
	            });
	        });
	        this.registry.configFromComponent(primaryComponent);
	        this.navigateByUrl(location.path());
	    }
	    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        var emitPath = instruction.toUrlPath();
	        var emitQuery = instruction.toUrlQuery();
	        if (emitPath.length > 0 && emitPath[0] != '/') {
	            emitPath = '/' + emitPath;
	        }
	        var promise = _super.prototype.commit.call(this, instruction);
	        if (!_skipLocationChange) {
	            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
	        }
	        return promise;
	    };
	    RootRouter.prototype.dispose = function () {
	        if (lang_1.isPresent(this._locationSub)) {
	            async_1.ObservableWrapper.dispose(this._locationSub);
	            this._locationSub = null;
	        }
	    };
	    RootRouter = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Inject(route_registry_1.ROUTER_PRIMARY_COMPONENT)), 
	        __metadata('design:paramtypes', [route_registry_1.RouteRegistry, location_1.Location, lang_1.Type])
	    ], RootRouter);
	    return RootRouter;
	}(Router));
	exports.RootRouter = RootRouter;
	var ChildRouter = (function (_super) {
	    __extends(ChildRouter, _super);
	    function ChildRouter(parent, hostComponent) {
	        _super.call(this, parent.registry, parent, hostComponent, parent.root);
	        this.parent = parent;
	    }
	    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByUrl(url, _skipLocationChange);
	    };
	    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
	    };
	    return ChildRouter;
	}(Router));
	function canActivateOne(nextInstruction, prevInstruction) {
	    var next = _resolveToTrue;
	    if (lang_1.isBlank(nextInstruction.component)) {
	        return next;
	    }
	    if (lang_1.isPresent(nextInstruction.child)) {
	        next = canActivateOne(nextInstruction.child, lang_1.isPresent(prevInstruction) ? prevInstruction.child : null);
	    }
	    return next.then(function (result) {
	        if (result == false) {
	            return false;
	        }
	        if (nextInstruction.component.reuse) {
	            return true;
	        }
	        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
	        if (lang_1.isPresent(hook)) {
	            return hook(nextInstruction.component, lang_1.isPresent(prevInstruction) ? prevInstruction.component : null);
	        }
	        return true;
	    });
	}


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var router_providers_common_1 = __webpack_require__(219);
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(1);
	var browser_platform_location_1 = __webpack_require__(307);
	var platform_location_1 = __webpack_require__(56);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = lang_1.CONST_EXPR([
	    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
	    lang_1.CONST_EXPR(new core_1.Provider(platform_location_1.PlatformLocation, { useClass: browser_platform_location_1.BrowserPlatformLocation })),
	]);
	/**
	 * Use {@link ROUTER_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.ROUTER_BINDINGS = exports.ROUTER_PROVIDERS;


/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var location_strategy_1 = __webpack_require__(55);
	var path_location_strategy_1 = __webpack_require__(217);
	var router_1 = __webpack_require__(78);
	var route_registry_1 = __webpack_require__(133);
	var location_1 = __webpack_require__(76);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(4);
	/**
	 * The Platform agnostic ROUTER PROVIDERS
	 */
	exports.ROUTER_PROVIDERS_COMMON = lang_1.CONST_EXPR([
	    route_registry_1.RouteRegistry,
	    lang_1.CONST_EXPR(new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: path_location_strategy_1.PathLocationStrategy })),
	    location_1.Location,
	    lang_1.CONST_EXPR(new core_1.Provider(router_1.Router, {
	        useFactory: routerFactory,
	        deps: lang_1.CONST_EXPR([route_registry_1.RouteRegistry, location_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT, core_1.ApplicationRef])
	    })),
	    lang_1.CONST_EXPR(new core_1.Provider(route_registry_1.ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: lang_1.CONST_EXPR([core_1.ApplicationRef]) }))
	]);
	function routerFactory(registry, location, primaryComponent, appRef) {
	    var rootRouter = new router_1.RootRouter(registry, location, primaryComponent);
	    appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
	    return rootRouter;
	}
	function routerPrimaryComponentFactory(app) {
	    if (app.componentTypes.length == 0) {
	        throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    return app.componentTypes[0];
	}


/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var instruction_1 = __webpack_require__(31);
	var AsyncRouteHandler = (function () {
	    function AsyncRouteHandler(_loader, data) {
	        if (data === void 0) { data = null; }
	        this._loader = _loader;
	        /** @internal */
	        this._resolvedComponent = null;
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    AsyncRouteHandler.prototype.resolveComponentType = function () {
	        var _this = this;
	        if (lang_1.isPresent(this._resolvedComponent)) {
	            return this._resolvedComponent;
	        }
	        return this._resolvedComponent = this._loader().then(function (componentType) {
	            _this.componentType = componentType;
	            return componentType;
	        });
	    };
	    return AsyncRouteHandler;
	}());
	exports.AsyncRouteHandler = AsyncRouteHandler;


/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var async_1 = __webpack_require__(10);
	var lang_1 = __webpack_require__(1);
	var instruction_1 = __webpack_require__(31);
	var SyncRouteHandler = (function () {
	    function SyncRouteHandler(componentType, data) {
	        this.componentType = componentType;
	        /** @internal */
	        this._resolvedComponent = null;
	        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
	        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
	    }
	    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
	    return SyncRouteHandler;
	}());
	exports.SyncRouteHandler = SyncRouteHandler;


/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(316);
	var url_parser_1 = __webpack_require__(134);
	var route_path_1 = __webpack_require__(220);
	/**
	 * Identified by a `...` URL segment. This indicates that the
	 * Route will continue to be matched by child `Router`s.
	 */
	var ContinuationPathSegment = (function () {
	    function ContinuationPathSegment() {
	        this.name = '';
	        this.specificity = '';
	        this.hash = '...';
	    }
	    ContinuationPathSegment.prototype.generate = function (params) { return ''; };
	    ContinuationPathSegment.prototype.match = function (path) { return true; };
	    return ContinuationPathSegment;
	}());
	/**
	 * Identified by a string not starting with a `:` or `*`.
	 * Only matches the URL segments that equal the segment path
	 */
	var StaticPathSegment = (function () {
	    function StaticPathSegment(path) {
	        this.path = path;
	        this.name = '';
	        this.specificity = '2';
	        this.hash = path;
	    }
	    StaticPathSegment.prototype.match = function (path) { return path == this.path; };
	    StaticPathSegment.prototype.generate = function (params) { return this.path; };
	    return StaticPathSegment;
	}());
	/**
	 * Identified by a string starting with `:`. Indicates a segment
	 * that can contain a value that will be extracted and provided to
	 * a matching `Instruction`.
	 */
	var DynamicPathSegment = (function () {
	    function DynamicPathSegment(name) {
	        this.name = name;
	        this.specificity = '1';
	        this.hash = ':';
	    }
	    DynamicPathSegment.prototype.match = function (path) { return path.length > 0; };
	    DynamicPathSegment.prototype.generate = function (params) {
	        if (!collection_1.StringMapWrapper.contains(params.map, this.name)) {
	            throw new exceptions_1.BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
	        }
	        return encodeDynamicSegment(utils_1.normalizeString(params.get(this.name)));
	    };
	    DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
	    return DynamicPathSegment;
	}());
	/**
	 * Identified by a string starting with `*` Indicates that all the following
	 * segments match this route and that the value of these segments should
	 * be provided to a matching `Instruction`.
	 */
	var StarPathSegment = (function () {
	    function StarPathSegment(name) {
	        this.name = name;
	        this.specificity = '0';
	        this.hash = '*';
	    }
	    StarPathSegment.prototype.match = function (path) { return true; };
	    StarPathSegment.prototype.generate = function (params) { return utils_1.normalizeString(params.get(this.name)); };
	    StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
	    return StarPathSegment;
	}());
	/**
	 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
	 */
	var ParamRoutePath = (function () {
	    /**
	     * Takes a string representing the matcher DSL
	     */
	    function ParamRoutePath(routePath) {
	        this.routePath = routePath;
	        this.terminal = true;
	        this._assertValidPath(routePath);
	        this._parsePathString(routePath);
	        this.specificity = this._calculateSpecificity();
	        this.hash = this._calculateHash();
	        var lastSegment = this._segments[this._segments.length - 1];
	        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
	    }
	    ParamRoutePath.prototype.matchUrl = function (url) {
	        var nextUrlSegment = url;
	        var currentUrlSegment;
	        var positionalParams = {};
	        var captured = [];
	        for (var i = 0; i < this._segments.length; i += 1) {
	            var pathSegment = this._segments[i];
	            currentUrlSegment = nextUrlSegment;
	            if (pathSegment instanceof ContinuationPathSegment) {
	                break;
	            }
	            if (lang_1.isPresent(currentUrlSegment)) {
	                // the star segment consumes all of the remaining URL, including matrix params
	                if (pathSegment instanceof StarPathSegment) {
	                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
	                    captured.push(currentUrlSegment.toString());
	                    nextUrlSegment = null;
	                    break;
	                }
	                captured.push(currentUrlSegment.path);
	                if (pathSegment instanceof DynamicPathSegment) {
	                    positionalParams[pathSegment.name] = decodeDynamicSegment(currentUrlSegment.path);
	                }
	                else if (!pathSegment.match(currentUrlSegment.path)) {
	                    return null;
	                }
	                nextUrlSegment = currentUrlSegment.child;
	            }
	            else if (!pathSegment.match('')) {
	                return null;
	            }
	        }
	        if (this.terminal && lang_1.isPresent(nextUrlSegment)) {
	            return null;
	        }
	        var urlPath = captured.join('/');
	        var auxiliary = [];
	        var urlParams = [];
	        var allParams = positionalParams;
	        if (lang_1.isPresent(currentUrlSegment)) {
	            // If this is the root component, read query params. Otherwise, read matrix params.
	            var paramsSegment = url instanceof url_parser_1.RootUrl ? url : currentUrlSegment;
	            if (lang_1.isPresent(paramsSegment.params)) {
	                allParams = collection_1.StringMapWrapper.merge(paramsSegment.params, positionalParams);
	                urlParams = url_parser_1.convertUrlParamsToArray(paramsSegment.params);
	            }
	            else {
	                allParams = positionalParams;
	            }
	            auxiliary = currentUrlSegment.auxiliary;
	        }
	        return new route_path_1.MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
	    };
	    ParamRoutePath.prototype.generateUrl = function (params) {
	        var paramTokens = new utils_1.TouchMap(params);
	        var path = [];
	        for (var i = 0; i < this._segments.length; i++) {
	            var segment = this._segments[i];
	            if (!(segment instanceof ContinuationPathSegment)) {
	                path.push(segment.generate(paramTokens));
	            }
	        }
	        var urlPath = path.join('/');
	        var nonPositionalParams = paramTokens.getUnused();
	        var urlParams = nonPositionalParams;
	        return new route_path_1.GeneratedUrl(urlPath, urlParams);
	    };
	    ParamRoutePath.prototype.toString = function () { return this.routePath; };
	    ParamRoutePath.prototype._parsePathString = function (routePath) {
	        // normalize route as not starting with a "/". Recognition will
	        // also normalize.
	        if (routePath.startsWith("/")) {
	            routePath = routePath.substring(1);
	        }
	        var segmentStrings = routePath.split('/');
	        this._segments = [];
	        var limit = segmentStrings.length - 1;
	        for (var i = 0; i <= limit; i++) {
	            var segment = segmentStrings[i], match;
	            if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
	                this._segments.push(new DynamicPathSegment(match[1]));
	            }
	            else if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
	                this._segments.push(new StarPathSegment(match[1]));
	            }
	            else if (segment == '...') {
	                if (i < limit) {
	                    throw new exceptions_1.BaseException("Unexpected \"...\" before the end of the path for \"" + routePath + "\".");
	                }
	                this._segments.push(new ContinuationPathSegment());
	            }
	            else {
	                this._segments.push(new StaticPathSegment(segment));
	            }
	        }
	    };
	    ParamRoutePath.prototype._calculateSpecificity = function () {
	        // The "specificity" of a path is used to determine which route is used when multiple routes
	        // match
	        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
	        // (like
	        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
	        // specific
	        // than proceeding ones.
	        //
	        // The code below uses place values to combine the different types of segments into a single
	        // string that we can sort later. Each static segment is marked as a specificity of "2," each
	        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
	        var i, length = this._segments.length, specificity;
	        if (length == 0) {
	            // a single slash (or "empty segment" is as specific as a static segment
	            specificity += '2';
	        }
	        else {
	            specificity = '';
	            for (i = 0; i < length; i++) {
	                specificity += this._segments[i].specificity;
	            }
	        }
	        return specificity;
	    };
	    ParamRoutePath.prototype._calculateHash = function () {
	        // this function is used to determine whether a route config path like `/foo/:id` collides with
	        // `/foo/:name`
	        var i, length = this._segments.length;
	        var hashParts = [];
	        for (i = 0; i < length; i++) {
	            hashParts.push(this._segments[i].hash);
	        }
	        return hashParts.join('/');
	    };
	    ParamRoutePath.prototype._assertValidPath = function (path) {
	        if (lang_1.StringWrapper.contains(path, '#')) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
	        }
	        var illegalCharacter = lang_1.RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
	        if (lang_1.isPresent(illegalCharacter)) {
	            throw new exceptions_1.BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
	        }
	    };
	    ParamRoutePath.RESERVED_CHARS = lang_1.RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
	    return ParamRoutePath;
	}());
	exports.ParamRoutePath = ParamRoutePath;
	var REGEXP_PERCENT = /%/g;
	var REGEXP_SLASH = /\//g;
	var REGEXP_OPEN_PARENT = /\(/g;
	var REGEXP_CLOSE_PARENT = /\)/g;
	var REGEXP_SEMICOLON = /;/g;
	function encodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_PERCENT, '%25');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SLASH, '%2F');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_OPEN_PARENT, '%28');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_CLOSE_PARENT, '%29');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_SEMICOLON, '%3B');
	    return value;
	}
	var REGEXP_ENC_SEMICOLON = /%3B/ig;
	var REGEXP_ENC_CLOSE_PARENT = /%29/ig;
	var REGEXP_ENC_OPEN_PARENT = /%28/ig;
	var REGEXP_ENC_SLASH = /%2F/ig;
	var REGEXP_ENC_PERCENT = /%25/ig;
	function decodeDynamicSegment(value) {
	    if (lang_1.isBlank(value)) {
	        return null;
	    }
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SEMICOLON, ';');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_CLOSE_PARENT, ')');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_OPEN_PARENT, '(');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_SLASH, '/');
	    value = lang_1.StringWrapper.replaceAll(value, REGEXP_ENC_PERCENT, '%');
	    return value;
	}


/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var route_path_1 = __webpack_require__(220);
	var RegexRoutePath = (function () {
	    function RegexRoutePath(_reString, _serializer) {
	        this._reString = _reString;
	        this._serializer = _serializer;
	        this.terminal = true;
	        this.specificity = '2';
	        this.hash = this._reString;
	        this._regex = lang_1.RegExpWrapper.create(this._reString);
	    }
	    RegexRoutePath.prototype.matchUrl = function (url) {
	        var urlPath = url.toString();
	        var params = {};
	        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
	        var match = lang_1.RegExpMatcherWrapper.next(matcher);
	        if (lang_1.isBlank(match)) {
	            return null;
	        }
	        for (var i = 0; i < match.length; i += 1) {
	            params[i.toString()] = match[i];
	        }
	        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
	    };
	    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
	    RegexRoutePath.prototype.toString = function () { return this._reString; };
	    return RegexRoutePath;
	}());
	exports.RegexRoutePath = RegexRoutePath;


/***/ },

/***/ 220:
/***/ function(module, exports) {

	'use strict';"use strict";
	var MatchedUrl = (function () {
	    function MatchedUrl(urlPath, urlParams, allParams, auxiliary, rest) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.allParams = allParams;
	        this.auxiliary = auxiliary;
	        this.rest = rest;
	    }
	    return MatchedUrl;
	}());
	exports.MatchedUrl = MatchedUrl;
	var GeneratedUrl = (function () {
	    function GeneratedUrl(urlPath, urlParams) {
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	    }
	    return GeneratedUrl;
	}());
	exports.GeneratedUrl = GeneratedUrl;


/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var collection_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(10);
	var rules_1 = __webpack_require__(221);
	var route_config_impl_1 = __webpack_require__(77);
	var async_route_handler_1 = __webpack_require__(311);
	var sync_route_handler_1 = __webpack_require__(312);
	var param_route_path_1 = __webpack_require__(313);
	var regex_route_path_1 = __webpack_require__(314);
	/**
	 * A `RuleSet` is responsible for recognizing routes for a particular component.
	 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
	 * components.
	 */
	var RuleSet = (function () {
	    function RuleSet() {
	        this.rulesByName = new collection_1.Map();
	        // map from name to rule
	        this.auxRulesByName = new collection_1.Map();
	        // map from starting path to rule
	        this.auxRulesByPath = new collection_1.Map();
	        // TODO: optimize this into a trie
	        this.rules = [];
	        // the rule to use automatically when recognizing or generating from this rule set
	        this.defaultRule = null;
	    }
	    /**
	     * Configure additional rules in this rule set from a route definition
	     * @returns {boolean} true if the config is terminal
	     */
	    RuleSet.prototype.config = function (config) {
	        var handler;
	        if (lang_1.isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
	            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
	            throw new exceptions_1.BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
	        }
	        if (config instanceof route_config_impl_1.AuxRoute) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            var routePath_1 = this._getRoutePath(config);
	            var auxRule = new rules_1.RouteRule(routePath_1, handler, config.name);
	            this.auxRulesByPath.set(routePath_1.toString(), auxRule);
	            if (lang_1.isPresent(config.name)) {
	                this.auxRulesByName.set(config.name, auxRule);
	            }
	            return auxRule.terminal;
	        }
	        var useAsDefault = false;
	        if (config instanceof route_config_impl_1.Redirect) {
	            var routePath_2 = this._getRoutePath(config);
	            var redirector = new rules_1.RedirectRule(routePath_2, config.redirectTo);
	            this._assertNoHashCollision(redirector.hash, config.path);
	            this.rules.push(redirector);
	            return true;
	        }
	        if (config instanceof route_config_impl_1.Route) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        else if (config instanceof route_config_impl_1.AsyncRoute) {
	            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
	            useAsDefault = lang_1.isPresent(config.useAsDefault) && config.useAsDefault;
	        }
	        var routePath = this._getRoutePath(config);
	        var newRule = new rules_1.RouteRule(routePath, handler, config.name);
	        this._assertNoHashCollision(newRule.hash, config.path);
	        if (useAsDefault) {
	            if (lang_1.isPresent(this.defaultRule)) {
	                throw new exceptions_1.BaseException("Only one route can be default");
	            }
	            this.defaultRule = newRule;
	        }
	        this.rules.push(newRule);
	        if (lang_1.isPresent(config.name)) {
	            this.rulesByName.set(config.name, newRule);
	        }
	        return newRule.terminal;
	    };
	    /**
	     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
	     */
	    RuleSet.prototype.recognize = function (urlParse) {
	        var solutions = [];
	        this.rules.forEach(function (routeRecognizer) {
	            var pathMatch = routeRecognizer.recognize(urlParse);
	            if (lang_1.isPresent(pathMatch)) {
	                solutions.push(pathMatch);
	            }
	        });
	        // handle cases where we are routing just to an aux route
	        if (solutions.length == 0 && lang_1.isPresent(urlParse) && urlParse.auxiliary.length > 0) {
	            return [async_1.PromiseWrapper.resolve(new rules_1.PathMatch(null, null, urlParse.auxiliary))];
	        }
	        return solutions;
	    };
	    RuleSet.prototype.recognizeAuxiliary = function (urlParse) {
	        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
	        if (lang_1.isPresent(routeRecognizer)) {
	            return [routeRecognizer.recognize(urlParse)];
	        }
	        return [async_1.PromiseWrapper.resolve(null)];
	    };
	    RuleSet.prototype.hasRoute = function (name) { return this.rulesByName.has(name); };
	    RuleSet.prototype.componentLoaded = function (name) {
	        return this.hasRoute(name) && lang_1.isPresent(this.rulesByName.get(name).handler.componentType);
	    };
	    RuleSet.prototype.loadComponent = function (name) {
	        return this.rulesByName.get(name).handler.resolveComponentType();
	    };
	    RuleSet.prototype.generate = function (name, params) {
	        var rule = this.rulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype.generateAuxiliary = function (name, params) {
	        var rule = this.auxRulesByName.get(name);
	        if (lang_1.isBlank(rule)) {
	            return null;
	        }
	        return rule.generate(params);
	    };
	    RuleSet.prototype._assertNoHashCollision = function (hash, path) {
	        this.rules.forEach(function (rule) {
	            if (hash == rule.hash) {
	                throw new exceptions_1.BaseException("Configuration '" + path + "' conflicts with existing route '" + rule.path + "'");
	            }
	        });
	    };
	    RuleSet.prototype._getRoutePath = function (config) {
	        if (lang_1.isPresent(config.regex)) {
	            if (lang_1.isFunction(config.serializer)) {
	                return new regex_route_path_1.RegexRoutePath(config.regex, config.serializer);
	            }
	            else {
	                throw new exceptions_1.BaseException("Route provides a regex property, '" + config.regex + "', but no serializer property");
	            }
	        }
	        if (lang_1.isPresent(config.path)) {
	            // Auxiliary routes do not have a slash at the start
	            var path = (config instanceof route_config_impl_1.AuxRoute && config.path.startsWith('/')) ?
	                config.path.substring(1) :
	                config.path;
	            return new param_route_path_1.ParamRoutePath(path);
	        }
	        throw new exceptions_1.BaseException('Route must provide either a path or regex property');
	    };
	    return RuleSet;
	}());
	exports.RuleSet = RuleSet;


/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	var promise_1 = __webpack_require__(39);
	var collection_1 = __webpack_require__(3);
	var url_parser_1 = __webpack_require__(134);
	var instruction_1 = __webpack_require__(31);
	// RouteMatch objects hold information about a match between a rule and a URL
	var RouteMatch = (function () {
	    function RouteMatch() {
	    }
	    return RouteMatch;
	}());
	exports.RouteMatch = RouteMatch;
	var PathMatch = (function (_super) {
	    __extends(PathMatch, _super);
	    function PathMatch(instruction, remaining, remainingAux) {
	        _super.call(this);
	        this.instruction = instruction;
	        this.remaining = remaining;
	        this.remainingAux = remainingAux;
	    }
	    return PathMatch;
	}(RouteMatch));
	exports.PathMatch = PathMatch;
	var RedirectMatch = (function (_super) {
	    __extends(RedirectMatch, _super);
	    function RedirectMatch(redirectTo, specificity) {
	        _super.call(this);
	        this.redirectTo = redirectTo;
	        this.specificity = specificity;
	    }
	    return RedirectMatch;
	}(RouteMatch));
	exports.RedirectMatch = RedirectMatch;
	var RedirectRule = (function () {
	    function RedirectRule(_pathRecognizer, redirectTo) {
	        this._pathRecognizer = _pathRecognizer;
	        this.redirectTo = redirectTo;
	        this.hash = this._pathRecognizer.hash;
	    }
	    Object.defineProperty(RedirectRule.prototype, "path", {
	        get: function () { return this._pathRecognizer.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RedirectRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns `null` or a `ParsedUrl` representing the new path to match
	     */
	    RedirectRule.prototype.recognize = function (beginningSegment) {
	        var match = null;
	        if (lang_1.isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
	            match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
	        }
	        return promise_1.PromiseWrapper.resolve(match);
	    };
	    RedirectRule.prototype.generate = function (params) {
	        throw new exceptions_1.BaseException("Tried to generate a redirect.");
	    };
	    return RedirectRule;
	}());
	exports.RedirectRule = RedirectRule;
	// represents something like '/foo/:bar'
	var RouteRule = (function () {
	    // TODO: cache component instruction instances by params and by ParsedUrl instance
	    function RouteRule(_routePath, handler, _routeName) {
	        this._routePath = _routePath;
	        this.handler = handler;
	        this._routeName = _routeName;
	        this._cache = new collection_1.Map();
	        this.specificity = this._routePath.specificity;
	        this.hash = this._routePath.hash;
	        this.terminal = this._routePath.terminal;
	    }
	    Object.defineProperty(RouteRule.prototype, "path", {
	        get: function () { return this._routePath.toString(); },
	        set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RouteRule directly'); },
	        enumerable: true,
	        configurable: true
	    });
	    RouteRule.prototype.recognize = function (beginningSegment) {
	        var _this = this;
	        var res = this._routePath.matchUrl(beginningSegment);
	        if (lang_1.isBlank(res)) {
	            return null;
	        }
	        return this.handler.resolveComponentType().then(function (_) {
	            var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
	            return new PathMatch(componentInstruction, res.rest, res.auxiliary);
	        });
	    };
	    RouteRule.prototype.generate = function (params) {
	        var generated = this._routePath.generateUrl(params);
	        var urlPath = generated.urlPath;
	        var urlParams = generated.urlParams;
	        return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
	    };
	    RouteRule.prototype.generateComponentPathValues = function (params) {
	        return this._routePath.generateUrl(params);
	    };
	    RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
	        if (lang_1.isBlank(this.handler.componentType)) {
	            throw new exceptions_1.BaseException("Tried to get instruction before the type was loaded.");
	        }
	        var hashKey = urlPath + '?' + urlParams.join('&');
	        if (this._cache.has(hashKey)) {
	            return this._cache.get(hashKey);
	        }
	        var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params, this._routeName);
	        this._cache.set(hashKey, instruction);
	        return instruction;
	    };
	    return RouteRule;
	}());
	exports.RouteRule = RouteRule;


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(3);
	var lang_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(4);
	function convertUrlParamsToArray(urlParams) {
	    var paramsArray = [];
	    if (lang_1.isBlank(urlParams)) {
	        return [];
	    }
	    collection_1.StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
	    return paramsArray;
	}
	exports.convertUrlParamsToArray = convertUrlParamsToArray;
	// Convert an object of url parameters into a string that can be used in an URL
	function serializeParams(urlParams, joiner) {
	    if (joiner === void 0) { joiner = '&'; }
	    return convertUrlParamsToArray(urlParams).join(joiner);
	}
	exports.serializeParams = serializeParams;
	/**
	 * This class represents a parsed URL
	 */
	var Url = (function () {
	    function Url(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = lang_1.CONST_EXPR({}); }
	        this.path = path;
	        this.child = child;
	        this.auxiliary = auxiliary;
	        this.params = params;
	    }
	    Url.prototype.toString = function () {
	        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
	    };
	    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
	    /** @internal */
	    Url.prototype._auxToString = function () {
	        return this.auxiliary.length > 0 ?
	            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
	            '';
	    };
	    Url.prototype._matrixParamsToString = function () {
	        var paramString = serializeParams(this.params, ';');
	        if (paramString.length > 0) {
	            return ';' + paramString;
	        }
	        return '';
	    };
	    /** @internal */
	    Url.prototype._childString = function () { return lang_1.isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
	    return Url;
	}());
	exports.Url = Url;
	var RootUrl = (function (_super) {
	    __extends(RootUrl, _super);
	    function RootUrl(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = null; }
	        _super.call(this, path, child, auxiliary, params);
	    }
	    RootUrl.prototype.toString = function () {
	        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
	    };
	    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
	    RootUrl.prototype._queryParamsToString = function () {
	        if (lang_1.isBlank(this.params)) {
	            return '';
	        }
	        return '?' + serializeParams(this.params);
	    };
	    return RootUrl;
	}(Url));
	exports.RootUrl = RootUrl;
	function pathSegmentsToUrl(pathSegments) {
	    var url = new Url(pathSegments[pathSegments.length - 1]);
	    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
	        url = new Url(pathSegments[i], url);
	    }
	    return url;
	}
	exports.pathSegmentsToUrl = pathSegmentsToUrl;
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = lang_1.RegExpWrapper.create('^[^\\(\\)\\?;&#]+');
	function matchUrlQueryParamValue(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(QUERY_PARAM_VALUE_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var UrlParser = (function () {
	    function UrlParser() {
	    }
	    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new exceptions_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new Url('');
	        }
	        return this.parseRoot();
	    };
	    // segment + (aux segments) + (query params)
	    UrlParser.prototype.parseRoot = function () {
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        if (this.peekStartsWith(';')) {
	            // TODO: should these params just be dropped?
	            this.parseMatrixParams();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        var queryParams = null;
	        if (this.peekStartsWith('?')) {
	            queryParams = this.parseQueryParams();
	        }
	        return new RootUrl(path, child, aux, queryParams);
	    };
	    // segment + (matrix params) + (aux segments)
	    UrlParser.prototype.parseSegment = function () {
	        if (this._remaining.length == 0) {
	            return null;
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var matrixParams = null;
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        return new Url(path, child, aux, matrixParams);
	    };
	    UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseQueryParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseQueryParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var routes = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            routes.push(this.parseSegment());
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return routes;
	    };
	    return UrlParser;
	}());
	exports.UrlParser = UrlParser;
	exports.parser = new UrlParser();


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';"use strict";
	var lang_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(3);
	var TouchMap = (function () {
	    function TouchMap(map) {
	        var _this = this;
	        this.map = {};
	        this.keys = {};
	        if (lang_1.isPresent(map)) {
	            collection_1.StringMapWrapper.forEach(map, function (value, key) {
	                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
	                _this.keys[key] = true;
	            });
	        }
	    }
	    TouchMap.prototype.get = function (key) {
	        collection_1.StringMapWrapper.delete(this.keys, key);
	        return this.map[key];
	    };
	    TouchMap.prototype.getUnused = function () {
	        var _this = this;
	        var unused = {};
	        var keys = collection_1.StringMapWrapper.keys(this.keys);
	        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
	        return unused;
	    };
	    return TouchMap;
	}());
	exports.TouchMap = TouchMap;
	function normalizeString(obj) {
	    if (lang_1.isBlank(obj)) {
	        return null;
	    }
	    else {
	        return obj.toString();
	    }
	}
	exports.normalizeString = normalizeString;


/***/ },

/***/ 317:
/***/ function(module, exports) {

	'use strict';"use strict";
	// Note: This class is only here so that we can reference it from TypeScript code.
	// The actual implementation lives under modules_dart.
	// TODO(tbosch): Move the corresponding code into angular2/src/compiler once
	// the new compiler is done.
	var Codegen = (function () {
	    function Codegen(moduleAlias) {
	    }
	    Codegen.prototype.generate = function (typeName, changeDetectorTypeName, def) {
	        throw "Not implemented in JS";
	    };
	    Codegen.prototype.toString = function () { throw "Not implemented in JS"; };
	    return Codegen;
	}());
	exports.Codegen = Codegen;


/***/ },

/***/ 547:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});
//# sourceMappingURL=demo.10af5a4aca30ae9aeebb.bundle.map
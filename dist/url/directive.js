"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var _1 = require('./');
var URL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return _1.url(c);
    };
    UrlValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                    providers: [URL_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    UrlValidator.ctorParameters = [];
    return UrlValidator;
}());
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=directive.js.map
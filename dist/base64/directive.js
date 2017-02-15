"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var _1 = require('./');
var BASE64_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return _1.base64(c);
    };
    Base64Validator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                    providers: [BASE64_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    Base64Validator.ctorParameters = [];
    return Base64Validator;
}());
exports.Base64Validator = Base64Validator;
//# sourceMappingURL=directive.js.map
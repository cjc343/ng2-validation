"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var index_1 = require('../index');
var GREATER_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanValidator; }),
    multi: true
};
var GreaterThanValidator = (function () {
    function GreaterThanValidator() {
    }
    GreaterThanValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.gt(this.gt);
    };
    GreaterThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gt') {
                this.validator = index_1.CustomValidators.gt(changes[key].currentValue);
            }
        }
    };
    GreaterThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                    providers: [GREATER_THAN_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    GreaterThanValidator.ctorParameters = [];
    GreaterThanValidator.propDecorators = {
        'gt': [{ type: core_1.Input },],
    };
    return GreaterThanValidator;
}());
exports.GreaterThanValidator = GreaterThanValidator;
//# sourceMappingURL=greater-than.js.map
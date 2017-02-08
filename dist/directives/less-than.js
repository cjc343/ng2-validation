"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var index_1 = require('../index');
var LESS_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = (function () {
    function LessThanValidator() {
    }
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.lt(this.lt);
    };
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = index_1.CustomValidators.lt(changes[key].currentValue);
            }
        }
    };
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                    providers: [LESS_THAN_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    LessThanValidator.ctorParameters = [];
    LessThanValidator.propDecorators = {
        'lt': [{ type: core_1.Input },],
    };
    return LessThanValidator;
}());
exports.LessThanValidator = LessThanValidator;
//# sourceMappingURL=less-than.js.map
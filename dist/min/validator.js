"use strict";
var forms_1 = require('@angular/forms');
var lang_1 = require('../facade/lang');
exports.min = function (min) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +min ? null : { 'min': true };
    };
};
//# sourceMappingURL=validator.js.map
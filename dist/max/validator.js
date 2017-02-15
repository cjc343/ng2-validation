"use strict";
var forms_1 = require('@angular/forms');
var lang_1 = require('../facade/lang');
exports.max = function (max) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +max ? null : { max: true };
    };
};
//# sourceMappingURL=validator.js.map
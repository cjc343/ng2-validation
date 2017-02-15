"use strict";
var forms_1 = require('@angular/forms');
var lang_1 = require('../facade/lang');
exports.range = function (range) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= range[0] && v <= range[1] ? null : { range: true };
    };
};
//# sourceMappingURL=validator.js.map
"use strict";
var forms_1 = require('@angular/forms');
var lang_1 = require('../facade/lang');
exports.rangeLength = function (rangeLength) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { rangeLength: true };
    };
};
//# sourceMappingURL=validator.js.map
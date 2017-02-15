"use strict";
var forms_1 = require('@angular/forms');
var lang_1 = require('../facade/lang');
exports.gt = function (gt) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v > +gt ? null : { gt: true };
    };
};
//# sourceMappingURL=validator.js.map
"use strict";
module.getPrompts = function (options) {
    return Object.entries(options).map(function (_a) {
        var name = _a[0], _b = _a[1], choices = _b.choices, _default = _b.default, message = _b.message, type = _b.type;
        return ({
            choices: choices,
            default: _default,
            message: message,
            name: name,
            type: type,
        });
    });
};
module.getOptions = function (options) {
    return Object.entries(options).reduce(function (previous, _a) {
        var name = _a[0], _b = _a[1], choices = _b.choices, _default = _b.default, demandOption = _b.demandOption, describe = _b.describe, type = _b.type;
        previous[name] = {
            choices: choices,
            default: _default,
            demandOption: demandOption,
            describe: describe,
            type: type,
        };
        return previous;
    }, {});
};
//# sourceMappingURL=util.js.map
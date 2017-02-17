'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = camelCase;

var _utils = require('../utils');

/**
 * Resolves camelCase option for css-modules-require-hook
 *
 * @param {*} value
 * @returns {boolean}
 */
function camelCase(value /* , currentConfig */) {
    if (!(0, _utils.isBoolean)(value)) {
        throw new Error('Configuration \'camelCase\' is not a boolean');
    }

    return value;
}
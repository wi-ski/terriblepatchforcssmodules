'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = processOpts;

var _utils = require('../utils');

/**
 * Resolves processOpts option for css-modules-require-hook
 *
 * @param {String|Function} value
 *
 * @returns {String|Function}
 */
function processOpts(value /* ,currentConfig */) {
    if ((0, _utils.isModulePath)(value)) {
        var requiredModule = (0, _utils.requireLocalFileOrNodeModule)(value);

        if ((0, _utils.isPlainObject)(requiredModule)) {
            return requiredModule;
        }

        throw new Error('Configuration file for \'processOpts\' is not exporting a plain object');
    } else if ((0, _utils.isPlainObject)(value)) {
        return value;
    } else {
        throw new Error('Configuration \'processOpts\' is not a plain object nor a valid path to module');
    }
}
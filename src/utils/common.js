// @INCLUDE_IN_API_DOCS
/** This is a description of the isString function.
 *  This function checks if object is sting or not
 * @param {Object} str - Take any Object
 * @return {boolean}  - true if it is a string false otherwise
 * */
export function isString(str) {
    if (str == null) {
        return false;
    }
    return (typeof str === 'string' || str instanceof String);
}

/** This is a description of the isNumber function.
 *  This function checks if object is Number or not
 * @param {Object} number - Take any Object
 * @return {boolean}  - true if it is a Number false otherwise
 * */

export function isNumber(number) {
    if (number == null) {
        return false;
    }
    return (typeof number === 'number' || number instanceof Number);
}

/** This is a description of the isObject function.
 *  This function checks if object is valid JS Object or not
 * @param {Object} object - Take any Object
 * @return {boolean}  - true if it is an Object false otherwise
 * */

export function isObject(object) {
    if (object == null) {
        return false;
    }
    if (isString(object)) {
        return false;
    }
    if (isBoolean(object)) {
        return false;
    }
    if (isNumber(object)) {
        return false;
    }
    return typeof object === 'object';
}

/** This is a description of the isBoolean function.
 *  This function checks if object is valid boolean Object or not
 * @param {Object} boolean - Take any Object
 * @return {boolean}  - true if it is a valid boolean false otherwise
 * */

export function isBoolean(boolean) {
    if (boolean == null) {
        return false;
    }
    return (typeof boolean === 'boolean' || boolean instanceof Boolean);
}

/** This is a description of the isObjectEmpty function.
 *  This function checks if object is Empty or not
 * @param {Object} boolean - Take any Object
 * @throw if not valid object
 * @return {boolean}  - true if Object is empty false otherwise
 * */
export function isObjectEmpty(obj) {
    if (!isObject(obj)) {
        throw new Error('Not a valid Object');
    }
    for (let i in obj) {
        return false;
    }
    return true;
}

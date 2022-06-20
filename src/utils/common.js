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

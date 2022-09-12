/*global describe, it*/
import * as assert from 'assert';
import * as chai from 'chai';
import {isBoolean, isNumber, isObject, isObjectEmpty, isString, isStringEmpty} from "../../../src/utils/common.js";


let expect = chai.expect;

describe('unit  for src/utils/common.js', function () {
    it('call isNumber with 1', function () {
        expect(isNumber(1)).to.equal(true);

    });
    it('isNumber should return false', function () {
        expect(isNumber("1")).to.equal(false);
    });
    it('isNumber should return true', function () {
        const num = Number(1);
        expect(isNumber(num)).to.equal(true);
    });
    it('isNumber should return true', function () {
        const num = Number("1");
        expect(isNumber(num)).to.equal(true);
    });
    it('isNumber should return false for null', function () {
        expect(isNumber(isNumber(null))).to.equal(false);
    });


    it('isString should return true for valid string literal', function () {
        expect(isString('hello')).to.equal(true);
    });
    it('isString should return true for valid string literal', function () {
        const str = String('hello');
        expect(isString(str)).to.equal(true);
    });
    it('isString should return false for any other objects', function () {
        const obj = {};
        expect(isString(obj)).to.equal(false);
    });
    it('should return false for boolean', function () {
        expect(isString(true)).to.equal(false);
    });
    it('should return false for number', function () {
        expect(isString(1)).to.equal(false);
    });
    it('should return false for null', function () {
        expect(isString(null)).to.equal(false);
    });
    it('isObject should return true for valid Object', function () {
        expect(isObject({})).to.equal(true);
    });
    it('isObject should return true for valid Object', function () {
        // eslint-disable-next-line no-new-object
        expect(isObject(new Object())).to.equal(true);
    });
    it('isObject should return false for valid string', function () {
        expect(isObject('hello')).to.equal(false);
    });
    it('isObject should return false for valid string', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isObject(new String('hello'))).to.equal(false);
    });
    it('isObject should return false for valid number', function () {
        expect(isObject(1)).to.equal(false);
    });
    it('isObject should return false for valid number', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isObject(new Number(1))).to.equal(false);
    });

    it('isObject should return false for valid boolean', function () {
        expect(isObject(true)).to.equal(false);
    });
    it('isObject should return false for valid boolean', function () {
        expect(isObject(false)).to.equal(false);
    });
    it('isObject should return false for null', function () {
        expect(isObject(null)).to.equal(false);
    });

    it('isBoolean should return true for valid boolean', function () {
        expect(isBoolean(true)).to.equal(true);
    });
    it('isBoolean should return true for valid boolean', function () {
        expect(isBoolean(false)).to.equal(true);
    });
    it('isBoolean should return true for valid boolean', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isBoolean(new Boolean(true))).to.equal(true);
    });
    it('isBoolean should return true for valid boolean', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isBoolean(new Boolean(false))).to.equal(true);
    });
    it('isBoolean should return false for valid string', function () {
        expect(isBoolean('hello')).to.equal(false);
    });
    it('isBoolean should return false for valid string', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isBoolean(new String('hello'))).to.equal(false);
    });
    it('isBoolean should return false for valid number', function () {
        expect(isBoolean(1)).to.equal(false);
    });
    it('isBoolean should return false for valid number', function () {
        // eslint-disable-next-line no-new-wrappers
        expect(isBoolean(new Number(1))).to.equal(false);
    });
    it('isBoolean should return false for valid Object', function () {
        expect(isBoolean({})).to.equal(false);
    });
    it('isBoolean should return false for valid Object', function () {
        // eslint-disable-next-line no-new-object
        expect(isBoolean(new Object())).to.equal(false);
    });
    it('isBoolean should return false for null Object', function () {
        expect(isBoolean(null)).to.equal(false);
    });

    it('isObjectEmpty should return true if object ie empty', function () {
        expect(isObjectEmpty({})).to.equal(true);
    });

    it('isObjectEmpty should return false if object is not empty', function () {
        expect(isObjectEmpty({'hello': 'world'})).to.equal(false);
    });

    it('isObjectEmpty throw exception if non object is passed', function () {
        try {
            isObjectEmpty(null);
        } catch (e) {
            expect(e.toString()).to.eql('Error: Not a valid Object');
        }

    });
    it('should pass of empty sting', function (){
        expect(isStringEmpty('')).equal(true);
    });
    it('should pass of empty sting', function (){
        expect(isStringEmpty('   ')).equal(true);
    });
    it('should fail of empty string is valid', function (){
        expect(isStringEmpty(' a ')).equal(false);
    });
});

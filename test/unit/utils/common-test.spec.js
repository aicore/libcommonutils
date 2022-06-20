/*global describe, it*/
import * as assert from 'assert';
import * as chai from 'chai';
import {isNumber, isString} from "../../../src/utils/common.js";


let expect = chai.expect;

function testThrow() {
    throw 'Required';
}

describe('unit  for src/utils/common.js', function () {
    it('call isNumber with 1', function () {
        expect(isNumber(1)).to.equal(true);
        //testThrow();
        expect(() => {
            testThrow();
        }).to.throw('Required');
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
});

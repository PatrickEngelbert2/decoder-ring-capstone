// Write your tests here!
const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe("substitution", () => {
    it("Mine should exist", () => {
        expect(substitution).to.exist
    })
    it("Mine should return false if the substitution alphabet is missing", () => {
        const actual = substitution("hello");
        expect(actual).to.be.false;
    })
    it("Mine should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("hello", "cba");
        expect(actual).to.be.false;
    })
    it("Mine should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitution("abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    })
    it("Mine should encode a message by using the given substitution alphabet", () => {
        const expected = "qwerty";
        const actual = substitution("abcdef", "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.eql(expected);
    })
    it("Mine should work with any kind of key with unique characters", () => {
        const expected = "qwerty!";
        const actual = substitution("abcdefg", "qwerty!iopasdfghjklzxcvbnm");
        expect(actual).to.eql(expected);
    })
    it("Mine should preserve spaces", () => {
        const expected = "qwer ty";
        const actual = substitution("abcd ef", "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.eql(expected);
    })
    it("Mine should decode a message by using the given substitution alphabet", () => {
        const expected = "abcdef";
        const actual = substitution("qwerty","qwertyuiopasdfghjklzxcvbnm", false);
        expect(actual).to.eql(expected);
    })
    it("Mine should work with any kind of key with unique characters", () => {
        const expected = "abcdefg";
        const actual = substitution("qwerty!","qwerty!iopasdfghjklzxcvbnm",false);
        expect(actual).to.eql(expected);
    })
    it("Mine should preserve spaces", () => {
        const expected = "abcd ef";
        const actual = substitution("qwer ty","qwertyuiopasdfghjklzxcvbnm",false);
        expect(actual).to.eql(expected);
    })
})
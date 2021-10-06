// Write your tests here!
const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("Mine should exist", () => {
        expect(polybius).to.exist
    })
// encoding
    it("Mine should encode a message by translating each letter to number pairs", () => {
        let expected = "21"
        let actual = polybius("b")
        expect(actual).to.eql(expected)
    })
    it("Mine should translate 'i' to 42", () => {
        let expected = "42"
        let actual = polybius("i")
        expect(actual).to.eql(expected)
    })
    it("Mine should translate 'j' to 42", () => {
        let expected = "42"
        let actual = polybius("j")
        expect(actual).to.eql(expected)
    })
    it("Mine should leave spaces as is", () => {
        let expected = "21 2121"
        let actual = polybius("b bb")
        expect(actual).to.eql(expected)
    })
// decoding
    it("Mine should decode a message by translating each pair of numbers into a letter", () => {
        let expected = "bb"
        let actual = polybius("2121", false)
        expect(actual).to.eql(expected)
    })
    it("Mine should translate 42 to both 'i' and 'j'", () => {
        let expected = "(i/j)"
        let actual = polybius("42", false)
        expect(actual).to.eql(expected)
    })
    it("Mine should leave spaces as is", () => {
        let expected = "b bb"
        let actual = polybius("21 2121", false)
        expect(actual).to.eql(expected)
    })
    it("Mine should return false if the length of all numbers is odd", () => {
        let actual = polybius("21121", false)
        expect(actual).to.be.false
    })
})
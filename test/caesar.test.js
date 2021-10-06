// Write your tests here!
const expect = require("chai").expect
const { caesar } = require("../src/caesar")

describe("caesar", () => {
  it("should exist", () => {
    expect(caesar).to.exist
  })
  it("should return false If the shift value is equal to 0", () => {
    let expected = false
    let actual = caesar("rnuats", 0)
    expect(actual).to.eql(expected)
  })
  it("should return false If the shift value is less than -25", () => {
    let expected = false
    let actual = caesar("rnuats", -26)
    expect(actual).to.eql(expected)
  })
  it("should return false If the shift value is greater than 25", () => {
    let expected = false
    let actual = caesar("rnuats", 26)
    expect(actual).to.eql(expected)
  })
  it("should return false If the shift value is not present", () => {
    let expected = false
    let actual = caesar("rnuats")
    expect(actual).to.eql(expected)
  })
  it("should encode a message by shifting the letters", () => {
    let expected = "fodpefnf"
    let actual = caesar("encodeme", 1)
    expect(actual).to.eql(expected)
  })
  it("should leaves spaces and other symbols as is", () => {
    let expected = "fodpef nf!!!"
    let actual = caesar("encode me!!!", 1)
    expect(actual).to.eql(expected)
  })
  it("should ignore capital letters", () => {
    let expected = "fodpefnf"
    let actual = caesar("EncodeMe", 1)
    expect(actual).to.eql(expected)
  })
  it("should appropriately handle letters at the end of the alphabet", () => {
    let expected = "cheud"
    let actual = caesar("zebra", 3)
    expect(actual).to.eql(expected)
  })
  it("should allow for a negative shift that will shift to the left", () => {
    let expected = "idee"
    let actual = caesar("jeff", -1)
    expect(actual).to.eql(expected)
  })
  it("should decode a message by shifting the letters in the opposite direction", () => {
    let expected = "vqnmf"
    let actual = caesar("wrong", 1, false)
    expect(actual).to.eql(expected)
  })
  it("should leaves spaces and other symbols as is", () => {
    let expected = "%b sfbmmz mpoh tusjoh uibu epfto'u offe up cf ofbsmz bt mpoh, cvu jt tujmm mpoh cfdbvtf ju't ojdf up cf gvo boe dsfbujwf po tpnf pddbujpot jg uibu't xibu zpvs joup fwfsz-tp-pgufo."
    let actual = caesar("%a really long string that doesn't need to be nearly as long, but is still long because it's nice to be fun and creative on some occations if that's what your into every-so-often.", 1)
    expect(actual).to.eql(expected)
  })
  it("should ignore capital letters", () => {
    let expected = "ifmmppppppp"
    let actual = caesar("HeLloOOooOo", 1)
    expect(actual).to.eql(expected)
  })
  it("should appropriately handle letters at the end of the alphabet", () => {
    let expected = "mkockb"
    let actual = caesar("caesar", 16, false)
    expect(actual).to.eql(expected)
  })
  it("should allow for a negative shift that will shift to the left", () => {
    let expected = "czf"
    let actual = caesar("bye", -1, false)
    expect(actual).to.eql(expected)
  })
})
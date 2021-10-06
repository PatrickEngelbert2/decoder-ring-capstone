// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet = 0, encode = true) {
    if(alphabet.length !== 26) return false
    if(new Set(alphabet).size != alphabet.length) return false
    let key = {}
    let abcs = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alphabet.length; i++) {
      if (encode) key[abcs[i]] = alphabet[i]
      if (!encode) key[alphabet[i]] = abcs[i]
    }
    let helperKey=(macth)=> {
      return key[macth]
    }
    return input.replace(/[^\s]/g, helperKey).toLowerCase()
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

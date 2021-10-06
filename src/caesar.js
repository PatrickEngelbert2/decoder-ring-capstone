// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
const caesarCode = (input, shift) => {
  const lowerInput = input.toLowerCase()
  let inputArr = lowerInput.split("")
  let letterCodes = inputArr.map(letter => letter.charCodeAt())
  let shiftedNums = letterCodes.map(num => {
    if (num < 123 && num > 96) {
      num = num + shift
      if (num > 122) {
        num = (num % 122) + 96
      } else if (num < 97) {
        num = num + 26 
      }
      return num
    }
    return num
  })
  let toLetters = shiftedNums.map(num => String.fromCharCode(num))
  let endResult = toLetters.join("")
  return endResult
}
  function caesar(input, shift=0, encode = true) {
    if(shift < -25 || shift > 25 || shift === 0) return false
    if(encode === true) {
      return caesarCode(input, shift)
    } else {
      return caesarCode(input, shift*-1)
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

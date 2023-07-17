// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
    const lowerCaseLetters = str.match(/[a-z]/g)
    return lowerCaseLetters ? lowerCaseLetters.length : 0
}
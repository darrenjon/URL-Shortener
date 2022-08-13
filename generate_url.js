// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateUrl function
function generateUrl() {
  // define random text strings
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  // create a collection to store 5 random strings
  let collection = []
  collection = collection.concat(lowerCaseLetters.split('')).concat(upperCaseLetters.split('')).concat(numbers.split(''))
  // start generating url
  let newUrl = ''
  for (let i = 0; i < 5; i++) {
    newUrl += sample(collection)
  }
  // return the new url
  return newUrl
}

// export generateUrl function for other files to use
module.exports = generateUrl
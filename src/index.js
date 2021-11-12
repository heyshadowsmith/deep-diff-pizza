const flattenObject = require('./utilities/flattenObject')
const getInitialDiff = require('./utilities/getInitialDiff')
const addRightAddedItemsToDiff = require('./utilities/addRightAddedItemsToDiff')

module.exports = (left, right) => {

  left = flattenObject(left)
  right = flattenObject(right)

  let diff = []

  diff = getInitialDiff(left, right, diff)
  diff = addRightAddedItemsToDiff(left, right, diff)

  return diff
}

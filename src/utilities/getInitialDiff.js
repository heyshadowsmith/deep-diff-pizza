const getDiffOperation = require('./getDiffOperation')
const addDiff = require('./addDiff')

module.exports = (left, right, diff) => {

  // Loop through left's keys...
  for (const key of Object.keys(left)) {

    // Get whether the key's value has been ADDED, UPDATED, REMOVED, or UNCHANGED.
    const diffOperation = getDiffOperation(left[key], right[key])

    // Add the key's diff to the diff.
    diff = [...addDiff(key, diffOperation, left, right, diff)]
  }

  return diff
}

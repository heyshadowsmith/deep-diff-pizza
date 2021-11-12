const getDiffOperation = require('./getDiffOperation')
const addDiff = require('./addDiff')

module.exports = (left, right, diff) => {

  // Loop through right's keys...
  for (const key of Object.keys(right)) {

    // Get whether the key's value has been ADDED, UPDATED, REMOVED, or UNCHANGED.
    const diffOperation = getDiffOperation(right[key], left[key])

    // If the key's value has been REMOVED...
    if (diffOperation === 'REMOVED') {

      // Add the key's diff to the diff as a "add".
      diff = [...addDiff(key, 'ADDED', left, right, diff)]
    }
  }

  return diff
}

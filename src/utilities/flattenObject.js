module.exports = function flattenObject (obj) {
  // Initialize result.
  let result = {}

  // Loop through every key in the Object.
  for (const key in obj) {

    // If the key's value is an Object and not an Array...
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {

      // Flatten the Object...
      const flattenedObject = flattenObject(obj[key])

      // Loop through every key in the flattened Object...
      for (const nestedKey in flattenedObject) {

        // And save the flattened key/value pair to "result"...
        result[`${key}.${nestedKey}`] = flattenedObject[nestedKey]
      }

      // And move on to the next key in the Object.
      continue
    }

    // If the key's value is an Array...
    if (Array.isArray(obj[key])) {

      // Loop through each item in the Array...
      obj[key].forEach((item, index) => {

        // If the key's value is an Object and not an Array...
        if (typeof item === 'object' && !Array.isArray(item)) {

          // Flatten the Object...
          const flattenedObject = flattenObject(item)

          // Loop through every key in the flattened Object...
          for (const nestedKey in flattenedObject) {

            // And save the flattened key/value pair to "result"...
            result[`${key}[${index}].${nestedKey}`] = flattenedObject[nestedKey]
          }

          return
        }

        // If the key is a simple key/value pair, save it to "result".
        result[`${key}[${index}]`] = item
      })

      // And move on to the next key in the Object.
      continue
    }

    // If the key is a simple key/value pair, save it to "result".
    result[key] = obj[key]
  }

  return result
}

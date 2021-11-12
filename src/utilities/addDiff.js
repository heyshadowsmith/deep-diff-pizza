module.exports = (key, diffOperation, left, right, diff) => {
  const was = typeof left[key] === 'undefined' ? null : left[key]
  const is = typeof right[key] === 'undefined' ? null : right[key]

  const update = {
    path: key,
    operation: diffOperation,
    was,
    is
  }

  diff.push(update)

  return diff
}

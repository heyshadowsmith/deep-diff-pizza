module.exports = (was, is) => {
  const emptyValues = [null, undefined]

  if (was === is) {
    return 'UNCHANGED'
  }

  if (emptyValues.includes(was) && !emptyValues.includes(is)) {
    return 'ADDED'
  }

  if (!emptyValues.includes(was) && emptyValues.includes(is)) {
    return 'REMOVED'
  }

  return 'UPDATED'

}

const addRightRemovedAndAddedItemsToDiff = require('./addRightAddedItemsToDiff')

describe('Constructs initial diff', () => {

  it ('Add new key values to diff that are added from right object', () => {
    const a = {
      b: 'c'
    }

    const b = {
      b: 'c',
      d: 'e'
    }

    const diff = addRightRemovedAndAddedItemsToDiff(a, b, [])

    const expectedValue = [
      {
        path: 'd',
        operation: 'ADDED',
        was: null,
        is: 'e'
      }
    ]

    expect(diff).toEqual(expectedValue)

  })

})


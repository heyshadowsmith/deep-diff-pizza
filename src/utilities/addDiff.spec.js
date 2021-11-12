const addDiff = require('./addDiff')

describe('Constructs diff', () => {

  it ('Should add new diff to array', () => {
    const a = {
      b: 'c'
    }

    const b = {
      b: 'd'
    }

    const diff = addDiff('b', 'UPDATED', a, b, [])

    const expectedValue = [
      {
        path: 'b',
        operation: 'UPDATED',
        was: 'c',
        is: 'd'
      }
    ]

    expect(diff).toEqual(expectedValue)

  })

  it ('Should transform undefined to null', () => {
    const a = {
      b: 'c'
    }

    const b = {
      b: 'd'
    }

    const diff = addDiff('c', 'UNCHANGED', a, b, [])

    const expectedValue = [
      {
        path: 'c',
        operation: 'UNCHANGED',
        was: null,
        is: null
      }
    ]

    expect(diff).toEqual(expectedValue)
  })

})


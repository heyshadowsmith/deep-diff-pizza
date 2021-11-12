const getInitialDiff = require('./getInitialDiff')

describe('Constructs initial diff', () => {

  it ('Should construct initial diff array', () => {
    const a = {
      b: 'c'
    }

    const b = {
      b: 'd'
    }

    const diff = getInitialDiff(a, b, [])

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

})


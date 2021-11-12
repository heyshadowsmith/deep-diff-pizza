const deepDiff = require('./index')

describe('Constructs diff', () => {

  it ('Returns diff as an array', () => {
    const a = {
      b: 'c',
      d: [
        'e',
        {
          f: 'g',
          h: 'i'
        },
        {
          j: 'k'
        }
      ]
    }

    const b = {
      b: 'b',
      d: [
        'e',
        {
          h: 'i',
          j: 'k',
          l: [
            'm',
            {
              'n': 'o'
            }
          ]
        }
      ]
    }

    const diff = deepDiff(a, b)

    const expectedValue = [
      {
        path: 'b',
        operation: 'UPDATED',
        was: 'c',
        is: 'b'
      },
      {
        path: 'd[0]',
        operation: 'UNCHANGED',
        was: 'e',
        is: 'e'
      },
      {
        path: 'd[1].f',
        operation: 'REMOVED',
        was: 'g',
        is: null
      },
      {
        path: 'd[1].h',
        operation: 'UNCHANGED',
        was: 'i',
        is: 'i'
      },
      {
        path: 'd[2].j',
        operation: 'REMOVED',
        was: 'k',
        is: null
      },
      {
        path: 'd[1].j',
        operation: 'ADDED',
        was: null,
        is: 'k'
      },
      {
        path: 'd[1].l[0]',
        operation: 'ADDED',
        was: null,
        is: 'm'
      },
      {
        path: 'd[1].l[1].n',
        operation: 'ADDED',
        was: null,
        is: 'o'
      }
    ]

    expect(diff).toEqual(expectedValue)

  })

})


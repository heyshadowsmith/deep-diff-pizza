const flattenObject = require('./flattenObject')

describe('Flattens object', () => {

  it ('Should pass through top level key value pairs', () => {
    const flattenedObject = flattenObject({
      a: 'b'
    })

    const expectedValue = {
      'a': 'b'
    }

    expect(flattenedObject).toEqual(expectedValue)
  })

  it ('Should flatten nested objects', () => {
    const flattenedObject = flattenObject({
      a: {
        b: 'c'
      }
    })

    const expectedValue = {
      'a.b': 'c'
    }

    expect(flattenedObject).toEqual(expectedValue)
  })

  it ('Should flatten nested arrays', () => {
    const flattenedObject = flattenObject({
      a: {
        b: [
          {
            c: 'd',
            e: [
              {
                f: 'g'
              },
              'h'
            ]
          },
          {
            c: 'd'
          }
        ]
      }
    })

    const expectedValue = {
      'a.b[0].c': 'd',
      'a.b[0].e[0].f': 'g',
      'a.b[0].e[1]': 'h',
      'a.b[1].c': 'd'
    }

    expect(flattenedObject).toEqual(expectedValue)
  })

})


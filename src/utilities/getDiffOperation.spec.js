const getDiffOperation = require('./getDiffOperation')

describe('Returns diff operation', () => {

  it ('Should return UNCHANGED', () => {
    const diffOperation = getDiffOperation('a', 'a')
    expect(diffOperation).toEqual('UNCHANGED')
  })

  it ('Should return UNCHANGED', () => {
    const diffOperation = getDiffOperation(null, null)
    expect(diffOperation).toEqual('UNCHANGED')
  })

  it ('Should return ADDED', () => {
    const diffOperation = getDiffOperation(null, 'a')
    expect(diffOperation).toEqual('ADDED')
  })

  it ('Should return UPDATED', () => {
    const diffOperation = getDiffOperation('a', 'b')
    expect(diffOperation).toEqual('UPDATED')
  })

  it ('Should return REMOVED', () => {
    const diffOperation = getDiffOperation('a', null)
    expect(diffOperation).toEqual('REMOVED')
  })

})


# Deep Diff Pizza
Deep Diff Pizza is a simple, 0 dependency utility function that takes in 2 JSON Objects and returns the differences in an easy-to-use format.

## Install
```
npm i deep-dish-pizza
```

## Usage
```
const deepDiff = require('deep-diff-pizza')

const jsonA = {
  deep: 'diff',
  meat: [
    'pepperoni',
    'sausage'
  ],
  tools: [
    {
      cutter: 'tool',
      masonry: 'oven'
    }
  ]
}

const jsonB = {
  deep: 'pizza',
  meat: [
    'pepperoni'
  ],
  topping: {
    common: 'onions',
    bell: 'peppers'
  }
}

console.log(deepDiff(jsonA, jsonB))
```

## Output
```
[
  { 
    path: 'deep', 
    operation: 'UPDATED', 
    was: 'diff', 
    is: 'pizza' 
  },
  {
    path: 'meat[0]',
    operation: 'UNCHANGED',
    was: 'pepperoni',
    is: 'pepperoni'
  },
  { 
    path: 'meat[1]', 
    operation: 'REMOVED', 
    was: 'sausage', 
    is: null 
  },
  {
    path: 'tools[0].cutter',
    operation: 'REMOVED',
    was: 'tool',
    is: null
  },
  {
    path: 'tools[0].masonry',
    operation: 'REMOVED',
    was: 'oven',
    is: null
  },
  {
    path: 'topping.common',
    operation: 'ADDED',
    was: null,
    is: 'onions'
  },
  {
    path: 'topping.bell',
    operation: 'ADDED',
    was: null,
    is: 'peppers'
  }
]
```

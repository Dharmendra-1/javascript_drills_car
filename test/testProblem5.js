const filePath = require('../problem/problem5')
const { inventory } = require('./inventory')
const problem = filePath.problem5

const result = problem(inventory)

console.log(result)
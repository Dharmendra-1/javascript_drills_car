const filePath = require('../problem/problem1')
const { inventory } = require('../data/inventory')
const problem = filePath.problem1


const result = problem(inventory)

console.log(result)
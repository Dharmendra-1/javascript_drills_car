const filePath = require('../problem5')
const { inventory } = require('../data/inventory')
const problem = filePath.problem5

const result = problem(inventory)

console.log(result.length)
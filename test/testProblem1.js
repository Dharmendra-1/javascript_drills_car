const filePath = require('../problem1')
const { inventory } = require('../inventory/inventory')
const problem = filePath.problem1


const result = problem(inventory)

console.log(result)
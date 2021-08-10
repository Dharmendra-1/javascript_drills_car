const lastCar = (inventory) => {

    const lastCar = inventory[inventory.length - 1]

    console.log(`Last car is ${lastCar.car_make} and model is ${lastCar.car_model}`)
}

module.exports = { lastCar }
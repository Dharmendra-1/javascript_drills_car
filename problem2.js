const problem2 = (inventory) => {

    if (inventory.length === 0) {

        return []

    }

    const lastCar = inventory[inventory.length - 1]

    return `Last car is ${lastCar.car_make} and model is ${lastCar.car_model}`
}

module.exports = { problem2 }


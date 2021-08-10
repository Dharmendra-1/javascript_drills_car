
const olderCar2000 = (inventory) => {
    let oldCar = []

    for (let index = 0; index < inventory.length; index++) {
        let carYear = inventory[index].car_year
        if (carYear < 2000) {
            oldCar.push(carYear)
        }
    }

    console.log(oldCar.length)

    return oldCar
}

module.exports = { olderCar2000 }
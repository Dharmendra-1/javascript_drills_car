
const problem5 = (inventory) => {

    let oldCar = []

    if (inventory.length === 0) {

        return oldCar

    }


    for (let index = 0; index < inventory.length; index++) {

        let carYear = inventory[index].car_year

        if (carYear < 2000) {

            oldCar.push(carYear)

        }
    }


    return oldCar
}

module.exports = { problem5 }


const problem1 = (inventory) => {

    for (let index = 0; index < inventory.length; index++) {

        let carInfo = inventory[index]

        if (carInfo.id === 33) {
            return `Car ${carInfo.id} and Car year ${carInfo.car_year} is a make ${carInfo.car_make} and Car model is ${carInfo.car_model}.`
        }
    }
}


module.exports = { problem1 }
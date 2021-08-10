
const findCar = (inventory) => {

    for (let index = 0; index < inventory.length; index++) {

        let carInfo = inventory[index]

        if (carInfo.id === 33) {
            console.log(`Car ${carInfo.id} and Car year ${carInfo.car_year} is a make ${carInfo.car_make} and Car model is ${carInfo.car_model}.`)
        }
    }
}


module.exports = { findCar }
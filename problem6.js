
const problem6 = (inventory) => {
    let bmwAudiCar = []

    for (let index = 0; index < inventory.length; index++) {
        let carInfo = inventory[index]
        if (carInfo.car_make === 'BMW' || carInfo.car_make === 'Audi') {
            bmwAudiCar.push(carInfo)
        }
    }


    return JSON.stringify(bmwAudiCar)
}


module.exports = { problem6 }
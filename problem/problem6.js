
const bmwAndAudiCar = (inventory) => {
    let bmwAudiCar = []

    for (let index = 0; index < inventory.length; index++) {
        let carInfo = inventory[index]
        if (carInfo.car_make === 'BMW' || carInfo.car_make === 'Audi') {
            bmwAudiCar.push(carInfo)
        }
    }

    console.log(JSON.stringify(bmwAudiCar))

    return JSON.stringify(bmwAudiCar)
}


module.exports = { bmwAndAudiCar }

function carModelSortASC(inventory) {

    const carModel = []

    for (let index = 0; index < inventory.length; index++) {
        let model = inventory[index].car_model
        carModel.push(model)
    }

    const sortedData = carModel.sort((firstStr, secondStr) => {
        if (firstStr > secondStr) { return 1 }
        else if (firstStr < secondStr) { return -1 }
        else { return 0 }
    })

    console.log(sortedData)
}


module.exports = { carModelSortASC }
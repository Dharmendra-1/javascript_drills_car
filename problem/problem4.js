
const carYear = (inventory) => {
    let allCarYear = []

    for (let index = 0; index < inventory.length; index++) {
        let year = inventory[index].car_year
        allCarYear.push(year)
    }


    let sortedData = allCarYear.sort((firstYr, secondYr) => {
        if (firstYr > secondYr) { return 1 }
        else if (firstYr < secondYr) { return -1 }
        else { return 0 }
    })

    console.log(sortedData)
    return sortedData
}


module.exports = { carYear }
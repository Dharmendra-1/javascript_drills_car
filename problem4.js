
const problem4 = (inventory) => {

    let allCarYear = []

    if (inventory.length === 0) {

        return allCarYear

    }

    for (let index = 0; index < inventory.length; index++) {

        let year = inventory[index].car_year

        allCarYear.push(year)
    }


    let done = false

    while (!done) {

        done = true

        for (let i = 1; i < allCarYear.length; i++) {

            if (allCarYear[i - 1] > allCarYear[i]) {

                done = false

                let temp = allCarYear[i - 1]

                allCarYear[i - 1] = allCarYear[i]

                allCarYear[i] = temp

            }
        }
    }

    return allCarYear
}


module.exports = { problem4 }
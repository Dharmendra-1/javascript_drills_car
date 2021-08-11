
const problem3 = (inventory) => {

    const carModel = []

    for (let index = 0; index < inventory.length; index++) {
        let model = inventory[index].car_model
        carModel.push(model)
    }


    let done = false;

    while (!done) {

        done = true;

        for (let i = 1; i < carModel.length; i += 1) {

            if (carModel[i - 1] > carModel[i]) {

                done = false;

                let tmp = carModel[i - 1];

                carModel[i - 1] = carModel[i];

                carModel[i] = tmp;
            }
        }
    }


    return carModel
}


module.exports = { problem3 }
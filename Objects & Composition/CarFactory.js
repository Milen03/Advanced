function carFactors(order) {
    let car = {
        model: null,
        engine: null,
        carriage: null,
        wheels: null

    }

    car.model = order.model

    if (order.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (order.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (order.carriage === "hatchback") {
        car.carriage = {
            type: "hatchback",
            color: order.color
        }
    } else if (order.carriage === 'coupe') {
        car.carriage = {
            type: 'coupe',
            color: order.color
        }
    }

    let wheelsSize = order.wheelsize % 2===0 ? order.wheelsize - 1 : order.wheelsize
    car.wheels = new Array(4).fill(wheelsSize)
    
    return car
}
console.log(carFactors({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}))
let input = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};
function carFactory(carOrder) {
    
    let result = {
        model: carOrder.model,
        engine: null, 
        carriage: { type: carOrder.carriage, color: carOrder.color },
        wheels: null
    }

    if (carOrder.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (carOrder.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else {
        result.engine = { power: 200, volume: 3500 };
    }

    let wheelsSize = carOrder.wheelsize % 2 == 0 ? carOrder.wheelsize - 1 : carOrder.wheelsize;

    result.wheels = new Array(4).fill(wheelsSize);

    return result;
}
carFactory(
{ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

carFactory(
{ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
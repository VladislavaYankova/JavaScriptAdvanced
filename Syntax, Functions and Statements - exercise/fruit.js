function fruit (kind, neededWeightGr, pricePerKg) {

    let neededWeightToKg = neededWeightGr * 0.001;
    let totalPrice = neededWeightToKg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${neededWeightToKg.toFixed(2)} kilograms ${kind}.`)

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
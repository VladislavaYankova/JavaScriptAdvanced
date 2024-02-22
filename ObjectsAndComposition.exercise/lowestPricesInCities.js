function lowestPricesInCities(array) {

    let result = {};

    for (let element of array) {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);

        if (!result.hasOwnProperty(productName)) {
            result[productName] = {
                townName,
                productPrice
            }
        } else {
            if (result[productName].productPrice > productPrice) {
                result[productName].productPrice = productPrice;
                result[productName].townName = townName;
            }
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value.productPrice} (${value.townName})`)
    }

}
lowestPricesInCities(
['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']
);


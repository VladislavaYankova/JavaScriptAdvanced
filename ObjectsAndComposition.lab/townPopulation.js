function townPopulation(array) {

    let population = {};

    for (let element of array) {
        let [townName, townPopulation] = element.split(' <-> ');
        townPopulation = Number(townPopulation);

        if (population.hasOwnProperty(townName)) {
            population[townName] += townPopulation;
        } else {
            population[townName] = townPopulation;
        }
    }

    for (let [key, value] of Object.entries(population)) {
        console.log(`${key} : ${value}`);
    }


}
// townPopulation(
// ['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );


townPopulation(
['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);

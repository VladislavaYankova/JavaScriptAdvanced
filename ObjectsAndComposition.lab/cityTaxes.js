function cityTaxes(name, population, treasury) {

    let result = {
        name,
        population, 
        treasury,
        taxRate : 10,
        collectTaxes : function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth : function (percentage) {
            let increasment = this.population * percentage / 100;
            this.population += increasment;
        },
        applyRecession : function (percentage) {
            let decreasment = this.population * percentage / 100;
            this.population -= decreasment;
        }
    }
    return result;
}


// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


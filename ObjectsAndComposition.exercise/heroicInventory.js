function heroicInventory(array) {

    let heroRegister = [];

    for (let element of array) {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        let hero = {
            name : name,
            level : level,
            items : items
        }

        heroRegister.push(hero);
    }

    return JSON.stringify(heroRegister);
    
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

// heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
function roadRadar(speed, area) {

    let limit = 0;

    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else {
        limit = 20;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
       let speedOver = speed - limit;
       let status = '';

       if (speedOver <= 20) {
        status = 'speeding';
       } else if (speedOver <= 40) {
        status = 'excessive speeding';
       } else {
        status = 'reckless driving';
       }

       console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

const age = 18;

if (age >= 18){
    console.log('Je mag naar binnen');
} else {
    console.log('Je mag niet naar binnen');
}

const isFemale = true;

if (isFemale){
    console.log('Je mag een ticket kopen');
} else {
    console.log('Je mag geen ticket kopen');
}

const driverStatus = 'bob';

if (driverStatus === 'bob'){
    console.log('Je mag rijden');
} else {
    console.log('Je mag niet rijden');
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!');
} else {
    console.log('Helaas, geen korting voor jou');
}

const firstName = 'Sarah';

if (firstName == 'Sarah' || firstName == 'Bram'){
    console.log('Je krijgt een gratis biertje!');
} else {
    console.log('Geen gratis biertje voor jou');
}

const totalAmount = 51;

if (totalAmount >= 100) {
    console.log('Je krijgt een gratis fles champagne!');
} else if (totalAmount > 50) {
    console.log('Je krijgt een gratis portie nachos!');
} else if (totalAmount > 25) {
    console.log('Je krijgt een gratis portie (vega)bitterballen!');
}
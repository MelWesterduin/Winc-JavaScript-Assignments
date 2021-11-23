const isAdult = function(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const greeting = function(age) {
  const isOldEnough = isAdult(age); 
  if (isOldEnough) {
    return 'Hello there';
  } else {
    return 'Hey kiddo';
  }
};
console.log(greeting(17));



const vatCalculation = function(basePrice, vatPercentage) {
  return basePrice * vatPercentage / 100;
};

const mainCalculation = function(basePrice, vatPercentage) {
  return basePrice + vatCalculation(basePrice, vatPercentage);
  
};
console.log(mainCalculation(2, 9));


const vatAmountCalculation = function(priceWithVat, vatPercentage) {
  return priceWithVat - (priceWithVat / (vatPercentage / 100 + 1));
};

const basePriceAndVatAmountCalculation = function(priceWithVat, vatPercentage) {
  const vatAmount = vatAmountCalculation(priceWithVat, vatPercentage);
  return [priceWithVat - vatAmount, vatAmount];
};


console.log(basePriceAndVatAmountCalculation(1210, 21));



// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const sum = (a,b) => {
    return a +b
}
console.log(sum(7,3))


module.exports ={sum};

const fromDollarToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 127.9  
    // retornamos el valor
    return (valueInYen * 1.2);
}
 
const fromYenToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return (valueInPound * 1.2) ;
}


// one euro is:

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

 //1 EUR (Euro) = 1.2 USD (US Dollar)

 module.exports ={sum ,fromEuroToDollar,fromDollarToYen,fromYenToPound};
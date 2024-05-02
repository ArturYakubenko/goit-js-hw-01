function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid
    const text = `You ordered ${quantity} droids worth ${totalPrice} credits!`
    return text;
    
}

const result = makeTransaction(5, 3000);
console.log(result); 
const result2 = makeTransaction(3, 1000);
console.log(result2); 
const result3 = makeTransaction(10, 500);
console.log(result3); 


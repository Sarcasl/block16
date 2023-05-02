//Create a code that applies the 25% discount after the refill total calculation
//Create a code that applies a $10 discount after the subscrition discount calculation
//The end of the script should return and log "Your grand total is ${finalAmount}." 



//Starter code
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}




//Code for calculation of the price
function sumOfPrice(prefill, refill) {
    return prefill * refill;
}

//Code for 25% discount
function subscription(total) {
    return total - total * 0.25;
}

//Code for $10 discount
function coupon(total) {
    return total >= 10 ? total - 10 : total;
}

//Code for grand total calculation
function grandTotal (customer){
    let refill = sumOfPrice(customer.pricePerRefill, customer.refills);

    if (customer.subscription) {
        refill = subscription(refill);
    }
    if (customer.coupon) {
        refill = coupon(refill);
    }
    return refill;
}



//Code for string that containts text
let text = "Your grand total is" 


console.log(text, grandTotal(timmy));

console.log(text, grandTotal(sarah));

console.log(text, grandTotal(rocky));

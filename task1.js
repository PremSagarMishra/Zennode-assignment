const readline = require('readline-sync');

let cart_total = 0;
let total_quantity = 0;
let giftwrapfee = 0;
let shippingfee = 0;

function flat10Discount() {
    if (cart_total < 200) {
        return 0;
    }
    return cart_total * 0.1;
}

function bulk5discount(qty, price) {
    let discount = 0;
    if (qty > 10) {
        discount += ((qty - 10) * price) * 0.05;
    }
    return discount;
}

function bulk10discount() {
    if (total_quantity < 20) {
        return 0;
    }
    return cart_total * 0.1;
}

function tireed50discount(qty, price) {
    let discount = 0;
    if (total_quantity >= 30 && (qty > 15)) {
        discount += ((qty - 15) * price) * 0.5;
    }
    return discount;
}

const qa = parseInt(readline.question("Enter the quantity of product a: "));
const qb = parseInt(readline.question("Enter the quantity of product b: "));
const qc = parseInt(readline.question("Enter the quantity of product c: "));
const giftwrap = readline.question("Do you want gift wrap [y/n]: ").toLowerCase();

cart_total = (qa * 20) + (qb * 40) + (qc * 50);
total_quantity = qa + qb + qc;

if (giftwrap === 'y') {
    giftwrapfee = total_quantity;
}

shippingfee = (Math.ceil(total_quantity / 10)) * 5;

const discountMap = {
    'flat_10_discount': flat10Discount(),
    'bulk_5_discount': bulk5discount(qa, 20) + bulk5discount(qb, 40) + bulk5discount(qc, 50),
    'bulk_10_discount': bulk10discount(),
    'tiered_50_discount': tireed50discount(qa, 20) + tireed50discount(qb, 40) + tireed50discount(qc, 50),
};
const maxDiscount = Object.keys(discountMap).reduce((a, b) => discountMap[a] > discountMap[b] ? a : b);
const maxDiscountValue = discountMap[maxDiscount];
const totalAmount = cart_total + giftwrapfee + shippingfee - maxDiscountValue;

console.log("Subtotal:", cart_total);
console.log("Discount Applied:", maxDiscount);
console.log("Discount:", maxDiscountValue);
console.log("Gift Wrap Fee:", giftwrapfee);
console.log("Shipping fee:", shippingfee);
console.log("Total amount:", totalAmount);

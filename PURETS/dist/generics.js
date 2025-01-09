"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour({ brand: "evan", type: 3 });
function getSearchProducts(products) {
    //do some database operation
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    //do more database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}

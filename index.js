// Write your solution in this file!

// 1) Fix the Scope
// declare customerName to be bob in global scope
//   returns the customerName:

var customerName = "bob";
var bestCustomer;

// 2) Fix the Scope
// upperCaseCustomerName()
//   modifies the customerName variable:

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}


// 3) Fix the Scope
// setBestCustomer()
//   setBestCustomer:

function setBestCustomer(){
    bestCustomer = 'not bob';
}


// 4) Fix the Scope
// overwriteBestCustomer()
//   overwrites the best customer:

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}


// 5) Fix the Scope
// changeLeastFavoriteCustomer()
//   unsuccessfully tries to reassign the least favorite customer:
// ReferenceError: changeLeastFavoriteCustomer is not defined

const leastFavoriteCustomer = "oya";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "ala"
}
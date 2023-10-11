"use strict";
// const addTwo =(num:number): number=> {
//   return "num+2"
// }
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("hey", "true");
signUpUser("heythere", '2', false);
addTwo(5);
getUpper("Hello There");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 OK';
}
var getHello = function (s) {
    return 'hello there';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hey ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

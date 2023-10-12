"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'ferwin',
    email: 'ferwinlopezt@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'ferwin', isPaid: false });
function createCourse() {
    return { name: 'rectjs', price: 399 };
}
function createUsers(user) {
    return { _id: user._id, name: user.name, email: user.email, isActive: user.isActive };
}
var myUser = {
    _id: '234',
    name: 'Hey',
    email: 'h@gmail.com',
    isActive: false
};
myUser.email = 'ehy there';

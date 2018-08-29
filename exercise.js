"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Shawna",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var userName = 'Shawna';
var greeting = "This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);

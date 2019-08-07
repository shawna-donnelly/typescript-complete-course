"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name2) {
        this.acceleration = 0;
        this.name2 = name2;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log("Base Acceleration: " + car.acceleration);
car.accelerate(10);
console.log("After Acceleration: " + car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
;
var rectangle = new Rectangle(5, 2);
console.log("rectangle area: " + rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person2 = /** @class */ (function () {
    function Person2() {
        this._firstName = "";
    }
    Object.defineProperty(Person2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
;
var person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);

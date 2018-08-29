// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;
    
    constructor(name: string){
        this.name = name;
    }

    honk(): void {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width: number = 0;
    length: number = 0;

    constructor(width: number, length: number){
        this.width = width;
        this.length = length;
    }
};

class Rectangle extends BaseObject{
    calcSize(){
        return this.width * this.length;
    }
};

let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2{
    private _firstName: string = "";

    constructor(){

    }

    get firstName(): string{
        return this._firstName;
    } 

    set firstName(value: string){
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
};

let person2 = new Person2();

console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
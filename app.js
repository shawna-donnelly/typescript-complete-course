"use strict";
//import {PI, calculateCircumference} from './math/circle';
//import {calculateRectangle} from './math/rectangle';
/*class Person{
    name: string;
    private type: string;
    protected age: number = 32;

    constructor(name: string, public username: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("Old Guy")
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Shawna", "shawleigh17");
console.log(person);
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool guy"); //Won't work with Private method

class Shawna extends Person{

    constructor(username: string) {
        super("Shawna", username);
        this.age = 29;

    }
}

const shawna = new Shawna("shawleigh17");

console.log(shawna);

//Getters and Setters
class Plant{
    private _species: string = "Default";

    get species(){
        return this._species;
    }

    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }
        else{
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log("Species: " + plant.species);
plant.species = "ABCC";
console.log("Species: " + plant.species);

//Static Properties and Methods
class Helpers{
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number{
        return this.PI * diameter;
    }
}

console.log(2*Helpers.PI);
console.log(Helpers.calcCircumference(8));

abstract class Project{
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project{
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.budget = 3000;
newProject.changeName("Super IT Project");
console.log(newProject);

class OnlyOne{
    private static instance: OnlyOne;
    public readonly name3: string;
    private constructor(public name: string) {
        this.name3 = name;
    }

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();

console.log(right.name3);
//right.name = "Something else";
//console.log(right.name);


console.log(calculateRectangle(10,20));
console.log(calculateCircumference(10));
console.log(PI);
*/
function hello(person) {
    console.log("Hello2, ") + person.name;
}
function changeName(person) {
    person.name = "Anna";
    console.log("Hiya! " + person.name);
}
var person = {
    name: "Shawna",
    age: 32
};
hello(person);
changeName(person);
hello(person);

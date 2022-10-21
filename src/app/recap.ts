import { NgIfContext } from "@angular/common";

const username: string  = 'isactes';


const sum = (a: number, b: number) => {
    return a + b;
}
sum(1, 4);

class Person {
    constructor(public age: number, public lasName: string) { }
}

const xd = new Person(28, 'isac');


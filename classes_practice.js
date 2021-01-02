import React from 'react'
// Class Excercise, using arrow function
class Person {
    constructor(name){
        this.name = name
    };

    printNameArrow(){
        setTimeout(() => {
            console.log('test: ' + this.name)
        },100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
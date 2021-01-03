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



class Rectangle{
    constructor(height, width){
        this.height = height
        this.width = width
    }

    getArea() {
        var total = this.height + this.width
        return total
    }

// for loop in javascript
    getTotal(){
        var sum = 0
        for (var i=0, j=arguments.length; i < j; i++){
            sum += arguments[i];
        }
        return sum;
    }

// rest param for array, for/of loop instead of for loop
    getAvg(...args){
        var sum = 0
        for (let value of args){
            sum += value;
        }
        return sum / args.length;
    }
}
const p = new Rectangle(30,50)
console.log(p.getArea())
//  input totals for loop array
console.log(p.getTotal(2,4,5,7))
console.log(p.getAvg(2,3,4,5,6,7))




// Practicing Functions
function makePerson(first,last){
    this.first = first;
    this.last = last;
    this.fullName = fullName;
    this.fullNameReversed = fullNameReversed;

    function fullName(){
        return this.first + ' ' + this.last
    }

    function fullNameReversed(){
        return this.last + ' ' + this.first
    }
}

var s = new makePerson('Simon', 'Wilson')
console.log(s.fullName(), s.fullNameReversed())
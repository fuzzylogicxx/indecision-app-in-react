class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
         return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I’m visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Laurence Hughes', 43, 'Glasgow');
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor() {
//         return !!this.major; // convert to true or false
//     }
//     getDescription() {
//         let description = super.getDescription();
        
//         if (this.hasMajor()) {
//             description += ` Their major is ${this.major}.`;
//         }

//         return description;
//     }
// }

// const me = new Student('Laurence Hughes', 43, 'Marketing');
// console.log(me.getDescription())

// const other = new Student()
// console.log(other.getDescription())
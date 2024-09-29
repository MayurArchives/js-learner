// class peopleMain {
//     constructor() {
//         this.task = [];

//     }
//     createPeople(id, name, age) {
//         this.task.push({ id, name, age });

//     }


// }
// const task = new peopleMain();
// task.createPeople(1, "ami", 23);
// task.createPeople(2, "John", 30);
// console.log(task.task);



class peopleMain {
    constructor() {
        this.people = [];
    }

    createPerson(id, name, age) {
        this.people.push({ id, name, age });


    }
}
const people = new peopleMain();
people.createPerson(1, "nick", 20);
people.createPerson(2, "ashiii", 201);
people.createPerson(3, "ashpppp", 22);
people.createPerson(4, "ashww", 23);
console.log(people.people);














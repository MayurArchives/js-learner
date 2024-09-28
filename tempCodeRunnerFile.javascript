class myPerson {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
}

let obj = new myPerson("m", "p");
let ans = obj.getFullName();
console.log(ans);

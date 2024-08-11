class person {
    constructor(){
        console.log("inside");
    }

    a = 5;

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    } 
}

class Engineer extends person {
    constructor(){
        super(); 
        console.log("Engineer class");
    }

    work(){
        console.log("solve coding problems, build projects");
        console.log("Value of a from parent class: " + super.a);  
    }
}

let mayurObj = new Engineer();   
mayurObj.work();

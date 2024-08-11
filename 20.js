let Data = "secret information";
class User {
    constructor(name,email) {
this.name = name;
this.email= email;
    }
    viewData (){
        console.log("data =", Data);
        
    }

    }
    let student1 = new User("mayur", "mayur@gmail.com")
    let student2 = new User("milind", "milind@gmail.com")
const student ={
    name:"Mayur",
    age: 22,
    eng: 98,
    math:96,
    phy: 94,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)
        console.log(`${this. name} got marks =${avg}`);
    }
}
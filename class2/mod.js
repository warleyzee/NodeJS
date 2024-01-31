// module.exports = function(x,y){
//     return x * y;
// }

module.exports = class Dog {
    constructor(name){
        this.name = name
    }

    latir(){
        console.log(`${this.name} Esta fazendo au au`);
    }
};

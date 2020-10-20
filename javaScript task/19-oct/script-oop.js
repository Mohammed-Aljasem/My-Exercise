class person {
    constructor(age, nationality) {
        this.the_age = age;
        this.the_nationality = nationality;
        
    }
    getNationalAndage () {
        return `this your nationality and age : ${this.the_age} ${this.the_nationality}` ;
    }
    
}
class personsPerfect extends person {
    constructor(age , nationality){
    super(age ,nationality);
    }
    adminMasg (){
        return `you admin` ;
    }
}
const admin1 = new personsPerfect(18 ,"syrian");

//-----------------------------------------------class 2
class car {
    constructor(color, year) {
        this.the_color = color;
        this.the_year = year;
    }
    carColorAndYear() {
        return `this your car color and made year : ${this.the_color} ${this.the_year}` ;
    }
    
}
class favcar extends car{
    constructor(color, year){
        super(color, year);
    }
    favcars() {
        return `Hello this your favorite color and cars model`
    }
}
const ford = new favcar("black",2020);
//-------------------------------class 3
class animal {
    constructor(name, sizes) {
        this.the_name = name;
        this.the_sizes = sizes;

    }
    animalNameAndSize() {
        return `this your animal name and the size : ${this.the_name} ${this.the_sizes}` ;
    }
    
}

class animalFav extends animal{
    constructor(name, size){
        super(name, size);
    }
    animalFav() {
        return `Hello this your favorite animal and size animal`;
    }
}
const panda = new animalFav("panda","medium");


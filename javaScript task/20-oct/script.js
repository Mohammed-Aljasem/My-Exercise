class  Person {
    #id;
    #name;
    #age;
    constructor (id, name,age){
        this.#id;
        this.#name;
        this.#age; 
    }
    Greeting() {
        console.log("hello");
    }

}
var ahmad = new person(506, ahmad ,24);
var ali = new person(302, ahmad ,21);

class  Car {
    #id;
    #name;
    #age;
    constructor(id, type, year ) {
        this.the_id = id ,
        this.the_type = type ,
        this.the_year = year 
        
    }
    start = () => "the car is running"
    
    
}
const bmw = new car(708, Bmw ,2018);
const ford = new car(605, ford ,2020);

class  Animal {
    #id;
    #name;
    #isPet=new Boolean();
    
    homeAnimal(){
      if(this.#isPet){
         return this;
             }
        }
    }

    homeAnimal = () => `you have very nice animal`;


const panda = new Animal(406, panda );
const lion = new Animal(406, lion );

class  teacher extends person{
    
    constructor(id, name, isPet ) {
         super(person)
         consolelogs =()=>console.log(this);
    }

    
}
var Sobhi = new teacher ();

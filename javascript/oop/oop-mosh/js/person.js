class Person{
    constructor(firstName , lastName){
        this._firstName = firstName;
        this._lastName  = lastName;
    }

    get firstName(){
        return this.capitalizeFirst(this._firstName);
    }

    set firstName(value){
        this._firstName = this.capitalizeFirst(value)
    }
    get lastName(){
        return this.capitalizeFirst(this._lastName);
    }
    set lastName(lastname){
        this._lastName = this.capitalizeFirst(lastname)
    }
    capitalizeFirst(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 =  new Person('john' , 'doe');
console.log(person1.firstName)
person1.firstName =  "jose pedro";
person1.lastName  =  'Lorenzini';
console.log(person1)
console.log(person1.lastName)
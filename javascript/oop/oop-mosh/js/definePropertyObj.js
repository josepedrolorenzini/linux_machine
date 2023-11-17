

//constructor Object function
function Person(firstName,lastName){
    this._firstName = firstName;
    this._lastName  = lastName;

    Object.defineProperty(this , 'firstName' , {
        get: function(){
            return this.capitalizeFirst(this._firstName);
        },
        set(value){
            this._firstName = value;
        }
    })
    
    Object.defineProperty(this,'lastName',{
        get(){
            return this.capitalizeFirst(this._lastName) ;
        },
        set(value){
            this._lastName = value;
        }
        
    });

    Object.defineProperty(this , 'theWholeName' , {
        get(){
            return persona1.firstName + " " + persona1.lastName;
        }
    })
} 

Person.prototype.capitalizeFirst = function(value){
    return value.charAt(0).toUpperCase() + value.slice(1)
}

const persona1 = new Person('jose','down'); 
console.log(persona1.theWholeName);

const PersonObj = {
    _firstName: 'jane',
    _lastName:  'doe'
    ,
    get firstName(){
        return Person.prototype.capitalizeFirst(this._firstName)
    },
    set firstName(value){
        this._firstName = this.capitalizeFirst(value);
    },

    get lastName(){
        return Person.prototype.capitalizeFirst(this._lastName);
    },
    set lastName(value){
        this._lastName = this.capitalizeFirst(value);
    },
 
}

const person2 = Object.create(PersonObj);
console.log(person2.firstName)
console.log(person2.lastName)


Object.defineProperties(person2 , {
    property1:{
        value:true,
        writable:true,
    },
    property2:{
        value:"jose pedro arancibia lorenzini",
        age:42,
        writable:false
    }
})

console.log(person2.property2)
//parent classs
class Shape{
    constructor(name){
        this.name = name;
    }
    logName(){
        console.log("shape name: " + this.name)
    }
}

//sub class
class Rectangle extends Shape{
    constructor(name,width,height){
        super(name);
        this.width  = width;
        this.height = height;
    }

    area(){
        return this.height * this.width;
    }

    static getClass(){
        return this.name;
    }
}



//sub class 
class Circle extends Shape{
    constructor(name,radius){
        super(name);
        this.radius  = radius;   
    }
    logName(){
        console.log('circle name:' + this.name)
    }
}

const rect = new Rectangle("rectangle 1" , 20 , 20);
console.log(rect)

const cir = new Circle("circle 1" , 2);
cir.logName()

console.log(Circle instanceof Rectangle)
console.log(rect instanceof Shape)

console.log(Rectangle.getClass())


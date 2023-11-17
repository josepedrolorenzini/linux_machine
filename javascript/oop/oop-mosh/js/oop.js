
/// https://github.com/bradtraversy/javascript-sandbox/blob/main/08-shopping-list-project/02-remove-clear-items/shopping-list/script.js


class Rectangle {
    constructor(name,width,height){
       this.name   = name;
       this.width  = width;
       this.height = height; 
    }

    area(){
        return this.height * this.width;
    }

    perimeter(){
        return 2 *(this.width + this.height)
    }

    isSquare(){
        return this.width === this.height;
    }
    
    logArea(){
        console.log('rectangle Area: ' + this.area())
    }
}


const square = new Rectangle('Square' , 20, 20);
Object.defineProperty(square, 'property1', {
    value: 42,
    writable: false
});


Object.defineProperty(Rectangle.prototype, 'property1', {
    value: 42,
    writable: false
});


Object.defineProperty(Rectangle.prototype, 'property2', {
    value: 'property 2',
    writable: false
});


console.log(square.property2)

console.log(square.area())

console.log(square.perimeter())
square.logArea()
console.log(square.isSquare())
console.log(Object.getPrototypeOf(square))

let employee = {
    baseSalary: 30.000,
    overtime:10,
    rate:20,
    getWage:function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
}



const circle = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw')
    }
}




document.body.style.backgroundColor = '#00c1c3';

//factory functions
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log(this)
        }
        }
}

const circle1 = new createCircle(1)
circle1.draw()

//constructor function
function Circle(radius){
    console.log('this' , this)
    this.radius = radius;
    this.draw = function(){
        console.log(this)
    }
}


const another =  new Circle(2)
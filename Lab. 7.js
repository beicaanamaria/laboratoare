var a = 1;
function a() {} 
function b() {
a = 10;
return;

}
b();
console.log("a=" + a);

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        },i * 1000);
    })(i);
}

    setTimeout(function(){
        try{
    throw new Error('example')
    }
    catch(err){
        console.log(err)}
    }, 1000);

//ES6
class Animal{
    constructor(type){
        this.type=type;
        this.color=color;
    }
    getColor(){
        return this.color;
    }
}

class Fish extends Animal{
    constructor(){
        super(type);
        this.fishType=fishType;
    }
    getFishType(){
        return this.fishType;
    }
}
class Dog extends Animal{
    constructor(){
        super(type);
        this.dogType=dogType;
    }
    getDogType(){
        return this.dogType;
    }
}
class DogType{
    constructor(typeName){
        this.typeName=typeName;
        this.furColor=furColor;
    }
    getFurColor(){
        return  this.furColor;
    }
}

//ES5

function Animal(type){
    this.type=type;
    this.color=color;
}
Animal.prototype.getColor=function(){
    return this.color;
}
function Fish(){
    Animal.call(this,type);
    this.fishType=fishType;
}
Fish.prototype=Object.create(Animal.prototype);
Fish.prototype.constructor=Fish;
Fish.prototype.getFishType=function(){
    return this.fishType;
}
function Dog(){
    Animal.call(this,type);
    this.dogType=dogType;
}
Dog.prototype=Object.create(Dog.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.getDogType=function(){
    return this.dogType;
}

function DogType(typeName){
this.typeName=typeName;
this.furColor=furColor;
}
DogType.prototype.getFurColor=function(){
    return this.furColor;
}


var promise1=new Promise(function(resolve,reject){
    setTimeout(() => {resolve('Done!');     console.log("Blocked!");
}, 1000);
});

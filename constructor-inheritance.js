function Person(name,first,second){
    this.name=name;
    this.first=first;
    this.second=second;
}
Person.prototype.sum=function(){
    console.log(this.first+this.second);
}

function PersonPlus(name,first,second,third){
    Person.call(this,name,first,second);    //부모 생성자 호출
    this.third=third;
}

//PersonPlus.prototype.__proto__=Person.prototype;
PersonPlus.prototype=Object.create(Person.prototype);
PersonPlus.prototype.avg=function(){
    console.log((this.first+this.second+this.third)/3);
}

var obj=new PersonPlus("mango",10,20,30);
obj.sum();
obj.avg();
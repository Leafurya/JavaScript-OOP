function Person(name,st,nd){
    this.name=name;
    this.stScore=st;
    this.ndScore=nd;
}
Person.prototype.sumScore=function(){
    return this.stScore+this.ndScore;
}
Person.prototype.printScore=function(){
    console.log("modified: ",this.name+": "+this.sumScore());
}

var person=new Person('mango',10,20);
var personTwo=new Person('munggu',10,30);

person.printScore=function(){
    console.log("person: ",this.name+": "+this.sumScore());
}

person.printScore();
personTwo.printScore();
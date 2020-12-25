function Person(name,st,nd){
    this.name=name,
    this.stScore=st,
    this.ndScore=nd,
    this.sumScore=function(){
        return this.stScore+this.ndScore;
    },
    this.printScore=function(){
        console.log(this.name+": "+this.sumScore());
    }
}
var person=new Person('mango',10,20);
var personTwo=new Person('munggu',10,30);

person.printScore();
personTwo.printScore();
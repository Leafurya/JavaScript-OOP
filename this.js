var person={
    name:"mango",
    stScore:10,
    ndScore:20,
    sumScore:function(){
        return this.stScore+this.ndScore;
    },
    printScore:function(){
        console.log(this.name+": "+this.sumScore());
    }
}
console.log(person);
person.printScore();
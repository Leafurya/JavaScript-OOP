class Person{
    constructor(name,st,nd){
        this.name=name;
        this.stScore=st;
        this.ndScore=nd;
    }
    sumScore(){
        return this.stScore+this.ndScore;
    }
    printScore(){
        console.log("sum -"+this.name+": "+this.sumScore());
    }
}
class PersonPlus extends Person{
    constructor(name,st,nd,rd){
        super(name,st,nd);    //부모클래스의 생성자 실행
        this.rdScore=rd;
    }
    sumScore(){
        return super.sumScore()+this.rdScore;   //부모클래스의 메소드 호출
    }
    avg(){
        return (this.stScore+this.ndScore+this.rdScore)/3;
    }
    printAvg(){
        console.log("avg -"+this.name+": "+this.avg());
    }
}

var person=new PersonPlus('mango',10,30,40);
var personTwo=new PersonPlus('munggu',10,20,10);

person.printScore();
person.printAvg();
personTwo.printScore();
personTwo.printAvg();
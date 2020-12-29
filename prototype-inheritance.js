var superObj={
    superVal:"super"
}
/*var subObj={   객체를 상속
    subVal:"sub"
}
subObj.__proto__=superObj;*/

var subObj=Object.create(superObj);
subObj.subVal="sub";

console.log(subObj.subVal);
console.log(subObj.superVal);

subObj.superVal='new sub';
console.log(superObj.superVal);

var mango={
    name:'mango',
    first: 10,
    secend: 20,
    sum: function(){
        console.log(this.first+this.secend);
    }
}
/*var munggu={
    name: 'munggu',
    first: 20,
    second: 30,
}*/
//munggu.__proto__=mango;
var munggu=Object.create(mango);
munggu.name='munggu';
munggu.first=20;
munggu.secend=30;

mango.sum();
munggu.sum();
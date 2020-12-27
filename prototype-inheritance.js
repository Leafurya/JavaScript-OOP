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
var member={    //생성
    developer:'mango',
    designer:'monggu'
}
console.group("object loop");
for(var v in member){   //객체의 반복문
    console.log(v,member[v]);
}
console.groupEnd("object loop");
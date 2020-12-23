var member={    //생성
    developer:'mango',
    designer:'monggu'
}
member.designer='teabong'; //수정
console.log(member.developer);
console.log(member['designer']);

console.log(member);
delete member.designer; //삭제
console.log(member);
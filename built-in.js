console.group("builtin");
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));
console.groupEnd("builtin");

var MyMath={
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.group("my");
console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.9));
console.groupEnd("my");
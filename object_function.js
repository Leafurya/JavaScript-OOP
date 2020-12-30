var mango={
    name: 'mango',
    val: 10
}
var munggu={
    name: 'munggu',
    val: 20
}

function ShowValue(mVal){
    console.log(this.val,mVal);
}

ShowValue.call(mango,100);
var NewMangoShowValue=ShowValue.bind(mango,30);
NewMangoShowValue();
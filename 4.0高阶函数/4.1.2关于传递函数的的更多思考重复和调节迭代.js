
const _=require('underscore');

function repeat(time,value){
    return _.map(_.range(time),item=>value);
}

// console.log(repeat(10,`leo`));

function repeatly(time,func){
    return _.map(_.range(time),item=>func());
}

console.log(repeatly(10,()=>{
    return Math.floor(Math.random()*10+1);
}))


function itrateUntil(func,check,init){
    let req=[];
    let result=func(init);
    while (check(result)) {
        req.push(result);
        result=func(result);
    }
    return req;
}

console.log(itrateUntil(num=>num+num,num=>num<=1024,2));

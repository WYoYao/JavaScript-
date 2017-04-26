
const _=require('underscore');

function finder(valueFc,bestFc,coll){
    return _.reduce(coll,(best,current)=>{
        let bestValue=valueFc(best);
        let currnetValue=valueFc(current);
        return (bestValue===bestFc(bestValue,currnetValue))?best:current;
    })
}

console.log(finder(_.identity,Math.max,[1,2,3,4,5]));

console.log(finder(_.identity,(a,b)=>{
    return a.age>b.age?a:b;
},[{
    name:"leo",
    age:24
},{
    name:"Tom",
    age:25
}]));
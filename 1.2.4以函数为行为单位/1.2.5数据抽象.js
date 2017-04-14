const _ =require("underscore");

// 系统错误的方法
function fail(thing){
    throw new Error(thing);
}

// 错误方法
function warn(thing){
    console.log(['WARNING',thing].join(''))
}

// 打印的方法
function note(thing){
    console.log(['NOTE',thing].join(''))
}

/**
 * 将函数作为抽象单元
 */

// 验证是否是有索引属性
function isIndexed(data){
    return _.isArray(data) || _.isString(data);
}

// 返回对应的索引的方法
function nativeNth(arr,index){
    if(!_.isArray(arr))fail("Expected a number as the index");
    if(!isIndexed(arr))fail("Not supported on non-indexed type");
    if(index<0 || (index>arr.length-1))
        fail("Index value is out of bounds");
    return arr[index];
}

// 返回第二个内容
function second(arr){
    return nativeNth(arr,1);
}

let text=`name,age,hair\nMerble,35,red\nBob,64,blonde`;

// 将字符数据转换成为对应的数组的类型
const lameCSV=function(str){
    return _.reduce(str.split(/\n/),(table,row)=>{
        table.push(_.map(row.split(/,/),(c)=>c.trim()));
        return table;
    },[])
}

let people=lameCSV(text);

function selectType(index){
    return (text)=>{
        return _.rest(_.map(lameCSV(text),
            row=>nativeNth(row,index)
        ));
    }
}

selectNames=selectType(0);
selectAges=selectType(1);
selectHairColor=selectType(2);


console.log(selectNames(text));
console.log(selectAges(text));
console.log(selectHairColor(text));
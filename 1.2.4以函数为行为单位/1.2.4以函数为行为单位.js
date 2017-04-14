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

console.log(second([1,2,3,4]));

console.log(second({}));
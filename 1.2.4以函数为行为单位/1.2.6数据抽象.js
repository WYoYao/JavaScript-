

/**
 * 在开始任何项目之前定义我们常会用到的两个函数
 * existy 和 truthy
 * existy 旨在定义事物的存在
 * truthy 用来判断一个对象是否应该被认为是true的同义词。
 */


/**
 * 判断一个参数不能为空
 * @param {*用来被检验的参数} arg 
 */
function existy(arg){
    return arg !=null;
}

/**
 * 用来判断一个对象是否应该被认为是true的同义词。
 * @param {*用来被检验的参数} arg 
 */
function truthy(arg){
    return arg!==false && existy(arg);
}



/**
 * 在JavaScript中,有时只有在某个条件为真的情况下执行某些操作，否则返回的类似undefined 或 null的值，一般模式如下
 */

if(false){
    if(condition)
        return _.isFunction(doSomething)?doSomething():doSomething;
    else
        return void 0;
}

// 可以修改成如下内容

function doWhen(cond,action){
    if(truthy(cond))
        action();
    else
        return void 0;
}


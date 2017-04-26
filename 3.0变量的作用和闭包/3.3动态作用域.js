

var globals={};

/**
 * 
 * @param {*后面传入需要操作的方法,这个方法会返回一个方法，方法中需要传递对应的键值对} resolver 
 */
function makeBindFunc(resolver){
    return function(k,v){
        var stack=globals[k] || [];
        globals[k]=resolver(stack,v);
        return globals;
    }
}

/**
 * 绑定操作的方法
 */
let stackBinder=makeBindFunc(function(stack,v){
    stack.push(v);
    return stack;
})

/**
 * 移除绑定的内容
 */
let stackUnBindFunc=makeBindFunc(function(stack){
    stack.pop();
    return stack;
})

console.log(stackBinder('name','leo'));
console.log(stackBinder('name','leo1'));
console.log(stackUnBindFunc('name'));

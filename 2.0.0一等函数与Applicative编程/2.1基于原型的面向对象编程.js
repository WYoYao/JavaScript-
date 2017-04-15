
/**
 * 面向对象和函数式的风格之间存在先天性的冲突，请记住一个区别
 * 1.函数是指独立存在的函数
 * 2.方法是指在对象上下文中创建出来的函数
 * （译者这里指出的作者的错误 下面的方法中的this指向也是一个指过去的，并不是像作者所说的）
 */

let a={
    name:'a',
    fn(){
        return this;
    }
}

// 这个时候this可以找到定义的对象
console.log(a.fn());

let bfn=function(){
    return this;
}

let aa={
    name:'b',
    fn:bfn
}

console.log(aa.fn());

//58

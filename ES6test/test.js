/**
 * Created by kk on 2017/4/22.
 */
//查看js的引入路径是否正确
// console.log("1:",1)

// var a=1;
// let b=2;
// console.log("a:",a)
// console.log("b:",b)

// if(true)
// {
//     var a=1;
//     let b=2;
// }
// console.log("a:",a)
// console.log("b:",b)
//
// if(1)
// {
//     let b=2;
//     console.log("b:",b)
// }
// console.log("b:",b)


// for(let i=0;i<3;i++)
// {
//     console.log("i:",i)
//
// }
// console.log("i:",i)

// var a=1;
// function foo() {
//     if(false)
//     {
//         var a=1;
//     }
//     console.log("a:",a)
// }
// foo();

// console.log("a:",a)
//
// console.log("a:",a)
// let a;

// const love_you=true;
// love_you=false;

// const love_you;

// let user={name:'王花花',age:10}
// const Love_you=user;
// console.log(Love_you)
// Love_you=1;

// let user={name:'王花花',age:10}
// const Love_you=user;
// console.log(Love_you)
// user.age=12;
// console.log(Love_you)

// let user={name:'王花花',age:10}
// const Love_you=user;
// console.log(Love_you)
// Love_you={};
// console.log(Love_you)

// var user={name:'王花花',age:10}
// const Love_you=user;
// console.log(Love_you)


//变量的解构赋值
// var a=1,b=2,c=3;
// console.log("a:",a)
// console.log("b:",b)
// console.log("c:",c)
// var[q,w,e]=[4,5,6];
// console.log("q:",q)
// console.log("w:",w)
// console.log("e:",e)

// var[q,[w,e]]=[4,[5,6]];
// console.log("q:",q)
// console.log("w:",w)
// console.log("e:",e)

// var[q,,e]=[4,5,6];
// console.log("q:",q)
// console.log("e:",e)
// console.log("w:",w)


// var[q,...e]=[4,5,6];
// console.log("q:",q)
// console.log("e:",e)

// var[q,w,r='default',e='default']=[4,5,6];
// console.log("q:",q)
// console.log("w:",w)
// console.log("r:",r)
// console.log("e:",e)

// var[q,w,r,e]=[4,5,6];
// console.log("q:",q)
// console.log("w:",w)
// console.log("r:",r)
// console.log("e:",e)

//对象
// var obj={
//     a:1,b:2
// }
// let{a,b}=obj;
//
// console.log("a:",a)
// console.log("b:",b)

// var obj={
//     a:1,b:2
// }
// let{c,b}=obj;
//
// console.log("c:",c)
// console.log("b:",b)

// var obj={
//     a:1,b:2
// }
// let{a:A,b}=obj;
//
//
// console.log("b:",b)
// console.log("A:",A)
// console.log("a:",a)

// var obj={
//     a:1,b:2
// }
// let{a,b}=obj;
// let a;

// var obj={
//     a:1,b:2
// }
// let a=0;
// console.log("a:",a);
// // ({a,b}=obj);
// console.log("b:",b);
// console.log("a:",a);

// var obj={
//     arr:[
//         'Yo.',
//         {
//             a:1
//
//         }
//
//     ]
//
// }
// let {arr:[greet,{a}]}=obj;
// console.log("greet:",greet);
// console.log("a:",a);


// let{a=1,b=2}={a:10}
// console.log("b:",b);
// console.log("a:",a);

// let{a:A=1,b=2}={A:10}
// console.log("b:",b);
// console.log("A:",A);
// console.log("a:",a);


//     let res={
//     status:200,
//     id:12,
//     data:[{name:'bobo'},{name:'jjjj'}]
// }
// let {status,id,data}=res;
// console.log("status:",status);
// console.log("id:",id);
// console.log("data:",data);

// var len='yo.'.length;
// console.log('len:',len)
// let{length}='yo.'
// console.log('length:',length)

// let[a,b,c]='yo.';
// console.log(a,b,c);

// var arr=[1,2];
// function test(a, b) {
//     console.log("a:",a);
//     console.log("b:",b);
// }
// test(arr[0],arr[1]);

// var arr=[1,2];
// function test([a, b]) {
//     console.log("a:",a);
//     console.log("b:",b);
// }
// test(arr);


// var arr=[1,2];
// var obj={b:2,a:1}
// function test({a, b}) {
//     console.log("a:",a);
//     console.log("b:",b);
// }
// test(obj);


var obj={b:2}
function test({a=10, b}) {
    console.log("a:",a);
    console.log("b:",b);
}
test(obj);


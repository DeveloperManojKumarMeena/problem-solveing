// const greed  = (name,age)=>{
  

//   if(!name) return "write a name";

//   if(name.length > 100) return "name too long";

//   if(age < 0 || age > 120) return "age must be between 0 and 120";

// return `Hello ${name} you are ${age} years old.`

// }

// console.log(greed("",21))

// function swapNumbers(a, b) {
//     // Write your logic here
//     let c = a + b;
//     a = c - a;
//     b = c - b;
//     return console.log(a , b)
    
// }
// swapNumbers(5,10)

// let i = 11;
// i = i++ + ++i
// console.log(i)

let a = 11 ,b=22,c;
c=a+b+a++ + b++ + ++a+ ++b;
console.log('a :',a)
console.log('b :',b)
console.log('c :',c)
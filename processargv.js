// const double=(n)=>{
//     console.log(process.argv[2])
//     n*2
// }
// double()

// const double=(num)=>num*2
// const [,,n]=process.argv
// console.log(double(n))

const add=(n1,n2)=>n1+n2

// const [,,n]=process.argv
const [,,n1,n2]=process.argv
console.log(add(+n1,+n2))
// console.log(add(n1,+n2))
// console.log(add(+n1,n2))
console.log(add(parseInt(n1),parseInt(n2)))


//for result type / node processargv 12 13 / in the terminal
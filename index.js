// let x:number = 52
// x = "ok"

// let y = "ok"
// y = 42

// let a:unknown = 42
// let b = a as number
// console.log(b+6)

// type primitives = number|string|boolean|undefined

// let x:primitives = 42
// x = true
// x = []

// type person = {
//     name:string
// }

// type authPerson = person & {
//     login:string
// }

// let p1:person = {name:"Ashot"}
// let p2:authPerson = {name:"Ashot", login: "asas"}

// enum UserType {
//     Basic,
//     Admin = "Gago",
//     SuperAdmin
// }

// interface IPerson {
//     id: number|string
//     name: string
//     married ?:boolean
// }

// interface IAuthInterface extends IPerson {
//     password:string
// }

// function swap(items:number[]):number[] {
//     let tmp:number[]= [...items]
//     let n = tmp.length
//     ;[tmp[0],tmp[n-1]] = [tmp[n-1], tmp[0]]
//     return tmp
// }

// let nums:number[] = [1,2,3,4,5,6,7,8,9]
// let result:number[]=swap(nums)

// console.log(result)

// function swap2<T>(items:T[]):T[] {
//     let tmp:T[]= [...items]
//     let n = tmp.length
//     ;[tmp[0],tmp[n-1]] = [tmp[n-1], tmp[0]]
//     return tmp
// }

// let nums2:number[] = [1,2,3,4,5,6,7,8,9]
// let result2=swap2<number>(nums2)

// console.log(result2)

// let names:string[]=["hayk", "Ani","Alla"]
// console.log(swap2<string>(names))

// function calculate(value:number):IResult {
//     return {
//         getValue:()=>{
//             return value
//         },
//         setValue:(num:number) => {
//             value = num
//         }
//     }

// }

// interface IResult {
//     getValue:()=>number
//     setValue:(val:number)=>void
// }

// const {getValue,setValue} = calculate(42)
// console.log(getValue())
// setValue(57)
// console.log(getValue())

// interface IResult2<T> {
//     getValue:()=>T
//     setValue:(val:T)=>void
// }

// function calculate2<T>(value:T):IResult2<T> {
//     return {
//         getValue:()=>{
//             return value
//         },
//         setValue:(num:T) => {
//             value = num
//         }
//     }

// }

// class Person {
//     private name:string
//     public readonly age:number
//     protected login:string = "ok"

//     constructor(name:string, age:number) {
//         this.name = name
//         this.age = age
//     }
// }

// let p1 = new Person("Ashot", 21)
// //p1.age = 120

// class Man extends Person{
//     F2(){
//         this.
//     }
//  }
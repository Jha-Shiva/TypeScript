const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: "adrak", price: 20},
    {name: "lemon", price: 10}
]

const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")       // it cant be push
console.log(cities);

const table: number[][] = [
    [1,2,3],
    [4,5,6]
] 

//-------------------------------------------------------------------------

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = ["chai", 20, "lemon"]   // u cant add 3rd value because u only mentioned or defined chaiTuple as 2 value [string, number]
// chaiTuple = [20, "Masala"]   // it will give error because we define tupple to be 1st value= string, 2nd value = number 
console.log(chaiTuple);

let chaiTuple2: [[string, number]];
// chaiTuple2 = [["chai", 20], ['masala', 3]] // here same error sa this ["chai", 20, "lemon"]
chaiTuple2 = [["chai", 20]]
console.log(chaiTuple2);

// tuple array
let chaiTuple3: [string, number][];
chaiTuple3 = [['s', 3], ['e', 3]]
// chaiTuple3 = [['s', 3], [3,'s']]  //give error because we define tupple to be 1st value= string, 2nd value = number
console.log(chaiTuple3);

// 3 value or optional tuple
let userInfo: [string, number, boolean?];
userInfo = ['shivam', 90]
userInfo = ['shivam', 90, true]

// readonly tuple
const location: readonly [number, number] = [28.33, 32.76]

//! named tuple (more prefrenced)
const chaiTems: [name: string, price: number] = ["masala", 20]

//---------------------------------------------------------------

// enum CupSize {
//     SMALL, //1
//     MEDIUM, // 2
//     LARGE  // 3
// }

// const size = CupSize.LARGE
// console.log(size); // output 2

// enum Status {
//     PENDING = 100,
//     SERVED,  // 101
//     CANCELLED  // 102
// }

// enum ChaiType {
//     MASALA = "masala",
//     GINGER = "ginger"
// }

// function makeChai(type:ChaiType){
//     console.log(`Making ${type} chai`);
// }

// makeChai(ChaiType.MASALA)   // output Making masala chai
// makeChai("masala")

// enum RandomEnum {
//     id = 1,
//     name = "chai"
// }

// const enum Sugars {
//     LOW = 1,
//     MEDIUM = 2,
//     HIGH = 3
// }

// const s = Sugars.MEDIUM
// console.log(s); // output 2
//----------------------------------------------------------------------

let t: [string, number] = ["chai", 10]
t.push("masala", 12, 4) 
console.log(t);
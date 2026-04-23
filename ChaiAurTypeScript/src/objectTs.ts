/*
 * Read about duck typing from gemini

 *"Duck typing" is a concept in programming where the type or the class of an object is less 
 important than the methods or properties it possesses.

 The name comes from the famous "Duck Test":

 "If it walks like a duck and it quacks like a duck, then it must be a duck."

 In simpler terms: You don't care if an object is actually a Duck; if it has a quack() method 
 and a walk() method, you treat it like a duck.
*/

const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea : {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Chai",
    price: 25,
    isHot: true
}

type Tea ={
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai : Tea={
    name: "Ginger chai",
    price: 30,
    ingredients: ["Milk", "Tea Leaves", "Ginger", "Water"]
}
//---------------------------------------------------------------

type Cup = { size: string }
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: "500ml", material: "Stainless Steel"}

smallCup = bigCup
console.log(smallCup)

type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee
//---------------------------------------------------------------------------

type User = {
    username: string;
    password: string
}

const u1: User = {
    username: "Shivam",
    password: "12"
}
//------------------------------------------------------------------------

type Item = { name: string; quantity: number }
type Address = { street: string; pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
}
//------------------------------------------------------------------------------

/**
 * Partial<T> --> Make all properties in T(datatypes) optional
 * Required<T> --> Make all properties in T(datatypes) required
 * Pick<T, K1 | K2> --> From T(datatypes), pick a set of properties whose keys are in the union K
 */
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>)=>{
    console.log('updating chai with', updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})   // it is also passable so we have to take precaution 

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({name: "adrak Chai", quantity: 2})
// placeOrder({name: "adrak chai"})    // it will give error because we used Reuired property here

type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai1, "name" | "price">

const basicChaiInfo: BasicChaiInfo = {
    name: "Lemaon Tea",
    price: 20
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type PublicChai = Omit<ChaiNew, "secretIngredients">

function makingChai (order: PublicChai){
    console.log(order);
}

// makingChai({name: "masala chai", price: 25, isHot: true, secretIngredients: "chaipati"})  // it will give error because secretIngredient is Omit in PublicChai datatype
makingChai({name: "masala chai", price: 25, isHot: true})

// const secretChai: ChaiNew = {
//     name: "lemon tea",
//     price: 20,
//     isHot: true,
//     secretIngredients: "Lemon"
// }

// const publicChai: PublicChai = secretChai
// console.log(publicChai);
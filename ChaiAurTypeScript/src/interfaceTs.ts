// by defining this it can be used anywhere
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};

// here ChaiOrder acts as {type: string; sugar: number; strong: boolean} so it will be easier and reusable and readable
//! when we move javascript project to typeScript we don't know how many times {type: string; sugar: number; strong: boolean}
//! this will come if it repeate itself so we can define type and use that 

// function makeChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }
function makeChai(order: ChaiOrder){
    console.log(order);
}

// function serveChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }
function serveChai(order: ChaiOrder){
    console.log(order);
}

// type TeaRecipe = {
//     water: number;
//     milk: number
// }

interface TeaRecipe {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk: number = 50;
}

const myChai = new MasalaChai()
console.log(myChai.water);

// here it will throw error
// type CupSize = "small" | "large";

// class Chai implements CupSize {
// 
// }

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize{
    // size = "small"       // it will give error
    size: "small" | "large" = "small"
}

// it will throw error
// type Response = {ok: true} | {ok: false};

// class Res implements Response{
//     ok: boolean = true;
// }

interface Response {
    ok: true | false
}

class Res implements Response{
    ok: boolean = true;
}

/*
 * | = union (works as or)
 * & = intersection (works as and)
 * type TeaType = "masala" | "ginger" | "lemon" = this type know as literal type becoz we gave literal value not primitive or string or object etc
*/

type TeaType = "masala" | "ginger" | "lemon"

function orderChai (t: TeaType){
    console.log(t);
}
orderChai("ginger")

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai1 = BaseChai & Extra

const cup: MasalaChai1 = {
    teaLeaves:  2,
    masala: 1,
}

// optional value ?
type User = {
    username: string;
    bio? : string       // it is an optional value 
}

const u1: User = { username: "Shivam" }
const u2: User = { username: "Shivam", bio: "shivam jha is coder" }

type Config = {
    readonly appName: string;
    version: number
}

const cfg : Config = {
    appName: "job buddy",
    version: 2
}

// cfg.appName = "blog"     // it gives because it is readonly property
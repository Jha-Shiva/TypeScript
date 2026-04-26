interface Chai {
    flavor: string;
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {
    id: 1,
    name:"chai caffe"
}
// s.id = 2 //give error because it is not 

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5
console.log(apply50(500));

interface TeaMachine{
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log('start');
    },
    stop(){
        console.log('stop');
    }
}

interface ChaiRating {
    [flavor: string] : number
}

const rating : ChaiRating = {
    masala : 4.5,
    ginger: 4
}

interface User {
    name: string
}

interface User {
    age: number
}

const u1: User = {
    name: "shivam",
    age: 23
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}
const x: C = {a:"hii", b:"hello"}
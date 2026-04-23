function makeChai(type: string, cup: number){
    console.log(`Making ${cup} cups of ${type} chai`);
}
makeChai("masala", 2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null;
    return order
}

function logChai():void{
    console.log("chai is ready");
}

function orderChai(order?:string){
    if(!order) return `Order not placed yet`
    return `${order} is getting ready`
}
// console.log(orderChai());
// console.log(orderChai("lemon tea"));

function orderChai1(order: string = "Order not placed yet"){
    return order
}
console.log(orderChai1());
console.log(orderChai1("masala chai"));

function createChai(order:{
    name: string;
    sugar: number;
    size: "small" | "large"
}): number {
    return 4
}
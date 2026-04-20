function getChai(kind: string){
    if(typeof kind === "string"){
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
};

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    // return `Serving masala Chai ${msg}...` //here msg is undefined
    return `Serving masala Chai...`
}

console.log(serveChai());

function orderChai(size : 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return `small chai is served`;
    }
    if(size === 'medium'){
        return `medium chai is served`;
    }
    if(size === 'large'){
        return `large chai is served`;
    }
    return `${size} chai is served`;
}

console.log(orderChai(3));

class kulhad{
    serve(){
        return `serving kulhad chai`
    }
}
class cutting{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: kulhad | cutting){
    if(chai instanceof kulhad ){
        return chai.serve()
    }
    if(chai instanceof cutting ){
        return chai.serve()
    }
}

type chaiOrder = {
    type : string,
    sugar : number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} spoon sugar`
    }
    return `Serving custom chai: ${item}`
}

console.log(serveOrder({type: "masala", sugar:2}));
console.log(serveOrder("lemon tea"));

type MasalaChai = {type: "masala", spiceLevel: number};
type GingerChai = {type: "ginger", amount: number};
type ElaichiChai = {type: "elaichi", aroma: number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: chai){
    switch (order.type) {
        case "masala":
            return `Making masala chai`
            break;
    
        case "ginger":
            return `Making ginger chai`
            break;
    
        case "elaichi":
            return `Making elaichi chai`
            break;
    }
}

console.log(makeChai({type: "masala" , spiceLevel: 2}));

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        return `masala Chai`
    }
    // else{
    //     return 'ginger chai'   // it will return if first cond is not matched it doesnt care amount is present or not
    // }
    // if("amount" in order){
    //     return `ginger chai`   // it will return undefined if amount is not present 
    // }
}

console.log(brew({type:"ginger", amount:3}));

// function isStringArray(arr: unknown): arr is string[]{
    
// }
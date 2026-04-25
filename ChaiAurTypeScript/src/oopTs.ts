// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour,
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this);
//     }
// }

// // const masalaChai = new Chai("ginger", 20);
// const masalaChai = new Chai("ginger");
// masalaChai.flavour = "masala"

class Chai {
    public flavor: string = "Masala"


    private secretIngredient = "cardamom"

    reveal(){
        return this.secretIngredient  // ok
    }

   
}

const c = new Chai();
console.log(c.reveal());

class Shop {
    protected shopName = "chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName  // ok
    }
}

class walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new walet();
w.getBalance()

class Cup{
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too Sweet")
        this._sugar = value
    }
}

const m = new ModernChai();
console.log(m.sugar);
m.sugar = 6
console.log(m.sugar);

class EkChai{
    static shopName = "Chai Caffe"

    constructor(public flavor: string){}
}

console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(): void {
        console.log('Brewing chai');
    }
}

//composition
class Heater{
    heat(){}
}

class chaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}
// type Inference --> automatically type infer kar leta hai
let drink = "chai";
drink = "aur"
// drink = 3  // got warning that number is not assignable to string

let cups = Math.random() > 0.5 ? 10 : 5;
console.log(cups);

let channelName = "chaiaurcode";

// type annotation --> you define data types here
let chaiFlavor:string = "milk chai";
// chaiFlavor = 3  // got warning that number is not assignable to string
chaiFlavor = "ginger tea";

let chaiOrder:boolean;

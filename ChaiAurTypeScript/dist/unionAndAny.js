"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
let apiRequest = 'Pending';
// apiRequest = 'done'  // it will give error becoz it does not match the annotated data types
apiRequest = 'Success';
let airlineSeat = 'aisle';
airlineSeat = 'aisle';
let orders = ['12', '14', '23', '28', '53'];
let currentOrder;
for (let order of orders) {
    if (order === '280') {
        currentOrder = order;
        break;
    }
    // currentOrder = '11'
}
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map
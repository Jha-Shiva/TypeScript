let subs: string | number = "1M";

let apiRequest: 'Pending' | 'Success' | 'error' = 'Pending';
// apiRequest = 'done'  // it will give error becoz it does not match the annotated data types
apiRequest = 'Success';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'aisle';

let orders = ['12', '14', '23', '28', '53'];

let currentOrder: string | undefined;

for(let order of orders){
    if(order === '280'){
        currentOrder = order;
        break;
    }
    // currentOrder = '11'
}

console.log(currentOrder);
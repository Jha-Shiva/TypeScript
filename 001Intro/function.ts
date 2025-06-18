
function addTwo (num: number): number{
    return num + 2
    // return 'hello'
}

let sum1 = addTwo(4)

let sum2 = addTwo(5)
console.log(sum1,'\n',sum2);


function getUpper(val:string){
    return val.toUpperCase()
}

console.log(getUpper('ram'));


function signUp(name : string, email : string, isPaid : boolean){
    return {name , email, isPaid}
}

let user1 = signUp("Shivam","shiv123@gmail.com",true)
console.log(`Signup User : `,user1);


function login(name:string, email:string, isPaid: boolean = false){
    return {name , email, isPaid}
}

let loginUser1 = login("s", "s@s.com")
console.log(`Logged in User : `, loginUser1);


const heros = ['thor', 2, 'spiderman', 'ironman']

const heroAction = heros.map((hero)=>{
    return `Hero is ${hero}`
})

console.log(heroAction);

// const myVal = (val:number) : boolean=>{
//     if (val > 5){
//         return true
//     }
//     return "200 ok"
// }


function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1
}
consoleError('error')

function handleError(errmsg:string) : never{
    throw new Error(errmsg)
}
console.log(handleError('error happen'));
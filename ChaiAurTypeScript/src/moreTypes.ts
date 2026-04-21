let response: any = "42";

// forcefull type assertion like i am say that response will be string here
// it can be used or it is used for value taking from env variable
let numericLength: number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name": "Atomic Habits"}'
let bookObject = JSON.parse(bookString) as Book     // if we put "as Book" then we can use "bookObject.name" else we cant use because it
                                            // does not know it is "type Book" it assumes as "simple object" 
                                            // which have name property it does not know 
                                            //? it is forcefull anotate that it is of Book type
                                            //! it is known as type asertion

console.log(bookObject.name);

// it means here inputElement is of HTML Input Element means Input element
//? it is forcefull anotation that it is Document Element which is HTML Input Element
//! it is known as type assertion
// const inputElement = document.getElementById("username") as HTMLInputElement;

//----------------------------------------------------------------------------------------------//
let value : any

value = "chai"
value = [1,2,3]
value = 2.5
// const capitalValue = value.toUpperCase()
// console.log(capitalValue);  // it will give error becoz value is now number and it does not have toUpperCase() function 
                            // but it will give error on runtime not on compile time or give wiggely red line becoz "type is any" here

let newValue : unknown

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
//!newValue.toUpperCase()  // it will give error  on compile time or give wiggely red line becoz "type is unknown" here

//? so we need to apply check like
if(typeof newValue === "string"){
    newValue.toUpperCase();         // it will not give any error because here we know it is string not other data-type
}

//--------------------------------------------------------//
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

//------------------------------------------------------------------//
const data: unknown = "chai aur code"
const strData: string = data as string

type Role = "admin" | "user" | "superadmin"

function redirectingBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    //role;       // here "role: never" if we checked all Role if their is any Role is left then it shows that role so u can check it
    role;         // like here "role: superadmin" 
}

// it will never return anything it will run forever
//! like web server are constantly ifinitely running loop which is running forever when request come it serve
function neverReturn(): never{
    while(true){}
}
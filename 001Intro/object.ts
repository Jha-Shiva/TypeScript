const User = {
    name: "Shivam",
    email: "shivam@.com",
    isActive: true
}

function createUser (name:string, isPaid : boolean ){
    return {name , isPaid}
}

const crUser1 = createUser('shivam', true);
console.log(crUser1);
var User = {
    name: "Shivam",
    email: "shivam@.com",
    isActive: true
};
function createUser(name, isPaid) {
    return { name: name, isPaid: isPaid };
}
var crUser1 = createUser('shivam', true);
console.log(crUser1);

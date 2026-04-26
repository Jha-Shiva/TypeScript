function wrapInArray<T>(item:T): T[] {
    return [item]
}
console.log(wrapInArray("masala"));
console.log(wrapInArray(20));
console.log(wrapInArray({flavor:"masala"}));

function pair<A, B>(a:A, b:B): [A, B]{
    return [a, b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", {flavor:"ginger"})

interface Box<T>{
    content: T
}

const numberBox: Box<string> = { content: "Chai"}
const numberBoxCup: Box<number> = { content: 10}

interface ApiResponse<T> {
    status: number;
    data: T
}

const res: ApiResponse<{flavor:string}> = {
    status:200,
    data:{
        flavor: "masala"
    }
}
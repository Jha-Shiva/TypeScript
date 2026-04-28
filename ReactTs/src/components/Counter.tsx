/*
* ?? nullish colaescing => when left side is null or  undefined then return right sid value
*/
import { useState } from "react"


function Counter() {
    const [ count, setCount ] = useState<number | null>(0)
    const handleOrder = ()=>{
        setCount(c => (c ?? 0) + 1)
    }
  return (
    <div>
        <p>Cups Ordered: {count}</p>
        <button
        onClick={handleOrder}
        >Order One more</button>
    </div>
  )
}

export default Counter
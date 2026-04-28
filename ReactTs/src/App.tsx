
import './App.css'
import Card from './components/Card.tsx'
import ChaiCard from './components/ChaiCard.tsx'
import ChaiList from './components/ChaiList.tsx'
import Counter from './components/Counter.tsx'
import OrderForm from './components/OrderForm.tsx'

import type { Chai } from './tyype.ts'

const menu: Chai[] = [
  {id:1, name:"Masala", price: 25},
  {id:2, name:"Ginger", price: 50},
  {id:3, name:"Elaichi", price: 60}
]

function App() {

  return (
    <>
      <div className="">
        <h1>Hello world</h1>
        <ChaiCard
        name={"masala"} price={20} isSpecial={true}
        />
        <ChaiCard
        name={"headphone"} price={2000} isSpecial={true}
        />
      </div>
      <div className="">
        <Counter/>
      </div>
      <div className="">
        <ChaiList items={menu}/>
      </div>
      <div className="">
        <OrderForm 
        onSubmit={order => (
          console.log("Placed", order.name, order.cups)
        )}
        />
      </div>
      <div>
        <Card
        title='Chai Aur TypeScript'
        footer = {<button>Order now</button>}
        
        />
      </div>
    </>
  )
}

export default App

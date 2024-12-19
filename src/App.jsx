import { useState } from "react"
import Counter from "./component/counter/Counter"
import Stats from "./component/Stats"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counters/countersSlice"


function App() {
const counters= useSelector((state)=>state.counters)
const dispatch = useDispatch();




const handleIncrement=(counterId)=>{
  dispatch(increment(counterId))
  
}
const handleDecrement=(counterId)=>{
  dispatch(decrement(counterId))

}


  return (
    <>
     <h1 className="text-3xl text-center">Counter with Redux</h1>
     <div className="flex flex-col gap-20 justify-center items-center my-10">
      {
        counters.map(counter=><Counter key={counter.id} 
          onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDecrement(counter.id)} count={counter.value} />)
      }
      
      
      <Stats />
     </div>
    </>
  )
}

export default App

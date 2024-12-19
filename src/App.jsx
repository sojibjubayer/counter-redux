import { useState } from "react"
import Counter from "./component/counter/Counter"
import Stats from "./component/Stats"

const initialCounters=[
    {
        id:1,
        value:0
    },
    {
        id:2,
        value:0
    }
]
function App() {
const [counters,setCounters]=useState(initialCounters)

const totalCount =  counters.reduce((sum,current)=>sum+current.value,0 );

const handleIncrement=(counterId)=>{
  {
    const updatedCounter=counters.map((counter)=>{
      if(counter.id===counterId){

        return {
          ...counter,value:counter.value+1,
        }
      }
      return counter;
    })
    setCounters(updatedCounter)
  }
}
const handleDecrement=(counterId)=>{
  {
    const updatedCounter=counters.map((counter)=>{
      if(counter.id===counterId){
        return {
          ...counter,value:counter.value-1,
        }
      }
      return counter;
    })
    setCounters(updatedCounter)
  }
}


  return (
    <>
     <h1 className="text-3xl text-center">Counter with Redux</h1>
     <div className="flex flex-col gap-20 justify-center items-center my-10">
      {
        counters.map(counter=><Counter key={counter.id} 
          onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDecrement(counter.id)} count={counter.value} />)
      }
      
      
      <Stats totalCount={totalCount}/>
     </div>
    </>
  )
}

export default App

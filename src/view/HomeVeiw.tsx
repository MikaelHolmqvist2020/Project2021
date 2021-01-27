import { useEffect, useState } from 'react'

export const HomeView = () => {
  const [number, setNumber] = useState(0)
  
useEffect(() => {
    alert('HomeView first render')
    return (() => alert('left homeview'))
  }, [number])
  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  ) 
}
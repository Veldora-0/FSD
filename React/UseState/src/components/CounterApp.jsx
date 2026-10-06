import React,{ useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)
  function inc() {
    if (count >= 10) {
      alert('Count cannot be greater than 10')
      return
    }
    setCount(count + 1)
  }
  function dec() {
    if (count <= 0) {
      alert('Count cannot be less than 0')
      return
    }
    setCount(count - 1)
  }
  return (
    <div style={{border:'2px solid black',width:'300px',height:'300px'}}>
      <h1>CounterApp</h1>
      <button onClick={inc}> ADD +</button>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={dec}> SUB -</button>
    </div>
  )
}

export default CounterApp

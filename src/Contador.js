import { useState } from "react";


function Contador(params) {
  const [count, setCount] = useState(10)

  function soma() {
    
  }
  return (
    <button onClick={soma}>{count}</button>
  )
  
}

export default Contador;
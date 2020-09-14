import React, { useState, useRef, useEffect } from "react";

export default function Count2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const countRf = useRef(0);
 
  useEffect( ()=> {
    // console.log("rerender", countRf.current)
    // countRf.current = count;
  })
  

  return (
    <div>
      Number of clicks {count}
      Number of clicks in ref {countRf.current}
      <button onClick={()=>countRf.current += 1}>Count RF</button>  
      <button onClick={()=>setCount(count + 1)}>Count</button>  
    </div>
  )
}


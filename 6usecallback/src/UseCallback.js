import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    const newData = useCallback(()=>{
        console.log("i am new data function")
    },[item])
  return (
    <>
    <h2>UseCallback</h2>
    <h3>Count:{count}</h3>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    <ChildCallBack item={item} data={newData}/>
    <button onClick={()=>setItem(item*2)}>Item</button>
    </>
    
  )
}

export default UseCallback
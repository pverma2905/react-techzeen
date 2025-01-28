import React, { useState } from 'react'

const User = () => {
    const [name, setName] = useState("test")
    return (
    <div>
        <h2>UseState In React</h2>
        <h2>{name}</h2>
        <button onClick={()=>setName("abc")}>Update State</button>
    </div>
  )
}

export default User
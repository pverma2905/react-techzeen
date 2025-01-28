import React, { useEffect, useState } from 'react'

const UseEffectWithCondition = (props) => {
    
    useEffect(()=>{
        console.log("UseEffect Hook With Count",props.count)
    },[props.count])

    useEffect(()=>{
        console.log("UseEffect Hook With Age",props.age)
    },[props.age])
  return (
    <>
    <h2>UseEffectWithCondition</h2>
    <h3>Age:{props.age}</h3>
    <h3>Count:{props.count}</h3>
   
    </>
    
  )
}

export default UseEffectWithCondition
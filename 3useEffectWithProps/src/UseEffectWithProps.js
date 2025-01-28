import React, { useEffect } from "react"


const UseEffectWithProps = (props) => {
    useEffect(()=>{
        console.log("UseEffect Withb Props",props)
    })
  return (
    <>
    <div>UseEffectWithProps</div>
    <h3>Count:{props.data}</h3> 
    </>
   
  )
}

export default UseEffectWithProps
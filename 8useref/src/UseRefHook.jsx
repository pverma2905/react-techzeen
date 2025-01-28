import React, { useRef } from 'react'

const UseRefHook = () => {
    let myref = useRef();
    function modifyInput(){
        console.log(myref.current.value)
        // myref.current.value="pranav"
        // myref.current.style.backgroundColor="yellow"
        // myref.current.style.color="red"
        // myref.current.focus();
        myref.current.style.display ="none"
    }
  return (
    <>
    <h2>UseRefHook</h2>
    <input type='text' ref={myref} />
    <button onClick={()=>modifyInput()}>Clicked</button>
    </>
    
  )
}

export default UseRefHook
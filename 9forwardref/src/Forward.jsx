import React, { useRef } from 'react'
import ChildForwardRef from './ChildForwardRef'

const Forward = () => {
    let myRef = useRef(); 
    function updateInput(){
        myRef.current.value="Akash"
         myRef.current.style.backgroundColor="aqua"
         myRef.current.style.color="red"
         myRef.current.focus();
    }
  return (
    <>
    <div>Forward Ref in React</div>
     <ChildForwardRef ref={myRef}/>
     <button onClick={()=>updateInput()}>Clicked</button>
    </>
    
  )
}

export default Forward
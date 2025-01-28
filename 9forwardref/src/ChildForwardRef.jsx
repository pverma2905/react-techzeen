import React,{forwardRef} from 'react'

const ChildForwardRef = (props,ref) => {
  return (
    <>
    <div>ChildForwardRef</div>
    <input type='text' ref={ref}/>
    </>
    
  )
}

export default forwardRef(ChildForwardRef)
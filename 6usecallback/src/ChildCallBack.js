import React, { memo } from 'react'

const ChildCallBack = (props) => {
    console.log("Hello i am a child component", props)
  return (
    <>
    <div>ChildCallBack</div>
    <h2>Item: {props.item}</h2>
    </>
    
  )
}

export default memo(ChildCallBack)
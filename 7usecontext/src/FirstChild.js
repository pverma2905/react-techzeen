import React, { useContext } from 'react'
import SecondChild from './SecondChild'
import { MyData } from './ContextApiWithHooks'


const FirstChild = () => {
const {valueData} = useContext(MyData);
console.log(valueData)
  return (
    <>
    <div>FirstChild</div> 
    <h2>valueData in first child:{valueData}</h2>
    <SecondChild/>
    </>
   
  )
}

export default FirstChild
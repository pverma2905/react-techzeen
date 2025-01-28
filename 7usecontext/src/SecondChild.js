import React, { useContext } from 'react'
import { MyData } from './ContextApiWithHooks';

const SecondChild = () => {
    const {valueData,getSalary} = useContext(MyData);
    const salary = 500000;
    console.log(valueData)
  return (
    <>
     <div>FirstChild</div> 
     <h2>valueData in second child:{valueData}</h2>  
     <button onClick={()=>getSalary(salary)}>Salary</button>
    </>
  )
}

export default SecondChild
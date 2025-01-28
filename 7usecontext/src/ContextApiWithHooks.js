import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

export const MyData = createContext();

const ContextApiWithHooks = () => {
    const [data, setData] =useState(1);
    const [salary, setSalary] = useState(1);

    const getSalary = (val)=>{
        console.log("Salary is ",val)
        setSalary(val)
    }
  return (
    <MyData.Provider value={{valueData:data, getSalary:getSalary}}>
        <>
            <div>ContextApiWithHooks</div>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <FirstChild/>
        </>
    </MyData.Provider>
       
    
  )
}

export default ContextApiWithHooks
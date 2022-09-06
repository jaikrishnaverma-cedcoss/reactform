import React, { useRef, useState } from 'react';


function Task2() {
    const count = useRef(0)
    const [input,setInpu]=useState("")
    const inpuHandler=(event)=>{
          setInpu(event.target.value)
    }
    const ChangeMade=()=>{

        count.current.value=count.current.value.toUpperCase()
    }
    return ( 
        <>
             <div className="row">
            <textarea name="" ref={count} onChange={inpuHandler} vlaue={input} id="" cols="30" rows="10"></textarea>
            <button className='btn btn-success' onClick={ChangeMade}>ToUpper</button>
        </div>
        </>
     );
}

export default Task2;
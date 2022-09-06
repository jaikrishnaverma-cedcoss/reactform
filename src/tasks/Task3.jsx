import React, { useRef } from 'react';
function Task3() {
    let day=useRef();
    const getDate=(event)=>{
        day.current.innerText= event.target.value
    }
    return (
         <>
         <div className="col">
            <select name="" id="" onChange={getDate}>
                <option value="Sun">1</option>
                <option value="Mon">2</option>
                <option value="Tue">3</option>
                <option value="Wed">4</option>
                <option value="Thu">5</option>
                <option value="Fri">6</option>
                <option value="Sat">7</option>
            </select>
            <h2 ref={day} style={{color:"pink"}}></h2>
         </div>
       </> 
    );
}

export default Task3;
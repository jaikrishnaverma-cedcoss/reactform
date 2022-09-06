import React, { useRef, useState } from 'react';


function Task5(props) {
    let arr = [];
    const tempx = useRef();
    const clicked = (event) => {
        if (arr.indexOf(event.target.value) === -1)
            arr.push(event.target.value)
        else
            arr.splice(arr.indexOf(event.target.value), 1)
    }
    const showme = () => {
        tempx.current.innerText = ""
        let xy = arr.map((data) => {
            tempx.current.innerText += data + ","
        })
    }
    return (
        <>
            <p>Hobbies</p>
            <div className="row">
                <label htmlFor="Book Reading">Book Reading</label>
                <input type="checkbox" onClick={clicked} value="Book Reading" name="" id="" />
                <label htmlFor="Playing Chess">Playing Chess</label>
                <input type="checkbox" onClick={clicked} value="Playing Chess" name="" id="" />
                <label htmlFor="Singing">Singing</label>
                <input type="checkbox" onClick={clicked} value="Singing" name="" id="" />
            </div>
            <button className="btn-primary" onClick={showme}>Submit</button>

            <p ref={tempx}></p>
        </>
    );
}

export default Task5;

import './BaseUI.css';
import './App.css';
import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';
import Task3 from './tasks/Task3';
import Task4 from './tasks/Task4';
import { useRef } from 'react';
function App() {
  const classer=useRef();
  const changeClass=()=>
  {
    if(classer.current.className==="App-header")
   classer.current.className="App-headerDark"
   else
   classer.current.className="App-header"
  }
  return (
    <div className="App">
      <header className="App-header" ref={classer}>
        <h3>Q1.Create a text box that accepts only numbers and display the same using buttons</h3>
       <Task1 />
       <h3>Q2.Create a Text area and convert the text into uppercase using button</h3>
       <Task2 />
       <h3>Q3.Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printe</h3>
       <Task3 />
       <h3>Q4.Create a button that converts the forms theme to dark mode/Light mode (Dark mode: Background color Black text white)</h3>
       <Task4  changeClass={changeClass}/>
       <h3>Q5.</h3>
      </header>
    </div>
  );
}

export default App;

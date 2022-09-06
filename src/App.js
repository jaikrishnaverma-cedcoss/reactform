import './BaseUI.css';
import './App.css';
import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';
import Task3 from './tasks/Task3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Q1.Create a text box that accepts only numbers and display the same using buttons</h3>
       <Task1 />
       <h3>Q2.Create a Text area and convert the text into uppercase using button</h3>
       <Task2 />
       <h3>Q3.Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printe</h3>
       <Task3 />
      </header>
    </div>
  );
}

export default App;

import './BaseUI.css';
import './App.css';
import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Q1.Create a text box that accepts only numbers and display the same using buttons</h3>
       <Task1 />
       <h3>Q2.Create a Text area and convert the text into uppercase using button</h3>
       <Task2 />
      </header>
    </div>
  );
}

export default App;

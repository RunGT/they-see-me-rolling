import "./App.css";
import GetDieResult from "./components/GetDieResult";

function App() {
  return (
    <div className="App">
      <h1>Dice roll</h1>
      <GetDieResult />
      <div className="button-container">
        <button>Click to roll</button>
      </div>
    </div>
  );
}

export default App;

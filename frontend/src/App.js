import './App.css';
import miku from './miku.png'; // make sure this is the correct path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-text">Hello this is front end!</p>
        <img src={miku} className="Bottom-logo" alt="miku" />
      </header>
    </div>
  );
}

export default App;

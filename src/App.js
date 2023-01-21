import logo from './assets/photo-1614730321146-b6fa6a46bcb4.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Koonts
        </p>
        <a
          className="App-link"
          href="http://Koonts.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

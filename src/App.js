import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <a>Home111111</a>
          <a>About111111111111</a>
          <a>Contact11111111111</a>
          <a>Shop11111111111111</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
      </header>

      </div>
    </div>
  );
}

export default App;

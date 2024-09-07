import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Shop</a>
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

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home.js';
import { Saved } from './pages/saved.js'
import { Navbar } from './components/Navbar.js';

function App() {

  return (
    <div className="App">
      <h1>APPLE MUSIC SEARCH</h1>
      <Router>
        <Navbar /> {" "}
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/saved" element = {<Saved />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Saved } from './pages/saved'
import { Navbar } from './components/Navbar';

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

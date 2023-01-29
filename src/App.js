import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leaderpage from './pages/Leaderpage';
import News from "./pages/News";
import Community from './pages/Community';

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "scroll" }}>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/Leaderpage"  element={<Leaderpage/>}/>
            <Route path="/News"  element={<News/>}/>
            <Route path="/Community" element={<Community/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

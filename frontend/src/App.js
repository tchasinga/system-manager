import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

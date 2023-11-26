import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Bringphone from './assets/Bringphone';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Animtion' exact element={<Bringphone/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

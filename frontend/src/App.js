import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup'
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/login" element={ !user ?  <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ?  <Singup /> : <Navigate to="/"/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

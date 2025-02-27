import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alogin from './components/Alogin/Alogin';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    // <div className="App">
    //   <Dashboard/>
    // </div>
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Alogin />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

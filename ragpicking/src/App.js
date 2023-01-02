import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';

import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


/*
  This is the application screen which will display all of
  the components and pages. 

  To display the screens, you must import them above and make
  sure to first use 'export default' to export the pages that 
  are displayed here.
*/


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

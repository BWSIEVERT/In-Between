import "./App.css";

// React-Router-Dom Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components for Routing
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

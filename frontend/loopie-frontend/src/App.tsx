import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;

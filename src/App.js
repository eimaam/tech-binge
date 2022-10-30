import { BlogCard } from "./components/BlogCard";
import { NavBar } from "./components/dashboard/NavBar";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"


function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;

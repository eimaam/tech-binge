import { BlogCard } from "./components/BlogCard";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import { Dashboard } from "./components/Admin/Dashboard";
import { CreatePost } from "./components/Admin/CreatePost";


function App() {
  return (
    <Router>
    {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    {/* <Footer /> */}
    </Router>
  );
}

export default App;

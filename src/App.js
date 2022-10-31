import { BlogCard } from "./components/BlogCard";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/Admin/Dashboard";
import { CreatePost } from "./components/Admin/CreatePost";
import { Login } from "./components/Admin/Login";


function App() {
  return (
    <Router>
    {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

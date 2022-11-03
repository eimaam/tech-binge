import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/Admin/Dashboard";
import { CreatePost } from "./components/Admin/CreatePost";
import { Login } from "./components/Admin/Login";
import { useState } from "react";
import { useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { BlogPostPage } from "./components/Homepage/BlogPostPage";
import AuthProvider from "./context/AuthContext";
import { Signup } from "./components/Signup";
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddUsername } from "./components/Admin/AddUsername";


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <Router>
    {/* {loading 
      ? 
      <div className="container">
      <ClimbingBoxLoader color="#116783" />
      </div>
    : */}
    <AuthProvider>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/post" element={<BlogPostPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addUsername" element={<AddUsername />} />
      </Routes>
    </AuthProvider>
    <ToastContainer
          autoClose={3000}
          />
    {/* } */}
      </Router>
  );
}

export default App;

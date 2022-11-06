import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/Admin/dashboard/Dashboard";
import { CreatePost } from "./components/Admin/CreatePost";
import { Login } from "./components/Admin/Login";
import { useState } from "react";
import { useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { BlogPostPage } from "./components/Homepage/BlogPostPage";
import AuthProvider from "./context/AuthContext";
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddDisplayName } from "./components/Admin/AddDisplayName";
import { Signup } from "./components/Admin/Signup";
import { DataProvider } from "./context/DataContext";
import { ProtectedRoutes } from "./Route/ProtectedRoutes";


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
    {loading 
      ? 
      <div className="container">
        <h1><ClimbingBoxLoader color="#116783" /></h1>
      </div>
    :
      <AuthProvider>
        <DataProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:title" element={<BlogPostPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Private Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreatePost />} />
          <Route path="/addname" element={<AddDisplayName />} />
          </Route>
        </Routes>
      </DataProvider> 
    </AuthProvider>
    }
    <ToastContainer
          autoClose={3000}
    />
    </div>
  );
}

export default App;

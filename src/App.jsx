import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import Login from "./Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Hooks/ProtectedRoute";
import Gallery from "./Access/gallery/Gallery";
import Fixtures from "./Access/Fixtures/Fixtures";
import Video from "./Access/video/Video";
import Admin from "./Access/Admin/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="/*/gallery" element={<Gallery />} />
          <Route path="/*/videos" element={<Video />} />
          <Route path="/*/fixtures" element={<Fixtures />} />
          <Route path="/*/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer position="top-left" />
    </>
  );
}

export default App;

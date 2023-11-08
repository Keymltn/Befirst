import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Topheader from "./components/Topheader/Topheader";
import Konkurs from "./pages/Konkurs/Konkurs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Topheader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<h2>Sign In</h2>} />
        <Route path="/signup" element={<h2>Sign Up</h2>} />
        <Route path="/hi" element={<h2>HI</h2>} />
        <Route path="/konkurs" element={<Konkurs />} />
        <Route path="*" element={<h2>404 = NotFound</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

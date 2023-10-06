import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Author from "./Pages/Author/Author";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/author" element={<Author />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Car from "./pages/Car";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <div className="m-0 p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Car />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Contact />} />
          <Route path="/team" element={<Contact />} />
          <Route path="/testimonials" element={<Contact />} />
          <Route path="/faq" element={<Contact />} />
          <Route path="/terms" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Car from "./pages/Car";

function App() {

  return (
    <div className="m-0 p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/car" element={<Car/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

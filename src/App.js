import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./RouteComponents/Home";
import Login from "./RouteComponents/Login";
import AllRecipes from "./RouteComponents/AllRecipes";
import Loading from "./Components/Loading/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
